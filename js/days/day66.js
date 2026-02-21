// ===========================
// Day 66: 人口動態と社会変化
// ===========================
window.Day66 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>👥 世界の人口動態</h2>
                <p>人口構造の変化は<strong>経済成長・社会保障・市場規模</strong>の全てを左右する、
                最も確実な未来予測の材料です。</p>
                <table class="styled-table">
                    <thead><tr><th>地域</th><th>人口（2024年概算）</th><th>トレンド</th><th>経済的影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>世界全体</strong></td><td>約80億人</td><td>2086年頃ピーク予測</td><td>市場の拡大は鈍化へ</td></tr>
                        <tr><td><strong>アフリカ</strong></td><td>約14億人</td><td>唯一の人口増加大陸</td><td>未開拓市場、若年労働力</td></tr>
                        <tr><td><strong>日本</strong></td><td>約1.2億人</td><td>年間50万人以上減少</td><td>労働力不足、市場縮小</td></tr>
                        <tr><td><strong>インド</strong></td><td>約14.4億人</td><td>中国を抜き世界1位</td><td>人口ボーナス期、成長市場</td></tr>
                        <tr><td><strong>中国</strong></td><td>約14.1億人</td><td>2023年に人口減少開始</td><td>高齢化の加速、成長鈍化</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🏙️ 少子高齢化と社会変化</h2>
                <table class="styled-table">
                    <thead><tr><th>テーマ</th><th>現状</th><th>金融への影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>少子高齢化</strong></td><td>日本の合計特殊出生率: 1.20</td><td>年金制度の持続性、介護市場</td></tr>
                        <tr><td><strong>都市化</strong></td><td>世界人口の56%が都市部</td><td>不動産、インフラ投資</td></tr>
                        <tr><td><strong>移民</strong></td><td>国際移民約2.8億人</td><td>送金市場、労働市場の変容</td></tr>
                        <tr><td><strong>Z世代</strong></td><td>1997-2012年生まれ</td><td>デジタルネイティブ、価値観消費</td></tr>
                        <tr><td><strong>シルバーエコノミー</strong></td><td>高齢者向け市場の拡大</td><td>ヘルスケア、資産管理</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🌈 ジェンダーとダイバーシティ</h2>
                <table class="styled-table">
                    <thead><tr><th>指標</th><th>日本の現状</th><th>世界の潮流</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ジェンダーギャップ指数</strong></td><td>146カ国中125位（2023）</td><td>北欧諸国がトップ</td></tr>
                        <tr><td><strong>女性管理職比率</strong></td><td>約13%</td><td>先進国平均約30%</td></tr>
                        <tr><td><strong>男性育休取得率</strong></td><td>約17%（増加中）</td><td>北欧は90%超</td></tr>
                        <tr><td><strong>LGBTQ+</strong></td><td>パートナーシップ制度の広がり</td><td>同性婚合法化が進行</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 人口動態と投資</div>
                    <p>・<strong>人口ボーナス</strong>期の国は高成長が見込める（インド, インドネシア等）</p>
                    <p>・<strong>高齢化</strong>はヘルスケア・年金関連ビジネスの拡大を意味する</p>
                    <p>・<strong>D&I（多様性と包括性）</strong>に積極的な企業は業績が良い傾向</p>
                    <p>・<strong>世代特性</strong>を理解した金融サービス設計が求められる</p>
                </div>
            </div>
            <div id="day66-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day66-quiz', 'day66-quiz', [
            { question: '2023年に世界人口第1位になった国はどれですか？', options: ['中国', 'アメリカ', 'インド', 'インドネシア'], correct: 2, explanation: '2023年にインドが中国を抜いて世界人口第1位（約14.4億人）になりました。' },
            { question: '日本のジェンダーギャップ指数の順位は？', options: ['上位10位以内', '中位（50位付近）', '下位（125位前後）', '最下位'], correct: 2, explanation: '2023年時点で日本は146カ国中125位であり、先進国の中で最低レベルです。' },
            { question: '「人口ボーナス」とは何ですか？', options: ['人口が減少すること', '生産年齢人口の比率が高く経済成長を後押しする時期', '出生率が上昇すること', '移民が増加すること'], correct: 1, explanation: '人口ボーナスは生産年齢人口（15-64歳）の比率が高く、経済成長に有利な人口構成の時期です。' },
            { question: 'Z世代の特徴はどれですか？', options: ['アナログ世代', 'デジタルネイティブ、価値観消費', '高度成長の担い手', 'ベビーブーム世代'], correct: 1, explanation: 'Z世代（1997-2012年生まれ）はインターネット・SNSが当たり前の環境で育ったデジタルネイティブです。' },
            { question: '世界人口がピークを迎えると予測されている時期は？', options: ['2030年頃', '2050年頃', '2086年頃', '既にピーク'], correct: 2, explanation: '国連の推計では世界人口は2086年頃に約104億人でピークを迎えると予測されています。' }
        ]);
    }
};
