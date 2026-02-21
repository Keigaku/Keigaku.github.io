// ===========================
// Day 37: ビジョン策定と変革マネジメント
// ===========================
window.Day37 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔮 ビジョナリー経営</h2>
                <p>優れた経営者は<strong>「まだ見ぬ未来を描き、人々を巻き込んで実現する」</strong>力を持っています。
                ビジョンとは「こうあるべき姿」を言語化したものであり、組織のエネルギーの方向を定めるものです。</p>

                <h3>ミッション・ビジョン・バリューの関係</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>問い</th><th>時間軸</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>ミッション（使命）</strong></td><td>なぜ我々は存在するのか？</td><td>不変</td><td>「テクノロジーで金融の進化を支える」</td></tr>
                        <tr><td><strong>ビジョン（未来像）</strong></td><td>どこに向かうのか？</td><td>中長期</td><td>「金融DXのNo.1パートナーになる」</td></tr>
                        <tr><td><strong>バリュー（価値観）</strong></td><td>何を大切にするか？</td><td>不変</td><td>「誠実さ」「挑戦」「チームワーク」</td></tr>
                        <tr><td><strong>戦略</strong></td><td>どうやって実現するか？</td><td>短〜中期</td><td>「AI人材を3年で倍増」</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 良いビジョンの条件</div>
                    <p>・<strong>明確で記憶に残る</strong>：誰もが覚えて口にできるシンプルさ</p>
                    <p>・<strong>野心的だが現実的</strong>：ストレッチはするが、荒唐無稽ではない</p>
                    <p>・<strong>感情に訴える</strong>：数字だけでなく、ワクワクする未来像</p>
                    <p>・<strong>行動を導く</strong>：日々の判断の基準になる</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔄 コッターの変革8段階プロセス</h2>
                <p>ジョン・P・コッターが提唱した、組織変革を成功させるための8つのステップです。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>段階</th><th>内容</th><th>失敗例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 危機感を醸成する</strong></td><td>現状維持のリスクを共有</td><td>「まだ大丈夫」という楽観</td></tr>
                        <tr><td><strong>2. 変革推進チームを作る</strong></td><td>影響力ある人材を集める</td><td>一人の旗振りに頼る</td></tr>
                        <tr><td><strong>3. ビジョンと戦略を策定する</strong></td><td>明確な方向性を示す</td><td>抽象的すぎるビジョン</td></tr>
                        <tr><td><strong>4. ビジョンを伝える</strong></td><td>繰り返しあらゆる手段で</td><td>一度のメールで終わらせる</td></tr>
                        <tr><td><strong>5. 行動を促す環境を整備する</strong></td><td>障害を取り除く</td><td>制度・構造が変わらない</td></tr>
                        <tr><td><strong>6. 短期的な成果を実現する</strong></td><td>Quick Winで勢いを作る</td><td>成果が出る前にモメンタムが消える</td></tr>
                        <tr><td><strong>7. 成果を活用してさらに推進する</strong></td><td>変革を加速させる</td><td>早すぎる「勝利宣言」</td></tr>
                        <tr><td><strong>8. 新しい文化として定着させる</strong></td><td>変革を組織文化に根付かせる</td><td>人事異動で元に戻る</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ コッターの研究による知見</div>
                    <p>変革プログラムの<strong>70%は失敗する</strong>。最も多い失敗の原因は：</p>
                    <p>・ステップ1を飛ばす（危機感が不十分なまま始める）</p>
                    <p>・ステップ7で「成功宣言」が早すぎる（変革が定着する前に次の課題に移る）</p>
                    <p>・トップダウンだけで現場の巻き込みが不足する</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>💪 レジリエンス経営</h2>
                <p>変革だけでなく、危機を乗り越えて<strong>以前より強くなる力</strong>が経営には求められます。</p>

                <h3>レジリエンスの3つのフェーズ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>フェーズ</th><th>目標</th><th>経営のアクション</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 予防・準備</strong></td><td>リスクに備える</td><td>BCP策定、シナリオプランニング、財務余力の確保</td></tr>
                        <tr><td><strong>2. 対応・適応</strong></td><td>危機に迅速に対応する</td><td>クライシスマネジメント、迅速な意思決定、透明なコミュニケーション</td></tr>
                        <tr><td><strong>3. 回復・成長</strong></td><td>危機を機に変革する</td><td>教訓の制度化、新たな成長機会の追求</td></tr>
                    </tbody>
                </table>

                <h3>レジリエント経営の要素</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>内容</th><th>具体策</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>財務レジリエンス</strong></td><td>財務的な余力</td><td>十分なキャッシュリザーブ、分散した収入源</td></tr>
                        <tr><td><strong>組織レジリエンス</strong></td><td>組織の適応力</td><td>権限委譲、クロスファンクショナルチーム</td></tr>
                        <tr><td><strong>技術レジリエンス</strong></td><td>技術基盤の堅牢性</td><td>冗長化、DR対策、セキュリティ</td></tr>
                        <tr><td><strong>人材レジリエンス</strong></td><td>人材の多様性と適応力</td><td>リスキリング、サクセッションプラン</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🌟 経営者としての最終メッセージ</h2>

                <div class="info-box tip">
                    <div class="info-box-title">💡 経営とは「人」を通じて成果を出すこと</div>
                    <p>全ての経営知識やフレームワークは<strong>「手段」</strong>であり、最終的に企業は<strong>「人」</strong>が動かします。</p>
                    <p>・<strong>信頼される人であれ</strong>：言行一致、誠実さ、約束を守る</p>
                    <p>・<strong>先を見る人であれ</strong>：変化を恐れず、未来を創造する</p>
                    <p>・<strong>育てる人であれ</strong>：自分の後継者を育てることが最大の貢献</p>
                    <p>・<strong>学び続ける人であれ</strong>：謙虚に学び続ける姿勢が組織を変える</p>
                </div>

                <table class="styled-table">
                    <thead>
                        <tr><th>推薦書籍</th><th>著者</th><th>テーマ</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>ビジョナリー・カンパニー</strong></td><td>ジム・コリンズ</td><td>偉大な企業の共通原則</td></tr>
                        <tr><td><strong>企業変革力</strong></td><td>ジョン・コッター</td><td>変革マネジメントの体系</td></tr>
                        <tr><td><strong>両利きの経営</strong></td><td>オライリー＆タッシュマン</td><td>探索と深化の共存</td></tr>
                        <tr><td><strong>HARD THINGS</strong></td><td>ベン・ホロウィッツ</td><td>経営者の困難な判断</td></tr>
                        <tr><td><strong>経営者の条件</strong></td><td>ピーター・ドラッカー</td><td>マネジメントの古典</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day37-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day37-quiz', 'day37-quiz', [
            {
                question: 'ミッション・ビジョン・バリューのうち「不変」なものはどれですか？',
                options: ['ビジョンと戦略', 'ミッションとバリュー', '戦略とバリュー', 'ビジョンとミッション'],
                correct: 1,
                explanation: 'ミッション（存在意義）とバリュー（価値観）は不変の根幹です。ビジョンは中長期、戦略は短〜中期で変わりえます。'
            },
            {
                question: 'コッターの変革8段階プロセスで最初に行うべきことはどれですか？',
                options: ['ビジョンを策定する', '危機感を醸成する', '変革推進チームを作る', '短期的な成果を実現する'],
                correct: 1,
                explanation: 'コッターの8段階プロセスの第1段階は「危機感の醸成」です。現状維持のリスクを組織全体で共有することから始めます。'
            },
            {
                question: 'コッターの研究で、変革プログラムの失敗率はどのくらいですか？',
                options: ['30%', '50%', '70%', '90%'],
                correct: 2,
                explanation: 'コッターの研究によれば、変革プログラムの約70%は失敗するとされています。成功には各段階の丁寧な実行が不可欠です。'
            },
            {
                question: 'レジリエンス経営の「回復・成長」フェーズで行うべきことはどれですか？',
                options: ['BCPを策定する', '教訓を制度化し新たな成長機会を追求する', 'クライシスマネジメントを行う', '財務余力を確保する'],
                correct: 1,
                explanation: '回復・成長フェーズでは、危機から得た教訓を制度として定着させ、さらにそれを成長の機会として活用することが求められます。'
            },
            {
                question: '良いビジョンの条件として適切でないものはどれですか？',
                options: ['明確で記憶に残る', '数値目標だけで構成される', '感情に訴える', '行動を導く'],
                correct: 1,
                explanation: 'ビジョンは数値目標だけでは不十分です。ワクワクする未来像を描き、感情に訴え、行動の基準となるものが良いビジョンです。'
            }
        ]);
    }
};
