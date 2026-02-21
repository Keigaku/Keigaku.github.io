// ===========================
// Day 18: 金利モデリングとイールドカーブ構築
// ===========================
window.Day18 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📈 イールドカーブとは</h2>
                <p>イールドカーブ（利回り曲線）は、同一の信用力を持つ債券の<strong>残存期間と利回りの関係</strong>を表す曲線です。
                全てのデリバティブ価格計算の出発点であり、クオンツにとって最も重要なインフラの一つです。</p>

                <h3>イールドカーブの形状</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>形状</th><th>特徴</th><th>市場の示唆</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>順イールド（Normal）</strong></td><td>長期金利 > 短期金利</td><td>通常の経済成長期待</td></tr>
                        <tr><td><strong>逆イールド（Inverted）</strong></td><td>短期金利 > 長期金利</td><td>景気後退のシグナル</td></tr>
                        <tr><td><strong>フラット</strong></td><td>長短金利がほぼ同水準</td><td>金融政策の転換期</td></tr>
                        <tr><td><strong>ハンプ（Humped）</strong></td><td>中期が最も高い</td><td>不確実性が高い状態</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 カーブ構築が重要な理由</div>
                    <p>・全てのデリバティブのディスカウンティング（割引計算）に使用</p>
                    <p>・フォワードレート計算の基礎</p>
                    <p>・リスク指標（DV01、キーレートデルタ）の計算に不可欠</p>
                    <p>・<strong>カーブが間違っていれば、全ての価格が間違う</strong></p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🏗️ カーブ構築の実務</h2>

                <h3>入力データ（Market Instruments）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>期間</th><th>商品</th><th>特徴</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>O/N〜1W</strong></td><td>デポジット（TONA、SOFR等）</td><td>翌日物金利、最も短い</td></tr>
                        <tr><td><strong>1M〜12M</strong></td><td>LIBOR/TIBOR（廃止予定）→ TORF</td><td>短期金利の基準</td></tr>
                        <tr><td><strong>2Y〜30Y</strong></td><td>金利スワップ（IRS）</td><td>固定金利 vs 変動金利の交換</td></tr>
                        <tr><td><strong>3M〜2Y</strong></td><td>金利先物（ユーロドル先物等）</td><td>短中期のヘッジ</td></tr>
                    </tbody>
                </table>

                <h3>補間手法（Interpolation）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>手法</th><th>特徴</th><th>用途</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>線形補間</strong></td><td>最もシンプル、ゼロレートに適用</td><td>初歩的な計算</td></tr>
                        <tr><td><strong>Log-Linear</strong></td><td>ディスカウントファクターの対数を線形補間</td><td>実務で広く使用</td></tr>
                        <tr><td><strong>Cubic Spline</strong></td><td>滑らかなカーブ、2階微分が連続</td><td>フォワードレートの安定性重視</td></tr>
                        <tr><td><strong>Monotone Convex</strong></td><td>フォワードレートの正値性を保証</td><td>高精度の実務計算</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 実務上の注意点</div>
                    <p>・<strong>LIBOR廃止</strong>：LIBOR → RFR（SOFR、TONA等）への移行が進行中</p>
                    <p>・<strong>マルチカーブ</strong>：割引用カーブとフォワード用カーブを分離する「マルチカーブフレームワーク」が標準</p>
                    <p>・<strong>Dual Curve Bootstrapping</strong>：OISカーブ（割引）＋ IBOR/RFRカーブ（フォワード）を同時構築</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📐 Short Rate Models</h2>
                <p>瞬間金利（Short Rate）の確率過程をモデル化し、債券や金利デリバティブの価格を計算します。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>モデル</th><th>確率微分方程式</th><th>特徴</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Vasicek</strong></td><td>dr = a(b - r)dt + σdW</td><td>平均回帰あり、解析解あり、負の金利あり</td></tr>
                        <tr><td><strong>CIR</strong></td><td>dr = a(b - r)dt + σ√r dW</td><td>金利は常に正、ボラがrに依存</td></tr>
                        <tr><td><strong>Hull-White</strong></td><td>dr = [θ(t) - ar]dt + σdW</td><td>θ(t)でイールドカーブにキャリブレーション可能</td></tr>
                        <tr><td><strong>BDT</strong></td><td>d(ln r) = [θ(t) - a·ln r]dt + σ(t)dW</td><td>対数正規、二項ツリーで実装</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📘 Hull-White モデルの重要性</div>
                    <p>実務で最も広く使われるモデルの一つ。以下の理由から人気があります：</p>
                    <p>・<strong>キャリブレーション</strong>：θ(t)でイールドカーブに完全にフィット</p>
                    <p>・<strong>解析解</strong>：ヨーロピアン・スワプション等に解析解が存在</p>
                    <p>・<strong>実装しやすさ</strong>：三項ツリーやFDMで効率的に実装可能</p>
                    <p>・<strong>拡張性</strong>：2ファクターHWなどへ拡張可能</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🔧 キャリブレーションの実践</h2>

                <h3>キャリブレーション対象商品</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>商品</th><th>感応度</th><th>パラメータ</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>キャップ/フロア</strong></td><td>ボラティリティ</td><td>σ（ボラ）</td></tr>
                        <tr><td><strong>スワプション</strong></td><td>ボラ＋相関</td><td>σ, a（平均回帰速度）</td></tr>
                        <tr><td><strong>イールドカーブ</strong></td><td>水準</td><td>θ(t)（ドリフト項）</td></tr>
                    </tbody>
                </table>

                <h3>キャリブレーション手順</h3>
                <div class="code-block">1. 市場データの取得（スワプションボラ行列、キャップボラ等）
