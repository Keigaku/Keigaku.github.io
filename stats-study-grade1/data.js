// 統計検定一級 暗記データ
// カテゴリ別に用語・公式を構造化

const STATS_DATA = [
    {
        id: "distribution_theory",
        name: "確率分布と変数変換",
        icon: "📐",
        color: "#6C5CE7",
        items: [
            {
                question: "確率密度関数 (pdf) の性質",
                answer: "$$\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$$",
                supplement: "連続型確率変数の定義。確率 \\(P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx\\) で求める。"
            },
            {
                question: "累積分布関数 (CDF)",
                answer: "$$F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t)\\,dt$$",
                supplement: "これを微分すると確率密度関数になる。\\(f(x) = F'(x)\\)。単調非減少、\\(F(-\\infty)=0\\)、\\(F(\\infty)=1\\)。"
            },
            {
                question: "期待値（連続型）",
                answer: "$$E[X] = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$$",
                supplement: "離散型の \\(\\sum\\) が積分 \\(\\int\\) に変わる。\\(E[g(X)] = \\int g(x) f(x)\\,dx\\)。"
            },
            {
                question: "積率母関数 (MGF)",
                answer: "$$M_X(t) = E[e^{tX}] = \\int_{-\\infty}^{\\infty} e^{tx} f(x)\\,dx$$",
                supplement: "\\(k\\) 回微分して \\(t=0\\) を代入すると \\(k\\) 次モーメント \\(E[X^k]\\) になる。2つの確率変数のMGFが等しければ分布も等しい。"
            },
            {
                question: "特性関数 (Characteristic Function)",
                answer: "$$\\phi_X(t) = E[e^{itX}]$$",
                supplement: "確率分布のフーリエ変換。MGFと異なり、常に存在する。分布の一意性を保証する。"
            },
            {
                question: "変数変換（1変数）",
                answer: "$$Y = g(X) \\text{ のとき } f_Y(y) = f_X(x) \\left| \\frac{dx}{dy} \\right|$$",
                supplement: "ヤコビアン（微分の絶対値）を掛ける。\\(g\\) が単調関数である必要がある。"
            },
            {
                question: "変数変換（多変数・ヤコビアン）",
                answer: "$$f_{Y_1,Y_2}(y_1,y_2) = f_{X_1,X_2}(x_1,x_2) |J|$$",
                supplement: "$$J = \\det \\begin{pmatrix} \\frac{\\partial x_1}{\\partial y_1} & \\frac{\\partial x_1}{\\partial y_2} \\\\ \\frac{\\partial x_2}{\\partial y_1} & \\frac{\\partial x_2}{\\partial y_2} \\end{pmatrix}$$"
            },
            {
                question: "畳み込み（和の分布）",
                answer: "$$Z=X+Y \\text{ のpdfは } f_Z(z) = \\int_{-\\infty}^{\\infty} f_X(x) f_Y(z-x)\\,dx$$",
                supplement: "独立な2つの確率変数の和の分布を求める際に使用。MGFを使うと \\(M_Z(t) = M_X(t) \\cdot M_Y(t)\\)。"
            },
            {
                question: "順序統計量（最大値）の分布",
                answer: "$$f_{(n)}(x) = n[F(x)]^{n-1} f(x)$$",
                supplement: "\\(n\\) 個のサンプルの中で最大値が従う分布。CDF: \\(F_{(n)}(x) = [F(x)]^n\\)。"
            },
            {
                question: "順序統計量（最小値）の分布",
                answer: "$$f_{(1)}(x) = n[1 - F(x)]^{n-1} f(x)$$",
                supplement: "\\(n\\) 個のサンプルの中で最小値が従う分布。CDF: \\(F_{(1)}(x) = 1 - [1-F(x)]^n\\)。"
            },
            {
                question: "順序統計量の一般形 \\(f_{(k)}(x)\\)",
                answer: "$$f_{(k)}(x) = \\frac{n!}{(k-1)!(n-k)!} [F(x)]^{k-1} [1-F(x)]^{n-k} f(x)$$",
                supplement: "\\(n\\) 個の標本のうち、小さい方から \\(k\\) 番目の値の確率密度関数。"
            },
            {
                question: "チェビシェフの不等式",
                answer: "$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$",
                supplement: "分布の形状に関わらず成り立つ。大数の弱法則の証明に使われる。"
            },
            {
                question: "イェンゼンの不等式 (Jensen's Inequality)",
                answer: "$$f(E[X]) \\leq E[f(X)] \\quad (f \\text{が凸関数の場合})$$",
                supplement: "リスク回避の数学的根拠。凹関数の場合は不等号が逆転する。"
            },
            {
                question: "ガンマ分布 \\(\\Gamma(\\alpha, \\beta)\\)",
                answer: "$$f(x) = \\frac{\\beta^\\alpha}{\\Gamma(\\alpha)} x^{\\alpha-1} e^{-\\beta x}$$",
                supplement: "期待値 \\(\\alpha/\\beta\\)、分散 \\(\\alpha/\\beta^2\\)。指数分布やカイ二乗分布の一般形。1級では積分の計算で頻出。"
            },
            {
                question: "ガンマ関数の定義",
                answer: "$$\\Gamma(z) = \\int_0^{\\infty} t^{z-1} e^{-t}\\,dt$$",
                supplement: "階乗の一般化。\\(\\Gamma(n) = (n-1)!\\)、\\(\\Gamma(1/2) = \\sqrt{\\pi}\\)。正規分布の積分の導出に頻出。"
            },
            {
                question: "ベータ分布 \\(Be(\\alpha, \\beta)\\)",
                answer: "$$f(x) \\propto x^{\\alpha-1}(1-x)^{\\beta-1} \\quad (0 \\leq x \\leq 1)$$",
                supplement: "定義域が [0,1] の分布。二項分布の共役事前分布としてベイズ統計で重要。期待値 \\(\\alpha/(\\alpha+\\beta)\\)。"
            },
            {
                question: "ベータ関数の定義",
                answer: "$$B(\\alpha,\\beta) = \\int_0^1 x^{\\alpha-1}(1-x)^{\\beta-1}\\,dx$$",
                supplement: "ガンマ関数との関係：\\(B(\\alpha,\\beta) = \\frac{\\Gamma(\\alpha)\\Gamma(\\beta)}{\\Gamma(\\alpha+\\beta)}\\)。"
            },
            {
                question: "負の二項分布",
                answer: "$$P(X=k) = \\binom{k+r-1}{r-1} p^r (1-p)^k$$",
                supplement: "成功回数が \\(r\\) 回になるまでの失敗回数 \\(k\\) の分布。\\(r=1\\) のとき幾何分布になる。"
            },
            {
                question: "再生性 (Reproductive Property)",
                answer: "$$X \\sim N(\\mu_1, \\sigma_1^2),\\; Y \\sim N(\\mu_2, \\sigma_2^2) \\Rightarrow X+Y \\sim N(\\mu_1+\\mu_2, \\sigma_1^2+\\sigma_2^2)$$",
                supplement: "正規分布、ポアソン分布、カイ二乗分布、ガンマ分布が持つ「足しても分布の形が変わらない」性質。独立が必要。"
            },
            {
                question: "正規分布 → カイ二乗分布の関係",
                answer: "$$Z_i \\sim N(0,1) \\Rightarrow \\sum_{i=1}^n Z_i^2 \\sim \\chi^2(n)$$",
                supplement: "標準正規分布の二乗和はカイ二乗分布に従う。自由度 \\(n\\)。"
            },
            {
                question: "カイ二乗分布 → F分布の関係",
                answer: "$$\\frac{\\chi_1^2/n_1}{\\chi_2^2/n_2} \\sim F(n_1, n_2)$$",
                supplement: "2つの独立なカイ二乗分布の比がF分布に従う。分散分析の理論的基礎。"
            },
            {
                question: "t分布の構成",
                answer: "$$t = \\frac{Z}{\\sqrt{\\chi^2/n}} \\sim t(n)$$",
                supplement: "標準正規分布と独立なカイ二乗分布の比で構成される。\\(n \\to \\infty\\) で標準正規分布に収束する。"
            }
        ]
    },
    {
        id: "estimation",
        name: "推定理論（点推定・最尤法）",
        icon: "🎯",
        color: "#00B894",
        items: [
            {
                question: "不偏性 (Unbiasedness)",
                answer: "$$E[\\hat{\\theta}] = \\theta$$",
                supplement: "推定量の期待値が真の値に一致する性質。不偏推定量は必ずしも最良ではない。"
            },
            {
                question: "有効性 (Efficiency)",
                answer: "不偏推定量の中で分散が最小のものが最も有効。",
                supplement: "クラメール・ラオの下限を達成する推定量を「有効推定量」と呼ぶ。"
            },
            {
                question: "一致性 (Consistency)",
                answer: "$$\\lim_{n \\to \\infty} P(|\\hat{\\theta}_n - \\theta| > \\epsilon) = 0 \\quad (\\forall \\epsilon > 0)$$",
                supplement: "サンプルサイズが大きくなるにつれて推定量が真の値に確率収束する性質。"
            },
            {
                question: "平均二乗誤差 (MSE)",
                answer: "$$MSE(\\hat{\\theta}) = E[(\\hat{\\theta} - \\theta)^2] = V(\\hat{\\theta}) + (\\text{Bias})^2$$",
                supplement: "推定量の良さを評価する指標。分散＋バイアスの2乗。不偏推定量なら分散と一致する。"
            },
            {
                question: "尤度関数 (Likelihood Function)",
                answer: "$$L(\\theta) = \\prod_{i=1}^{n} f(x_i; \\theta)$$",
                supplement: "同時確率密度関数をパラメータ \\(\\theta\\) の関数とみなしたもの。観測データは固定、パラメータが変数。"
            },
            {
                question: "対数尤度関数",
                answer: "$$\\ell(\\theta) = \\log L(\\theta) = \\sum_{i=1}^{n} \\log f(x_i; \\theta)$$",
                supplement: "これを \\(\\theta\\) で微分して0とおいて解くと最尤推定量(MLE)が得られる。スコア関数 \\(s(\\theta) = \\ell'(\\theta)\\)。"
            },
            {
                question: "最尤推定量 (MLE) の漸近的性質",
                answer: "$$\\hat{\\theta}_{MLE} \\xrightarrow{d} N\\left(\\theta, \\frac{1}{nI(\\theta)}\\right)$$",
                supplement: "MLEは漸近的に正規分布に従い、漸近的に有効（クラメール・ラオの下限を達成）。"
            },
            {
                question: "フィッシャー情報量 \\(I(\\theta)\\)",
                answer: "$$I(\\theta) = -E\\left[\\frac{\\partial^2}{\\partial \\theta^2} \\log f(X; \\theta)\\right]$$",
                supplement: "データがパラメータについてどれだけ情報を持っているかを表す。\\(I(\\theta) = E[s(\\theta)^2]\\) とも表せる。"
            },
            {
                question: "クラメール・ラオの不等式",
                answer: "$$V(\\hat{\\theta}) \\geq \\frac{1}{nI(\\theta)}$$",
                supplement: "不偏推定量の分散には下限があることの証明。この下限を達成する推定量を「有効推定量」と呼ぶ。"
            },
            {
                question: "十分統計量 (Sufficient Statistic)",
                answer: "フィッシャー・ネイマンの分解定理：$$L(\\theta; \\mathbf{x}) = g(T(\\mathbf{x}); \\theta) \\cdot h(\\mathbf{x})$$",
                supplement: "データ \\(\\mathbf{x}\\) の情報が統計量 \\(T(\\mathbf{x})\\) に集約されている条件。条件付き分布が \\(\\theta\\) に依存しない。"
            },
            {
                question: "完備十分統計量",
                answer: "十分統計量 \\(T\\) で、\\(E[g(T)] = 0 \\; \\forall \\theta \\Rightarrow g(T) = 0\\) a.s. が成り立つもの。",
                supplement: "レーマン・シェフェの定理：完備十分統計量の関数である不偏推定量は一様最小分散不偏推定量 (UMVUE)。"
            },
            {
                question: "ラオ・ブラックウェルの定理",
                answer: "不偏推定量を十分統計量で条件付き期待値をとると、分散が小さくなる（改善される）。",
                supplement: "$$\\tilde{\\theta} = E[\\hat{\\theta} | T] \\Rightarrow V(\\tilde{\\theta}) \\leq V(\\hat{\\theta})$$"
            },
            {
                question: "指数型分布族",
                answer: "$$f(x; \\theta) = h(x) \\exp\\left[\\eta(\\theta) \\cdot T(x) - A(\\theta)\\right]$$",
                supplement: "正規分布、ポアソン分布、二項分布、指数分布、ガンマ分布等が含まれる。十分統計量が自然に求まる。"
            },
            {
                question: "モーメント法 (Method of Moments)",
                answer: "標本モーメント \\(\\frac{1}{n}\\sum X_i^k\\) を母モーメント \\(E[X^k]\\) と等しいとおいてパラメータを推定する。",
                supplement: "MLEより計算が簡単だが、一般に効率が劣る。一致性は通常成り立つ。"
            }
        ]
    },
    {
        id: "testing_theory",
        name: "検定理論（検出力・尤度比）",
        icon: "⚖️",
        color: "#E17055",
        items: [
            {
                question: "検出力 (Power)",
                answer: "$$1 - \\beta = P(\\text{reject } H_0 | H_1 \\text{ is true})$$",
                supplement: "対立仮説が正しいときに、正しく棄却できる確率。サンプルサイズ・効果量・有意水準に依存する。"
            },
            {
                question: "検出力関数",
                answer: "$$\\pi(\\theta) = P(\\text{reject } H_0 | \\theta)$$",
                supplement: "パラメータの値に対する棄却確率を表す関数。\\(\\theta = \\theta_0\\) での値が有意水準 \\(\\alpha\\)。"
            },
            {
                question: "ネイマン・ピアソンの基本定理",
                answer: "$$\\frac{L(\\theta_1; \\mathbf{x})}{L(\\theta_0; \\mathbf{x})} > k \\text{ ならば } H_0 \\text{ を棄却}$$",
                supplement: "単純仮説対単純仮説において、尤度比検定が「最強力検定（最も検出力が高い）」であることを保証する。"
            },
            {
                question: "一様最強力検定 (UMP)",
                answer: "すべての \\(\\theta \\in \\Theta_1\\) に対して最も検出力が高い検定。",
                supplement: "一般には存在しないことが多い。単調尤度比を持つ分布族で片側検定の場合に存在する。"
            },
            {
                question: "尤度比検定 (Likelihood Ratio Test)",
                answer: "$$\\lambda = \\frac{\\max_{\\theta \\in \\Theta_0} L(\\theta)}{\\max_{\\theta \\in \\Theta} L(\\theta)}$$",
                supplement: "一般的な検定手法。\\(-2 \\log \\lambda\\) は漸近的にカイ二乗分布に従う（ウィルクスの定理）。"
            },
            {
                question: "ウィルクスの定理",
                answer: "$$-2 \\log \\lambda \\xrightarrow{d} \\chi^2(r)$$",
                supplement: "\\(r\\) は \\(\\Theta\\) と \\(\\Theta_0\\) の次元の差。大標本での近似検定に使用。"
            },
            {
                question: "スコア検定 (Score Test / Rao's Test)",
                answer: "$$S = \\frac{s(\\theta_0)^2}{I(\\theta_0)} \\xrightarrow{d} \\chi^2(1)$$",
                supplement: "帰無仮説の下でのみパラメータ推定すればよい利点がある。制約付き推定の計算コストが低い。"
            },
            {
                question: "ワルド検定 (Wald Test)",
                answer: "$$W = \\frac{(\\hat{\\theta} - \\theta_0)^2}{V(\\hat{\\theta})} \\xrightarrow{d} \\chi^2(1)$$",
                supplement: "MLE \\(\\hat{\\theta}\\) のみ計算すればよい。3大漸近検定（尤度比・スコア・ワルド）の一つ。"
            },
            {
                question: "ピボット量",
                answer: "分布がパラメータに依存しない統計量。例：\\(\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t(n-1)\\)",
                supplement: "信頼区間や検定統計量の構成に利用。分布が既知なので棄却域が定まる。"
            }
        ]
    },
    {
        id: "asymptotic",
        name: "漸近理論・収束",
        icon: "🔄",
        color: "#0984E3",
        items: [
            {
                question: "大数の弱法則 (WLLN)",
                answer: "$$\\bar{X}_n \\xrightarrow{p} \\mu$$",
                supplement: "標本平均が母平均に確率収束する。チェビシェフの不等式から証明可能。"
            },
            {
                question: "大数の強法則 (SLLN)",
                answer: "$$P\\left(\\lim_{n \\to \\infty} \\bar{X}_n = \\mu\\right) = 1$$",
                supplement: "概収束（ほぼ確実に収束）。弱法則より強い主張。"
            },
            {
                question: "中心極限定理 (CLT)",
                answer: "$$\\sqrt{n}(\\bar{X} - \\mu) \\xrightarrow{d} N(0, \\sigma^2)$$",
                supplement: "元の分布が何であれ（分散が存在すれば）、標本平均の分布は正規分布に近づく。分布収束。"
            },
            {
                question: "確率収束 vs 分布収束",
                answer: "確率収束 \\(\\xrightarrow{p}\\) は分布収束 \\(\\xrightarrow{d}\\) より強い。定数への分布収束は確率収束と同値。",
                supplement: "概収束 ⊂ 確率収束 ⊂ 分布収束。"
            },
            {
                question: "スラツキーの定理 (Slutsky's Theorem)",
                answer: "$$X_n \\xrightarrow{d} X,\\; Y_n \\xrightarrow{p} c \\Rightarrow X_n Y_n \\xrightarrow{d} cX$$",
                supplement: "確率収束する確率変数と分布収束する確率変数の積や和の極限を扱う。漸近分布の導出に必須。"
            },
            {
                question: "連続写像定理 (Continuous Mapping Theorem)",
                answer: "$$X_n \\xrightarrow{d} X \\Rightarrow g(X_n) \\xrightarrow{d} g(X) \\quad (g \\text{が連続})$$",
                supplement: "確率収束・概収束でも成り立つ。応用範囲が広い。"
            },
            {
                question: "デルタ法 (Delta Method)",
                answer: "$$\\sqrt{n}(g(\\bar{X}) - g(\\mu)) \\xrightarrow{d} N(0, [g'(\\mu)]^2 \\sigma^2)$$",
                supplement: "推定量の非線形変換（対数など）をした後の分散推定に使う。テイラー展開の1次近似に基づく。"
            },
            {
                question: "多変量デルタ法",
                answer: "$$\\sqrt{n}(g(\\bar{\\mathbf{X}}) - g(\\boldsymbol{\\mu})) \\xrightarrow{d} N(0, \\nabla g^T \\Sigma \\nabla g)$$",
                supplement: "勾配ベクトル \\(\\nabla g\\) と共分散行列 \\(\\Sigma\\) を用いたベクトル版。"
            }
        ]
    },
    {
        id: "multivariate",
        name: "多変量解析・線形モデル",
        icon: "📊",
        color: "#FDCB6E",
        items: [
            {
                question: "多変量正規分布",
                answer: "$$f(\\mathbf{x}) = \\frac{1}{(2\\pi)^{p/2}|\\Sigma|^{1/2}} \\exp\\left(-\\frac{1}{2}(\\mathbf{x}-\\boldsymbol{\\mu})^T \\Sigma^{-1} (\\mathbf{x}-\\boldsymbol{\\mu})\\right)$$",
                supplement: "\\(p\\) 次元の正規分布。周辺分布も条件付き分布も正規分布になる。"
            },
            {
                question: "分散共分散行列 \\(\\Sigma\\)",
                answer: "$$\\Sigma = E[(\\mathbf{X} - \\boldsymbol{\\mu})(\\mathbf{X} - \\boldsymbol{\\mu})^T]$$",
                supplement: "対角成分に分散、非対角成分に共分散が並ぶ対称行列。半正定値行列。"
            },
            {
                question: "マハラノビス距離",
                answer: "$$D^2 = (\\mathbf{x} - \\boldsymbol{\\mu})^T \\Sigma^{-1} (\\mathbf{x} - \\boldsymbol{\\mu})$$",
                supplement: "変数間の相関を考慮した距離。外れ値検知などで使われる。\\(\\Sigma = I\\) なら通常のユークリッド距離。"
            },
            {
                question: "重回帰分析のOLS推定量（行列）",
                answer: "$$\\hat{\\boldsymbol{\\beta}} = (X^T X)^{-1} X^T \\mathbf{y}$$",
                supplement: "誤差二乗和 \\(S(\\boldsymbol{\\beta}) = (\\mathbf{y} - X\\boldsymbol{\\beta})^T(\\mathbf{y} - X\\boldsymbol{\\beta})\\) を \\(\\boldsymbol{\\beta}\\) で微分して0とおくことで導出。"
            },
            {
                question: "OLS推定量の分散共分散行列",
                answer: "$$V(\\hat{\\boldsymbol{\\beta}}) = \\sigma^2 (X^T X)^{-1}$$",
                supplement: "帽子行列 \\(H = X(X^TX)^{-1}X^T\\)。予測値 \\(\\hat{\\mathbf{y}} = H\\mathbf{y}\\)。"
            },
            {
                question: "ガウス・マルコフの定理",
                answer: "誤差項が等分散・無相関であれば、OLS推定量は最良線形不偏推定量 (BLUE) である。",
                supplement: "正規分布を仮定しなくても成り立つ重要な定理。分散が最小であることを保証する。"
            },
            {
                question: "主成分分析 (PCA)",
                answer: "$$z_1 = a_1 x_1 + \\cdots + a_p x_p$$（分散最大化）",
                supplement: "分散共分散行列 \\(\\Sigma\\) の固有値分解で主成分を求める。固有値 = 主成分の分散。"
            },
            {
                question: "寄与率 (Proportion of Variance)",
                answer: "$$\\frac{\\lambda_k}{\\sum \\lambda_i}$$",
                supplement: "第 \\(k\\) 主成分が全分散の何%を説明するか。累積寄与率80%程度を目安に次元を削減する。"
            },
            {
                question: "多重共線性 (Multicollinearity)",
                answer: "説明変数同士の相関が高すぎる状態。VIF > 10 なら疑いあり。",
                supplement: "\\(VIF_j = \\frac{1}{1-R_j^2}\\)。回帰係数の分散が大きくなり、推定が不安定になる。"
            },
            {
                question: "ロジスティック回帰",
                answer: "$$\\ln\\left(\\frac{p}{1-p}\\right) = \\beta_0 + \\beta_1 x$$",
                supplement: "目的変数が2値の確率モデル。左辺は対数オッズ（ロジット）。最尤法で推定する。"
            },
            {
                question: "オッズ比 (Odds Ratio)",
                answer: "$$\\frac{p/(1-p)}{q/(1-q)}$$",
                supplement: "ロジスティック回帰の係数 \\(\\beta\\) の指数変換 \\(e^\\beta\\) に対応。"
            },
            {
                question: "判別分析 (Discriminant Analysis)",
                answer: "群間分散を最大化し、群内分散を最小化する判別関数を求める。",
                supplement: "フィッシャーの線形判別。2群の場合はロジスティック回帰と類似の結果を与える。"
            }
        ]
    },
    {
        id: "stochastic_process",
        name: "確率過程・マルコフ連鎖",
        icon: "🔗",
        color: "#A29BFE",
        items: [
            {
                question: "マルコフ連鎖の推移確率行列",
                answer: "$$P = [p_{ij}] \\quad \\text{ただし} \\quad \\sum_j p_{ij} = 1$$",
                supplement: "状態 \\(i\\) から状態 \\(j\\) へ遷移する確率を並べた行列。各行の和が1。"
            },
            {
                question: "チャップマン・コルモゴロフの方程式",
                answer: "$$p_{ij}^{(m+n)} = \\sum_k p_{ik}^{(m)} p_{kj}^{(n)}$$",
                supplement: "\\(m+n\\) ステップ後の遷移確率は途中のステップ \\(k\\) を経由する確率の和。行列の積 \\(P^{m+n} = P^m P^n\\) に対応。"
            },
            {
                question: "定常分布 (Stationary Distribution)",
                answer: "$$\\boldsymbol{\\pi} P = \\boldsymbol{\\pi}$$",
                supplement: "時間が経過しても変化しない確率分布。固有値1に対応する左固有ベクトルを求める。エルゴード性があれば一意に存在。"
            },
            {
                question: "既約性 (Irreducibility)",
                answer: "すべての状態間を有限ステップで移動可能。",
                supplement: "マルコフ連鎖が一つの連結した状態空間を持つこと。"
            },
            {
                question: "非周期性 (Aperiodicity)",
                answer: "状態への回帰が特定の周期を持たない。",
                supplement: "既約かつ非周期なら「エルゴード的」。定常分布が一意に存在し、初期状態に依存しない。"
            },
            {
                question: "ポアソン過程",
                answer: "$$P(N(t) = k) = \\frac{(\\lambda t)^k}{k!} e^{-\\lambda t}$$",
                supplement: "ランダムな事象の発生回数 \\(N(t)\\) が従う確率過程。到着間隔は指数分布に従う。独立増分性を持つ。"
            },
            {
                question: "ランダムウォーク (Random Walk)",
                answer: "$$y_t = y_{t-1} + \\epsilon_t$$",
                supplement: "次の値が「現在の値＋ノイズ」で決まる。分散が時間とともに拡大するため非定常。"
            }
        ]
    },
    {
        id: "timeseries_nonparam",
        name: "時系列解析・ノンパラメトリック",
        icon: "📉",
        color: "#E84393",
        items: [
            {
                question: "弱定常性 (Weak Stationarity)",
                answer: "①平均が一定 ②分散が一定 ③自己共分散が時点差のみに依存",
                supplement: "多くの時系列モデル（AR, MA等）が前提とする。分布の形が変わらないことまでは要求しない。"
            },
            {
                question: "自己相関関数 (ACF)",
                answer: "$$\\rho_k = \\frac{\\text{Cov}(y_t, y_{t-k})}{\\sqrt{V(y_t) V(y_{t-k})}}$$",
                supplement: "\\(k\\) 時点離れたデータ同士の相関。コレログラム（グラフ）で周期性を確認。MA(q)モデルでは \\(k>q\\) で0に。"
            },
            {
                question: "偏自己相関関数 (PACF)",
                answer: "時点 \\(t\\) と \\(t-k\\) の間のデータの影響を取り除いた純粋な相関。",
                supplement: "AR(p)モデルの次数決定に用いる。AR(p)では \\(k>p\\) で0に。"
            },
            {
                question: "AR(p) モデル",
                answer: "$$y_t = c + \\phi_1 y_{t-1} + \\cdots + \\phi_p y_{t-p} + \\epsilon_t$$",
                supplement: "自己回帰モデル。定常条件：特性方程式の根がすべて単位円の外。PACFが次数 \\(p\\) で途切れる。"
            },
            {
                question: "MA(q) モデル",
                answer: "$$y_t = \\mu + \\epsilon_t + \\theta_1 \\epsilon_{t-1} + \\cdots + \\theta_q \\epsilon_{t-q}$$",
                supplement: "移動平均モデル。常に定常。ACFが次数 \\(q\\) で途切れる。"
            },
            {
                question: "ARMA(p,q) モデル",
                answer: "AR(p)とMA(q)を組み合わせたモデル。",
                supplement: "ACF、PACFともに徐々に減衰する場合に適する。AICやBICで次数を選択。"
            },
            {
                question: "単位根検定 (Unit Root Test)",
                answer: "データが非定常（ランダムウォークなど）かどうかを調べる検定。",
                supplement: "ADF検定が代表的。帰無仮説は「単位根がある（非定常）」。棄却 → 定常とみなせる。"
            },
            {
                question: "見せかけの回帰 (Spurious Regression)",
                answer: "無関係な非定常データ同士で回帰分析を行うと、有意な相関が出てしまう現象。",
                supplement: "差分をとって定常化するか、共和分検定を行うことで防ぐ。"
            },
            {
                question: "共和分 (Cointegration)",
                answer: "非定常な系列同士の線形結合が定常になる関係。",
                supplement: "長期的な均衡関係がある。Engle-Granger法やJohansen法で検定。"
            },
            {
                question: "ウィルコクソンの順位和検定",
                answer: "2つの群の中央値に差があるかを、順位を用いて検定する。",
                supplement: "対応のないt検定のノンパラメトリック版。Mann-Whitney U検定とも。正規分布を仮定できない場合に使用。"
            },
            {
                question: "ウィルコクソンの符号付順位検定",
                answer: "差の絶対値に順位をつけ、符号を考慮して検定する。",
                supplement: "対応のあるt検定のノンパラメトリック版。差が0のデータは除外する。"
            },
            {
                question: "クラスカル・ウォリス検定",
                answer: "3群以上の中央値に差があるかを順位を用いて検定する。",
                supplement: "一元配置分散分析のノンパラメトリック版。帰無仮説は全群の分布が同一。"
            },
            {
                question: "スピアマンの順位相関係数",
                answer: "データの順位を用いて計算した相関係数。外れ値に強い。",
                supplement: "\\(r_s = 1 - \\frac{6\\sum d_i^2}{n(n^2-1)}\\)。単調増加/減少の関係を検出。"
            }
        ]
    },
    {
        id: "bayesian",
        name: "ベイズ統計・計算手法",
        icon: "🧮",
        color: "#FD79A8",
        items: [
            {
                question: "ベイズの定理（パラメータ推定）",
                answer: "$$\\pi(\\theta | \\mathbf{x}) \\propto f(\\mathbf{x} | \\theta) \\cdot \\pi(\\theta)$$",
                supplement: "事後分布 ∝ 尤度 × 事前分布。データを観測した後にパラメータの確信度を更新する。"
            },
            {
                question: "共役事前分布 (Conjugate Prior)",
                answer: "事前分布と事後分布が同じ確率分布族になるような事前分布。",
                supplement: "尤度が二項分布 → 事前はベータ分布。尤度が正規分布（分散既知）→ 事前も正規分布。尤度がポアソン → 事前はガンマ分布。"
            },
            {
                question: "事後予測分布",
                answer: "$$f(x_{new}|\\mathbf{x}) = \\int f(x_{new}|\\theta) \\pi(\\theta|\\mathbf{x})\\,d\\theta$$",
                supplement: "パラメータの不確実性を統合した予測分布。ベイズ統計の大きな利点。"
            },
            {
                question: "ベイズ推定量（二乗誤差損失）",
                answer: "事後分布の期待値 \\(E[\\theta | \\mathbf{x}]\\)",
                supplement: "損失関数が絶対誤差なら事後中央値、0-1損失なら事後最頻値（MAP推定）。"
            },
            {
                question: "マルコフ連鎖モンテカルロ法 (MCMC)",
                answer: "目的の分布（事後分布など）を定常分布とするマルコフ連鎖を生成し、サンプリングする手法。",
                supplement: "複雑なベイズモデルの事後分布を数値的に求めるための標準的アルゴリズム。"
            },
            {
                question: "メトロポリス・ヘイスティングス法 (MH)",
                answer: "$$\\alpha = \\min\\left(1, \\frac{\\pi(y)q(x|y)}{\\pi(x)q(y|x)}\\right)$$",
                supplement: "提案分布から候補を生成し、採択確率 \\(\\alpha\\) で受理/棄却を判定。\\(\\pi\\) は目的の分布。"
            },
            {
                question: "ギブスサンプリング (Gibbs Sampling)",
                answer: "多変量分布において、他の変数を固定した条件付き分布から交互にサンプリング。",
                supplement: "MH法の特殊ケース（採択確率が常に1）。条件付き分布が既知の場合に効率的。"
            },
            {
                question: "正則化 (Regularization)",
                answer: "損失関数にペナルティ項を加えて最小化。過学習を防ぐ。",
                supplement: "ベイズ的解釈：L2正則化は正規事前分布、L1正則化はラプラス事前分布に対応。"
            },
            {
                question: "Lasso回帰 (L1正則化)",
                answer: "$$\\sum(y_i - \\hat{y}_i)^2 + \\lambda \\sum|\\beta_j|$$",
                supplement: "一部の係数を正確に0にする（スパース性）。変数選択の効果がある。"
            },
            {
                question: "Ridge回帰 (L2正則化)",
                answer: "$$\\sum(y_i - \\hat{y}_i)^2 + \\lambda \\sum \\beta_j^2$$",
                supplement: "係数を0にはしないが全体的に小さく抑える。多重共線性の対処に有効。"
            },
            {
                question: "バイアス・バリアンス分解",
                answer: "$$E[(y - \\hat{f})^2] = \\text{Bias}^2 + \\text{Variance} + \\sigma^2$$",
                supplement: "予測誤差のトレードオフ。モデルが複雑すぎるとバリアンス増大、単純すぎるとバイアス増大。"
            },
            {
                question: "交差検証 (Cross Validation)",
                answer: "データを訓練用と検証用に分割し、モデルの性能を評価する。",
                supplement: "K-分割交差検証（K-Fold CV）が一般的。過学習を防ぐためのモデル選択に必須。"
            }
        ]
    },
    {
        id: "model_diagnostics",
        name: "モデル診断・情報量基準",
        icon: "🔍",
        color: "#00CEC9",
        items: [
            {
                question: "赤池情報量基準 (AIC)",
                answer: "$$AIC = -2 \\ln L + 2k$$",
                supplement: "モデル比較指標。パラメータ数 \\(k\\) でペナルティ。値が小さいほど良い。"
            },
            {
                question: "ベイズ情報量基準 (BIC)",
                answer: "$$BIC = -2 \\ln L + k \\ln n$$",
                supplement: "AICよりサンプルサイズ \\(n\\) が大きい場合にペナルティが強い。パーシモニーなモデルを好む。"
            },
            {
                question: "ダービン・ワトソン比 (DW)",
                answer: "残差に自己相関があるかを検定。0 ≤ DW ≤ 4。",
                supplement: "2付近なら問題なし。0に近いと正の相関、4に近いと負の相関。時系列データで重要。"
            },
            {
                question: "ブルーシュ・ペガン検定",
                answer: "残差の分散が均一かどうか（不均一分散）を検定する。",
                supplement: "分散が不均一だと通常のOLSのt検定が無効に。頑健標準誤差を使用する。"
            },
            {
                question: "ジャック・ベラ検定 (Jarque-Bera)",
                answer: "残差が正規分布に従うかを歪度と尖度で検定。",
                supplement: "$$JB = \\frac{n}{6}\\left(S^2 + \\frac{(K-3)^2}{4}\\right) \\sim \\chi^2(2)$$"
            },
            {
                question: "クックの距離 (Cook's Distance)",
                answer: "各観測値が回帰係数に与える影響の大きさを測る指標。",
                supplement: "\\(D_i > 1\\) または \\(D_i > 4/n\\) なら影響が大きい。外れ値・てこ比の検出に利用。"
            },
            {
                question: "赤池情報量基準の導出の意味",
                answer: "真の分布と推定モデルのKL情報量の推定量を最小化するモデル選択基準。",
                supplement: "KLダイバージェンス \\(D_{KL}(f \\| g) = \\int f \\log \\frac{f}{g}\\) の推定に基づく。"
            }
        ]
    },
    {
        id: "advanced_multivariate",
        name: "多変量解析・ノンパラ（発展）",
        icon: "🧬",
        color: "#fa8231",
        items: [
            {
                question: "正準相関分析 (CCA)",
                answer: "2つの変数群 \\(\\mathbf{x}, \\mathbf{y}\\) の間の相関が最大になるような線形結合を求める。",
                supplement: "$$u = \\mathbf{a}^T \\mathbf{x}, v = \\mathbf{b}^T \\mathbf{y}$$ の相関 \\(\\rho(u,v)\\) を最大化。一般化固有値問題に帰着。"
            },
            {
                question: "因子分析 (Factor Analysis)",
                answer: "$$\\mathbf{x} = \\Lambda \\mathbf{f} + \\mathbf{e}$$",
                supplement: "観測変数 \\(\\mathbf{x}\\) の背後に潜むさらに少数の共通因子 \\(\\mathbf{f}\\) を推定。\\(\\Lambda\\): 因子負荷行列。主成分分析と異なり誤差項を含む。"
            },
            {
                question: "因子回転 (Factor Rotation)",
                answer: "因子の解釈を容易にするために軸を回転させる操作。",
                supplement: "バリマックス回転（直交回転）：因子負荷の分散を最大化。プロマックス回転（斜交回転）：因子間の相関を許容。"
            },
            {
                question: "クラスター分析（階層型）",
                answer: "個体を類似度に基づいて段階的に結合していく手法。",
                supplement: "距離：ユークリッド、マハラノビス。結合法：ウォード法（分散最小化）、最短距離法、群平均法。デンドログラムで可視化。"
            },
            {
                question: "k-means法（非階層型）",
                answer: "事前にクラスタ数 \\(k\\) を決め、重心との距離でクラスタを反復更新する。",
                supplement: "計算が高速。初期値依存性あり。目的関数は全クラスタ内の分散和の最小化。"
            },
            {
                question: "カーネル密度推定 (KDE)",
                answer: "$$\\hat{f}(x) = \\frac{1}{nh} \\sum_{i=1}^n K\\left(\\frac{x-x_i}{h}\\right)$$",
                supplement: "ヒストグラムの平滑化。バンド幅 \\(h\\) の選択が重要（過度だと平坦、過小だとギザギザ）。非パラメトリックな分布推定。"
            },
            {
                question: "スペクトル分析",
                answer: "時系列データを周波数領域に変換して解析する手法。",
                supplement: "パワースペクトル密度関数 \\(f(\\lambda)\\) は自己共分散関数のフーリエ変換。周期性の発見に有効。"
            },
            {
                question: "カルマンフィルタ",
                answer: "状態空間モデルの状態を逐次的に推定するアルゴリズム。",
                supplement: "観測方程式 \\(\\mathbf{y}_t = H_t \\mathbf{x}_t + \\mathbf{v}_t\\) と状態方程式 \\(\\mathbf{x}_t = F_t \\mathbf{x}_{t-1} + \\mathbf{w}_t\\)。予測ステップと更新ステップを繰り返す。"
            }
        ]
    }
];
