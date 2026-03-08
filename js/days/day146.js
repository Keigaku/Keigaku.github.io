// ===========================
// Day 146: Be-DFS ブッキングフローとデータモデル
// ===========================
window.Day146 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📝 ブッキングフロー（約定登録の流れ）</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「取引をシステムに正しく刻む」— Be-DFSの最重要機能</div>
                    <p>トレーダーが電話やチャットで取引相手と合意した条件を、正確にBe-DFSに登録するプロセスがブッキングです。<br>
                    <strong>入力ミスは即座に損失に直結</strong>するため、入力補助・バリデーション・承認ワークフローが重要です。</p>
                </div>
                
                <h3>ブッキングフローの全体像</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.6rem; margin-bottom: 1.5rem;">
                    <div style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>1. 入力</strong><br>
                        <small>トレーダーが画面入力<br>or 電子PFから自動取込</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>2. バリデーション</strong><br>
                        <small>必須項目チェック<br>与信枠チェック<br>商品ルールチェック</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>3. プライシング</strong><br>
                        <small>グリッドで時価計算<br>Day-1 P&L算出</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>4. 承認</strong><br>
                        <small>4-eyes原則<br>上長承認（閾値超過時）</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>5. 確定・配信</strong><br>
                        <small>ステータス確定<br>バック・リスクへ配信</small>
                    </div>
                </div>

                <h3>トレードステータス管理</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>ステータス</th><th>意味</th><th>次のアクション</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Draft</strong></td><td>入力中（まだ保存のみ）</td><td>Submit → Pending</td></tr>
                        <tr><td><strong>Pending</strong></td><td>承認待ち</td><td>Approve → Active / Reject → Draft</td></tr>
                        <tr><td><strong>Active</strong></td><td>有効な取引（ライブ）</td><td>Amend / Terminate / Mature</td></tr>
                        <tr><td><strong>Amended</strong></td><td>条件変更済み（旧バージョン）</td><td>最新版がActive</td></tr>
                        <tr><td><strong>Cancelled</strong></td><td>取消済み</td><td>—</td></tr>
                        <tr><td><strong>Matured</strong></td><td>満期到来</td><td>—</td></tr>
                        <tr><td><strong>Terminated</strong></td><td>早期解約済み</td><td>—</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🗄️ データモデル設計</h2>
                <p>Be-DFSのデータモデルは、<strong>多様なOTC商品をひとつの統一された構造で管理</strong>できる柔軟性が求められます。</p>

                <h3>中核エンティティ</h3>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; margin-bottom: 1rem;">
                    <div>📁 <strong>Trade（取引）</strong></div>
                    <div style="padding-left:1.5rem;">├─ TradeID, Version, Status, TradeDate, Trader, Book</div>
                    <div style="padding-left:1.5rem;">├─ ProductType (IRS / CCS / TRS / PSWAP / Option ...)</div>
                    <div style="padding-left:1.5rem;">├─ Counterparty, ISDAMasterAgreementRef</div>
                    <div style="padding-left:1.5rem;">├─ 📂 <strong>Leg[]（レグ配列）</strong></div>
                    <div style="padding-left:3rem;">├─ LegType (Fixed / Float / Equity / Credit)</div>
                    <div style="padding-left:3rem;">├─ Direction (Pay / Receive)</div>
                    <div style="padding-left:3rem;">├─ Currency, Notional, DayCount</div>
                    <div style="padding-left:3rem;">├─ 📄 <strong>Schedule[]（スケジュール配列）</strong></div>
                    <div style="padding-left:4.5rem;">├─ StartDate, EndDate, PaymentDate, Rate/Fixing</div>
                    <div style="padding-left:1.5rem;">└─ 📂 <strong>Event[]（イベント配列）</strong></div>
                    <div style="padding-left:3rem;">└─ Amend / Novation / PartialTermination 等の履歴</div>
                </div>

                <h3>外部インターフェース（IF）設計</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>連携先</th><th>方式</th><th>主なデータ</th><th>頻度</th></tr></thead>
                    <tbody>
                        <tr><td><strong>電子取引PF → Be-DFS</strong></td><td>FIX / API</td><td>約定データ（自動取込）</td><td>リアルタイム</td></tr>
                        <tr><td><strong>Be-DFS → バックオフィス</strong></td><td>MQ / ファイル</td><td>取引データ（STP）</td><td>リアルタイム / 日次</td></tr>
                        <tr><td><strong>Be-DFS → リスクエンジン</strong></td><td>API / MQ</td><td>ポジション、Greeks</td><td>日中 / EOD</td></tr>
                        <tr><td><strong>マーケットデータ → Be-DFS</strong></td><td>API / Feed</td><td>金利、株価、為替レート</td><td>リアルタイム</td></tr>
                        <tr><td><strong>Be-DFS → 規制報告</strong></td><td>ファイル / API</td><td>EMIR/MiFID IIレポート</td><td>日次 / T+1</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🚨 開発者の重要判断：バージョニング</div>
                    <p>取引がAmend（修正）されるたびに<strong>新しいバージョン</strong>を作成し、過去のバージョンを保持するか、それとも上書きするか？<br>
                    監査証跡（Audit Trail）の観点から<strong>全バージョンを保持する設計</strong>が望ましいですが、データ量とパフォーマンスとのトレードオフがあります。</p>
                </div>
            </div>

            <div id="day146-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day146-quiz', 'day146-quiz', [
            { question: 'ブッキングフローにおいて「4-eyes原則」とは何を意味しますか？', options: ['4人のトレーダーが同時に取引に参加すること', '取引の入力者と承認者を分離し、2人以上の目でチェックすること', '4つのシステムで同時にチェックすること', '4日間のクーリングオフ期間を設けること'], correct: 1, explanation: '4-eyes原則とは、取引を入力した人（1組の目）と、それを承認する人（もう1組の目）を分離し、最低2名（4つの目）のチェックを経てから取引を確定させるコンプライアンス上の原則です。不正や入力ミスの防止に不可欠です。' },
            { question: 'Be-DFSのデータモデルにおいて、「レグ（Leg）」を配列として持つ設計の利点はどれですか？', options: ['データベースのサイズを小さくできる', 'IRS（2レグ）もCCS（2レグ・2通貨）もTRS（2レグ）も同じ構造で表現できる柔軟性', 'プログラミングが不要になる', 'バックアップが簡素化される'], correct: 1, explanation: 'レグを配列として持つことで、IRS（固定レグ＋変動レグ）、CCS（2通貨のレグ）、TRS（リターンレグ＋ファンディングレグ）など、異なる商品タイプでも同じデータ構造で柔軟に表現できます。複雑なストラクチャード商品（3レグ以上）にも対応可能です。' },
            { question: 'STP（Straight Through Processing）とは何を意味しますか？', options: ['手動で全ての処理を行うこと', 'フロントでのブッキングからバックオフィスの決済まで、人手を介さず自動で一気通貫処理すること', 'システムを停止して処理を行うこと', '特定の時間にのみ処理を行うこと'], correct: 1, explanation: 'STP（Straight Through Processing）とは、フロントオフィスでの取引入力（ブッキング）から、ミドルオフィスのリスク計算、バックオフィスの決済・会計処理まで、人手の介在なく自動で一気通貫処理することです。処理速度の向上とオペレーショナルリスクの低減が目的です。' },
            { question: '取引のAmend（修正）時に全バージョンを保持する設計が望ましい理由はどれですか？', options: ['ストレージを効率的に使うため', '監査証跡（Audit Trail）を残し、過去の状態を追跡可能にするため', '古いデータが不要なため', '処理速度を上げるため'], correct: 1, explanation: '金融システムでは規制やコンプライアンスの観点から、「いつ、誰が、どの取引を、どう変更したか」の完全な履歴（Audit Trail）を保持することが求められます。全バージョンを保持することで、監査や紛争時に過去の任意の時点での取引状態を再現できます。' }
        ]);
    }
};
