// ===========================
// Day 134: 応用手法（マルコフ連鎖と時系列）
// ===========================
window.Day134 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⛓️ マルコフ連鎖 (Markov Chain)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「明日の天気は今日の天気だけで決まる」</div>
                    <p>将来の状態が、過去の全ての履歴ではなく、<strong>「現在の状態のみ」に依存して確率的に決まる</strong>という過程（確率過程）をマルコフ性と呼びます。<br>
                    金融工学における株価モデル（ランダムウォーク）や、オプション価格評価の基礎となる重要な概念です。</p>
                </div>
                
                <h3>推移確率行列 (Transition Probability Matrix)</h3>
                <p>状態 $i$ から状態 $j$ へ移動する確率を $p_{ij}$ とし、これを行列 $P$ にまとめたものです。<br>
                各行の確率の和は必ず $1$ になります。$n$ ステップ後の推移行列は、$P$ を $n$ 乗した $P^n$ で計算できます。</p>

                <h3>定常分布 (Stationary Distribution)</h3>
                <p>マルコフ連鎖を永遠に（$n \\to \\infty$）繰り返したとき、ある特定の「確率の落ち着き先」に収束することがあります。この極限の確率分布ベクトル $\\pi$ を<strong>定常分布</strong>と呼びます。<br>
                これは、次の方程式を解くことで求められます（固有値問題）。<br>
                <code style="display:block; text-align:center; margin:0.5rem 0;">$$ \\pi P = \\pi \\quad (ただし \\sum \\pi_i = 1) $$</code>
                </p>
                <small>※「現在の分布 $\\pi$ に推移行列 $P$ を掛けても、やっぱり $\\pi$ のままで変わらない（定まっている）」状態のことです。</small>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📈 時系列解析 (Time Series Analysis)</h2>
                <p>時間の経過とともに記録されたデータ（株価、気温、売上など）から、自己相関（過去の自分との相関）を見つけ出し、未来を予測します。</p>

                <ul class="feature-list">
                    <li><strong>弱定常性 (Weak Stationarity):</strong> 統計検定1級で最も重要な前提。<br>
                    「時間の推移によって、<strong>平均と分散が変わらず</strong>、さらに<strong>自己共分散が（時間そのものではなく）時間の『ズレ（ラグ k）』のみに依存する</strong>」性質。<br>
                    <small>株価そのものは定常ではありませんが、「株価の収益率（差分や対数差分）」をとることで定常データに変換し分析します。</small></li>
                </ul>

                <h3>代表的な時系列モデル</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>モデル名</th><th>概要</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ARモデル</strong><br>(自己回帰)</td><td>「今日の値は、過去 $p$ 日間の自分の値の線形結合＋ホワイトノイズ」で表現。<br><code>$ y_t = c + \\phi_1 y_{t-1} + \\dots + \\varepsilon_t $</code></td></tr>
                        <tr><td><strong>MAモデル</strong><br>(移動平均)</td><td>「今日の値は、現在と過去 $q$ 日間の『ホワイトノイズ（誤差）』の組み合わせ」で表現。<br><code>$ y_t = \\mu + \\varepsilon_t + \\theta_1 \\varepsilon_{t-1} + \\dots $</code></td></tr>
                        <tr><td><strong>ARMAモデル</strong></td><td>ARとMAを融合したモデル。</td></tr>
                        <tr><td><strong>ARIMAモデル</strong></td><td>非定常なデータに対し、「$d$ 回の差分」をとって定常データ（ARMA）に変換してから予測するモデル。</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day134-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day134-quiz', 'day134-quiz', [
            { question: '状態が {A, B} の2つのみであるマルコフ連鎖があり、その推移確率行列 P が以下で与えられているとします。<br>P = <br>[0.8,  0.2]<br>[0.4,  0.6]<br>（1行目はAからAへの確率0.8、AからBへの確率0.2を意味する）。<br>このマルコフ連鎖の定常分布 π = (π_A, π_B) を求めたとき、π_A の値はいくつですか？', options: ['0.8', '0.6', '0.667 (約2/3)', '0.5'], correct: 2, explanation: '定常分布 πP = π を解きます。<br>π_A * 0.8 + π_B * 0.4 = π_A ... (1)<br>π_A * 0.2 + π_B * 0.6 = π_B ... (2)<br>また、全確率の和は1なので、π_A + π_B = 1 ... (3)<br>(1) を変形すると、0.4 * π_B = 0.2 * π_A、つまり π_A = 2 * π_B。<br>(3) に代入して 2 * π_B + π_B = 3 * π_B = 1、よって π_B = 1/3。π_A = 2/3 (約0.667) となります。' },
            { question: '時系列解析における「弱定常性」の条件として、正しく含まれているものはどれですか？', options: ['すべての時点 t において、ホワイトノイズが正規分布に従うこと。', 'すべての時点 t およびラグ k について、自己共分散 C(t, t-k) が時間 t に依存せず、ラグ k にのみ依存すること。', '時系列データが上昇トレンドや下降トレンドを持っていること。', '自己回帰モデル（AR）の係数和が 1以上 であること（単位根を持つこと）。'], correct: 1, explanation: '時系列解析の根幹をなす「弱定常性」の3条件は以下の通りです。<br>1. 平均ベクトルが時間に依存せず一定。<br>2. 分散が時間に依存せず一定。<br>3. 自己共分散（自己相関）が時間 t に依存せず、時間のズレ（ラグ k）のみに依存する。<br>これらの条件が満たされて初めて、過去のパターンを未来に適用する（予測する）数学的根拠が生まれます。' },
            { question: 'ホワイトノイズ（White Noise） ε_t の定義として、正しい性質はどれですか？', options: ['平均が 0、分散が一定（σ²）で、任意の異なる時点間の自己共分散（自己相関）が常に 0 である互いに無相関な確率変数列。', '平均が時間とともに非線形に増加し、自己相関が強い時系列データ。', '分散が過去の誤差の2乗に依存して変動するモデル（ARCH/GARCHモデル）そのもの。', '株価のように、昨日と今日で強い正の相関を持つランダムウォーク系列。'], correct: 0, explanation: 'ホワイトノイズ ε_t は、「時間にかかわらず平均がゼロ」「分散が常に一定」「過去の値との相関（自己共分散）が一切ない（無相関＝真っ白）という、予測不可能な純粋な「ノイズ（誤差）」の定義モデルです。時系列モデリング（ARやMA）の部品として使われます。' },
            { question: '「今日の値は、『昨日の値（自己回帰）』と『昨日と今日の誤差（移動平均）』の両方の影響を受けて決まる」というモデルを表現する、代表的なボックス・ジェンキンス法の時系列モデルはどれですか？', options: ['GARCHモデル', 'VARモデル', 'ARMAモデル', 'ポアソン過程'], correct: 2, explanation: '「過去の自分の値」に回帰するAR（Autoregressive）モデルと、「過去の誤差（ホワイトノイズ）」の移動平均をとるMA（Moving Average）モデルを足し合わせたものが「ARMAモデル」です。<br>さらに、非定常なデータの場合は、差分（I: Integrated）をとって定常にしてからARMAを適用する「ARIMAモデル」が使われます。VARは多変量に対する拡張、GARCHはボラティリティ（分散）のモデリングに使われます。' }
        ]);

        // MathJax rendering for dynamically added content
        if (window.MathJax) {
            MathJax.typesetPromise([container]);
        }
    }
};
