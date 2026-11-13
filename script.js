let quizHistory = {};

let currentQuestion = null;

let askedQuestions = [];

let sessionCorrect = 0;

let sessionIncorrect = 0;

let answered = false;
let selectedChoiceIndexes = new Set();
let sessionQuestions = [];
let sessionIndex = 0;
let sessionAnswerRecords = []; // 今回の学習のみ（Supabaseには保存しない）

/* ==========================
   Supabase 学習履歴
========================== */

function getHistory() {

    return quizHistory;

}

async function loadHistoryFromSupabase() {

    const {
        data: { user },
        error: userError
    } =
        await supabaseClient.auth.getUser();

	if (userError || !user) {

	    console.error(
	        "ユーザー情報を取得できません",
	        userError
	    );

	    return false;

	}

    const {
        data,
        error
    } =
        await supabaseClient
            .from("quiz_history")
            .select(
                "question_id, correct, incorrect, favorite"
            )
            .eq(
                "user_id",
                user.id
            );

	if (error) {

	    console.error(
	        "学習履歴を取得できません",
	        error
	    );

	    alert(
	        "学習履歴の読み込みに失敗しました。\n" +
	        "通信状態を確認して、ページを再読み込みしてください。"
	    );

	    return false;

	}


    quizHistory = {};

    data.forEach(row => {

        quizHistory[row.question_id] = {
            correct: row.correct,
            incorrect: row.incorrect,
            favorite: row.favorite
        };

    });

	return true;

}


async function saveQuestionHistory(questionId) {

    const item =
        quizHistory[questionId];

    if (!item) {
        return;
    }

    const {
        data: { user },
        error: userError
    } =
        await supabaseClient.auth.getUser();

    if (userError || !user) {

        console.error(
            "ユーザー情報を取得できません",
            userError
        );

        return false;

    }

    const {
        error
    } =
        await supabaseClient
            .from("quiz_history")
            .upsert(
                {
                    user_id: user.id,
                    question_id:
                        Number(questionId),
                    correct:
                        item.correct,
                    incorrect:
                        item.incorrect,
                    favorite:
                        item.favorite,
                    updated_at:
                        new Date().toISOString()
                },
                {
                    onConflict:
                        "user_id,question_id"
                }
            );

	if (error) {

	    console.error(
	        "学習履歴を保存できません",
	        error
	    );

	    alert(
	        "学習履歴の保存に失敗しました。\n" +
	        "通信状態を確認して、ページを再読み込みしてください。"
	    );

	    return false;

	}

	return true;

}

/* ==========================
   カテゴリ初期化
========================== */

function initializeCategories() {

    const select =
        document.getElementById(
            "categoryFilter"
        );

    const categories =
        [...new Set(
            quizData.map(
                q => q.category
            )
        )];

    categories.sort();

    categories.forEach(category => {

        const option =
            document.createElement(
                "option"
            );

        option.value =
            category;

        option.textContent =
            category;

        select.appendChild(
            option
        );

    });

}

/* ==========================
   フィルタ取得
========================== */

/* ==========================
   サブカテゴリ（既存 tags）
   カテゴリに応じて候補を更新
========================== */
function getQuestionSubcategories(question) {
    // Excel から生成される questions.js の subCategory を使用する。
    // 未設定値「-」は候補に表示しない。
    const value = question.subCategory;
    if (Array.isArray(value)) {
        return value.map(v => String(v).trim()).filter(v => v && v !== "-");
    }
    if (value == null) return [];
    const name = String(value).trim();
    return name && name !== "-" ? [name] : [];
}

function updateSubcategories() {
    const category = document.getElementById("categoryFilter").value;
    const select = document.getElementById("tagFilter");
    const tags = [...new Set(quizData
        .filter(q => !category || q.category === category)
        .flatMap(getQuestionSubcategories))].sort((a, b) => a.localeCompare(b, "ja"));

    select.replaceChildren();
    const all = document.createElement("option");
    all.value = "";
    all.textContent = "すべて";
    select.appendChild(all);
    tags.forEach(tag => {
        const option = document.createElement("option");
        option.value = tag;
        option.textContent = tag;
        select.appendChild(option);
    });
    // カテゴリ変更時はサブカテゴリを「すべて」に戻す
    select.value = "";
    updateQuestionCount();
}

