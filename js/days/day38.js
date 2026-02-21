// ===========================
// Day 38: TOEIC 950点 戦略概論
// ===========================
window.Day38 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎯 TOEIC 950点の世界</h2>
                <p>TOEIC 950点は受験者の<strong>上位1%未満</strong>に位置するスコアです。
                ネイティブスピーカーの平均スコアが約970点であることを考えると、
                950点はほぼネイティブレベルの英語力を示すスコアと言えます。</p>

                <h3>スコア分布と950点の位置づけ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>スコア帯</th><th>レベル</th><th>受験者割合</th><th>ビジネス活用度</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>990点</strong></td><td>満点（ネイティブレベル）</td><td>上位0.3%</td><td>ネイティブ環境で自在に活躍</td></tr>
                        <tr><td><strong>950-985点</strong></td><td>準ネイティブ</td><td>上位1%</td><td>海外本社とのやり取り、英語での交渉</td></tr>
                        <tr><td><strong>860-945点</strong></td><td>上級者</td><td>上位5%</td><td>英語での会議・プレゼンが可能</td></tr>
                        <tr><td><strong>730-855点</strong></td><td>中上級者</td><td>上位15%</td><td>業務で英語使用可能</td></tr>
                        <tr><td><strong>600-725点</strong></td><td>中級者</td><td>上位35%</td><td>定型的なメール・文書対応</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 950点突破に必要な正答率</div>
                    <p>TOEIC L&R 990点満点（Listening 495 + Reading 495）</p>
                    <p>・<strong>Listening 495点</strong>：100問中 <strong>95問以上</strong> の正答が必要（許容ミス約5問）</p>
                    <p>・<strong>Reading 495点</strong>：100問中 <strong>95問以上</strong> の正答が必要（許容ミス約5問）</p>
                    <p>・合計：200問中 <strong>190問以上</strong> 正解で950点以上に到達</p>
                    <p>ミスが許される問題数は<strong>わずか10問</strong>。精度を極限まで高めることが鍵です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📊 現在地の把握と目標設定</h2>

                <h3>スコア帯別の攻略アプローチ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>現在のスコア</th><th>950点までの道のり</th><th>推奨学習期間</th><th>重点分野</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>900点台</strong></td><td>最後の仕上げ</td><td>1〜3ヶ月</td><td>ミス分析、Part 7速読、弱点克服</td></tr>
                        <tr><td><strong>800点台</strong></td><td>本格的な壁越え</td><td>3〜6ヶ月</td><td>語彙力、Listening精度、Part 5/6文法</td></tr>
                        <tr><td><strong>700点台</strong></td><td>基礎の再構築 + 応用</td><td>6〜12ヶ月</td><td>総合的な4技能強化</td></tr>
                        <tr><td><strong>600点台以下</strong></td><td>基礎から着実に</td><td>12ヶ月以上</td><td>基礎文法、語彙、リスニング習慣</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🗓️ 最短攻略ロードマップ</h2>

                <h3>1日の学習スケジュール例（平日 2時間確保）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>時間帯</th><th>学習内容</th><th>所要時間</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>通勤時間</strong></td><td>シャドーイング / Podcast</td><td>30分</td></tr>
                        <tr><td><strong>昼休み</strong></td><td>Part 5 文法問題 20問</td><td>15分</td></tr>
                        <tr><td><strong>帰宅後</strong></td><td>Part 7 長文読解 / 模試復習</td><td>45分</td></tr>
                        <tr><td><strong>就寝前</strong></td><td>単語帳 / 金のフレーズ</td><td>30分</td></tr>
                    </tbody>
                </table>

                <h3>週間スケジュール（900→950ロードマップ）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>フェーズ</th><th>期間</th><th>内容</th><th>目標</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Phase 1</strong></td><td>Week 1-2</td><td>弱点分析・模試で現状把握</td><td>ミスパターンの特定</td></tr>
                        <tr><td><strong>Phase 2</strong></td><td>Week 3-6</td><td>弱点パートの集中強化</td><td>各パート正答率95%以上</td></tr>
                        <tr><td><strong>Phase 3</strong></td><td>Week 7-10</td><td>模試演習（週2回フル模試）</td><td>時間配分の最適化</td></tr>
                        <tr><td><strong>Phase 4</strong></td><td>Week 11-12</td><td>直前仕上げ、メンタル調整</td><td>安定して950以上</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📚 おすすめ教材</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>教材</th><th>対象スコア</th><th>特徴</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>TOEIC L&R 公式問題集</strong></td><td>全レベル</td><td>本番と同じETS作成、必須教材</td></tr>
                        <tr><td><strong>金のフレーズ（TEX加藤）</strong></td><td>600〜990</td><td>TOEIC頻出1000語を効率的に網羅</td></tr>
                        <tr><td><strong>でる1000問（TEX加藤）</strong></td><td>600〜990</td><td>Part 5文法問題を徹底的に演習</td></tr>
                        <tr><td><strong>精選模試 L&R（加藤ほか）</strong></td><td>800〜</td><td>高品質な模試5セット</td></tr>
                        <tr><td><strong>究極のゼミ Part 7</strong></td><td>800〜</td><td>長文読解の解法を体系的に学ぶ</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 950点突破の3原則</div>
                    <p>・<strong>毎日触れる</strong>：1日でも英語から離れると感覚が鈍る。量より継続性</p>
                    <p>・<strong>復習8割、新規2割</strong>：間違えた問題の徹底復習が最も効率的</p>
                    <p>・<strong>本番形式で練習</strong>：2時間通しの模試を最低月2回は実施</p>
                </div>
            </div>

            <div id="day38-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day38-quiz', 'day38-quiz', [
            {
                question: 'TOEIC 950点を取るために200問中許容されるミスはおよそ何問ですか？',
                options: ['5問', '10問', '20問', '30問'],
                correct: 1,
                explanation: '950点はListening・Reading合わせて200問中約190問の正答が必要で、許容ミスは約10問です。'
            },
            {
                question: 'TOEIC 950点は受験者の上位何%に位置しますか？',
                options: ['上位10%', '上位5%', '上位1%未満', '上位0.1%'],
                correct: 2,
                explanation: 'TOEIC 950点は受験者全体の上位1%未満に位置する非常に高いスコアです。'
            },
            {
                question: '950点突破の3原則で「毎日触れる」理由はどれですか？',
                options: ['問題集を早く終わらせるため', '1日でも離れると感覚が鈍る', '会社が毎日学習を義務付けているから', '教材が多すぎて毎日やらないと終わらない'],
                correct: 1,
                explanation: '英語は「感覚」が重要で、1日でも離れると聞き取り能力や読解スピードが低下します。量より継続性が大切です。'
            },
            {
                question: '効率的なTOEIC学習での「復習と新規学習」の理想的な比率はどれですか？',
                options: ['復習2割：新規8割', '復習5割：新規5割', '復習8割：新規2割', '新規のみ'],
                correct: 2,
                explanation: '間違えた問題の徹底復習（復習8割）が最も効率的です。新しい問題を解くよりも、ミスの原因を分析して二度と間違えないことが重要です。'
            },
            {
                question: '800点台→950点の推奨学習期間はどのくらいですか？',
                options: ['1ヶ月', '3〜6ヶ月', '1年', '2年'],
                correct: 1,
                explanation: '800点台から950点へは「壁越え」に相当し、語彙力やListening精度の向上に3〜6ヶ月程度の集中学習が推奨されます。'
            }
        ]);
    }
};
