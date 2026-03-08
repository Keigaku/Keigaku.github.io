// ===========================
// Day 144: プライシングとグリッドコンピューティング
// ===========================
window.Day144 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💰 時価評価（Mark-to-Market: MtM）</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「この取引は今いくらの価値があるか？」</div>
                    <p>Be-DFSの最重要機能の一つが<strong>時価評価（プライシング）</strong>です。ブッキングされた全ての取引について、「今日時点でこの取引を解消したらいくら」を計算します。<br>
                    計算の基本原理は<strong>「将来発生する全てのキャッシュフローをDFで現在価値に割引いて合計する」</strong>ことです。</p>
                </div>
                
                <h3>IRS の時価評価（具体例）</h3>
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <p style="text-align:center; font-size:1.1rem;">$PV = \\sum_{i=1}^{n} CF_i \\times DF(t_i)$</p>
                    <p style="text-align:center; font-size:0.85rem; margin-top:0.5rem;">各将来キャッシュフロー $CF_i$ に、その支払日 $t_i$ の割引ファクター $DF(t_i)$ を掛けて合計</p>
                    <hr style="border-color:var(--border-color); margin:1rem 0;">
                    <p><strong>固定レグのPV</strong>: 固定金利 × Notional × Day Count Fraction × DF を各期間について合計</p>
                    <p><strong>変動レグのPV</strong>: フォワードレート × Notional × Day Count Fraction × DF を各期間について合計</p>
                    <p><strong>スワップのMtM</strong> = 受取レグのPV − 支払レグのPV</p>
                </div>

                <h3>評価手法の分類</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>手法</th><th>適用商品</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>解析解（Closed Form）</strong></td><td>バニラIRS, FX Forward</td><td>高速。CF列挙 × DF の掛け算</td></tr>
                        <tr><td><strong>数値解（Lattice/Tree）</strong></td><td>バミューダオプション、一部エキゾ</td><td>二項/三項/格子による逐次評価</td></tr>
                        <tr><td><strong>モンテカルロ法</strong></td><td>複雑なエキゾチック、PSWAP</td><td>汎用的だが計算が膨大。分散低減が鍵</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🖥️ グリッドコンピューティング</h2>
                <p>Be-DFSがグリッドコンピューティングを使う理由は明確です。<strong>数千〜数万の取引 × 複数のカーブ × 複数のシナリオ</strong>の計算を、トレーダーが待てる時間（数分以内）で完了させる必要があるためです。</p>

                <h3>グリッド計算の基本アーキテクチャ</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem; margin-bottom: 1.5rem;">
                    <div style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">📋</div>
                        <strong>ジョブスケジューラ</strong><br>
                        <small>計算タスクを生成し、計算ノードに分配</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">⚡</div>
                        <strong>計算ノード群</strong><br>
                        <small>数百〜数千台。個別取引の評価を並列実行</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">📊</div>
                        <strong>結果集約</strong><br>
                        <small>各ノードの計算結果を集めてフロントに返却</small>
                    </div>
                </div>

                <h3>EOD（End of Day）バッチ計算とリアルタイム計算</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th></th><th>EOD バッチ</th><th>リアルタイム（Intraday）</th></tr></thead>
                    <tbody>
                        <tr><td><strong>タイミング</strong></td><td>市場クローズ後（毎日）</td><td>日中随時</td></tr>
                        <tr><td><strong>対象</strong></td><td>全ポジション</td><td>個別取引 or ブック単位</td></tr>
                        <tr><td><strong>用途</strong></td><td>公式P&L、リスク報告、会計</td><td>トレーダーの意思決定支援</td></tr>
                        <tr><td><strong>計算量</strong></td><td>膨大（1〜数時間）</td><td>低〜中（数秒〜数分）</td></tr>
                        <tr><td><strong>許容誤差</strong></td><td>低い（正確性重視）</td><td>やや高い（速度重視）</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 開発責任者が意識すべき非機能要件</div>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>スケーラビリティ</strong>：取引数増加に対して計算ノードを追加で対応できるか</li>
                        <li><strong>フォールトトレランス</strong>：計算ノードが1台落ちても全体が止まらない設計</li>
                        <li><strong>キャッシュ戦略</strong>：カーブデータやマーケットデータのキャッシュで再計算コスト削減</li>
                        <li><strong>結果の再現性</strong>：同じ入力なら同じ結果が出ることの保証（監査要件）</li>
                    </ul>
                </div>
            </div>

            <div id="day144-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day144-quiz', 'day144-quiz', [
            { question: 'OTCデリバティブの時価評価（MtM）の基本原理はどれですか？', options: ['過去の取引価格の平均を使う', '将来発生する全てのキャッシュフローをDFで現在価値に割引いて合計する', '想定元本をそのまま使う', '取引所の終値を使う'], correct: 1, explanation: '時価評価の基本原理は「将来発生する全てのキャッシュフローにディスカウントファクター（DF）を掛けて現在価値（PV）に換算し、それを合計する」ことです。スワップの場合は「受取レグのPV − 支払レグのPV」がMtMとなります。' },
            { question: 'Be-DFSがグリッドコンピューティングを採用する主な理由はどれですか？', options: ['データベースの冗長化のため', '数千〜数万の取引の時価評価を、トレーダーが待てる時間内に完了させるため', '画面のレスポンスを改善するため', 'メールの一斉送信を高速化するため'], correct: 1, explanation: 'OTCデリバティブの時価評価は計算量が膨大（特にモンテカルロ法を使うエキゾチック商品）で、数千〜数万取引を数分以内に評価する必要があります。計算を数百〜数千の計算ノードに分散処理させることで、これを実現します。' },
            { question: 'EOD（End of Day）バッチ計算とリアルタイム（Intraday）計算の違いとして正しいものはどれですか？', options: ['EODはリアルタイムより常に高速', 'EODは全ポジションを正確に計算し、リアルタイムは個別取引を速度重視で計算する', 'リアルタイム計算は月次でのみ実行される', 'EODとリアルタイムは全く同じ処理'], correct: 1, explanation: 'EODバッチは市場クローズ後に全ポジションを正確に計算（公式P&L・リスク報告用）します。一方、リアルタイム計算は日中随時、個別取引やブック単位でトレーダーの意思決定を支援するために行われ、速度を優先して許容誤差がやや高くなります。' },
            { question: 'グリッド計算の「フォールトトレランス」とは何を意味しますか？', options: ['計算精度を最大化すること', '計算ノードが1台故障しても全体の処理が停止しない設計', '計算を高速化するためのアルゴリズム', '過去の計算結果をキャッシュすること'], correct: 1, explanation: 'フォールトトレランスとは、システムの一部が故障しても全体が停止しない耐障害性の設計です。グリッド計算では数百〜数千の計算ノードがあり、1台が故障しても別のノードにジョブを再割当てして処理を継続できる仕組みが必要です。' }
        ]);

        // KaTeX rendering for math formulas
        if (window.renderMathInElement) {
            renderMathInElement(container, { delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ]});
        }
    }
};
