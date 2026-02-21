// ===========================
// Day 28: クライアントリレーションシップ
// ===========================
window.Day28 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💼 クライアントリレーションシップとは</h2>
                <p>SIerのビジネスは<strong>長期的な信頼関係</strong>の上に成り立っています。
                一つのプロジェクトの成功が次の案件につながり、継続的なバリューを提供し続けることが会社の成長の源泉です。
                クライアントとの関係構築力は、中堅以降で最も差がつくスキルです。</p>

                <h3>信頼の4つの要素（Trust Equation）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>内容</th><th>高め方</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>信頼性（Credibility）</strong></td><td>言葉の信用</td><td>正確な情報提供、専門知識の深さ</td></tr>
                        <tr><td><strong>信実性（Reliability）</strong></td><td>行動の信用</td><td>約束を守る、期限厳守、一貫した行動</td></tr>
                        <tr><td><strong>親密性（Intimacy）</strong></td><td>安心感</td><td>機密を守る、相手の立場を理解する</td></tr>
                        <tr><td><strong>自己志向（Self-Orientation）</strong></td><td>利己的でないか（分母）</td><td>クライアントの利益を最優先にする</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📘 信頼の方程式</div>
                    <p><strong>Trust = (信頼性 + 信実性 + 親密性) / 自己志向</strong></p>
                    <p>自己志向（自分の利益を優先すること）が分母にあることに注目。
                    どんなに専門性が高くても、「自分の都合」で動いている印象を与えると信頼は低下します。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📈 提案力 — 「言われたこと」を超える</h2>
                <p>優秀なSEと平均的なSEの最大の違いは<strong>提案力</strong>です。</p>

                <h3>提案のレベル</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>レベル</th><th>行動</th><th>クライアントの評価</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Lv.1 受動的</strong></td><td>言われたことをやる</td><td>「普通のSEだな」</td></tr>
                        <tr><td><strong>Lv.2 能動的</strong></td><td>聞かれる前に報告する</td><td>「しっかりしているな」</td></tr>
                        <tr><td><strong>Lv.3 提案型</strong></td><td>課題を見つけて解決策を提案する</td><td>「頼りになるな」</td></tr>
                        <tr><td><strong>Lv.4 戦略的</strong></td><td>クライアントの中長期課題を先読みして提案</td><td>「この人は手放せない」</td></tr>
                    </tbody>
                </table>

                <h3>効果的な提案のフレームワーク</h3>
                <div class="code-block">【提案のテンプレート】

