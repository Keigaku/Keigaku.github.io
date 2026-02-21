// ===========================
// Day 41: 金融ビジネス英語マスター
// ===========================
window.Day41 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💼 なぜ金融ビジネス英語が重要か</h2>
                <p>TOEICでは<strong>ビジネスシーンが題材</strong>の問題が大半です。
                金融業界の語彙はTOEICスコアに直結し、実務での英語活用にもそのまま役立ちます。</p>
                <table class="styled-table">
                    <thead><tr><th>シーン</th><th>頻度</th><th>出題形式</th></tr></thead>
                    <tbody>
                        <tr><td><strong>オフィス</strong></td><td>★★★★★</td><td>Part 2/3: 同僚間の会話</td></tr>
                        <tr><td><strong>メール</strong></td><td>★★★★★</td><td>Part 6/7: ビジネスメール</td></tr>
                        <tr><td><strong>会議</strong></td><td>★★★★</td><td>Part 3/4: アジェンダ、発表</td></tr>
                        <tr><td><strong>金融</strong></td><td>★★★</td><td>Part 4/7: 経済ニュース</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 金融英語 必須語彙</h2>
                <h3>財務・会計用語</h3>
                <table class="styled-table">
                    <thead><tr><th>英語</th><th>日本語</th><th>例文</th></tr></thead>
                    <tbody>
                        <tr><td><strong>revenue</strong></td><td>売上高</td><td>Revenue increased by 15% YoY.</td></tr>
                        <tr><td><strong>net income</strong></td><td>純利益</td><td>Net income exceeded expectations.</td></tr>
                        <tr><td><strong>fiscal year</strong></td><td>会計年度</td><td>The fiscal year ends in March.</td></tr>
                        <tr><td><strong>balance sheet</strong></td><td>貸借対照表</td><td>Strong liquidity on the balance sheet.</td></tr>
                        <tr><td><strong>dividend</strong></td><td>配当金</td><td>A quarterly dividend was approved.</td></tr>
                        <tr><td><strong>audit</strong></td><td>監査</td><td>An external audit is conducted annually.</td></tr>
                        <tr><td><strong>compliance</strong></td><td>法令遵守</td><td>Follow compliance guidelines.</td></tr>
                    </tbody>
                </table>
                <h3>金融市場用語</h3>
                <table class="styled-table">
                    <thead><tr><th>英語</th><th>日本語</th><th>例文</th></tr></thead>
                    <tbody>
                        <tr><td><strong>interest rate</strong></td><td>金利</td><td>The central bank raised interest rates.</td></tr>
                        <tr><td><strong>portfolio</strong></td><td>ポートフォリオ</td><td>A diversified portfolio reduces risk.</td></tr>
                        <tr><td><strong>hedge</strong></td><td>ヘッジ</td><td>We hedge currency exposure with forwards.</td></tr>
                        <tr><td><strong>volatility</strong></td><td>ボラティリティ</td><td>Market volatility increased significantly.</td></tr>
                        <tr><td><strong>liquidity</strong></td><td>流動性</td><td>Liquidity dried up during the crisis.</td></tr>
                        <tr><td><strong>derivative</strong></td><td>デリバティブ</td><td>OTC derivatives require margin posting.</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>✉️ ビジネスメール英語</h2>
                <table class="styled-table">
                    <thead><tr><th>場面</th><th>フレーズ</th><th>日本語</th></tr></thead>
                    <tbody>
                        <tr><td><strong>書き出し</strong></td><td>I am writing to inquire about...</td><td>〜についてお伺いしたく</td></tr>
                        <tr><td><strong>依頼</strong></td><td>Could you please provide me with...</td><td>〜をご提供いただけますか</td></tr>
                        <tr><td><strong>確認</strong></td><td>I would like to confirm that...</td><td>〜を確認させてください</td></tr>
                        <tr><td><strong>添付</strong></td><td>Please find attached the...</td><td>〜を添付いたします</td></tr>
                        <tr><td><strong>催促</strong></td><td>I would appreciate a response at your earliest convenience.</td><td>お早めにご回答いただけますと幸いです</td></tr>
                        <tr><td><strong>締め</strong></td><td>Please do not hesitate to contact me.</td><td>お気軽にご連絡ください</td></tr>
                    </tbody>
                </table>
                <div class="info-box info">
                    <div class="info-box-title">📘 TOEICメール問題のコツ</div>
                    <p>・<strong>From/To/Subject</strong>：誰が誰に何の用件かを即座に把握</p>
                    <p>・<strong>目的</strong>：1段落目に書かれることが多い</p>
                    <p>・<strong>依頼</strong>：Could you / Would you / Please 等に注目</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>🎤 会議・プレゼン英語</h2>
                <table class="styled-table">
                    <thead><tr><th>場面</th><th>フレーズ</th><th>日本語</th></tr></thead>
                    <tbody>
                        <tr><td><strong>開始</strong></td><td>Let's get started. The agenda today is...</td><td>始めましょう。本日の議題は...</td></tr>
                        <tr><td><strong>意見</strong></td><td>From my perspective, I believe that...</td><td>私の見解では...</td></tr>
                        <tr><td><strong>賛成</strong></td><td>I'm in favor of that approach.</td><td>そのアプローチに賛成です</td></tr>
                        <tr><td><strong>反論</strong></td><td>I see your point, but have we considered...</td><td>おっしゃることは分かりますが...</td></tr>
                        <tr><td><strong>まとめ</strong></td><td>To wrap up, the key takeaways are...</td><td>まとめると、要点は...</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 実務英語を同時に鍛える</div>
                    <p>・英語メールを<strong>自分で書く</strong>（AI添削活用）</p>
                    <p>・海外ベンダーとの<strong>Web会議に積極参加</strong></p>
                    <p>・<strong>英語で日報・議事録</strong>を書く練習</p>
                </div>
            </div>
            <div id="day41-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day41-quiz', 'day41-quiz', [
            { question: '"revenue" の正しい日本語訳はどれですか？', options: ['純利益', '売上高・収益', '経常利益', '営業利益'], correct: 1, explanation: 'Revenue は「売上高」を意味し、Net income（純利益）とは異なります。' },
            { question: '"Please find attached the report." の意味は？', options: ['レポートを探してください', 'レポートを添付いたします', 'レポートが見つかりません', 'レポートを確認してください'], correct: 1, explanation: '"Please find attached" は「〜を添付いたします」の定型表現です。' },
            { question: '"hedge" の金融での意味は？', options: ['投機する', 'リスクを回避する', '利益を増やす', '取引を中止する'], correct: 1, explanation: 'Hedge は「リスクを回避（ヘッジ）する」意味です。' },
            { question: '催促する際の適切な表現は？', options: ['Please respond immediately.', 'I would appreciate a response at your earliest convenience.', 'You must reply today.', 'Why haven\'t you responded yet?'], correct: 1, explanation: '"at your earliest convenience" で丁寧に催促できます。' },
            { question: '反論時の適切な表現は？', options: ['That\'s wrong.', 'I disagree completely.', 'I see your point, but have we considered...', 'No, I don\'t think so.'], correct: 2, explanation: '相手の意見を尊重しつつ異なる視点を提示するのが適切です。' }
        ]);
    }
};
