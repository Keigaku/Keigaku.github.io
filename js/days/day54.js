// ===========================
// Day 54: 主要国の政治・経済体制
// ===========================
window.Day54 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏛️ 世界の主要国を理解する</h2>
                <p>グローバルな金融市場を理解するには、主要国の<strong>政治体制・経済モデル・中央銀行</strong>の特徴を知ることが不可欠です。</p>
                <table class="styled-table">
                    <thead><tr><th>国</th><th>政治体制</th><th>経済モデル</th><th>GDP（2024年概算）</th></tr></thead>
                    <tbody>
                        <tr><td><strong>🇺🇸 アメリカ</strong></td><td>連邦制・大統領制</td><td>自由主義市場経済</td><td>約28兆ドル</td></tr>
                        <tr><td><strong>🇨🇳 中国</strong></td><td>一党制（共産党）</td><td>国家資本主義</td><td>約18兆ドル</td></tr>
                        <tr><td><strong>🇯🇵 日本</strong></td><td>議院内閣制・立憲君主制</td><td>協調的市場経済</td><td>約4.2兆ドル</td></tr>
                        <tr><td><strong>🇩🇪 ドイツ</strong></td><td>連邦制・議院内閣制</td><td>社会的市場経済</td><td>約4.5兆ドル</td></tr>
                        <tr><td><strong>🇬🇧 イギリス</strong></td><td>立憲君主制・議院内閣制</td><td>自由主義市場経済</td><td>約3.4兆ドル</td></tr>
                        <tr><td><strong>🇮🇳 インド</strong></td><td>連邦制・議院内閣制</td><td>混合経済</td><td>約3.9兆ドル</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🏦 世界の中央銀行</h2>
                <table class="styled-table">
                    <thead><tr><th>中央銀行</th><th>国/地域</th><th>政策金利</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>FRB（Fed）</strong></td><td>アメリカ</td><td>FFレート</td><td>二重使命（物価安定＋完全雇用）</td></tr>
                        <tr><td><strong>ECB</strong></td><td>ユーロ圏</td><td>主要リファイナンスレート</td><td>物価安定のみが使命</td></tr>
                        <tr><td><strong>日本銀行</strong></td><td>日本</td><td>政策金利</td><td>異次元緩和、YCC</td></tr>
                        <tr><td><strong>BOE</strong></td><td>イギリス</td><td>バンクレート</td><td>インフレ目標2%</td></tr>
                        <tr><td><strong>PBOC</strong></td><td>中国</td><td>LPR</td><td>為替管理、資本規制</td></tr>
                    </tbody>
                </table>
                <div class="info-box info">
                    <div class="info-box-title">📘 なぜ中央銀行が重要か</div>
                    <p>・金利は<strong>すべての金融商品の価格に影響</strong>する</p>
                    <p>・FRBの決定は日本の株価にも為替にも波及する</p>
                    <p>・金融SIerが作るシステムの多くは<strong>金利変動に対応</strong>するもの</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🗳️ 選挙制度と政策への影響</h2>
                <table class="styled-table">
                    <thead><tr><th>制度</th><th>採用国</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>小選挙区制</strong></td><td>米・英</td><td>二大政党制になりやすい</td></tr>
                        <tr><td><strong>比例代表制</strong></td><td>欧州多数</td><td>多党制、連立政権</td></tr>
                        <tr><td><strong>小選挙区比例代表並立制</strong></td><td>日本</td><td>両方の特徴を併せ持つ</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 政治体制と経済の関係</div>
                    <p>・<strong>大統領制</strong>：強いリーダーシップ、政策の急変リスク</p>
                    <p>・<strong>議院内閣制</strong>：合意形成型、政策変更は漸進的</p>
                    <p>・<strong>選挙</strong>は市場のイベントリスク（政権交代 → 政策転換）</p>
                </div>
            </div>
            <div id="day54-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day54-quiz', 'day54-quiz', [
            { question: 'FRB（Fed）の二重使命とは何ですか？', options: ['財政赤字削減と成長', '物価安定と完全雇用', '通貨防衛と外交', '貿易推進と規制'], correct: 1, explanation: 'FRBには「物価の安定（Price Stability）」と「完全雇用（Maximum Employment）」の二重使命があります。' },
            { question: '中国の政治体制はどれですか？', options: ['連邦制民主主義', '立憲君主制', '一党制（共産党）', '大統領制'], correct: 2, explanation: '中国は共産党による一党支配体制で、国家資本主義的な経済モデルを採用しています。' },
            { question: 'ECB（欧州中央銀行）の使命はどれですか？', options: ['物価安定のみ', '物価安定と完全雇用', '為替の安定', '財政規律の維持'], correct: 0, explanation: 'ECBはFRBと異なり、物価安定のみが法的に定められた主たる使命です。' },
            { question: '小選挙区制の特徴はどれですか？', options: ['多党制になりやすい', '二大政党制になりやすい', '独裁制になりやすい', '無党派が増える'], correct: 1, explanation: '小選挙区制は「勝者総取り」のため、二大政党制に収斂しやすい（デュヴェルジェの法則）という特徴があります。' },
            { question: 'GDP世界第1位の国はどれですか？', options: ['中国', '日本', 'アメリカ', 'ドイツ'], correct: 2, explanation: 'アメリカは約28兆ドルのGDPで世界第1位です。中国が第2位で約18兆ドルです。' }
        ]);
    }
};
