// ITサービスマネージャ試験 暗記データ
const STATS_DATA = [
    {
        id: "itil_basics",
        name: "ITIL・サービスマネジメント基礎",
        icon: "📘",
        color: "#6C5CE7",
        items: [
            { question: "ITIL 4 サービスバリューシステム (SVS)", answer: "機会/需要 → サービスバリューチェーン → 価値。ガバナンス、改善、プラクティスで構成。", supplement: "ITIL 4: サービスマネジメントの4つの側面（組織と人材、情報と技術、パートナとサプライヤ、バリューストリームとプロセス）。" },
            { question: "サービスバリューチェーン (SVC)", answer: "計画→改善→エンゲージ→設計と移行→取得と構築→提供とサポートの6つの活動。", supplement: "各活動は相互に連携。バリューストリームとして組み合わせてサービスを提供。" },
            { question: "サービスレベル管理 (SLM)", answer: "SLA（サービスレベル合意書）に基づいてサービス品質を管理するプロセス。", supplement: "SLA: 顧客との合意。OLA: 社内の合意。UC (Underpinning Contract): 外部サプライヤとの契約。SLAモニタリング。" },
            { question: "サービスカタログ", answer: "提供中のITサービスの一覧。ビジネスサービスカタログと技術サービスカタログ。", supplement: "利用者が利用可能なサービスを確認する窓口。サービスポートフォリオの一部（パイプライン→カタログ→廃止）。" },
            { question: "CSI (継続的サービス改善)", answer: "PDCAサイクルでサービスを継続的に改善するフレームワーク。7ステップ改善プロセス。", supplement: "測定可能な改善目標の設定。DIKW: Data→Information→Knowledge→Wisdom。ベースライン測定。" }
        ]
    },
    {
        id: "service_operation",
        name: "サービス運用管理",
        icon: "🔧",
        color: "#00B894",
        items: [
            { question: "インシデント管理", answer: "サービスの中断や品質低下を可能な限り早く回復させるプロセス。", supplement: "分類→優先度付け→エスカレーション（機能的/階層的）→解決→クローズ。重大インシデント: 別プロセスで緊急対応。" },
            { question: "問題管理", answer: "インシデントの根本原因を特定し、再発を防止するプロセス。", supplement: "リアクティブ（発生後の分析）とプロアクティブ（傾向分析で予防）。既知のエラー (Known Error) → KEDB (既知のエラーDB)。ワークアラウンド。" },
            { question: "変更管理", answer: "変更のリスクを評価し、承認プロセスを経て変更を実施するプロセス。", supplement: "CAB (変更諮問委員会): 変更の審議。標準変更: 事前承認済みの低リスク変更。緊急変更: 緊急CAB (eCAB)。RFC (変更要求)。" },
            { question: "リリース管理と展開管理", answer: "テスト済みの変更を本番環境に安全に展開するプロセス。", supplement: "リリースユニット: デプロイの単位。ビッグバン vs 段階的展開。ブルーグリーンデプロイ、カナリアリリース。" },
            { question: "構成管理 (CMDB)", answer: "IT資産と構成アイテム (CI) の情報を管理するデータベース。CIの関係性を記録。", supplement: "CI: サーバ、ソフトウェア、ドキュメント等。CMDB: CIのバージョン、関連、状態を一元管理。構成監査で整合性確認。" },
            { question: "イベント管理", answer: "CIやサービスの状態変化（イベント）を検知し、適切な対応を行うプロセス。", supplement: "情報イベント（正常動作の記録）、警告イベント（閾値接近）、例外イベント（異常発生）。監視ツールとの連携。" },
            { question: "サービスデスク", answer: "ユーザとIT部門の単一窓口 (SPOC: Single Point of Contact)。", supplement: "ローカル、集中型、バーチャル、フォロー・ザ・サン。セルフサービスポータル、チャットボット。顧客満足度調査。" }
        ]
    },
    {
        id: "availability_capacity",
        name: "可用性・キャパシティ管理",
        icon: "📊",
        color: "#E17055",
        items: [
            { question: "可用性管理", answer: "SLAで合意された可用性を達成・維持するプロセス。稼働率 = MTBF / (MTBF + MTTR)。", supplement: "信頼性 (MTBF↑)、保守性 (MTTR↓)、サービス性（外部サポートの質）。VBF (Vital Business Function) の特定。" },
            { question: "キャパシティ管理", answer: "現在・将来の需要に対応するために、適正なITリソースを確保するプロセス。", supplement: "ビジネスキャパシティ管理、サービスキャパシティ管理、コンポーネントキャパシティ管理。容量計画 (Capacity Plan)。" },
            { question: "ITサービス継続性管理 (ITSCM)", answer: "災害時にサービスを復旧・継続するための計画と準備を行うプロセス。BCPと連携。", supplement: "BIA (ビジネスインパクト分析): 業務中断の影響評価。RTO/RPO。DR (災害復旧) サイト: ホット/ウォーム/コールド。" },
            { question: "情報セキュリティ管理", answer: "CIA (機密性・完全性・可用性) を確保するプロセス。ISMS (ISO 27001) と連携。", supplement: "セキュリティポリシー、リスクアセスメント、アクセス管理、セキュリティインシデント管理。" },
            { question: "サプライヤ管理", answer: "外部サプライヤとの関係を管理し、SLAの達成を支援するプロセス。", supplement: "UC (Underpinning Contract) の管理。サプライヤの評価とカテゴリ分け（戦略的/戦術的/運用型/コモディティ）。" }
        ]
    },
    {
        id: "service_design_transition",
        name: "サービス設計・移行",
        icon: "🎨",
        color: "#0984E3",
        items: [
            { question: "サービス設計パッケージ (SDP)", answer: "新規・変更サービスに必要な情報をまとめた文書。運用設計、テスト計画等を含む。", supplement: "サービス設計の5つの側面: サービスソリューション、管理情報システム・ツール、技術アーキテクチャ、プロセス、測定方法。" },
            { question: "サービス移行計画", answer: "設計→テスト→本番環境への移行を計画的に行うプロセス。移行の3ステップ: 計画→構築→テスト→展開。", supplement: "パイロット（限定展開）→段階展開→全面展開。ロールバック計画の策定が必須。" },
            { question: "サービスの検証とテスト", answer: "サービスがSDP通りに構築され、要件を満たすかを検証するプロセス。", supplement: "テスト環境の管理。回帰テスト。性能テスト。受入テスト。テスト計画書、テスト報告書。" },
            { question: "ナレッジ管理 (SKMS)", answer: "サービスに関する知識を蓄積・共有・活用するプロセス。", supplement: "SKMS (Service Knowledge Management System): CMDB、KEDB、過去のインシデント情報等を統合。暗黙知→形式知の変換。" }
        ]
    },
    {
        id: "metrics_reporting",
        name: "メトリクス・報告",
        icon: "📈",
        color: "#FDCB6E",
        items: [
            { question: "KPI (重要業績評価指標)", answer: "サービスの目標達成度を測る定量的な指標。先行指標と遅行指標。", supplement: "例: 稼働率、平均復旧時間、顧客満足度、初回解決率。CSF (Critical Success Factor) に基づいて設定。" },
            { question: "SLAレポーティング", answer: "SLAの達成状況を定期的に報告するプロセス。ダッシュボード、月次報告書。", supplement: "SLA違反時のペナルティと改善計画。トレンド分析で将来のリスクを予測。赤/黄/緑のRAGステータス。" },
            { question: "成熟度モデル", answer: "サービスマネジメントプロセスの成熟度を段階的に評価するフレームワーク。", supplement: "レベル1(初期)→2(反復可能)→3(定義済み)→4(管理)→5(最適化)。CMMI、P3M3等。" },
            { question: "サービス改善計画 (SIP)", answer: "SLA未達やプロセスの課題に対する改善施策をまとめた計画書。", supplement: "CSIレジスター: 改善機会のリスト。優先度付けして順次実施。ROIで改善効果を評価。" }
        ]
    },
    {
        id: "modern_ops",
        name: "モダンオペレーション (SRE/FinOps)",
        icon: "⚡",
        color: "#636e72",
        items: [
            { question: "SRE (Site Reliability Engineering)", answer: "Googleが提唱した、ソフトウェアエンジニアリングの手法を用いてシステムの信頼性を管理するアプローチ。", supplement: "トイル（労苦）の削減（50%ルール）。自動化の推進。開発と運用のサイロ化解消。" },
            { question: "SLI / SLO / エラーバジェット", answer: "SLI: サービスレベル指標（稼働率等）。SLO: 目標値。エラーバジェット: 100% - SLO（許容される停止時間）。", supplement: "エラーバジェットが残っていればリリース速度を優先し、枯渇したら信頼性向上（リリース停止）に注力する。" },
            { question: "FinOps", answer: "クラウドコストの財務管理手法。エンジニア、財務、ビジネス部門が連携してコスト対効果を最大化する。", supplement: "Inform (可視化) → Optimize (最適化) → Operate (運用) のサイクル。RI/SPの活用、アイドルリソースの削除。" },
            { question: "AIOps", answer: "AI/機械学習を活用してIT運用を自動化・効率化する手法。", supplement: "異常検知の早期化、ノイズ（不要アラート）の削減、根本原因分析 (RCA) の自動化。" },
            { question: "ChatOps", answer: "チャットツールをインターフェースとして、運用タスク（デプロイ、障害対応等）を実行・共有する手法。", supplement: "Botとの対話でコマンド実行。透明性の向上（チーム全員が履歴を見える）。コミュニケーションと操作の統合。" },
            { question: "オブザーバビリティ (可観測性)", answer: "システムの外部出力（ログ、メトリクス、トレース）から内部状態をどれだけ推測できるかの尺度。", supplement: "「なぜ」起きたかを深掘りできる能力。従来のモニタリング（「何が」起きたか）からの進化。" }
        ]
    }
];
