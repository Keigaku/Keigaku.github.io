// ===========================
// Day 128: 推定と仮説検定の基礎
// ===========================
window.Day128 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎯 統計的推定 (Statistical Estimation)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 標本から母集団を射抜く</div>
                    <p>手元のデータ（サンプル）を使って、知ることのできない「真の値（母数：母平均や母分散）」を推量する技術です。</p>
                </div>
                
                <h3>点推定と不偏性</h3>
                <p>「真の平均はズバリ 50 だろう」と一つの値（点）で推定することです。ここで問題になるのが、「標本データからそのまま計算した分散」は、真の分散（母分散）よりも<strong>少し小さめに出てしまう</strong>という性質です。</p>
                <p>これを補正し、「期待値がちゃんと母数に一致する（偏りがない：不偏性を持つ）」ようにしたのが<strong>不偏分散 ($s^2$ または $V$)</strong>です。データ数 $n$ ではなく、自由度 <strong>$n-1$</strong> で割ります。</p>
                <div style="text-align:center; margin: 1rem 0;">
                    $$ s^2 = \\frac{1}{n-1}\\sum_{i=1}^{n}(x_i - \\bar{x})^2 $$
                </div>

                <h3>区間推定法 (Interval Estimation)</h3>
                <p>「真の平均は 45 〜 55 の間にあるだろう」と幅（区間）を持たせて推定します。95%信頼区間の意味は、「この推定方法を100回繰り返したとき、約95回の割合で、計算された区間の中に真の母数（μ）が含まれる」です。</p>

                <div class="info-box tip">
                    <div class="info-box-title">📝 母平均の信頼区間の公式（超重要）</div>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>母分散 $\\sigma^2$ が既知、または $n$ が大</strong>（正規分布を使用）<br>
                        $$ \\bar{x} \\pm Z_{\\alpha/2} \\frac{\\sigma}{\\sqrt{n}} $$
                        <p style="margin:0.3rem 0 0.5rem;">（95%なら Z値は 1.96）</p></li>
                        <li><strong>母分散が未知、かつ $n$ が小さい</strong>（t分布を使用）<br>
                        不偏分散 $V$ を使い、標準正規分布の代わりに「自由度 $n-1$ の<strong> t分布 </strong>」のパーセンタイル値を使用します。
                        $$ \\bar{x} \\pm t_{n-1}(\\alpha/2) \\frac{\\sqrt{V}}{\\sqrt{n}} $$</li>
                    </ul>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>⚖️ 仮説検定 (Hypothesis Testing)</h2>
                <p>「新薬に効果はあるか？」「工場の機械は正常か？」をデータから確率的に判断（白黒つける）するフレームワークです。</p>

                <h3>検定のステップ</h3>
                <ol>
                    <li><strong>帰無仮説 ($H_0$) と対立仮説 ($H_1$) を立てる</strong><br>
                    帰無仮説は「差がない・効果がない（無に帰す仮説）」。対立仮説は「差がある（自分が本当に主張したいこと）」。</li>
                    <li><strong>有意水準 ($\\alpha$) を決める</strong><br>
                    普通は 5% (0.05) または 1%。これより珍しいことが起きたら「偶然ではない」と判断する基準線。</li>
                    <li><strong>検定統計量を計算する</strong>（データからZ値やt値を求める）</li>
                    <li><strong>判定する (p値を用いる)</strong><br>
                    データから計算された「帰無仮説が正しいとした場合に、今回のような極端なデータが得られる確率（p値）」が、有意水準 $\\alpha$ よりも<strong>小さければ（p < 0.05 等）</strong>、「そんな珍しいことは起きないはずだ、つまり帰無仮説が間違っている！」として、帰無仮説を<strong>棄却</strong>し、対立仮説を採用する。</li>
                </ol>

                <div class="info-box important">
                    <div class="info-box-title">🚨 第1種の誤りと第2種の誤り</div>
                    <table class="styled-table text-sm" style="margin-top:0.5rem;">
                        <thead><tr><th></th><th>本当は $H_0$ が正しい<br>(差がない, 無罪)</th><th>本当は $H_0$ は偽 ($H_1$が正しい)<br>(差がある, 有罪)</th></tr></thead>
                        <tbody>
                            <tr><td><strong>判定: $H_0$ 棄却</strong><br>(差がある！有罪！)</td><td style="background-color:rgba(255,0,0,0.1);"><strong>第1種の誤り ($\\alpha$ エラー)</strong><br>「無実の罪（冤罪）」<br>有意水準 $\\alpha$ がまさにこの確率。</td><td><strong>正解 (検出力: $1-\\beta$)</strong><br>真犯人を正しく捕まえた！</td></tr>
                            <tr><td><strong>判定: $H_0$ 採択</strong><br>(差がない, 無罪放免)</td><td><strong>正解</strong></td><td style="background-color:rgba(255,200,0,0.1);"><strong>第2種の誤り ($\\beta$ エラー)</strong><br>「見逃し（真犯人を逃がす）」</td></tr>
                        </tbody>
                    </table>
                    <p style="font-size:0.9rem; margin-top:0.5rem;">※第1種の誤りを減らそう（疑わしきは罰せず）とすると、第2種の誤り（見逃し）が増えるというトレードオフがあります。</p>
                </div>
            </div>

            <div id="day128-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day128-quiz', 'day128-quiz', [
            { question: 'サンプルサイズ n=10 のデータから、母分散の不偏推定値（不偏分散）を計算する際、各データの平均からの偏差の平方和（偏差平方和）を「何」で割るべきですか？', options: ['n (10)', 'n-1 (9)', 'n+1 (11)', '√n (約3.16)'], correct: 1, explanation: '標本から母集団の分散を推定する場合、単にデータ数 n で割った「標本分散」は、平均的に真の分散よりも少し小さくなる（過小評価する）という偏り（バイアス）を持ちます。この偏りをなくして期待値が母分散に一致するようにしたのが「不偏分散」であり、データ数から1を引いた「自由度 n-1」で割ります。' },
            { question: '95%信頼区間の意味として、統計学的に最も正確な表現はどれですか？', options: ['真の母平均が、計算されたその特定の区間内に存在する確率は95%である。', '母集団のデータの95%が、計算された区間の中に含まれている。', '同様の標本抽出と区間推定の手続きを100回繰り返した場合、そのうち約95回の「計算された区間」に、固定された真の母平均が含まれる。', '計算された標本平均が、真の母平均を中心に±95%の範囲に収まっている。'], correct: 2, explanation: '信頼区間の頻度論的な（古典統計学の）解釈についてです。「真の母平均」は未知ですが固定された値（定数）であり、確率的に動くのは「標本から計算された区間の方」です。したがって、「この手技を何度も（100回等）繰り返したら、95回はその区間という網の中に真の値がすっぽり入るよ」というのが正解の解釈です。' },
            { question: '仮説検定において、「帰無仮説が実際には正しい（例えば「新薬は偽薬と効果が変わらない」）にもかかわらず、標本のばらつきによる偶然から、誤って帰無仮説を棄却してしまう（「効果がある！」と誤判定する）」エラーを何と呼びますか？', options: ['第1種の誤り (Type I error)', '第2種の誤り (Type II error)', '検出力 (Power)', '有意水準の低下'], correct: 0, explanation: '真ではないこと（差がないのに）を「真である（差がある！）」と誤って主張してしまう（冤罪・あわてんぼうの誤り）を「第1種の誤り」と呼びます。この誤りを犯す確率の最大値が「有意水準 (α)」です。逆に、本当に差があるのに「差がない」と見逃してしまう（ぼんやりの誤り）のを「第2種の誤り (β)」と言います。' },
            { question: 'ある機械の部品製造において、従来は平均重量が 50.0g でした。機械を調整した後、無作為に抽出した16個の部品の重量を測定したところ、標本平均が 50.8g、不偏分散が 4.0g²（標本標準偏差では2.0g）でした。母分散は未知とします。調整前と重量が変わったかを検定したい場合、検定統計量として何を用いるのが最も適切ですか？', options: ['標準正規分布のZ統計量', '自由度15の t統計量', '自由度16の t統計量', 'カイ二乗統計量'], correct: 1, explanation: '母分散が未知、かつサンプルサイズ n が小さい（今回は n=16）場合、標本平均の分布に基づく検定には、標準正規分布の代わりに「t分布」を用います（1標本のt検定）。このとき使用するt分布の自由度は「n - 1」となりますので、16 - 1 = 15、つまり「自由度15のt分布」に従うt統計量を用います。' }
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
