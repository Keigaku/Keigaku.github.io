// ===========================
// Day 13: 出来る社員のコミュニケーションの取り方
// ===========================
window.Day13 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💬 ビジネスコミュニケーションの基本</h2>
                <p>技術力が高くても、コミュニケーションが取れなければプロジェクトは成功しません。
                特にSIer（システムインテグレータ）では、クライアント・チーム・上司との意思疎通が仕事の質を大きく左右します。</p>

                <div class="info-box important">
                    <div class="info-box-title">🎯 コミュニケーション3つの原則</div>
                    <p><strong>1. 相手目線で考える</strong> — 自分が言いたいことではなく、相手が知りたいことを伝える</p>
                    <p><strong>2. 正確さよりも分かりやすさ</strong> — 100%正確な説明よりも、80%伝わる説明を</p>
                    <p><strong>3. タイミングと手段を選ぶ</strong> — 内容に応じた適切なコミュニケーション手段を</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>👂 アクティブリスニング（積極的傾聴）</h2>
                <p>「聞く力」はコミュニケーションの最も重要なスキルです。</p>

                <h3>5つのテクニック</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>テクニック</th><th>説明</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>うなずき</strong></td><td>相手に「聞いている」と伝える</td><td>適度にうなずく、「はい」「なるほど」</td></tr>
                        <tr><td><strong>オウム返し</strong></td><td>相手の言葉を繰り返す</td><td>「〜ということですね」</td></tr>
                        <tr><td><strong>要約</strong></td><td>内容を自分の言葉でまとめる</td><td>「つまり、○○が課題ということですね」</td></tr>
                        <tr><td><strong>感情への共感</strong></td><td>感情に寄り添う</td><td>「それは大変でしたね」</td></tr>
                        <tr><td><strong>沈黙の活用</strong></td><td>考える時間を与える</td><td>相手が考え中の沈黙を遮らない</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ やりがちなNG行動</div>
                    <p>・相手の話を遮って自分の意見を言う</p>
                    <p>・PCやスマホを見ながら話を聞く</p>
                    <p>・「でも」「しかし」で話を否定から入る</p>
                    <p>・アドバイスを求められていないのにアドバイスする</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>❓ 質問力を磨く</h2>
                <p>良い質問は、自分の理解を深めるだけでなく、チーム全体の生産性を向上させます。</p>

                <h3>質問の種類と使い分け</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>種類</th><th>用途</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>クローズド質問</strong></td><td>事実確認（Yes/No）</td><td>「この仕様で合っていますか？」</td></tr>
                        <tr><td><strong>オープン質問</strong></td><td>考えを引き出す</td><td>「この設計にした理由は何ですか？」</td></tr>
                        <tr><td><strong>仮説検証質問</strong></td><td>自分の理解を確認</td><td>「○○という理解で正しいでしょうか？」</td></tr>
                        <tr><td><strong>深掘り質問</strong></td><td>詳細を明らかにする</td><td>「具体的にはどのような場面ですか？」</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 質問する前のチェックリスト</div>
                    <p>・まず自分で調べたか？（ドキュメント、ソースコード、Google）</p>
                    <p>・質問の意図は明確か？（何を知りたいのか）</p>
                    <p>・自分なりの仮説はあるか？（「○○だと思うのですが…」）</p>
                    <p>・相手の時間を尊重しているか？（まとめて質問する）</p>
                </div>

                <h3>📝 良い質問の型</h3>
                <div class="code-block">【背景】○○の実装を行っています。
