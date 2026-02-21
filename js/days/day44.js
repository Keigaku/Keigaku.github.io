// ===========================
// Day 44: データベース設計とSQL実践
// ===========================
window.Day44 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🗄️ リレーショナルDB設計の基礎</h2>
                <p>金融システムの中核には<strong>データベース</strong>があります。
                正確な取引記録、高速なクエリ、データの整合性が金融DBの三大要件です。</p>
                <h3>正規化</h3>
                <table class="styled-table">
                    <thead><tr><th>正規形</th><th>条件</th><th>目的</th><th>例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>第1正規形（1NF）</strong></td><td>繰り返しグループの排除</td><td>原子性の確保</td><td>1セルに1値のみ</td></tr>
                        <tr><td><strong>第2正規形（2NF）</strong></td><td>部分関数従属の排除</td><td>冗長性の削減</td><td>複合キーの一部への依存を排除</td></tr>
                        <tr><td><strong>第3正規形（3NF）</strong></td><td>推移的関数従属の排除</td><td>更新時異常の防止</td><td>非キー属性間の依存を排除</td></tr>
                        <tr><td><strong>BCNF</strong></td><td>全ての決定項が候補キー</td><td>完全な冗長排除</td><td>候補キーが複数ある場合</td></tr>
                    </tbody>
                </table>
                <div class="info-box info">
                    <div class="info-box-title">📘 金融DBでの非正規化</div>
                    <p>参照系テーブル（時価データ、ヒストリカルデータ）では<strong>パフォーマンスのために意図的に非正規化</strong>することがあります。
                    正規化 vs 非正規化のトレードオフを理解することが重要です。</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>⚡ SQL実践 — 金融でよく使うクエリ</h2>
                <h3>重要なSQL構文</h3>
                <table class="styled-table">
                    <thead><tr><th>構文</th><th>用途</th><th>金融での使用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>JOIN</strong></td><td>テーブル結合</td><td>取引とポジションの結合</td></tr>
                        <tr><td><strong>GROUP BY + 集約関数</strong></td><td>グループ別集計</td><td>通貨別・商品別の損益集計</td></tr>
                        <tr><td><strong>WINDOW関数</strong></td><td>行をまたぐ計算</td><td>移動平均、ランキング、累積和</td></tr>
                        <tr><td><strong>CTE（WITH句）</strong></td><td>再帰クエリ、可読性向上</td><td>階層データ（組織・勘定科目）の展開</td></tr>
                        <tr><td><strong>EXISTS / NOT EXISTS</strong></td><td>存在チェック</td><td>照合処理（マッチング）</td></tr>
                        <tr><td><strong>MERGE / UPSERT</strong></td><td>挿入 or 更新</td><td>日次バッチでのデータ更新</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 WINDOW関数の例</div>
                    <p><code>SELECT date, price, AVG(price) OVER (ORDER BY date ROWS BETWEEN 4 PRECEDING AND CURRENT ROW) AS moving_avg_5 FROM stock_prices;</code></p>
                    <p>→ 5日移動平均を計算。金融データ分析ではWINDOW関数が最も頻繁に使われます。</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔧 パフォーマンスチューニング</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>効果</th><th>注意点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>インデックス設計</strong></td><td>検索の高速化</td><td>更新性能への影響、カーディナリティ</td></tr>
                        <tr><td><strong>実行計画の確認</strong></td><td>クエリの動作を把握</td><td>EXPLAIN / EXPLAIN ANALYZE</td></tr>
                        <tr><td><strong>パーティショニング</strong></td><td>大量データの分割管理</td><td>日付ベース（取引日）が一般的</td></tr>
                        <tr><td><strong>クエリリライト</strong></td><td>非効率なSQLの改善</td><td>サブクエリ→JOIN変換等</td></tr>
                        <tr><td><strong>接続プーリング</strong></td><td>接続オーバーヘッド削減</td><td>プールサイズの適切な設定</td></tr>
                        <tr><td><strong>キャッシュ戦略</strong></td><td>参照頻度の高いデータ</td><td>Redis、Memcached活用</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>🏦 金融DB設計パターン</h2>
                <table class="styled-table">
                    <thead><tr><th>パターン</th><th>概要</th><th>用途</th></tr></thead>
                    <tbody>
                        <tr><td><strong>複式簿記モデル</strong></td><td>借方・貸方の対称テーブル</td><td>勘定系システム</td></tr>
                        <tr><td><strong>イベントソーシング</strong></td><td>状態変更をイベントとして記録</td><td>取引履歴、監査証跡</td></tr>
                        <tr><td><strong>Slowly Changing Dimension</strong></td><td>履歴データの保持方式</td><td>顧客マスタの変更履歴</td></tr>
                        <tr><td><strong>Temporal Table</strong></td><td>有効期間付きデータ管理</td><td>金利・レート等の時系列管理</td></tr>
                    </tbody>
                </table>
                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 金融DBの鉄則</div>
                    <p>・<strong>DELETE禁止</strong>：金融データは論理削除（フラグ管理）が原則</p>
                    <p>・<strong>監査証跡</strong>：誰が・いつ・何を変更したかを全て記録</p>
                    <p>・<strong>トランザクション管理</strong>：ACID特性を厳密に保証</p>
                </div>
            </div>
            <div id="day44-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day44-quiz', 'day44-quiz', [
            { question: '第3正規形（3NF）で排除するのはどれですか？', options: ['繰り返しグループ', '部分関数従属', '推移的関数従属', '多値従属'], correct: 2, explanation: '第3正規形では非キー属性から別の非キー属性への推移的関数従属を排除します。' },
            { question: '金融データ分析で最も頻繁に使われるSQL構文はどれですか？', options: ['UNION', 'WINDOW関数', 'HAVING', 'CROSS JOIN'], correct: 1, explanation: 'WINDOW関数は移動平均、ランキング、累積和など金融分析に不可欠です。' },
            { question: '金融DBでDELETE文を使わない理由はどれですか？', options: ['性能が悪いから', '監査証跡の保持と法規制対応のため', 'SQLの文法が複雑だから', 'ストレージが安いから'], correct: 1, explanation: '金融データは監査証跡と法規制の観点から物理削除せず、論理削除（フラグ管理）が原則です。' },
            { question: '大量のヒストリカルデータを効率的に管理する手法はどれですか？', options: ['インデックスの追加', 'パーティショニング', 'ビューの作成', 'トリガーの設定'], correct: 1, explanation: 'パーティショニング（日付ベースの分割等）は大量の時系列データの管理に効果的です。' },
            { question: 'ACID特性の「I」は何を表しますか？', options: ['Integrity', 'Isolation', 'Index', 'Interface'], correct: 1, explanation: 'ACID特性のIはIsolation（分離性）で、トランザクション間の干渉を防止する性質です。' }
        ]);
    }
};
