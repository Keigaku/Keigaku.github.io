// ===========================
// Day 65: 環境問題とSDGs
// ===========================
window.Day65 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🌱 SDGs（持続可能な開発目標）</h2>
                <p>SDGsは<strong>2030年までに達成すべき17の目標</strong>で、企業活動・投資・金融にも
                大きな影響を与えています。</p>
                <table class="styled-table">
                    <thead><tr><th>#</th><th>目標</th><th>金融との関連</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>貧困をなくそう</td><td>マイクロファイナンス</td></tr>
                        <tr><td>7</td><td>エネルギーをみんなにクリーンに</td><td>再エネ投資、グリーンボンド</td></tr>
                        <tr><td>8</td><td>働きがいと経済成長</td><td>ESG投資の評価基準</td></tr>
                        <tr><td>9</td><td>産業と技術革新の基盤</td><td>インフラ投資、イノベーション支援</td></tr>
                        <tr><td>12</td><td>つくる責任つかう責任</td><td>サーキュラーエコノミー</td></tr>
                        <tr><td>13</td><td>気候変動に具体的な対策を</td><td>カーボンクレジット、TCFD</td></tr>
                        <tr><td>17</td><td>パートナーシップで目標を達成</td><td>官民連携、ブレンデッドファイナンス</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🌡️ パリ協定とカーボンニュートラル</h2>
                <table class="styled-table">
                    <thead><tr><th>項目</th><th>内容</th></tr></thead>
                    <tbody>
                        <tr><td><strong>パリ協定（2015）</strong></td><td>産業革命前比+2℃、できれば+1.5℃以内に抑制</td></tr>
                        <tr><td><strong>カーボンニュートラル</strong></td><td>CO₂排出量＝吸収量にする（2050年目標）</td></tr>
                        <tr><td><strong>NDC</strong></td><td>各国の自主的な削減目標</td></tr>
                        <tr><td><strong>カーボンプライシング</strong></td><td>排出権取引、炭素税</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💰 ESG投資とサステナブルファイナンス</h2>
                <table class="styled-table">
                    <thead><tr><th>区分</th><th>内容</th><th>市場規模</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ESG統合</strong></td><td>ESG要素を投資分析に組み込む</td><td>世界最大の投資手法</td></tr>
                        <tr><td><strong>グリーンボンド</strong></td><td>環境プロジェクト向け債券</td><td>年間5,000億ドル超</td></tr>
                        <tr><td><strong>ソーシャルボンド</strong></td><td>社会課題解決向け債券</td><td>急成長中</td></tr>
                        <tr><td><strong>インパクト投資</strong></td><td>社会的リターンも追求</td><td>約1兆ドル</td></tr>
                        <tr><td><strong>ダイベストメント</strong></td><td>化石燃料企業からの投資撤退</td><td>機関投資家で拡大</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 金融SIerへの影響</div>
                    <p>・<strong>ESGデータ管理</strong>システムの需要急増</p>
                    <p>・<strong>カーボン計算</strong>ツールの開発需要</p>
                    <p>・<strong>グリーンウォッシュ</strong>検出のための規制対応</p>
                    <p>・<strong>TCFD/TNFD</strong>レポーティングシステムの構築</p>
                </div>
            </div>
            <div id="day65-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day65-quiz', 'day65-quiz', [
            { question: 'SDGsの目標数はいくつですか？', options: ['10', '15', '17', '20'], correct: 2, explanation: 'SDGs（持続可能な開発目標）は17の目標と169のターゲットで構成されています。' },
            { question: 'カーボンニュートラルの意味はどれですか？', options: ['CO₂をゼロにする', 'CO₂排出量＝吸収量にする', 'CO₂を増やす', '炭素税をなくす'], correct: 1, explanation: 'カーボンニュートラルとはCO₂の排出量と吸収量をプラスマイナスゼロにすることです。' },
            { question: 'ESGの「S」は何を表しますか？', options: ['Sustainability', 'Social', 'Security', 'Strategy'], correct: 1, explanation: 'ESGはEnvironment（環境）、Social（社会）、Governance（企業統治）の頭文字です。' },
            { question: 'グリーンウォッシュとは何ですか？', options: ['環境に優しい洗剤', '環境配慮を偽装すること', 'グリーンエネルギーの推進', '緑化事業'], correct: 1, explanation: 'グリーンウォッシュは実際には環境に配慮していないのに、あたかも環境に優しいかのように見せかけることです。' },
            { question: 'ダイベストメントとは何ですか？', options: ['新規投資', '特定の産業からの投資撤退', '分散投資', '再投資'], correct: 1, explanation: 'ダイベストメントは環境・倫理的理由から特定の産業（主に化石燃料）から投資を引き揚げることです。' }
        ]);
    }
};
