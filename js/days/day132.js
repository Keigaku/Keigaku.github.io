// ===========================
// Day 132: 推定理論
// ===========================
window.Day132 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📈 点推定の理論 (Estimation Theory)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「良い推定」とは何か？</div>
                    <p>観測したデータから真のパラメータ（母平均や母分散）$\theta$ を予想する関数（推定量 $\\hat{\\theta}$）を作ります。では、その推定量が「良い」と数学的に言える条件は何でしょうか。</p>
                </div>
                
                <h3>推定量の望ましい性質</h3>
                <ul class="feature-list">
                    <li><strong>不偏性 (Unbiasedness):</strong><br>
                    推定量の期待値（平均）が、真のパラメータに一致すること。<br><code>$ E[\\hat{\\theta}] = \\theta $</code></li>
                    <li><strong>一致性 (Consistency):</strong><br>
                    サンプルサイズ $n$ を無限に大きくすれば、推定量が真のパラメータに確率収束（完全に一致）すること。<br>
                    <small>（大数の法則のおかげで、標本平均は一致推定量になります）</small></li>
                    <li><strong>有効性 (Efficiency):</strong><br>
                    不偏推定量の中で、<strong>「分散（ばらつき）」が最も小さい</strong>こと（一様最小分散不偏推定量: UMVUE）。<br>
                    分散が小さいほど、推定の精度が高いと言えます。</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>💡 クラメール・ラオの不等式 (Cramer-Rao Lower Bound)</h2>
                <p>1級における点推定の究極の定理です。「どんないい不偏推定量を作っても、その分散（ばらつき）はある<strong>『限界（下限）』</strong>より小さくすることは絶対にできない」という宇宙の法則を示した不等式です。</p>

                <div style="background: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); text-align:center;">
                    <code>$$ V(\\hat{\\theta}) \\ge \\frac{1}{n I(\\theta)} $$</code>
                </div>
                <p style="margin-top:1rem;">ここで $I(\\theta)$ は<strong>「フィッシャー情報量 (Fisher Information)」</strong>と呼ばれ、データがパラメータ $\\theta$ について持っている「情報の量」を表します（対数尤度関数の2階微分にマイナスをつけたものの期待値）。</p>
                <p>この下限にぴったり一致する推定量（有効推定量）を見つけることができれば、「これ以上完璧な推定量は存在しない」と証明したことになります。</p>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🔍 最尤推定法 (Maximum Likelihood Estimation: MLE)</h2>
                <p>現代の統計学や機械学習において、推定量を作るための最も強力で一般的な手法です。</p>

                <div class="info-box tip">
                    <div class="info-box-title">アイデアの核</div>
                    <p>「今手元にあるこのデータが得られたということは、<strong>『このデータが得られる確率（尤度: ゆうど）』が最も高くなるようなパラメータ</strong>こそが、真のパラメータのはずだ」と逆算する方法。</p>
                </div>

                <h3>最尤推定の手順</h3>
                <ol>
                    <li>同時確率密度関数を積の形で書き、それをパラメータ $\\theta$ の関数とみなして <strong>尤度関数 $L(\\theta)$</strong> を作る。</li>
                    <li>掛け算の微分は大変なので、両辺の対数をとる（<strong>対数尤度関数 $\\log L(\\theta)$</strong> ）。</li>
                    <li>対数尤度関数を $\\theta$ で偏微分し、イコールゼロとおいて方程式を解く（極大値を求める）。</li>
                </ol>
            </div>

            <div id="day132-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day132-quiz', 'day132-quiz', [
            { question: '標本分散は、母分散 σ² に対する「不偏推定量」ではありません（少し小さめの値になってしまうバイアスがあるためです）。しかし、サンプルサイズ n を無限大(∞)に近づけると、標本分散は母分散に確率収束します。この「n→∞のときに真の値に収束する」性質のことを何と呼びますか？', options: ['有効性 (Efficiency)', '一致性 (Consistency)', '完備性 (Completeness)', '十分性 (Sufficiency)'], correct: 1, explanation: '推定量が、サンプルサイズ（データ数）を無限に増やしたときに真のパラメータの値へ確率的に収束していく性質を「一致性（Consistency）」と呼びます。標本分散は「不偏」ではありませんが「一致推定量」ではあります（nで割ろうがn-1で割ろうが、無限大になれば差がなくなるため）。' },
            { question: 'フィッシャー情報量（Fisher Information） I(θ) は、対数尤度関数 l(θ; x) = log f(x; θ) を用いてどのように定義（計算）されますか？ 統計検定1級で最も頻出する基本的な変形公式を選んでください。', options: ['I(θ) = E [ ( d/dθ l(θ; x) )^2 ] = - E [ d²/dθ² l(θ; x) ]', 'I(θ) = E [ d/dθ l(θ; x) ]', 'I(θ) = V ( l(θ; x) ) / E [ l(θ; x) ]', 'I(θ) = E [ d/dθ f(x; θ) ] /  E [ d²/dθ² f(x; θ) ]'], correct: 0, explanation: 'フィッシャー情報量の定義は、スコア関数（対数尤度の1階微分）の2乗の期待値「E [ ( d/dθ log f )² ]」です。<br>また、ある正則条件のもとでは、これを「対数尤度の2階微分にマイナスをつけたものの期待値： - E[ d²/dθ² log f ]」として計算できるという美しい性質があり、実際の計算では圧倒的に後者が多用されます。' },
            { question: '最尤推定法（MLE）によって求められた推定量（最尤推定量）の持つ、漸近的（サンプルサイズ n が十分に大きいとき）な性質として【間違っている】ものはどれですか？', options: ['漸近的に正規分布に従う（漸近正規性）。', '漸近的に不偏推定量になる（漸近不偏性）。', '漸近的にフィッシャー情報量の下限（クラメール・ラオの下限）に達する（漸近有効性）。', 'サンプルサイズ n が小さくても、常に分散が最小の不偏推定量（UMVUE）になる。'], correct: 3, explanation: '最尤推定量の素晴らしさは「nを無限大に飛ばしたとき（漸近的）に、最強の性質（正規分布になる、不偏になる、クラメール・ラオの理論的限界まで分散が小さくなる）」が全て備わっている点です。<br>しかし、nが小さいとき（小標本）では、偏り（バイアス）を持つことが多く（例：正規分布の母分散の最尤推定量はnで割る標本分散となり不偏ではない）、常に最強というわけではありません。' },
            { question: '「十分統計量 (Sufficient Statistic)」の概念についての説明で、最も適切なものはどれですか？', options: ['母平均と母分散が等しいことを示す統計量。', 'サンプルサイズが30以上であることを確認するための統計量。', 'データが持つパラメータ θ に関する情報を「まったくこぼさずに全て」含んでいるような統計量。これさえあれば元の生データは捨ててよい。', '外れ値（異常値）の影響を全く受けない（ロバストな）統計量。'], correct: 2, explanation: '十分統計量 T(X) とは、真のパラメータ θ を推定するために必要な情報（エッセンス）を1滴残らず圧縮して持っている統計量のことです。<br>例えば、正規分布のパラメータ推定において、「個別のデータの値（x1, x2...xn）」をすべて知らなくても、「標本平均」と「標本分散」という2つの数字（十分統計量）さえわかっていれば、θの推定には完全に「十分」である、といった性質です（フィッシャー・ネイマンの分解定理で証明します）。' }
        ]);

        // MathJax rendering for dynamically added content
        if (window.MathJax) {
            MathJax.typesetPromise([container]);
        }
    }
};
