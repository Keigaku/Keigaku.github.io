// ===========================
// Day 51: 世界経済史 — 産業革命から現代
// ===========================
window.Day51 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏭 産業革命と近代経済の始まり</h2>
                <p>現代のグローバル経済を理解するには、<strong>過去250年の経済史</strong>を知ることが不可欠です。
                歴史は繰り返さないが韻を踏む — マーク・トウェインの言葉通り、過去の教訓は今に活きます。</p>
                <h3>経済史の大きな転換点</h3>
                <table class="styled-table">
                    <thead><tr><th>時代</th><th>転換点</th><th>影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1760年代</strong></td><td>第1次産業革命（蒸気機関）</td><td>工場制生産、都市化、資本主義の誕生</td></tr>
                        <tr><td><strong>1870年代</strong></td><td>第2次産業革命（電気・石油）</td><td>大量生産、株式会社の発展、帝国主義</td></tr>
                        <tr><td><strong>1929年</strong></td><td>世界大恐慌</td><td>ケインズ経済学の台頭、ニューディール</td></tr>
                        <tr><td><strong>1944年</strong></td><td>ブレトンウッズ体制</td><td>IMF・世界銀行設立、ドル基軸通貨</td></tr>
                        <tr><td><strong>1971年</strong></td><td>ニクソン・ショック</td><td>金本位制の終焉、変動相場制へ</td></tr>
                        <tr><td><strong>1989年</strong></td><td>ベルリンの壁崩壊</td><td>冷戦終結、グローバル資本主義の拡大</td></tr>
                        <tr><td><strong>2008年</strong></td><td>リーマン・ショック</td><td>金融規制強化、量的緩和の時代</td></tr>
                        <tr><td><strong>2020年</strong></td><td>COVID-19パンデミック</td><td>サプライチェーン見直し、デジタル化加速</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 経済学の主要な潮流</h2>
                <table class="styled-table">
                    <thead><tr><th>学派</th><th>主要人物</th><th>核心的主張</th></tr></thead>
                    <tbody>
                        <tr><td><strong>古典派</strong></td><td>アダム・スミス</td><td>「見えざる手」— 市場の自由に任せればうまくいく</td></tr>
                        <tr><td><strong>マルクス経済学</strong></td><td>カール・マルクス</td><td>資本主義は内部矛盾により崩壊する</td></tr>
                        <tr><td><strong>ケインズ経済学</strong></td><td>ジョン・ケインズ</td><td>不況時には政府が財政出動すべき</td></tr>
                        <tr><td><strong>マネタリズム</strong></td><td>ミルトン・フリードマン</td><td>金融政策が最も重要、小さな政府</td></tr>
                        <tr><td><strong>行動経済学</strong></td><td>カーネマン、セイラー</td><td>人間は合理的ではない（Day 68で詳細）</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🌐 グローバリゼーションの光と影</h2>
                <table class="styled-table">
                    <thead><tr><th>側面</th><th>光（メリット）</th><th>影（デメリット）</th></tr></thead>
                    <tbody>
                        <tr><td><strong>貿易</strong></td><td>比較優位による利益、消費者の恩恵</td><td>国内産業の空洞化</td></tr>
                        <tr><td><strong>資本移動</strong></td><td>途上国への投資、成長促進</td><td>金融危機の連鎖、投機</td></tr>
                        <tr><td><strong>技術移転</strong></td><td>イノベーションの普及</td><td>知的財産の侵害</td></tr>
                        <tr><td><strong>労働移動</strong></td><td>人材の最適配置</td><td>頭脳流出、社会的摩擦</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 なぜ金融SIerに経済史が必要か</div>
                    <p>・クライアントとの会話で<strong>経済の文脈</strong>を理解できる</p>
                    <p>・市場の動きを<strong>歴史的パターン</strong>で捉えられる</p>
                    <p>・金融システムの<strong>設計思想</strong>（規制の背景）を理解できる</p>
                </div>
            </div>
            <div id="day51-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day51-quiz', 'day51-quiz', [
            { question: 'ブレトンウッズ体制で設立された国際機関はどれですか？', options: ['国連とNATO', 'IMFと世界銀行', 'WTOとASEAN', 'OECDとG7'], correct: 1, explanation: '1944年のブレトンウッズ会議でIMF（国際通貨基金）と世界銀行（IBRD）が設立されました。' },
            { question: '「見えざる手」を提唱した経済学者は誰ですか？', options: ['ケインズ', 'マルクス', 'アダム・スミス', 'フリードマン'], correct: 2, explanation: 'アダム・スミスは『国富論』で市場の自己調整メカニズムを「見えざる手」と表現しました。' },
            { question: 'ニクソン・ショック（1971年）で何が起きましたか？', options: ['株価大暴落', '金とドルの兌換停止', '石油危機', 'ユーロ導入'], correct: 1, explanation: '1971年にニクソン大統領がドルと金の兌換を停止し、ブレトンウッズ体制が実質的に崩壊しました。' },
            { question: '不況時に政府が財政出動すべきと主張した経済学者は？', options: ['アダム・スミス', 'フリードマン', 'マルクス', 'ケインズ'], correct: 3, explanation: 'ケインズは有効需要の不足が不況の原因であり、政府の積極的な財政政策で経済を刺激すべきと主張しました。' },
            { question: '第2次産業革命の中心的エネルギーはどれですか？', options: ['蒸気', '電気と石油', '原子力', '太陽光'], correct: 1, explanation: '第2次産業革命（1870年代〜）は電気と石油をエネルギー源とし、大量生産方式をもたらしました。' }
        ]);
    }
};
