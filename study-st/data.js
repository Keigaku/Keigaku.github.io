// ITストラテジスト試験 暗記データ
const STATS_DATA = [
    {
        id: "it_strategy",
        name: "IT戦略策定",
        icon: "🎯",
        color: "#6C5CE7",
        items: [
            { question: "エンタープライズアーキテクチャ (EA)", answer: "組織全体の業務とITの最適化を図るための設計手法。ザックマンフレームワーク、TOGAF等。", supplement: "4つの体系: ビジネス(BA)、データ(DA)、アプリケーション(AA)、テクノロジ(TA)。As-Is → To-Be のギャップ分析。" },
            { question: "IT投資評価", answer: "IT投資の効果を定量的・定性的に評価する手法。", supplement: "ROI、NPV、IRR、TCO（総所有コスト）。バランスト・スコアカードによる多面的評価。" },
            { question: "ITポートフォリオマネジメント", answer: "IT投資案件を分類・評価し、資源配分を最適化する手法。", supplement: "戦略的IT投資、情報的IT投資、トランザクション的IT投資、インフラ的IT投資の4象限で管理。" },
            { question: "情報化推進のフレームワーク", answer: "BSC-IT: IT部門のバランスト・スコアカード。CIO（最高情報責任者）が推進。", supplement: "ITガバナンス: COBIT。IT戦略はビジネス戦略と整合（ストラテジックアライメント）。" },
            { question: "デジタルトランスフォーメーション (DX)", answer: "デジタル技術を活用してビジネスモデルや業務プロセスを根本的に変革すること。", supplement: "デジタイゼーション（アナログ→デジタル）→ デジタライゼーション（プロセス変革）→ DX（ビジネスモデル変革）。" },
            { question: "SOA (Service Oriented Architecture)", answer: "システムの機能をサービスとして部品化し、組み合わせてシステムを構築するアーキテクチャ。", supplement: "疎結合、再利用性、相互運用性。ESB（エンタープライズサービスバス）で連携。Webサービス、REST API。" },
            { question: "ビジネスモデルキャンバス", answer: "9つの構成要素でビジネスモデルを可視化するフレームワーク。", supplement: "顧客セグメント、価値提案、チャネル、顧客関係、収益の流れ、主要資源、主要活動、主要パートナー、コスト構造。" },
            { question: "SoR / SoE", answer: "SoR (Systems of Record): 記録のシステム（基幹系）。SoE (Systems of Engagement): 顧客との接点システム。", supplement: "バイモーダルIT: SoR（安定重視）とSoE（スピード重視）を使い分ける。SoI (Systems of Insight) も。" }
        ]
    },
    {
        id: "business_strategy",
        name: "経営戦略・事業戦略",
        icon: "🏢",
        color: "#00B894",
        items: [
            { question: "アンゾフの成長マトリクス", answer: "市場浸透、市場開拓、製品開発、多角化の4戦略。", supplement: "既存製品×既存市場=市場浸透、新製品×既存市場=製品開発、既存製品×新市場=市場開拓、新製品×新市場=多角化。" },
            { question: "バリューチェーン分析", answer: "主活動と支援活動に分解し、付加価値の源泉を分析するフレームワーク（ポーター）。", supplement: "主活動: 購買物流→製造→出荷物流→マーケティング・販売→サービス。支援活動: 全般管理、人事、技術開発、調達。" },
            { question: "コアコンピタンス", answer: "競合に模倣されにくい、企業の中核的な能力・強み。", supplement: "ハメル＆プラハラード。3つの条件: 顧客価値、競合差別化、拡張可能性。" },
            { question: "ブルーオーシャン戦略", answer: "競争のない新しい市場空間を創造する戦略。対義: レッドオーシャン。", supplement: "ERRC (Eliminate/Reduce/Raise/Create) の4アクション。価値イノベーション。" },
            { question: "M&A", answer: "合併 (Merger) と買収 (Acquisition)。企業の成長戦略の一つ。", supplement: "垂直統合、水平統合。デューデリジェンス: 企業価値の調査。PMI: M&A後の統合プロセス。" },
            { question: "プラットフォーム戦略", answer: "複数のユーザグループを結びつける場（プラットフォーム）を提供する戦略。", supplement: "ネットワーク効果: ユーザ数増加→価値向上。例: App Store、Amazon マーケットプレイス。" },
            { question: "破壊的イノベーション（クリステンセン）", answer: "既存の製品・サービスを破壊し、市場の構造を根本から変えるイノベーション。", supplement: "持続的イノベーション（既存製品の改善）vs 破壊的イノベーション。イノベーションのジレンマ。" },
            { question: "サブスクリプションモデル", answer: "定額料金で継続的にサービスを利用するビジネスモデル。", supplement: "KPI: MRR（月次経常収益）、チャーンレート（解約率）、LTV（顧客生涯価値）、CAC（顧客獲得コスト）。" }
        ]
    },
    {
        id: "it_governance",
        name: "ITガバナンス・コンプライアンス",
        icon: "⚖️",
        color: "#E17055",
        items: [
            { question: "COBIT", answer: "ITガバナンスと管理のためのフレームワーク。ISACA発行。", supplement: "5つの原則: ステークホルダーのニーズ充足、企業全体のカバー、統合フレームワークの適用、包括的アプローチ、ガバナンスと管理の分離。" },
            { question: "内部統制の6つの基本的要素", answer: "①統制環境 ②リスクの評価と対応 ③統制活動 ④情報と伝達 ⑤モニタリング ⑥ITへの対応", supplement: "J-SOX法（金融商品取引法）に基づく内部統制報告制度。COSO内部統制フレームワーク。" },
            { question: "BCP (事業継続計画)", answer: "災害やシステム障害時に、事業を継続・早期復旧するための計画。", supplement: "RTO (目標復旧時間)、RPO (目標復旧地点)、MTPD (最大許容停止時間)。BCM: BCPの管理プロセス。" },
            { question: "RTO / RPO", answer: "RTO: 復旧にかけられる最大時間。RPO: どの時点のデータまで復旧するか。", supplement: "RTO短い→ホットスタンバイ必要→コスト高。RPO短い→リアルタイムバックアップ必要。" },
            { question: "情報セキュリティガバナンス", answer: "経営陣のリーダーシップの下で情報セキュリティを組織的に管理・統制する仕組み。", supplement: "ISMS (ISO 27001): 情報セキュリティマネジメントシステム。リスクアセスメント→リスク対応→PDCA。" },
            { question: "CSR (企業の社会的責任)", answer: "企業が社会に与える影響に対し、法令遵守を超えて自主的に責任を果たすこと。", supplement: "ESG: 環境(E)・社会(S)・ガバナンス(G)の観点での経営。SDGs: 持続可能な開発目標。" },
            { question: "個人情報保護影響評価 (PIA/DPIA)", answer: "個人情報を取り扱うシステムの導入前に、プライバシーへの影響を事前評価する仕組み。", supplement: "GDPR (EU一般データ保護規則) で義務化。プライバシーバイデザインの原則。" }
        ]
    },
    {
        id: "system_planning",
        name: "システム企画・要件定義",
        icon: "📝",
        color: "#0984E3",
        items: [
            { question: "RFP (提案依頼書)", answer: "ベンダーに対してシステムの提案を依頼する文書。", supplement: "RFI (情報提供依頼書) → RFP (提案依頼書) → 提案書評価 → ベンダー選定。要件・制約・評価基準を記載。" },
            { question: "要件定義", answer: "業務要件、機能要件、非機能要件を明確にするプロセス。", supplement: "非機能要件: 性能、信頼性、セキュリティ、移行性、運用性。共通フレーム2013で標準化。" },
            { question: "フィージビリティスタディ", answer: "計画の実現可能性を事前に調査・検証すること。", supplement: "技術的実現性、経済的実現性、運用上の実現性、スケジュールの実現性を評価。" },
            { question: "ベンダー選定基準", answer: "技術力、価格、実績、提案内容、保守体制等を総合評価。", supplement: "総合評価方式、プロポーザル方式、競争入札方式。ベンチマーク: 定量的な性能比較。" },
            { question: "SoW (Statement of Work)", answer: "業務委託の範囲・成果物・スケジュール・品質基準を記載した業務仕様書。", supplement: "プロジェクトの前提条件・制約条件を明示。契約の基礎となる重要文書。" },
            { question: "共通フレーム2013", answer: "ソフトウェアライフサイクルプロセスの日本版標準規格（SLCP-JCF）。", supplement: "ISO/IEC 12207に基づく。取得者・供給者双方の共通の物差し。アクティビティとタスクで構成。" }
        ]
    },
    {
        id: "emerging_tech",
        name: "先端技術・トレンド",
        icon: "🚀",
        color: "#FDCB6E",
        items: [
            { question: "AI・機械学習の分類", answer: "教師あり学習（分類・回帰）、教師なし学習（クラスタリング）、強化学習（報酬最大化）。", supplement: "深層学習 (DL): ニューラルネットワーク。生成AI: LLM、画像生成。AutoML。" },
            { question: "クラウドコンピューティング", answer: "IaaS: インフラ提供。PaaS: 開発基盤提供。SaaS: アプリケーション提供。", supplement: "マルチクラウド、ハイブリッドクラウド。サーバレス (FaaS)。クラウドネイティブ。" },
            { question: "IoT (Internet of Things)", answer: "あらゆるモノがインターネットに接続され、データの収集・分析・制御を行う仕組み。", supplement: "エッジコンピューティング: 端末近くでデータ処理。LPWA (低消費電力広域通信)。デジタルツイン。" },
            { question: "ブロックチェーン", answer: "分散型台帳技術。改ざん耐性が高く、中央管理者が不要。", supplement: "コンセンサスアルゴリズム (PoW, PoS)。スマートコントラクト。暗号資産以外にもサプライチェーン管理等に活用。" },
            { question: "API エコノミー", answer: "APIを公開・連携することで新たな価値やビジネスを創出する経済圏。", supplement: "Open API、API Gateway、マイクロサービス。アグリゲーションサービス（複数APIの統合）。" },
            { question: "データドリブン経営", answer: "データ分析に基づいて意思決定を行う経営手法。", supplement: "BI (ビジネスインテリジェンス)、データレイク、データウェアハウス、ETL。CDO (最高データ責任者)。" },
            { question: "ゼロトラストセキュリティ", answer: "「何も信頼しない」を前提とし、すべてのアクセスを検証するセキュリティモデル。", supplement: "境界防御モデルの限界→ゼロトラストへ。SASE、SWG、CASB等の技術要素。" }
        ]
    },
    {
        id: "financial_analysis",
        name: "財務分析・投資評価",
        icon: "💰",
        color: "#A29BFE",
        items: [
            { question: "損益分岐点分析", answer: "BEP = 固定費 ÷ (1 - 変動費率) = 固定費 ÷ 限界利益率", supplement: "安全余裕率 = (売上高 - BEP) / 売上高。固定費削減でBEP低下。" },
            { question: "NPV (正味現在価値)", answer: "将来キャッシュフローの現在価値の合計。NPV > 0 なら投資採算あり。", supplement: "$$NPV = \\sum \\frac{CF_t}{(1+r)^t}$$。割引率 r は加重平均資本コスト (WACC) を使用。" },
            { question: "IRR (内部収益率)", answer: "NPV = 0 となる割引率。IRR > 資本コスト なら投資採算あり。", supplement: "NPVとIRRで結論が異なる場合はNPVを優先する。複数のIRRが存在する場合もある。" },
            { question: "TCO (Total Cost of Ownership)", answer: "システムの取得から廃棄までの総費用。初期費用 + 運用費用 + 廃棄費用。", supplement: "隠れたコスト（教育、管理、ダウンタイム等）も含める。クラウド移行の判断に重要。" },
            { question: "財務三表の関係", answer: "BS (貸借対照表)、PL (損益計算書)、CF (キャッシュフロー計算書) が相互に連携。", supplement: "PLの当期純利益→BSの利益剰余金。CFの期末残高→BSの現金。フリーキャッシュフロー = 営業CF - 投資CF。" },
            { question: "ROE (自己資本利益率)", answer: "ROE = 当期純利益 / 自己資本 × 100%", supplement: "デュポン分解: ROE = 売上高利益率 × 総資産回転率 × 財務レバレッジ。" }
        ]
    },
    {
        id: "innovation_law",
        name: "イノベーション・法務戦略",
        icon: "💡",
        color: "#d63031",
        items: [
            { question: "デザイン思考", answer: "ユーザの視点に立ち、課題解決のアイデアを創出するプロセス。", supplement: "共感 → 定義 → 概念化 → プロトタイプ → テスト。人間中心設計 (HCD)。" },
            { question: "OODAループ", answer: "Observe (観察) → Orient (状況判断) → Decide (意思決定) → Act (行動) の意思決定サイクル。", supplement: "PDCAサイクルよりも変化の激しい状況への適応に適している。" },
            { question: "知財戦略（オープン＆クローズ戦略）", answer: "自社技術をどこまで公開（標準化）し、どこを秘匿（ブラックボックス化）するかの戦略。", supplement: "ネットワーク外部性の獲得と差別化のバランス。特許ポートフォリオ。" },
            { question: "リーンスタートアップ", answer: "無駄を省き、最小限の機能を持つ製品 (MVP) で市場の反応を見ながら開発する手法。", supplement: "構築 (Build) → 計測 (Measure) → 学習 (Learn) のフィードバックループ。ピボット（方向転換）。" },
            { question: "GX (Green Transformation)", answer: "温室効果ガス排出削減と経済成長を両立させるための変革。", supplement: "カーボンフットプリント、スコープ1, 2, 3。ITによる省エネ（Green of IT）とITによる社会の省エネ（Green by IT）。" },
            { question: "ELSI (Ethics, Legal and Social Issues)", answer: "新技術の研究開発や実装において生じる倫理・法・社会的課題。", supplement: "AI倫理、プライバシー、説明責任。技術の社会受容性を高めるために重要。" }
        ]
    }
];
