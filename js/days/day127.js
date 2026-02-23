// ===========================
// Day 127: 種々の確率分布と標本分布
// ===========================
window.Day127 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📈 代表的な確率分布</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 現実の現象に当てはめる「数学の型」</div>
                    <p>コイン投げから株価の変動まで、世の中のランダムな現象の多くは、いくつかの代表的な「確率分布の型」に当てはめて計算できます。統計検定2級では、それぞれの分布の<strong>期待値（平均）と分散</strong>の公式を覚えておくことが必須です。</p>
                </div>
                
                <h3>離散型確率分布（飛び飛びの値）</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>分布名</th><th>どんな時に使う？</th><th>期待値 $E(X)$</th><th>分散 $V(X)$</th></tr></thead>
                    <tbody>
                        <tr><td><strong>二項分布</strong><br>$B(n, p)$</td><td>成功確率 $p$ の試行を独立に $n$ 回繰り返したとき、成功する「回数」。<br><small>例：サイコロを10回投げて1が出る回数。</small></td><td>$np$</td><td>$np(1-p)$</td></tr>
                        <tr><td><strong>ポアソン分布</strong><br>$Po(\\lambda)$</td><td>「ごくまれな事象」が、一定期間に起こる「回数」。<br><small>例：1日に工場で発生する不良品の数（平均 $\\lambda$ 個）。</small></td><td>$\\lambda$</td><td>$\\lambda$<br><span style="color:var(--accent-red); font-size:0.8rem;">※平均と分散が同じ！</span></td></tr>
                        <tr><td><strong>幾何分布</strong></td><td>成功確率 $p$ の試行を繰り返し、<strong>初めて</strong>成功するまでの「失敗した回数」または「試行回数」。</td><td>$1/p$<br>(試行回数の場合)</td><td>$(1-p)/p^2$</td></tr>
                    </tbody>
                </table>

                <h3>連続型確率分布（繋がった値）</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>分布名</th><th>どんな時に使う？</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>正規分布</strong><br>$N(\\mu, \\sigma^2)$</td><td>自然界や社会で最もよく見られる、平均 $\\mu$ を中心とした釣鐘型の分布。</td><td>【標準化】<br>$Z = (X - \\mu) / \\sigma$ を計算すると、$N(0, 1)$ に変換され、標準正規分布表が使える。</td></tr>
                        <tr><td><strong>一様分布</strong><br>$U(a, b)$</td><td>区間 $(a,b)$ でどこも同じ確率。<br><small>例：ルーレット、プログラミングのランダム関数。</small></td><td>期待値: $(a+b)/2$<br>分散: $(b-a)^2/12$</td></tr>
                        <tr><td><strong>指数分布</strong></td><td>ポアソン分布に従う事象が、次に起こるまでの「間隔（時間）」。<br><small>例：次の客が来店するまでの時間。</small></td><td>「無記憶性」という特殊な性質を持つ（これまでの待ち時間が今後の待ち時間に影響しない）。</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📊 標本と大数の法則・中心極限定理</h2>
                <p>全体（母集団）を知りたいが全ては調べられない時、一部（標本：サンプル）を取り出して推測します。統計学が成立する根本の魔法の定理が以下の2つです。</p>

                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
                    <div style="flex:1; min-width: 300px; background: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="color:var(--accent-blue);">大数の法則 (Law of Large Numbers)</h4>
                        <p><strong>「サンプルサイズ $n$ を大きくすれば、標本平均 $\\bar{X}$ は真の平均（母平均 $\\mu$）に近づく」</strong></p>
                        <p><small>サイコロを振る回数を無限に繰り返せば、出た目の平均は理論値の3.5に必ず収束する、という経験則の数学的証明。</small></p>
                    </div>
                    <div style="flex:1; min-width: 300px; background: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="color:var(--accent-purple);">中心極限定理 (Central Limit Theorem)</h4>
                        <p><strong>「元の母集団がどんな分布であっても（いびつでも）、サンプルサイズ $n$ が十分大きければ、<u>標本平均 $\\bar{X}$ の分布は</u>正規分布 $N(\\mu, \\sigma^2/n)$ に近似できる」</strong></p>
                        <p><small>この定理があるおかげで、どんなデータでも正規分布を前提とした仮説検定や区間推定を行うことができます。※分散が $n$ 分の1になることに注意！</small></p>
                    </div>
                </div>

                <div class="info-box tip">
                    <div class="info-box-title">⚠️ よくある勘違い</div>
                    <p>中心極限定理は「nを大きくすれば、元のデータが正規分布になる」というものでは<strong>ありません</strong>。<br>「n個取ってきて平均を計算する」という作業を何度も繰り返した時、その<strong>『平均値のヒストグラム（標本平均の分布）』</strong>が正規分布の形になる、という定理です。</p>
                </div>
            </div>

            <div id="day127-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day127-quiz', 'day127-quiz', [
            { question: '表が出る確率が0.4の歪んだコインがあります。このコインを100回投げたとき、表が出る回数Xの期待値（平均）と分散はそれぞれいくつですか？', options: ['期待値：40、分散：24', '期待値：40、分散：16', '期待値：50、分散：25', '期待値：40、分散：40'], correct: 0, explanation: 'コインをn回投げて表が出る回数は、二項分布 B(n, p) に従います。ここでは n=100, p=0.4 です。<br>・期待値 E(X) = np = 100 × 0.4 = 40<br>・分散 V(X) = np(1-p) = 100 × 0.4 × 0.6 = 24' },
            { question: 'ある交差点では、交通事故が1ヶ月に平均3件発生します。この事故の発生件数はポアソン分布に従うと仮定します。このとき、事故発生件数の分散はいくつですか？', options: ['1.5', '3', '6', '9'], correct: 1, explanation: 'ポアソン分布 Po(λ) の最大の特徴は、「期待値（平均）と分散が等しい」という性質です。平均 λ=3 のポアソン分布の分散は、そのまま 3 となります。' },
            { question: '母集団が平均 μ = 50、分散 σ² = 144 の一様分布（連続一様分布）であるとします。この母集団から大きさ（サンプルサイズ） n = 36 の無作為標本を抽出したとき、「標本平均（X̄）」の分布はどうなりますか？', options: ['平均50、分散144の一様分布に従う。', '平均50、分散4の正規分布に近似して従う。', '平均50、分散144の正規分布に近似して従う。', '平均50、分散4の一様分布に従う。'], correct: 1, explanation: '中心極限定理により、母集団が正規分布でなくても、サンプルサイズnが十分に大きければ（通常n≧30）、標本平均 X̄ の分布は 「平均 μ、分散 σ²/n の正規分布」に近似されます。<br>ここでは μ = 50。分散は 144 / 36 = 4 となります。したがって、平均50、分散4の正規分布になります。' },
            { question: '「無記憶性（Memoryless property）」を持つ確率分布はどれですか？', options: ['正規分布', 'ポアソン分布', '指数分布', '二項分布'], correct: 2, explanation: '「無記憶性」とは、「これまで待った時間は、これからさらに待つ時間の確率に影響を与えない（過去を記憶しない）」という性質です（例：電球が切れるまでの寿命、客が来るまでの時間など）。連続型確率分布の中でこの無記憶性を持つのは「指数分布」のみです。（離散型では幾何分布が該当します）。' }
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
