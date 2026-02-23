// ===========================
// Day 126: 記述統計と確率
// ===========================
window.Day126 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📊 記述統計 (Descriptive Statistics)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 データの特徴を要約する</div>
                    <p>統計検定2級（大学基礎レベル）の出発点です。膨大なデータを1つの数値（代表値）やグラフで表現し、データの「中心」と「ばらつき」を把握します。</p>
                </div>
                
                <h3>代表値（データの中心）</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>名称</th><th>意味</th><th>特徴と注意点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>平均値 (Mean)</strong></td><td>全データの合計 ÷ データ数 ($\\bar{x}$)</td><td>極端な値（外れ値）の影響を<strong>強く受ける</strong>。</td></tr>
                        <tr><td><strong>中央値 (Median)</strong></td><td>データを大きさ順に並べたときの真ん中の値</td><td>外れ値の影響を受けにくい（ロバスト性）。所得分布などでは平均より実態を表す。</td></tr>
                        <tr><td><strong>最頻値 (Mode)</strong></td><td>データの中で最も頻繁に現れる値</td><td>質的データ（血液型やアンケートの選択肢）にも使える。</td></tr>
                    </tbody>
                </table>

                <h3>散布度（データのばらつき）</h3>
                <ul class="feature-list">
                    <li><strong>分散 ($s^2$)</strong>: 各データが平均からどれくらい離れているか（偏差）の2乗の平均。$$ s^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2 $$</li>
                    <li><strong>標準偏差 ($s$)</strong>: 分散の正の平方根。データの単位が元のデータと同じになり直感的に分かりやすい。<strong>分散が「面積」なら標準偏差は「長さ」。</strong></li>
                    <li><strong>四分位範囲 (IQR)</strong>: データを4等分したときの $Q_3 - Q_1$。外れ値に強いばらつきの指標。「箱ひげ図」の箱の長さに相当。</li>
                </ul>

                <h3>2変数の記述統計</h3>
                <p>2つのデータ（XとY）の関係性を見ます。</p>
                <ul>
                    <li><strong>共分散 ($S_{xy}$)</strong>: 右上がりか右下がりかの「方向」を示す。単位に依存するため「強さ」は測れない。</li>
                    <li><strong>相関係数 ($r$)</strong>: 共分散を各々の標準偏差で割ったもの。<strong>-1 から 1</strong> までの値をとる。単位に依存せず、直線的な関係の「強さ」を測る。※「因果関係」を意味するものではない（擬似相関に注意）。</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🎲 確率とベイズの定理</h2>
                <p>起こり得る事象の可能性を数学的に扱います。金融工学の文脈では、不確実性（リスク）をモデル化する基礎となります。</p>

                <h3>条件付き確率と乗法定理</h3>
                <p>事象Bが起こったという条件のもとで、事象Aが起こる確率を <strong>$P(A|B)$</strong> と書きます。</p>
                <div style="background: var(--bg-card); padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); text-align:center;">
                    $$ P(A|B) = \\frac{P(A \\cap B)}{P(B)} $$
                    <p style="margin-top:0.5rem;">変形して乗法定理: $P(A \\cap B) = P(A|B)P(B)$</p>
                </div>

                <h3>ベイズの定理 (Bayes' Theorem)</h3>
                <p>結果から原因を推測する（事後確率を求める）定理。統計検定2級で必ず出題される重要トピックです。</p>
                <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin-bottom:1rem;">
                    $$ P(\\text{原因}A|\\text{結果}B) = \\frac{P(\\text{結果}B|\\text{原因}A) \\cdot P(\\text{原因}A)}{P(\\text{結果}B)} $$
                </div>
                <div class="info-box tip">
                    <div class="info-box-title">💡 検査の陽性・陰性問題の解き方</div>
                    <p>公式を丸暗記するより、「1万人の村があったら」と具体的な人数でクロス集計表（ツリー図）を書くのが、本番でミスをなくす最良の戦略です。</p>
                </div>
            </div>

            <div id="day126-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day126-quiz', 'day126-quiz', [
            { question: 'ある国の国民の年収データを調べたところ、極端に年収が高いごく一部の富裕層が存在するため、分布が右に長く裾を引く形（右に歪んだ分布）になっていました。このとき、平均値、中央値、最頻値の一般的な大小関係はどれですか？', options: ['平均値 ＜ 中央値 ＜ 最頻値', '最頻値 ＜ 中央値 ＜ 平均値', '最頻値 ＝ 中央値 ＝ 平均値', '中央値 ＜ 最頻値 ＜ 平均値'], correct: 1, explanation: '右に裾が長い分布（所得分布など）では、少数の極端に大きな値に引っ張られて「平均値」が最も大きくなります。「最頻値」が一番左（低い額）の山の頂点にあり、「中央値」はその中間に位置します。したがって 「最頻値 ＜ 中央値 ＜ 平均値」 となります。' },
            { question: '変数Xと変数Yのピアソンの積率相関係数に関する記述として、正しいものはどれですか？', options: ['相関係数は単位に依存し、Xをグラムからキログラムに変換すると値が1000分の1になる。', '相関係数が0であれば、XとYの間にはいかなる関係（非直線的な関係を含む）も存在しないことが証明される。', '相関係数が0.8であれば、XがYの原因である（因果関係がある）と強く推定できる。', '相関係数は、外れ値（極端な値）によって大きく影響を受ける可能性がある。'], correct: 3, explanation: 'ピアソンの相関係数は「外れ値に弱い（大きく引っ張られる）」という特徴があります。他の選択肢の誤り：相関係数は無次元（単位に依存しない）です。r=0は「極端な直線関係がない」ことを示すだけで、U字型のような非線形関係が存在する可能性があります。相関関係は因果関係を含意しません（アイスの売上と水難事故件数など、第三の変数が影響する擬似相関があります）。' },
            { question: 'ある特定の病気に罹患している確率は 1% (0.01) です。<br>この病気の検査を行うと、病気の人を正しく「陽性」と判定する確率（感度）は 90% です。<br>また、病気ではない人を誤って「陽性」と判定してしまう確率（偽陽性率）は 5% です。<br>ある人がこの検査を1回受けて「陽性」と判定されました。この人が本当に病気に罹患している確率（事後確率）に最も近い値はどれですか？', options: ['16%', '90%', '95%', '33%'], correct: 0, explanation: '【ベイズの定理・面積図アプローチ】10000人の村を想像します。有病者は100人、無病者は9900人。<br>・有病者100人のうち、陽性になるのは 100 × 0.9 = 90人<br>・無病者9900人のうち、誤って陽性になるのは 9900 × 0.05 = 495人<br>検査で陽性になったのは全員で 90 + 495 = 585人。そのうち本当に病気なのは90人です。<br>求める確率 = 90 / 585 ≈ 0.1538... つまり約 15.4%（選択肢の中では16%）となります。' },
            { question: '箱ひげ図（Box-plot）において、箱の「下端」と「上端」はそれぞれ何を表していますか？', options: ['最小値 と 最大値', '第1四分位数(Q1) と 第3四分位数(Q3)', '平均値-標準偏差 と 平均値+標準偏差', '中央値 と 最大値'], correct: 1, explanation: '箱ひげ図の「箱」の部分は、データの下から25%に位置する「第1四分位数（Q1）」と、75%に位置する「第3四分位数（Q3）」で構成されます。箱の中の線は「中央値（第2四分位数）」です。箱の長さ（Q3 - Q1）を四分位範囲（IQR）と呼びます。ひげの端は通常、最小値・最大値（外れ値を除外した範囲）を示します。' }
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
