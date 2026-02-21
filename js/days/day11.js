// ===========================
// Day 11: 入社式でのスピーチ
// ===========================
window.Day11 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎤 入社式スピーチの重要性</h2>
                <p>入社式でのスピーチは、上司・同僚・経営層に自分の第一印象を形成する非常に重要な機会です。
                ここでの印象が、その後の人間関係やキャリアの出発点になります。</p>

                <div class="info-box important">
                    <div class="info-box-title">🎯 スピーチの3つの目的</div>
                    <p><strong>1. 自分を知ってもらう</strong> — 名前と顔を覚えてもらう</p>
                    <p><strong>2. 意欲を伝える</strong> — 前向きな姿勢を示す</p>
                    <p><strong>3. 信頼感を築く</strong> — 誠実さ・謙虚さをアピール</p>
                </div>

                <h3>スピーチの基本構成（PREP法）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>内容</th><th>時間目安</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>P - Point（結論）</strong></td><td>自己紹介と入社の挨拶</td><td>15秒</td></tr>
                        <tr><td><strong>R - Reason（理由）</strong></td><td>入社を決めた理由・志望動機</td><td>30秒</td></tr>
                        <tr><td><strong>E - Example（具体例）</strong></td><td>学生時代の経験・エピソード</td><td>30秒</td></tr>
                        <tr><td><strong>P - Point（まとめ）</strong></td><td>意気込み・締めの言葉</td><td>15秒</td></tr>
                    </tbody>
                </table>
                <p>合計 <strong>約90秒（1分半）</strong> が理想的な長さです。短すぎず、長すぎない。</p>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>✍️ スピーチテンプレート</h2>

                <h3>テンプレート A：スタンダード型</h3>
                <div class="code-block">本日より入社いたしました、○○（名前）と申します。
○○大学○○学部を卒業し、○○を専攻しておりました。

御社を志望した理由は、○○に強い関心があり、
○○という事業に携わりたいと考えたからです。

学生時代は○○に取り組み、○○を学びました。
この経験を活かし、一日でも早く戦力になれるよう
精一杯努力してまいります。

ご指導ご鞭撻のほど、よろしくお願いいたします。</div>

                <h3>テンプレート B：エピソード重視型</h3>
                <div class="code-block">本日より入社いたしました、○○です。
まず、このような場をいただき感謝申し上げます。

私が金融の世界に興味を持ったきっかけは、
大学時代に○○を経験したことでした。
その中で○○の重要性を実感し、
この分野で専門性を磨きたいと強く思いました。

まだまだ未熟ではございますが、
積極的に学び、チームに貢献できるよう
全力で取り組んでまいります。
どうぞよろしくお願いいたします。</div>

                <h3>テンプレート C：簡潔型（大人数向け）</h3>
                <div class="code-block">本日入社いたしました○○です。
○○出身で、趣味は○○です。
一日も早く皆様のお役に立てるよう頑張ります。
どうぞよろしくお願いいたします。</div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🌟 好印象を与えるポイント</h2>

                <h3>話し方のコツ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>項目</th><th>良い例</th><th>悪い例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>目線</strong></td><td>聴衆全体を見渡す</td><td>原稿だけを見る・下を向く</td></tr>
                        <tr><td><strong>声量</strong></td><td>はっきり、やや大きめ</td><td>ボソボソ話す</td></tr>
                        <tr><td><strong>速度</strong></td><td>ゆっくり、間を意識</td><td>早口で一気に話す</td></tr>
                        <tr><td><strong>表情</strong></td><td>自然な笑顔</td><td>無表情・緊張した顔</td></tr>
                        <tr><td><strong>姿勢</strong></td><td>背筋を伸ばし、堂々と</td><td>猫背・そわそわ</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 緊張対策</div>
                    <p>・事前に3回以上声に出して練習する</p>
                    <p>・深呼吸を3回してから話し始める</p>
                    <p>・「完璧でなくてもいい」と自分に許可を出す</p>
                    <p>・最初の一言（名前）だけは必ずハキハキ言う</p>
                </div>

                <h3>避けるべきNG表現</h3>
                <ul>
                    <li>❌ 「特に理由はないのですが…」 → 志望動機が不明確</li>
                    <li>❌ 「まだ何も分かりませんが…」 → ネガティブすぎる</li>
                    <li>❌ 「前の会社では…」 → 過去の比較は不適切</li>
                    <li>❌ 長すぎる自己紹介（3分以上）→ 聞き手が疲れる</li>
                    <li>❌ 内輪ネタや砕けすぎた表現 → TPOをわきまえる</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📋 スピーチ準備チェックリスト</h2>
                <table class="styled-table">
                    <thead>
                        <tr><th>チェック</th><th>項目</th><th>ポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>□</td><td>原稿を書いた</td><td>90秒以内にまとめる</td></tr>
                        <tr><td>□</td><td>声に出して練習した</td><td>最低3回は通しで練習</td></tr>
                        <tr><td>□</td><td>時間を計った</td><td>1分〜2分が理想</td></tr>
                        <tr><td>□</td><td>敬語をチェックした</td><td>不自然な敬語がないか確認</td></tr>
                        <tr><td>□</td><td>服装を確認した</td><td>スーツ・身だしなみ</td></tr>
                        <tr><td>□</td><td>お辞儀の練習をした</td><td>最初と最後に丁寧にお辞儀</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day11-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day11-quiz', 'day11-quiz', [
            {
                question: 'スピーチの構成法「PREP法」のPは何を意味しますか？',
                options: ['Practice（練習）', 'Point（結論）', 'Passion（情熱）', 'Plan（計画）'],
                correct: 1,
                explanation: 'PREP法のPはPoint（結論・要点）です。最初と最後に結論を述べることで、聞き手に伝わりやすいスピーチになります。'
            },
            {
                question: '入社式スピーチの理想的な長さはどれですか？',
                options: ['30秒以内', '約90秒（1分半）', '5分程度', '10分以上'],
                correct: 1,
                explanation: '入社式スピーチは約90秒（1分半）が理想的です。短すぎず長すぎず、聞き手の集中力が保てる長さです。'
            },
            {
                question: 'スピーチで避けるべき表現はどれですか？',
                options: ['「一日でも早く戦力になれるよう頑張ります」', '「ご指導ご鞭撻のほどよろしくお願いいたします」', '「特に理由はないのですが入社しました」', '「積極的に学んでいきたいと思います」'],
                correct: 2,
                explanation: '「特に理由がない」という表現は志望動機が不明確で、入社への意欲が伝わりません。必ず前向きな理由を述べましょう。'
            },
            {
                question: '緊張対策として効果的な方法はどれですか？',
                options: ['原稿を暗記して一字一句間違えないようにする', '事前に3回以上声に出して練習する', 'スピーチ直前にカフェインを大量に摂取する', '聴衆を見ないで話す'],
                correct: 1,
                explanation: '事前に声に出して練習することで、本番での緊張を軽減できます。完璧な暗記よりも、流れを体に覚えさせることが大切です。'
            },
            {
                question: 'スピーチ中の目線で適切なのはどれですか？',
                options: ['原稿だけを見て話す', '一人の人をずっと見つめる', '聴衆全体を見渡す', '天井を見ながら話す'],
                correct: 2,
                explanation: '聴衆全体をゆっくり見渡すことで、全員に語りかけている印象を与え、自信のある話し方に見えます。'
            }
        ]);
    }
};
