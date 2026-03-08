// ===========================
// Day 141: PSWAP（Portfolio Swap）とプライムブローカレッジ
// ===========================
window.Day141 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📊 PSWAP (Portfolio Swap) — ポートフォリオ・スワップ</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 TRSの「超進化版」— 複数銘柄をまとめてスワップ</div>
                    <p>Day 140で学んだTRS（トータル・リターン・スワップ）は<strong>1銘柄</strong>に対するスワップでした。<br>
                    PSWAP（Portfolio Swap）は、<strong>複数の銘柄（ポートフォリオ全体）をまとめて1つのスワップ契約</strong>として管理する商品です。<br>
                    ヘッジファンドが銀行のプライムブローカレッジ部門を通じてレバレッジ取引を行う際の主力手段です。</p>
                </div>

                <h3>PSWAP の構造</h3>
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <div style="display:flex; align-items:center; justify-content:center; gap:2rem; flex-wrap:wrap; text-align:center;">
                        <div style="padding:1rem; background:rgba(59,130,246,0.1); border-radius:var(--radius-md); min-width:200px;">
                            <strong style="color:var(--accent-blue);">ヘッジファンド</strong><br>
                            <small>ポートフォリオのリターンを受取り<br>ファンディングコストを支払う</small>
                        </div>
                        <div style="text-align:center;">
                            <div>← 🧺 <strong>ポートフォリオ全体のリターン</strong> ←</div>
                            <div style="margin-top:0.3rem;"><small>（銘柄A + 銘柄B + ... + 銘柄N）</small></div>
                            <div style="margin-top:0.5rem;">→ <strong>ファンディング (SOFR + spread)</strong> →</div>
                        </div>
                        <div style="padding:1rem; background:rgba(16,185,129,0.1); border-radius:var(--radius-md); min-width:200px;">
                            <strong style="color:var(--accent-green);">プライムブローカー</strong><br>
                            <small>（銀行）実際に株式を保有<br>またはヘッジ</small>
                        </div>
                    </div>
                </div>

                <h3>TRS vs PSWAP の違い</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th></th><th>TRS（単銘柄）</th><th>PSWAP（ポートフォリオ）</th></tr></thead>
                    <tbody>
                        <tr><td><strong>原資産</strong></td><td>1銘柄の株式/指数</td><td><strong>複数銘柄のバスケット</strong></td></tr>
                        <tr><td><strong>リバランス</strong></td><td>原則なし</td><td><strong>日次でポートフォリオの構成変更が可能</strong></td></tr>
                        <tr><td><strong>ブッキング</strong></td><td>1取引 = 1銘柄</td><td><strong>1取引 = N銘柄（親子構造）</strong></td></tr>
                        <tr><td><strong>マージン計算</strong></td><td>銘柄ごと</td><td><strong>ポートフォリオ全体でネッティング</strong></td></tr>
                        <tr><td><strong>管理の複雑度</strong></td><td>低〜中</td><td><strong>非常に高い</strong></td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🏦 プライムブローカレッジ (Prime Brokerage: PB)</h2>
                <p>PSWAPを理解するには、<strong>プライムブローカレッジ</strong>というビジネスモデルを知る必要があります。</p>

                <div class="info-box tip">
                    <div class="info-box-title">💡 PBとは？</div>
                    <p>大手銀行・証券会社が<strong>ヘッジファンド等の機関投資家</strong>に提供する包括的なサービスです。</p>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>資金貸付・レバレッジ提供</strong>：PSWAP/TRSを通じた合成ポジション構築</li>
                        <li><strong>株式貸借（Stock Lending）</strong>：空売り用の株式貸出</li>
                        <li><strong>カストディ（保管）</strong>：資産の保管・管理</li>
                        <li><strong>決済・クリアリング</strong>：取引の執行・決済代行</li>
                        <li><strong>レポーティング</strong>：ポジション・P&L・リスクの報告</li>
                    </ul>
                </div>

                <h3>Be-DFS開発における PSWAP の最大の難所</h3>
                <div class="info-box important">
                    <div class="info-box-title">🚨 日次リバランスとデータ量</div>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>日次リバランス</strong>：ヘッジファンドは毎日のように銘柄の追加・削除・ウェイト変更を指示。Be-DFSは「昨日 vs 今日のポートフォリオ差分」を正確に管理</li>
                        <li><strong>大量の構成銘柄</strong>：1つのPSWAPに数百〜数千銘柄が含まれることも。パフォーマンス（処理速度）が最重要課題</li>
                        <li><strong>コーポレートアクション</strong>：構成銘柄で合併・分割等が発生するたびに全PSWAPに波及</li>
                        <li><strong>マージン計算の複雑性</strong>：ポートフォリオ全体のリスクベースでマージンを計算（SPAN、SIMM等のモデル）</li>
                        <li><strong>EOD（End of Day）処理</strong>：全構成銘柄の時価評価 × 全PSWAP契約 = 膨大な計算量 → グリッドコンピューティング必須</li>
                    </ul>
                </div>

                <h3>データモデルのイメージ（親子構造）</h3>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); font-family: 'JetBrains Mono', monospace; font-size: 0.85rem;">
                    <div>📁 <strong>PSWAP契約（親トレード）</strong></div>
                    <div style="padding-left:1.5rem;">├─ 契約ID, カウンターパーティ, ファンディング条件</div>
                    <div style="padding-left:1.5rem;">├─ 📄 構成銘柄A (子トレード): 数量, 参照価格, リセット日</div>
                    <div style="padding-left:1.5rem;">├─ 📄 構成銘柄B (子トレード): 数量, 参照価格, リセット日</div>
                    <div style="padding-left:1.5rem;">├─ 📄 構成銘柄C (子トレード): ...</div>
                    <div style="padding-left:1.5rem;">└─ 📄 ... (数百〜数千銘柄)</div>
                </div>
            </div>

            <div id="day141-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day141-quiz', 'day141-quiz', [
            { question: 'PSWAP（Portfolio Swap）とTRS（Total Return Swap）の最大の違いはどれですか？', options: ['PSWAPは取引所で取引される', 'PSWAPは複数銘柄のバスケットをまとめて1つのスワップ契約として管理する', 'PSWAPは金利商品のみ対象', 'PSWAPにはファンディングレグがない'], correct: 1, explanation: 'TRSが1銘柄の株式/指数を対象とするのに対し、PSWAPは複数の銘柄（ポートフォリオ全体）をまとめて1つのスワップ契約として管理します。日次リバランス（銘柄の追加・削除・ウェイト変更）が可能な点も大きな違いです。' },
            { question: 'PSWAPのBe-DFS実装における最大の技術的課題はどれですか？', options: ['画面の色のデザイン', '日次リバランスによる大量データ処理とパフォーマンス（数百〜数千銘柄の管理）', 'メールの自動送信', 'PDF出力'], correct: 1, explanation: '1つのPSWAPに数百〜数千の構成銘柄が含まれ、毎日リバランス（追加・削除・ウェイト変更）が行われるため、データ量と計算量が膨大になります。EOD処理では全構成銘柄×全PSWAP契約の時価評価が必要で、グリッドコンピューティングが必須です。' },
            { question: 'プライムブローカレッジ（PB）サービスの主な顧客は誰ですか？', options: ['個人投資家', 'ヘッジファンド等の機関投資家', '中央銀行', '保険会社のみ'], correct: 1, explanation: 'プライムブローカレッジは大手銀行・証券会社がヘッジファンド等の機関投資家に提供する包括的なサービスです。レバレッジ提供（PSWAP/TRS）、株式貸借、カストディ、決済代行、レポーティングなどを含みます。' },
            { question: 'PSWAPのデータモデルはどのような構造が適切ですか？', options: ['フラット構造（1テーブル）', '親子構造（親＝契約条件、子＝構成銘柄ごとのデータ）', 'スター型構造', '循環参照構造'], correct: 1, explanation: 'PSWAPは「親トレード（契約ID、カウンターパーティ、ファンディング条件）」と「子トレード（構成銘柄ごとの数量、参照価格、リセット日等）」の親子構造で管理するのが一般的です。日次リバランスでは子トレードの追加・削除・変更が頻繁に発生します。' }
        ]);
    }
};
