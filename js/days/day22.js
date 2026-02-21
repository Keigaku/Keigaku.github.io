// ===========================
// Day 22: PM基礎 — スコープ・スケジュール・コスト
// ===========================
window.Day22 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📋 プロジェクトマネジメントの基礎</h2>
                <p>プロジェクトマネジメントとは、<strong>有限のリソース（時間・人・お金）</strong>を使って、
                特定の目標を期限内に達成するための体系的な手法です。
                PMBOKをベースに、金融SIerでの実践的なPMスキルを学びます。</p>

                <h3>PMBOKの10の知識エリア</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>知識エリア</th><th>概要</th><th>重要度</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>統合管理</strong></td><td>プロジェクト全体の調整</td><td>★★★★★</td></tr>
                        <tr><td><strong>スコープ管理</strong></td><td>何をやる/やらないの明確化</td><td>★★★★★</td></tr>
                        <tr><td><strong>スケジュール管理</strong></td><td>いつまでにやるかの計画</td><td>★★★★★</td></tr>
                        <tr><td><strong>コスト管理</strong></td><td>予算の計画・管理</td><td>★★★★</td></tr>
                        <tr><td><strong>品質管理</strong></td><td>成果物の品質確保</td><td>★★★★★</td></tr>
                        <tr><td><strong>資源管理</strong></td><td>人的・物的リソースの管理</td><td>★★★★</td></tr>
                        <tr><td><strong>コミュニケーション管理</strong></td><td>情報の適切な伝達</td><td>★★★★</td></tr>
                        <tr><td><strong>リスク管理</strong></td><td>不確実性への対応</td><td>★★★★★</td></tr>
                        <tr><td><strong>調達管理</strong></td><td>外部リソースの確保</td><td>★★★</td></tr>
                        <tr><td><strong>ステークホルダー管理</strong></td><td>関係者の期待管理</td><td>★★★★★</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🎯 スコープ管理</h2>
                <p>スコープ管理はPMの根幹です。<strong>「何をやるか」以上に「何をやらないか」を明確にすること</strong>が重要です。</p>

                <h3>WBS（Work Breakdown Structure）</h3>
                <div class="info-box info">
                    <div class="info-box-title">📘 WBSとは</div>
                    <p>プロジェクトの作業を階層的に分解した構造図。100%ルール（全ての成果物が含まれる）を遵守します。</p>
                </div>

                <div class="code-block">【WBSの例：金融システム開発】
1. 要件定義
   1.1 業務要件ヒアリング
   1.2 機能要件定義
   1.3 非機能要件定義
   1.4 要件定義書レビュー

2. 基本設計
   2.1 アーキテクチャ設計
   2.2 画面設計
   2.3 外部インターフェース設計
   2.4 データベース設計

3. 詳細設計
   3.1 モジュール設計
   3.2 計算ロジック設計（クオンツ）
   3.3 詳細設計書レビュー