function getFilteredQuestions() {

    const category =
        document.getElementById(
            "categoryFilter"
        ).value;

    const difficulty =
        document.getElementById(
            "difficultyFilter"
        ).value;

    const tag =
        document.getElementById(
            "tagFilter"
        ).value;

    const favoriteOnly =
        document.getElementById(
            "favoriteOnly"
        ).checked;

    const incorrectOnly =
        document.getElementById(
            "incorrectOnly"
        ).checked;

    const history =
        getHistory();

    return quizData.filter(q => {

        if (
            category &&
            q.category !== category
        ) {
            return false;
        }

        if (
            difficulty &&
            q.difficulty !==
            Number(difficulty)
        ) {
            return false;
        }

        if (
            tag &&
            !getQuestionSubcategories(q).includes(tag)
        ) {
            return false;
        }

        if (
            favoriteOnly &&
            !history[q.id]?.favorite
        ) {
            return false;
        }

        if (
            incorrectOnly &&
            !history[q.id]?.incorrect
        ) {
            return false;
        }

        return true;

    });

}

/* ==========================
   ランダム重複なし
========================== */

function selectRandomQuestion(
    questions
) {

    const candidates =
        questions.filter(
            q =>
            !askedQuestions.includes(
                q.id
            )
        );

    if (
        candidates.length === 0
    ) {

        return null;

    }

    const question =
        candidates[
            Math.floor(
                Math.random()
                *
                candidates.length
            )
        ];

    askedQuestions.push(
        question.id
    );

    return question;

}

/* ==========================
   学習開始
========================== */

function buildSessionQuestions() {
    const filtered = getFilteredQuestions();
    const shuffled = [...filtered];
    // Fisher-Yates: セッションごとにランダム・重複なし
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const setting = document.getElementById("questionLimit").value;
    const limit = setting === "all" ? shuffled.length : Number(setting);
    return shuffled.slice(0, Math.min(limit, shuffled.length));
}

function startQuiz() {
    sessionQuestions = buildSessionQuestions();
    if (sessionQuestions.length === 0) {
        alert("条件に一致する問題がありません。");
        return;
    }
    sessionIndex = 0;
    sessionAnswerRecords = [];
    askedQuestions = [];
    sessionCorrect = 0;
    sessionIncorrect = 0;
    currentQuestion = null;
    updateQuestionCount();
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";
    document.getElementById("finishScreen").style.display = "none";
    loadQuestion();
}

function showSessionResult(interrupted) {
    const total = sessionCorrect + sessionIncorrect;
    const score = total === 0 ? "0.0" : (sessionCorrect / total * 100).toFixed(1);
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("finishScreen").style.display = "block";
    document.getElementById("reviewDetail").hidden = true;
    document.getElementById("resultOverview").hidden = false;
    document.getElementById("finishResult").innerHTML = `
        <h3>${interrupted ? "途中終了しました" : "今回の結果"}</h3>
        出題予定数：${sessionQuestions.length}問<br>
        回答数：${total}問<br>
        正解数：${sessionCorrect}問<br>
        不正解数：${sessionIncorrect}問<br>
        正答率：${score}%
    `;
    renderSessionAnswerList();
}

function loadQuestion() {
    // 未回答の問題を飛ばさない
    if (currentQuestion && !answered) {
        alert("回答してから「次の問題」を押してください。");
        return;
    }
    if (sessionIndex >= sessionQuestions.length) {
        showSessionResult(false);
        return;
    }
    currentQuestion = sessionQuestions[sessionIndex];
    sessionIndex++;
    askedQuestions.push(currentQuestion.id);
    renderQuestion(currentQuestion);
    updateProgress();
}

