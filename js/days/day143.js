// ===========================
// Day 143: ディスカウントファクターとカーブ構築
// ===========================
window.Day143 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📐 ディスカウントファクター (Discount Factor: DF)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「将来の1円は今日の何円か？」を数値化する</div>
                    <p>OTCデリバティブの時価評価の根幹をなす概念です。<strong>将来のキャッシュフローを「今日の価値」に換算するための係数</strong>がディスカウントファクター（DF）です。<br>
                    Be-DFSで扱う全ての商品の評価に使われるため、開発責任者は必ず理解しておく必要があります。</p>
                </div>
                
                <h3>DF の直感的な理解</h3>
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <p style="text-align:center; font-size: 1.1rem;"><strong>1年後の100万円</strong>を年利2%で割引くと → <strong>今日の価値は約98.04万円</strong></p>
                    <div style="text-align:center; margin-top: 1rem;">
                        $$ DF(T) = \\frac{1}{(1 + r)^T} $$
                    </div>
                    <p style="text-align:center; font-size:0.85rem; margin-top:0.5rem;">$DF(T)$ = 時点 $T$ のディスカウントファクター、$r$ = 金利（年率）</p>
                </div>

                <h3>DF の基本性質</h3>
                <ul class="feature-list">
                    <li><strong>$DF(0) = 1$</strong>：今日の1円は今日の1円（当たり前）</li>
                    <li><strong>$0 < DF(T) < 1$</strong>：金利がプラスなら、将来のお金は今日の価値より小さい</li>
                    <li><strong>$T$ が大きいほど $DF$ は小さい</strong>：遠い将来ほどより大きく割引かれる</li>
                    <li><strong>金利が上がると $DF$ は下がる</strong>：金利と反比例の関係</li>
                </ul>

                <h3>連続複利表現</h3>
                <p>実務（特にクオンツモデル）では連続複利で表現することが多いです：</p>
                <div style="text-align:center; margin: 1rem 0;">
                    $$ DF(T) = e^{-rT} $$
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📈 イールドカーブ（金利の期間構造）</h2>
                <p>ディスカウントファクターは「期間ごとに異なる金利」から導かれます。この<strong>期間（テナー）と金利の関係をプロットしたもの</strong>がイールドカーブです。</p>

                <h3>カーブの構築（ブートストラップ法）</h3>
                <p>市場で観測される金利商品の価格（スワップレート、OISレート等）から、各テナーのゼロレート（DF）を順番に「つないで」いくのが<strong>ブートストラップ法</strong>です。</p>
                <ol>
                    <li><strong>短期（〜1年）</strong>：OIS（Overnight Index Swap）レートやデポジットレートからDFを計算</li>
                    <li><strong>中長期（1年〜30年）</strong>：スワップレート（Par Rate）から、短期側のDFを既知として長期側のDFを逆算</li>
                    <li><strong>超長期（30年〜）</strong>：流動性が低い部分は補間・外挿（スプラインや Smith-Wilson 法）</li>
                </ol>

                <h3>OISディスカウンティング</h3>
                <div class="info-box important">
                    <div class="info-box-title">🚨 2008年金融危機以降のパラダイムシフト</div>
                    <p>金融危機前はLIBORカーブを「割引」にも「将来CF予測」にも使っていましたが、危機後は<strong>「割引」にはOIS（リスクフリーに近い）カーブ</strong>を、<strong>「将来CF予測」には各テナーのフォワードカーブ</strong>を使う<strong>「マルチカーブ・フレームワーク」</strong>が標準になりました。</p>
                    <p>Be-DFSのプライシングエンジンは、この<strong>マルチカーブ対応</strong>が必須要件です。</p>
                </div>

                <h3>Be-DFS開発者が理解すべきカーブ群</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>カーブ名</th><th>用途</th><th>構築元データ</th></tr></thead>
                    <tbody>
                        <tr><td><strong>OISカーブ</strong></td><td>キャッシュフローの割引（DF計算）</td><td>OISレート</td></tr>
                        <tr><td><strong>フォワードカーブ</strong></td><td>将来の変動金利（TONA, SOFR等）の予測</td><td>IRS / Basis Swap レート</td></tr>
                        <tr><td><strong>ベーシスカーブ</strong></td><td>テナーベーシスの補正</td><td>Basis Swapレート</td></tr>
                        <tr><td><strong>FXフォワードカーブ</strong></td><td>将来の為替レート予測</td><td>FX Swap ポイント</td></tr>
                        <tr><td><strong>クレジットカーブ</strong></td><td>デフォルト確率の推定</td><td>CDSスプレッド</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day143-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day143-quiz', 'day143-quiz', [
            { question: 'ディスカウントファクター（DF）の値として正しい性質はどれですか？（金利がプラスの場合）', options: ['常に1より大きい', '常にマイナスの値', '0より大きく1以下', '常にちょうど1'], correct: 2, explanation: 'DF(0)=1（今日の価値はそのまま）であり、金利がプラスの場合、将来のキャッシュフローは割引かれるため DF(T) < 1 となります。期間Tが長いほどDFは小さくなります。' },
            { question: '2008年金融危機以降の「マルチカーブ・フレームワーク」において、キャッシュフローの「割引」に使うカーブとして最も適切なものはどれですか？', options: ['LIBORカーブ', 'OISカーブ（リスクフリーに近い）', 'クレジットカーブ', 'ボラティリティカーブ'], correct: 1, explanation: '金融危機以降、LIBORには信用リスクが含まているためリスクフリーとは言えないことが明確になりました。そのため「割引」にはOIS（Overnight Index Swap）カーブを使い、「将来の変動金利の予測」には各テナーのフォワードカーブを使う「マルチカーブ・フレームワーク」が標準になりました。' },
            { question: 'ブートストラップ法とは何ですか？', options: ['ランダムにサンプリングしてカーブを推定する方法', '市場の金利商品価格から各テナーのDFを順番に逆算して構築する方法', '過去のデータから将来の金利を予測する方法', '複数のカーブを平均する方法'], correct: 1, explanation: 'ブートストラップ法は、短い期間から長い期間へ順番に、市場で観測されるスワップレートやOISレート等から各テナーのゼロレート（DF）を逆算して「つないで（ストリップして）」いくカーブ構築手法です。短期側のDFを既知として、長期側のDFを一つずつ求めていきます。' },
            { question: '年率2%の金利環境下で、3年後に受け取る100万円の現在価値（PV）に最も近い値はどれですか？（単利ではなく複利で計算）', options: ['約94.23万円', '約96.00万円', '約98.00万円', '約92.00万円'], correct: 0, explanation: 'DF(3) = 1/(1+0.02)^3 = 1/1.0612 ≒ 0.9423 です。したがって PV = 100万円 × 0.9423 ≒ 94.23万円 となります。金利が高いほど、期間が長いほど、現在価値は小さくなります。' }
        ]);

        // KaTeX rendering for math formulas
        if (window.renderMathInElement) {
            renderMathInElement(container, { delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ]});
        }
    }
};
