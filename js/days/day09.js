// ===========================
// Day 09: システム設計とアーキテクチャ
// ===========================
window.Day09 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏗️ なぜシステム設計が重要か</h2>
                <p>大規模な金融システムは、適切に設計されていなければ、保守不能・拡張不能になります。
                良い設計は、システムの品質・信頼性・開発効率の基盤です。</p>

                <h3>金融システム特有の要件</h3>
                <table class="styled-table">
                    <thead><tr><th>要件</th><th>内容</th><th>例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>正確性</strong></td><td>計算結果に誤りが許されない</td><td>1円単位の精度、数値安定性</td></tr>
                        <tr><td><strong>性能</strong></td><td>大量の計算を高速に処理</td><td>日次バッチの時間制約</td></tr>
                        <tr><td><strong>可用性</strong></td><td>障害時の対応・復旧</td><td>市場が開いている間は停止不可</td></tr>
                        <tr><td><strong>監査性</strong></td><td>計算過程の追跡が可能</td><td>規制当局への説明義務</td></tr>
                        <tr><td><strong>拡張性</strong></td><td>新しい商品・モデルへの対応</td><td>新規デリバティブの追加</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📐 ソフトウェア設計の基本原則</h2>

                <h3>SOLID原則</h3>
                <p>オブジェクト指向設計の5つの基本原則です。</p>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>名称</th><th>概要</th></tr></thead>
                    <tbody>
                        <tr><td><strong>S</strong></td><td>単一責務（Single Responsibility）</td><td>クラスは1つの責務のみを持つ</td></tr>
                        <tr><td><strong>O</strong></td><td>開放閉鎖（Open/Closed）</td><td>拡張に開き、修正に閉じる</td></tr>
                        <tr><td><strong>L</strong></td><td>リスコフの置換（Liskov Substitution）</td><td>子クラスは親クラスの代わりに使える</td></tr>
                        <tr><td><strong>I</strong></td><td>インタフェース分離（Interface Segregation）</td><td>大きなインタフェースを小さく分割</td></tr>
                        <tr><td><strong>D</strong></td><td>依存性逆転（Dependency Inversion）</td><td>具体ではなく抽象に依存</td></tr>
                    </tbody>
                </table>

                <h3>クオンツシステムでの適用例</h3>
                <div class="code-block">
// 例：プライシングエンジンの設計（C#風の擬似コード）

// 抽象に依存（依存性逆転の原則）
interface IPricer {
    double CalculatePrice(Trade trade, MarketData market);
    Greeks CalculateGreeks(Trade trade, MarketData market);
}

// 商品ごとに異なる価格計算を実装（開放閉鎖の原則）
class VanillaOptionPricer : IPricer { ... }
class BarrierOptionPricer : IPricer { ... }
class SwapPricer : IPricer { ... }

// 新しい商品を追加する場合、既存コードを変更せず
// 新しいクラスを追加するだけ
class AsianOptionPricer : IPricer { ... }  // 新規追加

// 呼び出し側は抽象インタフェースのみに依存
class PricingEngine {
    IPricer pricer;  // 具体的なクラスを知らない
    