【やったこと】△△を試しましたが、□□というエラーが出ました。
【調べたこと】ドキュメントの○ページを確認しましたが、解決しませんでした。
【質問】▽▽という方法で解決できると考えていますが、正しいでしょうか？</div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>✉️ ビジネスメール・チャットの基本</h2>

                <h3>メールの基本構成</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>ポイント</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>件名</strong></td><td>具体的に、一目で内容がわかる</td><td>「【確認依頼】○○プロジェクト 設計書レビュー」</td></tr>
                        <tr><td><strong>宛先</strong></td><td>To（対応者）、Cc（共有者）を使い分け</td><td>対応が必要な人 → To</td></tr>
                        <tr><td><strong>本文冒頭</strong></td><td>挨拶＋目的を一文で</td><td>「お疲れ様です。○○の件でご連絡です。」</td></tr>
                        <tr><td><strong>本文</strong></td><td>箇条書き、結論先行</td><td>番号付きリストで整理</td></tr>
                        <tr><td><strong>締め</strong></td><td>期限と依頼事項を明確に</td><td>「○日までにご確認お願いします」</td></tr>
                    </tbody>
                </table>

                <h3>Slack/Teams チャットのマナー</h3>
                <ul>
                    <li><strong>スレッドを活用する</strong> — チャンネルの流れを乱さない</li>
                    <li><strong>結論から書く</strong> — 長文は最初に要約を書く</li>
                    <li><strong>メンション(@)を適切に使う</strong> — @channel の乱用を避ける</li>
                    <li><strong>リアクション（👍等）で既読を示す</strong> — 返事がすぐできなくてもリアクションで応答</li>
                    <li><strong>緊急でないDMは営業時間内に</strong> — 夜間のメッセージには配慮する</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🤝 会議でのコミュニケーション</h2>

                <h3>会議参加の心得</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>タイミング</th><th>行動</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>会議前</strong></td><td>アジェンダを確認、必要な資料を事前に読んでおく</td></tr>
                        <tr><td><strong>会議中</strong></td><td>メモを取る、最低1回は発言/質問する</td></tr>
                        <tr><td><strong>会議後</strong></td><td>議事録を共有、自分のアクションアイテムを確認</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 新人でも会議で貢献する方法</div>
                    <p>・議事録を率先して取る</p>
                    <p>・分からない用語はその場で質問する（他の新人も助かる）</p>
                    <p>・「初歩的な質問ですみません」は不要 — 質問は貢献です</p>
                </div>
            </div>

            <div id="day13-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day13-quiz', 'day13-quiz', [
            {
                question: 'アクティブリスニングのテクニックに含まれないものはどれですか？',
                options: ['オウム返し', '要約', '相手の話を遮ってアドバイスする', '沈黙の活用'],
                correct: 2,
                explanation: '相手の話を遮ってアドバイスするのはNG行動です。アクティブリスニングでは相手の話に集中し、理解を示すことが重要です。'
            },
            {
                question: '「○○という理解で正しいでしょうか？」という質問の種類はどれですか？',
                options: ['クローズド質問', 'オープン質問', '仮説検証質問', '深掘り質問'],
                correct: 2,
                explanation: '自分の仮説を相手に確認する質問は「仮説検証質問」です。自分で考えた上で確認するため、最も効率的な質問方法の一つです。'
            },
            {
                question: 'ビジネスメールの件名として最も適切なものはどれですか？',
                options: ['お疲れ様です', 'ご確認お願いします', '【確認依頼】○○プロジェクト 設計書レビュー', 'Re: Re: Re: Re: 件名なし'],
                correct: 2,
                explanation: '件名は「【種別】プロジェクト名 具体的な内容」の形式が最も分かりやすく、一目で内容が把握できます。'
            },
            {
                question: 'Slack/Teamsで適切な行動はどれですか？',
                options: ['@channel で全員に通知する', 'スレッドを使わずチャンネルに全て投稿する', 'リアクション（👍等）で既読を示す', '深夜に全員にDMを送る'],
                correct: 2,
                explanation: 'リアクション（👍等）で既読を示すのは、すぐに返事ができない場合でも相手に「見ました」と伝えられる良い方法です。'
            },
            {
                question: '質問する前にやるべきことに含まれないものはどれですか？',
                options: ['自分で調べる', '質問の意図を明確にする', '自分なりの仮説を持つ', '答えが分かっている人にだけ聞く'],
                correct: 3,
                explanation: '限定した相手だけに聞くのではなく、適切な人に質問することが重要です。事前準備（調査・意図の明確化・仮説）が質問の質を高めます。'
            }
        ]);
    }
};
