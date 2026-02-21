// ===========================
// Day 43: サイバーセキュリティと金融犯罪対策
// ===========================
window.Day43 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔒 金融サイバーセキュリティの全体像</h2>
                <p>金融機関は<strong>最もサイバー攻撃の標的になりやすい業種</strong>の一つです。
                資産・個人情報・取引データの集約地点であり、攻撃者にとって高い金銭的リターンが期待できるためです。</p>
                <h3>主要なサイバー脅威</h3>
                <table class="styled-table">
                    <thead><tr><th>脅威</th><th>概要</th><th>金融での被害例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ランサムウェア</strong></td><td>データを暗号化し身代金を要求</td><td>システム停止、業務不能、信頼失墜</td></tr>
                        <tr><td><strong>フィッシング</strong></td><td>偽メール・サイトで認証情報を窃取</td><td>不正送金、アカウント乗っ取り</td></tr>
                        <tr><td><strong>APT攻撃</strong></td><td>長期潜伏型の標的型攻撃</td><td>機密データの流出、内部システム掌握</td></tr>
                        <tr><td><strong>DDoS攻撃</strong></td><td>大量通信でサービスを妨害</td><td>オンラインバンキング停止</td></tr>
                        <tr><td><strong>内部犯行</strong></td><td>従業員による情報漏洩・不正操作</td><td>顧客情報流出、不正取引</td></tr>
                        <tr><td><strong>サプライチェーン攻撃</strong></td><td>取引先・委託先経由の侵入</td><td>SolarWinds事件のような広範囲被害</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🛡️ ゼロトラストセキュリティ</h2>
                <p>従来の「境界型防御」に代わる新しいセキュリティモデルです。
                <strong>「何も信頼しない、常に検証する」</strong>が基本原則です。</p>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>内容</th><th>実装技術</th></tr></thead>
                    <tbody>
                        <tr><td><strong>常に検証</strong></td><td>全アクセスを認証・認可</td><td>多要素認証（MFA）、条件付きアクセス</td></tr>
                        <tr><td><strong>最小権限</strong></td><td>必要最低限のアクセス権のみ付与</td><td>RBAC、JIT（Just-In-Time）アクセス</td></tr>
                        <tr><td><strong>侵害前提</strong></td><td>侵入されることを前提に設計</td><td>マイクロセグメンテーション、暗号化</td></tr>
                        <tr><td><strong>継続的監視</strong></td><td>全通信をリアルタイムで監視</td><td>SIEM、EDR、SOC</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 金融SIerとしての責務</div>
                    <p>・開発するシステムの<strong>セキュリティバイデザイン</strong></p>
                    <p>・<strong>OWASP Top 10</strong> を意識したセキュアコーディング</p>
                    <p>・脆弱性診断・ペネトレーションテストへの対応</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🚨 インシデントレスポンス</h2>
                <table class="styled-table">
                    <thead><tr><th>フェーズ</th><th>目的</th><th>主な活動</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. 準備</strong></td><td>事前の体制整備</td><td>CSIRT設置、対応手順書、訓練</td></tr>
                        <tr><td><strong>2. 検知・分析</strong></td><td>インシデントの発見と影響評価</td><td>ログ分析、IOC（攻撃痕跡）の特定</td></tr>
                        <tr><td><strong>3. 封じ込め</strong></td><td>被害拡大の防止</td><td>ネットワーク隔離、アカウント無効化</td></tr>
                        <tr><td><strong>4. 根絶</strong></td><td>原因の除去</td><td>マルウェア駆除、脆弱性修正</td></tr>
                        <tr><td><strong>5. 復旧</strong></td><td>正常運用への回帰</td><td>システム復旧、監視強化</td></tr>
                        <tr><td><strong>6. 教訓</strong></td><td>再発防止</td><td>振り返り、対策の制度化</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>🔍 金融犯罪検知とAML</h2>
                <table class="styled-table">
                    <thead><tr><th>対策</th><th>概要</th><th>技術</th></tr></thead>
                    <tbody>
                        <tr><td><strong>AML（マネロン対策）</strong></td><td>資金洗浄の検知・防止</td><td>取引モニタリング、KYC</td></tr>
                        <tr><td><strong>不正取引検知</strong></td><td>異常な取引パターンの発見</td><td>機械学習、ルールベース</td></tr>
                        <tr><td><strong>本人確認（eKYC）</strong></td><td>デジタルでの本人確認</td><td>生体認証、マイナンバー連携</td></tr>
                        <tr><td><strong>制裁リストスクリーニング</strong></td><td>制裁対象との取引防止</td><td>名寄せ、ファジーマッチング</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 セキュリティは全員の責務</div>
                    <p>・<strong>パスワードの使い回し禁止</strong>、パスワードマネージャーの活用</p>
                    <p>・<strong>不審なメールの報告</strong>：「怪しい」と思ったらすぐ報告</p>
                    <p>・<strong>USBメモリ等の外部媒体</strong>：社内ルールを厳守</p>
                    <p>・<strong>ソーシャルエンジニアリング</strong>への警戒</p>
                </div>
            </div>
            <div id="day43-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day43-quiz', 'day43-quiz', [
            { question: 'ゼロトラストセキュリティの基本原則はどれですか？', options: ['社内ネットワークは信頼する', '何も信頼しない、常に検証する', 'ファイアウォールで境界を守る', 'VPNを使えば安全'], correct: 1, explanation: 'ゼロトラストは「何も信頼しない、常に検証する」が基本原則です。' },
            { question: 'インシデントレスポンスの最初のフェーズはどれですか？', options: ['検知', '封じ込め', '準備', '復旧'], correct: 2, explanation: 'インシデント発生前の「準備」（CSIRT設置、手順書、訓練）が最初のフェーズです。' },
            { question: 'APT攻撃の特徴はどれですか？', options: ['大量の通信でサービスを妨害', '長期間潜伏して標的を狙う', 'データを暗号化して身代金要求', '偽サイトで認証情報を窃取'], correct: 1, explanation: 'APT（Advanced Persistent Threat）は長期潜伏型の高度な標的型攻撃です。' },
            { question: 'AMLの正式名称は？', options: ['Advanced Machine Learning', 'Anti-Money Laundering', 'Automated Market Linking', 'Asset Management Library'], correct: 1, explanation: 'AMLはAnti-Money Laundering（マネーロンダリング対策）の略称です。' },
            { question: 'セキュアコーディングで参照すべき脆弱性リストはどれですか？', options: ['PMBOK', 'OWASP Top 10', 'ISO 27001', 'COBIT'], correct: 1, explanation: 'OWASP Top 10はWebアプリケーションの最も重要なセキュリティリスクのリストです。' }
        ]);
    }
};
