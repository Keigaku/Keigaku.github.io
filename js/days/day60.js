// ===========================
// Day 60: 統計リテラシーとメディアリテラシー
// ===========================
window.Day60 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📊 データを正しく読む力</h2>
                <p>情報が氾濫する現代では<strong>「データを鵜呑みにしない力」</strong>が必要です。
                統計の罠やメディアバイアスを見抜く力は、金融プロフェッショナルの必須スキルです。</p>
                <h3>統計の罠トップ5</h3>
                <table class="styled-table">
                    <thead><tr><th>罠</th><th>内容</th><th>例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>サンプルバイアス</strong></td><td>偏ったサンプルからの結論</td><td>ネット調査だけで「国民の意見」とする</td></tr>
                        <tr><td><strong>生存者バイアス</strong></td><td>失敗例を無視した分析</td><td>「成功企業に共通する特徴」（倒産企業にもある？）</td></tr>
                        <tr><td><strong>チェリーピッキング</strong></td><td>都合のよいデータだけ選ぶ</td><td>特定期間だけ切り取ったグラフ</td></tr>
                        <tr><td><strong>平均の罠</strong></td><td>平均値が実態を反映しない</td><td>年収の平均 vs 中央値（富裕層に引っ張られる）</td></tr>
                        <tr><td><strong>因果の逆転</strong></td><td>原因と結果を取り違える</td><td>「アイスが売れると犯罪が増える」→ 暑さが原因</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📰 メディアリテラシー</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>方法</th><th>確認ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>情報源の確認</strong></td><td>一次情報にあたる</td><td>公式発表、統計局のデータ</td></tr>
                        <tr><td><strong>複数ソースの照合</strong></td><td>異なる立場のメディアを比較</td><td>同じ事象の異なる報道</td></tr>
                        <tr><td><strong>著者の背景確認</strong></td><td>利益相反がないか</td><td>広告主との関係、スポンサー</td></tr>
                        <tr><td><strong>論理の検証</strong></td><td>飛躍や矛盾がないか</td><td>前提 → 結論の流れ</td></tr>
                        <tr><td><strong>日付の確認</strong></td><td>古い情報でないか</td><td>特に科学・技術系の記事</td></tr>
                    </tbody>
                </table>
                <div class="info-box warning">
                    <div class="info-box-title">⚠️ フェイクニュースの見分け方</div>
                    <p>・<strong>感情を煽る見出し</strong>：怒り・恐怖を喚起する記事は要注意</p>
                    <p>・<strong>出典が不明</strong>：「関係者によると」のみで具体性がない</p>
                    <p>・<strong>ファクトチェック</strong>：snopes.com、FIJ等の専門サイトを活用</p>
                    <p>・<strong>画像の逆検索</strong>：Google画像検索で元の文脈を確認</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💹 金融情報の読み方</h2>
                <table class="styled-table">
                    <thead><tr><th>情報源</th><th>特徴</th><th>注意点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>決算短信</strong></td><td>企業の公式財務報告</td><td>一次情報として最も信頼性が高い</td></tr>
                        <tr><td><strong>アナリストレポート</strong></td><td>専門家の分析</td><td>利益相反（自社でその株を保有）の可能性</td></tr>
                        <tr><td><strong>経済指標</strong></td><td>GDP、CPI、雇用統計</td><td>速報値と確報値の違い</td></tr>
                        <tr><td><strong>SNS・速報</strong></td><td>速い、多様な視点</td><td>誤情報・デマのリスクが最も高い</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 批判的思考の実践</div>
                    <p>・<strong>「それは本当か？」</strong>を口癖にする</p>
                    <p>・<strong>グラフのY軸</strong>がゼロから始まっているか確認</p>
                    <p>・<strong>「〇〇倍」</strong>という表現は絶対値も確認（1→3は3倍、100→102は1.02倍）</p>
                    <p>・<strong>自分のバイアス</strong>も自覚する（確証バイアス）</p>
                </div>
            </div>
            <div id="day60-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day60-quiz', 'day60-quiz', [
            { question: '生存者バイアスとはどのような誤りですか？', options: ['平均で判断する', '成功例だけを見て失敗例を無視する', '最新データだけ使う', 'サンプル数が少ない'], correct: 1, explanation: '生存者バイアスは成功した事例だけに着目し、失敗・脱落した事例を無視することで誤った結論を導く誤りです。' },
            { question: '年収データで「平均値」より「中央値」が適切な場合が多い理由は？', options: ['計算が簡単だから', '外れ値（高所得者）の影響を受けにくいから', '政府が推奨しているから', '統計学的に正しいから'], correct: 1, explanation: '年収のような右に歪んだ分布では、一部の高所得者が平均を押し上げるため、中央値の方が実態を反映します。' },
            { question: 'フェイクニュースを見分けるための最初のステップは？', options: ['シェアする', '感情的に反応する', '情報源を確認する', 'コメントを読む'], correct: 2, explanation: '情報の信頼性を判断するために、まず情報源（出典元）が信頼できる一次情報かどうかを確認します。' },
            { question: 'チェリーピッキングとはどのような手法ですか？', options: ['全データを公正に分析する', '都合のよいデータだけを選んで提示する', 'ランダムサンプリング', '外れ値を除外する'], correct: 1, explanation: 'チェリーピッキングは自分の主張に都合のよいデータだけを選び、不都合なデータを無視する手法です。' },
            { question: '経済指標の「速報値」と「確報値」について正しいのは？', options: ['速報値の方が正確', '確報値は速報値を修正した最終値', '両者は常に同じ', '確報値は速報値より早く公開される'], correct: 1, explanation: '速報値は速さを優先した暫定値で、その後のデータ追加により修正された確報値が正式な数値となります。' }
        ]);
    }
};