    double Price(Trade trade, MarketData market) {
        return pricer.CalculatePrice(trade, market);
    }
}
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🔧 デザインパターン</h2>
                <p>よく出くわす設計問題に対する再利用可能な解決策のテンプレートです。</p>

                <h3>金融システムでよく使うパターン</h3>
                <table class="styled-table">
                    <thead><tr><th>パターン</th><th>用途</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Strategy</strong></td><td>アルゴリズムを差し替え可能に</td><td>価格計算モデルの切り替え</td></tr>
                        <tr><td><strong>Factory</strong></td><td>オブジェクト生成の柔軟化</td><td>取引タイプに応じたPricerの生成</td></tr>
                        <tr><td><strong>Observer</strong></td><td>状態変化の通知</td><td>市場データ更新時のリアルタイム再計算</td></tr>
                        <tr><td><strong>Builder</strong></td><td>複雑なオブジェクトの段階的構築</td><td>取引条件の組み立て</td></tr>
                        <tr><td><strong>Template Method</strong></td><td>処理の骨格を定義</td><td>計算フローの共通化</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">📌 Strategyパターンの活用</div>
                    <p>例えば、同じ金利スワップでも「解析解」「モンテカルロ法」「有限差分法」など
                    複数の計算方法があります。Strategyパターンを使えば、
                    計算方法を簡単に切り替えられる柔軟な設計になります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🔄 開発プロセス</h2>

                <h3>アジャイル開発</h3>
                <p>金融システム開発でもアジャイル開発手法が一般的になっています。</p>
                <ul>
                    <li><strong>スプリント</strong>：2〜4週間単位で機能を段階的に開発</li>
                    <li><strong>デイリースタンドアップ</strong>：毎日短時間のチーム進捗共有</li>
                    <li><strong>スプリントレビュー</strong>：成果物のデモと振り返り</li>
                    <li><strong>継続的インテグレーション（CI）</strong>：コードの自動ビルド・テスト</li>
                </ul>

                <h3>開発の流れ</h3>
                <ol>
                    <li><strong>要件定義</strong>：クオンツと協議し、計算仕様を決定</li>
                    <li><strong>設計</strong>：アーキテクチャ設計、データモデル設計</li>
                    <li><strong>実装</strong>：コーディング、単体テスト</li>
                    <li><strong>数値検証</strong>：計算結果を既知の値やベンチマークと照合</li>
                    <li><strong>結合テスト</strong>：システム全体での動作確認</li>
                    <li><strong>UATリリース</strong>：ユーザー受入テスト後に本番環境へ</li>
                </ol>

                <div class="info-box important">
                    <div class="info-box-title">🔑 数値検証の重要性</div>
                    <p>金融システムでは、通常のソフトウェアテストに加えて<strong>数値検証</strong>が極めて重要です。
                    計算結果が数学的に正しいか、既知の解析解やベンチマーク値と一致するかを確認します。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🧪 テストとバージョン管理</h2>

                <h3>テスト戦略</h3>
                <table class="styled-table">
                    <thead><tr><th>テスト種類</th><th>内容</th><th>例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>単体テスト</strong></td><td>関数・クラス単位の動作確認</td><td>BSプライサーの出力値テスト</td></tr>
                        <tr><td><strong>数値テスト</strong></td><td>計算精度の検証</td><td>MC法がBS解析解に収束するか</td></tr>
                        <tr><td><strong>回帰テスト</strong></td><td>変更で既存機能が壊れないか</td><td>モデル変更前後の結果比較</td></tr>
                        <tr><td><strong>性能テスト</strong></td><td>処理速度・メモリ使用量の確認</td><td>10万ポジションの計算時間</td></tr>
                    </tbody>
                </table>

                <h3>バージョン管理（Git）</h3>
                <p>チーム開発ではGitによるソースコード管理が必須です。</p>
                <div class="code-block">
# 基本的なGitワークフロー
git clone [repository]     # リポジトリのクローン
git checkout -b feature/xxx  # フィーチャーブランチの作成
git add .                  # 変更のステージング
git commit -m "説明"       # コミット
git push origin feature/xxx  # プッシュ
# → プルリクエスト（コードレビュー）→ マージ
                </div>
            </div>

            <div id="day09-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // Quiz
        QuizEngine.render('day09-quiz', 'day09-quiz', [
            {
                question: 'SOLID原則の「O（開放閉鎖の原則）」の正しい説明は？',
                options: [
                    'クラスはいつでも公開（Open）にすべき',
                    '拡張に対して開いていて、修正に対して閉じている',
                    'コードは常にオープンソースであるべき',
                    '全てのメソッドをpublicにする'
                ],
                correct: 1,
                explanation: '開放閉鎖の原則は「既存のコードを修正せず（閉鎖）、新しいコードを追加して機能を拡張できる（開放）」設計を目指します。'
            },
            {
                question: 'Strategyパターンが金融システムで役立つ場面は？',
                options: [
                    'データベースの接続管理',
                    'ユーザー認証',
                    '計算モデル（解析解/MC法等）の切り替え',
                    'ログファイルの管理'
                ],
                correct: 2,
                explanation: 'Strategyパターンを使うと、同じ金融商品に対して異なる計算アルゴリズム（解析解、モンテカルロ法など）を柔軟に切り替えられます。'
            },
            {
                question: '金融システム開発で特に重要な独自のテスト種類は？',
                options: ['UIテスト', '数値検証テスト', 'A/Bテスト', 'ユーザビリティテスト'],
                correct: 1,
                explanation: '金融システムでは計算結果の正確性が極めて重要です。解析解やベンチマーク値との照合による数値検証テストが不可欠です。'
            },
            {
                question: '金融システムの「監査性」とはどのような要件ですか？',
                options: [
                    'システムが美しくデザインされていること',
                    '計算過程を追跡・説明できること',
                    '処理速度が高速であること',
                    'ソースコードが公開されていること'
                ],
                correct: 1,
                explanation: '監査性は、計算過程の記録・追跡が可能で、規制当局や監査人に対して計算結果の正当性を説明できることを意味します。'
            },
            {
                question: 'Gitのフィーチャーブランチを使った開発フローの正しい順序は？',
                options: [
                    'commit → clone → push → merge',
                    'clone → branch作成 → commit → push → PR → merge',
                    'push → commit → clone → merge',
                    'clone → merge → commit → push'
                ],
                correct: 1,
                explanation: '正しい流れは: clone（リポジトリ取得）→ branch作成 → 開発・commit → push → プルリクエスト（レビュー）→ merge です。'
            }
        ]);
    }
};