function finishQuizEarly() {
    if (!confirm("ここで学習を終了しますか？\n回答済みの学習履歴は保存されます。")) {
        return;
    }
    // 現在の未回答問題は集計しない
    showSessionResult(true);
}

function restartQuiz() {
    startQuiz();
}

/* ==========================
   ホームへ戻る
========================== */

function returnHome() {
    currentQuestion = null;
    sessionQuestions = [];
    sessionAnswerRecords = [];
    sessionIndex = 0;

    document.getElementById(
        "startScreen"
    ).style.display =
        "block";

    document.getElementById(
        "quizScreen"
    ).style.display =
        "none";

    document.getElementById(
        "finishScreen"
    ).style.display =
        "none";

}

/* ==========================
   問題描画
========================== */

function getCorrectIndexes(question) {
    if (Array.isArray(question.answerIndexes)) {
        return question.answerIndexes;
    }
    return [question.answerIndex];
}

function isInputQuestion(question) {
    return question.questionType === "input";
}

function isMultipleAnswer(question) {
    return getCorrectIndexes(question).length > 1;
}

function updateAnswerButton() {
    const btn = document.getElementById("submitAnswerBtn");
    btn.style.display = !isInputQuestion(currentQuestion) && isMultipleAnswer(currentQuestion) ? "block" : "none";
    btn.disabled = answered || selectedChoiceIndexes.size === 0;
}

function toggleMultipleChoice(originalIndex, button) {
    if (answered) return;
    if (selectedChoiceIndexes.has(originalIndex)) {
        selectedChoiceIndexes.delete(originalIndex);
        button.classList.remove("selected-choice");
        button.setAttribute("aria-pressed", "false");
    } else {
        selectedChoiceIndexes.add(originalIndex);
        button.classList.add("selected-choice");
        button.setAttribute("aria-pressed", "true");
    }
    updateAnswerButton();
}

function submitMultipleAnswer() {
    if (!currentQuestion || answered || selectedChoiceIndexes.size === 0) return;
    finishAnswer([...selectedChoiceIndexes]);
}

// 入力式問題（大文字・小文字を区別、前後の空白のみ除去）
function renderInputAnswer(area) {
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "display:flex;flex-direction:column;gap:12px;margin:14px 0;";
    const field = document.createElement("input");
    field.type = "text";
    field.id = "textAnswerInput";
    field.autocomplete = "off";
    field.setAttribute("aria-label", "回答を入力");
    field.placeholder = "回答を入力してください";
    field.style.cssText = "width:100%;box-sizing:border-box;padding:14px;font-size:18px;border:2px solid #94a3b8;border-radius:8px;color:#172b4d;background:#fff;";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-btn";
    button.textContent = "回答する";
    button.disabled = true;
    const submit = () => {
        if (answered || !field.value.trim()) return;
        finishInputAnswer(field.value, field, button);
    };
    field.addEventListener("input", () => { button.disabled = !field.value.trim() || answered; });
    field.addEventListener("keydown", event => {
        if (event.key === "Enter" && !event.isComposing) { event.preventDefault(); submit(); }
    });
    button.addEventListener("click", submit);
    wrapper.append(field, button);
    area.appendChild(wrapper);
}

