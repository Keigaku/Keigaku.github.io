// ===========================
// Day 79: テスト戦略と品質保証
// ===========================
window.Day79 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🧪 テストの種類とピラミッド</h2>
                <table class="styled-table">
                    <thead><tr><th>レベル</th><th>テスト種別</th><th>範囲</th><th>実行速度</th><th>コスト</th></tr></thead>
                    <tbody>
                        <tr><td><strong>底辺（多い）</strong></td><td>単体テスト</td><td>関数・クラス単位</td><td>極めて速い</td><td>低い</td></tr>
                        <tr><td><strong>中間</strong></td><td>結合テスト</td><td>モジュール間の連携</td><td>普通</td><td>中程度</td></tr>
                        <tr><td><strong>上部</strong></td><td>E2Eテスト</td><td>システム全体</td><td>遅い</td><td>高い</td></tr>
                        <tr><td><strong>頂点（少ない）</strong></td><td>手動テスト</td><td>探索的テスト</td><td>最も遅い</td><td>最も高い</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🔧 テスト手法</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>内容</th><th>ツール例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>TDD</strong></td><td>テストを先に書いてからコードを書く</td><td>JUnit, pytest</td></tr>
                        <tr><td><strong>BDD</strong></td><td>ビジネス要件をテストに変換</td><td>Cucumber, Behave</td></tr>
                        <tr><td><strong>モック/スタブ</strong></td><td>外部依存を模擬して単体テスト</td><td>Mockito, unittest.mock</td></tr>
                        <tr><td><strong>パフォーマンステスト</strong></td><td>負荷・ストレス・スパイクテスト</td><td>JMeter, Gatling, k6</td></tr>
                        <tr><td><strong>セキュリティテスト</strong></td><td>脆弱性スキャン、ペネトレーション</td><td>OWASP ZAP, Burp Suite</td></tr>
                        <tr><td><strong>カオスエンジニアリング</strong></td><td>意図的に障害を注入して耐性確認</td><td>Chaos Monkey, Litmus</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🏦 金融システムのテスト特有の課題</h2>
                <table class="styled-table">
                    <thead><tr><th>課題</th><th>理由</th><th>対策</th></tr></thead>
                    <tbody>
                        <tr><td><strong>計算精度</strong></td><td>金額計算の丸め誤差</td><td>Decimal型、精度テスト</td></tr>
                        <tr><td><strong>同時実行</strong></td><td>取引の競合・デッドロック</td><td>並行テスト、ロック検証</td></tr>
                        <tr><td><strong>日付・時間</strong></td><td>営業日、タイムゾーン</td><td>カレンダーテスト</td></tr>
                        <tr><td><strong>規制対応</strong></td><td>コンプライアンスの正確性</td><td>規制シナリオテスト</td></tr>
                        <tr><td><strong>大量データ</strong></td><td>本番に近いデータ量での検証</td><td>データマスキング + 本番相当テスト</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 品質保証の鉄則</div>
                    <p>・<strong>「テストは投資」</strong>：バグの発見が遅いほどコストは10倍に</p>
                    <p>・<strong>自動化を優先</strong>：回帰テストは必ず自動化</p>
                    <p>・<strong>テストデータ管理</strong>を戦略的に行う</p>
                    <p>・<strong>カバレッジは目的ではない</strong>：重要なパスを確実にカバー</p>
                </div>
            </div>
            <div id="day79-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day79-quiz', 'day79-quiz', [
            { question: 'テストピラミッドの底辺に位置するのはどれですか？', options: ['E2Eテスト', '手動テスト', '単体テスト', '結合テスト'], correct: 2, explanation: '単体テストは最も数が多く、実行速度が速く、コストが低いため、テストピラミッドの底辺に位置します。' },
            { question: 'TDD（テスト駆動開発）の手順はどれですか？', options: ['コード → テスト → リファクタ', 'テスト → コード → リファクタ', '設計 → コード → テスト', 'テスト → リファクタ → コード'], correct: 1, explanation: 'TDDは「Red（失敗テストを書く）→ Green（テストを通すコードを書く）→ Refactor」のサイクルです。' },
            { question: 'カオスエンジニアリングとは何ですか？', options: ['混乱した開発手法', '意図的に障害を注入して耐性を検証する', 'テストを省略する手法', 'バグを放置する手法'], correct: 1, explanation: 'カオスエンジニアリングは本番環境に近い状態で意図的に障害を起こし、システムの回復力を検証する手法です。' },
            { question: '金融システムの計算精度テストで注意すべき型はどれですか？', options: ['String型', 'Integer型', 'Decimal型（浮動小数点の丸め誤差）', 'Boolean型'], correct: 2, explanation: '金融計算では浮動小数点の丸め誤差が問題になるため、Decimal型を使い精度テストを行う必要があります。' },
            { question: 'バグの発見が遅れるとコストはどうなりますか？', options: ['変わらない', '段階的に10倍ずつ増加する', '減少する', '一定'], correct: 1, explanation: '要件定義→設計→実装→テスト→本番と、バグ発見のフェーズが遅くなるほど修正コストは指数的に増加します。' }
        ]);
    }
};
