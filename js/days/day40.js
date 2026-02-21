// ===========================
// Day 40: Reading Part 完全攻略
// ===========================
window.Day40 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📖 Reading Section 概要</h2>
                <p>Reading Section（75分・100問）は3つのパートで構成されています。
                Listeningと違い<strong>時間配分が自由</strong>なため、戦略的な時間管理が950点の鍵です。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>Part</th><th>問題形式</th><th>問題数</th><th>推奨時間</th><th>950点目標</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Part 5</strong></td><td>短文穴埋め</td><td>30問</td><td>10分（1問20秒）</td><td>29/30以上</td></tr>
                        <tr><td><strong>Part 6</strong></td><td>長文穴埋め</td><td>16問</td><td>8分（1問30秒）</td><td>15/16以上</td></tr>
                        <tr><td><strong>Part 7</strong></td><td>読解問題</td><td>54問</td><td>57分（1問約1分）</td><td>51/54以上</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 Reading 950点の壁 = Part 7の時間切れ</div>
                    <p>多くの受験者がPart 7の後半で時間切れを起こします。Part 5/6を<strong>18分以内</strong>に終わらせ、
                    Part 7に<strong>57分</strong>確保することが絶対条件です。Part 5は「考える時間」ではなく「反射的に解く」パートです。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>⚡ Part 5 攻略 — 1問20秒の反射力</h2>

                <h3>問題タイプ別攻略法</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>タイプ</th><th>割合</th><th>見分け方</th><th>解法</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>品詞問題</strong></td><td>約30%</td><td>選択肢が同じ語根の派生語</td><td>空欄の前後で品詞を即判断</td></tr>
                        <tr><td><strong>語彙問題</strong></td><td>約30%</td><td>選択肢が全て異なる単語</td><td>コロケーション・文意で判断</td></tr>
                        <tr><td><strong>文法問題</strong></td><td>約25%</td><td>動詞の形、接続詞、関係詞等</td><td>文構造を分析して判断</td></tr>
                        <tr><td><strong>前置詞・接続詞</strong></td><td>約15%</td><td>前置詞/接続詞/副詞の使い分け</td><td>意味と文構造の両面で判断</td></tr>
                    </tbody>
                </table>

                <h3>頻出文法パターン TOP 10</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>#</th><th>文法項目</th><th>出題例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td><strong>分詞構文</strong></td><td>_____ the report, she left the office. (Having completed)</td></tr>
                        <tr><td>2</td><td><strong>関係代名詞</strong></td><td>The proposal _____ was submitted... (which/that)</td></tr>
                        <tr><td>3</td><td><strong>仮定法</strong></td><td>If the budget _____ approved... (were/had been)</td></tr>
                        <tr><td>4</td><td><strong>比較級・最上級</strong></td><td>The _____ efficient solution (most/more)</td></tr>
                        <tr><td>5</td><td><strong>接続詞 vs 前置詞</strong></td><td>_____ the delay, we met the deadline. (Despite/Although)</td></tr>
                        <tr><td>6</td><td><strong>時制の一致</strong></td><td>He said the meeting _____ rescheduled. (had been)</td></tr>
                        <tr><td>7</td><td><strong>不定詞 vs 動名詞</strong></td><td>consider _____ (implementing) / decide _____ (to implement)</td></tr>
                        <tr><td>8</td><td><strong>受動態</strong></td><td>The policy _____ recently updated. (has been)</td></tr>
                        <tr><td>9</td><td><strong>代名詞の照応</strong></td><td>Each employee should submit _____ report. (his or her)</td></tr>
                        <tr><td>10</td><td><strong>複合名詞・形容詞</strong></td><td>a well-_____ presentation (organized/preparing)</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📄 Part 6 & Part 7 攻略</h2>

                <h3>Part 6（長文穴埋め）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>問題タイプ</th><th>攻略法</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>単独文タイプ</strong></td><td>Part 5と同じく空欄前後で判断（素早く解ける）</td></tr>
                        <tr><td><strong>文脈依存タイプ</strong></td><td>文全体の流れを理解してから判断（文挿入問題含む）</td></tr>
                        <tr><td><strong>文挿入問題</strong></td><td>前後の文との論理的つながりで判断。接続表現に注目</td></tr>
                    </tbody>
                </table>

                <h3>Part 7（読解問題）— 勝負の54問</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>文書タイプ</th><th>問題数</th><th>攻略ポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>シングルパッセージ</strong></td><td>29問（10セット）</td><td>メール・広告・記事 — 冒頭と末尾に要旨</td></tr>
                        <tr><td><strong>ダブルパッセージ</strong></td><td>10問（2セット）</td><td>2文書間の情報を照合する問題に注意</td></tr>
                        <tr><td><strong>トリプルパッセージ</strong></td><td>15問（3セット）</td><td>3文書の関連性を把握。最も時間がかかる</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 Part 7 スピードアップ戦略</div>
                    <p>・<strong>設問を先に読む</strong>：何を探すべきかを把握してから文書を読む</p>
                    <p>・<strong>スキミング</strong>：文書全体の構造を30秒で把握</p>
                    <p>・<strong>スキャニング</strong>：特定のキーワードや数字を探す</p>
                    <p>・<strong>NOT問題は後回し</strong>：「Which is NOT mentioned?」は時間がかかるので最後に</p>
                    <p>・<strong>パラフレーズに注意</strong>：本文と選択肢で異なる表現が使われる</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📐 Reading 時間配分マスター</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>セクション</th><th>問題数</th><th>目標時間</th><th>チェックポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Part 5</strong></td><td>30問</td><td>10分</td><td>開始10分後にPart 6へ</td></tr>
                        <tr><td><strong>Part 6</strong></td><td>16問</td><td>8分</td><td>開始18分後にPart 7へ</td></tr>
                        <tr><td><strong>Part 7 SP</strong></td><td>29問</td><td>27分</td><td>開始45分後にDP/TPへ</td></tr>
                        <tr><td><strong>Part 7 DP/TP</strong></td><td>25問</td><td>30分</td><td>残り5分で見直し</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 950点レベルの鉄則</div>
                    <p>・<strong>迷ったら飛ばす</strong>：30秒考えて分からない問題は印をつけて次へ</p>
                    <p>・<strong>全問解くことが大前提</strong>：塗り残しは絶対にしない</p>
                    <p>・<strong>Part 5で貯金を作る</strong>：8分で解ければPart 7に2分の余裕ができる</p>
                </div>
            </div>

            <div id="day40-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day40-quiz', 'day40-quiz', [
            {
                question: 'Reading Sectionの理想的な時間配分で、Part 5にかけるべき時間は？',
                options: ['5分', '10分', '15分', '20分'],
                correct: 1,
                explanation: 'Part 5は30問を10分（1問20秒）で解くのが理想です。ここで時間を節約し、Part 7に余裕を持たせます。'
            },
            {
                question: 'Part 5の「品詞問題」の見分け方はどれですか？',
                options: ['選択肢が全て異なる単語', '選択肢が同じ語根の派生語', '選択肢が全て動詞', '選択肢が全て前置詞'],
                correct: 1,
                explanation: '品詞問題は選択肢が同じ語根（例：organize, organization, organizational, organizationally）の派生語で構成されています。'
            },
            {
                question: 'Part 7で最も時間がかかる文書タイプはどれですか？',
                options: ['シングルパッセージ', 'ダブルパッセージ', 'トリプルパッセージ', '全て同じ'],
                correct: 2,
                explanation: 'トリプルパッセージは3つの文書の関連性を把握し、複数の文書にまたがる情報を照合する必要があるため、最も時間がかかります。'
            },
            {
                question: 'Part 7のスピードアップで最も有効な戦略は？',
                options: ['文書を最初から最後まで丁寧に読む', '設問を先に読んで何を探すか把握してから文書を読む', '選択肢だけ読む', '全文を日本語に訳す'],
                correct: 1,
                explanation: '設問を先に読むことで「何を探すべきか」が明確になり、効率的にスキャニングできます。'
            },
            {
                question: '950点を目指す場合、Part 5で30秒考えても分からない問題への対処はどれですか？',
                options: ['納得できるまで考える', '印をつけて次に進む', '適当にマークして忘れる', 'Part 6に移ってから戻る'],
                correct: 1,
                explanation: '30秒考えて分からなければ印をつけて次へ。ただし「適当にマーク」ではなく、戻れるようにしておくのがポイントです。'
            }
        ]);
    }
};
