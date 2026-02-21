// ===========================
// Day 14: 仕事とプライベートの充実
// ===========================
window.Day14 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚖️ 仕事もプライベートも充実させる</h2>
                <p>「ワークライフバランス」ではなく「ワークライフインテグレーション」の時代。
                仕事と私生活を対立させるのではなく、両方を相乗効果で高めていく考え方が重要です。</p>

                <div class="info-box important">
                    <div class="info-box-title">🎯 充実のための3つの前提</div>
                    <p><strong>1. 健康が基盤</strong> — 睡眠・運動・食事が全ての土台</p>
                    <p><strong>2. 仕事の充実がプライベートを豊かにする</strong>（逆もまた真）</p>
                    <p><strong>3. 時間は有限</strong> — 自分にとって重要なことに集中する</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📚 7つの習慣（スティーブン・コヴィー）</h2>
                <p>自己成長の最も有名なフレームワーク。人格主義に基づく原則中心の生き方を提唱しています。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>区分</th><th>習慣</th><th>概要</th></tr>
                    </thead>
                    <tbody>
                        <tr><td rowspan="3"><strong>私的成功</strong></td><td>① 主体的である</td><td>反応的ではなく、自分で選択する</td></tr>
                        <tr><td>② 終わりを思い描く</td><td>ゴールを明確にしてから行動する</td></tr>
                        <tr><td>③ 最優先事項を優先する</td><td>重要なことに時間を使う</td></tr>
                        <tr><td rowspan="3"><strong>公的成功</strong></td><td>④ Win-Winを考える</td><td>お互いが得する解決策を探る</td></tr>
                        <tr><td>⑤ まず理解し、理解される</td><td>相手を理解してから自分の意見を伝える</td></tr>
                        <tr><td>⑥ シナジーを創り出す</td><td>違いを活かして新しい価値を生む</td></tr>
                        <tr><td><strong>再新再生</strong></td><td>⑦ 刃を研ぐ</td><td>身体・精神・知性・社会/情緒の4つを磨く</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 新入社員へのヒント</div>
                    <p>まず<strong>第1の習慣「主体的である」</strong>を意識しましょう。
                    「上司が…」「環境が…」と他責にせず、「自分にできることは何か」を常に考えることが成長の出発点です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📋 GTD（Getting Things Done）</h2>
                <p>デビッド・アレンが提唱した生産性向上メソッド。頭の中を空にして、システムに任せます。</p>

                <h3>GTDの5つのステップ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>ステップ</th><th>内容</th><th>ツール例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 収集</strong></td><td>気になることを全て書き出す</td><td>メモ帳、Notion</td></tr>
                        <tr><td><strong>2. 処理</strong></td><td>「次に取るべきアクション」を決める</td><td>2分ルール適用</td></tr>
                        <tr><td><strong>3. 整理</strong></td><td>カテゴリ別に振り分ける</td><td>プロジェクト/待ち/いつか</td></tr>
                        <tr><td><strong>4. レビュー</strong></td><td>週次でリスト全体を見直す</td><td>週次レビュー（金曜午後）</td></tr>
                        <tr><td><strong>5. 実行</strong></td><td>コンテキストに応じて行動</td><td>状況・時間・エネルギーで判断</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">⏱️ 2分ルール</div>
                    <p>「2分以内でできることは、今すぐやる」— GTDの核心ルール。
                    タスクをリストに追加する時間よりも実行した方が速い場合は、即実行します。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🍅 ポモドーロ・テクニック</h2>
                <p>集中力を最大化する時間管理テクニック。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>フェーズ</th><th>時間</th><th>内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>🍅 作業</td><td>25分</td><td>一つのタスクに集中する</td></tr>
                        <tr><td>☕ 短い休憩</td><td>5分</td><td>ストレッチ、水分補給</td></tr>
                        <tr><td>🍅🍅🍅🍅 4セット後</td><td>-</td><td>長い休憩（15-30分）</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 ポモドーロ実践のコツ</div>
                    <p>・25分間は<strong>通知をオフ</strong>にする</p>
                    <p>・途中で割り込みが入ったらメモして後で対応</p>
                    <p>・タスクの種類によって時間を調整（50分作業/10分休憩も可）</p>
                    <p>・1日何ポモドーロできたか記録すると生産性が可視化される</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🧘 メンタルヘルスとマインドフルネス</h2>
                <p>持続的にパフォーマンスを発揮するためには、メンタルの安定が不可欠です。</p>

                <h3>ストレス管理の基本</h3>
                <ul>
                    <li><strong>睡眠</strong>：7-8時間の質の良い睡眠を確保する</li>
                    <li><strong>運動</strong>：週3回、30分以上の有酸素運動（ストレスホルモンを軽減）</li>
                    <li><strong>食事</strong>：バランスの取れた食事、特に朝食を抜かない</li>
                    <li><strong>人間関係</strong>：信頼できる人との対話の時間を持つ</li>
                </ul>

                <h3>マインドフルネスの実践</h3>
                <div class="info-box info">
                    <div class="info-box-title">🧘 1分間マインドフルネス（初心者向け）</div>
                    <p>1. 姿勢を正して座る</p>
                    <p>2. 目を閉じる（または半開き）</p>
                    <p>3. 呼吸に意識を集中する（吸う4秒・吐く6秒）</p>
                    <p>4. 雑念が浮かんだら、そっと呼吸に意識を戻す</p>
                    <p>5. 1分間続ける（慣れたら5分、10分と伸ばす）</p>
                </div>

                <h3>成長マインドセット</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>固定マインドセット</th><th>成長マインドセット</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>才能は生まれつき</td><td>努力で能力は伸びる</td></tr>
                        <tr><td>失敗は恥ずかしい</td><td>失敗は学びの機会</td></tr>
                        <tr><td>批判は人格否定</td><td>批判はフィードバック</td></tr>
                        <tr><td>他人の成功は脅威</td><td>他人の成功は刺激・学び</td></tr>
                        <tr><td>「自分にはできない」</td><td>「まだできない（YET）」</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day14-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day14-quiz', 'day14-quiz', [
            {
                question: '7つの習慣で最初の私的成功の習慣はどれですか？',
                options: ['Win-Winを考える', '主体的である', '刃を研ぐ', 'シナジーを創り出す'],
                correct: 1,
                explanation: '第1の習慣は「主体的である」です。環境や他人のせいにせず、自分で選択するという考え方が全ての出発点になります。'
            },
            {
                question: 'GTDの「2分ルール」とは何ですか？',
                options: ['毎日2分間だけ仕事をする', '2分以内でできることは今すぐやる', 'タスクを2分割に分ける', '2分ごとにタスクを切り替える'],
                correct: 1,
                explanation: '2分ルールは「2分以内にできるタスクはリストに追加せず、その場で即実行する」という原則です。小さなタスクの滞留を防ぎます。'
            },
            {
                question: 'ポモドーロ・テクニックの1セットの構成はどれですか？',
                options: ['50分作業→10分休憩', '25分作業→5分休憩', '60分作業→15分休憩', '15分作業→3分休憩'],
                correct: 1,
                explanation: 'ポモドーロの基本は25分作業＋5分休憩の1セットです。4セット完了後に15-30分の長い休憩を取ります。'
            },
            {
                question: '成長マインドセットの特徴はどれですか？',
                options: ['才能は生まれつきで変えられない', '失敗は「まだできない（YET）」と捉える', '他人の成功は脅威である', '批判は人格否定である'],
                correct: 1,
                explanation: '成長マインドセットでは失敗を「まだできない（YET）」と捉え、努力と学習で能力を伸ばせると考えます。'
            },
            {
                question: 'マインドフルネスの基本的な実践方法として正しいものはどれですか？',
                options: ['激しい運動をして気分を発散させる', '呼吸に意識を集中し、雑念が浮かんだらそっと戻す', '難しい本を読んで思考力を鍛える', '好きな音楽を大音量で聴く'],
                correct: 1,
                explanation: 'マインドフルネスの基本は呼吸への集中です。雑念が浮かんでも否定せず、そっと呼吸に意識を戻すことで、集中力とストレス耐性が向上します。'
            }
        ]);
    }
};
