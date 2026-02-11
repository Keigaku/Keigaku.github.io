// 応用情報技術者試験 暗記データ
// 午前試験のカテゴリ別に用語・概念を構造化

const STATS_DATA = [
    {
        id: "basic_theory",
        name: "基礎理論",
        icon: "🧮",
        color: "#6C5CE7",
        items: [
            {
                question: "2進数の補数表現（2の補数）",
                answer: "負の数を表現する方法。全ビットを反転して1を加える。",
                supplement: "8ビットの場合、-1 = 11111111、-128 = 10000000。表現範囲は \\(-2^{n-1}\\) から \\(2^{n-1}-1\\)。"
            },
            {
                question: "浮動小数点数（IEEE 754）",
                answer: "$$(-1)^s \\times 1.M \\times 2^{E-127}$$（単精度32ビット）",
                supplement: "符号部(1bit) + 指数部(8bit) + 仮数部(23bit)。ケチ表現（1.を省略して精度を1bit稼ぐ）。"
            },
            {
                question: "論理演算（ド・モルガンの法則）",
                answer: "$$\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$$ $$\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$$",
                supplement: "NOT(AND) = OR(NOT)、NOT(OR) = AND(NOT)。論理回路の簡略化に使用。"
            },
            {
                question: "BNF記法（バッカス・ナウア記法）",
                answer: "プログラミング言語の構文を形式的に定義する記法。",
                supplement: "::= は「定義」、| は「または」。例: <digit> ::= 0|1|2|...|9。正規表現との関連が午前問題で出題。"
            },
            {
                question: "オートマトン",
                answer: "入力に応じて状態が遷移する抽象的な計算モデル。",
                supplement: "有限オートマトン（正規言語を認識）、プッシュダウンオートマトン（文脈自由言語）、チューリングマシン。状態遷移図で表現。"
            },
            {
                question: "計算量のオーダー（O記法）",
                answer: "$$O(1) < O(\\log n) < O(n) < O(n \\log n) < O(n^2) < O(2^n)$$",
                supplement: "アルゴリズムの効率を表す。二分探索: \\(O(\\log n)\\)、クイックソート平均: \\(O(n \\log n)\\)、バブルソート: \\(O(n^2)\\)。"
            },
            {
                question: "スタック (LIFO)",
                answer: "後入れ先出し (Last In, First Out) のデータ構造。push/pop操作。",
                supplement: "用途：関数の呼び出し管理（コールスタック）、式の評価、undo機能、再帰処理。"
            },
            {
                question: "キュー (FIFO)",
                answer: "先入れ先出し (First In, First Out) のデータ構造。enqueue/dequeue操作。",
                supplement: "用途：印刷キュー、待ち行列、BFS（幅優先探索）。優先度キューはヒープで実装。"
            },
            {
                question: "二分探索木",
                answer: "左の子 < 親 < 右の子 となる二分木。探索・挿入・削除が \\(O(\\log n)\\)。",
                supplement: "最悪時（偏った木）は \\(O(n)\\)。平衡二分探索木（AVL木、赤黒木）で最悪でも \\(O(\\log n)\\) を保証。"
            },
            {
                question: "ハッシュ法",
                answer: "ハッシュ関数でキーから格納位置を直接計算。平均 \\(O(1)\\) で探索。",
                supplement: "衝突対策：オープンアドレス法（線形探索法）、チェイン法（連結リスト）。シノニム = 同じハッシュ値のデータ。"
            },
            {
                question: "ソートアルゴリズムの比較",
                answer: "クイックソート: 平均 \\(O(n \\log n)\\)、マージソート: \\(O(n \\log n)\\) 安定、ヒープソート: \\(O(n \\log n)\\)",
                supplement: "安定なソート：マージソート、挿入ソート。不安定：クイックソート、ヒープソート。基数ソート: \\(O(kn)\\)。"
            },
            {
                question: "再帰とダイナミックプログラミング (DP)",
                answer: "DPは再帰の重複計算を排除して効率化する手法。メモ化 or ボトムアップ。",
                supplement: "フィボナッチ数列：再帰 \\(O(2^n)\\) → DP \\(O(n)\\)。ナップサック問題、最短経路問題等で活用。"
            },
            {
                question: "グラフの探索",
                answer: "BFS（幅優先探索）：キュー使用、最短経路。DFS（深さ優先探索）：スタック使用。",
                supplement: "ダイクストラ法：重み付きグラフの最短経路 \\(O(V^2)\\) or \\(O(E \\log V)\\)。負の辺にはベルマン・フォード法。"
            },
            {
                question: "逆ポーランド記法（後置記法）",
                answer: "演算子をオペランドの後に置く記法。例：\\(A + B \\times C\\) → \\(A B C \\times +\\)",
                supplement: "スタックを使って機械的に計算可能。コンパイラの内部表現に使用。括弧が不要。"
            },
            {
                question: "待ち行列理論（M/M/1モデル）",
                answer: "利用率 \\(\\rho = \\lambda / \\mu\\)、平均待ち時間 \\(W_q = \\frac{\\rho}{\\mu(1-\\rho)}\\)",
                supplement: "\\(\\lambda\\): 到着率、\\(\\mu\\): サービス率。\\(\\rho < 1\\) でないと行列は発散。"
            },
            {
                question: "誤り検出・訂正",
                answer: "パリティチェック（1ビット誤り検出）、ハミング符号（1ビット誤り訂正）、CRC（バースト誤り検出）",
                supplement: "ハミング距離 \\(d\\) のとき、\\(d-1\\) ビットの誤り検出、\\(\\lfloor(d-1)/2\\rfloor\\) ビットの誤り訂正が可能。"
            }
        ]
    },
    {
        id: "computer_system",
        name: "コンピュータシステム",
        icon: "🖥️",
        color: "#00B894",
        items: [
            {
                question: "CPU の命令実行サイクル",
                answer: "フェッチ（命令取出し）→ デコード（解読）→ 実行 → ライトバック（書戻し）",
                supplement: "パイプライン処理で複数命令を並行実行。パイプラインハザード：データ、制御、構造ハザード。"
            },
            {
                question: "MIPS（Million Instructions Per Second）",
                answer: "$$MIPS = \\frac{\\text{クロック周波数}}{\\text{CPI} \\times 10^6}$$",
                supplement: "CPI (Cycles Per Instruction): 1命令あたりの平均クロックサイクル数。"
            },
            {
                question: "キャッシュメモリ",
                answer: "CPUとメインメモリの速度差を埋める高速小容量メモリ。ヒット率が重要。",
                supplement: "実効アクセス時間 = ヒット率 × キャッシュ時間 + (1-ヒット率) × メモリ時間。L1/L2/L3キャッシュ。"
            },
            {
                question: "メモリインタリーブ",
                answer: "メモリをバンクに分割し、連続アクセスを並列化して高速化する技術。",
                supplement: "4ウェイインタリーブ：4つのバンクに交互にアドレスを割り当て。"
            },
            {
                question: "仮想記憶（ページング）",
                answer: "メインメモリを固定サイズのページに分割し、不足分をディスクで補う技術。",
                supplement: "ページフォルト：必要なページが主記憶にない場合。ページ置換アルゴリズム：LRU、FIFO、LFU。スラッシング現象。"
            },
            {
                question: "RAID",
                answer: "RAID0: ストライピング、RAID1: ミラーリング、RAID5: パリティ分散",
                supplement: "RAID0: 高速だが冗長性なし。RAID1: 完全冗長だが容量半減。RAID5: 最低3台、1台故障OK。RAID6: 2台故障OK。"
            },
            {
                question: "システムの信頼性指標",
                answer: "MTBF: 平均故障間隔、MTTR: 平均修復時間、稼働率 = MTBF / (MTBF + MTTR)",
                supplement: "直列システム: \\(A_1 \\times A_2\\)。並列システム: \\(1 - (1-A_1)(1-A_2)\\)。"
            },
            {
                question: "フォールトトレラント",
                answer: "障害が発生しても全体としての機能を維持し続ける設計思想。",
                supplement: "フェールセーフ: 安全側に停止。フェールソフト: 機能縮退で運転継続。フールプルーフ: 誤操作防止。"
            },
            {
                question: "割込み処理",
                answer: "外部割込み（I/O完了、タイマ等）と内部割込み（0除算、ページフォルト等）。",
                supplement: "割込みの優先度制御。多重割込み。DMA（Direct Memory Access）: CPUを介さずI/O転送。"
            },
            {
                question: "プロセス管理（OS）",
                answer: "実行可能（Ready）→ 実行（Running）→ 待ち（Waiting）の状態遷移。",
                supplement: "スケジューリング：ラウンドロビン、優先度方式、SJF（最短ジョブ優先）。デッドロック：排他制御の循環待ち。"
            },
            {
                question: "デッドロック発生の4条件",
                answer: "①相互排他 ②占有と待機 ③横取り不可 ④循環待ち",
                supplement: "4条件すべてが成立した場合にデッドロックが発生。1つでも崩せば防止できる。"
            },
            {
                question: "排他制御（セマフォ）",
                answer: "P操作（wait/down）: 値を減らしロック。V操作（signal/up）: 値を増やしアンロック。",
                supplement: "ミューテックス: 二値セマフォ（0/1）。カウンティングセマフォ: 複数リソース管理。"
            }
        ]
    },
    {
        id: "technology",
        name: "技術要素（DB・ネットワーク）",
        icon: "🗃️",
        color: "#E17055",
        items: [
            {
                question: "正規化（第1〜第3正規形）",
                answer: "第1: 繰り返し排除、第2: 部分関数従属排除、第3: 推移的関数従属排除",
                supplement: "正規化の目的: データの冗長性を排除し、更新時の異常を防ぐ。過度な正規化はJOINが増えて性能低下。"
            },
            {
                question: "関係演算",
                answer: "選択（σ）: 行の抽出、射影（π）: 列の抽出、結合（⋈）: 表の結合",
                supplement: "和（∪）、差（−）、積（∩）、直積（×）も基本操作。SQLのSELECT-FROM-WHEREに対応。"
            },
            {
                question: "トランザクションのACID特性",
                answer: "原子性 (Atomicity)、一貫性 (Consistency)、独立性 (Isolation)、耐久性 (Durability)",
                supplement: "原子性: 全か無か。一貫性: 整合性維持。独立性: 並行実行でも結果が同じ。耐久性: コミット後は永続。"
            },
            {
                question: "ロック（排他制御）",
                answer: "共有ロック（読取り用、複数可）と専有ロック（更新用、排他的）。",
                supplement: "2相ロッキングプロトコル: すべてのロック取得後にアンロック開始。デッドロック検出は待ちグラフの循環。"
            },
            {
                question: "障害回復（ログベース）",
                answer: "WAL（Write-Ahead Logging）: 更新前にログを書く。ロールバック/ロールフォワード。",
                supplement: "チェックポイント: ログの切り詰め点。REDO: コミット済みでDB未反映を再実行。UNDO: 未コミットの変更を取消し。"
            },
            {
                question: "SQLのJOIN",
                answer: "INNER JOIN: 一致行のみ、LEFT JOIN: 左テーブル全行＋一致、FULL OUTER JOIN: 両テーブル全行",
                supplement: "CROSS JOIN: 直積。NATURAL JOIN: 同名列で自動結合。自己結合: 同テーブル同士のJOIN。"
            },
            {
                question: "インデックス（B木・B+木）",
                answer: "B+木: 葉ノードにデータ格納、葉がリスト連結。範囲検索に強い。",
                supplement: "インデックスの効果: 探索 \\(O(\\log n)\\)。更新時のオーバーヘッドに注意。カーディナリティが高い列に有効。"
            },
            {
                question: "OSI参照モデル",
                answer: "物理 → データリンク → ネットワーク → トランスポート → セッション → プレゼンテーション → アプリケーション",
                supplement: "覚え方：「ぶでねとせぷあ」。TCP/IPモデルは4層（ネットワークインタフェース、インターネット、トランスポート、アプリケーション）。"
            },
            {
                question: "IPアドレスとサブネットマスク",
                answer: "IPv4: 32ビット。サブネットマスクでネットワーク部とホスト部を分離。CIDR表記: /24 = 255.255.255.0",
                supplement: "ホスト数 = \\(2^{ホスト部ビット数} - 2\\)（ネットワークアドレスとブロードキャストを除く）。プライベートIP: 10.x, 172.16-31.x, 192.168.x。"
            },
            {
                question: "TCP と UDP の違い",
                answer: "TCP: コネクション型、信頼性あり、順序保証。UDP: コネクションレス、高速、信頼性なし。",
                supplement: "TCP: 3ウェイハンドシェイク (SYN→SYN+ACK→ACK)。用途: HTTP, FTP, SMTP。UDP用途: DNS, DHCP, 動画配信。"
            },
            {
                question: "DNS (Domain Name System)",
                answer: "ドメイン名をIPアドレスに変換する分散データベースシステム。",
                supplement: "再帰クエリ、反復クエリ。DNSキャッシュポイズニングに注意。正引き（名前→IP）、逆引き（IP→名前）。"
            },
            {
                question: "NAT / NAPT",
                answer: "NAT: プライベートIPとグローバルIPの1対1変換。NAPT(PAT): ポート番号も変換して多対1。",
                supplement: "NAPT: 1つのグローバルIPで複数端末がインターネット接続可能。ルータの基本機能。"
            },
            {
                question: "VLAN (Virtual LAN)",
                answer: "物理的なネットワーク構成に依存せず、論理的にネットワークを分割する技術。",
                supplement: "ポートベースVLAN、タグVLAN (IEEE 802.1Q)。ブロードキャストドメインの分割。"
            },
            {
                question: "ルーティングプロトコル",
                answer: "RIP: ホップ数ベース（距離ベクトル型）、OSPF: コストベース（リンク状態型）",
                supplement: "BGP: AS間のルーティング（パスベクトル型）。スタティックルーティング vs ダイナミックルーティング。"
            }
        ]
    },
    {
        id: "security",
        name: "情報セキュリティ",
        icon: "🔒",
        color: "#0984E3",
        items: [
            {
                question: "共通鍵暗号方式（対称鍵暗号）",
                answer: "暗号化と復号に同じ鍵を使用。高速だが鍵配送が課題。",
                supplement: "AES (128/192/256ビット) が標準。DES (56ビット) は脆弱。鍵の数: \\(n(n-1)/2\\) 個（n人の場合）。"
            },
            {
                question: "公開鍵暗号方式（非対称鍵暗号）",
                answer: "公開鍵で暗号化、秘密鍵で復号。鍵配送問題を解決。",
                supplement: "RSA: 素因数分解の困難性に基づく。鍵の数: \\(2n\\) 個。共通鍵より低速。"
            },
            {
                question: "ハイブリッド暗号方式",
                answer: "公開鍵暗号でセッション鍵を交換し、以降は共通鍵暗号で通信。",
                supplement: "TLS/SSLで使用。公開鍵の鍵交換の利便性 + 共通鍵の高速な暗号化を組み合わせる。"
            },
            {
                question: "ディジタル署名",
                answer: "送信者が秘密鍵で署名（ハッシュを暗号化）、受信者が公開鍵で検証。",
                supplement: "改ざん検知 + 送信者認証 + 否認防止。ハッシュ関数（SHA-256等）と組み合わせて使用。"
            },
            {
                question: "PKI（公開鍵基盤）",
                answer: "認証局 (CA) がディジタル証明書を発行し、公開鍵の正当性を保証する仕組み。",
                supplement: "CRL（証明書失効リスト）、OCSP（オンライン証明書状態プロトコル）。ルートCA → 中間CA の階層構造。"
            },
            {
                question: "ハッシュ関数",
                answer: "任意長のデータを固定長のハッシュ値に変換する一方向関数。",
                supplement: "SHA-256: 256ビット出力。衝突耐性（同じハッシュ値の異なるデータを見つけにくい）。MD5は脆弱。パスワード保管にソルト+ストレッチング。"
            },
            {
                question: "ファイアウォール",
                answer: "パケットフィルタリング型、アプリケーションゲートウェイ型（プロキシ型）、ステートフルインスペクション型",
                supplement: "DMZ（非武装地帯）: 公開サーバを内部ネットワークから分離。WAF: Webアプリケーション特化のFW。"
            },
            {
                question: "SQLインジェクション",
                answer: "Webアプリのフォーム等からSQL文を注入し、DBを不正操作する攻撃。",
                supplement: "対策: プレースホルダ（バインド機構）の使用、エスケープ処理、入力値の検証。"
            },
            {
                question: "クロスサイトスクリプティング (XSS)",
                answer: "Webページに悪意のあるスクリプトを注入し、閲覧者のブラウザで実行させる攻撃。",
                supplement: "対策: 出力時のエスケープ処理（HTMLエンティティ化）、Content-Security-Policy。反射型/格納型/DOM型。"
            },
            {
                question: "CSRF (クロスサイトリクエストフォージェリ)",
                answer: "ログイン中のユーザに意図しないリクエストを送信させる攻撃。",
                supplement: "対策: トークン（ワンタイムパスワード）の埋め込み、Referrerチェック、SameSite Cookie。"
            },
            {
                question: "DoS / DDoS攻撃",
                answer: "DoS: 単一からの大量リクエスト。DDoS: 複数（ボットネット等）からの分散攻撃。",
                supplement: "SYN Flood、HTTP Flood、Smurf攻撃等。対策: CDN、WAF、レートリミット。"
            },
            {
                question: "情報セキュリティの3要素 (CIA)",
                answer: "機密性 (Confidentiality)、完全性 (Integrity)、可用性 (Availability)",
                supplement: "追加要素: 真正性、責任追跡性、否認防止、信頼性。ISMSの基本概念。"
            },
            {
                question: "認証の3要素",
                answer: "知識認証（パスワード）、所持認証（ICカード）、生体認証（指紋等）",
                supplement: "多要素認証 (MFA): 2つ以上の要素を組み合わせる。二段階認証と多要素認証は異なる概念。"
            },
            {
                question: "VPN (Virtual Private Network)",
                answer: "公衆回線上に暗号化された仮想的な専用回線を構築する技術。",
                supplement: "IPsec: ネットワーク層で暗号化。SSL-VPN: アプリケーション層。トンネリング + 暗号化。"
            },
            {
                question: "ランサムウェア",
                answer: "感染したPCのファイルを暗号化し、復号のために身代金を要求するマルウェア。",
                supplement: "対策: バックアップの取得（オフライン推奨）、OS・ソフトの最新化、不審なメールを開かない。"
            },
            {
                question: "ゼロトラストセキュリティ",
                answer: "「何も信頼しない」を前提に、誰がどこからアクセスしても都度認証・認可を行う考え方。",
                supplement: "境界型防御（社内は安全）の限界から普及。ID管理、多要素認証、EDR、CASB等が構成要素。"
            },
            {
                question: "標的型攻撃 (APT)",
                answer: "特定の組織をターゲットに、長期間かけて執拗に行われるサイバー攻撃。",
                supplement: "やり取り型ウイルスメール、水飲み場攻撃など。出口対策（情報の持ち出し防止）が重要。"
            },
            {
                question: "クラウドサービスモデル (SaaS/PaaS/IaaS)",
                answer: "SaaS: ソフト提供、PaaS: 基盤（ミドルウェア）提供、IaaS: インフラ（HW/OS）提供。",
                supplement: "責任共有モデル：クラウド事業者と利用者の責任範囲が異なる。AWS, Azure, GCPが代表的。"
            },
            {
                question: "IPv6",
                answer: "128ビットのアドレス空間を持つ次世代IPプロトコル。事実上無限のアドレス。",
                supplement: "IPsec標準装備。ヘッダの簡素化。アドレス表記は16進数とコロン。::で0の省略が可能。"
            }
        ]
    },
    {
        id: "development",
        name: "開発技術",
        icon: "⚙️",
        color: "#FDCB6E",
        items: [
            {
                question: "ウォーターフォールモデル",
                answer: "要件定義 → 外部設計 → 内部設計 → コーディング → テスト → 運用保守",
                supplement: "前工程への手戻りが困難。大規模・要件が明確なプロジェクト向き。V字モデル: 各設計工程に対応するテスト工程。"
            },
            {
                question: "アジャイル開発",
                answer: "短いイテレーション（スプリント）で開発とフィードバックを繰り返す手法。",
                supplement: "スクラム: スプリント計画→デイリースクラム→レビュー→レトロスペクティブ。XP: ペアプログラミング、TDD、リファクタリング。"
            },
            {
                question: "オブジェクト指向の三大要素",
                answer: "カプセル化、継承（インヘリタンス）、多態性（ポリモーフィズム）",
                supplement: "カプセル化: データと操作を一体化し隠蔽。継承: 既存クラスを拡張。多態性: 同じメッセージで異なる動作。"
            },
            {
                question: "デザインパターン",
                answer: "GoFの23パターン。生成・構造・振る舞いの3カテゴリ。",
                supplement: "頻出: Singleton（インスタンス1つ）、Observer（1対多の通知）、Factory Method（生成の委譲）、Strategy（アルゴリズムの切替え）。"
            },
            {
                question: "UML図",
                answer: "クラス図、シーケンス図、ユースケース図、アクティビティ図、状態遷移図 等",
                supplement: "クラス図: 静的構造。シーケンス図: オブジェクト間の時系列のメッセージ交換。ユースケース図: システムとアクターの関係。"
            },
            {
                question: "テストの種類",
                answer: "単体テスト → 結合テスト → システムテスト → 受入テスト",
                supplement: "ホワイトボックス: 内部構造に基づく（命令網羅、分岐網羅）。ブラックボックス: 外部仕様に基づく（同値分割、限界値分析）。"
            },
            {
                question: "テスト網羅率（カバレッジ）",
                answer: "命令網羅 (C0) < 分岐網羅 (C1) < 条件網羅 (C2)",
                supplement: "C0: すべての命令を1回実行。C1: すべての分岐の真偽を1回実行。C2: すべての条件の真偽を1回実行。"
            },
            {
                question: "リファクタリング",
                answer: "外部から見た動作を変えずに、コードの内部構造を改善すること。",
                supplement: "目的: 保守性・可読性の向上。自動テストがあることが前提。コードの臭い（code smell）を検知して改善。"
            },
            {
                question: "モジュール結合度と凝集度",
                answer: "良い設計 = 結合度が低く、凝集度が高い",
                supplement: "結合度（低い順）: データ結合 < スタンプ結合 < 制御結合 < 共通結合 < 内容結合。凝集度（高い順）: 機能的 > 逐次的 > 通信的 > 時間的 > 論理的 > 偶発的。"
            },
            {
                question: "CI/CD",
                answer: "CI (継続的インテグレーション): コード変更の自動ビルド・テスト。CD (継続的デリバリー/デプロイ): 自動デプロイ。",
                supplement: "DevOpsの基盤技術。Jenkins, GitHub Actions等のツール。ブランチ戦略: Git Flow, Trunk-Based Development。"
            },
            {
                question: "マイクロサービスアーキテクチャ",
                answer: "アプリケーションを小さな独立したサービスの集合として構築する設計手法。",
                supplement: "各サービスが独立してデプロイ・スケール可能。API（REST/gRPC）で通信。コンテナ（Docker）との親和性が高い。"
            }
        ]
    },
    {
        id: "management",
        name: "マネジメント",
        icon: "📋",
        color: "#A29BFE",
        items: [
            {
                question: "プロジェクトマネジメントの知識エリア（PMBOK）",
                answer: "統合、スコープ、スケジュール、コスト、品質、資源、コミュニケーション、リスク、調達、ステークホルダー",
                supplement: "PMBOKは10の知識エリアと5のプロセス群（立上げ・計画・実行・監視コントロール・終結）。"
            },
            {
                question: "WBS (Work Breakdown Structure)",
                answer: "プロジェクトの成果物を階層的に分解した図。最下位要素はワークパッケージ。",
                supplement: "スコープ管理の基本ツール。作業の漏れを防ぎ、工数・コストの見積りの基盤となる。"
            },
            {
                question: "クリティカルパス法 (CPM)",
                answer: "プロジェクトの最長経路（クリティカルパス）を特定し、最短のプロジェクト期間を求める。",
                supplement: "クリティカルパス上の作業は余裕時間（フロート）が0。遅延するとプロジェクト全体が遅延する。"
            },
            {
                question: "アーンドバリューマネジメント (EVM)",
                answer: "PV (計画予算), EV (出来高), AC (実コスト) の3指標で進捗とコストを管理。",
                supplement: "SPI = EV/PV（進捗効率）、CPI = EV/AC（コスト効率）。SPI < 1: 遅延、CPI < 1: 超過。"
            },
            {
                question: "ファンクションポイント法 (FP法)",
                answer: "ソフトウェアの機能量（入出力、ファイル等）に基づいて開発規模を見積もる手法。",
                supplement: "COCOMO: コード行数ベースの見積り。類推法: 類似プロジェクトから見積り。3点見積り: (楽観+4×最頻+悲観)/6。"
            },
            {
                question: "ITIL (ITサービスマネジメント)",
                answer: "ITサービスのベストプラクティス集。サービスライフサイクル: 戦略 → 設計 → 移行 → 運用 → 改善。",
                supplement: "インシデント管理: サービスの早期回復。問題管理: 根本原因の調査・解決。変更管理: 変更によるリスク管理。"
            },
            {
                question: "SLA (Service Level Agreement)",
                answer: "ITサービスの提供者と利用者の間で合意されたサービス品質の水準。",
                supplement: "例: 稼働率99.9%、応答時間3秒以内。SLAに基づくサービスレベル管理。OLA: 社内のサービス合意。"
            },
            {
                question: "システム監査",
                answer: "情報システムの信頼性・安全性・効率性を、独立・客観的な立場から検証・評価すること。",
                supplement: "監査人の独立性が重要。助言型監査 vs 保証型監査。監査証拠の収集 → 監査報告書。"
            }
        ]
    },
    {
        id: "strategy",
        name: "ストラテジ（経営戦略）",
        icon: "🏢",
        color: "#E84393",
        items: [
            {
                question: "SWOT分析",
                answer: "強み (Strength)・弱み (Weakness)・機会 (Opportunity)・脅威 (Threat) の4象限で分析。",
                supplement: "内部環境（S,W）× 外部環境（O,T）のクロスSWOT分析で戦略を導出。"
            },
            {
                question: "ポーターの5フォース",
                answer: "①業界内競争 ②新規参入の脅威 ③代替品の脅威 ④買い手の交渉力 ⑤売り手の交渉力",
                supplement: "業界の競争環境と収益性を分析するフレームワーク。5つの力が強いほど収益性は低い。"
            },
            {
                question: "ポーターの3つの基本戦略",
                answer: "コストリーダーシップ戦略、差別化戦略、集中戦略",
                supplement: "コストリーダーシップ: 低コストで優位性。差別化: 独自の価値で優位性。集中: 特定セグメントに集中。"
            },
            {
                question: "PPM（プロダクトポートフォリオマネジメント）",
                answer: "市場成長率 × 市場占有率で4象限に分類: 花形、金のなる木、問題児、負け犬",
                supplement: "花形: 高成長・高シェア。金のなる木: 低成長・高シェア（資金源）。問題児: 高成長・低シェア。負け犬: 低成長・低シェア。"
            },
            {
                question: "バランスト・スコアカード (BSC)",
                answer: "財務、顧客、内部プロセス、学習と成長の4つの視点で戦略を管理。",
                supplement: "KGI（重要目標達成指標）→ CSF（重要成功要因）→ KPI（重要業績評価指標）の関係。"
            },
            {
                question: "損益分岐点 (BEP)",
                answer: "$$\\text{BEP} = \\frac{\\text{固定費}}{1 - \\text{変動費率}} = \\frac{\\text{固定費}}{\\text{限界利益率}}$$",
                supplement: "売上高 = 費用 となる点。固定費 ÷ （1 − 変動費÷売上高）。安全余裕率 = (売上高 - BEP) / 売上高。"
            },
            {
                question: "ROI (投資利益率)",
                answer: "$$ROI = \\frac{\\text{利益}}{\\text{投資額}} \\times 100\\%$$",
                supplement: "ROE（自己資本利益率）= 当期純利益 / 自己資本。ROA（総資産利益率）= 当期純利益 / 総資産。"
            },
            {
                question: "正味現在価値法 (NPV)",
                answer: "$$NPV = \\sum_{t=0}^{n} \\frac{CF_t}{(1+r)^t}$$",
                supplement: "NPV > 0 なら投資すべき。IRR（内部収益率）: NPV = 0 となる割引率。投資判断の基本手法。"
            },
            {
                question: "SCM (Supply Chain Management)",
                answer: "原材料の調達から消費者への配送までの一連の流れを統合的に管理する手法。",
                supplement: "ブルウィップ効果: サプライチェーンの上流ほど需要変動が増幅される現象。"
            },
            {
                question: "CRM (Customer Relationship Management)",
                answer: "顧客情報を統合管理し、顧客との長期的な関係構築を目指す経営手法。",
                supplement: "RFM分析: Recency（最新購買日）、Frequency（購買頻度）、Monetary（購買金額）で顧客を分類。"
            },
            {
                question: "ERP (Enterprise Resource Planning)",
                answer: "企業全体の経営資源（ヒト・モノ・カネ・情報）を一元管理する統合基幹業務システム。",
                supplement: "会計、販売、生産、人事等のモジュールを統合。業務プロセスの標準化と効率化。"
            }
        ]
    },
    {
        id: "legal",
        name: "企業と法務",
        icon: "⚖️",
        color: "#00CEC9",
        items: [
            {
                question: "知的財産権の分類",
                answer: "産業財産権（特許権、実用新案権、意匠権、商標権）と著作権",
                supplement: "特許権: 20年、出願から。著作権: 死後70年、登録不要で自動発生。"
            },
            {
                question: "特許権",
                answer: "自然法則を利用した技術的思想の創作のうち高度なもの。保護期間: 出願から20年。",
                supplement: "出願 → 審査請求（3年以内）→ 審査 → 登録。職務発明: 従業者の発明、相当の利益を受ける権利。"
            },
            {
                question: "著作権（プログラム）",
                answer: "プログラムは著作権法で保護される。アルゴリズムやプログラミング言語自体は保護対象外。",
                supplement: "プログラムの著作権: 登録不要で自動発生。法人著作: 法人の従業者が職務上作成 → 法人が著作者。"
            },
            {
                question: "個人情報保護法",
                answer: "個人情報取扱事業者は、利用目的の通知、第三者提供の制限、安全管理措置等が義務。",
                supplement: "要配慮個人情報: 人種、信条、病歴等。匿名加工情報: 個人を特定できないよう加工した情報。"
            },
            {
                question: "不正アクセス禁止法",
                answer: "他人のID/パスワードを不正に使用してアクセスする行為等を禁止。",
                supplement: "不正アクセス行為、不正取得・保管・提供行為が処罰対象。3年以下の懲役又は100万円以下の罰金。"
            },
            {
                question: "請負契約と委任契約（準委任契約）",
                answer: "請負: 成果物の完成が義務（瑕疵担保責任あり）。委任: 作業の遂行が義務（善管注意義務）。",
                supplement: "SES: 準委任が多い。一括請負: ウォーターフォール型でよく使われる。偽装請負: 発注者が直接指揮命令（違法）。"
            },
            {
                question: "労働者派遣法",
                answer: "派遣元が雇用、派遣先が指揮命令。同一組織での派遣は原則3年まで。",
                supplement: "二重派遣は禁止。専ら派遣も禁止。派遣先に派遣先責任者の選任義務。"
            },
            {
                question: "コンプライアンス",
                answer: "法令遵守。企業が法律・規則・社内規程・倫理を遵守すること。",
                supplement: "内部統制: 業務の有効性・効率性、財務報告の信頼性、法令遵守、資産の保全。SOX法 / J-SOX。"
            },
            {
                question: "ソフトウェアライセンス",
                answer: "GPL: コピーレフト（派生物もGPL）。MIT/BSD: 寛容。Apache: 特許条項あり。",
                supplement: "OSS: ソースコード公開。SaaS, PaaS, IaaS: クラウドサービスの分類。"
            }
        ]
    }
];
