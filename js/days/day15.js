// ===========================
// Day 15: 金融業界の常識
// ===========================
window.Day15 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏛️ 知らないと恥ずかしい金融の常識</h2>
                <p>金融業界で働く以上、最低限知っておくべき用語・規制・市場慣行があります。
                クオンツシステム開発者としても、これらの知識はクライアントとの会話や要件理解に不可欠です。</p>

                <h3>金融市場の基本時間</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>市場</th><th>営業時間</th><th>備考</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>東京証券取引所</strong></td><td>9:00-11:30 / 12:30-15:30</td><td>前場・後場に分かれる</td></tr>
                        <tr><td><strong>為替市場</strong></td><td>24時間</td><td>東京→ロンドン→NYと引き継ぐ</td></tr>
                        <tr><td><strong>債券市場</strong></td><td>9:00-15:00頃</td><td>OTC（店頭）取引が中心</td></tr>
                        <tr><td><strong>NY証券取引所</strong></td><td>23:30-6:00（日本時間）</td><td>サマータイムで1時間前倒し</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📅 知っておくべき重要日程</div>
                    <p>・<strong>SQ日</strong>：毎月第2金曜日（先物・オプションの最終決済）</p>
                    <p>・<strong>メジャーSQ</strong>：3月・6月・9月・12月の第2金曜日</p>
                    <p>・<strong>権利確定日</strong>：3月末・9月末が多い</p>
                    <p>・<strong>日銀金融政策決定会合</strong>：年8回（市場が大きく動く）</p>
                    <p>・<strong>FOMC</strong>：年8回（米国の金利政策決定、世界の市場に影響）</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📖 必須の金融用語</h2>

                <h3>市場・取引の基本用語</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>用語</th><th>読み方</th><th>意味</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>BPS</strong></td><td>ビーピーエス/ベーシスポイント</td><td>0.01%（金利変動の最小単位）</td></tr>
                        <tr><td><strong>PIP</strong></td><td>ピップ</td><td>為替の最小変動単位</td></tr>
                        <tr><td><strong>ロング/ショート</strong></td><td>-</td><td>買い持ち/売り持ち</td></tr>
                        <tr><td><strong>スプレッド</strong></td><td>-</td><td>売値と買値の差</td></tr>
                        <tr><td><strong>ボラティリティ</strong></td><td>-</td><td>価格変動の大きさ（σ）</td></tr>
                        <tr><td><strong>利回り</strong></td><td>りまわり</td><td>投資額に対する収益の割合</td></tr>
                        <tr><td><strong>フロント/ミドル/バック</strong></td><td>-</td><td>営業/リスク管理/事務決済の部門区分</td></tr>
                        <tr><td><strong>T+N</strong></td><td>ティープラスエヌ</td><td>取引日からN営業日後に決済（例：T+2）</td></tr>
                        <tr><td><strong>MTM / Mark-to-Market</strong></td><td>マーク・トゥ・マーケット</td><td>時価評価、市場価格での評価</td></tr>
                        <tr><td><strong>P&L</strong></td><td>ピーアンドエル</td><td>損益（Profit and Loss）</td></tr>
                    </tbody>
                </table>

                <h3>リスク関連用語</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>用語</th><th>意味</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>信用リスク</strong></td><td>取引先が債務不履行になるリスク</td></tr>
                        <tr><td><strong>市場リスク</strong></td><td>市場価格の変動による損失リスク</td></tr>
                        <tr><td><strong>流動性リスク</strong></td><td>資産を適正価格で売買できないリスク</td></tr>
                        <tr><td><strong>オペレーショナルリスク</strong></td><td>事務ミスやシステム障害による損失リスク</td></tr>
                        <tr><td><strong>コンプライアンスリスク</strong></td><td>法令違反による損失・信用失墜リスク</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>⚖️ 規制・法律の基礎</h2>

                <h3>金融規制の主要な枠組み</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>規制</th><th>内容</th><th>影響</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>バーゼルIII</strong></td><td>銀行の自己資本規制</td><td>リスク管理システムの核心</td></tr>
                        <tr><td><strong>金商法</strong></td><td>金融商品取引法</td><td>投資家保護・市場の公正性確保</td></tr>
                        <tr><td><strong>インサイダー取引規制</strong></td><td>未公開情報での取引禁止</td><td>違反は刑事罰あり</td></tr>
                        <tr><td><strong>FRTB</strong></td><td>トレーディング勘定の抜本的見直し</td><td>市場リスク計算方法の変更</td></tr>
                        <tr><td><strong>EMIR / Dodd-Frank</strong></td><td>デリバティブ規制</td><td>CCP清算義務、報告義務</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">🚨 絶対に守るべきルール</div>
                    <p>・<strong>インサイダー取引の禁止</strong>：業務で得た未公開情報で株を売買してはいけない</p>
                    <p>・<strong>情報管理の徹底</strong>：クライアント情報は社外に持ち出さない</p>
                    <p>・<strong>利益相反の回避</strong>：個人の利益とクライアントの利益が衝突する場合は上司に報告</p>
                    <p>・<strong>SNSでの業務情報禁止</strong>：プロジェクト名・クライアント名は絶対にSNSに書かない</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🤝 金融業界のビジネスマナー</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>場面</th><th>常識</th><th>理由</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>服装</strong></td><td>スーツが基本、保守的な色合い</td><td>信頼感・品格が求められる業界</td></tr>
                        <tr><td><strong>名刺交換</strong></td><td>両手で受け取り、テーブルに並べる</td><td>日本の金融業界では特に重視</td></tr>
                        <tr><td><strong>時間厳守</strong></td><td>5分前到着が基本</td><td>金融は「時間＝金」の世界</td></tr>
                        <tr><td><strong>敬語</strong></td><td>クライアントには特に丁寧な敬語</td><td>銀行は特に格式を重んじる</td></tr>
                        <tr><td><strong>飲み会</strong></td><td>上座・下座を意識、注文を率先</td><td>新人の気配りが見られている</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 覚えておくと良い日本の金融カレンダー</div>
                    <p>・<strong>年度末（3月末）</strong>：決算期、最も忙しい時期</p>
                    <p>・<strong>ゴールデンウィーク</strong>：連休中も海外市場は動いている</p>
                    <p>・<strong>お盆（8月中旬）</strong>：取引量が減るが市場は開いている</p>
                    <p>・<strong>年末年始</strong>：大納会（12/30）、大発会（1/4頃）</p>
                </div>
            </div>

            <div id="day15-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day15-quiz', 'day15-quiz', [
            {
                question: '1ベーシスポイント（1BPS）は何パーセントですか？',
                options: ['0.001%', '0.01%', '0.1%', '1%'],
                correct: 1,
                explanation: '1ベーシスポイント（1BPS）＝0.01%です。金利が「10BPS上昇」と言われたら0.1%上昇を意味します。'
            },
            {
                question: 'T+2の取引決済は、取引日から何営業日後ですか？',
                options: ['当日', '1営業日後', '2営業日後', '3営業日後'],
                correct: 2,
                explanation: 'T+2は取引日（Trade date）から2営業日後に決済されることを意味します。株式の標準的な決済期間です。'
            },
            {
                question: 'SQ日とは何ですか？',
                options: ['証券取引所の休業日', '先物・オプションの最終決済日', '日銀の政策決定会合の日', '銀行の営業終了時間'],
                correct: 1,
                explanation: 'SQ（Special Quotation）は先物・オプションの特別清算指数算出日で、毎月第2金曜日です。市場が大きく動く可能性があります。'
            },
            {
                question: 'インサイダー取引として違法になるのはどれですか？',
                options: ['公開情報をもとに株を買う', '業務で得た未公開情報をもとに株を売買する', '投資信託を定期的に購入する', '新聞記事を参考に投資判断する'],
                correct: 1,
                explanation: '業務上知り得た未公開の重要情報（M&A計画、決算内容等）をもとに株式を売買することはインサイダー取引に該当し、刑事罰の対象です。'
            },
            {
                question: 'フロント・ミドル・バックオフィスの「ミドルオフィス」の主な役割はどれですか？',
                options: ['営業・トレーディング', 'リスク管理・コンプライアンス', '事務処理・決済', '経営企画・人事'],
                correct: 1,
                explanation: 'ミドルオフィスはリスク管理・コンプライアンスが主な役割です。フロント（営業）とバック（事務・決済）の間で、リスク監視や規制対応を担います。'
            }
        ]);
    }
};
