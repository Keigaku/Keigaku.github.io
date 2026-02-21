// ===========================
// Day 02: 金融数学の基礎
// ===========================
window.Day02 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📐 なぜ金融に数学が必要なのか？</h2>
                <p>金融工学は、数学を使って金融商品の価格を計算したり、リスクを測定したりする学問です。
                特に以下の数学分野が重要になります：</p>
                <ul>
                    <li><strong>確率論</strong>：不確実な将来の出来事をモデル化</li>
                    <li><strong>統計学</strong>：過去のデータから法則を見出す</li>
                    <li><strong>線形代数</strong>：多次元のデータを効率的に処理</li>
                    <li><strong>微分積分</strong>：変化の速度や累積を計算</li>
                </ul>
                <div class="info-box info">
                    <div class="info-box-title">💡 安心してください</div>
                    <p>全てを完璧に理解する必要はありません。ここでは「こういう概念がある」「こう使われる」という
                    大まかな理解を目指しましょう。実務を通じて徐々に深めていきます。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>💹 金利と複利の基礎</h2>
                <h3>単利と複利</h3>
                <p>お金を貸したり預けたりすると得られる報酬が<strong>金利（利息）</strong>です。</p>

                <div class="formula-box">
                    単利: FV = PV × (1 + r × t)<br>
                    複利: FV = PV × (1 + r)^t<br>
                    連続複利: FV = PV × e^(r×t)
                </div>

                <table class="styled-table">
                    <thead><tr><th>記号</th><th>意味</th></tr></thead>
                    <tbody>
                        <tr><td><strong>PV</strong></td><td>現在価値（Present Value）= 今のお金の価値</td></tr>
                        <tr><td><strong>FV</strong></td><td>将来価値（Future Value）= 将来のお金の価値</td></tr>
                        <tr><td><strong>r</strong></td><td>金利（年利）</td></tr>
                        <tr><td><strong>t</strong></td><td>期間（年数）</td></tr>
                        <tr><td><strong>e</strong></td><td>ネイピア数（≈ 2.71828）</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">📌 金融工学では連続複利が標準</div>
                    <p>金融工学の数理モデルでは、計算の便利さから<strong>連続複利</strong>が多用されます。
                    e（ネイピア数）を使った計算に慣れておくと、後のDay 4（オプション価格理論）で役立ちます。</p>
                </div>
            </div>

            <div id="day02-simulator"></div>

            <div class="content-section animate-in stagger-2">
                <h2>🎲 確率論の基礎</h2>
                <h3>確率変数と確率分布</h3>
                <p><strong>確率変数（Random Variable）</strong>とは、結果が不確実な事象を数値で表したものです。
                例えば、明日の株価は確率変数として扱えます。</p>

                <h4>期待値（Expected Value）</h4>
                <p>確率変数の「平均的な値」。各値にその確率をかけて合計したものです。</p>
                <div class="formula-box">E[X] = Σ x_i × P(x_i)</div>

                <h4>分散と標準偏差（Variance & Standard Deviation）</h4>
                <p><strong>分散</strong>：値が期待値からどれくらいばらつくかの指標。<br>
                <strong>標準偏差</strong>：分散の平方根。金融では<strong>ボラティリティ</strong>としてリスクの指標に使われます。</p>
                <div class="formula-box">
                    Var(X) = E[(X - E[X])²]<br>
                    σ = √Var(X)　（標準偏差 = ボラティリティ）
                </div>

                <h3>正規分布</h3>
                <p>金融モデルで最も重要な確率分布です。株価の日次リターン（日々の変化率）は、近似的に正規分布に従うとされています。</p>
                <ul>
                    <li>ベルカーブ（釣り鐘型）の形状</li>
                    <li>平均値（μ）と標準偏差（σ）の2つのパラメータで決まる</li>
                    <li>約68%のデータが μ±1σ 内に、約95%が μ±2σ 内に収まる</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">🔑 ボラティリティ = リスクの代理指標</div>
                    <p>金融の世界では、標準偏差（σ）のことを<strong>ボラティリティ</strong>と呼び、リスクの大きさを表す最も基本的な指標として使います。
                    Day 4のブラック・ショールズ式やDay 6のVaR計算で中心的な役割を果たします。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📊 統計学の基礎</h2>
                <h3>相関と共分散</h3>
                <p>2つの変数（例：2つの株価）がどの程度連動して動くかを表す指標です。</p>
                <table class="styled-table">
                    <thead><tr><th>相関係数の値</th><th>意味</th></tr></thead>
                    <tbody>
                        <tr><td>+1</td><td>完全に同じ方向に動く（正の完全相関）</td></tr>
                        <tr><td>0</td><td>全く関係なく動く（無相関）</td></tr>
                        <tr><td>-1</td><td>完全に逆方向に動く（負の完全相関）</td></tr>
                    </tbody>
                </table>

                <h3>回帰分析</h3>
                <p>データから「原因→結果」の関係を統計的に推定する手法です。
                例えば、金利の変化が債券価格にどう影響するかを分析できます。</p>

                <h3>モンテカルロ法</h3>
                <p>乱数を使って大量のシミュレーションを行い、結果の分布を推定する手法です。</p>
                <ul>
                    <li>複雑な金融商品の価格計算に不可欠</li>
                    <li>解析的に（数式だけで）解けない問題を数値的に解く</li>
                    <li>Day 5以降で重要になってきます</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🔢 線形代数の基礎</h2>
                <p>多数の資産を同時に扱う場合、線形代数（行列・ベクトル計算）が必要です。</p>

                <h3>ベクトルと行列</h3>
                <p><strong>ベクトル</strong>：複数の数値をまとめたもの（例：各資産の保有量）<br>
                <strong>行列</strong>：数値を縦横に並べた表（例：相関行列、共分散行列）</p>

                <div class="formula-box">
                    ポートフォリオのリスク: σ_p = √(w^T × Σ × w)<br><br>
                    w = 各資産のウェイトのベクトル<br>
                    Σ = 共分散行列
                </div>

                <div class="info-box tip">
                    <div class="info-box-title">📌 なぜ行列計算が重要？</div>
                    <p>大手金融機関では数千〜数万のポジション（取引）を管理しています。
                    これら全体のリスクを効率的に計算するには、行列演算が不可欠です。
                    プログラミングでも NumPy（Python）や Eigen（C++）などの線形代数ライブラリを多用します。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-5">
                <h2>📈 微分積分と金融</h2>
                <h3>微分（Differentiation）</h3>
                <p>「変化の速さ」を求める計算です。金融では主に<strong>感応度分析</strong>に使われます。</p>
                <ul>
                    <li><strong>デルタ（Δ）</strong>：原資産価格が1単位変化したとき、オプション価格がどれだけ変化するか</li>
                    <li><strong>ガンマ（Γ）</strong>：デルタ自体の変化率（2階微分）</li>
                    <li><strong>ベガ</strong>：ボラティリティ変化に対する感応度</li>
                </ul>
                <p>これらは Day 4（グリークス）で詳しく学びます。</p>

                <h3>積分（Integration）</h3>
                <p>「面積」や「累積」を求める計算。金融では期待値の計算に使います。</p>
                <div class="formula-box">E[X] = ∫ x × f(x) dx</div>
            </div>

            <div id="day02-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // Compound Interest Simulator
        SimulatorEngine.renderCalculator('day02-simulator', {
            title: '複利計算シミュレータ',
            description: '元本・金利・期間を変更して、単利・複利・連続複利の違いを確認しましょう。',
            inputs: [
                { label: '元本 (PV)', type: 'number', default: 1000000, min: 0, unit: '円' },
                { label: '年利 (r)', type: 'slider', default: 5, min: 0, max: 20, step: 0.5, unit: '%' },
                { label: '期間 (t)', type: 'slider', default: 10, min: 1, max: 30, step: 1, unit: '年' }
            ],
            calculate(values) {
                const [PV, rPercent, t] = values;
                const r = rPercent / 100;
                const simple = PV * (1 + r * t);
                const compound = PV * Math.pow(1 + r, t);
                const continuous = PV * Math.exp(r * t);
                const fmt = (v) => '¥' + Math.round(v).toLocaleString();
                return [fmt(simple), fmt(compound), fmt(continuous), fmt(compound - simple)];
            },
            resultLabels: ['単利', '複利', '連続複利', '複利 - 単利の差']
        });

        // Quiz
        QuizEngine.render('day02-quiz', 'day02-quiz', [
            {
                question: '金融工学で「ボラティリティ」と呼ばれる統計量はどれですか？',
                options: ['期待値', '中央値', '標準偏差', '分散'],
                correct: 2,
                explanation: '金融では標準偏差（σ）をボラティリティと呼び、リスクの大きさを表す基本的な指標として使います。'
            },
            {
                question: '連続複利の公式 FV = PV × e^(rt) の「e」は何を指しますか？',
                options: ['円 (En)', 'ネイピア数 (≈2.71828)', 'ユーロ通貨', '為替レート'],
                correct: 1,
                explanation: 'e はネイピア数（自然対数の底）で、約2.71828です。連続複利の計算に使われます。'
            },
            {
                question: '2つの金融資産の相関係数が -1 のとき、どのような動きをしますか？',
                options: [
                    '全く同じ方向に動く',
                    '全く関係なく動く',
                    '完全に逆方向に動く',
                    '動きが予測できない'
                ],
                correct: 2,
                explanation: '相関係数 -1 は完全な逆相関を意味し、一方が上がるとき他方は必ず下がります。ポートフォリオのリスク分散に活用されます。'
            },
            {
                question: 'モンテカルロ法とは何ですか？',
                options: [
                    '微分方程式を解析的に解く手法',
                    '乱数を使った大量シミュレーションで結果を推定する手法',
                    '過去データから将来を予測する時系列分析',
                    '最適な投資配分を決定する手法'
                ],
                correct: 1,
                explanation: 'モンテカルロ法は乱数を使って多数のシミュレーションを行い、結果の分布を推定する手法です。複雑な金融商品の価格計算に不可欠です。'
            },
            {
                question: 'オプション価格の原資産に対する感応度を表す「グリークス」のうち、原資産価格の1単位変化に対する価格変化を何と呼びますか？',
                options: ['ガンマ（Γ）', 'ベガ', 'シータ（Θ）', 'デルタ（Δ）'],
                correct: 3,
                explanation: 'デルタ（Δ）は原資産価格が1単位変化したときのオプション価格の変化量です。Day 4で詳しく学びます。'
            }
        ]);
    }
};
