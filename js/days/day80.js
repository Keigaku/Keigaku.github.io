// ===========================
// Day 80: パフォーマンスとスケーラビリティ
// ===========================
window.Day80 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚡ パフォーマンス最適化の領域</h2>
                <table class="styled-table">
                    <thead><tr><th>領域</th><th>手法</th><th>効果</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>キャッシュ</strong></td><td>Redis, Memcached, CDN</td><td>レイテンシ削減</td><td>為替レート/市場データのキャッシュ</td></tr>
                        <tr><td><strong>DB最適化</strong></td><td>インデックス、パーティション、クエリ最適化</td><td>クエリ高速化</td><td>取引履歴の検索最適化</td></tr>
                        <tr><td><strong>非同期処理</strong></td><td>メッセージキュー（Kafka, RabbitMQ）</td><td>スループット向上</td><td>注文処理の非同期化</td></tr>
                        <tr><td><strong>負荷分散</strong></td><td>ロードバランサー（L4/L7）</td><td>高可用性</td><td>Webサーバ/APIの分散</td></tr>
                        <tr><td><strong>コネクションプール</strong></td><td>DB/HTTP接続の再利用</td><td>オーバーヘッド削減</td><td>高頻度DB接続の最適化</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📈 スケーリング戦略</h2>
                <table class="styled-table">
                    <thead><tr><th>方式</th><th>内容</th><th>メリット</th><th>デメリット</th></tr></thead>
                    <tbody>
                        <tr><td><strong>スケールアップ（垂直）</strong></td><td>サーバのスペックを上げる</td><td>シンプル、設計変更不要</td><td>上限あり、コスト高</td></tr>
                        <tr><td><strong>スケールアウト（水平）</strong></td><td>サーバ台数を増やす</td><td>理論上無限に拡張</td><td>分散の複雑さ</td></tr>
                        <tr><td><strong>データベースシャーディング</strong></td><td>データを分割して複数DBに格納</td><td>大量データ対応</td><td>クロスシャードクエリ</td></tr>
                        <tr><td><strong>CDN</strong></td><td>コンテンツを地理的に分散</td><td>グローバル配信</td><td>動的コンテンツには不向き</td></tr>
                        <tr><td><strong>オートスケーリング</strong></td><td>負荷に応じて自動で台数調整</td><td>コスト効率</td><td>スパイクへの追従遅延</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📊 パフォーマンス指標</h2>
                <table class="styled-table">
                    <thead><tr><th>指標</th><th>内容</th><th>金融システムの目標値</th></tr></thead>
                    <tbody>
                        <tr><td><strong>レイテンシ</strong></td><td>リクエストから応答までの時間</td><td>Web API: &lt; 200ms、HFT: &lt; 1ms</td></tr>
                        <tr><td><strong>スループット</strong></td><td>単位時間あたりの処理数</td><td>取引: 数万TPS</td></tr>
                        <tr><td><strong>可用性</strong></td><td>稼働率</td><td>99.99%（四つの9）= 年間53分のダウンタイム</td></tr>
                        <tr><td><strong>P99レイテンシ</strong></td><td>99%のリクエストがこの時間以内</td><td>平均値よりP99/P95が重要</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 パフォーマンスの鉄則</div>
                    <p>・<strong>「計測なくして最適化なし」</strong>：推測ではなくプロファイルする</p>
                    <p>・<strong>ボトルネック</strong>は1つずつ解消する（アムダールの法則）</p>
                    <p>・<strong>早期最適化は悪</strong>：まず正しく動かし、次に速くする</p>
                    <p>・<strong>キャッシュは万能薬ではない</strong>：整合性とのトレードオフ</p>
                </div>
            </div>
            <div id="day80-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day80-quiz', 'day80-quiz', [
            { question: '99.99%の可用性の場合、年間の許容ダウンタイムはどれですか？', options: ['約5時間', '約53分', '約5分', '0分'], correct: 1, explanation: '99.99%（四つの9）の可用性は年間約53分のダウンタイムを許容します。' },
            { question: 'スケールアウトとスケールアップの違いはどれですか？', options: ['同じ意味', 'アウトは台数増加、アップはスペック向上', 'アウトはクラウド、アップはオンプレ', 'アウトは速い、アップは遅い'], correct: 1, explanation: 'スケールアウトはサーバ台数を増やす水平拡張、スケールアップはサーバのCPU/メモリを増強する垂直拡張です。' },
            { question: 'P99レイテンシが重要な理由はどれですか？', options: ['平均値が正確だから', '外れ値を含むユーザー体験を反映するため', '計算が簡単だから', '常に平均値より低いから'], correct: 1, explanation: 'P99は99%のリクエストの応答時間を表し、尾の長いレイテンシ分布でのユーザー体験を正確に反映します。' },
            { question: 'メッセージキューの主な利点はどれですか？', options: ['同期処理の強制', '送信側と受信側を疎結合にする', 'データの暗号化', 'GUIの提供'], correct: 1, explanation: 'メッセージキューは送信側と受信側を非同期に疎結合にし、スループット向上と障害耐性を実現します。' },
            { question: '「早期最適化は諸悪の根源」は誰の言葉ですか？', options: ['リーナス・トーバルズ', 'ドナルド・クヌース', 'アラン・チューリング', 'ティム・バーナーズ＝リー'], correct: 1, explanation: 'ドナルド・クヌースの有名な言葉で、推測に基づく早期の最適化はコードの複雑化を招くと警告しています。' }
        ]);
    }
};
