// ===========================
// Day 31: 財務・会計リテラシー
// ===========================
window.Day31 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📊 なぜ経営幹部候補に財務知識が必要か</h2>
                <p>技術者出身のリーダーにとって、財務・会計は「苦手分野」になりがちですが、
                経営層との対話や事業判断には<strong>数字で語る力</strong>が不可欠です。
                「この投資はROI何%で回収できるのか」を語れるリーダーが信頼されます。</p>

                <h3>財務三表の関係</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>財務諸表</th><th>英語名</th><th>何が分かるか</th><th>例え</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>損益計算書（P/L）</strong></td><td>Income Statement</td><td>一定期間の収益と費用</td><td>家計の月次収支表</td></tr>
                        <tr><td><strong>貸借対照表（B/S）</strong></td><td>Balance Sheet</td><td>ある時点の資産・負債・純資産</td><td>家計の財産一覧</td></tr>
                        <tr><td><strong>キャッシュフロー計算書（CF）</strong></td><td>Cash Flow Statement</td><td>現金の出入り</td><td>家計の通帳記録</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📘 「利益」と「キャッシュ」は違う</div>
                    <p>P/L上は黒字でも、キャッシュが不足すれば<strong>黒字倒産</strong>が起こります。
                    売上を計上しても、入金されるまでは現金は増えません。経営者は常にキャッシュを見ています。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>💰 P/L（損益計算書）の読み方</h2>

                <div class="code-block">売上高                 1,000億円
  - 売上原価              △600億円
━━━━━━━━━━━━━━━━━━━━━
売上総利益（粗利）       400億円 （粗利率 40%）
  - 販管費                △250億円
━━━━━━━━━━━━━━━━━━━━━
営業利益                 150億円 （営業利益率 15%）
  ± 営業外損益            △20億円
━━━━━━━━━━━━━━━━━━━━━
経常利益                 130億円
  ± 特別損益              △10億円
━━━━━━━━━━━━━━━━━━━━━
税引前当期純利益         120億円
  - 法人税等              △36億円
━━━━━━━━━━━━━━━━━━━━━
当期純利益                84億円</div>

                <h3>SIerのP/Lで注目すべきポイント</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>指標</th><th>意味</th><th>SIer業界の目安</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>売上総利益率</strong></td><td>案件の粗利率（付加価値の高さ）</td><td>25〜40%</td></tr>
                        <tr><td><strong>営業利益率</strong></td><td>本業の儲ける力</td><td>8〜15%</td></tr>
                        <tr><td><strong>人件費率</strong></td><td>売上に対する人件費の割合</td><td>40〜60%（人が資産の業界）</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🏦 B/S（貸借対照表）とCF（キャッシュフロー）</h2>

                <h3>B/Sの構造</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>左側（資産）</th><th>右側（負債＋純資産）</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>流動資産</strong>：現金、売掛金、棚卸資産</td><td><strong>流動負債</strong>：買掛金、短期借入金</td></tr>
                        <tr><td><strong>固定資産</strong>：設備、ソフトウェア、のれん</td><td><strong>固定負債</strong>：長期借入金、社債</td></tr>
                        <tr><td></td><td><strong>純資産</strong>：資本金、利益剰余金</td></tr>
                    </tbody>
                </table>

                <h3>キャッシュフローの3区分</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>区分</th><th>内容</th><th>健全な企業の傾向</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>営業CF</strong></td><td>本業でのキャッシュ創出</td><td>プラス（稼いでいる）</td></tr>
                        <tr><td><strong>投資CF</strong></td><td>設備投資・M&A等への支出</td><td>マイナス（成長投資中）</td></tr>
                        <tr><td><strong>財務CF</strong></td><td>借入・返済・配当</td><td>状況による</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📈 経営指標</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>指標</th><th>計算式</th><th>意味</th><th>目安</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>ROE</strong></td><td>当期純利益 / 自己資本</td><td>株主資本の効率性</td><td>8%以上</td></tr>
                        <tr><td><strong>ROA</strong></td><td>当期純利益 / 総資産</td><td>総資産の効率性</td><td>5%以上</td></tr>
                        <tr><td><strong>自己資本比率</strong></td><td>自己資本 / 総資産</td><td>財務安全性</td><td>40%以上</td></tr>
                        <tr><td><strong>EBITDA</strong></td><td>営業利益+減価償却費</td><td>償却前の稼ぐ力</td><td>企業比較に有用</td></tr>
                        <tr><td><strong>PER</strong></td><td>株価 / 一株当たり利益</td><td>株価の割安/割高度</td><td>15〜20倍</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 デュポン分析でROEを分解する</div>
                    <p><strong>ROE = 利益率 × 回転率 × レバレッジ</strong></p>
                    <p>＝（純利益/売上）×（売上/総資産）×（総資産/自己資本）</p>
                    <p>ROEが低い場合、どの要素が課題かを特定し、改善策を立てることができます。</p>
                </div>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 数字の裏を読む</div>
                    <p>・急激な売上増は<strong>無理な受注</strong>の可能性</p>
                    <p>・利益率の低下は<strong>値引き競争</strong>や<strong>生産性低下</strong>の兆候</p>
                    <p>・売掛金の増加は<strong>回収リスク</strong>の表れ</p>
                    <p>経営指標は「良い悪い」だけでなく<strong>「なぜそうなっているか」</strong>を考えることが重要です。</p>
                </div>
            </div>

            <div id="day31-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day31-quiz', 'day31-quiz', [
            {
                question: '「黒字倒産」とはどのような状態ですか？',
                options: ['赤字が続いて倒産する', 'P/L上は黒字だがキャッシュが不足して倒産する', '粉飾決算による倒産', '海外子会社の損失による倒産'],
                correct: 1,
                explanation: '黒字倒産は損益計算書上は利益が出ているにもかかわらず、手元のキャッシュが不足して支払いができなくなる状態です。'
            },
            {
                question: 'ROEを分解する「デュポン分析」の3要素はどれですか？',
                options: ['売上・原価・利益', '利益率・回転率・レバレッジ', '流動性・安全性・収益性', '成長率・配当率・再投資率'],
                correct: 1,
                explanation: 'ROE = 利益率（純利益/売上）× 回転率（売上/総資産）× レバレッジ（総資産/自己資本）に分解できます。'
            },
            {
                question: '健全な成長企業のキャッシュフローの典型的なパターンはどれですか？',
                options: ['営業CF：マイナス、投資CF：プラス', '営業CF：プラス、投資CF：マイナス', '全てプラス', '全てマイナス'],
                correct: 1,
                explanation: '本業で稼ぎ（営業CFプラス）、成長のための投資を行っている（投資CFマイナス）のが健全な成長企業の典型パターンです。'
            },
            {
                question: '損益計算書の「営業利益」はどの段階の利益ですか？',
                options: ['売上から原価を引いた利益', '売上総利益から販管費を引いた利益', '経常利益から特別損益を加減した利益', '全ての費用を差し引いた最終利益'],
                correct: 1,
                explanation: '営業利益は売上総利益（粗利）から販売費及び一般管理費（販管費）を差し引いたもので、「本業の稼ぐ力」を示します。'
            },
            {
                question: 'SIer業界で「人件費率」が特に重要な理由はどれですか？',
                options: ['法律で開示が義務付けられているから', '人が最大の資産であり、売上の40〜60%を占めるから', '業界平均と比較するため', 'ボーナスの算定に使うから'],
                correct: 1,
                explanation: 'SIerは「人が資産」のビジネスモデルであり、人件費が売上の大部分を占めるため、人件費の管理と生産性向上が経営の根幹です。'
            }
        ]);
    }
};
