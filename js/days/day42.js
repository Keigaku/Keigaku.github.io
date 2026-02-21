// ===========================
// Day 42: 本番戦略と最終仕上げ
// ===========================
window.Day42 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🚀 試験本番の全体戦略</h2>
                <p>950点は実力だけでなく<strong>本番当日のコンディションと戦略</strong>が合否を分けます。
                「実力を100%発揮する」ためのテクニックを学びましょう。</p>
                <h3>タイムライン</h3>
                <table class="styled-table">
                    <thead><tr><th>時間</th><th>セクション</th><th>問題数</th><th>戦略</th></tr></thead>
                    <tbody>
                        <tr><td><strong>13:00-13:45</strong></td><td>Listening</td><td>100問</td><td>先読みリズムを崩さない</td></tr>
                        <tr><td><strong>13:46-14:04</strong></td><td>Reading Part 5/6</td><td>46問</td><td>18分以内に完了</td></tr>
                        <tr><td><strong>14:04-14:55</strong></td><td>Reading Part 7 SP</td><td>29問</td><td>27分で解く</td></tr>
                        <tr><td><strong>14:55-15:01</strong></td><td>Reading Part 7 DP/TP</td><td>25問</td><td>残り時間を全投入</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 当日の絶対ルール</div>
                    <p>・<strong>全問マークする</strong>：空欄は絶対作らない（4択なので25%の確率）</p>
                    <p>・<strong>迷ったら先に進む</strong>：1問にこだわると連鎖的にミスが増える</p>
                    <p>・<strong>マークシートは5問ごとにまとめ塗り</strong>：Reading限定テクニック</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🧠 メンタル管理</h2>
                <table class="styled-table">
                    <thead><tr><th>場面</th><th>起きる問題</th><th>対処法</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Listening中</strong></td><td>聞き逃してパニック</td><td>1問捨てて次の先読みに集中</td></tr>
                        <tr><td><strong>Part 5</strong></td><td>難問に時間を使う</td><td>20秒ルール：超えたらマークして次へ</td></tr>
                        <tr><td><strong>Part 7前半</strong></td><td>ペースが遅い</td><td>NOT問題を後回し、易しい問題から</td></tr>
                        <tr><td><strong>Part 7後半</strong></td><td>残り時間が少ない</td><td>設問だけ読んでスキャニングで回答</td></tr>
                        <tr><td><strong>全体</strong></td><td>集中力が切れる</td><td>セクション切替時に深呼吸3回</td></tr>
                    </tbody>
                </table>
                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 950点受験者の最大の敵</div>
                    <p><strong>「完璧主義」</strong>が最大の敵です。</p>
                    <p>・1問を完璧に解こうとして時間配分が崩れる</p>
                    <p>・分からない問題に執着して後続に影響を与える</p>
                    <p>・<strong>10問は間違えてもいい</strong>と割り切ることが精神的安定につながる</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📅 直前1週間の過ごし方</h2>
                <table class="styled-table">
                    <thead><tr><th>日数</th><th>内容</th><th>ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>7日前</strong></td><td>模試1回通し</td><td>時間配分の最終確認</td></tr>
                        <tr><td><strong>6-5日前</strong></td><td>模試の復習</td><td>間違えた問題を全て理解</td></tr>
                        <tr><td><strong>4-3日前</strong></td><td>弱点パートの集中演習</td><td>苦手な問題タイプのみ</td></tr>
                        <tr><td><strong>2日前</strong></td><td>軽めの復習（金のフレーズ等）</td><td>新しい教材に手を出さない</td></tr>
                        <tr><td><strong>前日</strong></td><td>早めに就寝</td><td>持ち物チェック（受験票、鉛筆、消しゴム、時計）</td></tr>
                        <tr><td><strong>当日朝</strong></td><td>英語のPodcastを聴く</td><td>耳を英語モードに切り替え</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>🏆 スコアアップ最終チェックリスト</h2>
                <table class="styled-table">
                    <thead><tr><th>チェック項目</th><th>目標</th><th>状態</th></tr></thead>
                    <tbody>
                        <tr><td>Part 1 正答率</td><td>100%</td><td>□</td></tr>
                        <tr><td>Part 2 正答率</td><td>96%以上</td><td>□</td></tr>
                        <tr><td>Part 3 正答率</td><td>95%以上</td><td>□</td></tr>
                        <tr><td>Part 4 正答率</td><td>93%以上</td><td>□</td></tr>
                        <tr><td>Part 5 正答率</td><td>97%以上</td><td>□</td></tr>
                        <tr><td>Part 5 所要時間</td><td>10分以内</td><td>□</td></tr>
                        <tr><td>Part 6 正答率</td><td>94%以上</td><td>□</td></tr>
                        <tr><td>Part 7 正答率</td><td>94%以上</td><td>□</td></tr>
                        <tr><td>Part 7 全問回答</td><td>塗り残しゼロ</td><td>□</td></tr>
                        <tr><td>模試スコア</td><td>安定して950+</td><td>□</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 950点取得後の世界</div>
                    <p>・<strong>社内評価</strong>：英語力の証明、海外案件へのアサイン</p>
                    <p>・<strong>キャリア</strong>：外資系企業、グローバルポジションへの道</p>
                    <p>・<strong>次のステップ</strong>：TOEIC S&W、英検1級、IELTS 7.5+</p>
                    <p>TOEICは「ゴール」ではなく「スタート」。真の英語力は実務で磨かれます！</p>
                </div>
            </div>
            <div id="day42-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day42-quiz', 'day42-quiz', [
            { question: 'Part 5/6に割くべき理想的な時間は？', options: ['10分', '18分', '25分', '30分'], correct: 1, explanation: 'Part 5を10分、Part 6を8分の合計18分以内に完了し、Part 7に57分確保するのが理想です。' },
            { question: '本番で分からない問題への対処として正しいのは？', options: ['時間をかけて必ず正解する', '20秒考えて分からなければマークして次へ', '空欄にしておく', '前の問題に戻る'], correct: 1, explanation: '迷った問題に時間をかけすぎると時間配分が崩れます。マークして次に進むのが鉄則です。' },
            { question: '試験前日にやるべきことは？', options: ['新しい問題集を始める', '徹夜で頻出単語を覚える', '早めに就寝し持ち物を確認する', '模試を2回解く'], correct: 2, explanation: '前日は新教材に手を出さず、早めに就寝して当日のコンディションを整えるのが最善です。' },
            { question: '950点受験者の最大の敵は？', options: ['実力不足', '完璧主義', '体調不良', '問題の難しさ'], correct: 1, explanation: '950点レベルでは実力は十分。1問への執着で時間配分が崩れる「完璧主義」が最大の敵です。' },
            { question: '当日朝にやるべき英語準備は？', options: ['Part 5を50問解く', '英語のPodcastを聴いて耳を英語モードにする', '単語帳を全部復習する', '何もせずリラックスする'], correct: 1, explanation: '当日朝は英語のPodcastを聴いて耳を「英語モード」に切り替えましょう。' }
        ]);
    }
};
