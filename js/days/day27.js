// ===========================
// Day 27: チームビルディングと人材育成
// ===========================
window.Day27 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>👥 チームの発達段階 — タックマンモデル</h2>
                <p>ブルース・タックマンが提唱したチーム発達モデル。チームは<strong>一夜にして高パフォーマンスにはならない</strong>ことを理解しましょう。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>段階</th><th>状態</th><th>リーダーの役割</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 形成期（Forming）</strong></td><td>互いを探り合い。遠慮と期待</td><td>方向性を示す、ルール設定</td></tr>
                        <tr><td><strong>2. 嵐の時期（Storming）</strong></td><td>意見の衝突、役割争い</td><td>衝突を恐れず受け止める、調整</td></tr>
                        <tr><td><strong>3. 統一期（Norming）</strong></td><td>規範が形成、協力体制</td><td>自律性を促す、権限委譲</td></tr>
                        <tr><td><strong>4. 機能期（Performing）</strong></td><td>高パフォーマンス発揮</td><td>障害除去、成長支援</td></tr>
                        <tr><td><strong>5. 散会期（Adjourning）</strong></td><td>プロジェクト終了、解散</td><td>振り返り、成果祝福</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 嵐の時期（Storming）を避けてはいけない</div>
                    <p>多くのチームがStorming段階を避けようとしますが、<strong>意見の衝突を適切に乗り越えることで
                    チームは真に強くなります</strong>。表面的な調和（偽りのNorming）は後に大きな問題を引き起こします。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>💬 1on1ミーティング</h2>
                <p>上司と部下の定期的な1対1の面談。<strong>部下のための時間</strong>であり、進捗報告の場ではありません。</p>

                <h3>効果的な1on1の進め方</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>項目</th><th>推奨事項</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>頻度</strong></td><td>隔週〜毎週30分</td></tr>
                        <tr><td><strong>主導権</strong></td><td>部下がアジェンダを決める（上司ではない）</td></tr>
                        <tr><td><strong>テーマ</strong></td><td>業務の困りごと、キャリア、モチベーション</td></tr>
                        <tr><td><strong>上司の役割</strong></td><td>傾聴70% : 話す30%</td></tr>
                        <tr><td><strong>心がけ</strong></td><td>評価の場にしない。安全な対話の場</td></tr>
                    </tbody>
                </table>

                <h3>1on1で使えるコーチング質問</h3>
                <div class="info-box tip">
                    <div class="info-box-title">💡 GROWモデル</div>
                    <p>・<strong>Goal（目標）</strong>：「今日話したいことは何ですか？」「理想的な状態はどんなですか？」</p>
                    <p>・<strong>Reality（現状）</strong>：「今はどのような状態ですか？」「何が障壁になっていますか？」</p>
                    <p>・<strong>Options（選択肢）</strong>：「他にどんな方法がありそうですか？」「もし制約がなければ？」</p>
                    <p>・<strong>Will（意志）</strong>：「まず何から始めますか？」「いつまでにやりますか？」</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📝 フィードバックの技術</h2>

                <h3>SBI-Iモデル</h3>
                <p>効果的なフィードバックの構造化手法です。</p>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>内容</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Situation</strong></td><td>具体的な状況</td><td>「昨日の定例ミーティングで」</td></tr>
                        <tr><td><strong>Behavior</strong></td><td>観察された行動</td><td>「クライアントの質問に対して、データを用いて説明していたのは」</td></tr>
                        <tr><td><strong>Impact</strong></td><td>その行動の影響</td><td>「クライアントの信頼感が増し、追加依頼の議論がスムーズに進みました」</td></tr>
                        <tr><td><strong>Intent</strong></td><td>今後の期待</td><td>「今後も重要なミーティングでこのアプローチを続けてください」</td></tr>
                    </tbody>
                </table>

                <h3>フィードバックの種類</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>種類</th><th>目的</th><th>比率の目安</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>ポジティブ・フィードバック</strong></td><td>良い行動を強化する</td><td>5（肯定）</td></tr>
                        <tr><td><strong>コンストラクティブ・フィードバック</strong></td><td>改善を促す</td><td>1（建設的指摘）</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📘 5:1の法則（ロサダ比）</div>
                    <p>高パフォーマンスチームでは、ポジティブとネガティブなコミュニケーションの比率が<strong>約5:1</strong>
                    であることが研究で示されています。改善指摘をする前に十分な肯定的フィードバックの土壌が重要です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🌱 メンタリング</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>項目</th><th>メンタリング</th><th>コーチング</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>関係性</strong></td><td>先輩と後輩（経験の共有）</td><td>コーチとクライアント（引き出す）</td></tr>
                        <tr><td><strong>手法</strong></td><td>経験談の共有、アドバイス</td><td>質問を通じて気づきを促す</td></tr>
                        <tr><td><strong>期間</strong></td><td>長期的（数ヶ月〜数年）</td><td>短期〜中期的</td></tr>
                        <tr><td><strong>焦点</strong></td><td>キャリア全般の成長</td><td>特定のスキルや課題</td></tr>
                    </tbody>
                </table>

                <h3>良いメンターの特徴</h3>
                <ul>
                    <li><strong>答えを教えるのではなく、考え方を教える</strong></li>
                    <li><strong>自分の失敗談も共有する</strong>（成功談ばかりでは学びにならない）</li>
                    <li><strong>メンティーの自律性を尊重する</strong>（依存関係を作らない）</li>
                    <li><strong>定期的に関わる</strong>（困った時だけでなく、平時から）</li>
                    <li><strong>メンティーのネットワーク拡大を支援する</strong></li>
                </ul>
            </div>

            <div id="day27-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day27-quiz', 'day27-quiz', [
            {
                question: 'タックマンモデルの「嵐の時期（Storming）」を避けるべきでない理由はどれですか？',
                options: ['嵐の時期がないと散会できないから', '意見の衝突を乗り越えることでチームが真に強くなるから', '嵐の時期はリーダーの権限が最大になるから', 'メンバーのIQが向上するから'],
                correct: 1,
                explanation: '表面的な調和（偽りのNorming）を保つよりも、意見の衝突を適切に乗り越えることで、チームの信頼と協力体制が真に確立されます。'
            },
            {
                question: '1on1ミーティングの主導権は誰が持つべきですか？',
                options: ['上司', '部下', 'PM', 'HRの担当者'],
                correct: 1,
                explanation: '1on1は「部下のための時間」です。部下がアジェンダを決め、業務の困りごと・キャリア・モチベーションなどを主体的に話す場です。'
            },
            {
                question: 'SBI-Iモデルの「I（Impact）」はどの段階ですか？',
                options: ['具体的な状況の説明', '観察された行動の記述', 'その行動が与えた影響の説明', '今後の期待の伝達'],
                correct: 2,
                explanation: 'SBI-IモデルのImpactは、観察された行動がチームやプロジェクトに与えた影響を具体的に説明する段階です。'
            },
            {
                question: '高パフォーマンスチームでのポジティブ対ネガティブコミュニケーションの比率は？',
                options: ['1:1', '2:1', '5:1', '10:1'],
                correct: 2,
                explanation: '研究によると、高パフォーマンスチームではポジティブとネガティブのコミュニケーション比率が約5:1であることが示されています。'
            },
            {
                question: 'GROWモデルでの「Options」の段階で適切な質問はどれですか？',
                options: ['「今日話したいことは何ですか？」', '「今はどのような状態ですか？」', '「他にどんな方法がありそうですか？」', '「まず何から始めますか？」'],
                correct: 2,
                explanation: 'Options（選択肢）の段階では「他にどんな方法がありそうですか？」「もし制約がなければ？」など、多様な選択肢を引き出す質問をします。'
            }
        ]);
    }
};
