// ===========================
// Day 25: リーダーシップ理論と実践
// ===========================
window.Day25 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>👑 リーダーシップとは何か</h2>
                <p>リーダーシップとは<strong>「人を動かし、共通の目標に向かって導く力」</strong>です。
                マネジメント（管理）とは異なり、ビジョンの提示、動機づけ、変革の推進が中心です。
                役職に関わらず、全てのメンバーが発揮すべき能力です。</p>

                <h3>リーダーシップ vs マネジメント</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>項目</th><th>リーダーシップ</th><th>マネジメント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>焦点</strong></td><td>ビジョン・方向性</td><td>計画・進捗・効率</td></tr>
                        <tr><td><strong>動力</strong></td><td>インスピレーション</td><td>権限・仕組み</td></tr>
                        <tr><td><strong>時間軸</strong></td><td>長期的な変革</td><td>短期的な成果</td></tr>
                        <tr><td><strong>問い</strong></td><td>「何をすべきか」「なぜやるか」</td><td>「どうやるか」「いつまでか」</td></tr>
                        <tr><td><strong>変化への態度</strong></td><td>変化を創り出す</td><td>変化に対応する</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 SIerにおけるリーダーシップの重要性</div>
                    <p>金融SIerでは、技術力だけでなくリーダーシップが<strong>3年目以降の評価の分岐点</strong>になります。
                    技術リードとしてチームを導く力、クライアントとの信頼関係構築、
                    プロジェクトの方向性を示す力が求められます。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📚 主要なリーダーシップ理論</h2>

                <h3>状況対応型リーダーシップ（SL理論）</h3>
                <p>ハーシーとブランチャードが提唱。部下の成熟度に応じてスタイルを変える理論です。</p>
                <table class="styled-table">
                    <thead>
                        <tr><th>部下の成熟度</th><th>スタイル</th><th>具体的な行動</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>低（新人）</strong></td><td>教示的（S1）</td><td>具体的な指示を出し、細かく確認</td></tr>
                        <tr><td><strong>やや低</strong></td><td>説得的（S2）</td><td>理由を説明し、質問を受け付ける</td></tr>
                        <tr><td><strong>やや高</strong></td><td>参加的（S3）</td><td>一緒に考え、意思決定を共有</td></tr>
                        <tr><td><strong>高（ベテラン）</strong></td><td>委任的（S4）</td><td>権限を委譲し、自主的な判断を尊重</td></tr>
                    </tbody>
                </table>

                <h3>サーバントリーダーシップ</h3>
                <div class="info-box info">
                    <div class="info-box-title">📘 「リーダーはまず奉仕者である」</div>
                    <p>ロバート・グリーンリーフが提唱。リーダーの第一の役割は<strong>メンバーが最高のパフォーマンスを発揮できるよう支援すること</strong>。</p>
                    <p>・<strong>傾聴</strong>：メンバーの声に耳を傾ける</p>
                    <p>・<strong>共感</strong>：メンバーの立場を理解する</p>
                    <p>・<strong>癒やし</strong>：チームの修復と成長を支援</p>
                    <p>・<strong>気づき</strong>：自己認識と環境認識</p>
                    <p>・<strong>説得</strong>：権限ではなく説得で動かす</p>
                    <p>・<strong>概念化</strong>：ビジョンを描き共有する</p>
                    <p>・<strong>コミュニティ構築</strong>：帰属意識のあるチームを作る</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🛡️ 心理的安全性</h2>
                <p>Googleの「プロジェクト・アリストテレス」で、チーム成功の最大の要因と特定された概念です。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>心理的安全性が高いチーム</th><th>心理的安全性が低いチーム</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>✅ 失敗を報告しても批判されない</td><td>❌ ミスを隠す文化</td></tr>
                        <tr><td>✅ 質問・異論を自由に出せる</td><td>❌ 「空気を読む」が優先</td></tr>
                        <tr><td>✅ リスクテイクが奨励される</td><td>❌ 前例踏襲が安全</td></tr>
                        <tr><td>✅ 多様な意見が尊重される</td><td>❌ 声の大きい人の意見が通る</td></tr>
                        <tr><td>✅ 互いの弱みを認め合える</td><td>❌ 弱みを見せると評価が下がる</td></tr>
                    </tbody>
                </table>

                <h3>心理的安全性を高めるリーダーの行動</h3>
                <ul>
                    <li><strong>自分から弱みを見せる</strong> — 「自分もよく間違える」と認める</li>
                    <li><strong>質問を歓迎する</strong> — 「いい質問だね」を口癖にする</li>
                    <li><strong>失敗を学習の機会にする</strong> — 犯人探しではなく原因分析</li>
                    <li><strong>全員に発言の機会を作る</strong> — 会議で順番に意見を聞く</li>
                    <li><strong>フィードバックを求める</strong> — 「自分の改善点を教えてほしい」</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🎯 実践：自分のリーダーシップスタイル</h2>

                <h3>5つのリーダーシップスタイル</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>スタイル</th><th>特徴</th><th>強みが活きる場面</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>ビジョン型</strong></td><td>大きな方向性を示す</td><td>新規プロジェクト立ち上げ</td></tr>
                        <tr><td><strong>コーチ型</strong></td><td>個人の成長を支援</td><td>人材育成、若手メンタリング</td></tr>
                        <tr><td><strong>デモクラシー型</strong></td><td>チームの合意形成を重視</td><td>複雑な技術決定</td></tr>
                        <tr><td><strong>ペースセッター型</strong></td><td>自ら高い基準を示す</td><td>短期の成果追求</td></tr>
                        <tr><td><strong>アフィリエイティブ型</strong></td><td>人間関係・調和を重視</td><td>チーム修復、士気向上</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 優れたリーダーは複数のスタイルを使い分ける</div>
                    <p>一つのスタイルに固執するのではなく、<strong>状況に応じて柔軟にスタイルを切り替える</strong>ことが重要です。
                    平時はコーチ型、危機時はペースセッター型、新プロジェクトではビジョン型など。</p>
                </div>
            </div>

            <div id="day25-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day25-quiz', 'day25-quiz', [
            {
                question: 'SL理論（状況対応型リーダーシップ）で、新人（成熟度が低い）の部下に適したスタイルはどれですか？',
                options: ['委任的（S4）', '参加的（S3）', '説得的（S2）', '教示的（S1）'],
                correct: 3,
                explanation: '成熟度が低い部下には教示的スタイル（S1）が適しています。具体的な指示を出し、細かく進捗を確認します。'
            },
            {
                question: 'Googleのプロジェクト・アリストテレスで、チーム成功の最大の要因とされたものはどれですか？',
                options: ['チームメンバーのIQ', '心理的安全性', '明確な役割分担', '技術力の高さ'],
                correct: 1,
                explanation: '心理的安全性が高い環境では、メンバーがリスクを取り、失敗を報告し、自由に意見を出せるため、チーム全体のパフォーマンスが向上します。'
            },
            {
                question: 'サーバントリーダーシップの核心的な考え方はどれですか？',
                options: ['リーダーは最も優秀であるべき', 'リーダーはまず奉仕者である', 'リーダーは権限で人を動かす', 'リーダーは最終決定権を持つ'],
                correct: 1,
                explanation: 'サーバントリーダーシップでは、リーダーの第一の役割はメンバーが最高のパフォーマンスを発揮できるよう支援することです。'
            },
            {
                question: 'リーダーシップとマネジメントの違いとして正しいのはどれですか？',
                options: ['リーダーシップは計画と管理に焦点を当てる', 'マネジメントはビジョンと変革に焦点を当てる', 'リーダーシップは「何をすべきか」を問い、マネジメントは「どうやるか」を問う', 'どちらも同じ意味である'],
                correct: 2,
                explanation: 'リーダーシップはビジョン・方向性に焦点を当て「何をすべきか」を問い、マネジメントは計画・進捗に焦点を当て「どうやるか」を問います。'
            },
            {
                question: '心理的安全性を高めるリーダーの行動として最も適切なのはどれですか？',
                options: ['ミスした人を全員の前で叱責する', '自分から弱みを見せ、質問を歓迎する', '全ての決定を自分一人で行う', '常に完璧な結果を求める'],
                correct: 1,
                explanation: 'リーダーが自ら弱みを見せ、質問を歓迎することで、メンバーも安心して発言できる環境が生まれます。'
            }
        ]);
    }
};
