const quizData = [
    {
        "id": 1,
        "category": "LPIC01",
        "subCategory": "-",
        "difficulty": 3,
        "tags": [],
        "question": "システムの標準シェルをbashにしています。全ユーザ共通のPATH変数の値を定義するファイルとして最も適切なものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "/etc/profile",
                "explanation": "全ユーザがログイン時に参照するファイルです。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/etc/.bashrc",
                "explanation": "存在しないファイルです。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/etc/options",
                "explanation": "存在しないファイルです。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/etc/.bash_profile",
                "explanation": "存在しないファイルです。",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0
        ]
    },
    {
        "id": 2,
        "category": "LPIC01",
        "subCategory": "-",
        "difficulty": 3,
        "tags": [],
        "question": "bashを使っているとき、環境変数を表示できるコマンドをすべて選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "export",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "env",
                "explanation": "環境変数を表示します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "set",
                "explanation": "シェル変数と環境変数を表示します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "top",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "cat",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            1,
            2
        ]
    },
    {
        "id": 3,
        "category": "LPIC01",
        "subCategory": "-",
        "difficulty": 3,
        "tags": [],
        "question": "シェル変数VARを環境変数として利用できるようにしたいとき、実行すべきコマンドを引数やオプションとともに記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "export VAR"
        ],
        "inputExplanation": "シェル変数を環境変数にするには、exportコマンドでエクスポートする必要があります。シェル変数を環境変数にすることで、シェルから起動されるアプリケーションはその変数を引き継ぐことができます。"
    },
    {
        "id": 4,
        "category": "LPIC01",
        "subCategory": "-",
        "difficulty": 3,
        "tags": [],
        "question": "bashシェル上で設定されているエイリアス定義を表示するために実行するべきコマンドを記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "alias"
        ],
        "inputExplanation": "エイリアスの定義と参照はaliasコマンドで行います。エイリアスを削除するにはunaliasコマンドを使います。"
    },
    {
        "id": 5,
        "category": "LPIC01",
        "subCategory": "-",
        "difficulty": 3,
        "tags": [],
        "question": "次のようにシェルスクリプト testscript を実行した際、変数「$#」に格納される値を記述してください。\n$ ./testscript args1 args2",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "2"
        ],
        "inputExplanation": "変数「$#」には、引数の数が格納されます。ここでは引数は「args1」「args2」なので、引数の数は2となります。\nなお、$0には「./testscript」が、$1には「args1」が、$2には「args2」が、$@には「args1 args2」が格納されます。"
    },
    {
        "id": 6,
        "category": "LPIC01",
        "subCategory": "-",
        "difficulty": 3,
        "tags": [],
        "question": "現在の場所をしらべるコマンドを記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "pwd",
            "/bin/pwd"
        ],
        "inputExplanation": "現在の場所を表示するコマンドは、pwd、または、/bin/pwd です。"
    }
];
