// ===========================
// Day 10: 総合演習・復習テスト
// ===========================
window.Day10 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎯 10日間の学習を振り返る</h2>
                <p>お疲れ様でした！10日間で学んできた内容を振り返りましょう。</p>

                <table class="styled-table">
                    <thead><tr><th>Day</th><th>テーマ</th><th>キーワード</th></tr></thead>
                    <tbody>
                        <tr><td>1</td><td>金融業界と金融商品の基礎</td><td>金融市場、株式、債券、デリバティブ、クオンツ</td></tr>
                        <tr><td>2</td><td>金融数学の基礎</td><td>確率論、正規分布、ボラティリティ、複利、行列</td></tr>
                        <tr><td>3</td><td>デリバティブ入門</td><td>先物、オプション、スワップ、OTC、ヘッジ</td></tr>
                        <tr><td>4</td><td>オプション価格理論</td><td>ブラック・ショールズ、グリークス、デルタヘッジ</td></tr>
                        <tr><td>5</td><td>時価評価の実務</td><td>DCF法、イールドカーブ、割引ファクター</td></tr>
                        <tr><td>6</td><td>市場リスク管理</td><td>VaR、感応度、ストレステスト、バーゼル規制</td></tr>
                        <tr><td>7</td><td>XVAの基礎</td><td>CVA、DVA、FVA、エクスポージャー</td></tr>
                        <tr><td>8</td><td>プログラミング</td><td>C++、Python、NumPy、計算エンジン</td></tr>
                        <tr><td>9</td><td>システム設計</td><td>SOLID、デザインパターン、テスト、Git</td></tr>
                        <tr><td>10</td><td>総合演習</td><td>全Day横断の復習テスト</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">📌 これからの学習</div>
                    <p>10日間で身につけた知識は広く浅い基礎知識です。実務に入ったら、
                    担当する分野について深く掘り下げていくことになります。わからないことは素直に質問し、
                    チームメンバーから学んでいきましょう。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🗺️ 知識のつながり</h2>
                <p>学んだ内容がどのようにつながっているか整理しましょう。</p>

                <div style="display:grid;grid-template-columns:1fr;gap:1rem;margin:1rem 0;">
                    <div style="padding:1.5rem;border-radius:var(--radius-md);background:rgba(96,165,250,0.06);border:1px solid rgba(96,165,250,0.2);">
                        <h4 style="color:var(--accent-blue);margin:0 0 0.75rem;">📊 業務フロー全体像</h4>
                        <div style="color:var(--text-secondary);font-size:0.9rem;line-height:2;">
                            <strong style="color:var(--text-primary);">市場データ取得</strong> → 
                            <strong style="color:var(--accent-cyan);">イールドカーブ構築</strong> (Day5) → 
                            <strong style="color:var(--accent-blue);">時価計算</strong> (Day4,5) → 
                            <strong style="color:var(--accent-purple);">グリークス計算</strong> (Day4) → 
                            <strong style="color:var(--accent-orange);">リスク計測 (VaR)</strong> (Day6) → 
                            <strong style="color:var(--accent-pink);">XVA計算</strong> (Day7) → 
                            <strong style="color:var(--accent-green);">帳票・報告</strong>
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
                        <div style="padding:1.25rem;border-radius:var(--radius-md);background:rgba(167,139,250,0.06);border:1px solid rgba(167,139,250,0.2);">
                            <h4 style="color:var(--accent-purple);margin:0 0 0.5rem;">🧠 理論基盤</h4>
                            <p style="font-size:0.85rem;color:var(--text-secondary);margin:0;">
                                金融数学 (Day2) → デリバティブ理論 (Day3,4) → リスク管理理論 (Day6,7)
                            </p>
                        </div>
                        <div style="padding:1.25rem;border-radius:var(--radius-md);background:rgba(52,211,153,0.06);border:1px solid rgba(52,211,153,0.2);">
                            <h4 style="color:var(--accent-green);margin:0 0 0.5rem;">💻 技術基盤</h4>
                            <p style="font-size:0.85rem;color:var(--text-secondary);margin:0;">
                                プログラミング (Day8) → システム設計 (Day9) → 数値計算実装
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📚 推薦リソース</h2>
                <p>さらに理解を深めたい方向けの参考資料です。</p>

                <h3>書籍</h3>
                <table class="styled-table">
                    <thead><tr><th>分野</th><th>書籍名</th><th>レベル</th></tr></thead>
                    <tbody>
                        <tr><td>金融工学全般</td><td>「フィナンシャルエンジニアリング」（デリバティブとリスク管理）J.ハル著</td><td>入門〜中級</td></tr>
                        <tr><td>オプション理論</td><td>「デリバティブ価格理論入門」（大村敬一ほか）</td><td>入門</td></tr>
                        <tr><td>リスク管理</td><td>「リスクマネジメントの基礎」</td><td>入門</td></tr>
                        <tr><td>Python金融</td><td>「Pythonによるファイナンス」（Hilpisch著）</td><td>入門〜中級</td></tr>
                        <tr><td>C++</td><td>「C++ Design Patterns and Derivatives Pricing」（Joshi著）</td><td>中級</td></tr>
                    </tbody>
                </table>

                <h3>これから身につけるべきスキル</h3>
                <ul>
                    <li><strong>短期（1-3ヶ月）</strong>：Python基礎、Git操作、金融用語の定着</li>
                    <li><strong>中期（3-6ヶ月）</strong>：C++基礎、設計スキル、担当商品の深い理解</li>
                    <li><strong>長期（6ヶ月〜）</strong>：数理モデルの理解深化、性能最適化、プロジェクトリード</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📝 総合テスト</h2>
                <p>10日間の学習内容から出題される総合テストです。80%以上を目指しましょう！</p>
            </div>

            <div id="day10-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // Comprehensive Quiz
        QuizEngine.render('day10-quiz', 'day10-final', [
            {
                question: '【Day1】「クオンツ（Quant）」が主に担当する業務はどれですか？',
                options: [
                    '顧客営業と商品販売',
                    '数学・統計学を活用した金融商品の価格付けやリスク管理',
                    '法務・コンプライアンス対応',
                    '人事・採用活動'
                ],
                correct: 1,
                explanation: 'クオンツは Quantitative Analyst の略で、数学・統計学・プログラミングを活用して金融商品の分析・価格計算・リスク管理を行う専門家です。'
            },
            {
                question: '【Day2】金融の世界で「ボラティリティ」とは何を指しますか？',
                options: ['取引量', '標準偏差（リスクの指標）', '平均リターン', '流動性'],
                correct: 1,
                explanation: 'ボラティリティは標準偏差（σ）のことで、価格変動の大きさ＝リスクの基本的な指標として使われます。'
            },
            {
                question: '【Day3】オプションと先物の最も大きな違いは何ですか？',
                options: [
                    '取引所で取引されるかどうか',
                    '対象となる原資産の種類',
                    '権利か義務か',
                    '満期の有無'
                ],
                correct: 2,
                explanation: 'オプションは売買の「権利」（不利なら放棄可能）、先物は売買の「義務」（必ず履行しなければならない）という点が最大の違いです。'
            },
            {
                question: '【Day4】ブラック・ショールズ式で、ボラティリティ（σ）が上昇するとコールオプション価格はどうなりますか？',
                options: ['下落する', '上昇する', '変化しない', 'ボラティリティとは無関係'],
                correct: 1,
                explanation: 'ボラティリティが上昇すると、原資産が大きく動く可能性が高まります。オプション保有者にとっては有利な方向に動く可能性が増えるため、価格は上昇します。'
            },
            {
                question: '【Day5】DCF法で「割引率が上昇」すると、将来キャッシュフローの現在価値はどうなりますか？',
                options: ['増加する', '減少する', '変化しない', '逆転する'],
                correct: 1,
                explanation: 'PV = CF / (1+r)^t なので、割引率rが上昇するとPVは減少します。つまり「お金の時間価値」が高まります。'
            },
            {
                question: '【Day6】VaR（Value at Risk）の正しい定義は？',
                options: [
                    '最大可能損失額',
                    'ある信頼水準のもと、一定期間内に被りうる最大損失額',
                    '平均的な損失額',
                    '過去の最大損失額'
                ],
                correct: 1,
                explanation: 'VaRは「ある信頼水準のもと、一定期間内に被りうる最大損失額」です。ただし、信頼水準を超える損失が発生する可能性はあるため、「絶対的な最大損失」ではありません。'
            },
            {
                question: '【Day7】CVA（Credit Valuation Adjustment）は何を反映した調整ですか？',
                options: [
                    '自社の資金調達コスト',
                    '取引相手の信用リスク（デフォルト確率）',
                    '市場のボラティリティ',
                    '規制資本コスト'
                ],
                correct: 1,
                explanation: 'CVAは取引相手のデフォルト（債務不履行）リスクを反映した評価調整です。取引相手の信用リスクが高いほど、CVAは大きくなります。'
            },
            {
                question: '【Day8】クオンツシステムの計算エンジンにC++が使われる最大の理由は？',
                options: [
                    '学習コストが低い',
                    '実行速度が非常に高速',
                    'Webアプリの開発に向いている',
                    'ライブラリが最も多い'
                ],
                correct: 1,
                explanation: 'C++はメモリ管理の効率性と実行速度の高さから、大規模な数値計算を行う計算エンジンに最適です。Pythonの50〜100倍の速度です。'
            },
            {
                question: '【Day9】SOLID原則の「S」（単一責務の原則）が意味するのは？',
                options: [
                    'クラスは1つだけインスタンス化できる',
                    'クラスは1つの責務（変更理由）のみを持つべき',
                    'システムは1つの言語だけで書くべき',
                    'データベースは1つだけ使うべき'
                ],
                correct: 1,
                explanation: '単一責務の原則は、クラスが1つの責務のみをもち、変更の理由が1つだけであるべきだという原則です。これにより保守性が向上します。'
            },
            {
                question: '【総合】私たちの業務の3本柱として正しい組み合わせは？',
                options: [
                    '株式取引、為替トレーディング、債券販売',
                    '時価評価、市場リスク計測、XVA計測',
                    'データ分析、AI開発、Web開発',
                    '会計処理、税務対応、コンプライアンス'
                ],
                correct: 1,
                explanation: '私たちの業務は「時価評価」「市場リスク計測」「XVA計測」の3本柱でクオンツシステム開発を行っています。'
            },
            {
                question: '【総合】取引のペイオフが max(S - K, 0) で表される金融商品は？',
                options: ['プットオプション', 'コールオプション', '先物', '金利スワップ'],
                correct: 1,
                explanation: 'max(S - K, 0) はコールオプション（買う権利）のペイオフです。S > K なら S - K の利益、S ≤ K なら権利放棄で 0 です。'
            },
            {
                question: '【総合】金融危機後にXVAの重要性が急速に認識されたのは、どのようなリスクが顕在化したためですか？',
                options: [
                    '為替リスク',
                    'カウンターパーティリスク（取引相手の信用リスク）',
                    'インフレリスク',
                    'システム障害リスク'
                ],
                correct: 1,
                explanation: '2008年のリーマン・ブラザーズの破綻により、取引相手が破綻するリスク（カウンターパーティリスク）が顕在化し、CVAを中心としたXVAの重要性が急速に認識されました。'
            }
        ]);
    }
};
