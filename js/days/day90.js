// ===========================
// Day 90: 英語・グローバルビジネス
// ===========================
window.Day90 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🌍 金融英語の基本</h2>
                <table class="styled-table">
                    <thead><tr><th>カテゴリ</th><th>英語</th><th>日本語</th><th>使用場面</th></tr></thead>
                    <tbody>
                        <tr><td rowspan="4"><strong>市場用語</strong></td><td>Bull market</td><td>強気相場</td><td>市場分析レポート</td></tr>
                        <tr><td>Bear market</td><td>弱気相場</td><td>投資判断</td></tr>
                        <tr><td>Liquidity</td><td>流動性</td><td>リスク管理</td></tr>
                        <tr><td>Volatility</td><td>ボラティリティ</td><td>オプション価格計算</td></tr>
                        <tr><td rowspan="4"><strong>IT用語</strong></td><td>Deployment</td><td>デプロイ（本番適用）</td><td>開発運用</td></tr>
                        <tr><td>Incident</td><td>障害・インシデント</td><td>障害管理</td></tr>
                        <tr><td>Sprint</td><td>スプリント</td><td>アジャイル開発</td></tr>
                        <tr><td>Regression</td><td>回帰テスト/デグレ</td><td>品質保証</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📧 ビジネスメール定型文</h2>
                <table class="styled-table">
                    <thead><tr><th>場面</th><th>英語</th><th>ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>依頼</strong></td><td>Could you please ～ by [date]?</td><td>期限を明確に</td></tr>
                        <tr><td><strong>確認</strong></td><td>Just to confirm, ～</td><td>認識合わせ</td></tr>
                        <tr><td><strong>催促</strong></td><td>I'm following up on ～</td><td>柔らかい催促</td></tr>
                        <tr><td><strong>謝罪</strong></td><td>I apologize for the inconvenience.</td><td>端的に</td></tr>
                        <tr><td><strong>報告</strong></td><td>Please find attached the ～ report.</td><td>添付ファイル</td></tr>
                        <tr><td><strong>提案</strong></td><td>I'd like to suggest that we ～</td><td>仮定法で柔らかく</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🌐 グローバルビジネスマナー</h2>
                <table class="styled-table">
                    <thead><tr><th>地域</th><th>会議スタイル</th><th>意思決定</th><th>注意点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>アメリカ</strong></td><td>直接的・効率重視</td><td>トップダウン・速い</td><td>結論ファースト</td></tr>
                        <tr><td><strong>イギリス</strong></td><td>丁寧・間接的</td><td>合議制</td><td>ユーモアを交える</td></tr>
                        <tr><td><strong>日本</strong></td><td>根回し・合意重視</td><td>ボトムアップ・遅い</td><td>沈黙は同意ではない</td></tr>
                        <tr><td><strong>シンガポール</strong></td><td>多文化ミックス</td><td>階層的</td><td>多様性への配慮</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 英語力アップの実践法</div>
                    <p>・<strong>金融英語のPodcast</strong>：Bloomberg, FT News Briefing</p>
                    <p>・<strong>英語で技術記事</strong>を読む：Medium, HackerNoon</p>
                    <p>・<strong>英語での会議参加</strong>：オンラインイベント活用</p>
                    <p>・<strong>TOEIC 800点</strong>を目指そう：金融ITでは英語力が年収に直結</p>
                </div>
            </div>
            <div id="day90-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day90-quiz', 'day90-quiz', [
            { question: '"Bear market"の意味はどれですか？', options: ['強気相場', '弱気相場', '横ばい相場', 'バブル相場'], correct: 1, explanation: 'Bear market（弱気相場）は株価が下落トレンドの市場を指します。熊が爪で引き下ろす動作に由来します。' },
            { question: '英語メールで催促する際に適切な表現はどれですか？', options: ['Where is it?', 'Send it now!', 'I\'m following up on ～', 'You forgot to send it.'], correct: 2, explanation: '"I\'m following up on ～"は丁寧に催促する定型表現で、ビジネスメールで広く使われています。' },
            { question: '日本のビジネス文化の特徴はどれですか？', options: ['トップダウンで即断即決', '根回しと合意形成を重視', 'メールよりも電話', '個人主義'], correct: 1, explanation: '日本のビジネス文化は事前の根回しとボトムアップでの合意形成を重視し、意思決定に時間がかかる傾向があります。' },
            { question: '"Liquidity"の意味はどれですか？', options: ['利益性', '流動性', '安定性', '成長性'], correct: 1, explanation: 'Liquidity（流動性）は資産を売買しやすい度合いを示し、金融市場やリスク管理で重要な概念です。' },
            { question: '英語での会議で結論を先に述べることが重要な文化圏はどれですか？', options: ['日本', 'イギリス', 'アメリカ', 'シンガポール'], correct: 2, explanation: 'アメリカのビジネス文化では効率性を重視し、結論を最初に述べてから理由を説明するスタイルが好まれます。' }
        ]);
    }
};
