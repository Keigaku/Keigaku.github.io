// 情報処理安全確保支援士試験 暗記データ
const STATS_DATA = [
    {
        id: "crypto",
        name: "暗号技術",
        icon: "🔐",
        color: "#6C5CE7",
        items: [
            { question: "共通鍵暗号 (対称鍵暗号)", answer: "同一の鍵で暗号化・復号。高速。AES (128/192/256ビット) が標準。", supplement: "ブロック暗号: AES, 3DES。ストリーム暗号: ChaCha20。暗号利用モード: CBC, CTR, GCM (認証付き暗号)。" },
            { question: "公開鍵暗号 (非対称鍵暗号)", answer: "公開鍵で暗号化、秘密鍵で復号。鍵配送問題を解決。RSA, 楕円曲線暗号 (ECC)。", supplement: "RSA: 大きな整数の素因数分解の困難性。ECC: 離散対数問題。鍵長: RSA 2048ビット ≒ ECC 256ビット。" },
            { question: "ハッシュ関数", answer: "任意長データから固定長ハッシュ値を生成。一方向性、衝突耐性。SHA-256, SHA-3。", supplement: "MD5, SHA-1 は脆弱（衝突攻撃が可能）。パスワード保存にはbcrypt, scrypt, Argon2（ソルト+ストレッチング）。" },
            { question: "デジタル署名", answer: "送信者の秘密鍵で署名（ハッシュ値を暗号化）→ 受信者が公開鍵で検証。改ざん検知と本人確認。", supplement: "RSA署名、DSA、ECDSA、EdDSA。否認防止: 送信者が後から「送っていない」と否認できない。" },
            { question: "PKI (公開鍵基盤)", answer: "CA (認証局) がデジタル証明書を発行し、公開鍵の正当性を保証する仕組み。", supplement: "X.509証明書。CRL (証明書失効リスト)、OCSP (オンライン証明書状態プロトコル)。ルートCA→中間CA→サーバ証明書の信頼チェーン。" },
            { question: "鍵交換 (Key Exchange)", answer: "Diffie-Hellman (DH): 共有鍵を安全に生成。ECDHE: 楕円曲線DH（前方秘匿性あり）。", supplement: "前方秘匿性 (PFS): 秘密鍵が漏洩しても過去の通信は復号できない。TLS 1.3ではECDHEが必須。" },
            { question: "耐量子暗号 (Post-Quantum Cryptography)", answer: "量子コンピュータによる解読に耐える暗号方式。格子暗号、符号ベース暗号、多変数多項式暗号。", supplement: "NIST PQC標準化: CRYSTALS-Kyber (鍵交換), CRYSTALS-Dilithium (署名)。RSA/ECCは量子コンピュータに脆弱。" }
        ]
    },
    {
        id: "auth_access",
        name: "認証・アクセス制御",
        icon: "🔑",
        color: "#00B894",
        items: [
            { question: "多要素認証 (MFA)", answer: "知識要素（パスワード）、所持要素（トークン/スマホ）、生体要素（指紋/顔）の2つ以上を組合せ。", supplement: "2段階認証 ≠ 2要素認証。TOTP (Time-based One-Time Password): Google Authenticator等。FIDO2/WebAuthn: パスワードレス認証。" },
            { question: "OAuth 2.0 / OpenID Connect", answer: "OAuth 2.0: 認可（リソースへのアクセス許可）のフレームワーク。OIDC: OAuth 2.0上の認証レイヤー。", supplement: "認可コードフロー、暗黙的フロー、クライアントクレデンシャル。アクセストークン、リフレッシュトークン、IDトークン (JWT)。" },
            { question: "SAML (Security Assertion Markup Language)", answer: "異なるドメイン間でのSSO (シングルサインオン) を実現するXMLベースの標準仕様。", supplement: "IdP (Identity Provider) → SP (Service Provider)。アサーション: 認証情報・属性情報・認可情報。企業向けSSOの標準。" },
            { question: "アクセス制御モデル", answer: "DAC (任意): 所有者が設定。MAC (強制): システムが強制。RBAC (役割): 役割ベース。ABAC (属性): 属性ベース。", supplement: "最小権限の原則。職務分掌 (SoD)。Need-to-Know原則。ゼロトラスト: すべてのアクセスを検証。" },
            { question: "特権アクセス管理 (PAM)", answer: "管理者アカウント等の特権IDを厳格に管理し、操作ログを記録する仕組み。", supplement: "パスワードヴォルティング、ジャストインタイム (JIT) アクセス、セッション記録。特権IDの共有禁止。" },
            { question: "ディレクトリサービス (LDAP/AD)", answer: "LDAP: ユーザ・グループ情報を一元管理するプロトコル。Active Directory: MicrosoftのLDAP実装。", supplement: "Kerberos: ADの認証プロトコル。TGT→サービスチケット。DIT (Directory Information Tree) で階層管理。" }
        ]
    },
    {
        id: "network_security",
        name: "ネットワークセキュリティ",
        icon: "🛡️",
        color: "#E17055",
        items: [
            { question: "ファイアウォール", answer: "パケットフィルタリング、ステートフルインスペクション、アプリケーションゲートウェイ（プロキシ）、NGFW。", supplement: "DMZ (非武装地帯): 外部公開サーバの配置。マイクロセグメンテーション: ゼロトラストの実装方式。" },
            { question: "IDS/IPS", answer: "IDS: 検知・通知。IPS: 検知・遮断。シグネチャベース（既知攻撃）とアノマリベース（異常検知）。", supplement: "NIDS: ネットワーク型。HIDS: ホスト型。ファルスポジティブ（誤検知）とファルスネガティブ（見逃し）。" },
            { question: "VPN技術", answer: "IPsec VPN: L3暗号化、拠点間接続。SSL/TLS VPN: HTTPSベース、リモートアクセス。WireGuard。", supplement: "IPsec: IKE (鍵交換)、ESP (暗号化+認証)。スプリットトンネリング vs フルトンネル。ゼロトラストネットワークアクセス (ZTNA) がVPNの代替に。" },
            { question: "WAF (Web Application Firewall)", answer: "Webアプリケーションへの攻撃（SQLインジェクション、XSS等）を検知・遮断する専用FW。", supplement: "ブラックリスト方式（攻撃パターンを遮断）とホワイトリスト方式（正常パターンのみ許可）。クラウドWAF。" },
            { question: "SIEM (Security Information and Event Management)", answer: "ログを統合的に収集・分析し、セキュリティイベントを検知・可視化するシステム。", supplement: "相関分析: 複数のログソースから関連するイベントを検出。SOAR: インシデント対応の自動化。脅威インテリジェンスとの連携。" },
            { question: "DDoS攻撃と対策", answer: "大量のトラフィックでサービスを停止させる攻撃。SYN Flood、UDP Flood、DNS Amplification、HTTP Flood。", supplement: "対策: CDN、WAF、スクラビングセンター、レートリミット。ボリューム型、プロトコル型、アプリケーション層型。" }
        ]
    },
    {
        id: "web_app_security",
        name: "Webアプリケーションセキュリティ",
        icon: "🌐",
        color: "#0984E3",
        items: [
            { question: "SQLインジェクション", answer: "入力値にSQL文を挿入し、意図しないDB操作を実行する攻撃。", supplement: "対策: プリペアドステートメント（バインド変数）、エスケープ処理、WAF。データの窃取・改ざん・削除が可能。" },
            { question: "XSS (クロスサイトスクリプティング)", answer: "Webページにスクリプトを埋め込み、閲覧者のブラウザで不正実行する攻撃。", supplement: "反射型、格納型、DOMベース。対策: 出力エスケープ、Content-Security-Policy (CSP)、HttpOnly Cookie。" },
            { question: "CSRF (クロスサイトリクエストフォージェリ)", answer: "認証済みユーザに意図しないリクエストを送信させる攻撃。", supplement: "対策: CSRFトークン、SameSite Cookie属性、Refererヘッダ検証。ログイン中のセッションを悪用。" },
            { question: "SSRF (Server Side Request Forgery)", answer: "サーバに内部ネットワークや他のサービスへのリクエストを実行させる攻撃。", supplement: "クラウド環境で深刻（メタデータAPI経由でクレデンシャル窃取）。対策: アクセス先のホワイトリスト、DNS再バインディング対策。" },
            { question: "セキュアコーディング", answer: "入力バリデーション、出力エスケープ、エラーハンドリング、安全なセッション管理、暗号の適切な使用。", supplement: "OWASP Top 10: 最も重要なWebセキュリティリスク。OWASP ASVS: アプリケーションセキュリティ検証標準。" },
            { question: "セキュリティヘッダ", answer: "CSP, X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security (HSTS)", supplement: "CSP: スクリプトの実行元を制限。HSTS: HTTPS通信を強制。X-Frame-Options: クリックジャッキング対策。" }
        ]
    },
    {
        id: "incident_forensics",
        name: "インシデント対応・フォレンジック",
        icon: "🔬",
        color: "#FDCB6E",
        items: [
            { question: "インシデント対応の手順", answer: "準備→検知・分析→封じ込め→根絶→復旧→教訓 (NIST SP 800-61)", supplement: "CSIRT (Computer Security Incident Response Team): インシデント対応の専門チーム。初動対応が重要。" },
            { question: "デジタルフォレンジック", answer: "電子的証拠の収集・保全・分析・報告を行う技術。法的証拠としての証拠能力を確保。", supplement: "証拠保全: ビットイメージコピー、ハッシュ値記録。Chain of Custody (証拠の連鎖): 証拠の取扱い記録。揮発性の高い順に収集。" },
            { question: "マルウェア分類", answer: "ウイルス、ワーム（自己増殖）、トロヤの木馬、ランサムウェア（身代金）、ルートキット、バックドア、ボット。", supplement: "APT (Advanced Persistent Threat): 標的型の持続的攻撃。ファイルレスマルウェア: メモリ上で動作、ディスクに残らない。" },
            { question: "脆弱性管理", answer: "CVE: 共通脆弱性識別子。CVSS: 共通脆弱性評価システム (0.0-10.0)。CWE: 共通脆弱性タイプ。", supplement: "CVSS基本値: 攻撃容易性、影響度。パッチマネジメント: 脆弱性情報の収集→影響評価→適用計画→適用→確認。" },
            { question: "ペネトレーションテスト", answer: "実際に攻撃を試行し、システムの脆弱性を検証するテスト。ブラックボックス/ホワイトボックス/グレーボックス。", supplement: "OSINT: 公開情報の収集。スキャン→列挙→エクスプロイト→報告。倫理的ハッキング。バグバウンティ。" },
            { question: "脅威モデリング", answer: "STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege", supplement: "設計段階でセキュリティリスクを体系的に分析。攻撃ツリー、データフロー図ベースの分析。" }
        ]
    },
    {
        id: "security_management",
        name: "セキュリティ管理・法制度",
        icon: "📜",
        color: "#A29BFE",
        items: [
            { question: "ISMS (ISO 27001)", answer: "情報セキュリティマネジメントシステムの国際規格。PDCA (Plan-Do-Check-Act) サイクルで継続的改善。", supplement: "リスクアセスメント→リスク対応→管理策の選択（附属書A）。適用宣言書 (SoA)。内部監査とマネジメントレビュー。" },
            { question: "リスクアセスメント", answer: "リスク特定→リスク分析（影響度×発生可能性）→リスク評価→リスク対応（低減/回避/転嫁/受容）", supplement: "リスクマトリクス。残留リスク: 対策後に残るリスク。リスクアペタイト: 組織が許容するリスク水準。" },
            { question: "個人情報保護法", answer: "個人情報の取得・利用・第三者提供に関するルール。要配慮個人情報。匿名加工情報。仮名加工情報。", supplement: "2022年改正: 漏えい報告の義務化、罰則強化。越境移転規制。個人情報保護委員会。" },
            { question: "不正アクセス禁止法", answer: "不正にアクセス制御を突破してコンピュータを使用する行為を禁止。他人のID/パスワードの不正使用も対象。", supplement: "罰則: 3年以下の懲役 or 100万円以下の罰金。不正アクセスの助長行為（ID売買等）も処罰対象。" },
            { question: "サイバーセキュリティ基本法", answer: "国、地方公共団体、重要インフラ事業者等のサイバーセキュリティに関する責務を規定。", supplement: "NISC (内閣サイバーセキュリティセンター): 政府のサイバーセキュリティ政策の司令塔。サイバーセキュリティ戦略。" },
            { question: "GDPR (EU一般データ保護規則)", answer: "EU域内の個人データ保護の規則。域外適用。データ主体の権利（アクセス権、削除権、ポータビリティ権）。", supplement: "DPO (データ保護責任者) の設置義務。72時間以内の漏えい通知。制裁金: 売上高の4% or 2000万ユーロ。" }
        ]
    },
    {
        id: "modern_security",
        name: "最新セキュリティ動向",
        icon: "🆕",
        color: "#636e72",
        items: [
            { question: "ゼロトラストアーキテクチャ (NIST SP 800-207)", answer: "「決して信頼せず、常に検証する」という原則に基づくセキュリティモデル。", supplement: "全リソースへのアクセスをセッションごとに認証・認可。PEP (Policy Enforcement Point) と PDP (Policy Decision Point)。" },
            { question: "サプライチェーン攻撃", answer: "製品やソフトウェアの供給網（サプライチェーン）の弱点を狙う攻撃。", supplement: "SolarWinds事件が有名。委託先やOSSライブラリへの攻撃。対策: 委託先管理、SBOMの活用。" },
            { question: "SBOM (Software Bill of Materials)", answer: "ソフトウェア全部品表。含まれるコンポーネント、バージョン、ライセンス、脆弱性情報のリスト。", supplement: "SPDX, CycloneDX, SWIDタグ等の標準フォーマット。脆弱性管理（Vex）とセットで運用。" },
            { question: "クラウドセキュリティ (CSPM / CWPP)", answer: "CSPM: 設定ミス検知（Cloud Security Posture Management）。CWPP: ワークロード保護（Cloud Workload Protection Platform）。", supplement: "CNAPP: CSPM, CWPP, CIEM (権限管理) を統合したプラットフォーム。責任共有モデルの理解が前提。" },
            { question: "FIDO2 / WebAuthn", answer: "パスワードレス認証の技術標準。生体認証等をローカルで行い、署名のみをサーバに送信。", supplement: "公開鍵暗号方式を利用。サーバに生体情報は保存されない。フィッシング耐性が高い。" },
            { question: "コンフィデンシャルコンピューティング", answer: "データを使用中（処理中）もハードウェアレベル（TEE）で暗号化・保護する技術。", supplement: "Intel SGX, AWS Nitro Enclaves。クラウド管理者からもデータが見えない状態を実現。" }
        ]
    }
];
