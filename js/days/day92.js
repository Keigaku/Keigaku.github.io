// ===========================
// Day 92: サイバーセキュリティ
// ===========================
window.Day92 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔒 サイバー攻撃の種類</h2>
                <table class="styled-table">
                    <thead><tr><th>攻撃</th><th>手法</th><th>金融での被害例</th><th>対策</th></tr></thead>
                    <tbody>
                        <tr><td><strong>フィッシング</strong></td><td>偽メール/サイトで情報詐取</td><td>口座情報の漏洩</td><td>多要素認証、教育</td></tr>
                        <tr><td><strong>ランサムウェア</strong></td><td>データ暗号化して身代金要求</td><td>業務停止、顧客情報流出</td><td>バックアップ、パッチ管理</td></tr>
                        <tr><td><strong>SQLインジェクション</strong></td><td>不正なSQL文によるDB操作</td><td>顧客データの窃取</td><td>プリペアドステートメント</td></tr>
                        <tr><td><strong>DDoS</strong></td><td>大量リクエストでサービス停止</td><td>オンラインバンキング停止</td><td>WAF、CDN、レート制限</td></tr>
                        <tr><td><strong>内部犯行</strong></td><td>従業員による情報持ち出し</td><td>インサイダー取引</td><td>アクセス制御、DLP</td></tr>
                        <tr><td><strong>ゼロデイ</strong></td><td>未知の脆弱性を悪用</td><td>システム侵害</td><td>多層防御、振る舞い検知</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🛡️ 防御フレームワーク</h2>
                <table class="styled-table">
                    <thead><tr><th>フレームワーク</th><th>内容</th><th>活用場面</th></tr></thead>
                    <tbody>
                        <tr><td><strong>NIST CSF</strong></td><td>Identify→Protect→Detect→Respond→Recover</td><td>セキュリティ体制の構築</td></tr>
                        <tr><td><strong>ゼロトラスト</strong></td><td>「何も信頼しない」前提で検証</td><td>リモートワーク、クラウド移行</td></tr>
                        <tr><td><strong>ISO 27001</strong></td><td>情報セキュリティマネジメント</td><td>認証取得、コンプライアンス</td></tr>
                        <tr><td><strong>OWASP Top 10</strong></td><td>Webアプリの脆弱性トップ10</td><td>セキュアコーディング</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🏦 金融セキュリティの特殊性</h2>
                <table class="styled-table">
                    <thead><tr><th>要件</th><th>内容</th><th>規制/基準</th></tr></thead>
                    <tbody>
                        <tr><td><strong>取引の完全性</strong></td><td>改ざん防止、否認防止</td><td>電子署名法</td></tr>
                        <tr><td><strong>顧客データ保護</strong></td><td>個人情報の厳格管理</td><td>個人情報保護法、GDPR</td></tr>
                        <tr><td><strong>可用性</strong></td><td>24/365のサービス維持</td><td>金融庁ガイドライン</td></tr>
                        <tr><td><strong>監査証跡</strong></td><td>全操作の記録と保存</td><td>FISC安全対策基準</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 開発者のセキュリティ責任</div>
                    <p>・<strong>セキュアコーディング</strong>：SQLインジェクション、XSSを防ぐ</p>
                    <p>・<strong>SAST/DAST</strong>：静的/動的セキュリティテストを自動化</p>
                    <p>・<strong>秘密情報管理</strong>：APIキー/パスワードをコードに書かない</p>
                    <p>・<strong>最小権限の原則</strong>：必要最小限のアクセス権のみ付与</p>
                </div>
            </div>
            <div id="day92-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day92-quiz', 'day92-quiz', [
            { question: 'ゼロトラストセキュリティの基本原則はどれですか？', options: ['社内ネットワークは信頼する', '何も信頼せず常に検証する', 'ファイアウォールだけで十分', 'パスワードだけで保護'], correct: 1, explanation: 'ゼロトラストは「Never Trust, Always Verify」の原則で、内外問わず全てのアクセスを検証するモデルです。' },
            { question: 'SQLインジェクションの対策はどれですか？', options: ['パスワードを長くする', 'プリペアドステートメントを使用', '暗号化', 'ファイアウォール'], correct: 1, explanation: 'プリペアドステートメント（パラメータ化クエリ）はSQL文とデータを分離し、SQLインジェクションを防ぎます。' },
            { question: 'NIST CSFの5つの機能に含まれないのはどれですか？', options: ['Identify', 'Protect', 'Encrypt', 'Recover'], correct: 2, explanation: 'NIST CSFの5つの機能はIdentify, Protect, Detect, Respond, Recoverです。Encryptは含まれません。' },
            { question: 'DLP（Data Loss Prevention）の目的はどれですか？', options: ['データの暗号化', '機密データの流出を防止', 'バックアップ', 'データの圧縮'], correct: 1, explanation: 'DLPは機密データが組織外に流出するのを検知・防止するシステムや仕組みのことです。' },
            { question: '多要素認証（MFA）で使う要素に含まれないのはどれですか？', options: ['知識（パスワード）', '所持（スマホ）', '生体（指紋）', '場所（住所）'], correct: 3, explanation: '多要素認証は知識（知っていること）、所持（持っているもの）、生体（自分自身の特徴）の3要素を組み合わせます。' }
        ]);
    }
};
