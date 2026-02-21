// ===========================
// Day 12: 評価される社員の仕事の進め方
// ===========================
window.Day12 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⭐ 評価される社員とは</h2>
                <p>「優秀な社員」と「評価される社員」は似て非なるものです。技術力だけでなく、
                仕事の進め方・コミュニケーション・姿勢の総合力が評価を決めます。</p>

                <div class="info-box important">
                    <div class="info-box-title">📊 評価の3本柱</div>
                    <p><strong>1. 成果（What）</strong> — 何を達成したか</p>
                    <p><strong>2. プロセス（How）</strong> — どのように取り組んだか</p>
                    <p><strong>3. 行動（Behavior）</strong> — チームや組織にどう貢献したか</p>
                </div>

                <table class="styled-table">
                    <thead>
                        <tr><th>評価される人</th><th>評価されにくい人</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>期限前に完了させる</td><td>期限ギリギリで提出</td></tr>
                        <tr><td>問題を早期に報告する</td><td>問題を隠して悪化させる</td></tr>
                        <tr><td>自分から提案する</td><td>言われたことだけやる</td></tr>
                        <tr><td>全体最適を考える</td><td>自分の担当だけ見る</td></tr>
                        <tr><td>失敗から学ぶ</td><td>同じ失敗を繰り返す</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📋 報連相（ほうれんそう）の極意</h2>
                <p>日本のビジネスにおける最も重要なコミュニケーションフレームワークです。</p>

                <h3>報告（ほう）</h3>
                <div class="info-box info">
                    <div class="info-box-title">📢 報告のポイント</div>
                    <p>・<strong>結論から先に</strong>伝える（事実 → 原因 → 対策の順）</p>
                    <p>・<strong>悪い報告ほど早く</strong>する（Bad News First）</p>
                    <p>・<strong>定量的に</strong>伝える（「かなり遅れている」→「3日遅延の見込み」）</p>
                    <p>・<strong>定期的に</strong>報告する（聞かれる前に自分から）</p>
                </div>

                <h3>連絡（れん）</h3>
                <div class="info-box info">
                    <div class="info-box-title">📨 連絡のポイント</div>
                    <p>・<strong>関係者全員に</strong>漏れなく共有する</p>
                    <p>・<strong>事実と推測を分けて</strong>伝える</p>
                    <p>・<strong>適切な手段</strong>を選ぶ（緊急→電話、記録→メール、議論→対面）</p>
                </div>

                <h3>相談（そう）</h3>
                <div class="info-box info">
                    <div class="info-box-title">🤝 相談のポイント</div>
                    <p>・<strong>自分の考えを持ってから</strong>相談する（「どうすれば？」→「AとBの案がありますが、Aが良いと考えます。いかがでしょうか？」）</p>
                    <p>・<strong>タイミングを見計らう</strong>（相手の忙しさを考慮）</p>
                    <p>・<strong>15分考えて分からなければ</strong>すぐ相談（悩みすぎない）</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🔄 PDCAサイクル</h2>
                <p>仕事の質を継続的に改善するためのフレームワークです。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>段階</th><th>内容</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>P - Plan（計画）</strong></td><td>目標設定と計画立案</td><td>「今週中にドキュメントを完成させる」</td></tr>
                        <tr><td><strong>D - Do（実行）</strong></td><td>計画に沿って実行</td><td>毎日2時間ずつ執筆する</td></tr>
                        <tr><td><strong>C - Check（評価）</strong></td><td>結果を振り返る</td><td>「完成したが品質にバラつきがある」</td></tr>
                        <tr><td><strong>A - Action（改善）</strong></td><td>次の改善策を決める</td><td>「レビューチェックリストを作成する」</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 PDCA実践のコツ</div>
                    <p>・Cを飛ばさない（やりっぱなしにしない）</p>
                    <p>・小さく速く回す（1週間単位で回すのが理想）</p>
                    <p>・振り返りを記録に残す（次に活かすため）</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📊 タスク管理の実践</h2>

                <h3>優先度マトリックス（アイゼンハワー・マトリックス）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th></th><th>緊急</th><th>緊急でない</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>重要</strong></td><td>🔴 即座に対応<br>（障害対応、締切直前のタスク）</td><td>🟡 計画的に実行<br>（スキルアップ、予防策）</td></tr>
                        <tr><td><strong>重要でない</strong></td><td>🔵 委任または効率化<br>（一部の会議、割り込み）</td><td>⚪ 排除 or 後回し<br>（不要な作業）</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 新人がハマりがちな罠</div>
                    <p>「緊急だが重要でない」タスクに時間を取られ、「重要だが緊急でない」タスク（スキルアップ・品質改善）が後回しになる。
                    意識的に第2象限（重要×緊急でない）の時間を確保しましょう。</p>
                </div>

                <h3>タスク管理の基本原則</h3>
                <ul>
                    <li><strong>タスクは分解する</strong> — 「設計書を書く」→「目次作成（30分）→ 各章執筆（各1時間）→ レビュー（30分）」</li>
                    <li><strong>見積もりは1.5倍にする</strong> — 新人のうちは想定より時間がかかるのが普通</li>
                    <li><strong>朝一番に最重要タスクをやる</strong> — 集中力が最も高い時間を有効活用</li>
                    <li><strong>「完了」の定義を明確にする</strong> — 何をもって「終わり」とするかを先に決める</li>
                    <li><strong>マルチタスクを避ける</strong> — 一つずつ集中して片付ける方が結果的に速い</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🚀 主体性を発揮する</h2>

                <h3>「指示待ち」から「提案型」へ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>レベル</th><th>行動パターン</th><th>評価</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Lv.1</strong></td><td>言われたことをやる</td><td>最低限</td></tr>
                        <tr><td><strong>Lv.2</strong></td><td>言われたこと＋αをやる</td><td>普通</td></tr>
                        <tr><td><strong>Lv.3</strong></td><td>問題を発見して報告する</td><td>良い</td></tr>
                        <tr><td><strong>Lv.4</strong></td><td>問題と解決策をセットで提案する</td><td>優秀</td></tr>
                        <tr><td><strong>Lv.5</strong></td><td>問題が起きる前に予防策を講じる</td><td>エース</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 新人でもできる主体性の発揮</div>
                    <p>・会議で一つは質問する</p>
                    <p>・議事録を率先して取る</p>
                    <p>・「分からないこと」を整理してまとめて質問する</p>
                    <p>・チームのドキュメントの誤字を見つけたら直す</p>
                    <p>・自分用のメモを他の人にも役立つ形で共有する</p>
                </div>
            </div>

            <div id="day12-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day12-quiz', 'day12-quiz', [
            {
                question: '報連相で「悪い報告」はどのタイミングですべきですか？',
                options: ['週次報告のときにまとめて', '解決策が見つかってから', 'できるだけ早く（Bad News First）', '上司の機嫌がいいときを見計らって'],
                correct: 2,
                explanation: '悪い報告ほど早くすべきです（Bad News First）。問題を隠すと事態が悪化し、信頼を失います。'
            },
            {
                question: 'PDCAサイクルで最も見落とされがちな段階はどれですか？',
                options: ['Plan（計画）', 'Do（実行）', 'Check（評価）', 'Action（改善）'],
                correct: 2,
                explanation: 'Check（評価・振り返り）が最も見落とされがちです。「やりっぱなし」を避け、必ず結果を振り返ることが重要です。'
            },
            {
                question: 'アイゼンハワー・マトリックスで、新人が意識的に時間を確保すべき象限はどれですか？',
                options: ['緊急かつ重要', '重要だが緊急でない', '緊急だが重要でない', '緊急でも重要でもない'],
                correct: 1,
                explanation: '「重要だが緊急でない」象限（第2象限）が最も重要です。スキルアップや品質改善など将来の成長につながる活動がここに含まれます。'
            },
            {
                question: '相談の際に適切な姿勢はどれですか？',
                options: ['「どうすればいいですか？」と丸投げする', '自分の考え（A案/B案など）を持ってから相談する', '解決するまで一人で悩み続ける', '結論が出てから事後報告する'],
                correct: 1,
                explanation: '自分の考えを持ってから相談することで、上司の時間を節約し、自分の思考力も鍛えられます。ただし15分以上悩んだら相談しましょう。'
            },
            {
                question: '主体性の発揮レベルで「Lv.4」に該当する行動はどれですか？',
                options: ['言われた仕事を確実にこなす', '問題を見つけたら報告する', '問題と解決策をセットで提案する', '問題が起きる前に予防策を講じる'],
                correct: 2,
                explanation: 'Lv.4は「問題と解決策をセットで提案する」です。問題を見つけるだけでなく、解決案まで考えることで評価が大きく上がります。'
            }
        ]);
    }
};
