const quizData = [
    {
        "id": 1,
        "category": "LPIC01",
        "subCategory": "102",
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
        "subCategory": "102",
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
        "subCategory": "102",
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
        "subCategory": "102",
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
        "subCategory": "102",
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
        "subCategory": "102",
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
    },
    {
        "id": 7,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "接続されているハードウェアデバイスを調査するために役立つコマンドとして適切なものを2つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "lspci",
                "explanation": "lspicコマンドは接続されているPCIデバイスの一覧を表示します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "cat /proc/hdd",
                "explanation": "/proc/hdd というファイルは存在しません。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "udev",
                "explanation": "udevは動的にデバイスファイルを作成するための仕組みです。本問題の調査には役に立つとは言えません。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "lsusb",
                "explanation": "lsusbはUSBデバイスの情報を表示します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "cat /proc/usb",
                "explanation": "/proc/usb というファイルは存在しません。",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0,
            3
        ]
    },
    {
        "id": 8,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ロードされているカーネルモジュールを表示するコマンドとして適切なものを2つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "lsmod",
                "explanation": "ロードされているカーネルモジュールは lsmodコマンドによって確認できます。 また /proc/modulesファイルをcatしても同様の情報が得られます。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "insmod",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "kmod",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "cat /proc/modules",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "cat /dev/modules",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0,
            3
        ]
    },
    {
        "id": 9,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "起動時にカーネルが出力するメッセージをシステム起動後に確認するコマンドを２つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "kmesg",
                "explanation": "kmesgというコマンドは存在しません。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "systemctl",
                "explanation": "systemctlはsystemdの管理コマンドです。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "dmesg",
                "explanation": "dmesgコマンドやjournalctlコマンドを使うと、起動時に画面表示されるメッセージ等を確認できます。これにより、カーネルがハードウェアをどうのように認識しているかを把握できます。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "journalctl",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "lsmod",
                "explanation": "lsmodはロードしているカーネルモジュールの一覧を表示するコマンドです。",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2,
            3
        ]
    },
    {
        "id": 10,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "電源を入れてからOSが起動するまでのブート手順として適切に並んでいるものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "BIOS、ブートローダ、init、カーネル",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "BIOS、カーネル、ブートローダ、init",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "ブートローダ、BIOS、カーネル、init",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "BIOS、ブートローダ、カーネル、init",
                "explanation": "システムの電源を入れるとBIOSが起動し、そこからGRUBなどのブートローダが起動します。ブートローダはカーネルをロードし、カーネルはシステム初期化後にinitプロセスを実行します。最近では、BIOSの代わりにUEFIが使われることが多く、initプロセスの代わりにsystemdが動作しているディストリビューションも一般的です。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "ブートローダ、BIOS、init、カーネル",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            3
        ]
    }
];

