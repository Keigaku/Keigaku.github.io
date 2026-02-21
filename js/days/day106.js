// ===========================
// Day 106: 15:00-16:00 コードレビュー・品質管理
// ===========================
window.Day106 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔍 15:00 — コードレビューと品質管理</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>午後の後半はチームメンバーのコードレビューや品質管理活動に充てます。
                    「出来る社員」は<strong>DORA指標</strong>で開発パフォーマンスを測り、
                    <strong>チェックリスト法</strong>で見落としを防ぎ、
                    <strong>FMEA</strong>でリスクを事前に潰します。</p>
                </div>
                <h3>📊 15:00-15:20 — 開発パフォーマンス指標（DORA）</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：DORA 4つの指標</div>
                    <p>Google の DevOps Research and Assessment チームが提唱する、開発チームのパフォーマンスを測る4指標です。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>指標</th><th>意味</th><th>エリートチーム基準</th><th>金融PJでの改善策</th></tr></thead>
                    <tbody>
                        <tr><td><strong>デプロイ頻度</strong></td><td>本番環境へのリリース頻度</td><td>1日複数回</td><td>CI/CDパイプライン整備、フィーチャーフラグ活用</td></tr>
                        <tr><td><strong>変更リードタイム</strong></td><td>コミット〜本番稼働までの時間</td><td>1時間未満</td><td>自動テスト拡充、承認プロセス簡素化</td></tr>
                        <tr><td><strong>変更障害率</strong></td><td>デプロイ後に障害が発生する割合</td><td>0-15%</td><td>コードレビュー徹底、カナリアリリース</td></tr>
                        <tr><td><strong>サービス復旧時間</strong></td><td>障害発生から復旧までの時間</td><td>1時間未満</td><td>ランブック整備、監視アラート最適化</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>✅ 15:20-15:40 — コードレビュー（チェックリスト法）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：コードレビューチェックリスト</div>
                    <p>体系的な観点でコードを検査し、見落としを防ぐ手法です。金融システムでは特に重要です。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>観点</th><th>チェック項目</th><th>金融PJでの重要度</th></tr></thead>
                    <tbody>
                        <tr><td><strong>正確性</strong></td><td>計算ロジックは仕様書と一致しているか</td><td>★★★（最重要）</td></tr>
                        <tr><td><strong>セキュリティ</strong></td><td>SQLインジェクション、XSS、認証漏れはないか</td><td>★★★</td></tr>
                        <tr><td><strong>パフォーマンス</strong></td><td>N+1問題、不要なループ、大量データ対応</td><td>★★★</td></tr>
                        <tr><td><strong>エラーハンドリング</strong></td><td>例外処理、リトライ、ロールバック</td><td>★★☆</td></tr>
                        <tr><td><strong>可読性</strong></td><td>命名規則、コメント、複雑度</td><td>★★☆</td></tr>
                        <tr><td><strong>テストカバレッジ</strong></td><td>境界値、異常系、回帰テスト</td><td>★★★</td></tr>
                        <tr><td><strong>規制準拠</strong></td><td>監査証跡、データ保持期間、暗号化</td><td>★★★</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 出来る社員のレビュー作法</div>
                    <p>・指摘は<strong>「Why（なぜ問題か）」+ 「How（どう改善するか）」</strong>をセットで</p>
                    <p>・<strong>LGTM（Looks Good To Me）</strong>の前に必ずチェックリストを通す</p>
                    <p>・良いコードには<strong>「ここ良いですね！」</strong>とポジティブフィードバック</p>
                    <p>・個人攻撃ではなく<strong>コードに対するフィードバック</strong>を心がける</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⚠️ 15:40-16:00 — リスク分析（FMEA）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：FMEA（故障モード影響分析）</div>
                    <p><strong>Failure Mode and Effects Analysis</strong> — 潜在的な故障モードとその影響を事前に分析し、
                    優先度をつけて対策するフレームワークです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>評価軸</th><th>内容</th><th>スコア（1-10）</th><th>金融PJでの例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>深刻度（S）</strong></td><td>故障時の影響の大きさ</td><td>10: 資金決済ミス</td><td>誤った約定価格での取引成立</td></tr>
                        <tr><td><strong>発生頻度（O）</strong></td><td>故障が起きる可能性</td><td>5: 月に1回程度</td><td>特定の市場条件で発生するバグ</td></tr>
                        <tr><td><strong>検出難度（D）</strong></td><td>発見の難しさ</td><td>8: テストで検出困難</td><td>本番データでのみ再現する問題</td></tr>
                        <tr><td><strong>RPN</strong></td><td>S × O × D（リスク優先度数）</td><td>高いほど優先対応</td><td>RPN > 200 は即座に対策</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 FMEAの活用ポイント</div>
                    <p>・リリース前に主要機能のFMEAを実施し、<strong>RPN上位5件</strong>に対策を打つ</p>
                    <p>・対策後に再評価し、RPNが下がったことを確認する</p>
                    <p>・過去のインシデント情報をFMEAにフィードバックし、<strong>ナレッジを蓄積</strong>する</p>
                </div>
            </div>
            <div id="day106-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day106-quiz', 'day106-quiz', [
            { question: 'DORA指標に含まれないものはどれですか？', options: ['デプロイ頻度', '変更リードタイム', 'コード行数', '変更障害率'], correct: 2, explanation: 'DORA指標は「デプロイ頻度」「変更リードタイム」「変更障害率」「サービス復旧時間」の4つです。コード行数は含まれません。' },
            { question: 'FMEAのRPNの計算式はどれですか？', options: ['深刻度 + 発生頻度 + 検出難度', '深刻度 × 発生頻度 × 検出難度', '深刻度 × 発生頻度 / 検出難度', '(深刻度 + 発生頻度) × 検出難度'], correct: 1, explanation: 'RPN（Risk Priority Number）は 深刻度(S) × 発生頻度(O) × 検出難度(D) で計算します。' },
            { question: 'コードレビューで最も避けるべき行動はどれですか？', options: ['チェックリストを使う', '良いコードを褒める', '個人を攻撃する指摘をする', '改善提案をセットで伝える'], correct: 2, explanation: 'コードレビューは「コードに対するフィードバック」であり、個人攻撃は心理的安全性を損ない逆効果です。' },
            { question: '金融システムのコードレビューで最重要の観点はどれですか？', options: ['コメントの量', '計算ロジックの正確性', 'インデントのスタイル', '変数名の長さ'], correct: 1, explanation: '金融システムでは計算の正確性が最重要です。1円の誤差も損失や規制違反につながる可能性があります。' },
            { question: 'DORA指標でエリートチームの変更リードタイムの基準はどれですか？', options: ['1ヶ月未満', '1週間未満', '1日未満', '1時間未満'], correct: 3, explanation: 'DORAのエリートチーム基準では、コミットから本番稼働までのリードタイムは1時間未満とされています。' }
        ]);
    }
};
