// ===========================
// Day 145: Greeks・リスク計算と感応度
// ===========================
window.Day145 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📊 Greeks（グリークス）— リスクの感応度指標</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「市場が動いたら、私のポジションはいくら変動するか？」</div>
                    <p>Greeksは、市場の各リスクファクター（金利、株価、ボラティリティ等）が<strong>わずかに変動した時に、ポジションの価値がどれだけ動くか</strong>を示す感応度指標です。<br>
                    トレーダーはGreeksを見てリスクを管理し、Be-DFSはこれをリアルタイムで計算・表示します。</p>
                </div>

                <h3>主要なGreeks一覧</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>Greek</th><th>リスクファクター</th><th>意味</th><th>直感</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Delta ($\\Delta$)</strong></td><td>原資産価格 / 金利</td><td>原資産が1単位動いたときのPV変化</td><td>「方向性リスク」の大きさ</td></tr>
                        <tr><td><strong>Gamma ($\\Gamma$)</strong></td><td>原資産価格 / 金利</td><td>Deltaの変化率（2階微分）</td><td>「Deltaの安定性」。大きいと急変動時に危険</td></tr>
                        <tr><td><strong>Vega ($\\nu$)</strong></td><td>ボラティリティ</td><td>Volが1%動いたときのPV変化</td><td>「不確実性リスク」の大きさ</td></tr>
                        <tr><td><strong>Theta ($\\Theta$)</strong></td><td>時間</td><td>1日経過したときのPV変化</td><td>「時間の減衰」（オプションの宿命）</td></tr>
                        <tr><td><strong>Rho ($\\rho$)</strong></td><td>金利</td><td>金利が1%動いたときのPV変化</td><td>「金利リスク」の大きさ</td></tr>
                    </tbody>
                </table>

                <h3>金利デルタ (IR Delta / DV01 / PV01)</h3>
                <p>IRSやCCSなどの金利商品において最も重要なGreekです。</p>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <p style="text-align:center;"><strong>DV01 (Dollar Value of 01)</strong>：金利が<strong>1bp（0.01%）動いたときの</strong>ポジションの価値変化額</p>
                    <p style="text-align:center; margin-top:0.5rem;">$DV01 = \\frac{\\partial PV}{\\partial r} \\times 0.0001$</p>
                    <p style="text-align:center; font-size:0.85rem; margin-top:0.5rem;">例：DV01 = 50万円 → 金利が1bp上昇すると、ポジション価値が約50万円変動</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔧 リスク計算の実装手法</h2>

                <h3>バンピング法（Bump & Reprice）</h3>
                <p>最も直感的で汎用的な方法です。Be-DFSのグリッド計算で広く使われています。</p>
                <ol>
                    <li>元のカーブ（マーケットデータ）で PV を計算 → $PV_0$</li>
                    <li>カーブのある点を<strong>1bpだけ上にずらして（Bump）</strong>PVを再計算 → $PV_{+1bp}$</li>
                    <li>差分をとる → $Delta = PV_{+1bp} - PV_0$</li>
                </ol>
                <div class="info-box tip">
                    <div class="info-box-title">💡 バンピング法のコスト</div>
                    <p>カーブに20個のテナーポイントがあるなら、<strong>各ポイントを1bpずらして20回再計算</strong>する必要があります（+元のPV計算1回 = 合計21回）。<br>
                    1万取引 × 21回 = <strong>21万回の計算</strong>。これがグリッドコンピューティングのリソースの大部分を消費します。</p>
                </div>

                <h3>AAD（Adjoint Algorithmic Differentiation）</h3>
                <p>バンピング法の計算コストを劇的に削減する先進手法です。</p>
                <ul class="feature-list">
                    <li><strong>原理</strong>：プログラムの計算グラフを自動追跡し、<strong>連鎖律（Chain Rule）</strong>を用いて全ての入力に対する微分を一度の計算で求める</li>
                    <li><strong>メリット</strong>：リスクファクターが100個あっても<strong>元のPV計算の2〜4倍程度</strong>のコストで全てのDeltaが得られる（バンピングは101倍）</li>
                    <li><strong>課題</strong>：実装の複雑度が非常に高い。既存ライブラリの活用が現実的</li>
                </ul>

                <h3>Be-DFSのリスクレポート出力</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>レポート名</th><th>内容</th><th>受取先</th></tr></thead>
                    <tbody>
                        <tr><td><strong>デルタレポート</strong></td><td>テナーポイント別のIR Delta</td><td>トレーダー、リスク管理</td></tr>
                        <tr><td><strong>P&Lレポート</strong></td><td>日次損益とその要因分解</td><td>トレーダー、マネジメント</td></tr>
                        <tr><td><strong>P&L Explain</strong></td><td>Greeks × 市場変動で損益を説明</td><td>ミドルオフィス</td></tr>
                        <tr><td><strong>VaRインプット</strong></td><td>ポジション/Greeksデータ</td><td>リスクエンジン</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day145-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day145-quiz', 'day145-quiz', [
            { question: 'DV01 (Dollar Value of 01) の定義として正しいものはどれですか？', options: ['原資産価格が1%変動したときのPV変化', '金利が1bp（0.01%）変動したときのPV変化額', 'ボラティリティが1%変動したときのPV変化', '時間が1日経過したときのPV変化'], correct: 1, explanation: 'DV01は「金利が1ベーシスポイント（0.01%）動いたときに、ポジションの価値がいくら変動するか」を示す感応度指標です。金利スワップなどの金利商品のリスク管理で最も重要な指標の一つです。' },
            { question: 'バンピング法（Bump & Reprice）で各テナーポイントの金利デルタを計算する場合、カーブに20個のテナーポイントがあると最低何回のPV計算が必要ですか？', options: ['2回', '20回', '21回（元＋各ポイント1回ずつ）', '40回'], correct: 2, explanation: '元のカーブでPV計算（1回）+ 各テナーポイントを1bpバンプしてPV再計算（20回）= 合計21回のPV計算が必要です。取引数が多い場合、この計算量はグリッドコンピューティングの大きなリソース消費要因になります。' },
            { question: 'AAD（Adjoint Algorithmic Differentiation）のバンピング法に対する最大のメリットはどれですか？', options: ['実装が非常に簡単', 'リスクファクター数に関係なく少回数の計算で全てのDeltaが得られる', 'プログラミング言語に依存しない', '計算精度が低いため高速'], correct: 1, explanation: 'AADは連鎖律を用いて計算グラフを自動追跡するため、リスクファクターが100個あっても元のPV計算の2〜4倍程度のコストで全てのDeltaが得られます。バンピング法なら101倍のコストが必要なので、劇的な計算コスト削減です。' },
            { question: '「P&L Explain」レポートの目的として正しいものはどれですか？', options: ['新規取引を承認する', 'Greeks × 市場変動によって日次の損益を要因分解・説明する', 'トレーダーの勤怠を管理する', '規制当局に取引高を報告する'], correct: 1, explanation: 'P&L Explainは、日次の損益（P&L）がなぜその金額になったかを、「金利Delta × 金利変動」「Theta × 時間経過」「新規取引のDay-1 P&L」等の各要因に分解して説明するレポートです。ミドルオフィスがP&Lの妥当性を検証するために使います。' }
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
