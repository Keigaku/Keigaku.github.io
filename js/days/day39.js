// ===========================
// Day 39: Listening Part 完全攻略
// ===========================
window.Day39 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎧 Listening Section 概要</h2>
                <p>Listening Section（45分・100問）は4つのパートで構成されています。
                950点には<strong>495点満点中470点以上</strong>（ミス5問以内）が目標です。</p>

                <h3>パート構成と攻略優先度</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>Part</th><th>問題形式</th><th>問題数</th><th>難易度</th><th>950点目標</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Part 1</strong></td><td>写真描写問題</td><td>6問</td><td>★★☆</td><td>6/6（全問正解必須）</td></tr>
                        <tr><td><strong>Part 2</strong></td><td>応答問題</td><td>25問</td><td>★★★</td><td>24/25以上</td></tr>
                        <tr><td><strong>Part 3</strong></td><td>会話問題</td><td>39問</td><td>★★★</td><td>37/39以上</td></tr>
                        <tr><td><strong>Part 4</strong></td><td>説明文問題</td><td>30問</td><td>★★★</td><td>28/30以上</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📸 Part 1 & Part 2 攻略</h2>

                <h3>Part 1（写真描写）— 全問正解を狙う</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>ポイント</th><th>内容</th><th>頻出トラップ</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>人物の動作</strong></td><td>何をしているかに集中</td><td>写真に写っていない物の言及</td></tr>
                        <tr><td><strong>位置関係</strong></td><td>物の配置に注目</td><td>似た発音の単語（例：shipping / shopping）</td></tr>
                        <tr><td><strong>受動態 vs 進行形</strong></td><td>状態 vs 動作の区別</td><td>being + 過去分詞（進行受動態）の罠</td></tr>
                        <tr><td><strong>消去法</strong></td><td>明らかに違うものを消す</td><td>部分的に正しい選択肢</td></tr>
                    </tbody>
                </table>

                <h3>Part 2（応答問題）— スコアの鍵</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>質問タイプ</th><th>攻略法</th><th>注意点</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>WH疑問文</strong></td><td>冒頭のWH語を聞き逃さない</td><td>Yes/Noで答える選択肢は不正解</td></tr>
                        <tr><td><strong>Yes/No疑問文</strong></td><td>Yes/No以外の回答もある</td><td>間接的な回答が正解の場合が多い</td></tr>
                        <tr><td><strong>提案・依頼</strong></td><td>典型的な応答パターンを覚える</td><td>「Sure」「I'd be happy to」等</td></tr>
                        <tr><td><strong>選択疑問文</strong></td><td>A or Bの片方を選ぶ or 第三の選択肢</td><td>「Either is fine」も正解になる</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ Part 2 の上級トラップ</div>
                    <p>950点レベルでは<strong>間接応答（Indirect Response）</strong>が頻出します：</p>
                    <p>Q: "When does the meeting start?"</p>
                    <p>A: ❌ "At 3 PM." ← わかりやすいが不正解</p>
                    <p>A: ✅ "Check the updated schedule." ← 間接的だが自然な応答</p>
                    <p><strong>直接答えていなくても、会話として自然かどうか</strong>で判断してください。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>💬 Part 3 & Part 4 攻略</h2>

                <h3>先読み（Pre-reading）テクニック</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>ステップ</th><th>内容</th><th>タイミング</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 設問をスキャン</strong></td><td>3問の設問のキーワードを把握</td><td>Direction放送中に最初の3問を先読み</td></tr>
                        <tr><td><strong>2. 場面を予測</strong></td><td>会話の場面・トピックを推測</td><td>設問中のキーワードから</td></tr>
                        <tr><td><strong>3. 音声に集中</strong></td><td>設問の答えに関連する情報を聴き取る</td><td>音声再生中</td></tr>
                        <tr><td><strong>4. 即座にマーク</strong></td><td>答えが分かった瞬間にマーク</td><td>全音声終了を待たない</td></tr>
                        <tr><td><strong>5. 次の先読みへ</strong></td><td>残りの音声中に次の設問を先読み</td><td>マーク後すぐに</td></tr>
                    </tbody>
                </table>

                <h3>Part 3/4 の頻出パターン</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>パターン</th><th>出題例</th><th>聴き取るポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>場所・シーン</strong></td><td>"Where does the conversation take place?"</td><td>固有名詞、業界用語、場所のヒント</td></tr>
                        <tr><td><strong>話者の意図</strong></td><td>"What does the man imply?"</td><td>言外の意味、トーン</td></tr>
                        <tr><td><strong>次のアクション</strong></td><td>"What will the woman probably do next?"</td><td>会話の最後に注目</td></tr>
                        <tr><td><strong>図表問題</strong></td><td>"Look at the graphic. What is..."</td><td>音声と図表の情報を結びつけ</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🏋️ Listening力強化トレーニング</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>トレーニング</th><th>方法</th><th>効果</th><th>推奨時間</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>シャドーイング</strong></td><td>音声に0.5秒遅れて影のように追い発音</td><td>リスニング力 + 発音改善</td><td>毎日15分</td></tr>
                        <tr><td><strong>ディクテーション</strong></td><td>聞いた英文をそのまま書き取る</td><td>細部の聞き取り精度向上</td><td>週3回10分</td></tr>
                        <tr><td><strong>オーバーラッピング</strong></td><td>スクリプトを見ながら同時に発声</td><td>リズム・イントネーション習得</td><td>毎日10分</td></tr>
                        <tr><td><strong>多聴</strong></td><td>BBC/CNN/Podcast を聴き流す</td><td>英語への耐性、速度慣れ</td><td>通勤時間等</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 950点突破者のListening習慣</div>
                    <p>・<strong>1.2倍速で練習→本番が遅く感じる</strong>：公式問題集の音声を1.2倍速で聞く</p>
                    <p>・<strong>イギリス・オーストラリア英語に慣れる</strong>：TOEICは4カ国のアクセントが出題される</p>
                    <p>・<strong>間違えた問題のスクリプトを音読</strong>：なぜ聞き取れなかったかを分析</p>
                    <p>・<strong>雑音のある環境でも練習</strong>：本番は意外と雑音がある</p>
                </div>
            </div>

            <div id="day39-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day39-quiz', 'day39-quiz', [
            {
                question: 'TOEIC Listening Sectionで最も問題数が多いパートはどれですか？',
                options: ['Part 1（写真描写）', 'Part 2（応答問題）', 'Part 3（会話問題）', 'Part 4（説明文問題）'],
                correct: 2,
                explanation: 'Part 3（会話問題）は39問と最も多く、全体の約40%を占めるため、Part 3の正答率がListeningスコアに大きく影響します。'
            },
            {
                question: 'Part 3/4 の「先読み」テクニックでまず行うべきことはどれですか？',
                options: ['選択肢を全て読む', '設問のキーワードを素早くスキャン', '音声に集中する', 'メモを取る'],
                correct: 1,
                explanation: '先読みではまず3問の設問のキーワードをスキャンし、「何を聴き取るべきか」を把握することが最優先です。'
            },
            {
                question: 'シャドーイングの正しい方法はどれですか？',
                options: ['音声と同時に発音する', '音声に0.5秒遅れて影のように追い発音する', '音声を止めてから繰り返す', 'スクリプトを見ながら読む'],
                correct: 1,
                explanation: 'シャドーイングは音声に0.5秒ほど遅れて、影（shadow）のように追いかけて発音するトレーニングです。'
            },
            {
                question: 'Part 2で上級者が間違えやすいトラップは何ですか？',
                options: ['単語が難しい', '間接応答（Indirect Response）', '音声が速い', '選択肢が多い'],
                correct: 1,
                explanation: '上級レベルでは直接答えずに間接的に応答する選択肢が正解になるパターンが頻出し、これが最も大きなトラップです。'
            },
            {
                question: '950点を目指すListening練習で効果的な速度設定はどれですか？',
                options: ['0.8倍速でゆっくり聴く', '通常速度で聴く', '1.2倍速で練習する', '2倍速で聴く'],
                correct: 2,
                explanation: '1.2倍速で練習すると、本番の速度が遅く感じられるようになります。ただし、2倍速は内容理解が追いつかなくなるため逆効果です。'
            }
        ]);
    }
};