function finishInputAnswer(rawAnswer, field, button) {
    if (answered) return;
    answered = true;
    field.disabled = true;
    button.disabled = true;
    const entered = rawAnswer.trim();
    const accepted = currentQuestion.acceptedAnswers || [];
    const isCorrect = accepted.some(value => value.trim() === entered);
    const id = currentQuestion.id;
    const history = getHistory();
    if (!history[id]) history[id] = { correct: 0, incorrect: 0, favorite: false };
    const resultArea = document.getElementById("result");
    if (isCorrect) {
        history[id].correct++;
        sessionCorrect++;
        resultArea.textContent = "〇 正解";
        resultArea.className = "result correct";
    } else {
        history[id].incorrect++;
        sessionIncorrect++;
        resultArea.textContent = "× 不正解";
        resultArea.className = "result incorrect";
    }
    const explanationArea = document.getElementById("explanation");
    explanationArea.replaceChildren();
    const line = (label, value) => {
        const p = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = label;
        p.append(strong, document.createTextNode(value));
        explanationArea.appendChild(p);
    };
    line("あなたの回答：", entered);
    line("正解：", accepted.join(" または "));
    if (currentQuestion.inputExplanation) line("解説：", currentQuestion.inputExplanation);
    if (currentQuestion.explanationImage) {
        const img = document.createElement("img");
        img.src = currentQuestion.explanationImage;
        img.alt = "解説画像";
        img.className = "explanation-image";
        explanationArea.appendChild(img);
    }
    recordSessionAnswer(isCorrect);
    saveQuestionHistory(id);
    updateStatistics();
}

function renderQuestion(
    question
) {

    answered = false;
    selectedChoiceIndexes = new Set();

    document.getElementById(
        "category"
    ).textContent =
        question.category;

    document.getElementById(
        "difficulty"
    ).textContent =
        "難易度 ★" +
        question.difficulty;

    document.getElementById(
        "question"
    ).textContent =
        question.question;


		const questionArea =
		    document.getElementById(
		        "question"
		    );

		questionArea.textContent =
		    question.question;


		if (
		    question.questionImage
		) {

		    const img =
		        document.createElement(
		            "img"
		        );

		    img.src =
		        question.questionImage;

		    img.className =
		        "question-image";

		    img.alt =
		        "問題画像";

		    questionArea.appendChild(
		        document.createElement(
		            "br"
		        )
		    );

		    questionArea.appendChild(
		        document.createElement(
		            "br"
		        )
		    );

		    questionArea.appendChild(
		        img
		    );

		}



    document.getElementById(
        "result"
    ).innerHTML = "";

    document.getElementById(
        "explanation"
    ).innerHTML = "";

    const choicesArea =
        document.getElementById(
            "choices"
        );

    choicesArea.innerHTML = "";

    if (isInputQuestion(question)) {
        renderInputAnswer(choicesArea);
        updateFavoriteButton();
        updateAnswerButton();
        return;
    }

    const shuffledChoices =
        question.choices.map((choice, originalIndex) => ({
            ...choice,
            originalIndex
        })).sort(() => Math.random() - 0.5);

	currentQuestion.shuffledChoices =
	    shuffledChoices;

shuffledChoices.forEach(
    (choice, index) => {

        const button =
            document.createElement(
                "button"
            );

        button.className =
            "choice-btn";

        // 表示順に A～H を付与（元データの並び順とは独立）
        const choiceLetter = String.fromCharCode(65 + index);
        const letterSpan = document.createElement("span");
        letterSpan.className = "choice-letter";
        letterSpan.textContent = choiceLetter + ". ";
        button.appendChild(letterSpan);

        if (
            choice.type === "text"
        ) {

            button.appendChild(document.createTextNode(choice.value));

        }
        else if (
            choice.type === "image"
        ) {

            const img =
                document.createElement(
                    "img"
                );

            img.src =
                choice.value;

            img.className =
                "choice-image";

            button.appendChild(
                img
            );

        }

        button.setAttribute("aria-pressed", "false");
        button.addEventListener("click", () => {
            if (isMultipleAnswer(currentQuestion)) {
                toggleMultipleChoice(choice.originalIndex, button);
            } else {
                finishAnswer([choice.originalIndex]);
            }
        });

        choicesArea.appendChild(
            button
        );

    }
);

    updateFavoriteButton();
    updateAnswerButton();

}

/* ==========================
   回答判定
========================== */

