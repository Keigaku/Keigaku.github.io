// ===========================
// Day 46: プレゼンテーション・資料作成術
// ===========================
window.Day46 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📊 プレゼンテーションの設計</h2>
                <p>SIerはクライアントへの<strong>提案・報告・説明</strong>の機会が非常に多い業種です。
                優れたプレゼンは「内容が正しい」だけでなく「伝わる」ことが求められます。</p>
                <h3>プレゼン設計の3ステップ</h3>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>内容</th><th>ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. 目的の明確化</strong></td><td>何を達成したいか</td><td>「聞いた人にどうしてほしいか」から逆算</td></tr>
                        <tr><td><strong>2. 構造化</strong></td><td>ストーリーラインの構築</td><td>PREP法、ピラミッド構造</td></tr>
                        <tr><td><strong>3. 可視化</strong></td><td>スライドへの落とし込み</td><td>1スライド1メッセージ</td></tr>
                    </tbody>
                </table>
                <div class="info-box info">
                    <div class="info-box-title">📘 ストーリーラインの型</div>
                    <p>・<strong>PREP法</strong>：Point（結論）→ Reason（理由）→ Example（具体例）→ Point（再結論）</p>
                    <p>・<strong>SDS法</strong>：Summary（概要）→ Detail（詳細）→ Summary（まとめ）</p>
                    <p>・<strong>問題解決型</strong>：現状 → 問題 → 原因 → 解決策 → 効果</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🎨 スライドデザインの原則</h2>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>良い例</th><th>悪い例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1スライド1メッセージ</strong></td><td>明確な見出し + 根拠データ</td><td>複数の論点を1枚に詰め込む</td></tr>
                        <tr><td><strong>テキスト最小化</strong></td><td>キーワードのみ、図表で補完</td><td>文章をびっしり書く</td></tr>
                        <tr><td><strong>色は3色まで</strong></td><td>ベース + アクセント + 強調色</td><td>虹色のグラフ</td></tr>
                        <tr><td><strong>フォント統一</strong></td><td>ゴシック体1種 + サイズ2-3段階</td><td>明朝＋ゴシック＋手書き風</td></tr>
                        <tr><td><strong>整列・余白</strong></td><td>グリッドに沿った配置</td><td>要素がバラバラに配置</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📈 データ可視化のベストプラクティス</h2>
                <table class="styled-table">
                    <thead><tr><th>データの目的</th><th>推奨チャート</th><th>避けるべき表現</th></tr></thead>
                    <tbody>
                        <tr><td><strong>推移を見せたい</strong></td><td>折れ線グラフ</td><td>3D棒グラフ</td></tr>
                        <tr><td><strong>構成比を見せたい</strong></td><td>積み上げ棒グラフ、円グラフ</td><td>円グラフの乱用（5項目以上）</td></tr>
                        <tr><td><strong>比較したい</strong></td><td>横棒グラフ</td><td>面グラフ</td></tr>
                        <tr><td><strong>相関を見せたい</strong></td><td>散布図</td><td>表の数字の羅列</td></tr>
                        <tr><td><strong>分布を見せたい</strong></td><td>ヒストグラム、箱ひげ図</td><td>円グラフ</td></tr>
                    </tbody>
                </table>
                <div class="info-box warning">
                    <div class="info-box-title">⚠️ やりがちな失敗</div>
                    <p>・<strong>3Dチャート</strong>：見栄えは良いが正確さが低下</p>
                    <p>・<strong>Y軸をゼロから始めない</strong>：変化を誇張してしまう</p>
                    <p>・<strong>二軸グラフの乱用</strong>：相関があるように見せてしまう</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>🎤 話し方 — デリバリースキル</h2>
                <table class="styled-table">
                    <thead><tr><th>要素</th><th>ポイント</th><th>練習法</th></tr></thead>
                    <tbody>
                        <tr><td><strong>声の大きさ</strong></td><td>最後列に届く声量</td><td>壁に向かって練習</td></tr>
                        <tr><td><strong>間（ま）</strong></td><td>3秒の沈黙は聴衆にとって1秒</td><td>重要ポイントの前後に意図的に間を</td></tr>
                        <tr><td><strong>アイコンタクト</strong></td><td>会場の3点に視線を配る</td><td>スクリーンではなく聴衆を見る</td></tr>
                        <tr><td><strong>ジェスチャー</strong></td><td>ポイントを強調する動作</td><td>手を自然に使う（腰の位置を基準に）</td></tr>
                        <tr><td><strong>リハーサル</strong></td><td>最低3回は通しで練習</td><td>録画して自分で見返す</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 エンジニアのプレゼン力向上のコツ</div>
                    <p>・<strong>「結論ファースト」</strong>を徹底。技術者は過程を話しがちだが、経営層は結論が先</p>
                    <p>・<strong>技術用語を翻訳</strong>：クライアントのレベルに合わせた説明</p>
                    <p>・<strong>「So What?」テスト</strong>：各スライドに「だから何？」と問いかける</p>
                </div>
            </div>
            <div id="day46-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day46-quiz', 'day46-quiz', [
            { question: 'PREP法の「P」は何を表しますか？', options: ['Problem', 'Point', 'Plan', 'Process'], correct: 1, explanation: 'PREP法はPoint（結論）→ Reason → Example → Point（再結論）の構成です。' },
            { question: 'スライドデザインで推奨される色の数は？', options: ['1色', '3色まで', '5色まで', '自由'], correct: 1, explanation: 'ベース色＋アクセント色＋強調色の3色が基本です。色が多すぎると視認性が下がります。' },
            { question: '時系列データの推移を見せるのに最適なチャートは？', options: ['円グラフ', '散布図', '折れ線グラフ', 'レーダーチャート'], correct: 2, explanation: '折れ線グラフは時系列データの推移を表現するのに最も適しています。' },
            { question: 'プレゼンの「So What?テスト」とは？', options: ['技術の正確性を検証する', '各スライドに「だから何？」と問いかける', '聴衆のレベルを確認する', 'Q&Aの準備をする'], correct: 1, explanation: '各スライドに「だから何？（So What?）」と問いかけ、聴衆にとっての意味・インパクトがあるか確認します。' },
            { question: 'エンジニアがプレゼンで最も気をつけるべきことは？', options: ['スライドを美しくする', '結論を最初に述べる', '技術用語を多用する', '資料を大量に用意する'], correct: 1, explanation: '技術者は過程を説明しがちですが、聴衆（特に経営層）は結論ファーストを好みます。' }
        ]);
    }
};
