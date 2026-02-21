// ===========================
// Day 23: リスク管理とステークホルダーマネジメント
// ===========================
window.Day23 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎯 プロジェクトリスク管理</h2>
                <p>プロジェクトにおけるリスクとは、<strong>発生すると目標に影響を与える不確実な事象</strong>です。
                リスク管理はPMの中でも最も実力差が出る領域です。</p>

                <h3>リスク管理プロセス</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>Step</th><th>プロセス</th><th>成果物</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1</strong></td><td>リスク特定（Identify）</td><td>リスク登録簿</td></tr>
                        <tr><td><strong>2</strong></td><td>定性的分析（Qualitative）</td><td>影響度 × 発生確率マトリクス</td></tr>
                        <tr><td><strong>3</strong></td><td>定量的分析（Quantitative）</td><td>期待金額損失、感度分析</td></tr>
                        <tr><td><strong>4</strong></td><td>対応計画（Plan Response）</td><td>リスク対応戦略</td></tr>
                        <tr><td><strong>5</strong></td><td>監視・管理（Monitor & Control）</td><td>トリガー条件、進捗報告</td></tr>
                    </tbody>
                </table>

                <h3>リスク対応戦略</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>戦略</th><th>説明</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>回避（Avoid）</strong></td><td>リスクの原因を除去</td><td>複雑な技術の採用をやめる</td></tr>
                        <tr><td><strong>転嫁（Transfer）</strong></td><td>リスクを第三者に移転</td><td>外注、保険、固定価格契約</td></tr>
                        <tr><td><strong>軽減（Mitigate）</strong></td><td>影響度や確率を下げる</td><td>プロトタイプ開発、段階リリース</td></tr>
                        <tr><td><strong>受容（Accept）</strong></td><td>リスクを許容する</td><td>コンティンジェンシー予備設定</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📋 リスク登録簿の実践</h2>

                <div class="info-box info">
                    <div class="info-box-title">📘 リスク登録簿テンプレート</div>
                </div>

                <table class="styled-table">
                    <thead>
                        <tr><th>ID</th><th>リスク内容</th><th>影響</th><th>確率</th><th>スコア</th><th>対応</th><th>担当</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>R-001</td><td>クオンツモデルの計算精度不足</td><td>高</td><td>中</td><td>6</td><td>軽減：早期のベンチマーク検証</td><td>PL</td></tr>
                        <tr><td>R-002</td><td>主要メンバーの離脱</td><td>高</td><td>低</td><td>3</td><td>軽減：ナレッジ共有、ドキュメント化</td><td>PM</td></tr>
                        <tr><td>R-003</td><td>規制変更による要件変更</td><td>高</td><td>中</td><td>6</td><td>回避：規制動向の定期モニタリング</td><td>PM</td></tr>
                        <tr><td>R-004</td><td>外部パッケージのバグ</td><td>中</td><td>中</td><td>4</td><td>転嫁：ベンダーサポート契約</td><td>PL</td></tr>
                        <tr><td>R-005</td><td>本番データ量の想定超過</td><td>中</td><td>高</td><td>6</td><td>軽減：負荷テスト早期実施</td><td>SL</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 金融SIer特有のリスク</div>
                    <p>・<strong>規制変更リスク</strong>：FRTB、バーゼルIV等の規制変更で要件が変わる</p>
                    <p>・<strong>市場環境変化リスク</strong>：負金利導入でモデルが壊れる等</p>
                    <p>・<strong>クライアント組織変更</strong>：担当者の異動で意思決定が停滞</p>
                    <p>・<strong>ベンダーロック</strong>：特定ベンダーのライブラリへの依存</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>👥 ステークホルダーマネジメント</h2>
                <p>プロジェクトの成否は、技術だけでなく<strong>人の管理</strong>で決まります。</p>

                <h3>ステークホルダー分析</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>ステークホルダー</th><th>関心事</th><th>影響力</th><th>管理戦略</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>クライアント部長</strong></td><td>予算・ROI・期限</td><td>非常に高い</td><td>月次報告、エスカレーション先</td></tr>
                        <tr><td><strong>クライアント担当者</strong></td><td>使いやすさ・業務適合性</td><td>高い</td><td>週次定例、要件レビュー</td></tr>
                        <tr><td><strong>クオンツチーム</strong></td><td>数理モデルの正確性</td><td>高い（技術面）</td><td>技術レビュー、共同検証</td></tr>
                        <tr><td><strong>コンプライアンス</strong></td><td>規制準拠</td><td>中（拒否権あり）</td><td>事前相談、承認取得</td></tr>
                        <tr><td><strong>エンドユーザー</strong></td><td>業務効率化</td><td>低〜中</td><td>UAT参加、フィードバック収集</td></tr>
                    </tbody>
                </table>

                <h3>権力/関心度マトリクス</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th></th><th>高い関心</th><th>低い関心</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>高い権力</strong></td><td>✅ 密に管理（満足させ続ける）</td><td>⚡ 満足させ続ける（不満を防ぐ）</td></tr>
                        <tr><td><strong>低い権力</strong></td><td>📢 情報提供（味方にする）</td><td>📊 最低限のモニタリング</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🔄 変更管理</h2>
                <p>金融SIerでは変更管理が特に重要です。要件変更は<strong>コスト・スケジュール・品質</strong>全てに影響します。</p>

                <h3>変更管理プロセス</h3>
                <div class="code-block">1. 変更要求の受付（Change Request）
   ↓
