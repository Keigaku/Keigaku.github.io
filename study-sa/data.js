// システムアーキテクト試験 暗記データ
const STATS_DATA = [
    {
        id: "architecture_design",
        name: "システムアーキテクチャ設計",
        icon: "🏗️",
        color: "#6C5CE7",
        items: [
            { question: "クライアントサーバシステム (C/S)", answer: "クライアントがサーバに処理を要求し、結果を受け取る分散処理形態。", supplement: "2層C/S、3層C/S（プレゼンテーション層・アプリケーション層・データ層）。Webシステムは3層が主流。" },
            { question: "マイクロサービスアーキテクチャ", answer: "独立した小さなサービスの集合としてシステムを構築。各サービスは独立してデプロイ可能。", supplement: "モノリシック（一枚岩）の対極。API (REST/gRPC) で通信。サービスメッシュ、サーキットブレーカ。" },
            { question: "イベント駆動アーキテクチャ (EDA)", answer: "イベントの発生をトリガーとして処理を実行するアーキテクチャ。疎結合を実現。", supplement: "メッセージキュー (MQ)、Pub/Subモデル。Apache Kafka等。CQRS (コマンドクエリ責務分離) と相性が良い。" },
            { question: "サーバレスアーキテクチャ", answer: "サーバの管理不要でコードの実行に集中できるクラウドサービス。FaaS (Function as a Service)。", supplement: "AWS Lambda, Azure Functions。イベントドリブン、オートスケーリング。コールドスタート問題。" },
            { question: "レイヤードアーキテクチャ", answer: "プレゼンテーション層→ビジネスロジック層→データアクセス層の階層構造。", supplement: "各層は直下の層のみに依存。関心の分離。MVC (Model-View-Controller) パターン。" },
            { question: "コンテナ技術 (Docker/Kubernetes)", answer: "Docker: アプリとその依存環境を軽量コンテナにパッケージ化。Kubernetes: コンテナのオーケストレーション。", supplement: "仮想マシンより軽量・高速。CI/CDとの親和性。Pod, Service, Deployment等のKubernetes概念。" },
            { question: "スケーラビリティ", answer: "スケールアップ: サーバ性能向上。スケールアウト: サーバ台数増加。", supplement: "水平スケーリング（スケールアウト）がクラウド時代の主流。ロードバランサで負荷分散。" },
            { question: "キャパシティプランニング", answer: "将来の需要を予測し、必要なシステム資源（CPU、メモリ、ストレージ等）を計画する。", supplement: "ピーク時の負荷を考慮。性能テスト（負荷テスト、ストレステスト）で検証。" }
        ]
    },
    {
        id: "requirements",
        name: "要件定義・設計",
        icon: "📋",
        color: "#00B894",
        items: [
            { question: "機能要件と非機能要件", answer: "機能要件: システムが「何をするか」。非機能要件: 性能、信頼性、セキュリティ等の品質特性。", supplement: "ISO 25010 (SQuaRE): 機能適合性、性能効率性、互換性、使用性、信頼性、セキュリティ、保守性、移植性。" },
            { question: "DFD (データフロー図)", answer: "データの流れを可視化する図。プロセス（○）、データストア（＝）、データフロー（→）、外部エンティティ（□）。", supplement: "レベル0（コンテキスト図）→レベル1→レベル2と段階的に詳細化。構造化分析の手法。" },
            { question: "ER図 (実体関連図)", answer: "エンティティ（実体）とリレーションシップ（関連）でデータ構造を設計。", supplement: "カーディナリティ: 1対1、1対多、多対多。多対多はリレーションテーブルで解消。概念設計→論理設計→物理設計。" },
            { question: "UMLの主要ダイアグラム", answer: "構造図: クラス図、コンポーネント図。振る舞い図: シーケンス図、ユースケース図、アクティビティ図、状態遷移図。", supplement: "クラス図: 静的構造。シーケンス図: 時間軸でのメッセージ交換。ユースケース図: アクタとシステムの関係。" },
            { question: "デザインパターン (GoF)", answer: "Singleton, Factory Method, Observer, Strategy, Decorator, Adapter, Facade 等23パターン。", supplement: "生成: Singleton, Factory, Abstract Factory, Builder, Prototype。構造: Adapter, Decorator, Facade, Proxy。振る舞い: Observer, Strategy, Template Method, State。" },
            { question: "SOLID原則", answer: "S: 単一責任。O: 開放閉鎖。L: リスコフの置換。I: インタフェース分離。D: 依存性逆転。", supplement: "オブジェクト指向設計の5つの基本原則。保守性・拡張性の高い設計を実現する。" },
            { question: "ドメイン駆動設計 (DDD)", answer: "業務ドメインの知識を中心にソフトウェアを設計する手法。", supplement: "ユビキタス言語、境界づけられたコンテキスト、エンティティ、値オブジェクト、アグリゲート、リポジトリ。" },
            { question: "画面設計・UI/UX", answer: "ユーザビリティ: 使いやすさ。アクセシビリティ: 障がい者も含めた利用のしやすさ。", supplement: "ニールセンのユーザビリティ10原則。ヒューリスティック評価。レスポンシブデザイン。WCAG (Webアクセシビリティガイドライン)。" }
        ]
    },
    {
        id: "database_design",
        name: "データベース設計",
        icon: "🗃️",
        color: "#E17055",
        items: [
            { question: "概念設計→論理設計→物理設計", answer: "概念: ER図。論理: テーブル定義・正規化。物理: インデックス、パーティション、配置。", supplement: "正規化（第1〜第3正規形、ボイスコッド正規形）→ 必要に応じて非正規化（性能チューニング）。" },
            { question: "NoSQLデータベース", answer: "キーバリュー型、ドキュメント型、カラム指向型、グラフ型の4分類。", supplement: "KVS: Redis, DynamoDB。ドキュメント: MongoDB。カラム指向: Cassandra, HBase。グラフ: Neo4j。CAP定理。" },
            { question: "CAP定理", answer: "分散システムでは一貫性 (C)、可用性 (A)、分断耐性 (P) の3つを同時には満たせない。", supplement: "CA: RDBMS。CP: HBase。AP: DynamoDB, Cassandra。結果整合性 (Eventual Consistency)。" },
            { question: "データウェアハウス (DWH)", answer: "意思決定支援のためにデータを統合・蓄積する大規模データベース。", supplement: "ETL: Extract, Transform, Load。OLAP (多次元分析)。スタースキーマ（ファクトテーブル＋ディメンションテーブル）。" },
            { question: "データレイク", answer: "構造化・非構造化データを生の形式で格納する大規模ストレージ。", supplement: "DWHとの違い: DWHは加工済み構造化データ、データレイクは未加工で多様な形式。Hadoop, S3。" },
            { question: "トランザクション分離レベル", answer: "Read Uncommitted → Read Committed → Repeatable Read → Serializable", supplement: "ダーティリード、ファジーリード（非再現リード）、ファントムリード。レベルが上がるほど整合性↑、性能↓。" }
        ]
    },
    {
        id: "development_process",
        name: "開発プロセス・品質",
        icon: "⚙️",
        color: "#0984E3",
        items: [
            { question: "アジャイル開発のプラクティス", answer: "スクラム、XP、カンバン。スプリント、デイリースタンドアップ、バックログ。", supplement: "スクラムの3つの役割: PO (プロダクトオーナー), SM (スクラムマスター), 開発チーム。スプリントレビュー、レトロスペクティブ。" },
            { question: "テスト駆動開発 (TDD)", answer: "Red → Green → Refactor のサイクル。テストを先に書いてから実装する。", supplement: "ユニットテストの自動化が前提。回帰テスト（リグレッションテスト）の効率化。" },
            { question: "ソフトウェアメトリクス", answer: "LOC (行数)、FP (ファンクションポイント)、サイクロマティック複雑度。", supplement: "McCabeの複雑度: 制御フローグラフの独立パス数 = 辺 - 節 + 2。10以下が理想。" },
            { question: "品質管理 (SQuaRE)", answer: "ISO/IEC 25010: ソフトウェア品質の8つの特性。", supplement: "機能適合性、性能効率性、互換性、使用性、信頼性、セキュリティ、保守性、移植性。利用時品質も定義。" },
            { question: "リファクタリング", answer: "外部動作を変えずに内部構造を改善する活動。", supplement: "コードの臭い: 長いメソッド、重複コード、大きなクラス。安全なリファクタリングにはテストが必須。" },
            { question: "技術的負債 (Technical Debt)", answer: "短期的な利便性のために将来の保守コストが増加する設計上の妥協。", supplement: "リファクタリングで返済。管理しないと開発速度が低下し、品質が悪化する。" }
        ]
    },
    {
        id: "infrastructure",
        name: "インフラ・運用設計",
        icon: "🖧",
        color: "#FDCB6E",
        items: [
            { question: "可用性設計", answer: "冗長化、フェイルオーバー、クラスタリングでシステムの稼働率を向上。", supplement: "稼働率 99.99% (4ナイン) = 年間約52分の停止。HA (High Availability) 構成。アクティブ-スタンバイ、アクティブ-アクティブ。" },
            { question: "災害対策 (DR)", answer: "ホットサイト: 即時切替。ウォームサイト: 数時間。コールドサイト: 数日。", supplement: "RPO/RTOに基づいてDR方式を選定。地理的に離れた場所にバックアップサイトを設置。" },
            { question: "負荷分散", answer: "ロードバランサでリクエストを複数サーバに分散。ラウンドロビン、重み付き、最小コネクション。", supplement: "L4ロードバランサ（TCP/UDP）、L7ロードバランサ（HTTP）。CDN (Content Delivery Network)。" },
            { question: "監視設計", answer: "リソース監視（CPU/メモリ/ディスク）、サービス監視（応答時間/エラー率）、ログ監視。", supplement: "Observability: メトリクス、ログ、トレースの3本柱。SRE (Site Reliability Engineering)。SLI/SLO/SLA。" },
            { question: "IaC (Infrastructure as Code)", answer: "インフラの構成をコードで管理・自動化する手法。", supplement: "Terraform, Ansible, CloudFormation。バージョン管理、再現性、自動化。GitOps。" },
            { question: "CI/CD パイプライン", answer: "CI: コード変更の自動ビルド・テスト。CD: 自動デプロイ。", supplement: "パイプライン: ソース → ビルド → テスト → デプロイ。ブルーグリーンデプロイ、カナリアリリース、ローリングアップデート。" }
        ]
    },
    {
        id: "modern_patterns",
        name: "モダンアーキテクチャ・パターン",
        icon: "🧩",
        color: "#636e72",
        items: [
            { question: "Twelve-Factor App", answer: "SaaSアプリケーション構築のための12のベストプラクティス。", supplement: "コードベース、依存関係、設定、バックエンドサービス、ビルド・リリース・実行、プロセス、ポートバインディング、並行性、廃棄容易性、開発/本番一致、ログ、管理プロセス。" },
            { question: "BFF (Backend For Frontend)", answer: "特定のフロントエンド（Web、モバイル等）専用のバックエンドサービスを用意するパターン。", supplement: "クライアントごとのデータ要件の違いを吸収し、チャットの回数を減らす。API Gatewayとの連携。" },
            { question: "サイドカーパターン", answer: "アプリケーションコンテナの横に補助的なコンテナ（サイドカー）を配置し、共通機能を提供する。", supplement: "ログ収集、監視、通信プロキシ（Envoy等）。KubernetesのPod内で構成。" },
            { question: "CQRS (Command Query Responsibility Segregation)", answer: "コマンド（更新）とクエリ（参照）の責務・モデルを分離するアーキテクチャ。", supplement: "読み込みと書き込みの負荷が非対称な場合に有効。イベントソーシングと組み合わせて使われることが多い。" },
            { question: "イベントソーシング", answer: "システムの状態を、発生したイベントの系列として記録する手法。", supplement: "状態の完全な履歴が残る。再生（リプレイ）による状態復元が可能。スナップショットでパフォーマンス対策。" },
            { question: "カオスエンジニアリング", answer: "本番環境で意図的に障害を起こし、システムの回復力（レジリエンス）を検証・強化する手法。", supplement: "NetflixのChaos Monkeyが有名。分散システムの弱点を能動的に発見する。" }
        ]
    }
];
