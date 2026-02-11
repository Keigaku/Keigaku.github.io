// 金融工学・クオンツ 初級編 データ
const STATS_DATA = [
    {
        id: "market-basics",
        name: "金融市場の基礎",
        icon: "🏦",
        color: "#6C5CE7",
        items: [
            {
                question: "株式 (Stock / Equity)",
                answer: "企業の所有権の一部を表す有価証券。保有者（株主）は配当と値上がり益（キャピタルゲイン）を得る権利を持つ。",
                supplement: "普通株（議決権あり）と優先株（配当優先だが議決権なし）がある。時価総額 = 株価 × 発行済株式数。"
            },
            {
                question: "債券 (Bond)",
                answer: "発行体（国・企業）が投資家から資金を借り入れるために発行する有価証券。定期的にクーポン（利子）を支払い、満期に元本を返済する。",
                supplement: "額面価格（Par Value）、クーポン率、満期日が主な要素。金利が上がると債券価格は下がる（逆相関）。"
            },
            {
                question: "為替レート (Exchange Rate)",
                answer: "ある通貨を別の通貨に交換する際の比率。例：USD/JPY = 150 は 1ドル=150円を意味する。",
                supplement: "直物レート（スポット）は即時交換、先物レート（フォワード）は将来の交換。金利差が先物レートに影響する。"
            },
            {
                question: "インデックス (Index)",
                answer: "市場全体や特定セクターの動きを表す指標。複数の銘柄の価格を一定のルールで合成した数値。",
                supplement: "日経225（価格加重）、TOPIX（時価総額加重）、S&P 500（時価総額加重）。パッシブ運用のベンチマークに使用。"
            },
            {
                question: "流動性 (Liquidity)",
                answer: "資産を迅速に、かつ価格に大きな影響を与えずに売買できる度合い。",
                supplement: "流動性が高い = スプレッドが小さく大口取引も容易。国債や主要通貨は高流動性、不動産は低流動性の代表例。"
            },
            {
                question: "スプレッド (Spread)",
                answer: "買値（ビッド）と売値（アスク/オファー）の差。取引コストの指標。",
                supplement: "ビッド・アスク・スプレッド = アスク価格 − ビッド価格。流動性が高いほどスプレッドは小さくなる。"
            },
            {
                question: "レバレッジ (Leverage)",
                answer: "借入資金を使って投資規模を自己資金以上に拡大すること。利益も損失も倍増する。",
                supplement: "レバレッジ倍率 = 総投資額 ÷ 自己資金。FXでは25倍、先物では10〜20倍程度のレバレッジが一般的。"
            },
            {
                question: "裁定取引 (Arbitrage)",
                answer: "同一資産の異なる市場での価格差を利用してリスクなしに利益を得る取引。",
                supplement: "例：東京市場とNY市場で同一株が異なる価格で取引されている場合、安い方を買い高い方を売る。効率的市場では裁定機会は瞬時に解消される。"
            },
            {
                question: "マーケットメイカー (Market Maker)",
                answer: "常に売買両方の気配値（ビッド・アスク）を提示し、市場に流動性を供給する業者。",
                supplement: "スプレッドが主な収益源。在庫リスクを抱えるため、ヘッジが重要。"
            },
            {
                question: "IPO (Initial Public Offering / 新規株式公開)",
                answer: "未上場企業が証券取引所に株式を上場し、一般投資家に株式を売り出すこと。",
                supplement: "公募価格と初値の差がIPOリターン。引受証券会社（アンダーライター）が価格設定と販売を担当。"
            }
        ]
    },
    {
        id: "time-value",
        name: "お金の時間的価値",
        icon: "⏰",
        color: "#00B894",
        items: [
            {
                question: "現在価値 (Present Value, PV)",
                answer: "将来のキャッシュフローを現在の価値に割り引いたもの。$$PV = \\frac{FV}{(1+r)^n}$$",
                supplement: "r = 割引率、n = 期間。「今日の1万円は1年後の1万円より価値がある」という原則を数式化したもの。"
            },
            {
                question: "将来価値 (Future Value, FV)",
                answer: "現在の金額が将来いくらになるかを計算したもの。$$FV = PV \\times (1+r)^n$$",
                supplement: "複利効果により、期間が長いほど指数的に増加する。72の法則：元本が2倍になる年数 ≈ 72 ÷ 金利(%)。"
            },
            {
                question: "割引率 (Discount Rate)",
                answer: "将来のキャッシュフローを現在価値に変換する際に使用する率。投資のリスクや機会コストを反映する。",
                supplement: "リスクフリーレート + リスクプレミアム。リスクが高い投資ほど高い割引率を適用し、現在価値は小さくなる。"
            },
            {
                question: "単利 (Simple Interest)",
                answer: "元本に対してのみ利息がつく計算方法。$$I = P \\times r \\times t$$",
                supplement: "P = 元本、r = 年利率、t = 年数。元本100万円、年利5%、3年 → 利息 = 15万円。"
            },
            {
                question: "複利 (Compound Interest)",
                answer: "元本だけでなく、発生した利息にも利息がつく計算方法。$$FV = P(1+r)^n$$",
                supplement: "「利息の利息」が発生。年複利・半年複利・連続複利など計算頻度が異なる。アインシュタインが「人類最大の発明」と呼んだとされる。"
            },
            {
                question: "連続複利 (Continuous Compounding)",
                answer: "複利の計算頻度を無限に細かくした極限。$$FV = P \\cdot e^{rt}$$",
                supplement: "e ≈ 2.71828（ネイピア数）。金融工学では連続複利が標準的に使われる。対数リターン $$\\ln(S_t/S_0)$$ と自然に対応。"
            },
            {
                question: "正味現在価値 (NPV: Net Present Value)",
                answer: "投資から得られる全キャッシュフローの現在価値合計から初期投資額を引いたもの。$$NPV = -C_0 + \\sum_{t=1}^{n}\\frac{C_t}{(1+r)^t}$$",
                supplement: "NPV > 0 なら投資すべき（価値を創造する）。NPV < 0 なら投資しない。複数プロジェクトの比較にも使用。"
            },
            {
                question: "内部収益率 (IRR: Internal Rate of Return)",
                answer: "NPVがゼロになる割引率。投資の期待収益率を表す。",
                supplement: "NPV = 0 を満たす r を数値的に求める。IRR > ハードルレートなら投資採用。複数のIRRが存在する場合があるため注意。"
            },
            {
                question: "年金現価係数 (Annuity Factor)",
                answer: "一定期間にわたる均等なキャッシュフローの現在価値を計算する係数。$$AF = \\frac{1 - (1+r)^{-n}}{r}$$",
                supplement: "住宅ローンの返済額計算に使用。月額返済額 = 借入額 ÷ 年金現価係数。永久年金（n→∞）の場合 AF = 1/r。"
            },
            {
                question: "永久年金 (Perpetuity)",
                answer: "永久に一定額を受け取り続ける年金。$$PV = \\frac{C}{r}$$",
                supplement: "C = 毎期のキャッシュフロー、r = 割引率。成長永久年金：$$PV = C/(r-g)$$（g = 成長率、r > g が条件）。"
            }
        ]
    },
    {
        id: "return-risk",
        name: "リターンとリスクの基礎",
        icon: "📈",
        color: "#E17055",
        items: [
            {
                question: "リターン (Return)",
                answer: "投資から得られる収益率。$$R = \\frac{P_1 - P_0 + D}{P_0}$$",
                supplement: "P₀ = 期初価格、P₁ = 期末価格、D = 配当。キャピタルゲイン + インカムゲイン。"
            },
            {
                question: "対数リターン (Log Return / 連続複利リターン)",
                answer: "連続複利で計算したリターン。$$r = \\ln\\left(\\frac{P_1}{P_0}\\right)$$",
                supplement: "時間加法性がある（複数期間のリターンを足し算できる）。金融工学では対数リターンが標準。正規分布を仮定しやすい。"
            },
            {
                question: "期待リターン (Expected Return)",
                answer: "将来のリターンの確率加重平均。$$E[R] = \\sum_{i} p_i \\cdot R_i$$",
                supplement: "過去の平均リターンで推定する方法と、CAPMなどのモデルで推定する方法がある。"
            },
            {
                question: "ボラティリティ (Volatility)",
                answer: "リターンの標準偏差。価格変動の大きさを表すリスクの指標。$$\\sigma = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^{n}(R_i - \\bar{R})^2}$$",
                supplement: "年率換算：日次σ × √252（年間営業日数）。ボラティリティが高い = リスクが大きい。オプション価格に直接影響。"
            },
            {
                question: "分散 (Variance)",
                answer: "リターンのばらつきの度合い。標準偏差の2乗。$$\\sigma^2 = E[(R - E[R])^2]$$",
                supplement: "ポートフォリオの分散は、個別資産の分散だけでなく共分散（相関）にも依存する。"
            },
            {
                question: "共分散 (Covariance)",
                answer: "2つの資産のリターンがどの程度一緒に動くかを表す指標。$$\\text{Cov}(R_A, R_B) = E[(R_A - E[R_A])(R_B - E[R_B])]$$",
                supplement: "正の共分散 = 同方向に動く傾向、負 = 逆方向。単位依存のため、相関係数に正規化して使うことが多い。"
            },
            {
                question: "相関係数 (Correlation)",
                answer: "2つの資産のリターンの連動性を -1 から +1 で表す。$$\\rho_{AB} = \\frac{\\text{Cov}(R_A, R_B)}{\\sigma_A \\cdot \\sigma_B}$$",
                supplement: "+1 = 完全正相関、0 = 無相関、-1 = 完全逆相関。分散投資の効果は相関が低いほど大きい。"
            },
            {
                question: "シャープレシオ (Sharpe Ratio)",
                answer: "リスク1単位あたりの超過リターン。投資効率の指標。$$SR = \\frac{E[R] - R_f}{\\sigma}$$",
                supplement: "R_f = リスクフリーレート。値が大きいほど効率的な投資。一般に SR > 1 は優秀、SR > 2 は非常に優秀。"
            },
            {
                question: "最大ドローダウン (Maximum Drawdown)",
                answer: "ある期間内で、ポートフォリオの最高値から最安値までの最大の下落幅（率）。",
                supplement: "リスク管理の重要指標。「ピークから谷までの最大損失」。ヘッジファンドの評価で頻繁に使われる。"
            },
            {
                question: "リスクフリーレート (Risk-Free Rate)",
                answer: "信用リスクがゼロとみなされる投資の利回り。通常、国債の利回りが使われる。",
                supplement: "米国債（Treasury）や日本国債（JGB）の利回り。金融モデルの基準点となる。実質的にゼロリスクではないが理論上の基準。"
            }
        ]
    },
    {
        id: "derivatives-intro",
        name: "デリバティブ入門",
        icon: "🔄",
        color: "#0984E3",
        items: [
            {
                question: "デリバティブ (Derivative)",
                answer: "その価値が原資産（株式、債券、為替、金利など）の価格から派生する金融商品の総称。",
                supplement: "主な種類：先物（Futures）、オプション（Options）、スワップ（Swaps）。ヘッジ・投機・裁定の3つの目的で利用される。"
            },
            {
                question: "先物 (Futures)",
                answer: "将来の特定日に、あらかじめ決められた価格で原資産を売買する義務を持つ標準化された契約。",
                supplement: "取引所で取引。証拠金（マージン）制度あり。日次で値洗い（Mark-to-Market）される。先物価格 ≈ 現物価格 × e^{rT}"
            },
            {
                question: "フォワード (Forward)",
                answer: "先物と同様に将来の売買を約束する契約だが、取引所を介さず当事者間で直接取引（OTC）する。",
                supplement: "カスタマイズ可能だが、カウンターパーティリスク（相手方の信用リスク）がある。為替フォワードが代表的。"
            },
            {
                question: "コールオプション (Call Option)",
                answer: "原資産を特定の価格（行使価格）で買う権利。権利であり義務ではない。",
                supplement: "原資産価格が行使価格を上回ると利益。最大損失はプレミアム（オプション料）のみ。ペイオフ = max(S−K, 0)"
            },
            {
                question: "プットオプション (Put Option)",
                answer: "原資産を特定の価格（行使価格）で売る権利。権利であり義務ではない。",
                supplement: "原資産価格が行使価格を下回ると利益。下落リスクのヘッジに使用。ペイオフ = max(K−S, 0)"
            },
            {
                question: "行使価格 (Strike Price / Exercise Price)",
                answer: "オプションの保有者が原資産を売買できる価格。契約時に決定される。",
                supplement: "ATM（At The Money）: S≈K、ITM（In The Money）: 利益が出る状態、OTM（Out of The Money）: 利益が出ない状態。"
            },
            {
                question: "プレミアム (Premium / オプション料)",
                answer: "オプションの買い手が売り手に支払う対価。オプションの市場価格。",
                supplement: "本質的価値（Intrinsic Value）+ 時間的価値（Time Value）で構成。満期が近づくと時間的価値が減衰（タイムディケイ）。"
            },
            {
                question: "スワップ (Swap)",
                answer: "2つの当事者がキャッシュフローを交換する契約。最も一般的なのは金利スワップ。",
                supplement: "金利スワップ：固定金利と変動金利を交換。通貨スワップ：異なる通貨のキャッシュフローを交換。OTC取引が主。"
            },
            {
                question: "ヘッジ (Hedge)",
                answer: "保有する資産のリスク（価格変動リスク）を、反対ポジションのデリバティブで相殺する手法。",
                supplement: "例：輸出企業が為替リスクをフォワードでヘッジ、株式保有者がプットオプションで下落リスクをヘッジ。完全ヘッジと部分ヘッジがある。"
            },
            {
                question: "ペイオフ (Payoff)",
                answer: "デリバティブの満期時の損益。グラフで表現されることが多い。",
                supplement: "コールの買い: max(S-K, 0) - premium。プットの買い: max(K-S, 0) - premium。ペイオフ図は「ホッケースティック型」。"
            },
            {
                question: "ロング (Long) / ショート (Short)",
                answer: "ロング = 買いポジション（価格上昇で利益）。ショート = 売りポジション（価格下落で利益）。",
                supplement: "空売り（ショートセリング）は株式を借りて売却し、後で買い戻す。理論上、ショートの損失は無限大。"
            },
            {
                question: "プット・コール・パリティ (Put-Call Parity)",
                answer: "同一条件のコールとプットの価格関係。$$C - P = S - K \\cdot e^{-rT}$$",
                supplement: "C = コール価格、P = プット価格、S = 原資産価格、K = 行使価格。裁定機会がなければ成立。ヨーロピアンオプションで成立。"
            }
        ]
    },
    {
        id: "portfolio-basics",
        name: "ポートフォリオ理論入門",
        icon: "💼",
        color: "#FDCB6E",
        items: [
            {
                question: "ポートフォリオ (Portfolio)",
                answer: "複数の資産を組み合わせた投資の集合。分散投資によりリスクを軽減できる。",
                supplement: "「卵を一つのカゴに盛るな」（Don't put all your eggs in one basket）。異なる資産を組み合わせることで全体のリスクを低減。"
            },
            {
                question: "分散投資 (Diversification)",
                answer: "相関の低い複数資産に投資することで、ポートフォリオ全体のリスクを低減する戦略。",
                supplement: "個別リスク（非システマティックリスク）は分散で消せるが、市場リスク（システマティックリスク）は消せない。"
            },
            {
                question: "2資産ポートフォリオのリターン",
                answer: "各資産のリターンの加重平均。$$E[R_p] = w_A E[R_A] + w_B E[R_B]$$",
                supplement: "w_A + w_B = 1。ウェイトは各資産への投資比率。"
            },
            {
                question: "2資産ポートフォリオのリスク",
                answer: "$$\\sigma_p = \\sqrt{w_A^2\\sigma_A^2 + w_B^2\\sigma_B^2 + 2w_Aw_B\\sigma_A\\sigma_B\\rho_{AB}}$$",
                supplement: "相関 ρ が1未満なら、ポートフォリオのリスクは加重平均より小さくなる（分散効果）。ρ = -1 なら理論上リスクをゼロにできる。"
            },
            {
                question: "効率的フロンティア (Efficient Frontier)",
                answer: "同じリスク水準で最大のリターンを得られる（または同じリターンで最小リスクの）ポートフォリオの集合。",
                supplement: "マーコウィッツの平均分散モデルの核心。効率的フロンティア上の点が最適ポートフォリオ。曲線の上辺部分。"
            },
            {
                question: "システマティックリスク (Systematic Risk)",
                answer: "市場全体に影響するリスク。分散投資では除去できない。",
                supplement: "景気変動、金利変動、政治リスクなど。βで測定される。「市場リスク」とも呼ばれる。"
            },
            {
                question: "非システマティックリスク (Unsystematic Risk)",
                answer: "個別企業・業界固有のリスク。分散投資により除去可能。",
                supplement: "経営判断の失敗、製品リコール、訴訟など。20〜30銘柄以上に分散すればほぼ消滅するとされる。"
            },
            {
                question: "CAPM (Capital Asset Pricing Model)",
                answer: "個別資産の期待リターンをβで説明するモデル。$$E[R_i] = R_f + \\beta_i (E[R_m] - R_f)$$",
                supplement: "β = 市場に対する感応度。β>1 は市場より変動大、β<1 は変動小。マーケットリスクプレミアム = E[R_m] - R_f。"
            },
            {
                question: "ベータ (β)",
                answer: "個別資産の市場全体に対する感応度。$$\\beta_i = \\frac{\\text{Cov}(R_i, R_m)}{\\text{Var}(R_m)}$$",
                supplement: "β = 1: 市場と同じ動き。β = 1.5: 市場が1%動くと1.5%動く。β = 0: 市場と無相関。防御セクター（公益事業等）は低β。"
            },
            {
                question: "アルファ (α)",
                answer: "CAPMが予測するリターンに対する超過リターン。投資マネージャーの「腕」を測る指標。",
                supplement: "α > 0: モデル以上のリターンを達成（スキルがある）。α < 0: モデル以下。効率的市場仮説ではα=0が期待される。"
            }
        ]
    },
    {
        id: "risk-management-basics",
        name: "リスク管理の基礎",
        icon: "🛡️",
        color: "#A29BFE",
        items: [
            {
                question: "市場リスク (Market Risk)",
                answer: "株価・金利・為替・商品価格などの市場要因の変動により損失を被るリスク。",
                supplement: "トレーディングリスクとも呼ばれる。VaRやストレステストで管理。バーゼル規制の対象。"
            },
            {
                question: "信用リスク (Credit Risk)",
                answer: "取引相手が契約上の義務（元利金の支払いなど）を履行できなくなるリスク。",
                supplement: "デフォルト（債務不履行）リスク。格付機関（S&P, Moody's, Fitch）がAAA〜Dで評価。CDSで移転可能。"
            },
            {
                question: "流動性リスク (Liquidity Risk)",
                answer: "必要な時に資産を適正価格で売買できなくなるリスク。",
                supplement: "市場流動性リスク（売買困難）と資金流動性リスク（資金調達困難）の2種類。金融危機時に顕在化。"
            },
            {
                question: "オペレーショナルリスク (Operational Risk)",
                answer: "内部プロセス、人為的ミス、システム障害、外部事象から生じる損失リスク。",
                supplement: "不正取引、システムダウン、自然災害など。バーゼルⅡから銀行の自己資本規制に含まれる。"
            },
            {
                question: "VaR (Value at Risk)",
                answer: "一定の信頼水準で、一定期間内に予想される最大損失額。",
                supplement: "例：「95% VaR = 1億円」= 95%の確率で1日の損失は1億円以内。計算方法：分散共分散法、ヒストリカル法、モンテカルロ法。"
            },
            {
                question: "ストレステスト (Stress Test)",
                answer: "極端なシナリオ（金融危機、急激な金利上昇など）下でのポートフォリオの損失を評価する手法。",
                supplement: "VaRの限界（テールリスクの過小評価）を補完。ヒストリカルシナリオ（過去の金融危機の再現）と仮想シナリオがある。"
            },
            {
                question: "格付 (Credit Rating)",
                answer: "発行体の信用力（債務返済能力）を記号で表したもの。投資判断の参考になる。",
                supplement: "投資適格：BBB以上（S&P基準）。投機的（ハイイールド）：BB以下。格下げは債券価格の急落を招く。"
            },
            {
                question: "カウンターパーティリスク (Counterparty Risk)",
                answer: "OTC取引の相手方が契約を履行できなくなるリスク。",
                supplement: "2008年リーマン破綻で顕在化。対策：中央清算機関（CCP）の利用、担保（コラテラル）の差入れ、ネッティング。"
            },
            {
                question: "ヘッジ比率 (Hedge Ratio)",
                answer: "原資産のリスクを相殺するために必要なデリバティブのポジション量。",
                supplement: "最適ヘッジ比率 = ρ × (σ_S / σ_F)。ρ = 相関、σ_S = 現物の標準偏差、σ_F = 先物の標準偏差。"
            }
        ]
    },
    {
        id: "bond-basics",
        name: "債券の基礎",
        icon: "📜",
        color: "#E84393",
        items: [
            {
                question: "クーポン (Coupon)",
                answer: "債券の保有者に定期的に支払われる利息。クーポン率は額面に対する年率で表示。",
                supplement: "例：額面100万円、クーポン3% → 年間3万円の利息。半年ごとに支払われることが多い（半年クーポン）。"
            },
            {
                question: "利回り (Yield)",
                answer: "投資額に対する年間リターン。債券では最終利回り（YTM）が最も重要。",
                supplement: "直利（Current Yield）= 年間クーポン ÷ 市場価格。YTMは将来の全キャッシュフローの現在価値 = 市場価格となる割引率。"
            },
            {
                question: "最終利回り (YTM: Yield to Maturity)",
                answer: "債券を満期まで保有した場合の年率リターン。全クーポンと償還差益を加味。$$P = \\sum_{t=1}^{n}\\frac{C}{(1+y)^t} + \\frac{F}{(1+y)^n}$$",
                supplement: "P = 債券価格、C = クーポン、F = 額面、y = YTM。債券価格と金利（YTM）は逆方向に動く。"
            },
            {
                question: "デュレーション (Duration)",
                answer: "金利変動に対する債券価格の感応度。加重平均回収期間としても解釈できる。$$D = \\frac{1}{P}\\sum_{t=1}^{n}\\frac{t \\cdot C_t}{(1+y)^t}$$",
                supplement: "マコーレー・デュレーション。修正デュレーション = D/(1+y)。金利1%上昇 → 価格変化 ≈ -修正D × 1%。"
            },
            {
                question: "イールドカーブ (Yield Curve / 利回り曲線)",
                answer: "残存年限ごとの利回りをプロットした曲線。金利の期間構造を表す。",
                supplement: "順イールド（右上がり）: 通常の状態。逆イールド（右下がり）: 景気後退の予兆とされる。フラット: 短期と長期がほぼ同じ。"
            },
            {
                question: "ゼロクーポン債 (Zero-Coupon Bond)",
                answer: "クーポン支払いがなく、額面より割り引いた価格で発行される債券。$$P = \\frac{F}{(1+y)^n}$$",
                supplement: "割引債とも呼ばれる。満期との差額がリターン。国庫短期証券（TB）や割引国債が該当。金利リスクの計算がシンプル。"
            },
            {
                question: "信用スプレッド (Credit Spread)",
                answer: "社債と同満期の国債の利回差。発行体の信用リスクを反映する。",
                supplement: "信用力が低いほどスプレッドは大きい（=高い利回りを要求）。景気後退期にはスプレッドが拡大する傾向。"
            },
            {
                question: "額面価格 (Par Value / Face Value)",
                answer: "債券の満期時に返済される元本金額。通常100円または100万円で表示。",
                supplement: "市場価格がパーより高い = プレミアム、低い = ディスカウント。クーポン率 > 市場金利 → プレミアムで取引。"
            }
        ]
    },
    {
        id: "quant-tools",
        name: "基本的な数学ツール",
        icon: "🧮",
        color: "#00CEC9",
        items: [
            {
                question: "正規分布 (Normal Distribution)",
                answer: "左右対称の釣鐘型の確率分布。平均μと標準偏差σで特徴づけられる。$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$",
                supplement: "68-95-99.7ルール：μ±1σに68%、±2σに95%、±3σに99.7%のデータが含まれる。金融リターンの近似に使われるが、裾が厚い（テールリスク）点に注意。"
            },
            {
                question: "対数正規分布 (Log-Normal Distribution)",
                answer: "変数の対数が正規分布に従う分布。株価のモデリングに使用される。",
                supplement: "株価は負にならないため、正規分布より現実的。ブラック-ショールズモデルでは株価が対数正規分布に従うと仮定。"
            },
            {
                question: "期待値 (Expected Value)",
                answer: "確率変数の平均値。$$E[X] = \\sum_i x_i \\cdot p_i$$（離散）、$$E[X] = \\int x f(x) dx$$（連続）",
                supplement: "線形性：E[aX+bY] = aE[X] + bE[Y]。ポートフォリオのリターンの期待値計算に不可欠。"
            },
            {
                question: "標準偏差 (Standard Deviation)",
                answer: "データの散らばり具合を表す。分散の平方根。$$\\sigma = \\sqrt{E[(X-\\mu)^2]}$$",
                supplement: "リスクの基本的な尺度。個別株のσは年率20-40%程度が典型的。分散ポートフォリオでは10-15%程度。"
            },
            {
                question: "ランダムウォーク (Random Walk)",
                answer: "次の値が現在の値からランダムに変動するプロセス。$$S_{t+1} = S_t + \\epsilon_t$$",
                supplement: "効率的市場仮説と関連。過去の価格パターンから将来を予測できない。株価の短期的な動きはランダムウォークに近い。"
            },
            {
                question: "モンテカルロシミュレーション (Monte Carlo Simulation)",
                answer: "乱数を使って大量のシナリオを生成し、統計的に結果を推定する手法。",
                supplement: "VaR計算、オプション価格評価、リスク分析に使用。試行回数が多いほど精度が上がるが計算コストも増加。"
            },
            {
                question: "回帰分析 (Regression Analysis)",
                answer: "変数間の関係を数式で表す統計手法。$$Y = \\alpha + \\beta X + \\epsilon$$",
                supplement: "αは切片（アルファ）、βは傾き（ベータ）、εは誤差。βの推定にOLS（最小二乗法）を使用。R²で当てはまりの良さを評価。"
            },
            {
                question: "相関と因果の違い",
                answer: "相関は2つの変数が一緒に動く傾向。因果は一方が他方の原因であること。相関≠因果。",
                supplement: "見せかけの相関（Spurious Correlation）に注意。例：アイスの売上と溺水事故は正相関だが、因果関係はない（共通原因：気温）。"
            }
        ]
    }
];
