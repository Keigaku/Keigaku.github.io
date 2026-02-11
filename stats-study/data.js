// 統計検定二級 暗記データ
// カテゴリ別に用語・公式を構造化

const STATS_DATA = [
  {
    id: "descriptive",
    name: "データの記述・要約",
    icon: "📊",
    color: "#6C5CE7",
    items: [
      {
        question: "名義尺度 (Nominal Scale)",
        answer: "分類や識別のためのラベル。大小関係なし。",
        supplement: "例：性別、血液型、郵便番号。度数や最頻値のみ意味を持つ。"
      },
      {
        question: "順序尺度 (Ordinal Scale)",
        answer: "順序や大小関係があるが、間隔は等しくない。",
        supplement: "例：ランキング、成績（優・良・可）。中央値、四分位数、順位相関係数が計算可能。"
      },
      {
        question: "間隔尺度 (Interval Scale)",
        answer: "目盛りの間隔が等しいが、絶対的な「0」がない。",
        supplement: "例：摂氏温度、西暦。加減算は意味を持つが、乗除算（比率）は意味を持たない。平均、分散が計算可能。"
      },
      {
        question: "比例尺度 (Ratio Scale)",
        answer: "絶対的な「0」があり、比率に意味がある。",
        supplement: "例：身長、体重、金額、時間。全ての四則演算が可能。幾何平均、変動係数が計算可能。"
      },
      {
        question: "算術平均 (Mean)",
        answer: "$$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$$",
        supplement: "最も一般的な平均。外れ値の影響を受けやすい。"
      },
      {
        question: "幾何平均 (Geometric Mean)",
        answer: "$$G = \\sqrt[n]{x_1 \\times x_2 \\times \\cdots \\times x_n}$$",
        supplement: "成長率や比率の平均に適する。対数をとると算術平均になる。"
      },
      {
        question: "調和平均 (Harmonic Mean)",
        answer: "$$H = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}}$$",
        supplement: "速度の平均や、「率」の逆数を扱う際に適する。"
      },
      {
        question: "加重平均 (Weighted Mean)",
        answer: "$$\\bar{x}_w = \\frac{\\sum w_i x_i}{\\sum w_i}$$",
        supplement: "データの重要度（重み \\(w_i\\)）が異なる場合の平均。重み30%なら0.3×その値。"
      },
      {
        question: "中央値 (Median)",
        answer: "データを順に並べたときの中央の値。位置は $$\\frac{n+1}{2}$$ 番目。",
        supplement: "データ数が偶数の場合は、中央2つの値の平均をとる。外れ値に強い（ロバスト）。"
      },
      {
        question: "最頻値 (Mode)",
        answer: "データの中で最も頻繁に出現する値。",
        supplement: "名義尺度でも使える唯一の代表値。複数存在することもある。"
      },
      {
        question: "第1四分位数 (Q1)",
        answer: "データを小さい順に並べたとき、下位25%に位置する値。位置の目安：$$\\frac{n+1}{4}$$",
        supplement: "データの散らばりを見る際に使用。四分位範囲 IQR = Q3 - Q1。"
      },
      {
        question: "第3四分位数 (Q3)",
        answer: "データを小さい順に並べたとき、上位25%（下位75%）に位置する値。位置の目安：$$\\frac{3(n+1)}{4}$$",
        supplement: "箱ひげ図の上端に対応する。"
      },
      {
        question: "四分位範囲 (IQR)",
        answer: "$$\\text{IQR} = Q_3 - Q_1$$",
        supplement: "中央50%のデータの散らばり。外れ値の検出にも使われる（1.5×IQR ルール）。"
      },
      {
        question: "分散 (Variance)",
        answer: "$$s^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$$",
        supplement: "データの散らばりの大きさ。平均値からの偏差の二乗平均。※不偏分散とは分母が異なるので注意。"
      },
      {
        question: "分散の簡易計算式",
        answer: "$$s^2 = \\overline{x^2} - (\\bar{x})^2$$",
        supplement: "「二乗の平均」引く「平均の二乗」。計算問題で多用する。"
      },
      {
        question: "標準偏差 (Standard Deviation)",
        answer: "$$s = \\sqrt{s^2}$$",
        supplement: "分散の平方根。単位が元のデータと同じになるため解釈しやすい。"
      },
      {
        question: "変動係数 (CV)",
        answer: "$$CV = \\frac{s}{\\bar{x}}$$",
        supplement: "単位の異なるデータや平均値が大きく異なるデータ間で、相対的な散らばりを比較する指標。"
      },
      {
        question: "標準化 (Z得点)",
        answer: "$$z_i = \\frac{x_i - \\bar{x}}{s}$$",
        supplement: "平均0、分散1に変換する操作。偏差値は \\(50 + 10z\\)。"
      },
      {
        question: "歪度 (Skewness)",
        answer: "$$\\frac{1}{n} \\sum \\left( \\frac{x_i - \\bar{x}}{s} \\right)^3$$",
        supplement: "分布の非対称性。0：対称、正：右に裾が長い、負：左に裾が長い。"
      },
      {
        question: "尖度 (Kurtosis)",
        answer: "$$\\frac{1}{n} \\sum \\left( \\frac{x_i - \\bar{x}}{s} \\right)^4$$",
        supplement: "分布の尖り具合（裾の重さ）。正規分布は3。3より大：正規分布より尖っている。3より小：正規分布より平坦。"
      },
      {
        question: "相対度数",
        answer: "$$\\text{相対度数} = \\frac{\\text{階級の度数}}{\\text{全体の度数の合計}}$$",
        supplement: "各階級がデータ全体に占める割合。ヒストグラムの縦軸に用いることがある。"
      },
      {
        question: "k期移動平均",
        answer: "$$MA_t = \\frac{1}{k} \\sum_{i=-(k-1)/2}^{(k-1)/2} Y_{t+i}$$",
        supplement: "3期移動平均：\\(MA_t = \\frac{Y_{t-1} + Y_t + Y_{t+1}}{3}\\)。時系列データの傾向（トレンド）を把握するために使用。"
      },
      {
        question: "五数要約",
        answer: "最小値、Q1、中央値、Q3、最大値の5つの要約統計量。",
        supplement: "箱ひげ図の描画に使用される。データの分布の形状を簡潔に表す。"
      },
      {
        question: "箱ひげ図と外れ値",
        answer: "第1四分位数 - 1.5×IQR 以下、または 第3四分位数 + 1.5×IQR 以上の値を外れ値とみなす。",
        supplement: "箱の長さ（IQR）の1.5倍以上離れた値を点としてプロットする基準が一般的。"
      },
      {
        question: "ローレンツ曲線とジニ係数",
        answer: "所得格差などの不平等度を測る指標。ジニ係数は0（完全平等）から1（完全不平等）の値をとる。",
        supplement: "ローレンツ曲線と完全平等線で囲まれた面積の2倍がジニ係数。"
      },
      {
        question: "幹葉図 (Stem-and-Leaf Plot)",
        answer: "データの数値を「幹」と「葉」に分けて表現する図。",
        supplement: "ヒストグラムのような分布形状と、元の数値情報の両方を保持できるのが特徴。"
      }
    ]
  },
  {
    id: "probability",
    name: "確率・確率分布",
    icon: "🎲",
    color: "#00B894",
    items: [
      {
        question: "確率の加法定理",
        answer: "$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$",
        supplement: "AまたはBが起こる確率。排反事象の場合は \\(P(A \\cup B) = P(A) + P(B)\\)。"
      },
      {
        question: "条件付き確率 \\(P(A|B)\\)",
        answer: "$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$",
        supplement: "事象Bが起こったという条件のもとで、事象Aが起こる確率。"
      },
      {
        question: "確率の乗法定理",
        answer: "$$P(A \\cap B) = P(B) \\cdot P(A|B)$$",
        supplement: "条件付き確率の式を変形したもの。AとBが同時に起こる確率。"
      },
      {
        question: "事象の独立",
        answer: "$$P(A \\cap B) = P(A) \\cdot P(B)$$",
        supplement: "AとBが独立である場合の必要十分条件。\\(P(A|B) = P(A)\\) とも同義。"
      },
      {
        question: "全確率の法則",
        answer: "$$P(B) = \\sum_{i=1}^{n} P(B|A_i) \\cdot P(A_i)$$",
        supplement: "互いに排反で全事象を網羅する事象の集合 \\(A_i\\) に対して、任意の事象Bの確率を求める。"
      },
      {
        question: "ベイズの定理",
        answer: "$$P(B|A) = \\frac{P(A|B) \\cdot P(B)}{P(A)}$$",
        supplement: "結果Aから原因Bの確率を逆推定する。\\(P(A)\\) は全確率の公式で分解して計算することが多い。"
      },
      {
        question: "期待値 \\(E(X)\\)",
        answer: "$$E(X) = \\sum_{x} x \\cdot P(X = x)$$",
        supplement: "確率変数Xの平均的な値。xは取りうる値のすべて。"
      },
      {
        question: "期待値の性質",
        answer: "$$E(aX + b) = aE(X) + b$$ $$E(X + Y) = E(X) + E(Y)$$",
        supplement: "期待値は線形性が成り立つ。X,Yが独立でなくても和の期待値は分解できる。"
      },
      {
        question: "分散 \\(V(X)\\) の定義",
        answer: "$$V(X) = E[X^2] - (E[X])^2$$",
        supplement: "「二乗の期待値」から「期待値の二乗」を引いたもの。"
      },
      {
        question: "分散の性質",
        answer: "$$V(aX + b) = a^2 V(X)$$ $$V(X \\pm Y) = V(X) + V(Y) \\quad (\\text{独立時})$$",
        supplement: "定数を足しても分散は変わらない。独立な場合、差の分散も「和」になる点に注意。"
      },
      {
        question: "共分散の定義 \\(\\text{Cov}(X,Y)\\)",
        answer: "$$\\text{Cov}(X,Y) = E[(X - \\mu_X)(Y - \\mu_Y)] = E(XY) - E(X)E(Y)$$",
        supplement: "2変数の相関の強さと方向を示すが、単位に依存する。"
      },
      {
        question: "相関係数 \\(\\rho\\)",
        answer: "$$\\rho = \\frac{\\text{Cov}(X,Y)}{\\sqrt{V(X) \\cdot V(Y)}}$$",
        supplement: "共分散を各標準偏差で割ったもの。-1から1の範囲をとる。"
      },
      {
        question: "ベルヌーイ試行",
        answer: "結果が2通り（成功/失敗）しかない試行。成功確率 \\(p\\)。",
        supplement: "コイン投げが典型例。二項分布やポアソン分布の基礎。"
      },
      {
        question: "二項分布 \\(B(n, p)\\)",
        answer: "$$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$$",
        supplement: "再生性（独立な二項分布の和も二項分布）を持つ（ただしpが共通の場合）。期待値 np, 分散 np(1-p)。"
      },
      {
        question: "ポアソン分布 \\(Po(\\lambda)\\)",
        answer: "$$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$",
        supplement: "期待値＝分散＝λ。再生性（独立なポアソン分布の和もポアソン分布）を持つ。二項分布の極限。"
      },
      {
        question: "幾何分布",
        answer: "$$E(X) = \\frac{1}{p}$$",
        supplement: "初めて成功するまでの試行回数の分布。\\(P(X=k) = (1-p)^{k-1}p\\)。記憶喪失性を持つ。"
      },
      {
        question: "正規分布 \\(N(\\mu, \\sigma^2)\\)",
        answer: "$$f(x) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$",
        supplement: "再生性を持つ（独立な正規分布の和も正規分布）。±1σに約68%、±2σに約95%が含まれる。"
      },
      {
        question: "標準正規分布",
        answer: "$$N(0, 1)$$",
        supplement: "平均0、分散1の正規分布。あらゆる正規分布は標準化 \\(Z = \\frac{X - \\mu}{\\sigma}\\) によってこれに帰着できる。"
      },
      {
        question: "二項分布の正規近似",
        answer: "$$X \\sim B(n, p) \\approx N(np, np(1-p)) \\quad (n\\text{が大きいとき})$$",
        supplement: "\\(np \\geq 5\\) かつ \\(n(1-p) \\geq 5\\) が目安。連続補正を行う場合もある。"
      },
      {
        question: "確率変数の標準化",
        answer: "$$Z = \\frac{X - \\mu}{\\sigma}$$",
        supplement: "任意の正規分布を標準正規分布に変換する操作。検定統計量の算出に不可欠。"
      },
      {
        question: "超幾何分布",
        answer: "非復元抽出（取り出したものを戻さない）における成功回数の分布。",
        supplement: "母集団 \\(N\\) が小さく、サンプル \\(n\\) が大きい場合に二項分布との差が出る。"
      },
      {
        question: "一様分布 \\(U(a,b)\\)",
        answer: "期待値 \\(\\frac{a+b}{2}\\)、分散 \\(\\frac{(b-a)^2}{12}\\)",
        supplement: "\\(a\\) から \\(b\\) までの値が等確率で出る分布。分散の式 \\(\\frac{1}{12}\\) が盲点になりやすい。"
      },
      {
        question: "指数分布",
        answer: "$$f(x) = \\lambda e^{-\\lambda x} \\quad (x \\geq 0)$$ 期待値 \\(\\frac{1}{\\lambda}\\)、分散 \\(\\frac{1}{\\lambda^2}\\)",
        supplement: "ランダムな事象が発生する「間隔」の時間分布。ポアソン分布と対の関係。記憶喪失性を持つ。"
      },
      {
        question: "確率変数の変換（期待値・分散）",
        answer: "$$Y = aX + b \\Rightarrow E(Y) = aE(X) + b, \\quad V(Y) = a^2 V(X)$$",
        supplement: "標準化 \\(Z = (X-\\mu)/\\sigma\\) もこの性質を利用している（\\(a=1/\\sigma, b=-\\mu/\\sigma\\)）。"
      },
      {
        question: "積率母関数 (Moment Generating Function)",
        answer: "$$M_X(t) = E[e^{tX}]$$",
        supplement: "分布を特徴づける関数。これにより平均や分散（モーメント）を導出できる。再生性の証明によく使われる。"
      },
      {
        question: "大数の法則（弱・強）",
        answer: "サンプルサイズを増やすと標本平均が母平均に収束する法則。",
        supplement: "弱法則は「確率収束」、強法則は「概収束」。実用上は「データが増えれば精度が上がる」保証として重要。"
      }
    ]
  },
  {
    id: "inference",
    name: "推測統計（標本分布・推定・検定）",
    icon: "🔬",
    color: "#E17055",
    items: [
      {
        question: "不偏分散 \\(U^2\\)",
        answer: "$$U^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2$$",
        supplement: "母分散の推定量。分母が \\(n-1\\) になるのが重要。標本分散より少し大きくなる。"
      },
      {
        question: "標本平均 \\(\\bar{X}\\) の分布",
        answer: "$$\\bar{X} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$$",
        supplement: "母集団が \\(N(\\mu, \\sigma^2)\\) のとき成立。標本平均の分散はサンプルサイズ \\(n\\) が増えると小さくなる。"
      },
      {
        question: "標準誤差 (SE)",
        answer: "$$SE = \\frac{\\sigma}{\\sqrt{n}}$$",
        supplement: "標本平均の標準偏差。サンプルサイズを4倍にすると標準誤差は半分になる。"
      },
      {
        question: "中心極限定理",
        answer: "母集団の分布に関わらず、\\(n\\) が十分大きければ、標本平均の分布は正規分布に近似する。",
        supplement: "$$Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}}$$ が標準正規分布に従う。\\(n \\geq 30\\) が目安。"
      },
      {
        question: "大数の法則",
        answer: "サンプルサイズ \\(n\\) を大きくすると、標本平均 \\(\\bar{X}\\) は母平均 \\(\\mu\\) に確率的に収束する。",
        supplement: "「データが増えれば平均は真の値になる」という直感的な結果の数学的保証。"
      },
      {
        question: "母平均の信頼区間（母分散既知）",
        answer: "$$\\bar{x} \\pm 1.96 \\times \\frac{\\sigma}{\\sqrt{n}}$$",
        supplement: "95%信頼区間。母分散 \\(\\sigma^2\\) が分かっている場合。99%の場合は2.576を使用。"
      },
      {
        question: "母平均の信頼区間（母分散未知）",
        answer: "$$\\bar{x} \\pm t_{\\alpha/2}(n-1) \\times \\frac{s}{\\sqrt{n}}$$",
        supplement: "\\(s\\) は不偏標準偏差。t分布を使用する。自由度は \\(n-1\\)。"
      },
      {
        question: "母比率の信頼区間",
        answer: "$$\\hat{p} \\pm 1.96 \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}$$",
        supplement: "サンプルサイズ \\(n\\) が大きい場合の正規近似を利用。"
      },
      {
        question: "カイ二乗分布 \\(\\chi^2\\)",
        answer: "不偏分散 \\(U^2\\) との関係: $$\\frac{(n-1)U^2}{\\sigma^2} \\sim \\chi^2(n-1)$$",
        supplement: "期待値 \\(\\nu\\)、分散 \\(2\\nu\\)。標準正規分布の二乗和に従う（自由度 \\(\\nu\\)）。"
      },
      {
        question: "t分布",
        answer: "$$t = \\frac{\\bar{X} - \\mu}{s / \\sqrt{n}} \\sim t(n-1)$$",
        supplement: "自由度 \\(\\nu\\) が小さいと裾が重い（外れ値が出やすい）。\\(\\nu \\to \\infty\\) で標準正規分布に収束する。"
      },
      {
        question: "F分布",
        answer: "$$F = \\frac{\\chi_1^2 / \\nu_1}{\\chi_2^2 / \\nu_2}$$",
        supplement: "等分散性の検定やANOVAで利用。2つの独立なカイ二乗分布の比。常に正の値をとる右に歪んだ分布。"
      },
      {
        question: "第一種の過誤（Type I error）",
        answer: "\\(\\alpha\\)（有意水準）",
        supplement: "帰無仮説が正しいのに、誤って棄却してしまう確率。「あわてものの誤り」。通常5%や1%に設定。"
      },
      {
        question: "第二種の過誤（Type II error）",
        answer: "\\(\\beta\\)",
        supplement: "帰無仮説が誤りなのに、棄却しない確率。「ぼんやりものの誤り」。\\(1 - \\beta\\) は検出力（Power）。"
      },
      {
        question: "P値 (P-value)",
        answer: "帰無仮説が正しいと仮定したとき、観測されたデータ以上に極端な値が得られる確率。",
        supplement: "\\(P < \\alpha\\) なら帰無仮説を棄却する。「帰無仮説が正しい確率」ではないことに注意。"
      },
      {
        question: "検出力 (Power)",
        answer: "$$1 - \\beta$$",
        supplement: "対立仮説が正しいときに、正しく帰無仮説を棄却できる確率。サンプルサイズが大きいほど検出力は高くなる。"
      },
      {
        question: "適合度検定（カイ二乗検定）",
        answer: "$$\\chi^2 = \\sum \\frac{(O_i - E_i)^2}{E_i}$$",
        supplement: "\\(O_i\\): 観測度数、\\(E_i\\): 期待度数。理論分布にデータが当てはまるか調べる。自由度 = カテゴリ数 - 1 - 推定パラメータ数。"
      },
      {
        question: "独立性の検定（カイ二乗検定）",
        answer: "自由度 \\((r-1)(c-1)\\)",
        supplement: "クロス集計表において、2つの変数が独立かどうかを検定する。期待度数 = 行合計 × 列合計 / 総合計。"
      },
      {
        question: "信頼区間の解釈",
        answer: "同じ方法で100回信頼区間を構成すると、そのうち95回は真の値を含む。",
        supplement: "「真の値が95%の確率で区間内にある」という解釈は厳密には誤り（頻度論的解釈）。"
      },
      {
        question: "帰無仮説と対立仮説",
        answer: "帰無仮説 \\(H_0\\)：差がない・効果がないという仮説。対立仮説 \\(H_1\\)：帰無仮説の否定。",
        supplement: "検定は帰無仮説を棄却するか否かを判断する。帰無仮説を「採択する」とは通常言わず「棄却しない」と言う。"
      },
      {
        question: "両側検定と片側検定",
        answer: "両側検定：\\(H_1: \\mu \\neq \\mu_0\\)。片側検定：\\(H_1: \\mu > \\mu_0\\) または \\(H_1: \\mu < \\mu_0\\)。",
        supplement: "両側検定の棄却域は左右に \\(\\alpha/2\\) ずつ。片側検定は一方に \\(\\alpha\\) を配分。"
      }
    ]
  },
  {
    id: "regression",
    name: "相関・回帰分析",
    icon: "📈",
    color: "#0984E3",
    items: [
      {
        question: "単回帰モデル",
        answer: "$$y_i = \\beta_0 + \\beta_1 x_i + \\epsilon_i$$",
        supplement: "\\(\\epsilon_i\\) は誤差項。通常、互いに独立に \\(N(0, \\sigma^2)\\) に従うと仮定する。"
      },
      {
        question: "回帰直線の傾き \\(\\hat{\\beta}_1\\)",
        answer: "$$\\hat{\\beta}_1 = \\frac{S_{xy}}{S_{xx}}$$",
        supplement: "共分散 ÷ xの分散（偏差平方和の比）。\\(S_{xy} = \\sum(x_i - \\bar{x})(y_i - \\bar{y})\\)、\\(S_{xx} = \\sum(x_i - \\bar{x})^2\\)。"
      },
      {
        question: "回帰直線の切片 \\(\\hat{\\beta}_0\\)",
        answer: "$$\\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}$$",
        supplement: "回帰直線は必ず平均点 \\((\\bar{x}, \\bar{y})\\) を通ることから導出。"
      },
      {
        question: "相関係数 \\(r\\)",
        answer: "$$r = \\frac{S_{xy}}{\\sqrt{S_{xx} \\cdot S_{yy}}}$$",
        supplement: "-1から1の範囲。1に近いほど正の線形相関、-1に近いほど負の線形相関。0は線形関係なし（非線形の関係がある可能性あり）。"
      },
      {
        question: "総平方和 (SST)",
        answer: "$$S_T = \\sum_{i=1}^{n} (y_i - \\bar{y})^2$$",
        supplement: "データの全体のばらつき。Total Sum of Squares。SST = SSR + SSE。"
      },
      {
        question: "回帰平方和 (SSR)",
        answer: "$$S_R = \\sum_{i=1}^{n} (\\hat{y}_i - \\bar{y})^2$$",
        supplement: "回帰式によって説明できたばらつき。Regression Sum of Squares。"
      },
      {
        question: "残差平方和 (SSE)",
        answer: "$$S_E = \\sum_{i=1}^{n} (y_i - \\hat{y}_i)^2$$",
        supplement: "回帰式で説明しきれなかったばらつき（誤差）。Error/Residual Sum of Squares。"
      },
      {
        question: "平方和の分解",
        answer: "$$S_T = S_R + S_E$$",
        supplement: "全変動 ＝ 説明変動 ＋ 残差変動"
      },
      {
        question: "決定係数 \\(R^2\\)",
        answer: "$$R^2 = \\frac{S_R}{S_T} = 1 - \\frac{S_E}{S_T}$$",
        supplement: "1に近いほど当てはまりが良い。単回帰では相関係数の2乗に等しい（\\(R^2 = r^2\\)）。"
      },
      {
        question: "自由度調整済み決定係数",
        answer: "$$R_{adj}^2 = 1 - \\frac{S_E / (n-k-1)}{S_T / (n-1)}$$",
        supplement: "説明変数の数 \\(k\\) が増えても、当てはまりが良くならない限り値が増加しないように補正したもの。"
      },
      {
        question: "回帰係数のt検定",
        answer: "$$t = \\frac{\\hat{\\beta}_1}{SE(\\hat{\\beta}_1)}$$",
        supplement: "説明変数が目的変数に影響を与えているか（\\(\\beta_1 \\neq 0\\)）を検定する。"
      },
      {
        question: "残差の性質（回帰分析の仮定）",
        answer: "①正規性 ②等分散性 ③独立性 ④期待値0",
        supplement: "これらの仮定が満たされないと、検定や推定の信頼性が低下する。残差プロットで確認する。"
      },
      {
        question: "相関関係と因果関係",
        answer: "相関があるからといって因果関係があるとは限らない（偽相関の可能性）。",
        supplement: "第3の変数（交絡因子）が両者に影響している場合がある。因果の特定には実験やドメイン知識が必要。"
      }
    ]
  },
  {
    id: "hypothesis",
    name: "仮説検定の各論",
    icon: "⚖️",
    color: "#FDCB6E",
    items: [
      {
        question: "母平均の差の検定統計量 Z（母分散既知）",
        answer: "$$Z = \\frac{(\\bar{X}_1 - \\bar{X}_2) - (\\mu_1 - \\mu_2)}{\\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}}$$",
        supplement: "2つの群の平均値に差があるかを検定する。サンプルサイズが大きい場合もこの式（Z検定）を使う。"
      },
      {
        question: "母平均の差の検定統計量 t（母分散未知・等分散）",
        answer: "$$t = \\frac{(\\bar{X}_1 - \\bar{X}_2) - (\\mu_1 - \\mu_2)}{s_p \\sqrt{\\frac{1}{n_1} + \\frac{1}{n_2}}}$$",
        supplement: "\\(s_p^2\\) はプールした分散。自由度は \\(n_1 + n_2 - 2\\)。"
      },
      {
        question: "プールした分散 \\(s_p^2\\)",
        answer: "$$s_p^2 = \\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$$",
        supplement: "2つの群の分散が等しいと仮定できる場合、データを合算して分散を推定する。"
      },
      {
        question: "ウェルチのt検定",
        answer: "2群の分散が異なると考えられる場合に用いる。自由度の計算が複雑。",
        supplement: "等分散の仮定が不要なため、より安全な方法。F検定で等分散性が棄却された場合に用いる。"
      },
      {
        question: "対応のあるt検定（ペアデータ）",
        answer: "$$t = \\frac{\\bar{d} - \\mu_d}{s_d / \\sqrt{n}}$$",
        supplement: "同一被験者の「投与前・投与後」などの差 \\(d\\) をとり、その差が0かどうかを検定。自由度 \\(n-1\\)。"
      },
      {
        question: "母比率の差の検定統計量 Z",
        answer: "$$Z = \\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}(1-\\hat{p})\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}$$",
        supplement: "\\(\\hat{p}\\) はプールした比率。帰無仮説 \\(p_1 = p_2\\) の下で共通の \\(\\hat{p}\\) を使う。"
      },
      {
        question: "プールした比率 \\(\\hat{p}\\)",
        answer: "$$\\hat{p} = \\frac{n_1 \\hat{p}_1 + n_2 \\hat{p}_2}{n_1 + n_2} = \\frac{x_1 + x_2}{n_1 + n_2}$$",
        supplement: "2つの群を合わせた全体の比率。母比率の差の検定で使用。"
      },
      {
        question: "F検定（等分散性の検定）",
        answer: "$$F = \\frac{s_1^2}{s_2^2} \\quad (\\text{大きい方を分子})$$",
        supplement: "2つの群の分散が等しいかどうかを検定する。自由度は \\((n_1-1, n_2-1)\\)。"
      },
      {
        question: "母分散の検定（カイ二乗検定）",
        answer: "$$\\chi^2 = \\frac{(n-1)s^2}{\\sigma_0^2}$$",
        supplement: "母分散が特定の値 \\(\\sigma_0^2\\) と等しいかを検定する。自由度 \\(n-1\\)。"
      }
    ]
  },
  {
    id: "anova",
    name: "分散分析 (ANOVA) と実験計画法",
    icon: "🧪",
    color: "#A29BFE",
    items: [
      {
        question: "一元配置分散分析の総変動 \\(S_T\\)",
        answer: "$$S_T = \\sum_{i,j} (y_{ij} - \\bar{y}_{..})^2$$",
        supplement: "全データのばらつき。\\(S_T = S_A + S_E\\)（要因変動＋誤差変動）。"
      },
      {
        question: "群間変動（要因変動）\\(S_A\\)",
        answer: "$$S_A = \\sum n_i (\\bar{y}_{i.} - \\bar{y}_{..})^2$$",
        supplement: "各水準（グループ）の平均値と全体平均との差の二乗和。"
      },
      {
        question: "群内変動（誤差変動）\\(S_E\\)",
        answer: "$$S_E = \\sum_{i,j} (y_{ij} - \\bar{y}_{i.})^2$$",
        supplement: "各データと、その群の平均値との差の二乗和。"
      },
      {
        question: "分散分析の自由度",
        answer: "全体：\\(n-1\\)、群間（要因）：\\(a-1\\)、群内（誤差）：\\(n-a\\)",
        supplement: "\\(a\\) は水準数（グループ数）、\\(n\\) は全データ数。自由度も足し算が成り立つ。"
      },
      {
        question: "平均平方 (Mean Square, MS)",
        answer: "$$MS_A = \\frac{S_A}{a-1}, \\quad MS_E = \\frac{S_E}{n-a}$$",
        supplement: "平方和を自由度で割ったもの。「分散」に相当する。"
      },
      {
        question: "分散分析のF値",
        answer: "$$F = \\frac{MS_A}{MS_E}$$",
        supplement: "群間分散が群内分散に対して十分大きいかを検定する。帰無仮説は「すべての群の母平均が等しい」。"
      },
      {
        question: "フィッシャーの三原則",
        answer: "①反復（Replication）②無作為化（Randomization）③局所管理（Local Control）",
        supplement: "実験計画法の基礎。系統誤差を防ぎ、誤差を評価するために必要。"
      },
      {
        question: "乱塊法（ランダム化ブロック法）",
        answer: "実験全体をいくつかのブロックに分け、ブロック内で条件をランダムに割り当てる方法。",
        supplement: "実験環境のばらつき（ブロック効果）を分離して、検出力を高める。"
      },
      {
        question: "ANOVA表の構造",
        answer: "要因 | 平方和 | 自由度 | 平均平方 | F値",
        supplement: "穴埋め問題が頻出。SST = SSA + SSE、df_T = df_A + df_E が成立することを確認する。"
      }
    ]
  },
  {
    id: "sampling",
    name: "標本抽出・その他の分布・指数",
    icon: "📋",
    color: "#E84393",
    items: [
      {
        question: "単純無作為抽出",
        answer: "母集団から乱数などを使って、等確率で標本を選ぶ方法。",
        supplement: "最も基本的だが、大規模な母集団では実施が難しい場合もある。"
      },
      {
        question: "層化抽出法 (Stratified Sampling)",
        answer: "母集団をいくつかの層（グループ）に分け、各層から無作為抽出する方法。",
        supplement: "母集団の構成比（男女比など）を反映させたい場合に有効。推定精度が高くなる傾向がある。"
      },
      {
        question: "クラスター抽出法 (Cluster Sampling)",
        answer: "母集団を小集団（クラスター）に分け、いくつかのクラスターを丸ごと抽出する方法。",
        supplement: "調査の手間は省けるが、同じクラスター内のデータは似ているため、精度は低くなりやすい。"
      },
      {
        question: "多段抽出法",
        answer: "クラスター抽出を数段階繰り返す方法。",
        supplement: "例：市町村を選ぶ → その中から町を選ぶ → 世帯を選ぶ。大規模調査で使用。"
      },
      {
        question: "系統抽出法",
        answer: "通し番号をつけ、一定の間隔（例：10番おき）で抽出する方法。",
        supplement: "最初の1つをランダムに決めれば、あとは自動的に決まる。周期性があるデータには不向き。"
      },
      {
        question: "層化抽出 vs クラスター抽出の違い",
        answer: "層化：各層から少しずつ抽出 → 精度高い。クラスター：一部の集団を丸ごと抽出 → コスト低い。",
        supplement: "試験でよく正誤問題として出題される。層化は「層内の類似性」を利用、クラスターは「調査の効率化」が目的。"
      },
      {
        question: "ラスパイレス指数",
        answer: "$$\\frac{\\sum p_t q_0}{\\sum p_0 q_0} \\times 100$$",
        supplement: "基準年（過去）の数量 \\(q_0\\) を重みとする価格指数。消費者物価指数 (CPI) で採用。"
      },
      {
        question: "パーシェ指数",
        answer: "$$\\frac{\\sum p_t q_t}{\\sum p_0 q_t} \\times 100$$",
        supplement: "比較年（現在）の数量 \\(q_t\\) を重みとする価格指数。GDPデフレーターで採用。"
      },
      {
        question: "チェビシェフの不等式",
        answer: "$$P(|X - \\mu| \\geq k\\sigma) \\leq \\frac{1}{k^2}$$",
        supplement: "分布の形状に関わらず成り立つ不等式。例えば \\(k=2\\) なら、平均から2σ以上離れる確率は25%以下。"
      },
      {
        question: "クラメールの連関係数 V",
        answer: "$$V = \\sqrt{\\frac{\\chi^2}{n(k-1)}}$$",
        supplement: "名義尺度同士（性別×血液型など）の相関の強さを測る。0から1の値をとる。"
      },
      {
        question: "相関比 \\(\\eta^2\\)",
        answer: "$$\\eta^2 = \\frac{S_{Between}}{S_{Total}}$$",
        supplement: "量的変数と質的変数（クラス×テストの点数など）の関連の強さ。分散分析の考え方に基づく。"
      },
      {
        question: "スピアマンの順位相関係数",
        answer: "データの値そのものではなく、順位を用いて計算した相関係数。",
        supplement: "線形関係でなくても、単調増加/減少の関係があれば検出できる。外れ値に強い。ノンパラメトリック手法。"
      },
      {
        question: "赤池情報量基準 (AIC)",
        answer: "$$AIC = -2 \\ln L + 2k$$",
        supplement: "モデルの良さを比較する指標。尤度 \\(L\\) が高く、パラメータ数 \\(k\\) が少ないモデルほど値が小さく、良い。"
      }
    ]
  },
  {
    id: "advanced_regression",
    name: "重回帰分析・時系列解析",
    icon: "📉",
    color: "#e17055",
    items: [
      {
        question: "重回帰モデル",
        answer: "$$y = \\beta_0 + \\beta_1 x_1 + \\cdots + \\beta_k x_k + \\epsilon$$",
        supplement: "複数の説明変数を含む回帰モデル。各係数 \\(\\beta_i\\) は偏回帰係数と呼ばれる。"
      },
      {
        question: "偏回帰係数",
        answer: "他の説明変数の値を固定したときに、その説明変数が1単位増加したときの目的変数の変化量。",
        supplement: "単回帰係数とは値が異なる場合がある（交絡因子の影響）。"
      },
      {
        question: "多重共線性 (Multicollinearity)",
        answer: "説明変数間に強い相関がある状態。回帰係数の分散が大きくなり、推定が不安定になる。",
        supplement: "VIF（分散拡大要因）が10以上で目安とされる。対処法は変数の削除や主成分分析など。"
      },
      {
        question: "ダミー変数 (Dummy Variable)",
        answer: "質的データ（男女、季節など）を 0 と 1 の数値に変換した変数。",
        supplement: "k個のカテゴリがある場合、k-1個のダミー変数を用いる（多重共線を防ぐため）。"
      },
      {
        question: "ダービン・ワトソン比 (DW比)",
        answer: "残差に自己相関があるかを検定する指標。目安として2前後なら相関なし。",
        supplement: "0に近いと正の相関、4に近いと負の相関。時系列データで特に重要。"
      },
      {
        question: "自己相関 (Autocorrelation)",
        answer: "時系列データにおいて、過去の自分自身の値との相関。",
        supplement: "コレログラムで確認する。ラグkの自己相関係数が0でない場合、時系列モデルが必要。"
      },
      {
        question: "時系列の成分分解",
        answer: "原系列 = 傾向変動(T) + 循環変動(C) + 季節変動(S) + 不規則変動(I)",
        supplement: "加法モデル $$T+C+S+I$$ や乗法モデル $$T \\times C \\times S \\times I$$ がある。"
      },
      {
        question: "指数平滑法",
        answer: "過去の観側値に指数的に減少する重みをつけて平均をとる予測手法。",
        supplement: "$$\\hat{y}_{t+1} = \\alpha y_t + (1-\\alpha)\\hat{y}_t$$。直近のデータを重視する。"
      }
    ]
  },
  {
    id: "nonparametric_and_advanced",
    name: "ノンパラ・多重比較・その他",
    icon: "🧩",
    color: "#6c5ce7",
    items: [
      {
        question: "ウィルコクソンの順位和検定",
        answer: "2つの独立した群の代表値（中央値）に差があるかを検定する。",
        supplement: "対応のないt検定のノンパラメトリック版。データの順位を利用する。マン・ホイットニーのU検定と同等。"
      },
      {
        question: "ウィルコクソンの符号付順位検定",
        answer: "対応のある2群の差を検定するノンパラメトリック手法。",
        supplement: "対応のあるt検定に相当。差の絶対値に順位をつけ、符号を考慮して検定統計量を算出。"
      },
      {
        question: "クラスカル・ウォリス検定",
        answer: "3群以上の代表値に差があるかを検定するノンパラメトリック手法。",
        supplement: "一元配置分散分析に対応。順位和検定を3群以上に拡張したもの。"
      },
      {
        question: "符号検定 (Sign Test)",
        answer: "差がプラスかマイナスかの符号のみを用いる最も単純な検定。",
        supplement: "中央値の検定や、対応のある2群の差の検定に用いる。検出力は低い。"
      },
      {
        question: "多重比較法",
        answer: "3群以上の検定を行う際、第一種の過誤（偽陽性）の増大を防ぐための補正手法。",
        supplement: "単にt検定を繰り返すと、全体の有意水準が大きくなってしまう（ファミリーワイズエラー率の増大）。"
      },
      {
        question: "ボンフェローニ法",
        answer: "有意水準 \\(\\alpha\\) を検定の回数 \\(m\\) で割った \\(\\alpha/m\\) を用いる方法。",
        supplement: "最も保守的（差が出にくい）だが、計算が簡単で適用範囲が広い。"
      },
      {
        question: "テューキーのHSD法",
        answer: "全てのペアの平均値の差を検定する方法。スチューデント化された範囲分布を用いる。",
        supplement: "群のサイズが等しい場合に推奨される。分散分析で有意差が出た後の事後検定として頻出。"
      },
      {
        question: "二元配置分散分析",
        answer: "2つの要因（因子）の影響と、それらの交互作用を分析する手法。",
        supplement: "交互作用：ある要因の効果が、別の要因の水準によって変わること（グラフが平行でない状態）。"
      },
      {
        question: "検出力 (Power) とサンプルサイズ",
        answer: "必要なサンプルサイズは、検出力 \\(1-\\beta\\)、有意水準 \\(\\alpha\\)、効果量から算出される。",
        supplement: "効果量が小さい（差が小さい）ほど、検出するために大きなサンプルサイズが必要。"
      }
    ]
  }
];