1. 現状認識：「現在、〇〇の処理に△△時間かかっていると伺いました」
2. 課題の明確化：「このままだと□□のリスクがあります」
3. 提案内容：「××の手法を導入することを提案します」
4. 根拠：「他行での事例/技術検証の結果/定量的な効果」
5. 実行計画：「まずはPoC（概念実証）を2週間で実施し、効果を検証します」
6. コスト・リスク：「必要な工数は△人月、リスクは□□です」</div>

                <div class="info-box tip">
                    <div class="info-box-title">💡 提案のコツ</div>
                    <p>・<strong>数字で語る</strong>：「速くなります」→「処理時間を60%削減できます」</p>
                    <p>・<strong>選択肢を示す</strong>：「A案（コスト重視）とB案（品質重視）の2案をご用意しました」</p>
                    <p>・<strong>リスクも正直に伝える</strong>：リスクを隠す提案は信頼を損なう</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🔄 長期関係マネジメント</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>フェーズ</th><th>目標</th><th>具体的な行動</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>関係構築初期</strong></td><td>信頼の基盤を作る</td><td>約束を確実に守る、レスポンスを速く</td></tr>
                        <tr><td><strong>深化期</strong></td><td>パートナーとして認識される</td><td>クライアントの業務を深く理解、proactiveな提案</td></tr>
                        <tr><td><strong>維持・発展期</strong></td><td>不可欠な存在になる</td><td>戦略的提案、ナレッジ共有、人材育成</td></tr>
                    </tbody>
                </table>

                <h3>クライアントとのコミュニケーション実践</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>場面</th><th>NG行動</th><th>OK行動</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>問題発生時</strong></td><td>判明するまで報告しない</td><td>即座に第一報、続報で詳細を追加</td></tr>
                        <tr><td><strong>要件の認識齟齬</strong></td><td>「そうは聞いていません」</td><td>「認識合わせをさせてください」</td></tr>
                        <tr><td><strong>無理な依頼</strong></td><td>「できません」で終える</td><td>「代替案をご提案します」</td></tr>
                        <tr><td><strong>成功時</strong></td><td>自分たちの手柄にする</td><td>クライアントチームと共に成果を称える</td></tr>
                        <tr><td><strong>提案時</strong></td><td>技術用語だらけの資料</td><td>ビジネスインパクト中心の説明</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>⚡ ケーススタディ：困難な場面</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>場面</th><th>考え方</th><th>行動</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>クライアントの怒り</strong></td><td>感情を受け止めてから事実を整理</td><td>まず謝罪→原因究明→再発防止策</td></tr>
                        <tr><td><strong>予算超過の兆候</strong></td><td>早期の透明な共有が信頼を守る</td><td>事実と影響を定量的に報告</td></tr>
                        <tr><td><strong>担当者変更</strong></td><td>引き継ぎは新たな信頼構築の機会</td><td>過去の経緯を丁寧に共有</td></tr>
                        <tr><td><strong>競合の参入</strong></td><td>自社の独自価値を再確認</td><td>実績とナレッジの深さで差別化</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 究極の目標</div>
                    <p>「困ったことがあったらまずNSSOLに相談しよう」とクライアントに思ってもらう関係を築くこと。
                    それは<strong>日々の誠実な積み重ね</strong>でしか達成できません。</p>
                </div>
            </div>

            <div id="day28-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day28-quiz', 'day28-quiz', [
            {
                question: '信頼の方程式（Trust Equation）で分母にある要素はどれですか？',
                options: ['信頼性（Credibility）', '信実性（Reliability）', '親密性（Intimacy）', '自己志向（Self-Orientation）'],
                correct: 3,
                explanation: '自己志向が分母にあるため、自分の利益を優先する姿勢が強いほど信頼は低下します。クライアントの利益を最優先する姿勢が重要です。'
            },
            {
                question: '提案のレベルで「Lv.4 戦略的」の行動はどれですか？',
                options: ['言われたことをやる', '聞かれる前に報告する', '課題を見つけて解決策を提案する', 'クライアントの中長期課題を先読みして提案する'],
                correct: 3,
                explanation: 'Lv.4の戦略的提案は、クライアントが気づいていない中長期的な課題やトレンドを先読みし、先手を打って提案する最高レベルの行動です。'
            },
            {
                question: '問題発生時の適切な対応はどれですか？',
                options: ['全てが判明するまで報告しない', '即座に第一報、続報で詳細を追加する', 'メールだけで報告する', '解決してから報告する'],
                correct: 1,
                explanation: '問題発生時は即座に第一報（現時点での事実）を報告し、詳細が判明したら続報を追加するのが適切です。遅い報告は信頼を大きく損ないます。'
            },
            {
                question: 'クライアントからの無理な依頼への適切な対応はどれですか？',
                options: ['とりあえず全て受け入れる', '「できません」で終える', '代替案を提案する', '上司に丸投げする'],
                correct: 2,
                explanation: '「できません」で終えるのではなく、なぜ難しいかを説明した上で代替案を提案することで、問題解決姿勢を示しつつ信頼を維持します。'
            },
            {
                question: '提案を効果的にするためのコツで最も重要なのはどれですか？',
                options: ['技術用語を多用する', '定量的な効果を数字で示す', '口頭だけで伝える', '詳細な実装方法を先に説明する'],
                correct: 1,
                explanation: '「速くなります」ではなく「処理時間を60%削減」のように、定量的にビジネスインパクトを示すことが提案を説得力あるものにします。'
            }
        ]);
    }
};
