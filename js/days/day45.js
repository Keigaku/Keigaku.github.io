// ===========================
// Day 45: クラウドアーキテクチャ入門
// ===========================
window.Day45 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>☁️ クラウドコンピューティングの基礎</h2>
                <p>金融業界のクラウド活用は<strong>「使うべきかどうか」から「どう使うか」</strong>のフェーズに移行しています。
                金融庁もクラウド利用を否定しておらず、メガバンクを含む多くの金融機関がクラウド移行を進めています。</p>
                <h3>サービスモデル</h3>
                <table class="styled-table">
                    <thead><tr><th>モデル</th><th>管理範囲</th><th>金融での活用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>IaaS</strong></td><td>インフラ（VM、ストレージ）</td><td>開発環境、DR（災害対策）サイト</td></tr>
                        <tr><td><strong>PaaS</strong></td><td>ランタイム・ミドルウェア</td><td>アプリケーション開発・テスト</td></tr>
                        <tr><td><strong>SaaS</strong></td><td>アプリケーション</td><td>CRM、会計、コミュニケーション</td></tr>
                        <tr><td><strong>FaaS</strong></td><td>関数単位の実行</td><td>イベント駆動のデータ処理</td></tr>
                    </tbody>
                </table>
                <h3>主要クラウドプロバイダー比較</h3>
                <table class="styled-table">
                    <thead><tr><th>プロバイダー</th><th>強み</th><th>金融での採用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>AWS</strong></td><td>サービス数最多、エコシステム</td><td>東京リージョン充実、FISC対応</td></tr>
                        <tr><td><strong>Microsoft Azure</strong></td><td>エンタープライズ統合</td><td>Active Directory連携、Office 365</td></tr>
                        <tr><td><strong>Google Cloud</strong></td><td>データ分析・AI/ML</td><td>BigQuery、Vertex AI</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🏗️ クラウドアーキテクチャパターン</h2>
                <table class="styled-table">
                    <thead><tr><th>パターン</th><th>概要</th><th>金融でのユースケース</th></tr></thead>
                    <tbody>
                        <tr><td><strong>マイクロサービス</strong></td><td>小さな独立サービスの集合</td><td>各業務ドメインの独立開発・デプロイ</td></tr>
                        <tr><td><strong>イベント駆動</strong></td><td>イベントをトリガーに処理</td><td>リアルタイム取引監視、通知</td></tr>
                        <tr><td><strong>CQRS</strong></td><td>コマンドとクエリの分離</td><td>取引登録と照会の分離</td></tr>
                        <tr><td><strong>サーキットブレーカー</strong></td><td>障害の伝播を防止</td><td>外部API連携の保護</td></tr>
                        <tr><td><strong>マルチリージョン</strong></td><td>複数拠点での冗長化</td><td>BCP対策、東京-大阪DR</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔨 Infrastructure as Code（IaC）</h2>
                <p>インフラをコードで定義・管理する手法です。金融機関の厳格な<strong>変更管理・監査要件</strong>と相性が良い技術です。</p>
                <table class="styled-table">
                    <thead><tr><th>ツール</th><th>特徴</th><th>言語</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Terraform</strong></td><td>マルチクラウド対応、宣言的</td><td>HCL</td></tr>
                        <tr><td><strong>AWS CloudFormation</strong></td><td>AWS専用、深い統合</td><td>YAML/JSON</td></tr>
                        <tr><td><strong>Ansible</strong></td><td>構成管理、エージェントレス</td><td>YAML</td></tr>
                        <tr><td><strong>Pulumi</strong></td><td>汎用プログラミング言語で記述</td><td>Python, TypeScript等</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 IaCのメリット（金融機関向け）</div>
                    <p>・<strong>再現性</strong>：同じ環境を何度でも正確に構築可能</p>
                    <p>・<strong>監査対応</strong>：インフラの変更履歴がGitで追跡可能</p>
                    <p>・<strong>DR対策</strong>：災害時に別リージョンで即座に再構築</p>
                    <p>・<strong>コスト管理</strong>：不要リソースの可視化・自動削除</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>💰 クラウドコスト最適化</h2>
                <table class="styled-table">
                    <thead><tr><th>戦略</th><th>内容</th><th>削減効果</th></tr></thead>
                    <tbody>
                        <tr><td><strong>リザーブドインスタンス</strong></td><td>1-3年予約で割引</td><td>最大72%削減</td></tr>
                        <tr><td><strong>スポットインスタンス</strong></td><td>余剰リソースを安価に利用</td><td>最大90%削減（中断リスクあり）</td></tr>
                        <tr><td><strong>オートスケーリング</strong></td><td>負荷に応じた自動増減</td><td>夜間・休日のコスト削減</td></tr>
                        <tr><td><strong>ストレージ階層化</strong></td><td>アクセス頻度で分類</td><td>コールドデータをGlacier等に</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 金融機関のクラウド移行の注意点</div>
                    <p>・<strong>FISC安全対策基準</strong>への準拠が必須</p>
                    <p>・<strong>データのリージョン制約</strong>：個人情報は国内保管が原則</p>
                    <p>・<strong>責任共有モデル</strong>の理解：クラウド事業者と利用者の責任範囲</p>
                    <p>・<strong>マルチクラウド戦略</strong>でベンダーロックイン回避</p>
                </div>
            </div>
            <div id="day45-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day45-quiz', 'day45-quiz', [
            { question: 'IaaS、PaaS、SaaSで利用者の管理範囲が最も広いのはどれですか？', options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'], correct: 0, explanation: 'IaaSはインフラのみ提供され、OS・ミドルウェア・アプリは利用者が管理するため管理範囲が最も広いです。' },
            { question: 'Infrastructure as Code（IaC）の金融機関における最大のメリットはどれですか？', options: ['開発が速くなる', '人件費が下がる', '変更履歴の追跡と監査対応', 'クラウド料金が安くなる'], correct: 2, explanation: 'IaCではGitでインフラの変更履歴を管理でき、金融機関の厳格な監査要件への対応が容易になります。' },
            { question: 'リザーブドインスタンスの最大割引率は約何%ですか？', options: ['30%', '50%', '72%', '90%'], correct: 2, explanation: 'リザーブドインスタンスは1-3年の予約で最大約72%の割引が受けられます。' },
            { question: '金融機関のクラウド利用で準拠すべき基準はどれですか？', options: ['PCI DSS', 'FISC安全対策基準', 'SOX法', 'GDPR'], correct: 1, explanation: '日本の金融機関はFISC（金融情報システムセンター）の安全対策基準への準拠が求められます。' },
            { question: 'CQRSパターンの目的はどれですか？', options: ['データの暗号化', 'コマンド（書込）とクエリ（読取）の分離', 'マイクロサービスの統合', 'ネットワークの最適化'], correct: 1, explanation: 'CQRS（Command Query Responsibility Segregation）は書込と読取を分離し、それぞれ最適化するパターンです。' }
        ]);
    }
};
