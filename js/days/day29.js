// ===========================
// Day 29: キャリアデザインと自己成長戦略
// ===========================
window.Day29 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🚀 キャリアをデザインする</h2>
                <p>キャリアは「流されるもの」ではなく<strong>「自分でデザインするもの」</strong>です。
                特にSIer・金融業界では技術の進化が速く、計画的な自己投資なしには市場価値を維持できません。</p>

                <h3>キャリアアンカー（エドガー・シャイン）</h3>
                <p>自分の価値観を知ることが第一歩。「何があっても手放せないもの」は何ですか？</p>
                <table class="styled-table">
                    <thead>
                        <tr><th>アンカー</th><th>特徴</th><th>金融SIerでの活かし方</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>技術的専門性</strong></td><td>専門スキルを極めたい</td><td>スペシャリスト、テックリード</td></tr>
                        <tr><td><strong>マネジメント</strong></td><td>組織を率いて成果を出したい</td><td>PM、ライン管理者</td></tr>
                        <tr><td><strong>自律性</strong></td><td>自分のやり方で仕事をしたい</td><td>コンサルタント、フリーランス</td></tr>
                        <tr><td><strong>安定性</strong></td><td>安定した環境で着実に成長したい</td><td>大企業でのキャリア積み重ね</td></tr>
                        <tr><td><strong>起業家的創造性</strong></td><td>新しいものを生み出したい</td><td>新規事業立ち上げ、R&D</td></tr>
                        <tr><td><strong>社会貢献</strong></td><td>世の中に貢献したい</td><td>金融インフラの安定稼働</td></tr>
                        <tr><td><strong>挑戦</strong></td><td>困難に挑みたい</td><td>難易度の高い技術課題</td></tr>
                        <tr><td><strong>生活様式</strong></td><td>仕事と生活のバランスを重視</td><td>ワークライフバランスの最適化</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🏗️ T型/Π型人材</h2>
                <p>変化の激しい時代に求められる人材像です。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>人材タイプ</th><th>特徴</th><th>市場価値</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>I型人材</strong></td><td>一つの専門分野に深い</td><td>★★★（専門家として高価値）</td></tr>
                        <tr><td><strong>T型人材</strong></td><td>一つの深い専門＋幅広い知識</td><td>★★★★（チーム内で橋渡し役に）</td></tr>
                        <tr><td><strong>Π型人材</strong></td><td>二つ以上の深い専門＋幅広い知識</td><td>★★★★★（希少性が非常に高い）</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 クオンツSIerでのΠ型人材例</div>
                    <p>・金融工学 × 機械学習</p>
                    <p>・C++高速計算 × クラウドアーキテクチャ</p>
                    <p>・リスク管理 × 規制コンプライアンス</p>
                    <p>・PM × クオンツ（モデルが分かるPMは非常に希少）</p>
                    <p>これらの組み合わせは<strong>市場で極めて希少</strong>であり、キャリアの強力な武器になります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📚 学習戦略</h2>

                <h3>70:20:10の法則</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>割合</th><th>学習源</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>70%</strong></td><td>実務経験から学ぶ</td><td>挑戦的なアサイン、プロジェクト経験</td></tr>
                        <tr><td><strong>20%</strong></td><td>他者から学ぶ</td><td>メンター、コミュニティ、フィードバック</td></tr>
                        <tr><td><strong>10%</strong></td><td>研修・書籍から学ぶ</td><td>社内研修、資格取得、読書</td></tr>
                    </tbody>
                </table>

                <h3>学習の複利効果</h3>
                <div class="info-box tip">
                    <div class="info-box-title">💡 毎日1%の成長</div>
                    <p>毎日1%成長すると、<strong>1年で37.8倍</strong>になります（1.01^365 = 37.8）。</p>
                    <p>逆に毎日1%衰退すると、<strong>1年で0.03（ほぼゼロ）</strong>になります。</p>
                    <p>小さな日々の積み重ねが、数年後に圧倒的な差を生みます。</p>
                </div>

                <h3>推奨する自己投資</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>カテゴリ</th><th>投資対象</th><th>期待リターン</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>技術</strong></td><td>資格取得（FE/AP、CFA等）、OSS貢献</td><td>専門性の証明、ネットワーク拡大</td></tr>
                        <tr><td><strong>語学</strong></td><td>英語（TOEIC 860+、会話力）</td><td>海外案件・外資系への道</td></tr>
                        <tr><td><strong>ビジネス</strong></td><td>MBA科目、アカウンティング</td><td>経営層との対話力</td></tr>
                        <tr><td><strong>人脈</strong></td><td>勉強会、カンファレンス、社外活動</td><td>視野の拡大、キャリア機会</td></tr>
                        <tr><td><strong>健康</strong></td><td>運動、睡眠、食事</td><td>持続可能なパフォーマンス</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🗺️ キャリアロードマップ</h2>

                <h3>金融SIerでのキャリアパス例</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>年次</th><th>役割</th><th>身につけるべきスキル</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1〜3年目</strong></td><td>PG / SE</td><td>プログラミング、基礎金融知識、業務理解</td></tr>
                        <tr><td><strong>4〜6年目</strong></td><td>SE / SL</td><td>設計力、後輩指導、クライアント折衝</td></tr>
                        <tr><td><strong>7〜10年目</strong></td><td>PL / PM</td><td>PM力、リーダーシップ、提案力</td></tr>
                        <tr><td><strong>11年目〜</strong></td><td>PM / 事業企画</td><td>事業戦略、組織マネジメント</td></tr>
                    </tbody>
                </table>

                <h3>キャリアプラン策定のステップ</h3>
                <div class="code-block">1. 自分を知る
   → キャリアアンカー、強み（StrengthsFinder等）、価値観

