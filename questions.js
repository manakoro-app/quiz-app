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
    }
];
