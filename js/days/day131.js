// ===========================
// Day 131: 数理統計学の基礎
// ===========================
window.Day131 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📐 数理統計学の世界へ</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「公式を使う」から「公式を作る」へ</div>
                    <p>統計検定1級「統計数理」では、2級のような「数値を公式に当てはめる」計算問題は出ません。微分積分や線形代数を駆使して、<strong>「なぜその公式が成り立つのか」「その推定方法は本当に最適なのか」を数学的に証明する</strong>ことが求められます。</p>
                </div>
                
                <h3>確率分布から「確率変数」の変換へ</h3>
                <p>ある確率分布に従う変数 $X$ に関数を適用した新しい変数 $Y = g(X)$ が、どのような分布に従うかを計算します。</p>

                <div style="background: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                    <h4 style="color:var(--accent-blue); margin-top:0;">変数変換の公式 (1次元)</h4>
                    <p>連続確率変数 $X$ の確率密度関数（pdf）を $f_X(x)$ とし、$y = g(x)$ が単調な関数であるとき、$Y$ の確率密度関数 $f_Y(y)$ は以下で与えられます。</p>
                    <div style="text-align:center;">
                        $$ f_Y(y) = f_X(g^{-1}(y)) \\left| \\frac{dx}{dy} \\right| $$
                    </div>
                    <p style="margin-top:1rem;"><small>ヤコビアン（微分係数の絶対値） $\\left| \\frac{dx}{dy} \\right|$ を掛けるのを忘れないことが最大のポイントです。これが多次元になると行列式（ヤコビアン行列のデターミナント）に拡張されます。</small></p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📈 特性関数と積率母関数 (MGF)</h2>
                <p>確率分布の「平均」や「分散」などの積率（モーメント）を簡単に計算するため、また分布同士の足し算（畳み込み）を証明するための強力な武器です。</p>

                <ul class="feature-list">
                    <li><strong>積率母関数 (Moment Generating Function: MGF)</strong><br>
                    定義: $M_X(t) = E[e^{tX}]$<br>
                    <small>これを $t$ で微分して $t=0$ を代入すると、任意の次数の積率（$E[X], E[X^2]$ 等）が魔法のように得られます。</small>
                    </li>
                    <li><strong>特性関数 (Characteristic Function)</strong><br>
                    定義: $\\phi_X(t) = E[e^{itX}]$<br>
                    <small>MGFは存在しない分布（コーシー分布など）がありますが、特性関数は複素数を用いるためあらゆる分布に必ず存在します。分布を一意に決定できる「分布の指紋」です。</small>
                    </li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">🚨 MGFの超重要性質（再生性）</div>
                    <p>独立な確率変数 $X$ と $Y$ の和 $Z = X + Y$ のMGFは、それぞれの積になる。<br>
                    $$ M_{X+Y}(t) = M_X(t) \\times M_Y(t) $$<br>
                    これを利用すると、「正規分布と正規分布の和もまた正規分布になる（再生性）」等を一瞬で証明できます。</p>
                </div>
            </div>

            <div id="day131-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day131-quiz', 'day131-quiz', [
            { question: '連続型確率変数 X が区間 (0,1) の一様分布 U(0,1) に従うとします（すなわち pdf は f(x)=1 ）。このとき、新しい変数 Y = -log(X) の確率密度関数 f(y) は何になるでしょうか？', options: ['f(y) = 1/y  (y > 0)', 'f(y) = e^(-y)  (y > 0)', 'f(y) = -e^(-y)  (y > 0)', 'f(y) = y * e^(-y)  (y > 0)'], correct: 1, explanation: '変数変換の公式を使います。<br>1. y = -log(x) を x について解くと x = e^(-y)。<br>2. これを y で微分すると dx/dy = -e^(-y)。その絶対値なので |dx/dy| = e^(-y)。<br>3. f_X(x) = 1 であるから、公式 f_Y(y) = f_X(x) * |dx/dy| = 1 * e^(-y) = e^(-y) となります（y > 0で定義）。<br>これはパラメータλ=1の「指数分布」の確率密度関数です。一様分布の対数を取ると指数分布が現れる、美しい事実です。' },
            { question: 'ある確率分布の積率母関数（MGF）が M(t) として与えられているとき、その分布の「分散 V(X)」を M(t) を用いて表した式として正しいものはどれですか？（ただし、M\'(0) を t=0 での1階微分、M\'\'(0)を2階微分とする）', options: ['M\'\'(0)', 'M\'\'(0) - M\'(0)', 'M\'\'(0) - {M\'(0)}^2', '{M\'\'(0)}^2 - M\'(0)'], correct: 2, explanation: '積率母関数 M(t) = E[e^(tX)] をtで微分すると M\'(t) = E[X e^(tX)] となり、t=0 を代入すると M\'(0) = E[X]（期待値・平均）になります。<br>2回微分してt=0を代入すると M\'\'(0) = E[X²]（2次のモーメント）になります。<br>分散 V(X) = E[X²] - {E[X]}² であるため、V(X) = M\'\'(0) - {M\'(0)}² となります（1級の頻出・常識公式です）。' },
            { question: '独立な n 個の確率変数が、いずれも成功確率 p の「ベルヌーイ分布（1回のコイン投げ、0か1）」に従うとします。これら n 個の変数の「合計（和）」が従う確率分布の名称として正しいものはどれですか？（MGFの性質を用いて証明される典型例です）', options: ['ポアソン分布', '幾何分布', '正規分布', '二項分布 (Binomial distribution)'], correct: 3, explanation: '1回のベルヌーイ試行（成功か失敗か）を n回独立に繰り返したときの「成功回数の合計」なので、「二項分布 B(n, p)」となります。<br>数理的には、ベルヌーイ分布のMGF M(t) = (1-p + p e^t) を n個掛け合わせたものが {1-p + p e^t}^n となり、これがまさに二項分布のMGFの形に一致するため、分布が決定されます。' },
            { question: '確率変数 X1, X2,..., Xn が互いに独立に「標準正規分布 N(0,1)」に従うとき、それぞれの「2乗の和（ X1² + X2² + ... + Xn² ）」が従う確率分布はどれですか？', options: ['自由度 n の t分布', '自由度 n のカイ二乗分布 (χ²分布)', '自由度 (n-1) のF分布', '平均 0、分散 n の正規分布 N(0,n)'], correct: 1, explanation: '標準正規分布 N(0,1) に従う独立な確率変数を「2乗して足し合わせたもの」は『自由度 n の カイ二乗(χ²)分布』に従います。<br>1級ではさらに、この χ²分布 がガンマ分布の特殊な形（Gamma(n/2, 1/2)）であることもMGF を使った変数変換から証明できるようになる必要があります。後の章の「検定」で絶対に避けられない最重要の分布です。' }
        ]);

        // KaTeX rendering for math formulas
        if (window.renderMathInElement) {
            renderMathInElement(container, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ]
            });
        }
    }
};
