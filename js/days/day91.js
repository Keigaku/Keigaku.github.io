// ===========================
// Day 91: クラウドコンピューティング
// ===========================
window.Day91 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>☁️ クラウドの基本</h2>
                <table class="styled-table">
                    <thead><tr><th>サービスモデル</th><th>提供範囲</th><th>例</th><th>金融での活用</th></tr></thead>
                    <tbody>
                        <tr><td><strong>IaaS</strong></td><td>インフラ（サーバ、ネットワーク）</td><td>EC2, Azure VM</td><td>開発環境、災害復旧</td></tr>
                        <tr><td><strong>PaaS</strong></td><td>プラットフォーム（+OS, ミドルウェア）</td><td>App Engine, Azure App Service</td><td>Webアプリ開発</td></tr>
                        <tr><td><strong>SaaS</strong></td><td>アプリケーション</td><td>Salesforce, Office 365</td><td>CRM、コラボレーション</td></tr>
                        <tr><td><strong>FaaS</strong></td><td>関数単位の実行</td><td>Lambda, Cloud Functions</td><td>イベント駆動処理</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🏢 主要クラウドプロバイダー比較</h2>
                <table class="styled-table">
                    <thead><tr><th>プロバイダ</th><th>強み</th><th>シェア</th><th>金融向け</th></tr></thead>
                    <tbody>
                        <tr><td><strong>AWS</strong></td><td>最大のサービス数、グローバル展開</td><td>約32%</td><td>多くの金融機関が採用</td></tr>
                        <tr><td><strong>Azure</strong></td><td>Microsoft連携、エンタープライズ</td><td>約23%</td><td>ハイブリッドクラウドに強い</td></tr>
                        <tr><td><strong>GCP</strong></td><td>データ分析・AI/ML</td><td>約11%</td><td>BigQuery、Vertex AI</td></tr>
                        <tr><td><strong>OCI</strong></td><td>Oracle DB連携</td><td>約2%</td><td>勘定系のクラウド移行</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🏦 金融クラウドの課題</h2>
                <table class="styled-table">
                    <thead><tr><th>課題</th><th>内容</th><th>対策</th></tr></thead>
                    <tbody>
                        <tr><td><strong>規制対応</strong></td><td>FISC安全対策基準への準拠</td><td>金融機関向けリファレンスアーキテクチャ</td></tr>
                        <tr><td><strong>データ主権</strong></td><td>データの保管場所の制約</td><td>リージョン選択、暗号化</td></tr>
                        <tr><td><strong>ロックイン</strong></td><td>特定クラウドへの依存</td><td>マルチクラウド、抽象化層</td></tr>
                        <tr><td><strong>コスト管理</strong></td><td>使った分だけ課金の管理</td><td>FinOps、予算アラート</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 クラウド資格のロードマップ</div>
                    <p>・<strong>入門</strong>：AWS Cloud Practitioner / Azure Fundamentals</p>
                    <p>・<strong>中級</strong>：AWS Solutions Architect Associate</p>
                    <p>・<strong>上級</strong>：AWS Solutions Architect Professional</p>
                    <p>・<strong>年収アップ</strong>：クラウド資格は市場価値に直結</p>
                </div>
            </div>
            <div id="day91-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day91-quiz', 'day91-quiz', [
            { question: 'IaaSとPaaSの違いはどれですか？', options: ['同じもの', 'IaaSはインフラ提供、PaaSはプラットフォームまで提供', 'PaaSの方が安い', 'IaaSはクラウドではない'], correct: 1, explanation: 'IaaSはサーバ/ネットワークのインフラを提供し、PaaSはさらにOS/ミドルウェアまで含めたプラットフォームを提供します。' },
            { question: 'AWS Lambdaのサービスモデルはどれですか？', options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'], correct: 3, explanation: 'AWS LambdaはFaaS（Function as a Service）で、関数単位でコードを実行するサーバーレスサービスです。' },
            { question: 'FinOpsとは何ですか？', options: ['金融オペレーション', 'クラウドコストの最適化管理', 'フィンテックの運用', 'Financeの自動化'], correct: 1, explanation: 'FinOpsはクラウドの利用コストをビジネス価値と紐づけて最適化管理する実践・文化のことです。' },
            { question: '金融機関がクラウドを使う際に最も注意すべきことはどれですか？', options: ['処理速度', '規制対応とデータ保護', 'UIデザイン', 'プログラミング言語'], correct: 1, explanation: '金融機関はFISCガイドラインや金融庁の監督指針に基づく規制対応とデータの保護・管理が最重要です。' },
            { question: 'マルチクラウドの利点はどれですか？', options: ['コストが必ず下がる', '管理が簡単', '特定クラウドへのロックインを回避', 'セキュリティが不要'], correct: 2, explanation: 'マルチクラウドは複数のクラウドを組み合わせることで、特定プロバイダーへの依存リスクを軽減します。' }
        ]);
    }
};
