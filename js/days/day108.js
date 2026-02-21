// ===========================
// Day 108: 17:00-18:00 振り返り・翌日計画
// ===========================
window.Day108 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔄 17:00 — 1日の振り返りと翌日準備</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>終業前の1時間は、今日の振り返りと翌日の計画立てに使います。
                    「出来る社員」は<strong>KPT</strong>で学びを蓄積し、
                    <strong>PDCA</strong>で継続的に改善し、
                    <strong>タイムボックス</strong>で翌日の時間設計を行います。</p>
                </div>
                <h3>📋 17:00-17:20 — 振り返り（KPT）</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：KPT</div>
                    <p><strong>Keep（続けること）・Problem（問題点）・Try（試すこと）</strong></p>
                    <p>チームやプロジェクトの振り返りで最も使われるフレームワークです。毎日の個人振り返りにも活用できます。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>カテゴリ</th><th>意図</th><th>今日の振り返り例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Keep<br>（良かったので続ける）</strong></td><td>成功体験の再現性を確保</td><td>「朝のメール処理をOODAで回したら15分で終わった → 明日も継続」</td></tr>
                        <tr><td><strong>Problem<br>（問題だったこと）</strong></td><td>課題の認識と共有</td><td>「14時のクライアントMTGで質問に即答できなかった → 事前準備不足」</td></tr>
                        <tr><td><strong>Try<br>（次に試すこと）</strong></td><td>具体的な改善アクション</td><td>「MTG前に想定Q&Aを3つ準備する → 明日の15時MTGで実践」</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 KPTを習慣化するコツ</div>
                    <p>・毎日<strong>各カテゴリ1つずつ</strong>書くだけでOK（負荷を下げる）</p>
                    <p>・<strong>手帳やNotionに記録</strong>し、1週間分を振り返る時間を金曜に設ける</p>
                    <p>・Tryは必ず<strong>具体的で実行可能なアクション</strong>にする</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🔄 17:20-17:40 — 継続改善（PDCA）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：PDCAサイクル</div>
                    <p><strong>Plan（計画）→ Do（実行）→ Check（評価）→ Act（改善）</strong></p>
                    <p>日本のビジネスの基本フレームワーク。KPTのTryをPDCAに乗せることで改善を回します。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>内容</th><th>日次での運用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Plan（計画）</strong></td><td>目標と実行計画を立てる</td><td>朝のタスク整理で「今日の目標：設計書レビュー完了」</td></tr>
                        <tr><td><strong>Do（実行）</strong></td><td>計画に基づき実行</td><td>10:00-12:00で集中してレビューを実施</td></tr>
                        <tr><td><strong>Check（評価）</strong></td><td>計画と実績のギャップを確認</td><td>「レビューは完了したが、指摘事項の整理が未了」</td></tr>
                        <tr><td><strong>Act（改善）</strong></td><td>ギャップの原因を分析し改善</td><td>「レビューと指摘整理を1セットとして工数見積もりする」</td></tr>
                    </tbody>
                </table>
                <h4>PDCA vs OODA の使い分け</h4>
                <table class="styled-table">
                    <thead><tr><th>比較項目</th><th>PDCA</th><th>OODA</th></tr></thead>
                    <tbody>
                        <tr><td><strong>適用場面</strong></td><td>計画的・反復的な改善</td><td>不確実・変化が速い状況</td></tr>
                        <tr><td><strong>速度</strong></td><td>じっくり（週〜月単位）</td><td>素早く（分〜時間単位）</td></tr>
                        <tr><td><strong>金融PJでの使い分け</strong></td><td>プロジェクト改善、品質向上</td><td>障害対応、メール処理、即断即決の場面</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⏰ 17:40-18:00 — 翌日の時間設計（タイムボックス）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：タイムボックス</div>
                    <p>タスクに<strong>明確な時間制限</strong>を設定し、その範囲内で最善の成果を出す時間管理手法です。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>ルール</th><th>内容</th><th>実践例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>時間の固定</strong></td><td>タスクに使う時間を事前に決める</td><td>「設計書作成は2時間まで」と決めてタイマーセット</td></tr>
                        <tr><td><strong>スコープの調整</strong></td><td>時間内に終わらない場合はスコープを縮小</td><td>「全8章のうち、優先度の高い3章を仕上げる」</td></tr>
                        <tr><td><strong>バッファの確保</strong></td><td>予定の80%だけ埋め、20%はバッファ</td><td>8時間のうち6.5時間を計画、1.5時間は突発対応用</td></tr>
                    </tbody>
                </table>
                <h4>翌日のスケジュール設計テンプレート</h4>
                <table class="styled-table">
                    <thead><tr><th>時間帯</th><th>タスク</th><th>タイムボックス</th><th>優先度</th></tr></thead>
                    <tbody>
                        <tr><td>09:00-09:30</td><td>メール・情報収集</td><td>30分厳守</td><td>ルーティン</td></tr>
                        <tr><td>09:30-12:00</td><td>集中作業（設計/開発）</td><td>2.5時間</td><td>最重要</td></tr>
                        <tr><td>13:00-15:00</td><td>MTG・レビュー</td><td>2時間</td><td>重要</td></tr>
                        <tr><td>15:00-16:30</td><td>集中作業②</td><td>1.5時間</td><td>重要</td></tr>
                        <tr><td>16:30-17:00</td><td>ドキュメント・共有</td><td>30分</td><td>通常</td></tr>
                        <tr><td>17:00-17:30</td><td>振り返り・翌日計画</td><td>30分</td><td>ルーティン</td></tr>
                        <tr><td>17:30-18:00</td><td>バッファ（突発対応枠）</td><td>30分</td><td>予備</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 出来る社員の終業ルーティン</div>
                    <p>・<strong>今日のKPT</strong>を1分で記録する</p>
                    <p>・<strong>明日のTop3タスク</strong>を決めて手帳に書く</p>
                    <p>・<strong>未読メール・未対応チャット</strong>がないか最終確認</p>
                    <p>・<strong>デスクの整理</strong>（物理的・デジタル的に翌日に備える）</p>
                    <p>・チームに<strong>「お疲れ様です」</strong>と声をかけて退社</p>
                </div>
            </div>
            <div id="day108-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day108-quiz', 'day108-quiz', [
            { question: 'KPTの「T」は何を意味しますか？', options: ['Time（時間）', 'Task（タスク）', 'Try（次に試すこと）', 'Team（チーム）'], correct: 2, explanation: 'KPTのTは Try（次に試すこと）で、Problemから導き出された具体的な改善アクションを設定します。' },
            { question: 'PDCAサイクルの「C」のステップで行うことは何ですか？', options: ['計画を立てる', '実行する', '計画と実績のギャップを評価する', '改善策を実行する'], correct: 2, explanation: 'Check（評価）では、Plan通りにできたか、期待した結果が得られたかを確認・分析します。' },
            { question: 'タイムボックスで時間内に終わらない場合の対応はどれですか？', options: ['残業して終わらせる', 'スコープを調整して優先度の高い部分を仕上げる', 'タイムボックスを無制限に延長する', '諦めて翌日にする'], correct: 1, explanation: 'タイムボックスでは時間を固定しスコープを調整します。優先度の高い部分を時間内に仕上げることが重要です。' },
            { question: 'PDCAとOODAの最も大きな違いはどれですか？', options: ['使う場所が違う', '速度と適用場面が異なる（計画的改善 vs 即応）', '人数の違い', 'コストの違い'], correct: 1, explanation: 'PDCAはじっくりとした計画的改善、OODAは変化が速い状況での即応に適しています。' },
            { question: '1日のスケジュールで「バッファ」を設ける理由はどれですか？', options: ['暇な時間を作るため', '突発的な対応や見積もり誤差に備えるため', '早く帰るため', '他のチームに合わせるため'], correct: 1, explanation: '予定の80%だけ埋めて20%をバッファにすることで、突発的なタスクにも柔軟に対応できます。' }
        ]);
    }
};