4. 製造・単体テスト
5. 結合テスト
6. 総合テスト
7. 移行・リリース</div>

                <h3>スコープクリープ（スコープの肥大化）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>原因</th><th>対策</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>要件が曖昧なまま進む</td><td>要件定義での合意文書化</td></tr>
                        <tr><td>クライアントの追加要望を安易に受ける</td><td>変更管理プロセスの確立</td></tr>
                        <tr><td>「ついでにこれも」の積み重ね</td><td>スコープベースラインの管理</td></tr>
                        <tr><td>ステークホルダー間の認識齟齬</td><td>定期的なスコープレビュー</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📅 スケジュール管理</h2>

                <h3>クリティカルパス法（CPM）</h3>
                <div class="info-box info">
                    <div class="info-box-title">📘 クリティカルパスとは</div>
                    <p>プロジェクト完了までの<strong>最長の経路</strong>。クリティカルパス上のタスクが遅れると、
                    プロジェクト全体が遅延します。逆に、クリティカルパスを短縮すればプロジェクト全体を短縮できます。</p>
                </div>

                <h3>スケジュール短縮テクニック</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>テクニック</th><th>内容</th><th>リスク</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>クラッシング</strong></td><td>リソース追加で期間短縮</td><td>コスト増加、人月の神話</td></tr>
                        <tr><td><strong>ファストトラッキング</strong></td><td>本来直列のタスクを並列化</td><td>手戻りリスク増加</td></tr>
                        <tr><td><strong>スコープ削減</strong></td><td>優先度の低い機能を後回し</td><td>ステークホルダーの不満</td></tr>
                        <tr><td><strong>成果物の再利用</strong></td><td>既存コンポーネントの活用</td><td>適合性の問題</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 「人月の神話」を忘れないこと</div>
                    <p>ブルックスの法則：<strong>「遅れているプロジェクトに人を追加すると、さらに遅れる」</strong></p>
                    <p>新メンバーの立ち上げコスト、コミュニケーション経路の増大（n人→n(n-1)/2通り）が原因です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>💰 コスト管理とEVM</h2>

                <h3>EVM（Earned Value Management）</h3>
                <p>プロジェクトの進捗とコストを定量的に管理するフレームワークです。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>指標</th><th>名称</th><th>意味</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>PV</strong></td><td>Planned Value</td><td>計画上、今の時点までに完了しているべき作業の価値</td></tr>
                        <tr><td><strong>EV</strong></td><td>Earned Value</td><td>実際に完了した作業の価値（＝実績進捗）</td></tr>
                        <tr><td><strong>AC</strong></td><td>Actual Cost</td><td>実際にかかったコスト</td></tr>
                        <tr><td><strong>SPI</strong></td><td>Schedule Performance Index</td><td>EV / PV（1.0未満＝遅延）</td></tr>
                        <tr><td><strong>CPI</strong></td><td>Cost Performance Index</td><td>EV / AC（1.0未満＝コスト超過）</td></tr>
                        <tr><td><strong>EAC</strong></td><td>Estimate at Completion</td><td>完了時の予測総コスト = BAC / CPI</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 EVMの読み方</div>
                    <p>・<strong>SPI = 0.8</strong> → スケジュールが20%遅れている</p>
                    <p>・<strong>CPI = 1.2</strong> → 予算の83%で計画分の作業を完了（効率的）</p>
                    <p>・<strong>SPI < 1.0 かつ CPI < 1.0</strong> → 危険信号！遅延とコスト超過の両方</p>
                </div>
            </div>

            <div id="day22-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day22-quiz', 'day22-quiz', [
            {
                question: 'WBSの「100%ルール」とは何ですか？',
                options: ['全チームメンバーが100%稼働すること', 'プロジェクトの全ての成果物がWBSに含まれること', '品質テストカバレッジが100%であること', '全ての要件が承認されていること'],
                correct: 1,
                explanation: 'WBSの100%ルールとは、プロジェクトの全ての作業と成果物が漏れなくWBSに含まれているべきという原則です。'
            },
            {
                question: 'クリティカルパスとは何ですか？',
                options: ['最もリスクの高いタスクの集合', 'プロジェクト完了までの最長経路', '最も重要なメンバーの担当タスク', '予算が最も大きいタスクの集合'],
                correct: 1,
                explanation: 'クリティカルパスはプロジェクト完了までの最長の経路であり、このパス上のタスクの遅延がそのままプロジェクト全体の遅延に直結します。'
            },
            {
                question: 'ブルックスの法則の主張はどれですか？',
                options: ['人を増やすほど効率が上がる', '遅れているプロジェクトに人を追加するとさらに遅れる', '3人チームが最も効率的', 'リモートワークは生産性を下げる'],
                correct: 1,
                explanation: 'ブルックスの法則は「遅れているプロジェクトに人を追加すると、さらに遅れる」という経験則です。新メンバーの教育コストとコミュニケーション経路の爆発が原因です。'
            },
            {
                question: 'EVMでCPI = 0.8の意味はどれですか？',
                options: ['予算の80%を消化した', '80%の作業が完了した', 'コストが20%超過している（効率が悪い）', 'スケジュールが20%遅延している'],
                correct: 2,
                explanation: 'CPI（Cost Performance Index）= EV / AC。0.8は計画よりも多くのコストをかけている（コスト効率が悪い）ことを意味します。'
            },
            {
                question: 'スコープクリープを防ぐ最も効果的な方法はどれですか？',
                options: ['要件定義をスキップして早く開発に入る', '変更管理プロセスを確立し全ての変更を審査する', 'クライアントの要望を全て受け入れる', 'スコープを文書化せず柔軟に対応する'],
                correct: 1,
                explanation: '変更管理プロセスを確立し、全ての変更要求を正式に審査・承認することで、スコープの無秩序な肥大化を防止できます。'
            }
        ]);
    }
};
