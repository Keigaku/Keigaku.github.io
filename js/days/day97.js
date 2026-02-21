// ===========================
// Day 97: 証券取引所障害対応ケーススタディ
// ===========================
window.Day97 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🚨 ケース概要：証券取引システム障害</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 インシデント概要</div>
                    <p><strong>対象</strong>：大手証券会社のオンライントレーディングシステム</p>
                    <p><strong>発生</strong>：月曜朝の寄付き直後（最も取引量が多い時間帯）</p>
                    <p><strong>症状</strong>：注文が約定されない、口座残高が表示されない</p>
                    <p><strong>影響</strong>：約10万人の投資家に影響、3時間のサービス停止</p>
                    <p><strong>損害</strong>：補償金10億円、信頼失墜</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🔍 原因分析（タイムライン）</h2>
                <table class="styled-table">
                    <thead><tr><th>時刻</th><th>事象</th><th>原因</th></tr></thead>
                    <tbody>
                        <tr><td><strong>8:55</strong></td><td>前夜のバッチ処理が遅延していることを検知</td><td>データ量の想定外の増加</td></tr>
                        <tr><td><strong>9:00</strong></td><td>寄付きの注文が殺到</td><td>バッチ未完了のままリアルタイム処理開始</td></tr>
                        <tr><td><strong>9:02</strong></td><td>DBコネクションプール枯渇</td><td>バッチとリアルタイムのリソース競合</td></tr>
                        <tr><td><strong>9:05</strong></td><td>注文処理のレイテンシ急上昇</td><td>タイムアウトとリトライの連鎖</td></tr>
                        <tr><td><strong>9:10</strong></td><td>サービス全面停止</td><td>Circuit Breakerが未実装</td></tr>
                        <tr><td><strong>12:00</strong></td><td>サービス復旧</td><td>バッチ処理完了後、段階的再開</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📋 再発防止策</h2>
                <table class="styled-table">
                    <thead><tr><th>領域</th><th>対策</th><th>詳細</th></tr></thead>
                    <tbody>
                        <tr><td><strong>設計</strong></td><td>バッチとリアルタイムの分離</td><td>リソースプールの独立化</td></tr>
                        <tr><td><strong>可用性</strong></td><td>Circuit Breakerの導入</td><td>障害の連鎖を自動遮断</td></tr>
                        <tr><td><strong>監視</strong></td><td>バッチ完了の自動チェック</td><td>未完了時は寄付き延期判断</td></tr>
                        <tr><td><strong>テスト</strong></td><td>負荷テストの強化</td><td>ピーク×1.5倍での検証</td></tr>
                        <tr><td><strong>運用</strong></td><td>インシデント対応手順書の改訂</td><td>判断基準の明確化</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 障害対応の鉄則</div>
                    <p>・<strong>「まず止血、次に原因」</strong>：サービス復旧が最優先</p>
                    <p>・<strong>責任追及より再発防止</strong>：Blamelessポストモーテム</p>
                    <p>・<strong>情報は即公開</strong>：ステークホルダーへの透明な報告</p>
                    <p>・<strong>「障害は起きる」前提</strong>で設計する</p>
                </div>
            </div>
            <div id="day97-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day97-quiz', 'day97-quiz', [
            { question: 'この障害の根本原因はどれですか？', options: ['ハッカーの攻撃', 'バッチ処理とリアルタイム処理のリソース競合', 'ハードウェア故障', '停電'], correct: 1, explanation: 'バッチ処理が未完了のままリアルタイム処理が開始され、DBコネクション等のリソースが競合したことが根本原因です。' },
            { question: 'Blamelessポストモーテムの特徴はどれですか？', options: ['犯人を特定する', '個人の責任を追及せず仕組みの改善に焦点を当てる', '報告書を書かない', '障害を無視する'], correct: 1, explanation: 'Blamelessポストモーテムは個人を責めず、システムやプロセスの改善に焦点を当てることで、正直な報告を促します。' },
            { question: '障害発生時の最優先事項はどれですか？', options: ['原因の特定', '責任者の特定', 'サービスの復旧（止血）', '報告書の作成'], correct: 2, explanation: '「まず止血、次に原因」の原則に従い、障害時はサービスの復旧を最優先とします。原因調査は後で行います。' },
            { question: 'Circuit Breakerが未実装だった結果どうなりましたか？', options: ['問題なし', '障害が連鎖して全面停止', 'コストが下がった', '速度が上がった'], correct: 1, explanation: 'Circuit Breakerがなかったため、1つのコンポーネントの障害が他のコンポーネントに連鎖し、システム全面停止に至りました。' },
            { question: '負荷テストでピーク×1.5倍を推奨する理由はどれですか？', options: ['義務だから', '想定外のトラフィック増加に備えるため', '時間が余っている', 'コスト削減'], correct: 1, explanation: 'ピーク時の1.5倍でテストすることで、想定外のトラフィック増加や処理遅延時にもシステムが耐えられることを確認します。' }
        ]);
    }
};
