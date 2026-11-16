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
    },
    {
        "id": 11,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ブートローダにGRUBを使っています。起動時にカーネルオプションとして「root=/dev/sda3」を指定したい場合、カーネル選択メニューが表示されているときにどのキーを押せばよいですか。もっとも適切なものを1つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "S",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "E",
                "explanation": "GRUBでは、カーネル選択メニューが表示されているに「A」もしくは「E」のキーを押せば、カーネルオプションを編集できるようになります。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "P",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "K",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "O",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            1
        ]
    },
    {
        "id": 12,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "SysVinit を採用したシステムで30分後にシステムを再起動したいと思います。実行すべきコマンドを、必要なオプション、引数とともに記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "shutdown -r +30"
        ],
        "inputExplanation": "SysVinit を採用したシステムで再起動を行うには、shutdown -r コマンドを使います。30分後は「+30」 と指定します。"
    },
    {
        "id": 13,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "systemd のサービス sshd.service を開始し、システム起動時に自動的に開始されるようにしようとしています。実行すべきコマンドを2つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "systemctl start sshd.service",
                "explanation": "サービスを開始するには「systemd start Unit名」です。 引数の順序に注意してください。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "systemctl  sshd.service start",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "systemctl enable sshd.service",
                "explanation": "システム起動時に自動的にサービスを開始するには「systemctl enable Unit名」です。引数の順序に注意してください。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "systemctl sshd.service enable",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "systemctl on sshd.service",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "systemctl sshd.service on",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0,
            2
        ]
    },
    {
        "id": 14,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "シャットダウン前に、ユーザにシャットダウンを予告しようとしてます。各ユーザの端末にメッセージを表示するには、どのコマンドを実行すればよいかを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "shutdown now ”Message...”",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "shutdown -k now ”Message...”",
                "explanation": "「-k」 オプション を指定して shutdownコマンドを実行すると、実際にはshutdownは行わず、メッセージを各ユーザの端末上に表示します。initコマンドではメッセージを出力することができません。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "shutdown -M ”Message...”",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "shutdown -m now ”Message...”",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "init 6 -m ”Message...”",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            1
        ]
    },
    {
        "id": 15,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "サーバを構築する際、ルートパーティションとは別のパーティションを利用した方がよいと考えられるディレクトリを2つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "/sbin",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/etc",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/mnt",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/home",
                "explanation": "中規模・大規模なサーバ構築においては、パーティションの設定は重要です。すべてのディレクトリを1つのパーティションに格納してしまうと、どこか特定のディレクトリに大量のファイルが書き込まれるだけで、システムは利用不可能な状況に追い込まれることもありえます。たとえば、/homeはユーザ数が増えれば多くの領域を必要とするため、別のパーティションに置いた方がよいでしょう。また、/var はログファイルなどが格納され肥大化しやすいので、別パーティションにすることが好ましいです。さらに、/home、/var はバックアップの観点からも別パーティションにすることが望まれます。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/var",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            3,
            4
        ]
    },
    {
        "id": 16,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "スワップ領域の容量の目安としてもっとも適切なものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "物理メモリの10%",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "物理メモリの半分",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "物理メモリの2倍程度",
                "explanation": "スワップ領域は、物理メモリが不足してしまったときに、仮想的なメモリとして利用するための領域です。一般的に、スワップ領域用のパーティションは、物理メモリの2倍程度を確保するのが適当とされています。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "ハードディスク容量の10%",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "ハードディスク容量の5%",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2
        ]
    },
    {
        "id": 17,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ブートローダとしてGRUBをインストールしようとしています。ハードディスク /dev/sda の MBRにGRUBをインストールするコマンドを、適切な引数ととともに記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "grub-install /dev/sda"
        ],
        "inputExplanation": "GURBをインストールするにはgrub-installコマンドを使います。引数として/dev/sdaを指定すると、/dev/sdaのMBRにGRUBをインストールします。"
    },
    {
        "id": 18,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "GRUB2の設定では、/etc/default/grubに設定を記述し、______コマンドを実行すると、設定がgrub.cfgファイルに書き込まれます。下線部に当てはまるコマンドを記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "grub-mkconfig"
        ],
        "inputExplanation": "GRUB2の設定ファイルは/boot/grub/grub.cfgですが、直接編集しません。/etc/default/grubで設定を行い、grub-mkconfigコマンドを実行すると/boot/grub/gurb.cfgが生成されます。"
    },
    {
        "id": 19,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "/bin/bashが必要とする共有ライブラリの一覧を表示するコマンドを、引数とともに記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "ldd /bin/bash"
        ],
        "inputExplanation": "lddコマンドを使って、プログラムの実行に必要な共有ライブラリを表示できます。引数にはプログラムファイル（コマンドの絶対パス）を指定します。"
    },
    {
        "id": 20,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "Ubunthでサーバを運用しています。メールサーバのPostfixをインストールしたとき、対話的なインターフェースで基本設定を済ませましたが、設定にミスがありました。そこで、インストール時に自動的に実行される、対話的な設定プログラムを再度実行して設定をしようとしています。どのコマンドを使えばよいか選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "dpkg --setup postfix",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "apt reconfig postfix",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "dpkg --reconfig postfix",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "apt setup postfix",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "dpkg --reconfigure postfix",
                "explanation": "UbuntuやDebian GNU/Linuxでパッケージをインストールした際の対話的な基本設定は、dpkg-reconfigureコマンドを実行することで設定し直せます。",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            4
        ]
    },
    {
        "id": 21,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "Debian GNU/Linux で APT を使ってパッケージ管理をしています。パッケージ情報のキャッシュを更新するためには、apt-get____________コマンドを実行します。下線部に当てはまるサブコマンドを記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "update"
        ],
        "inputExplanation": "apt-get update を実行すると、パッケージ情報や依存関係情報のキャッシュが最新の状態に更新されます。"
    },
    {
        "id": 22,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "apt-cahfe コマンドを使って、zsh パッケージが依存するパッケージの情報を表示しようとしています。っ下線部に当てはまるサブコマンドを記述してください。\n\n$ apt-cache ______________ zsh",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "depends"
        ],
        "inputExplanation": "apt-cache depends で、指定したパッケージが依存するペッケージの情報を表示します。指定したパッケージに依存するパッケージの情報は、apt-cache rdepends で検索します。"
    },
    {
        "id": 23,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "WebサイトからダウンロードしたPRMファイルをインストールしようとしたところ、次のように表示されました。\n\n#rpm -ivh vsftpd-3.0.2-22.el7.x86_64.rpm\nPreparing…\n#############[100%]\npackage vsftpd-3.0.2-25.el7.x86_64(which is newer than vsftpd-3.0.2-22.el7.x86_64)is already installed\nfile /usr/sbin/vsftpd from install of vsftpd-3.0.2-22.el7.x86_64 conflicts with file from package vsftpd-3.0.2-25.el7.x86_64\n# rpm -q vsftpd\nvsftpd-3.0.2-25.el7.x86_64\n\n上記に関する説明として適切なものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "指定した vsftpd パッケージのインストールは正常に終了した",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "より新しいバージョンのvsftpdパッケージが既にインストールされていた",
                "explanation": "出力メッセージには「～ is alrady installed」 とあるので、すでに同名のパッケージがインストールされていたことがわかります。インストール済のパッケージバージョンは「3.0.2-25.el7」であり、これはインストールしようとしたバージョン「3.0.2-22.el7」よりも新しいです。アーキテクチャは「x86_64」で、インストール済みのパッケージのアーキテクチャも同じです。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "指定したvsftpdパッケージはインストールされたが依存関係のエラーが発生した",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "依存関係のエラーが発生したためにインストール作業は失敗した",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "インストールしようとしたパッケージのアーキテクチャがOSのアーキテクチャと一致しなかった",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            1
        ]
    },
    {
        "id": 24,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "RPMパッケージ管理システムにおいて、インストール済みのlvパッケージがどのようなパッケージに依存しているかを表示するコマンドを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "rpm -ql lv",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "rpm -qR lv",
                "explanation": "rpmコマンドであるパッケージが依存しているパッケージやライブラリの情報を表示するには、-q（--query）オプションに加えて-R（--requires）オプションを指定します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "rpm -qP lv",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "rpm -qlp lv",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "rpm -qd lv",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            1
        ]
    },
    {
        "id": 25,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "yum ＿＿＿＿＿＿＿＿＿＿＿＿コマンドを実行すると、システムの全パッケージに対するアップデートを実行したときに対象となるパッケージの情報表示のみを行います。下線部に当てはまるサブコマンドを記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "check-update"
        ],
        "inputExplanation": "yum check-updateを実行すると、yum updateを実行したときにアップデート対象となるパッケージの一覧を表示します。"
    },
    {
        "id": 26,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "クラウドサービスにおいて、あらかじめ用意されたOSイメージに基づいて、利用者の要求に応じて提供されるアプリケーション実行環境のことを何と呼びますか。適切なものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "IaaS",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "Docker",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "インスタンス",
                "explanation": "クラウドサービス上で提供される、独立したOSのように扱えるアプリケーション実行環境をインスタンスといいます。IaaSやSaaSはクラウドサービスの形態、Dockerはコンテナを作成・運用するソフトウェアです。ミドルウェアは、データベース管理ソフトやプログラミング言語の実行環境など、OSとアプリケーションの間に入る種類のソフトウェアです。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "SaaS",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "ミドルウェア",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2
        ]
    },
    {
        "id": 27,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "次のコマンドを実行した結果として、適切なものを1つ選択してください。\n\n$ cd /etc ; export VAR=`pwd` ; echo $VAR",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "pwd",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "VAR",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "$VAR",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/etc",
                "explanation": "「 `（バッククォーテーション）」によって囲まれた文字は、その文字をコマンドとして実行したときの実行結果を表します。したがって、「`pwd`」はpwdコマンドの実行結果を表します。ここでは、カレントディレクトリである「/etc」が変数VARの値となります。",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            4
        ]
    },
    {
        "id": 28,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "次のコマンドを実行した結果として、適切なものを選択してください。 \n\n$ VAR=\"\\\"text\\\\\" ; echo $VAR",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "text",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "text\\\\",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "\"text\\",
                "explanation": "変数に文字「\"」を含めたい場合は、文字列の終わりを表す \" と解釈されないよう \\ を付けて区別します。「 \\\" 」は文字列「 \" 」を表します。単に「 \\ 」を表したいときには「 \\\\ 」とします。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "\\\"text",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "\\\"text\\\\",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2
        ]
    },
    {
        "id": 29,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "bashのコマンド履歴は、ユーザーのホームディレクトリ直下のファイル＿＿＿＿＿＿＿＿に格納されます。このファイルは変数＿＿＿＿＿＿＿＿で指定できます。それぞれの下線部に当てはまる組み合わせとして適切なものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": ".history、HISTSIZE",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": ".bash_history、HISTRYFILE",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": ".bashrc、HISTFILE",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": ".bash_history、HISTFILE",
                "explanation": "bashのコマンド履歴は~/.bash_historyに格納されます。このファイルは変数HISTFILEで定義します。HISTSIZEは保存するコマンド履歴数を、HISTFILESIZEはHISTFILEで定義したファイルに保存する履歴数を指定します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": ".bash_histfile、BASH_HISTORY",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            3
        ]
    },
    {
        "id": 30,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "システム管理コマンドであるmountコマンドのオンラインマニュアルを、セクションを指定して表示させるコマンドを、引数やオプションとともに記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "man 8 mount"
        ],
        "inputExplanation": "オンラインマニュアルでは、passwdのように同一名称のマニュアルが複数のセクションに存在していることがあります。したがって、オンラインマニュアルを表示する際、セクション番号を指定しないと目的のマニュアルを参照できない場合があります。"
    },
    {
        "id": 31,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "file.txtは50行からなるファイルです。このファイルのちょうど真ん中10行だけを表示するコマンドをすべて選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "head -n 20 file.txt | tail -n 20",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "head -n 30 file.txt | tail -n 10",
                "explanation": "設問は50行あるファイルの21行目から30行目までを表示することを要求しているので、方法としては「上から30行分を取り出してから、下から10行分を表示する」か「下から30行分を取り出してから、上から10行分を表示する」の2通りがあります。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "tail -n 10 file.txt | head -n 40",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "tail -n 20 file.txt | head -n 20",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "tail -n 30 file.txt | head -n 10",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            1,
            4
        ]
    },
    {
        "id": 32,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ファイルclients.txtの内容をソートし、重複する行は1行にまとめたいと考えています。下線部に当てはまる適切なコマンドを記述してください。 \n\n$ cat clients.txt | sort | ＿＿＿＿＿＿＿＿＿＿＿＿",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "uniq"
        ],
        "inputExplanation": "uniqコマンドを使うと、重複する内容の行を1行にまとめることができます。あらかじめsortコマンドでソートしておく必要があります。"
    },
    {
        "id": 33,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "data.csvファイルはテキストファイルです。このファイルには、1行に1つのレコードが記録され、それぞれの行はコロン（:）で区切られた7個の値が格納されています。例を挙げます。 \n\n3:fred:bash:Linux:JP:ubuntu:18.04 \n\nこのファイルの各行から2番目と5番目の値を取り出すコマンドを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "cut -d: -f2,5 data.csv",
                "explanation": "cutコマンドは各行から特定のフィールドを取り出して出力します。-dオプションでフィールドとフィールドの区切りとなる文字を指定します（デフォルトはタブ）。また-fオプションで取り出したいフィールドの番号を指定します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "grep -d\":\" -c2,5 data.csv",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "cut --colon -s 1,5 data.csv",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "grep -c --field=2,5 data.csv",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "sort -d\":\" -f 2,5 data.csv",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0
        ]
    },
    {
        "id": 34,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "/home/staff/tmpディレクトリ以下にあるファイルやサブディレクトリを/home/staff/doc以下に移動するコマンドを、必要な引数やオプションとともに記述してください。なお、移動先にすでに同一名のファイルがある場合は、確認なしで上書きするものとします。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "mv -f /home/staff/tmp/* /home/staff/doc"
        ],
        "inputExplanation": "移動先に同名のファイルが存在した場合に強制的に上書きさせるには、-fオプションを付けます。"
    },
    {
        "id": 35,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "カレントディレクトリにfile3、file3.txt、file313、file33、file33.txtの5つのファイルがあるとき、以下のコマンドを実行すると表示されるファイルをすべて選択してください。 \n\n$ ls file[123]*3*",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "file3",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "file3.txt",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "file313",
                "explanation": "[123]は「1もしくは2もしくは3いずれか1文字」を表します。*は0文字以上の文字列を表します。したがって「file[123]*3*」は、 ● fileで始まり、 ● 1もしくは2もしくは3いずれか1文字があり、 ● その直後もしくは何文字かをおいて3がある ● 場合によってはその後何らかの文字列が続く という条件になります。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "file33",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "file33.txt",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2,
            3,
            4
        ]
    },
    {
        "id": 36,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "access_logファイルが配置されているディレクトリを探すコマンドとして、次の下線部に当てはまる組み合わせを選択してください。ただし、access_logは /var以下にあることはわかっているものとします。 \n\n# find _____ _____ access_log",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "-name , =",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "-filename , =",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/var , -name",
                "explanation": "ファイルを検索するときに有用なコマンドがfindです。findを利用すると、指定したディレクトリの中から条件を満たすファイルを探すことができます。検索ディレクトリは最初の引数として指定します。ファイル名を条件にして検索するには、-nameを利用します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/var/* , -filename",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/var , --file",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2
        ]
    },
    {
        "id": 37,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "シェル変数を環境変数として設定するためのコマンドを記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "export"
        ],
        "inputExplanation": "シェル変数は、定義されたシェル内で参照可能な変数です。シェル変数をエクスポートして環境変数とすると、シェルから起動したコマンドやサブシェルにも変数とその値が引き継がれます。"
    },
    {
        "id": 38,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "以下のコマンドの実行結果として適切な記述を1つ選択してください。 \n\n$ tr a-z A-Z < /var/log/messages > /dev/null 2>&1",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "/var/log/messages内の小文字が大文字に変換されて表示される",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/var/log/messages内の大文字が小文字に変換されて表示される",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/var/log/messages内の小文字を大文字に変換し、/dev/nullファイルに出力する",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/var/log/messages内の大文字を小文字に変換し、/dev/nullファイルに出力する",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "何も表示されない",
                "explanation": "trコマンドの処理結果はリダイレクトで/dev/nullに出力されています。/dev/nullは書き込まれたデータがすべて消えてしまう特殊ファイルであり、「2>&1」は「標準エラー出力も標準出力に送る」ということなので、結果的に何も表示されません。「> /dev/null 2>&1」は実行結果をどこにも出力したくない場合の常套句です。",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            4
        ]
    },
    {
        "id": 39,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "dmesgコマンドの実行結果を、リダイレクトを使ってdmesg.logファイルとして保存しようとしています。適切なコマンドを記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "dmesg > dmesg.log"
        ],
        "inputExplanation": "リダイレクト「>」を使ってコマンドの出力をファイルに保存できます。"
    },
    {
        "id": 40,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "findコマンドで検索した結果を使ってファイルを削除したいと思います。下線部に当てはまるコマンドを記述してください。 \n\n# find /tmp -atime +60 | ＿＿＿＿ rm -i",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "xargs"
        ],
        "inputExplanation": "xargsコマンドは、標準入力から取得したデータを引数として、指定されたコマンドを実行します。この設問の場合、findコマンドが検索したファイル（最終アクセスから60日を超える日数が経過した/tmp以下のファイル）について、逐次rmコマンドを実行します。"
    },
    {
        "id": 41,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "configureスクリプトを実行したときに表示されるメッセージをconfigure.logファイルにも保存したい場合、下線部に当てはまる適切なコマンドを記述してください。 \n\n$ ./configure | _____ configure.log",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "tee"
        ],
        "inputExplanation": "多くのコマンドはメッセージを標準出力に出力し、画面に表示します。しかし、画面に表示するのと同時にファイルに保存しておきたい場合もあります。このようなときに利用するのがteeコマンドです。"
    },
    {
        "id": 42,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "実行中のrsyslogdプロセス（PIDは33272）にHUPシグナルを送ろうとしています。適切なコマンドを2つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "kill -s HUP 33272",
                "explanation": "killコマンドやkillallコマンド、pkillコマンドを使ってプロセスにシグナルを送信できます。killコマンドではPIDを、killallコマンドやpkillコマンドではプロセス名を指定します。シグナルの種類は、-sオプションで指定するか、「-シグナルID」「-シグナル名」で指定します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "kill -HUP rsyslogd",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "kill -p 33272 -s HUP",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "killall -HUP rsyslogd",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "killall -s HUP -p 33272",
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
        "id": 43,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "updatedbコマンドをバックグラウンドで実行しようとしています。下線部に当てはまる記号を記述してください。 \n\n# updatedb ＿＿＿＿",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "&"
        ],
        "inputExplanation": "コマンドラインの末尾に「&」を付けると、コマンドはバックグラウンドで実行されます。updatedbコマンドはファイル名データベースを更新します。"
    },
    {
        "id": 44,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "以下のとおり説明されるコマンドを記述してください。 このコマンドを実行すると、システム状況とプロセスの実行状況が表示される画面に切り替わる。画面上部には実行プロセス数、CPU処理やメモリの使用状況が表示される。その下には、プロセスごとの実行状況が表示される。画面はデフォルトでは3秒ごとに更新されるので、システムの状況を継続的に監視するのに便利である。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "top"
        ],
        "inputExplanation": "説明文にあるのはtopコマンドです。topコマンドは、システムの状況を継続的に監視するために使われます。"
    },
    {
        "id": 45,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ログアウト後も実行を継続させるように指定してプログラムを起動したいと思います。利用するコマンドを5文字で記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "nohup"
        ],
        "inputExplanation": "ある端末で実行したプロセスは、通常はその端末からログアウトすると終了してしまいます。nohupコマンドを使うと、ログアウト後もプロセスを動作させることができます。"
    },
    {
        "id": 46,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "実行中のプロセス（PIDは20340）の優先度をもっとも低く変更したい場合、下線部に当てはまる適切なコマンドを記述してください。 \n\n# ＿＿＿＿＿＿＿＿ 19 -p 20340",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "renice"
        ],
        "inputExplanation": "実行中のプロセスの優先度を変更するには、reniceコマンドを使います。引数には新しい優先度とプロセスID（-pオプション）を指定します。"
    },
    {
        "id": 47,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "実行中のプロセスの優先度を確認したい場合に利用できるコマンドを2つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "ps",
                "explanation": "プロセスの優先度は、psコマンドやtopコマンドで表示することができます。他の選択肢にあるコマンドでは確認できません。",
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
                "value": "nice",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "free",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "uptime",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0,
            1
        ]
    },
    {
        "id": 48,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "httpd.confファイルから、行頭が「#」である行を除いて表示するコマンドを次の中から選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "grep -v ^# httpd.conf",
                "explanation": "特定の文字列が入っている行を抽出するにはgrepコマンドを利用しますが、特定の文字列が入っていない行を抽出するためにはgrepコマンドに-vオプションを付けます。行頭は正規表現「^」で、行末は「$」で表されます。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "grep -z ^# httpd.conf",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "grep -z $# httpd.conf",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "cat -v ^# httpd.conf",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "cat -z $# httpd.conf",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0
        ]
    },
    {
        "id": 49,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ファイルdata.txt内にある「Tokyo」という文字列をすべて「TOKYO」に置換して標準出力に出力したいので、次のコマンドを実行しました。 \n\n$ cat data.txt \n1 MZ-1200,Tokyo,Chiba,Kanagawa,Tokyo,Kanagawa,Akita \n2 MZ-2000,Kanagawa,Tokyo,Tokyo,Kanagawa,Chiba \n3 MZ-2200,Tochigi,Tokyo,Shizuoka,Kyoto \n（……） \n$ sed s/Tokyo/TOKYO/ data.txt \n1 MZ-1200,TOKYO,Chiba,Kanagawa,Tokyo,Kanagawa,Akita \n2 MZ-2000,Kanagawa,TOKYO,Tokyo,Kanagawa,Chiba \n3 MZ-2200,Tochigi,TOKYO,Shizuoka,Kyoto \n（……） \n\n実行結果を見ると、一部しか置換されていません。すべての「Tokyo」という文字列を「TOKYO」に置換するための操作としてもっとも適切なものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "sedコマンドを実行する前にsortコマンドを実行しソートしておく",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "大文字と小文字を区別するようcオプションを追加する",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "「sed /Tokyo/TOKYO/」のように指定する",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "マッチした箇所すべてを置換するようgスイッチを追加する",
                "explanation": "「sed s/A/B/」とすると、文字列AをBに置換して標準出力に出力します。ただし、1行に複数の文字列Aがあった場合は最初のものしか置換されないので、すべて置換したい場合は gスイッチを付ける必要があります。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "「sed -f /Tokyo/TOKYO/」のように指定する",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            3
        ]
    },
    {
        "id": 50,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "emacsの扱いに慣れているため、デフォルトのエディタをemacsに設定したいと考えています。下線部に指定すべき環境変数名を記述してください。 \n\n$ export ＿＿＿＿＿＿＿=/usr/bin/emacs",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "EDITOR"
        ],
        "inputExplanation": "デフォルトのエディタは環境変数EDITORで設定できます。エディタのパス（この場合は/usr/bin/emacs）をセットしてください。"
    },
    {
        "id": 51,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "viでファイルの編集をしています。カーソル位置を含めて3行を削除するには、コマンドモードでどう操作すればよいかを、3文字で記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "3dd"
        ],
        "inputExplanation": "行削除はddコマンドを使います。コマンドの直前に繰り返し回数を指定すればよいので、コマンドモードで「3dd」と入力します。"
    },
    {
        "id": 52,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "viでファイルの編集をしています。カーソル位置よりファイルの末尾に向かってキーワード検索をしたい場合、コマンドモードにおいて最初に入力すべき文字を記述してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "/"
        ],
        "inputExplanation": "「/キーワード」とすると後方へのキーワード検索、「?キーワード」とすると前方へのキーワード検索を行います。この操作はコマンドモードで行います。"
    },
    {
        "id": 53,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ext3ファイルシステムを/dev/sda4に作成したい場合に、適切なコマンドをすべて選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "mke2fs /dev/sda4",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "mke3fs /dev/sda4",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "mkfs -t ext3 /dev/sda4",
                "explanation": "ext3ファイルシステムを作成するには、mkfsコマンドでファイルシステムタイプをext3と指定します。これはmkfs.ext3コマンドの実行と同じです。また、mke2fsコマンドに-jオプションを付けてもかまいません。mke3fsというコマンドはありません。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "mke2fs -j /dev/sda4",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "mkfs.ext3 /dev/sda4",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2,
            3,
            4
        ]
    },
    {
        "id": 54,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "パーティションを作成したり削除したりできるコマンドを3つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "mkfs",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "pdisk",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "gdisk",
                "explanation": "パーティションの作成・削除はfdisk、gdisk、partedといったコマンドで行えます。mkfsはファイルシステムの作成コマンドです。pdiskというコマンドはありません。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "fdisk",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "parted",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2,
            3,
            4
        ]
    },
    {
        "id": 55,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "/vmディレクトリ以下でのファイル作成が失敗するようになりました。ファイルへの追加書き込みは成功します。原因を確認しようと、以下のコマンドを実行しました。\n\n$ ls -ld /vm\ndrwxr-xr-x 243 root root 16384 Nov 28 09:33 /vm\n$ df -h\nFilesystem    Size Used Avail Use% Mounted on\\\nudev          967M    0  967M   0% /dev\ntmpfs         200M 1.6M  198M   1% /run\n/dev/sda1     199M  62M  136M  32% /boot\n/dev/sda2      63G 7.2G   53G  12% /\n/dev/sda5     9.9G 4.6G  4.2G  59% /vm\n（以下省略）\n$ df -i\nFilesystem    Inodes  IUsed    IFree IUse% Mounted on\nudev          247465    462   247003    1% /dev\ntmpfs         255140    829   254311    1% /run\n/dev/sda1      48254    172    48082    1% /boot\n/dev/sda2    4194304 178366  4015938    5% /\n/dev/sda5    2875946 2875946       0   99% /vm\n（以下省略） 原因としてもっとも考えられる理由を選択してください。/、/boot、/vmはいずれもext4ファイルシステムです。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "一般ユーザーは/vm以下に書き込めないようになっているから",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/vmディレクトリが存在しないから",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/dev/sda5に空き容量が存在しないから",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/dev/sda5の空きiノードがなくなったから",
                "explanation": "df -iコマンドの実行結果から、/vm（/dev/sda5）の残りiノード数（IFree欄）が0であることがわかります。空きiノードが0になると、新規にファイルを作成することはできなくなります。設問で生じている問題と一致するので、空きiノードがなくなったことがその理由と考えられます。",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            3
        ]
    },
    {
        "id": 56,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ext4ファイルシステムの整合性確認や修復を行うコマンドを2つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "fsck",
                "explanation": "ext4ファイルシステムの整合性確認や修復を行う場合は、fsckコマンドやfsck.ext4コマンドを利用するとほぼ自動で行うことができます。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "fsck.ext4",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "fsck.xfs",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "checkfs",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "mkfs",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0,
            1
        ]
    },
    {
        "id": 57,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "/etc/fstabに記述されているパーティションすべてをマウントしたいとき、mountコマンドに付けるオプションとして適切なものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "-a",
                "explanation": "/etc/fstabファイルに記述されているファイルシステムを一斉にマウントするには、mountコマンドに-aオプションを付けて実行します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "-all",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "-A",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "-e",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "-u",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0
        ]
    },
    {
        "id": 58,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "/dataにマウントしている/dev/sdb1をアンマウントしようと、次のようにコマンドを実行しました。 \n\n$ umount /data\numount: /data: device is busy\numount: /data: device is busy\n$ grep /data /etc/fstab\n/dev/sdb1         /data     ext3   defaults,users  0 0\n$ pwd\n/data/tmp\n\nアンマウントに失敗した理由としてもっとも適切なものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "一般ユーザーとしてアンマウントを実行しようとしたから",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "umountコマンドでは引数にデバイスファイルを指定しなければならないから",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "ユーザーがマウントポイント以下のディレクトリを利用中だから",
                "explanation": "pwdコマンドの実行結果から、umountコマンドを実行したユーザー自身が/data以下のディレクトリをカレントディレクトリとしていることがわかります。これがアンマウントを実行できなかった理由ですので、正解は選択肢Cです。「device is busy」と表示されているのはそのためです。 /etc/fstabファイルを見るとusersオプションが指定されているので、一般ユーザーはマウントおよびアンマウントすることができます。umountコマンドにはマウントポイントを指定してもかまいません。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/dev/sdb1のデバイスがデータの読み書きを実行中だから",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/dev/sdb1をマウントしたユーザー以外のユーザーでアンマウントしようとしているから",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2
        ]
    },
    {
        "id": 59,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "/etc/fstabファイルに適切なエントリが存在しない場合、/dev/sda9を/var/dataとしてマウントするためのコマンドを、適切なオプションとともに記述してください。なお、ファイルシステムタイプはext4であり、オプションを使って明示的に指定してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "mount -t ext4 /dev/sda9 /var/data"
        ],
        "inputExplanation": "mountコマンドの書式は次のとおりです。 \n\nmount [-t ファイルシステムタイプ] [デバイスファイル] [マウントポイント]"
    },
    {
        "id": 60,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "ファイルの所有者や所有グループを変更するコマンドを記述してください（コマンド名のみ）。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "chown"
        ],
        "inputExplanation": "chownコマンドで、ファイルの所有者や所有グループを変更できます。所有グループのみの変更であればchgrpコマンドが利用できます。"
    },
    {
        "id": 61,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "スティッキービットが設定されているアクセス権をすべて選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "0775",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "1775",
                "explanation": "スティッキービットが設定されているファイルのアクセス権は、3桁のパーミッションの値に1000を加えた値で表現されます。3755（=2000+1000+755）は、SGIDと同時にスティッキービットが設定されていることを表します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "2741",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "3755",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "6711",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            1,
            3
        ]
    },
    {
        "id": 62,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "新規に作成されるファイルのデフォルトパーミッションを「rw-r--r--」としたい場合にumask値として設定すべき値を選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "220",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "002",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "022",
                "explanation": "デフォルトのパーミッションは、ファイルの場合、666からumask値を引いた値になります。したがって、デフォルトのパーミッションを「rw-r--r--」つまり644とする場合は、umask値は022と設定します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "644",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "755",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2
        ]
    },
    {
        "id": 63,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "/dataディレクトリのリンクを作成し、その中にファイルをコピーしようとしました。 \n\n$ pwd \n/home/student \n$ ln -s /data data \n$ ls -ld data \nlrwxrwxrwx 1 student student 5 Jul 28 07:56 data -> /data \n$ cp data.txt data \ncp: cannot create regular file `data/data.txt': Permission denied \n\nファイルのコピーが失敗した理由としてもっとも可能性が高いものを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "/dataディレクトリは/homeディレクトリとは別のパーティションに存在する",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "lnコマンドを実行したときに引数の順序を逆にしてしまった",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "/dataディレクトリは一般ユーザーが書き込めないパーミッションになっている",
                "explanation": "シンボリックリンクのパーミッションは常に「rwxrwxrwx」と表示されますが、実際にはリンク元のパーミッションが適用されます。設問の例では、/dataディレクトリのパーミッションが明かされていませんが、cpコマンドを実行したときに「Permission denied」となっているため、アクセス権の問題であると推察できます。 別々のパーティションに作成できないのはシンボリックリンクではなくハードリンクです（選択肢A）。lnコマンドの引数の順序は適切です（選択肢B）。カレントディレクトリにdata.txtファイルが存在しなければ「No such file or directory」というエラーになるはずです（選択肢D）。ディレクトリのハードリンクを作成することはできません（選択肢E）。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "カレントディレクトリにdata.txtファイルが存在しなかった",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "ディレクトリのリンクを作成するときはシンボリックリンクではなくハードリンクにしなければならない",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            2
        ]
    },
    {
        "id": 64,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "シンボリックリンクとハードリンクについての説明として適切なものを2つ選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "すべてのハードリンクはiノード番号が同じである",
                "explanation": "すべてのハードリンクはiノード番号が同じです。一方、シンボリックリンクのリンク元とリンク先それぞれのファイルはiノード番号が異なります。ディレクトリのハードリンクや、ファイルシステムをまたぐハードリンクは作成できません。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "シンボリックリンクのリンク元とリンク先はiノード番号が同じである",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "lnコマンドでディレクトリのハードリンクを作成するには-dオプションが必須である",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "別々のファイルシステムにハードリンクを作成することができる",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "別々のファイルシステムにシンボリックリンクを作成することができる",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            0,
            4
        ]
    },
    {
        "id": 65,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "環境変数PATHで指定されているディレクトリ内から指定した名前のコマンドを検索し、絶対パスを表示するコマンドを選択してください。",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "choice",
        "choices": [
            {
                "type": "text",
                "value": "who",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "which",
                "explanation": "whichコマンドは、環境変数PATHに指定されているディレクトリの中の実行ファイルから、指定された名前のファイルを検索して、絶対パスを表示します。locateコマンドは、あらかじめ準備されたデータベースに基づいて検索します。",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "what",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "locate",
                "explanation": "",
                "explanationImage": ""
            },
            {
                "type": "text",
                "value": "where",
                "explanation": "",
                "explanationImage": ""
            }
        ],
        "answerIndexes": [
            1
        ]
    },
    {
        "id": 66,
        "category": "LPIC01",
        "subCategory": "101",
        "difficulty": 3,
        "tags": [],
        "question": "以下の実行例では、コマンドのパスとmanページのファイルを表示しています。下線部に当てはまるコマンドを記述してください。 \n\n$ ＿＿＿＿＿＿＿＿＿＿＿＿ bash \nbash:/bin/bash /usr/share/man/man1/bash.1.gz",
        "questionImage": "",
        "explanationImage": "",
        "questionType": "input",
        "acceptedAnswers": [
            "whereis"
        ],
        "inputExplanation": "whereisコマンドは、コマンドの実行ファイルのパスや、manページのファイルの場所を表示します。"
    }
];
