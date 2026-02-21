// ===========================
// Day 26: 影響力・交渉術・ファシリテーション
// ===========================
window.Day26 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🤝 影響力のメカニズム</h2>
                <p>リーダーとして人を動かすには、権限に頼らない<strong>影響力</strong>が不可欠です。
                特にSIerでは、クライアントや他チームなど指揮命令系統にない人々と協業する場面が多く、
                影響力のスキルが実務の成否を左右します。</p>

                <h3>チャルディーニの「影響力の6原則」</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>原則</th><th>内容</th><th>ビジネスでの活用例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>返報性</strong></td><td>与えられると返したくなる</td><td>相手の要望に先に応えることで協力を得る</td></tr>
                        <tr><td><strong>一貫性</strong></td><td>発言と行動を一致させたい</td><td>小さなYESから始めて大きな合意につなげる</td></tr>
                        <tr><td><strong>社会的証明</strong></td><td>他者の行動を参考にする</td><td>「他行でも採用されています」</td></tr>
                        <tr><td><strong>好意</strong></td><td>好きな人の言うことを聞く</td><td>信頼関係構築、共通点の発見</td></tr>
                        <tr><td><strong>権威</strong></td><td>専門家の意見に従いやすい</td><td>業界標準、ベストプラクティスの引用</td></tr>
                        <tr><td><strong>希少性</strong></td><td>稀少なものに価値を感じる</td><td>「この技術を持つチームは限られている」</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>💼 交渉術</h2>
                <p>SIerでの交渉はゼロサムではなく、<strong>Win-Win</strong>を目指すものです。</p>

                <h3>交渉の準備 — BATNA</h3>
                <div class="info-box info">
                    <div class="info-box-title">📘 BATNAとは</div>
                    <p><strong>Best Alternative to a Negotiated Agreement</strong>（交渉が決裂した場合の最善の代替案）</p>
                    <p>交渉前に必ずBATNAを明確にしておくことで、不利な条件を安易に受け入れることを防ぎます。</p>
                </div>

                <h3>交渉の基本フレームワーク</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>ステップ</th><th>内容</th><th>SIerでの具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 準備</strong></td><td>目標・BATNA・相手の利益を分析</td><td>コスト資料、技術的代替案を用意</td></tr>
                        <tr><td><strong>2. 関係構築</strong></td><td>信頼関係のベースを作る</td><td>共通の目標（プロジェクト成功）を確認</td></tr>
                        <tr><td><strong>3. 利益の探索</strong></td><td>立場ではなく利益を聞く</td><td>「なぜそのスケジュールが必要？」</td></tr>
                        <tr><td><strong>4. 選択肢の創出</strong></td><td>複数のWin-Winオプションを提示</td><td>段階リリース案、スコープのトレードオフ</td></tr>
                        <tr><td><strong>5. 合意</strong></td><td>客観的基準に基づく合意</td><td>業界標準、過去実績に基づく判断</td></tr>
                    </tbody>
                </table>

                <h3>SIerでよくある交渉場面</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>場面</th><th>交渉ポイント</th><th>心得</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>追加要件の受入</strong></td><td>スコープ vs スケジュール vs コスト</td><td>「トレードオフの三角形」を見せる</td></tr>
                        <tr><td><strong>スケジュール調整</strong></td><td>機能の優先順位付け</td><td>データと事実に基づく説明</td></tr>
                        <tr><td><strong>リソース確保</strong></td><td>社内でのメンバーアサイン</td><td>プロジェクトの意義とメリットを訴える</td></tr>
                        <tr><td><strong>障害対応の方針</strong></td><td>暫定対応 vs 恒久対応</td><td>リスクと影響を定量的に提示</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🗣️ ファシリテーション</h2>
                <p>ファシリテーションとは、<strong>会議やワークショップの場で参加者の力を最大限引き出し、
                合意形成や問題解決に導く技術</strong>です。</p>

                <h3>ファシリテーションの4つのスキル</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>スキル</th><th>内容</th><th>テクニック</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>場のデザイン</strong></td><td>会議の目的・ゴール・進め方を設計</td><td>アジェンダ事前共有、時間配分</td></tr>
                        <tr><td><strong>対人関係</strong></td><td>安全な場づくり、発言促進</td><td>質問投げかけ、全員への均等な発言機会</td></tr>
                        <tr><td><strong>構造化</strong></td><td>議論の整理・可視化</td><td>ホワイトボード活用、論点整理</td></tr>
                        <tr><td><strong>合意形成</strong></td><td>結論の収束・Next Action決定</td><td>合意プロセスの明示、反対意見の確認</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 すぐ使えるファシリテーション技法</div>
                    <p>・<strong>パーキングロット</strong>：本題から外れた議題を「駐車場」にメモして後で議論</p>
                    <p>・<strong>タイムボクシング</strong>：議論時間を区切って決断を促す</p>
                    <p>・<strong>フィスト・トゥ・ファイブ</strong>：1〜5の指で合意度を確認</p>
                    <p>・<strong>サイレントブレスト</strong>：付箋に各自アイデアを書く→議論（声の大きい人の独占を防ぐ）</p>
                    <p>・<strong>要約と確認</strong>：「つまり〇〇ということですね？」で認識齟齬を防ぐ</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>⚠️ 難しい状況への対処</h2>
                <table class="styled-table">
                    <thead>
                        <tr><th>状況</th><th>対処法</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>会議で一人が話しすぎる</strong></td><td>「ありがとうございます。他の方のご意見も聞いてみましょう」</td></tr>
                        <tr><td><strong>意見の対立が激しい</strong></td><td>共通の目的に立ち返る。「両方の上位目標は何でしょうか？」</td></tr>
                        <tr><td><strong>誰も発言しない</strong></td><td>まず2人組で話し合い→全体共有（Think-Pair-Share）</td></tr>
                        <tr><td><strong>議論が発散する</strong></td><td>パーキングロットを使い本題に戻す</td></tr>
                        <tr><td><strong>結論が出ない</strong></td><td>「仮に今日決めるとしたら？」で仮決めを促す</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day26-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day26-quiz', 'day26-quiz', [
            {
                question: 'チャルディーニの影響力の原則で「返報性」とはどういう意味ですか？',
                options: ['他人と同じ行動をしたくなる', '与えられると返したくなる', '1度言ったことを変えたくない', '稀少なものに価値を感じる'],
                correct: 1,
                explanation: '返報性とは、人は何かを与えられると「お返しをしたい」と感じる心理です。ビジネスでは先に相手の要望に応えることで協力を得やすくなります。'
            },
            {
                question: 'BATNAとは何ですか？',
                options: ['交渉の最終目標', '交渉が決裂した場合の最善の代替案', '交渉の議事録', '交渉相手の弱点'],
                correct: 1,
                explanation: 'BATNA（Best Alternative to a Negotiated Agreement）は交渉が決裂した場合の最善の代替案です。これを明確にしておくことで不利な条件を受け入れることを防ぎます。'
            },
            {
                question: 'ファシリテーションの「パーキングロット」とは何ですか？',
                options: ['会議室の配置法', '本題から外れた議題を一時メモして後で議論する手法', '会議の議事録の書き方', '参加者の時間管理'],
                correct: 1,
                explanation: 'パーキングロットは、議論中に出た本題から外れた重要な話題を「駐車場」にメモして一時保管し、後で議論する手法です。'
            },
            {
                question: 'SIerでの交渉で追加要件を受けた際に見せるべき「トレードオフの三角形」とは何ですか？',
                options: ['コスト × 品質 × セキュリティ', 'スコープ × スケジュール × コスト', '設計 × 実装 × テスト', '人 × プロセス × ツール'],
                correct: 1,
                explanation: 'プロジェクトマネジメントにおける「制約の三角形」はスコープ・スケジュール・コストで構成され、一つを変えると他も影響を受けることを可視化します。'
            },
            {
                question: '会議で誰も発言しない場合の最も効果的な対処法はどれですか？',
                options: ['リーダーが全ての意見を代弁する', 'Think-Pair-Shareで2人組から始める', '会議を打ち切る', '指名して答えさせる'],
                correct: 1,
                explanation: 'Think-Pair-Shareでは、まず個人で考え→2人組で共有→全体に発表する流れで、発言のハードルを段階的に下げることができます。'
            }
        ]);
    }
};
