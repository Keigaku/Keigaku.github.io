// ===========================
// Day 76: システムアーキテクチャパターン
// ===========================
window.Day76 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏗️ アーキテクチャスタイルの比較</h2>
                <table class="styled-table">
                    <thead><tr><th>パターン</th><th>特徴</th><th>メリット</th><th>デメリット</th></tr></thead>
                    <tbody>
                        <tr><td><strong>モノリス</strong></td><td>全機能が1つのアプリ</td><td>開発初期はシンプル</td><td>大規模化すると変更困難</td></tr>
                        <tr><td><strong>マイクロサービス</strong></td><td>機能ごとに独立サービス</td><td>独立デプロイ、スケーラブル</td><td>運用の複雑さ</td></tr>
                        <tr><td><strong>イベント駆動</strong></td><td>イベントで非同期連携</td><td>疎結合、リアルタイム</td><td>デバッグが困難</td></tr>
                        <tr><td><strong>レイヤードアーキテクチャ</strong></td><td>層構造（UI→BL→DB）</td><td>関心の分離</td><td>層間の依存</td></tr>
                        <tr><td><strong>ヘキサゴナル</strong></td><td>ポート＆アダプタ</td><td>テスト容易性</td><td>過設計のリスク</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📐 金融システムの設計パターン</h2>
                <table class="styled-table">
                    <thead><tr><th>パターン</th><th>内容</th><th>金融での活用</th></tr></thead>
                    <tbody>
                        <tr><td><strong>CQRS</strong></td><td>読み取りと書き込みを分離</td><td>取引記録（Write）と照会（Read）の最適化</td></tr>
                        <tr><td><strong>Event Sourcing</strong></td><td>状態の変更を全てイベントとして記録</td><td>取引の完全な監査証跡</td></tr>
                        <tr><td><strong>Saga</strong></td><td>分散トランザクション管理</td><td>送金処理の整合性保証</td></tr>
                        <tr><td><strong>Circuit Breaker</strong></td><td>障害の連鎖を防止</td><td>外部API障害時の安全停止</td></tr>
                        <tr><td><strong>Bulkhead</strong></td><td>障害の影響範囲を限定</td><td>サービス間の障害分離</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🧱 DDD（ドメイン駆動設計）</h2>
                <table class="styled-table">
                    <thead><tr><th>概念</th><th>内容</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ユビキタス言語</strong></td><td>業務用語をコードに反映</td><td>「約定」「ポジション」をクラス名に</td></tr>
                        <tr><td><strong>境界づけられたコンテキスト</strong></td><td>ドメインごとの独立したモデル</td><td>「取引」「リスク管理」は別モデル</td></tr>
                        <tr><td><strong>エンティティ</strong></td><td>一意に識別できるオブジェクト</td><td>取引ID、口座番号</td></tr>
                        <tr><td><strong>値オブジェクト</strong></td><td>値で比較するオブジェクト</td><td>金額、通貨ペア</td></tr>
                        <tr><td><strong>集約</strong></td><td>整合性を保つ単位</td><td>注文とその明細</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 アーキテクチャ選択の指針</div>
                    <p>・<strong>「最初はモノリス」</strong>でシンプルに始める</p>
                    <p>・<strong>痛みが生じてから分割</strong>する（早すぎるマイクロサービス化は危険）</p>
                    <p>・<strong>金融では整合性・監査証跡</strong>が特に重要</p>
                    <p>・<strong>非機能要件</strong>（性能、可用性、セキュリティ）が設計を決める</p>
                </div>
            </div>
            <div id="day76-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day76-quiz', 'day76-quiz', [
            { question: 'CQRSパターンの特徴はどれですか？', options: ['全ての処理を同一DBで行う', '読み取りと書き込みを分離する', 'データを暗号化する', 'キャッシュを使わない'], correct: 1, explanation: 'CQRS（Command Query Responsibility Segregation）は読み取り（Query）と書き込み（Command）を分離し、それぞれ最適化するパターンです。' },
            { question: 'Event Sourcingの最大の利点はどれですか？', options: ['処理が速い', '完全な監査証跡を持てる', 'データ量が少ない', 'シンプルに実装できる'], correct: 1, explanation: 'Event Sourcingは全ての状態変化をイベントとして記録するため、「いつ誰が何を変更したか」を完全に追跡できます。' },
            { question: 'DDDのユビキタス言語とは何ですか？', options: ['プログラミング言語', '業務とコードで共通の用語を使うこと', '多言語対応', 'コメントの書き方'], correct: 1, explanation: 'ユビキタス言語はビジネスチームと開発チームが同じ用語を共有し、それをコードにも反映する概念です。' },
            { question: 'マイクロサービスの最大のデメリットはどれですか？', options: ['スケールできない', '運用の複雑さ', 'テストが不要', '速度が遅い'], correct: 1, explanation: 'マイクロサービスはサービス間通信、分散トランザクション、監視など運用の複雑さが最大の課題です。' },
            { question: 'Circuit Breakerパターンの目的はどれですか？', options: ['データの暗号化', '障害の連鎖を防止する', 'データベースの最適化', 'コードの自動テスト'], correct: 1, explanation: 'Circuit Breakerは一部の障害がシステム全体に波及するのを防ぐパターンで、障害検知時に処理を遮断します。' }
        ]);
    }
};
