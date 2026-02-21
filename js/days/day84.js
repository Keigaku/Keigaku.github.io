// ===========================
// Day 84: 不動産金融
// ===========================
window.Day84 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏠 不動産投資の基礎</h2>
                <table class="styled-table">
                    <thead><tr><th>指標</th><th>計算式</th><th>意味</th><th>目安</th></tr></thead>
                    <tbody>
                        <tr><td><strong>表面利回り</strong></td><td>年間賃料 / 物件価格</td><td>大まかな収益性</td><td>5-10%</td></tr>
                        <tr><td><strong>実質利回り（NOI利回り）</strong></td><td>(賃料−経費) / 物件価格</td><td>経費考慮後の収益性</td><td>3-7%</td></tr>
                        <tr><td><strong>キャップレート</strong></td><td>NOI / 物件価格</td><td>市場の評価基準</td><td>地域により異なる</td></tr>
                        <tr><td><strong>LTV</strong></td><td>借入額 / 物件価格</td><td>借入比率</td><td>60-80%</td></tr>
                        <tr><td><strong>DSCR</strong></td><td>NOI / 元利返済額</td><td>返済余力</td><td>1.2倍以上</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🏢 不動産証券化とREIT</h2>
                <table class="styled-table">
                    <thead><tr><th>種類</th><th>特徴</th><th>投資対象</th></tr></thead>
                    <tbody>
                        <tr><td><strong>J-REIT</strong></td><td>東証上場、少額から投資可能</td><td>オフィス、住宅、商業施設、物流</td></tr>
                        <tr><td><strong>私募REIT</strong></td><td>非上場、機関投資家向け</td><td>安定した大型物件</td></tr>
                        <tr><td><strong>CMBS</strong></td><td>商業不動産ローンの証券化</td><td>ローンプール</td></tr>
                        <tr><td><strong>不動産ファンド</strong></td><td>私募ファンド形式</td><td>開発案件、バリューアッド</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔮 不動産テックとトレンド</h2>
                <table class="styled-table">
                    <thead><tr><th>技術</th><th>内容</th><th>影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>PropTech</strong></td><td>不動産×テクノロジー</td><td>業界全体の効率化</td></tr>
                        <tr><td><strong>トークン化</strong></td><td>不動産をブロックチェーンでトークン化</td><td>小口化、流動性向上</td></tr>
                        <tr><td><strong>AI査定</strong></td><td>AIによる不動産価格の自動算出</td><td>査定の迅速化・客観性</td></tr>
                        <tr><td><strong>スマートビル</strong></td><td>IoTによるビル管理の自動化</td><td>省エネ、運営コスト削減</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 不動産金融とSIer</div>
                    <p>・<strong>資産管理システム</strong>：J-REITの物件・収支管理</p>
                    <p>・<strong>不動産査定</strong>AI：機械学習による価格予測</p>
                    <p>・<strong>トークン化基盤</strong>：ブロックチェーンプラットフォーム</p>
                    <p>・<strong>市場分析</strong>：GISデータ×AIの不動産マーケット分析</p>
                </div>
            </div>
            <div id="day84-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day84-quiz', 'day84-quiz', [
            { question: 'キャップレートが低い場合、何を意味しますか？', options: ['物件の価値が低い', '物件の価値が高い（市場評価が良い）', '空室率が高い', '築年数が古い'], correct: 1, explanation: 'キャップレートが低い＝同じ収益に対して高い価格がついている＝市場から高く評価されていることを意味します。' },
            { question: 'DSCRが1.0を下回ると何が起きますか？', options: ['利益が増加', '借入が不要になる', '賃料収入で元利返済を賄えない', '物件価格が上昇'], correct: 2, explanation: 'DSCR（Debt Service Coverage Ratio）が1.0未満は、NOI（純営業利益）で元利返済を賄えないことを示します。' },
            { question: 'J-REITの最大の特徴はどれですか？', options: ['非上場', '少額から不動産投資が可能', '個人は投資不可', '損失が出ない'], correct: 1, explanation: 'J-REITは株式と同様に取引所で売買可能で、数万円から不動産に投資できる点が最大の特徴です。' },
            { question: '不動産のトークン化の利点はどれですか？', options: ['物理的に移動できる', '小口化と流動性の向上', '税金がかからない', '価格が変動しない'], correct: 1, explanation: 'トークン化により不動産を小口化し、ブロックチェーン上で取引可能にすることで流動性を高めます。' },
            { question: 'LTV80%の物件を1億円で購入する場合、借入額はいくらですか？', options: ['2,000万円', '5,000万円', '8,000万円', '1億円'], correct: 2, explanation: 'LTV（Loan to Value）80%は物件価格の80%を借入する意味で、1億円×80%＝8,000万円です。' }
        ]);
    }
};
