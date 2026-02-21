// ===========================
// Day 77: API設計とマイクロサービス
// ===========================
window.Day77 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔌 API設計スタイルの比較</h2>
                <table class="styled-table">
                    <thead><tr><th>スタイル</th><th>特徴</th><th>最適な場面</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>REST</strong></td><td>リソース指向、HTTPメソッド</td><td>CRUD操作、Webサービス</td><td>口座情報API、取引照会</td></tr>
                        <tr><td><strong>GraphQL</strong></td><td>クエリ言語、必要なデータだけ取得</td><td>複雑なデータ要件</td><td>ポートフォリオ詳細表示</td></tr>
                        <tr><td><strong>gRPC</strong></td><td>Protocol Buffers、高速通信</td><td>マイクロサービス間</td><td>リアルタイム価格フィード</td></tr>
                        <tr><td><strong>WebSocket</strong></td><td>双方向リアルタイム</td><td>ストリーミング</td><td>市場データ配信</td></tr>
                        <tr><td><strong>SOAP</strong></td><td>XMLベース、厳格な型定義</td><td>エンタープライズ統合</td><td>銀行間決済（SWIFT）</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📋 REST API設計のベストプラクティス</h2>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>良い例</th><th>悪い例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>リソース名詞</strong></td><td>GET /accounts/123</td><td>GET /getAccount?id=123</td></tr>
                        <tr><td><strong>HTTPメソッドの使い分け</strong></td><td>POST /orders（作成）</td><td>GET /createOrder</td></tr>
                        <tr><td><strong>バージョニング</strong></td><td>/api/v2/accounts</td><td>バージョンなし</td></tr>
                        <tr><td><strong>ページネーション</strong></td><td>?page=2&limit=20</td><td>全件返却</td></tr>
                        <tr><td><strong>エラーレスポンス</strong></td><td>{"error": "...", "code": 404}</td><td>200 OK + エラーメッセージ</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔐 APIセキュリティ</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>内容</th><th>用途</th></tr></thead>
                    <tbody>
                        <tr><td><strong>OAuth 2.0</strong></td><td>認可フレームワーク</td><td>サードパーティAPI連携</td></tr>
                        <tr><td><strong>JWT</strong></td><td>JSON Web Token</td><td>ステートレス認証</td></tr>
                        <tr><td><strong>API Key</strong></td><td>固定キーによる認証</td><td>内部サービス間</td></tr>
                        <tr><td><strong>mTLS</strong></td><td>相互TLS認証</td><td>金融機関間の通信</td></tr>
                        <tr><td><strong>Rate Limiting</strong></td><td>リクエスト数制限</td><td>DoS対策・公平性</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 API設計のゴールデンルール</div>
                    <p>・<strong>消費者目線</strong>で設計する（API First）</p>
                    <p>・<strong>べき等性</strong>を意識する（同じリクエストを何回送っても同じ結果）</p>
                    <p>・<strong>後方互換性</strong>を維持する</p>
                    <p>・<strong>ドキュメント</strong>を自動生成する（OpenAPI/Swagger）</p>
                </div>
            </div>
            <div id="day77-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day77-quiz', 'day77-quiz', [
            { question: 'REST APIでリソースを作成するHTTPメソッドはどれですか？', options: ['GET', 'POST', 'DELETE', 'HEAD'], correct: 1, explanation: 'POSTメソッドは新しいリソースの作成に使用されるHTTPメソッドです。' },
            { question: 'gRPCの最大の特徴はどれですか？', options: ['XMLベース', 'Protocol Buffersによる高速通信', 'ブラウザ専用', 'JSONのみ対応'], correct: 1, explanation: 'gRPCはProtocol Buffersによるバイナリシリアライゼーションで高速な通信を実現します。' },
            { question: 'べき等性（Idempotency）とは何ですか？', options: ['処理が冪乗的に高速化する', '同じ操作を繰り返しても結果が同じ', 'データが重複しない', 'エラーが発生しない'], correct: 1, explanation: 'べき等性は同じリクエストを複数回送っても1回と同じ結果になることで、リトライ処理の安全性に重要です。' },
            { question: 'OAuth 2.0の主な用途はどれですか？', options: ['データ暗号化', 'サードパーティアプリへの認可', 'データベース管理', 'ファイル圧縮'], correct: 1, explanation: 'OAuth 2.0はユーザーがパスワードを共有せずにサードパーティアプリにリソースへのアクセスを許可する認可フレームワークです。' },
            { question: 'API Firstアプローチとは何ですか？', options: ['APIを最後に実装する', 'API設計を先にしてから実装する', 'APIを使わない', 'フロントエンドを先に作る'], correct: 1, explanation: 'API Firstは実装前にAPI仕様を設計・合意し、それをもとに開発を進めるアプローチです。' }
        ]);
    }
};