function finishAnswer(selectedIndexes) {
    if (answered) return;
    answered = true;
    const correctIndexes = getCorrectIndexes(currentQuestion);
    const isCorrect =
        selectedIndexes.length === correctIndexes.length &&
        selectedIndexes.every(i => correctIndexes.includes(i));

    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        const originalIndex = currentQuestion.shuffledChoices[index].originalIndex;
        if (correctIndexes.includes(originalIndex)) {
            btn.classList.add("correct-choice");
        } else if (selectedIndexes.includes(originalIndex)) {
            btn.classList.add("wrong-choice");
        }
    });
    updateAnswerButton();

    const history =
        getHistory();

    const id =
        currentQuestion.id;

    if (
        !history[id]
    ) {

        history[id] = {

            correct: 0,

            incorrect: 0,

            favorite: false

        };

    }

    const resultArea =
        document.getElementById(
            "result"
        );

    const explanationArea =
        document.getElementById(
            "explanation"
        );

    const selectedNumbers = currentQuestion.shuffledChoices
        .map((choice, i) => selectedIndexes.includes(choice.originalIndex) ? String.fromCharCode(65 + i) : null)
        .filter(n => n !== null);
    const correctNumbers = currentQuestion.shuffledChoices
        .map((choice, i) => correctIndexes.includes(choice.originalIndex) ? String.fromCharCode(65 + i) : null)
        .filter(n => n !== null);

    if (isCorrect) {

        history[id].correct++;

        sessionCorrect++;

        resultArea.textContent =
            "〇 正解";

        resultArea.className =
            "result correct";

    } else {

        history[id].incorrect++;

        sessionIncorrect++;

        resultArea.textContent =
            "× 不正解";

        resultArea.className =
            "result incorrect";

    }

    let html = "";
    html += "あなたの回答 : " + selectedNumbers.join("、") + "<br><br>";
    html += "正解 : " + correctNumbers.join("、") + "<br><br>";
    html += "<strong>各選択肢の解説</strong><br><br>";

	currentQuestion.shuffledChoices
	.forEach(
	    (choice, index) => {

	        const hasExplanation =
	            choice.explanation &&
	            choice.explanation.trim() !== "";

	        const hasImage =
	            choice.explanationImage &&
	            choice.explanationImage.trim() !== "";

	        if (
	            !hasExplanation &&
	            !hasImage
	        ) {

	            return;

	        }

	        html +=
	            `<div id="choice-exp-${index}">`;

	        html += "【" + String.fromCharCode(65 + index) + "】<br>";

	        if (hasExplanation) {

	            html +=
	                choice.explanation +
	                "<br>";

	        }

	        html +=
	            "</div><br>";

	    }
	);

	explanationArea.innerHTML =
	    html;

	currentQuestion.shuffledChoices
	.forEach(
	    (choice, index) => {

	        if (
	            choice.explanationImage &&
	            choice.explanationImage.trim() !== ""
	        ) {

	            const parent =
	                document.getElementById(
	                    `choice-exp-${index}`
	                );

	            if (!parent) {

	                return;

	            }

	            const img =
	                document.createElement(
	                    "img"
	                );

	            img.src =
	                choice.explanationImage;

	            img.className =
	                "choice-explanation-image";

	            img.alt =
	                "選択肢解説画像";

	            parent.appendChild(
	                img
	            );

	        }

	    }
	);

	if (
	    currentQuestion.explanationImage &&
	    currentQuestion.explanationImage.trim() !== ""
	) {

	    const img =
	        document.createElement(
	            "img"
	        );

	    img.src =
	        currentQuestion.explanationImage;

	    img.className =
	        "explanation-image";

	    img.alt =
	        "解説画像";

	    explanationArea.appendChild(
	        document.createElement(
	            "hr"
	        )
	    );

	    explanationArea.appendChild(
	        img
	    );

	}


 recordSessionAnswer(isCorrect);
 saveQuestionHistory(id);

    updateStatistics();

}


