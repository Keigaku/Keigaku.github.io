// ===========================
// Day 67: 戦争と平和 — 20世紀の教訓
// ===========================
window.Day67 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🕊️ 20世紀の主要な戦争と紛争</h2>
                <p>20世紀は<strong>二度の世界大戦と冷戦</strong>が国際秩序を形成した時代です。
                これらの歴史は現在の国際関係と金融システムの基盤を理解する鍵です。</p>
                <table class="styled-table">
                    <thead><tr><th>戦争/紛争</th><th>期間</th><th>犠牲者</th><th>経済的影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>第一次世界大戦</strong></td><td>1914-1918</td><td>約1,700万人</td><td>金本位制の崩壊、戦後賠償問題</td></tr>
                        <tr><td><strong>第二次世界大戦</strong></td><td>1939-1945</td><td>約6,000万人以上</td><td>ブレトンウッズ体制、国連設立</td></tr>
                        <tr><td><strong>朝鮮戦争</strong></td><td>1950-1953</td><td>約300万人</td><td>日本の特需景気、冷戦構造の固定化</td></tr>
                        <tr><td><strong>ベトナム戦争</strong></td><td>1955-1975</td><td>約300万人</td><td>米国の財政赤字、ニクソン・ショック</td></tr>
                        <tr><td><strong>冷戦</strong></td><td>1947-1991</td><td>代理戦争で多数</td><td>軍拡競争、ブロック経済</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>☢️ 核問題と安全保障</h2>
                <table class="styled-table">
                    <thead><tr><th>テーマ</th><th>内容</th><th>現在の状況</th></tr></thead>
                    <tbody>
                        <tr><td><strong>核保有国</strong></td><td>米露英仏中＋印パ北朝鮮（＋イスラエル）</td><td>約12,500発の核弾頭</td></tr>
                        <tr><td><strong>核不拡散条約（NPT）</strong></td><td>核兵器の拡散を防止</td><td>不平等性への批判</td></tr>
                        <tr><td><strong>核兵器禁止条約</strong></td><td>核兵器の全面禁止</td><td>核保有国は不参加</td></tr>
                        <tr><td><strong>MAD（相互確証破壊）</strong></td><td>核の均衡による抑止</td><td>冷戦期の平和の論理</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🏛️ 戦後の平和構築</h2>
                <table class="styled-table">
                    <thead><tr><th>概念</th><th>内容</th><th>成果と課題</th></tr></thead>
                    <tbody>
                        <tr><td><strong>集団安全保障</strong></td><td>国連による紛争解決</td><td>安保理の拒否権が限界</td></tr>
                        <tr><td><strong>PKO</strong></td><td>国連平和維持活動</td><td>紛争後の安定化に貢献</td></tr>
                        <tr><td><strong>経済的相互依存</strong></td><td>貿易は平和を促進する</td><td>しかし「武器化」のリスクも</td></tr>
                        <tr><td><strong>EU統合</strong></td><td>二度と欧州で戦争を起こさない</td><td>経済統合 → 政治統合の試み</td></tr>
                        <tr><td><strong>日米安保</strong></td><td>日本の安全保障の基軸</td><td>アジアの安定に寄与</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 戦争と金融</div>
                    <p>・<strong>戦争国債</strong>：両世界大戦を戦費で支えた仕組み</p>
                    <p>・<strong>マーシャル・プラン</strong>：欧州復興が米国の戦略的投資</p>
                    <p>・<strong>朝鮮特需</strong>：日本の戦後復興を加速させた軍需</p>
                    <p>・<strong>経済制裁</strong>：現代の「戦争の代替手段」としての金融</p>
                </div>
            </div>
            <div id="day67-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day67-quiz', 'day67-quiz', [
            { question: '第二次世界大戦後に設立された国際機構はどれですか？', options: ['国際連盟', '国際連合（国連）', 'NATO', 'EU'], correct: 1, explanation: '国際連合は1945年に第二次世界大戦の反省を踏まえて設立されました。NATOは1949年設立です。' },
            { question: 'MAD（相互確証破壊）とは何ですか？', options: ['核を一方的に廃棄する政策', '核攻撃すれば必ず報復されるため使用を抑止する論理', '核の先制使用ドクトリン', '通常兵器の均衡'], correct: 1, explanation: 'MADは相手を攻撃しても自国も壊滅的被害を受けるため、合理的に核の使用を抑止する論理です。' },
            { question: 'マーシャル・プランの目的はどれですか？', options: ['日本の復興', '欧州の戦後復興', '核兵器の開発', 'アジアの植民地化'], correct: 1, explanation: 'マーシャル・プラン（1948年）は米国が西欧諸国の戦後復興を支援した大規模な経済援助計画です。' },
            { question: 'EU統合の根本的な動機はどれですか？', options: ['貿易利益の最大化', '欧州で二度と戦争を起こさない', '単一通貨の発行', 'NATOへの対抗'], correct: 1, explanation: 'EUの原点はフランスとドイツの石炭・鉄鋼を共同管理し二度と戦争を起こさないという理念にあります。' },
            { question: '冷戦の終結を象徴する出来事はどれですか？', options: ['広島への原爆投下', 'ベルリンの壁崩壊（1989年）', 'キューバ危機', 'ベトナム戦争終結'], correct: 1, explanation: '1989年のベルリンの壁崩壊は冷戦の終結を象徴する出来事で、東西ドイツの統一につながりました。' }
        ]);
    }
};
