// エンベデッドシステムスペシャリスト試験 暗記データ
const STATS_DATA = [
    {
        id: "embedded_basics",
        name: "組込みシステム基礎",
        icon: "🔧",
        color: "#6C5CE7",
        items: [
            { question: "組込みシステムの特徴", answer: "リアルタイム性、リソース制約（CPU・メモリ・電力）、高信頼性、長寿命が要求される。", supplement: "汎用システムとの違い: 特定用途、OS無し or RTOS、専用ハードウェア、省電力設計が重要。" },
            { question: "RTOS (リアルタイムOS)", answer: "タスクの応答時間を保証するOS。ハードリアルタイム（厳密な時間保証）とソフトリアルタイム。", supplement: "代表例: μITRON、FreeRTOS、VxWorks、QNX。タスクの優先度管理、割込み応答時間の保証。" },
            { question: "割込み処理", answer: "外部割込み（ハードウェア）と内部割込み（ソフトウェア）。IRQ、割込みベクタ、割込みコントローラ。", supplement: "割込み優先度: NMI（マスク不可）> ハードウェア割込み > ソフトウェア割込み。割込み遅延時間の最小化が重要。" },
            { question: "ウォッチドッグタイマ", answer: "システムの異常（暴走）を検知し、自動的にリセットするタイマ。", supplement: "通常動作時は定期的にタイマをクリア（キック）。タイムアウト→システムリセット。フェールセーフの基本機能。" },
            { question: "クロスコンパイル", answer: "開発環境（ホスト）とは異なるCPUアーキテクチャ（ターゲット）向けにコンパイルすること。", supplement: "ホスト: PC (x86)。ターゲット: ARM, MIPS等。ICE/JTAGデバッガでターゲット上でデバッグ。" },
            { question: "ブートローダ", answer: "電源投入後にハードウェアを初期化し、OSやアプリケーションをメモリにロードするプログラム。", supplement: "U-Boot が代表的。ROM→RAM へのコード転送。ブートシーケンス: リセットベクタ→ブートローダ→OS起動。" }
        ]
    },
    {
        id: "hardware",
        name: "ハードウェア設計",
        icon: "🔌",
        color: "#00B894",
        items: [
            { question: "マイコン (MCU) の構成", answer: "CPU + ROM (Flash) + RAM (SRAM) + 各種ペリフェラル（タイマ、ADC、UART等）をワンチップに統合。", supplement: "ARM Cortex-Mシリーズが主流。クロック周波数、ピン数、消費電力で選定。ペリフェラル: GPIO, SPI, I2C, UART。" },
            { question: "A/D変換 (ADC)", answer: "アナログ信号をデジタル値に変換。分解能（ビット数）とサンプリングレートが性能指標。", supplement: "10ビットADC: 0-1023の離散値。ナイキスト定理: サンプリングレート ≥ 信号周波数の2倍。量子化誤差。" },
            { question: "D/A変換 (DAC)", answer: "デジタル値をアナログ信号に変換。PWM (パルス幅変調) で擬似的にDAC可能。", supplement: "PWM: デューティ比で平均電圧を制御。モータ速度制御、LED調光等に使用。" },
            { question: "シリアル通信インタフェース", answer: "UART: 非同期、全二重。SPI: 同期、高速、マスタ-スレーブ。I2C: 同期、2線式、アドレス指定。", supplement: "UART: ボーレート合わせが必要。SPI: MOSI/MISO/SCK/SS、最も高速。I2C: SDA/SCL、デバイスチェーン可能。" },
            { question: "FPGA (Field Programmable Gate Array)", answer: "製造後に論理回路を書き換え可能な半導体。ハードウェア記述言語 (VHDL/Verilog) で設計。", supplement: "ASICとの違い: FPGA は再プログラム可能だが、ASICは専用設計で高効率。プロトタイピング、小ロット製品に適す。" },
            { question: "EMC (電磁両立性)", answer: "EMI (電磁妨害の放出) と EMS (電磁妨害への耐性) の両面を満足させること。", supplement: "対策: シールド、フィルタ、グラウンドプレーン、差動信号。規格: CISPR, IEC 61000。" }
        ]
    },
    {
        id: "rtos_task",
        name: "RTOS・タスク管理",
        icon: "⚡",
        color: "#E17055",
        items: [
            { question: "タスクスケジューリング", answer: "優先度ベース・プリエンプティブ: 高優先度タスクが即座にCPUを獲得。RTOSの標準方式。", supplement: "レートモノトニック (RM): 周期が短いタスクほど高優先度。EDF (Earliest Deadline First): 締切が近いタスクを優先。" },
            { question: "優先度逆転 (Priority Inversion)", answer: "低優先度タスクがロックを保持し、高優先度タスクが待たされる現象。", supplement: "対策: 優先度継承プロトコル（ロック保持タスクの優先度を一時的に引き上げ）。優先度上限プロトコル。" },
            { question: "タスク間通信", answer: "セマフォ、ミューテックス、イベントフラグ、メッセージキュー、メールボックス。", supplement: "セマフォ: カウンタによる資源管理。ミューテックス: 二値セマフォ+所有権（優先度継承可能）。メッセージキュー: データを渡す。" },
            { question: "メモリ管理（組込み）", answer: "静的メモリ割当（コンパイル時に確定）が基本。動的割当はフラグメンテーションのリスク。", supplement: "メモリプール: 固定サイズブロックの動的割当。ヒープの使用は慎重に。スタックオーバーフロー検出。" },
            { question: "タイミング解析", answer: "WCET (最悪実行時間): タスクが最悪ケースで要する実行時間。リアルタイム性の検証に必須。", supplement: "スケジューラビリティ分析: CPU利用率の合計が上限以下か検証。RM分析: \\(U \\leq n(2^{1/n}-1)\\)。" },
            { question: "デバイスドライバ", answer: "ハードウェアを抽象化してOSやアプリケーションに統一的なインタフェースを提供するソフト。", supplement: "HAL (Hardware Abstraction Layer): ハードウェア依存部を吸収。BSP (Board Support Package): ボード固有の初期化。" }
        ]
    },
    {
        id: "safety_reliability",
        name: "安全性・信頼性設計",
        icon: "🛡️",
        color: "#0984E3",
        items: [
            { question: "機能安全 (IEC 61508)", answer: "電気・電子・プログラマブル電子安全関連系の機能安全規格。SIL (安全度水準) を定義。", supplement: "SIL 1〜4 (4が最高)。自動車: ISO 26262 (ASIL A〜D)。医療機器: IEC 62304。鉄道: EN 50128。" },
            { question: "FMEA (故障モード影響分析)", answer: "部品・プロセスの故障モードを列挙し、影響と対策を分析する手法。", supplement: "RPN (リスク優先度数) = 影響度 × 発生頻度 × 検出難易度。FTA (故障木分析) は結果から原因を遡る。" },
            { question: "フェールセーフ / フェールソフト", answer: "フェールセーフ: 故障時に安全側に停止。フェールソフト: 機能縮退で運転継続。", supplement: "フールプルーフ: 誤操作防止設計。冗長化: 二重化、三重冗長（多数決）。" },
            { question: "自動車の機能安全 (ISO 26262)", answer: "ASIL (Automotive Safety Integrity Level): A (低) 〜 D (高) のリスク分類。", supplement: "ハザード分析とリスク評価で ASIL を決定。V字モデルで開発。ソフトウェアの安全要求仕様。" },
            { question: "MISRA-C", answer: "自動車・組込み向けのC言語コーディング規約。安全性・信頼性を高めるためのルール集。", supplement: "動的メモリ割当の禁止、goto文の制限、ポインタ演算の制限等。静的解析ツールでチェック。" }
        ]
    },
    {
        id: "iot_connectivity",
        name: "IoT・通信技術",
        icon: "📡",
        color: "#FDCB6E",
        items: [
            { question: "LPWA (Low Power Wide Area)", answer: "低消費電力・広域通信。LoRaWAN、Sigfox、NB-IoT、LTE-M。", supplement: "LoRaWAN: 免許不要帯、数km〜10km。NB-IoT: セルラー系、屋内浸透性。用途: スマートメータ、農業、物流。" },
            { question: "Bluetooth Low Energy (BLE)", answer: "近距離低消費電力通信。ペアリング不要のアドバタイズモード。IoTセンサに広く使用。", supplement: "GATT (Generic Attribute Profile): サービスとキャラクタリスティックでデータ交換。Bluetooth Mesh: 多対多通信。" },
            { question: "MQTT", answer: "軽量なPub/Subメッセージングプロトコル。IoTの標準通信プロトコル。", supplement: "ブローカー経由でPublisher→Subscriber。QoS 0/1/2。低帯域、不安定な回線に適する。" },
            { question: "エッジコンピューティング", answer: "データ発生源の近く（エッジ）で処理を行い、クラウドへの転送量を削減する手法。", supplement: "低遅延、帯域節約、プライバシー保護。MEC (Multi-access Edge Computing)。フォグコンピューティング。" },
            { question: "OTA (Over-The-Air) アップデート", answer: "組込み機器のファームウェアを無線経由で更新する技術。", supplement: "セキュアブート: 署名検証で不正ファームウェアを排除。A/Bパーティション: 失敗時にロールバック可能。" }
        ]
    },
    {
        id: "edge_ai_auto",
        name: "エッジAI・車載システム",
        icon: "🚗",
        color: "#d63031",
        items: [
            { question: "エッジAI (TinyML)", answer: "マイコン等のリソース制約のあるエッジデバイス上でAI推論を実行する技術。", supplement: "TensorFlow Lite for Microcontrollers。量子化（32bit→8bit）、プルーニング（枝刈り）でモデル軽量化。" },
            { question: "モデル圧縮技術", answer: "蒸留 (Distillation): 教師モデルの知識を生徒モデルに継承。量子化、プルーニング。", supplement: "計算量削減、メモリ使用量削減、消費電力低減。推論精度の低下を最小限に抑える工夫が必要。" },
            { question: "AUTOSAR", answer: "車載ソフトウェアの標準プラットフォーム。Classic Platform (制御系) と Adaptive Platform (自動運転系)。", supplement: "BSW (Basic Software)、RTE (Runtime Environment)、SWC (Software Component) の3層構造。" },
            { question: "CAN FD (Controller Area Network Flexible Data-rate)", answer: "CANの拡張規格。データ部を高速化（最大5-8Mbps）し、ペイロードを最大64バイトに拡張。", supplement: "従来のCANは最大1Mbps/8バイト。セキュリティ機能の追加やファームウェア更新の高速化に対応。" },
            { question: "LiDAR (Light Detection and Ranging)", answer: "レーザー光を照射して対象物までの距離や形状を測定するセンサ。", supplement: "自動運転の「目」。ToF (Time of Flight) 方式。カメラ、ミリ波レーダーとのセンサフュージョン。" },
            { question: "ROS (Robot Operating System)", answer: "ロボットアプリケーション開発のためのミドルウェア・フレームワーク。", supplement: "ノード間通信 (Pub/Sub)。ROS 2ではDDS (Data Distribution Service) を採用しリアルタイム性を向上。" }
        ]
    }
];