2. 影響分析（Impact Analysis）
   - スケジュール影響、コスト見積、品質への影響
   ↓
3. CCB（Change Control Board）での審議
   - GO / NO-GO / 延期の判断
   ↓
4. 承認された変更の計画・実行
   ↓
5. ベースラインの更新
   ↓
6. 変更結果の検証・報告</div>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 変更管理で最も重要なこと</div>
                    <p><strong>「口頭での変更依頼を受けない」</strong></p>
                    <p>会議中に「ついでにこれも」と言われた場合は、必ず正式な変更要求として記録し、影響分析を行ってから着手します。
                    これを怠るとスコープクリープの原因になります。</p>
                </div>
            </div>

            <div id="day23-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day23-quiz', 'day23-quiz', [
            {
                question: 'リスク対応戦略で「転嫁（Transfer）」の具体例はどれですか？',
                options: ['リスクの原因を除去する', '外注や保険で第三者にリスクを移転する', '影響度を下げるために段階リリースする', 'コンティンジェンシー予備を設定する'],
                correct: 1,
                explanation: 'リスクの転嫁は、保険加入、外注委託、固定価格契約などにより、リスクの影響を第三者に移転する戦略です。'
            },
            {
                question: 'ステークホルダーマネジメントで「高い権力×低い関心」の人への基本戦略はどれですか？',
                options: ['密に管理する', '満足させ続ける', '情報提供で味方にする', '最低限のモニタリング'],
                correct: 1,
                explanation: '高い権力を持つが関心の低い人は「不満を防ぐ」ことが重要です。突然の介入を防ぐため、定期的な情報提供で満足させ続けます。'
            },
            {
                question: 'CCB（Change Control Board）の役割はどれですか？',
                options: ['コードレビューを行う', '変更要求を審議しGO/NO-GOを判断する', 'テスト計画を承認する', 'プロジェクト計画を作成する'],
                correct: 1,
                explanation: 'CCBは変更管理委員会であり、変更要求を審議してGO/NO-GO/延期の判断を行う組織です。'
            },
            {
                question: 'リスク登録簿のスコア（影響度×発生確率）が最も高いリスクに対する対応として適切なのはどれですか？',
                options: ['受容して何もしない', '回避または軽減策を立てて優先的に対処する', '保険をかけて忘れる', 'リスク登録簿から削除する'],
                correct: 1,
                explanation: 'スコアが高いリスクは優先的に対処すべきです。回避（原因を除去）または軽減（影響を下げる）策を計画し、積極的にモニタリングします。'
            },
            {
                question: '「口頭での変更依頼を受けない」ルールが重要な理由はどれですか？',
                options: ['法的に無効だから', 'スコープクリープの原因になるから', '音声記録が必要だから', 'チーム全員に聞こえないから'],
                correct: 1,
                explanation: '口頭での変更を安易に受け入れると影響分析がされないまま作業が増え、スコープクリープ（スコープの肥大化）の主要原因になります。'
            }
        ]);
    }
};