2. 目標を描く（5年後の姿）
   → どんな仕事をしていたいか、どんな人になりたいか

3. ギャップを分析する
   → 現在のスキル vs 目標に必要なスキル

4. アクションを決める
   → 短期（3ヶ月）、中期（1年）、長期（3〜5年）の計画

5. 定期的に見直す
   → 半年に1回、キャリアプランを振り返り更新</div>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ キャリアの落とし穴</div>
                    <p>・<strong>「忙しいから自己投資はいつか」</strong> → 「いつか」は永遠に来ない。毎日30分からスタート</p>
                    <p>・<strong>「会社が育ててくれる」</strong> → 会社は機会を提供するが、成長するかは自分次第</p>
                    <p>・<strong>「今の技術があれば大丈夫」</strong> → 技術の賞味期限は5〜10年</p>
                    <p>・<strong>「転職すれば全て解決」</strong> → 自己理解なき転職は繰り返す</p>
                </div>
            </div>

            <div id="day29-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day29-quiz', 'day29-quiz', [
            {
                question: 'キャリアアンカーで「技術的専門性」が高い人に適したキャリアパスはどれですか？',
                options: ['ラインマネージャー', 'スペシャリスト / テックリード', '営業マネージャー', '総務・人事'],
                correct: 1,
                explanation: '「技術的専門性」のアンカーが高い人は、専門スキルを極めることに喜びを感じるため、スペシャリストやテックリードとして活躍します。'
            },
            {
                question: 'Π型人材の特徴はどれですか？',
                options: ['一つの専門分野に深い', '一つの深い専門＋幅広い知識', '二つ以上の深い専門＋幅広い知識', '全ての分野を浅く広く知っている'],
                correct: 2,
                explanation: 'Π型人材は二つ以上の深い専門性と幅広い知識を持つ人材で、希少性が非常に高く市場価値も高いです。'
            },
            {
                question: '70:20:10の法則で最も大きな割合を占める学習源はどれですか？',
                options: ['研修・書籍', '他者からの学び', '実務経験', '資格取得'],
                correct: 2,
                explanation: '70:20:10の法則では、学びの70%は実務経験から得られます。挑戦的なアサインメントやプロジェクト経験が最大の学習源です。'
            },
            {
                question: '毎日1%成長すると1年後にはどのくらいの成長になりますか？',
                options: ['3.65倍', '12倍', '37.8倍', '100倍'],
                correct: 2,
                explanation: '1.01^365 = 37.8 です。毎日のわずかな成長も、複利効果で1年後には約38倍の成長になります。'
            },
            {
                question: 'キャリアの落とし穴として正しくないものはどれですか？',
                options: ['忙しいから自己投資は後回し', '会社が育ててくれると期待する', '定期的にキャリアプランを見直す', '今の技術があれば大丈夫と安心する'],
                correct: 2,
                explanation: '定期的にキャリアプランを見直すことは落とし穴ではなく、むしろ推奨される行動です。半年に1回の振り返りが理想的です。'
            }
        ]);
    }
};
