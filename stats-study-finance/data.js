// 金融工学・クオンツ 暗記データ
// カテゴリ別に用語・公式を構造化

const STATS_DATA = [
    {
        id: "stochastic_calc",
        name: "確率解析・伊藤解析",
        icon: "📐",
        color: "#6C5CE7",
        items: [
            {
                question: "ブラウン運動 (Brownian Motion) \\(W_t\\)",
                answer: "$$W_{t+s} - W_t \\sim N(0, s)$$",
                supplement: "ウィーナー過程とも呼ぶ。増分が独立で正規分布に従う連続型確率過程。\\(W_0 = 0\\)、経路は連続だが至るところ微分不可能。"
            },
            {
                question: "ブラウン運動の性質",
                answer: "①\\(W_0 = 0\\) ②独立増分 ③\\(W_t - W_s \\sim N(0, t-s)\\) ④連続経路",
                supplement: "二次変分 \\([W]_t = t\\)。これが確率微積分と通常の微積分の違いの根源。"
            },
            {
                question: "幾何ブラウン運動 (GBM)",
                answer: "$$dS_t = \\mu S_t\\,dt + \\sigma S_t\\,dW_t$$",
                supplement: "株価モデルの標準形。解は \\(S_t = S_0 \\exp\\left[(\\mu - \\frac{\\sigma^2}{2})t + \\sigma W_t\\right]\\)。対数正規分布に従う。"
            },
            {
                question: "伊藤の公式 (Itô's Lemma)",
                answer: "$$df = \\left(\\frac{\\partial f}{\\partial t} + \\mu S \\frac{\\partial f}{\\partial S} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 f}{\\partial S^2}\\right)dt + \\sigma S \\frac{\\partial f}{\\partial S}\\,dW_t$$",
                supplement: "確率微分方程式の「連鎖律（チェーンルール）」。2次の項 \\(\\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 f}{\\partial S^2}\\) が残るのが通常の微積分と異なる。"
            },
            {
                question: "伊藤の等距離 (Itô Isometry)",
                answer: "$$E\\left[\\left(\\int_0^T f(t)\\,dW_t\\right)^2\\right] = E\\left[\\int_0^T f(t)^2\\,dt\\right]$$",
                supplement: "確率積分の計算を通常の積分の期待値計算に変換できる。伊藤積分の分散計算に不可欠。"
            },
            {
                question: "確率微分方程式 (SDE) の一般形",
                answer: "$$dX_t = \\mu(X_t, t)\\,dt + \\sigma(X_t, t)\\,dW_t$$",
                supplement: "ドリフト項 \\(\\mu\\)（方向性）とディフュージョン項 \\(\\sigma\\)（ランダム性）で構成。"
            },
            {
                question: "ギルサノフの定理 (Girsanov Theorem)",
                answer: "ドリフト項を変換することで、確率測度を変更できる定理。",
                supplement: "実測度（現実の世界）からリスク中立測度（計算用の世界）へ変換する数学的保証。金融工学の核心。"
            },
            {
                question: "ラドン・ニコディム微分",
                answer: "$$\\frac{dQ}{dP} = \\xi_T$$",
                supplement: "確率測度 \\(P\\) を別の測度 \\(Q\\)（リスク中立測度など）に変換するための密度関数。ギルサノフの定理の基礎。"
            },
            {
                question: "マルチンゲール",
                answer: "$$E[X_t | \\mathcal{F}_s] = X_s \\quad (s < t)$$",
                supplement: "「過去の情報が与えられたとき、将来の期待値が現在の値と等しい」確率過程。公平なゲーム。"
            },
            {
                question: "マルチンゲール表現定理",
                answer: "ブラウン運動で生成される情報の元では、あらゆるマルチンゲールは確率積分で表現できる。",
                supplement: "デリバティブの複製（ヘッジ）が可能であることを保証する定理（完全市場の証明）。"
            },
            {
                question: "ファインマン・カッツの公式",
                answer: "偏微分方程式 (PDE) の解を、確率微分方程式 (SDE) の期待値として表現する公式。",
                supplement: "オプション価格（PDEの解）をモンテカルロ法（期待値計算）で計算できることの理論的保証。"
            }
        ]
    },
    {
        id: "derivatives",
        name: "デリバティブ価格理論",
        icon: "💰",
        color: "#00B894",
        items: [
            {
                question: "連続複利 (Continuous Compounding)",
                answer: "$$FV = PV \\cdot e^{rt}$$",
                supplement: "年利 \\(r\\) で \\(t\\) 年間運用した将来価値。離散的な \\((1+r)^t\\) の極限。"
            },
            {
                question: "無裁定条件 (No-Arbitrage)",
                answer: "リスクなしで確実に利益を上げられる取引が存在しない状態。",
                supplement: "デリバティブ価格理論の根幹。「初期投資ゼロ・将来の価値が非負 → 現在価値もゼロ」。"
            },
            {
                question: "リスク中立測度 (Risk-Neutral Measure)",
                answer: "全ての資産の期待収益率が安全資産利子率 \\(r\\) に等しくなるような確率測度。",
                supplement: "デリバティブの価格 = リスク中立測度での割引期待値：\\(V_0 = e^{-rT} E^Q[V_T]\\)。"
            },
            {
                question: "ブラック・ショールズ方程式 (PDE)",
                answer: "$$\\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + rS \\frac{\\partial V}{\\partial S} - rV = 0$$",
                supplement: "オプション価格 \\(V\\) が満たすべき偏微分方程式。無裁定条件とデルタヘッジから導出。"
            },
            {
                question: "ブラック・ショールズの公式 (Call)",
                answer: "$$C = SN(d_1) - Ke^{-rT}N(d_2)$$",
                supplement: "\\(S\\):株価、\\(K\\):行使価格、\\(r\\):金利、\\(T\\):残存期間、\\(N\\):標準正規CDFの累積分布関数。"
            },
            {
                question: "\\(d_1, d_2\\) の定義",
                answer: "$$d_1 = \\frac{\\ln(S/K) + (r + \\sigma^2/2)T}{\\sigma\\sqrt{T}}, \\quad d_2 = d_1 - \\sigma\\sqrt{T}$$",
                supplement: "\\(N(d_2)\\) はリスク中立世界でオプションが行使される確率に対応。"
            },
            {
                question: "ブラック・ショールズの公式 (Put)",
                answer: "$$P = Ke^{-rT}N(-d_2) - SN(-d_1)$$",
                supplement: "プット・コール・パリティからも導出可能。"
            },
            {
                question: "プット・コール・パリティ",
                answer: "$$C - P = S - Ke^{-rT}$$",
                supplement: "同じ行使価格・満期のコール(C)とプット(P)の価格間に成り立つ関係式。裁定取引の不存在から導出。"
            },
            {
                question: "BSモデルの前提条件",
                answer: "①株価がGBMに従う ②取引コスト・税金なし ③空売り可能 ④連続取引可能 ⑤金利一定 ⑥配当なし",
                supplement: "現実ではこれらの仮定が成り立たないため、BSモデルの拡張が研究されている。"
            },
            {
                question: "二項モデル (Binomial Tree)",
                answer: "株価が上昇 \\(u\\) 倍、下落 \\(d\\) 倍の2通りに分岐する離散モデル。",
                supplement: "リスク中立確率 \\(q = \\frac{e^{r\\Delta t} - d}{u - d}\\)。アメリカンオプションの評価に有効。\\(N \\to \\infty\\) でBSに収束。"
            },
            {
                question: "モンテカルロ・シミュレーション",
                answer: "乱数を発生させてオプション価格の期待値を数値的に求める手法。",
                supplement: "精度は試行回数 \\(N\\) に対して \\(1/\\sqrt{N}\\) のオーダーで改善。分散低減法（対称変量法、制御変量法）で効率化。"
            }
        ]
    },
    {
        id: "greeks",
        name: "Greeks（感応度指標）",
        icon: "🇬🇷",
        color: "#E17055",
        items: [
            {
                question: "デルタ (\\(\\Delta\\))",
                answer: "$$\\Delta = \\frac{\\partial V}{\\partial S}$$",
                supplement: "株価変動に対するオプション価格の感応度。ヘッジ比率として使用（デルタヘッジ）。コール: \\(N(d_1)\\)、プット: \\(N(d_1)-1\\)。"
            },
            {
                question: "ガンマ (\\(\\Gamma\\))",
                answer: "$$\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{\\partial \\Delta}{\\partial S}$$",
                supplement: "デルタの変動率（オプション価格の凸性）。ATM付近で最大。ガンマが高いとデルタヘッジの頻繁な調整が必要。"
            },
            {
                question: "ベガ (\\(\\nu\\))",
                answer: "$$\\nu = \\frac{\\partial V}{\\partial \\sigma}$$",
                supplement: "ボラティリティの変動に対するオプション価格の感応度。ATM付近・残存期間が長いほど大きい。"
            },
            {
                question: "セータ (\\(\\Theta\\))",
                answer: "$$\\Theta = \\frac{\\partial V}{\\partial t}$$",
                supplement: "時間経過に対するオプション価格の減少（タイムディケイ）。通常は負の値。満期が近づくほど加速する。"
            },
            {
                question: "ロー (\\(\\rho\\))",
                answer: "$$\\rho = \\frac{\\partial V}{\\partial r}$$",
                supplement: "金利変動に対するオプション価格の感応度。コールは正、プットは負。通常は他のGreeksに比べて小さい。"
            },
            {
                question: "ブラック・ショールズPDEとGreeksの関係",
                answer: "$$\\Theta + \\frac{1}{2}\\sigma^2 S^2 \\Gamma + rS\\Delta - rV = 0$$",
                supplement: "BS方程式そのもの。ガンマとセータはトレードオフの関係にあることを示す。"
            },
            {
                question: "デルタヘッジ",
                answer: "オプションと原資産をデルタの分だけ反対ポジションで持ち、ポートフォリオをデルタニュートラルにする戦略。",
                supplement: "連続的にリバランスすればリスクフリーポートフォリオになる（BS理論の核心）。実務では離散的にしかできない。"
            },
            {
                question: "ガンマスキャルピング",
                answer: "デルタヘッジしたロングガンマポジションで、原資産の変動から利益を得る戦略。",
                supplement: "ガンマが正 → 株価変動で利益。セータが負 → 時間経過で損失。変動が大きければ利益。"
            }
        ]
    },
    {
        id: "volatility",
        name: "ボラティリティ",
        icon: "📊",
        color: "#0984E3",
        items: [
            {
                question: "ヒストリカル・ボラティリティ (HV)",
                answer: "$$\\sigma = \\sqrt{\\frac{1}{n-1} \\sum (u_i - \\bar{u})^2} \\times \\sqrt{250}$$",
                supplement: "過去の株価データ（対数収益率 \\(u_i = \\ln(S_i/S_{i-1})\\)）から計算。年率換算（\\(\\times \\sqrt{250}\\)営業日）。"
            },
            {
                question: "インプライド・ボラティリティ (IV)",
                answer: "市場価格から逆算されたボラティリティ。",
                supplement: "BS公式に市場価格を代入して逆算した \\(\\sigma\\)。投資家の将来の予想変動率を表す。ニュートン法等で数値的に求める。"
            },
            {
                question: "ボラティリティ・スマイル",
                answer: "行使価格によってIVが異なる現象。OTMのプットとコールでIVが高い。",
                supplement: "BSモデル（対数正規分布）の仮定と現実のズレ（裾が厚い分布・ジャンプ）から生じる。"
            },
            {
                question: "ボラティリティ・スキュー",
                answer: "低い行使価格（OTMプット）ほどIVが高い傾向。",
                supplement: "株式市場で顕著。下落リスクへの保険需要が反映。1987年ブラックマンデー以降に観測。"
            },
            {
                question: "ARCH モデル",
                answer: "$$\\sigma_t^2 = \\alpha_0 + \\alpha_1 \\epsilon_{t-1}^2$$",
                supplement: "過去の誤差の二乗に条件付き分散が依存するモデル。ボラティリティ・クラスタリングを表現。"
            },
            {
                question: "GARCH(1,1) モデル",
                answer: "$$\\sigma_t^2 = \\alpha_0 + \\alpha_1 \\epsilon_{t-1}^2 + \\beta_1 \\sigma_{t-1}^2$$",
                supplement: "ARCHの拡張。直前のボラティリティも考慮。\\(\\alpha_1 + \\beta_1 < 1\\) で定常。金融時系列のボラティリティモデリングの標準。"
            },
            {
                question: "確率的ボラティリティモデル（ヘストンモデル）",
                answer: "$$dv_t = \\kappa(\\theta - v_t)dt + \\xi \\sqrt{v_t}\\,dW_t^v$$",
                supplement: "ボラティリティ自体が確率過程に従うモデル。平均回帰性を持つ。ボラティリティ・スマイルを再現可能。"
            },
            {
                question: "ローカルボラティリティモデル",
                answer: "$$dS_t = rS_t\\,dt + \\sigma(S_t, t) S_t\\,dW_t$$",
                supplement: "Dupireの公式でIVサーフェスから \\(\\sigma(S,t)\\) を逆算。ボラティリティ・スマイルと整合的。"
            }
        ]
    },
    {
        id: "portfolio",
        name: "ポートフォリオ理論",
        icon: "💼",
        color: "#FDCB6E",
        items: [
            {
                question: "現代ポートフォリオ理論 (MPT)",
                answer: "分散投資により、リターンを変えずにリスク（標準偏差）を低減できる理論（マーコビッツ）。",
                supplement: "相関係数が1未満の資産を組み合わせることで効果が出る。効率的フロンティア。"
            },
            {
                question: "2資産ポートフォリオのリスク",
                answer: "$$\\sigma_p^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1 w_2 \\rho_{12} \\sigma_1 \\sigma_2$$",
                supplement: "相関係数 \\(\\rho_{12} < 1\\) であれば分散投資効果がある。\\(\\rho_{12} = -1\\) で完全なリスク消去が可能。"
            },
            {
                question: "効率的フロンティア",
                answer: "所与のリターンのもとでリスクが最小のポートフォリオの集合。",
                supplement: "無リスク資産を含めると、資本市場線 (CML) 上のポートフォリオが最適。"
            },
            {
                question: "資本資産価格モデル (CAPM)",
                answer: "$$E[R_i] = R_f + \\beta_i (E[R_m] - R_f)$$",
                supplement: "個別資産の期待リターンは市場リスクプレミアムに対する感応度 \\(\\beta\\) で決まる。均衡モデル。"
            },
            {
                question: "ベータ (\\(\\beta\\)) の定義",
                answer: "$$\\beta_i = \\frac{\\text{Cov}(R_i, R_m)}{V(R_m)}$$",
                supplement: "市場全体の動きに対する個別資産の連動性。単回帰分析の傾きに相当。\\(\\beta = 1\\): 市場と同じリスク。"
            },
            {
                question: "シャープレシオ",
                answer: "$$S = \\frac{E[R_p] - R_f}{\\sigma_p}$$",
                supplement: "リスク1単位あたりの超過リターン。投資効率の良さを測る。接線ポートフォリオのシャープレシオが最大。"
            },
            {
                question: "トレイナーレシオ",
                answer: "$$T = \\frac{E[R_p] - R_f}{\\beta_p}$$",
                supplement: "系統リスク（ベータ）1単位あたりの超過リターン。十分に分散されたポートフォリオの評価に用いる。"
            },
            {
                question: "ジェンセンのアルファ",
                answer: "$$\\alpha = R_p - [R_f + \\beta_p(R_m - R_f)]$$",
                supplement: "CAPMの期待リターンに対する超過収益。正なら市場をアウトパフォーム。"
            },
            {
                question: "期待効用仮説",
                answer: "$$E[U(W)] = \\sum p_i U(W_i)$$",
                supplement: "投資家は「効用の期待値」を最大化する。効用関数が凹 → リスク回避型。"
            },
            {
                question: "絶対的危険回避度 (ARA)",
                answer: "$$A(W) = -\\frac{U''(W)}{U'(W)}$$",
                supplement: "富の増加に対するリスク回避度の変化。\\(U(W) = \\ln W\\) なら ARA は逓減（富裕層ほどリスクテイク）。"
            }
        ]
    },
    {
        id: "fixed_income",
        name: "債券数理・金利モデル",
        icon: "🏦",
        color: "#A29BFE",
        items: [
            {
                question: "デュレーション (Macaulay Duration)",
                answer: "$$D = \\frac{\\sum t \\cdot CF_t \\cdot e^{-rt}}{\\sum CF_t \\cdot e^{-rt}}$$",
                supplement: "債券の「平均回収期間」かつ金利変動に対する価格感応度（1次近似）。"
            },
            {
                question: "修正デュレーション",
                answer: "$$D_{mod} = -\\frac{1}{P}\\frac{dP}{dr} = \\frac{D}{1 + r/n}$$",
                supplement: "金利が1%変化 → 債券価格が \\(D_{mod}\\)% 変化。金利リスク管理の基本指標。"
            },
            {
                question: "コンベクシティ (Convexity)",
                answer: "$$C = \\frac{1}{P} \\frac{d^2P}{dr^2}$$",
                supplement: "金利変動に対する債券価格の「曲率」（2次近似）。デュレーションの直線近似を補正する。コンベクシティが高いほど有利。"
            },
            {
                question: "債券価格の近似式",
                answer: "$$\\frac{\\Delta P}{P} \\approx -D_{mod} \\cdot \\Delta r + \\frac{1}{2} C \\cdot (\\Delta r)^2$$",
                supplement: "テイラー展開の2次近似。デュレーション＋コンベクシティで精度向上。"
            },
            {
                question: "イールドカーブ (Yield Curve)",
                answer: "残存期間ごとの利回りをプロットした曲線。",
                supplement: "順イールド（右上がり）が通常。逆イールド（右下がり）は景気後退のシグナルとされる。"
            },
            {
                question: "フォワードレート",
                answer: "$$f(t_1, t_2) = \\frac{r_2 t_2 - r_1 t_1}{t_2 - t_1}$$",
                supplement: "将来の期間 \\([t_1, t_2]\\) に適用される金利。スポットレートから計算可能。"
            },
            {
                question: "Vasicek モデル",
                answer: "$$dr_t = a(b - r_t)\\,dt + \\sigma\\,dW_t$$",
                supplement: "短期金利の平均回帰モデル。解析的にオプション価格が求まる。欠点：金利が負になりうる。"
            },
            {
                question: "CIR モデル",
                answer: "$$dr_t = a(b - r_t)\\,dt + \\sigma\\sqrt{r_t}\\,dW_t$$",
                supplement: "Vasicekの改良。拡散項に \\(\\sqrt{r_t}\\) をつけることで金利が負にならない。"
            },
            {
                question: "Hull-White モデル",
                answer: "$$dr_t = [\\theta(t) - a r_t]\\,dt + \\sigma\\,dW_t$$",
                supplement: "\\(\\theta(t)\\) を時間の関数にすることで、現在のイールドカーブに完全にフィットさせるモデル。"
            },
            {
                question: "HJM (Heath-Jarrow-Morton) フレームワーク",
                answer: "フォワードレート全体の確率過程を直接モデル化するアプローチ。",
                supplement: "無裁定条件からドリフト項が決定される（HJMドリフト条件）。最も一般的な金利モデルの枠組み。"
            },
            {
                question: "LIBOR市場モデル (LMM / BGM)",
                answer: "実際に市場で取引されるフォワードLIBORレートを対数正規分布でモデル化。",
                supplement: "キャップやスワップションのブラック公式と整合的。モンテカルロ法でのシミュレーションに適する。"
            },
            {
                question: "SABRモデル",
                answer: "確率的ボラティリティを持つフォワードレートモデル。",
                supplement: "ボラティリティ・スマイルを正確に捉えることができ、実務で標準的に使われる。"
            },
            {
                question: "構造型モデル (Merton Model)",
                answer: "企業の資産価値が負債額を下回った時にデフォルトすると仮定するモデル。",
                supplement: "株式は資産に対するコールオプション、社債は資産とプットオプションの組合せとみなす。"
            },
            {
                question: "誘導型モデル (Reduced Form Model)",
                answer: "デフォルトの発生を外生的なハザードレート（強度）でモデル化する手法。",
                supplement: "Jarrow-Turnbullモデルなど。市場価格（CDSスプレッドなど）との適合性が高い。"
            }
        ]
    },
    {
        id: "risk_management",
        name: "リスク管理",
        icon: "🛡️",
        color: "#E84393",
        items: [
            {
                question: "バリュー・アット・リスク (VaR)",
                answer: "$$P(L > \\text{VaR}) = \\alpha$$",
                supplement: "「信頼水準 \\(1-\\alpha\\)（例:99%）で、損失額がこの値を超えない」最大損失額。保有期間と信頼水準を指定。"
            },
            {
                question: "VaR の計算方法",
                answer: "①分散共分散法（パラメトリック） ②ヒストリカルシミュレーション ③モンテカルロシミュレーション",
                supplement: "分散共分散法：正規分布仮定 → \\(VaR = \\mu + z_\\alpha \\sigma\\)。非線形リスクにはモンテカルロが適する。"
            },
            {
                question: "期待ショートフォール (ES / CVaR)",
                answer: "$$ES = E[L | L > \\text{VaR}]$$",
                supplement: "VaRを超えた場合の平均損失額。VaRより保守的な指標。劣加法性を満たす（コヒーレントなリスク指標）。"
            },
            {
                question: "コヒーレントリスク指標の4公理",
                answer: "①単調性 ②劣加法性 ③正斉次性 ④平行移動不変性",
                supplement: "VaRは劣加法性を満たさない（分散投資でVaRが増加する場合がある）。ESはコヒーレント。"
            },
            {
                question: "ストレステスト",
                answer: "極端な市場シナリオ（リーマン・ショック級等）を想定してポートフォリオの損失を評価する。",
                supplement: "VaRでは捉えきれないテールリスクを評価。規制当局も要求する重要なリスク管理手法。"
            },
            {
                question: "コピュラ (Copula)",
                answer: "$$F(x_1, \\ldots, x_n) = C(F_1(x_1), \\ldots, F_n(x_n))$$",
                supplement: "周辺分布と依存構造を分離してモデル化する関数。ガウシアンコピュラ、t-コピュラ等。CDO評価に使用されたが、金融危機で問題に。"
            },
            {
                question: "デフォルト強度 (Hazard Rate)",
                answer: "$$\\lambda(t) = \\lim_{\\Delta t \\to 0} \\frac{P(t < \\tau \\leq t + \\Delta t | \\tau > t)}{\\Delta t}$$",
                supplement: "時刻 \\(t\\) まで生存した条件下での瞬間的なデフォルト確率。生存確率 \\(P(\\tau > t) = e^{-\\int_0^t \\lambda(s)ds}\\)。"
            },
            {
                question: "CVA (Credit Valuation Adjustment)",
                answer: "相手方のデフォルトリスクを考慮したデリバティブ価格の調整額。",
                supplement: "\\(CVA \\approx (1-R) \\int EPE(t)\\,dPD(t)\\)。\\(R\\):回収率、\\(EPE\\):期待正エクスポージャー、\\(PD\\):デフォルト確率。"
            }
        ]
    },
    {
        id: "timeseries_finance",
        name: "金融時系列分析",
        icon: "📈",
        color: "#00CEC9",
        items: [
            {
                question: "対数収益率",
                answer: "$$r_t = \\ln\\left(\\frac{S_t}{S_{t-1}}\\right)$$",
                supplement: "加法性を持つため扱いやすい。連続複利リターンとも呼ばれる。"
            },
            {
                question: "金融時系列の特徴（スタイライズド・ファクト）",
                answer: "①尖った分布（裾が厚い） ②ボラティリティ・クラスタリング ③レバレッジ効果 ④非対称性",
                supplement: "正規分布の仮定は現実の金融データに合わない。t分布や混合正規分布が代替として使われる。"
            },
            {
                question: "AR(1) モデル",
                answer: "$$y_t = c + \\phi y_{t-1} + \\epsilon_t$$",
                supplement: "時系列の基礎。定常条件：\\(|\\phi| < 1\\)。\\(\\phi = 1\\) でランダムウォーク（非定常）。"
            },
            {
                question: "ランダムウォーク仮説",
                answer: "株価の変動は予測不可能。\\(S_t = S_{t-1} \\cdot e^{\\epsilon_t}\\)。",
                supplement: "効率的市場仮説 (EMH) と関連。弱い形：過去の価格情報から将来を予測不可能。"
            },
            {
                question: "単位根検定 (ADF検定)",
                answer: "データが非定常（単位根あり）かどうかを検定。帰無仮説：単位根がある（非定常）。",
                supplement: "棄却 → 定常。棄却できない → 差分をとって定常化してから分析。"
            },
            {
                question: "共和分 (Cointegration)",
                answer: "非定常な系列同士の線形結合が定常になる関係。",
                supplement: "ペアトレーディングの理論的基礎。長期的な均衡関係。Engle-Granger法やJohansen法で検定。"
            },
            {
                question: "ジャック・ベラ検定",
                answer: "正規性を歪度と尖度で検定。",
                supplement: "金融データは通常棄却される（正規分布しない）。\\(JB = \\frac{n}{6}(S^2 + \\frac{(K-3)^2}{4})\\)。"
            }
        ]
    }
];