2. 初期パラメータの設定（a = 0.05, σ = 0.01 等）
3. モデルによるスワプション価格計算
4. 市場価格との差分（二乗誤差）を計算
5. 最適化アルゴリズム（Levenberg-Marquardt等）で最小化
6. 結果の妥当性検証（残差分析、安定性テスト）</div>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ キャリブレーションの落とし穴</div>
                    <p>・<strong>オーバーフィッティング</strong>：過学習でOut-of-Sampleの精度が低下</p>
                    <p>・<strong>局所解</strong>：初期値依存で異なる解に収束する可能性</p>
                    <p>・<strong>市場不整合</strong>：キャップボラとスワプションボラの不整合</p>
                </div>
            </div>

            <div id="day18-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day18-quiz', 'day18-quiz', [
            {
                question: '逆イールド（Inverted Yield Curve）が示唆するものはどれですか？',
                options: ['通常の経済成長', '景気後退のシグナル', 'インフレの加速', '金利の安定'],
                correct: 1,
                explanation: '逆イールド（短期金利が長期金利を上回る状態）は歴史的に景気後退の先行指標とされています。'
            },
            {
                question: 'Hull-Whiteモデルの最大の利点はどれですか？',
                options: ['金利が常に正になること', 'θ(t)でイールドカーブにキャリブレーション可能なこと', '計算が最も速いこと', 'パラメータが1つだけで済むこと'],
                correct: 1,
                explanation: 'Hull-Whiteモデルはθ(t)関数によって、観測されたイールドカーブに完全にフィットさせることが可能です。'
            },
            {
                question: 'マルチカーブフレームワークとは何ですか？',
                options: ['複数通貨のカーブを統合すること', '割引用カーブとフォワード用カーブを分離すること', '異なる補間手法を組み合わせること', '過去と現在のカーブを比較すること'],
                correct: 1,
                explanation: 'マルチカーブフレームワークでは、OISカーブ（割引用）とIBOR/RFRカーブ（フォワード計算用）を分離して構築します。金融危機後の標準的な手法です。'
            },
            {
                question: 'Monotone Convex補間の特徴はどれですか？',
                options: ['最もシンプルな手法', 'フォワードレートの正値性を保証する', '2階微分が連続する', '常に線形になる'],
                correct: 1,
                explanation: 'Monotone Convex補間はフォワードレートが負にならないことを保証する高精度な補間手法です。'
            },
            {
                question: 'キャリブレーションで注意すべき「局所解」の問題とは何ですか？',
                options: ['計算時間が長くなること', '初期値依存で異なる解に収束する可能性があること', 'データが不足すること', 'モデルが複雑すぎること'],
                correct: 1,
                explanation: '非線形最適化では初期パラメータの設定により異なる局所最適解に収束する可能性があり、複数の初期値で検証する必要があります。'
            }
        ]);
    }
};
