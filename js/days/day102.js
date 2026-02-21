// ===========================
// Day 102: 10:00-11:00 チームミーティング・進捗共有
// ===========================
window.Day102 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🗣️ 10:00 — デイリースタンドアップ</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>午前中のチームミーティングは、プロジェクトの方向性を合わせる最重要イベントです。
                    「出来る社員」は<strong>報連相フレームワーク</strong>と<strong>PREP法</strong>を使い、
                    限られた時間で最大の情報共有を実現します。</p>
                </div>
                <h3>📋 10:00-10:15 — デイリースクラム</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：デイリースクラム（3つの質問）</div>
                    <p>毎日15分以内で、チーム全員が以下の<strong>3つの質問</strong>に答えます。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>質問</th><th>意図</th><th>発言例（金融PJ）</th></tr></thead>
                    <tbody>
                        <tr><td><strong>① 昨日何をしたか</strong></td><td>進捗の可視化</td><td>「リスク計算エンジンのバッチ処理ロジックを実装し、単体テスト8件通しました」</td></tr>
                        <tr><td><strong>② 今日何をするか</strong></td><td>コミットメントの明確化</td><td>「今日は結合テスト環境でのデータ投入を完了させます」</td></tr>
                        <tr><td><strong>③ 障害・ブロッカーはあるか</strong></td><td>早期の問題検知</td><td>「テストデータの仕様確認でクライアント回答待ちです。14時のMTGで確認予定です」</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 出来る社員のデイリースクラム</div>
                    <p>・<strong>具体的な数字</strong>を入れる（「進んでいます」ではなく「8/12件完了」）</p>
                    <p>・ブロッカーには必ず<strong>解決のアクション</strong>をセットで伝える</p>
                    <p>・15分厳守 — 詳細は別途相談の場を設ける</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📢 10:15-10:40 — 進捗報告（報連相 + PREP法）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク①：報連相</div>
                    <p><strong>報告・連絡・相談</strong>を適切に使い分けるビジネスコミュニケーションの基本。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>種類</th><th>定義</th><th>タイミング</th><th>例文</th></tr></thead>
                    <tbody>
                        <tr><td><strong>報告</strong></td><td>指示された業務の結果を伝える</td><td>完了時・中間・問題発生時</td><td>「ご指示いただいたテストケースの作成が完了しました。全52件です」</td></tr>
                        <tr><td><strong>連絡</strong></td><td>事実情報を関係者に共有</td><td>情報が発生した時点で速やかに</td><td>「明日の結合テスト環境、15:00-17:00でメンテナンスが入ります」</td></tr>
                        <tr><td><strong>相談</strong></td><td>判断に迷う時にアドバイスを求める</td><td>自分で調べた上で早めに</td><td>「AとBの2案あるのですが、パフォーマンス面でA案が良いと考えています。ご意見いただけますか」</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク②：PREP法</div>
                    <p><strong>Point（結論）→ Reason（理由）→ Example（具体例）→ Point（結論の再提示）</strong></p>
                    <p>報告・プレゼンで最も汎用性の高いフレームワークです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>内容</th><th>発言例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Point（結論）</strong></td><td>最初に結論を述べる</td><td>「今週のスプリントは予定通り完了見込みです」</td></tr>
                        <tr><td><strong>Reason（理由）</strong></td><td>結論の根拠を示す</td><td>「主要タスク12件中10件が完了し、残り2件も本日中に着手可能なためです」</td></tr>
                        <tr><td><strong>Example（具体例）</strong></td><td>理由を裏付ける事例</td><td>「特にリスク計算ロジックは昨日の結合テストで全件通過しています」</td></tr>
                        <tr><td><strong>Point（結論の再提示）</strong></td><td>結論を再確認</td><td>「よって、金曜日のスプリントレビューは問題なく実施できます」</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🤝 10:40-11:00 — 課題ディスカッション</h2>
                <h3>ファシリテーションの基本テクニック</h3>
                <table class="styled-table">
                    <thead><tr><th>テクニック</th><th>目的</th><th>使いどころ</th></tr></thead>
                    <tbody>
                        <tr><td><strong>タイムキーピング</strong></td><td>会議の時間厳守</td><td>「残り5分です。結論をまとめましょう」</td></tr>
                        <tr><td><strong>パーキングロット</strong></td><td>本題から逸れた議題を退避</td><td>「重要な論点ですが、後日別途議論しましょう」</td></tr>
                        <tr><td><strong>アクションアイテム明確化</strong></td><td>Who/What/Whenを確定</td><td>「田中さんが金曜までにテストデータを用意する、でよろしいですか？」</td></tr>
                        <tr><td><strong>オウム返し確認</strong></td><td>認識齟齬の防止</td><td>「つまり、A案で進めて来週月曜にレビュー、ということですね？」</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 出来る社員の会議術</div>
                    <p>・会議前に<strong>アジェンダ</strong>と<strong>ゴール</strong>を明確にする</p>
                    <p>・議事録は会議中にリアルタイムで取り、<strong>終了後5分以内</strong>に共有</p>
                    <p>・アクションアイテムは必ず<strong>担当者・期限付き</strong>で記録する</p>
                    <p>・「何を決めるか」を最初に共有し、ゴールのない会議にしない</p>
                </div>
            </div>
            <div id="day102-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day102-quiz', 'day102-quiz', [
            { question: 'デイリースクラムで答える3つの質問に含まれないものはどれですか？', options: ['昨日何をしたか', '今日何をするか', '来週の予定は何か', '障害・ブロッカーはあるか'], correct: 2, explanation: 'デイリースクラムでは「昨日やったこと」「今日やること」「障害はあるか」の3つを共有します。来週の予定は対象外です。' },
            { question: 'PREP法の正しい順序はどれですか？', options: ['Point→Reason→Example→Point', 'Problem→Result→Example→Plan', 'Plan→Review→Execute→Present', 'Point→Review→Evaluate→Present'], correct: 0, explanation: 'PREP法は Point（結論）→ Reason（理由）→ Example（具体例）→ Point（結論の再提示）の順序です。' },
            { question: '「相談」を行う際に最も重要なことは何ですか？', options: ['上司の機嫌が良い時を待つ', '自分で調べた上で、自分の考えを持って相談する', '同僚に先に相談してから上司に行く', 'メールで相談する'], correct: 1, explanation: '自分なりに調べ、A案B案などの選択肢と自分の意見を持った上で相談することで、建設的な議論ができます。' },
            { question: 'パーキングロットとは何のテクニックですか？', options: ['休憩時間の管理', '本題から逸れた議題を後日に退避させる', '駐車場の予約', '参加者を退出させる'], correct: 1, explanation: 'パーキングロットは会議中に出た重要だが本題でない議題を記録し、後日別途議論するファシリテーション技法です。' },
            { question: '出来る社員の議事録共有タイミングとして最も適切なものはどれですか？', options: ['翌日の朝', '会議終了後5分以内', '週末にまとめて', '上司に確認してから'], correct: 1, explanation: '会議中にリアルタイムで記録し、終了後すぐに共有することで、記憶が鮮明なうちに認識齟齬を防げます。' }
        ]);
    }
};