/* ==========================
   今回の回答一覧・問題振り返り
   ※表示用スナップショットのみ。累計履歴には影響しない。
========================== */
function recordSessionAnswer(isCorrect) {
    // 採点後の画面を複製し、選択肢の並び・選択状態・解説画像を維持する。
    const snapshot = document.createElement("div");
    for (const id of ["question", "choices", "result", "explanation"]) {
        const source = document.getElementById(id);
        const copy = source.cloneNode(true);
        copy.removeAttribute("id");
        copy.querySelectorAll("[id]").forEach(node => node.removeAttribute("id"));
        // 入力式の入力値はcloneNodeだけでは引き継がれないことがある。
        if (id === "choices" && isInputQuestion(currentQuestion)) {
            const field = copy.querySelector("input");
            if (field) field.value = source.querySelector("input")?.value || "";
        }
        copy.querySelectorAll("button, input").forEach(node => {
            node.disabled = true;
            node.tabIndex = -1;
        });
        snapshot.appendChild(copy);
    }
    sessionAnswerRecords.push({
        number: sessionIndex,
        questionId: currentQuestion.id,
        title: currentQuestion.question,
        category: currentQuestion.category,
        isCorrect,
        snapshot
    });
}

function renderSessionAnswerList() {
    const area = document.getElementById("sessionAnswerList");
    area.replaceChildren();
    if (sessionAnswerRecords.length === 0) {
        area.textContent = "回答済みの問題はありません。";
        return;
    }
    sessionAnswerRecords.forEach((record, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "review-list-item";
        const mark = document.createElement("span");
        mark.className = record.isCorrect ? "review-correct" : "review-incorrect";
        mark.textContent = record.isCorrect ? "〇 正解" : "× 不正解";
        const name = document.createElement("span");
        name.className = "review-question-title";
        name.textContent = `第${record.number}問　${record.title}`;
        const arrow = document.createElement("span");
        arrow.textContent = "›";
        button.append(mark, name, arrow);
        button.addEventListener("click", () => showReviewDetail(index));
        area.appendChild(button);
    });
}

function showReviewDetail(index) {
    const record = sessionAnswerRecords[index];
    if (!record) return;
    document.getElementById("resultOverview").hidden = true;
    const detail = document.getElementById("reviewDetail");
    detail.hidden = false;
    document.getElementById("reviewPosition").textContent =
        `第${record.number}問 / 回答済み${sessionAnswerRecords.length}問`;
    const content = document.getElementById("reviewContent");
    content.replaceChildren();
    const category = document.createElement("p");
    category.className = "review-category";
    category.textContent = record.category || "";
    content.append(category, record.snapshot.cloneNode(true));
    document.getElementById("reviewPrevBtn").disabled = index === 0;
    document.getElementById("reviewNextBtn").disabled = index === sessionAnswerRecords.length - 1;
    document.getElementById("reviewPrevBtn").onclick = () => showReviewDetail(index - 1);
    document.getElementById("reviewNextBtn").onclick = () => showReviewDetail(index + 1);
    detail.scrollIntoView({behavior:"auto", block:"start"});
}

function closeReviewDetail() {
    document.getElementById("reviewDetail").hidden = true;
    document.getElementById("resultOverview").hidden = false;
    document.getElementById("finishScreen").scrollIntoView({behavior:"auto", block:"start"});
}

/* ==========================
   お気に入り
========================== */

function updateFavoriteButton() {

    const history =
        getHistory();

    const favorite =
        history[
            currentQuestion.id
        ]?.favorite;

    document.getElementById(
        "favoriteBtn"
    ).textContent =
        favorite
        ? "★ お気に入り済"
        : "☆ お気に入り";

}

function toggleFavorite() {

    const history =
        getHistory();

    const id =
        currentQuestion.id;

    if (
        !history[id]
    ) {

        history[id] = {

            correct: 0,

            incorrect: 0,

            favorite: false

        };

    }

    history[id].favorite =
        !history[id].favorite;

saveQuestionHistory(id);

    updateFavoriteButton();

    updateStatistics();

}

/* ==========================
   学習統計
========================== */

