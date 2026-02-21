// ===========================
// Day 59: 科学リテラシー
// ===========================
window.Day59 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔬 ビジネスパーソンの科学リテラシー</h2>
                <p>科学技術は現代社会の基盤です。エネルギー・環境・医療・AIなど、
                <strong>科学の基本を理解していなければ正しいビジネス判断はできません</strong>。</p>
                <h3>エネルギー問題</h3>
                <table class="styled-table">
                    <thead><tr><th>エネルギー源</th><th>特徴</th><th>課題</th><th>金融との関連</th></tr></thead>
                    <tbody>
                        <tr><td><strong>化石燃料</strong></td><td>石油・天然ガス・石炭</td><td>CO₂排出、枯渇</td><td>原油先物、カーボンプライシング</td></tr>
                        <tr><td><strong>原子力</strong></td><td>大規模ベースロード電源</td><td>安全性、廃棄物処理</td><td>巨額投資、保険リスク</td></tr>
                        <tr><td><strong>太陽光</strong></td><td>再生可能、急速にコスト低下</td><td>変動性、蓄電技術</td><td>再エネ投資、FIT制度</td></tr>
                        <tr><td><strong>風力</strong></td><td>洋上風力が急成長</td><td>立地、環境影響</td><td>プロジェクトファイナンス</td></tr>
                        <tr><td><strong>水素</strong></td><td>次世代の有力候補</td><td>コスト、インフラ整備</td><td>グリーン水素投資</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🌡️ 気候変動の科学</h2>
                <table class="styled-table">
                    <thead><tr><th>事実</th><th>数値</th><th>影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>産業革命前比の気温上昇</strong></td><td>約+1.1℃（2023年）</td><td>異常気象の頻発</td></tr>
                        <tr><td><strong>パリ協定の目標</strong></td><td>+1.5℃以内に抑制</td><td>2050年カーボンニュートラル</td></tr>
                        <tr><td><strong>CO₂濃度</strong></td><td>420ppm超（過去80万年で最高）</td><td>温室効果の増大</td></tr>
                        <tr><td><strong>海面上昇</strong></td><td>過去100年で約20cm</td><td>沿岸都市への脅威</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 気候変動と金融</div>
                    <p>・<strong>TCFD提言</strong>：気候リスクの財務情報への開示義務</p>
                    <p>・<strong>カーボンクレジット</strong>市場の拡大</p>
                    <p>・<strong>座礁資産リスク</strong>：化石燃料関連資産の価値毀損</p>
                    <p>・<strong>グリーンボンド</strong>：環境プロジェクトへの投資</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🚀 宇宙開発とAI倫理</h2>
                <table class="styled-table">
                    <thead><tr><th>テーマ</th><th>現状</th><th>論点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>宇宙ビジネス</strong></td><td>SpaceX、衛星通信、宇宙旅行</td><td>民間主導の宇宙開発、市場規模拡大</td></tr>
                        <tr><td><strong>AI倫理</strong></td><td>生成AIの急速な普及</td><td>雇用への影響、偏見の再生産、制御可能性</td></tr>
                        <tr><td><strong>バイオテクノロジー</strong></td><td>遺伝子編集（CRISPR）</td><td>倫理的境界、医療革新</td></tr>
                        <tr><td><strong>量子技術</strong></td><td>量子コンピュータの実用化</td><td>暗号の脆弱化、最適化計算</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 科学リテラシーの鍛え方</div>
                    <p>・<strong>査読済み論文</strong>とSNS情報を区別する</p>
                    <p>・<strong>「〇〇は体に良い/悪い」</strong>系の記事は科学的根拠を確認</p>
                    <p>・<strong>サンプルサイズ</strong>と研究デザインを意識する</p>
                    <p>・<strong>科学は進化する</strong>：最新の知見を常にアップデート</p>
                </div>
            </div>
            <div id="day59-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day59-quiz', 'day59-quiz', [
            { question: 'パリ協定の気温上昇抑制目標はどれですか？', options: ['産業革命前比+3.0℃以内', '産業革命前比+1.5℃以内', '2000年比+2.0℃以内', '現在比+0.5℃以内'], correct: 1, explanation: 'パリ協定では産業革命前比+1.5℃以内に抑えることを努力目標としています。' },
            { question: 'TCFDとは何に関する提言ですか？', options: ['貿易に関する規制', '気候関連の財務情報開示', 'テクノロジー基準', '人権基準'], correct: 1, explanation: 'TCFD（気候関連財務情報開示タスクフォース）は企業に気候変動に関するリスクと機会の開示を求めています。' },
            { question: '「座礁資産」リスクとは何ですか？', options: ['船舶の座礁事故', '化石燃料関連資産の価値毀損リスク', '不動産の老朽化', 'データの損失'], correct: 1, explanation: '座礁資産とは脱炭素の流れにより化石燃料関連の資産が価値を失うリスクを指します。' },
            { question: '量子コンピュータが金融に与える最大のリスクは？', options: ['コスト増大', '現在の暗号技術の脆弱化', '電力不足', '人材不足'], correct: 1, explanation: '量子コンピュータは現在広く使われている暗号（RSA等）を解読できる可能性があり、金融の情報セキュリティに重大な影響があります。' },
            { question: 'グリーンボンドとは何ですか？', options: ['環境に優しい建物', '環境プロジェクトの資金調達のための債券', 'グリーン企業の株式', '再エネの補助金'], correct: 1, explanation: 'グリーンボンドは再エネやCO₂削減プロジェクトなど環境改善に資する事業の資金調達に発行される債券です。' }
        ]);
    }
};
