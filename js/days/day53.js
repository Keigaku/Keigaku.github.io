// ===========================
// Day 53: 地政学入門
// ===========================
window.Day53 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🗺️ 地政学とは何か</h2>
                <p>地政学とは<strong>地理的条件が国家の政治・経済・安全保障に与える影響</strong>を分析する学問です。
                金融市場は地政学的リスクに極めて敏感に反応します。</p>
                <h3>地政学の基本概念</h3>
                <table class="styled-table">
                    <thead><tr><th>概念</th><th>提唱者</th><th>内容</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ハートランド理論</strong></td><td>マッキンダー</td><td>ユーラシア大陸の中心を支配する者が世界を制する</td></tr>
                        <tr><td><strong>シーパワー理論</strong></td><td>マハン</td><td>海上交通路の支配が国力の源泉</td></tr>
                        <tr><td><strong>リムランド理論</strong></td><td>スパイクマン</td><td>ユーラシアの沿岸地域が戦略的に最重要</td></tr>
                        <tr><td><strong>チョークポイント</strong></td><td>—</td><td>マラッカ海峡、スエズ運河等の戦略的要衝</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🌏 現代の地政学的構図</h2>
                <table class="styled-table">
                    <thead><tr><th>地域</th><th>主要プレイヤー</th><th>焦点</th><th>経済的影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>インド太平洋</strong></td><td>米・中・日・豪・印</td><td>台湾、南シナ海、半導体</td><td>サプライチェーンの再編</td></tr>
                        <tr><td><strong>欧州</strong></td><td>EU・NATO・ロシア</td><td>ウクライナ紛争、エネルギー</td><td>LNG市場、インフレ</td></tr>
                        <tr><td><strong>中東</strong></td><td>サウジ・イラン・イスラエル</td><td>石油、宗教対立</td><td>原油価格への直接影響</td></tr>
                        <tr><td><strong>北米</strong></td><td>米国・カナダ・メキシコ</td><td>USMCA、移民</td><td>世界経済の牽引役</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💰 経済安全保障</h2>
                <table class="styled-table">
                    <thead><tr><th>テーマ</th><th>概要</th><th>金融への影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>半導体戦争</strong></td><td>米中間のチップ覇権争い</td><td>テック株評価、産業政策</td></tr>
                        <tr><td><strong>エネルギー安保</strong></td><td>化石燃料依存からの脱却</td><td>エネルギー関連投資、脱炭素</td></tr>
                        <tr><td><strong>経済制裁</strong></td><td>SWIFT排除、資産凍結</td><td>決済システム、コンプライアンス</td></tr>
                        <tr><td><strong>食料安全保障</strong></td><td>穀物・肥料の供給リスク</td><td>コモディティ価格、インフレ</td></tr>
                        <tr><td><strong>サイバー安保</strong></td><td>国家レベルのサイバー攻撃</td><td>金融インフラへの脅威</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 地政学リスクと金融市場</div>
                    <p>・<strong>有事の金（Gold）</strong>：地政学リスク上昇 → 金価格上昇</p>
                    <p>・<strong>有事の円</strong>：かつては安全通貨として円高になりやすかった</p>
                    <p>・<strong>VIX指数</strong>：恐怖指数が地政学リスクに反応</p>
                    <p>・<strong>原油価格</strong>：中東情勢で大きく変動</p>
                </div>
            </div>
            <div id="day53-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day53-quiz', 'day53-quiz', [
            { question: 'チョークポイントとは何ですか？', options: ['政治的争点', '海上交通の戦略的要衝', '経済的枠組み', '軍事基地'], correct: 1, explanation: 'チョークポイントはマラッカ海峡やホルムズ海峡のような、海上貿易における戦略的要衝を指します。' },
            { question: '経済制裁の手段として使われた金融インフラはどれですか？', options: ['SWIFT', 'IMF', 'WTO', 'G7'], correct: 0, explanation: 'SWIFT（国際銀行間通信協会）からの排除は、対象国の国際送金を事実上遮断する強力な経済制裁手段です。' },
            { question: '地政学リスクが高まると一般的に価格が上昇する資産はどれですか？', options: ['株式', '不動産', '金（Gold）', '暗号資産'], correct: 2, explanation: '「有事の金」という格言通り、地政学的緊張が高まると安全資産としての金への需要が高まります。' },
            { question: '現在の米中対立の焦点の一つはどれですか？', options: ['農業', '半導体', '繊維産業', '観光'], correct: 1, explanation: '半導体は現代の「石油」と呼ばれ、米中間の技術覇権争いの最大の焦点となっています。' },
            { question: 'マハンが提唱した理論はどれですか？', options: ['ハートランド理論', 'リムランド理論', 'シーパワー理論', 'バランス・オブ・パワー'], correct: 2, explanation: 'マハンは海上交通路（シーレーン）の支配が国力の源泉であると主張するシーパワー理論を提唱しました。' }
        ]);
    }
};
