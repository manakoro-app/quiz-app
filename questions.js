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
            "ecport VAR"
        ],
        "inputExplanation": "シェル変数を環境変数にするには、exportコマンドでエクスポートする必要があります。シェル変数を環境変数にすることで、シェルから起動されるアプリケーションはその変数を引き継ぐことができます。"
    }
];