function updateStatistics() {

    const history =
        getHistory();

    let totalCorrect = 0;

    let totalIncorrect = 0;

    let favoriteCount = 0;

    let weakCount = 0;

    Object.values(history)
        .forEach(item => {

            totalCorrect +=
                item.correct;

            totalIncorrect +=
                item.incorrect;

            if (
                item.favorite
            ) {

                favoriteCount++;

            }

            if (
                item.incorrect >
                item.correct
            ) {

                weakCount++;

            }

        });

    const totalAnswer =
        totalCorrect +
        totalIncorrect;

    let accuracy = 0;

    if (
        totalAnswer > 0
    ) {

        accuracy =
            (
                totalCorrect
                /
                totalAnswer
                *
                100
            ).toFixed(1);

    }

    document.getElementById(
        "totalAnswer"
    ).textContent =
        totalAnswer;

    document.getElementById(
        "totalCorrect"
    ).textContent =
        totalCorrect;

    document.getElementById(
        "totalIncorrect"
    ).textContent =
        totalIncorrect;

    document.getElementById(
        "accuracy"
    ).textContent =
        accuracy + "%";

    document.getElementById(
        "favoriteCount"
    ).textContent =
        favoriteCount;

    document.getElementById(
        "weakCount"
    ).textContent =
        weakCount;

}

/* ==========================
   問題数表示
========================== */

function updateQuestionCount() {

    const filtered =
        getFilteredQuestions();

    document.getElementById(
        "totalQuestionCount"
    ).textContent =
        `登録問題数 : ${filtered.length}問`;

}

function updateProgress() {
    document.getElementById("questionCounter").textContent =
        `現在位置 : ${sessionIndex} / ${sessionQuestions.length}`;
}

/* ==========================
   イベント登録
========================== */

document.getElementById("reviewBackBtn")
    .addEventListener("click", closeReviewDetail);

document.getElementById("submitAnswerBtn")
    .addEventListener("click", submitMultipleAnswer);

document
    .getElementById(
        "nextBtn"
    )
    .addEventListener(
        "click",
        loadQuestion
    );

document
    .getElementById(
        "favoriteBtn"
    )
    .addEventListener(
        "click",
        toggleFavorite
    );

document
    .getElementById(
        "restartBtn"
    )
    .addEventListener(
        "click",
        restartQuiz
    );

document
    .getElementById(
        "startBtn"
    )
    .addEventListener(
        "click",
        startQuiz
    );

document
    .getElementById(
        "returnHomeBtn"
    )
    .addEventListener(
        "click",
        returnHome
    );

document
    .getElementById(
        "categoryFilter"
    )
    .addEventListener(
        "change",
        updateSubcategories
    );

document
    .getElementById(
        "difficultyFilter"
    )
    .addEventListener(
        "change",
        updateQuestionCount
    );

document
    .getElementById(
        "tagFilter"
    )
    .addEventListener(
        "change",
        updateQuestionCount
    );

document
    .getElementById(
        "favoriteOnly"
    )
    .addEventListener(
        "change",
        updateQuestionCount
    );

document
    .getElementById(
        "incorrectOnly"
    )
    .addEventListener(
        "change",
        updateQuestionCount
    );

/* ==========================
   初期化
========================== */

async function initializeApp() {

    initializeCategories();
    updateSubcategories();

	const historyLoaded =
	    await loadHistoryFromSupabase();

	if (!historyLoaded) {

	    console.error(
	        "学習履歴を読み込めなかったため、初期化を中止しました。"
	    );

	    return;

	}

	updateStatistics();

	updateQuestionCount();

    document.getElementById(
        "startScreen"
    ).style.display =
        "block";

    document.getElementById(
        "quizScreen"
    ).style.display =
        "none";

    document.getElementById(
        "finishScreen"
    ).style.display =
        "none";

}

initializeApp();
// 途中終了ボタン
document.getElementById("finishEarlyBtn")
    .addEventListener("click", finishQuizEarly);
