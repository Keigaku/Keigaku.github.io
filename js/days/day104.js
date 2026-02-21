// ===========================
// Day 104: 13:00-14:00 午後の開発・コーディング
// ===========================
window.Day104 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💻 13:00 — 午後の開発タイム</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>昼食後の時間は<strong>集中的な開発・コーディング</strong>に充てます。
                    「出来る社員」は<strong>TDD（テスト駆動開発）</strong>で品質を担保し、
                    <strong>SOLID原則</strong>で保守性の高いコードを書き、
                    <strong>デザインパターン</strong>で先人の知恵を活用します。</p>
                </div>
                <h3>🔴🟢🔄 13:00-13:30 — TDD（テスト駆動開発）</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：TDD（Red → Green → Refactor）</div>
                    <p>テストを先に書き、そのテストを通すコードを実装し、リファクタリングするサイクルです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>やること</th><th>金融PJでの例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>🔴 Red</strong></td><td>失敗するテストを書く</td><td>「VaR計算で信頼水準99%の結果が期待値と一致すること」のテスト作成</td></tr>
                        <tr><td><strong>🟢 Green</strong></td><td>テストを通す最小限のコードを書く</td><td>VaR計算ロジックを実装し、テストをパスさせる</td></tr>
                        <tr><td><strong>🔄 Refactor</strong></td><td>コードを整理（テストは引き続きパス）</td><td>共通処理の抽出、変数名の改善、パフォーマンス最適化</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 金融システムでTDDが特に有効な理由</div>
                    <p>・<strong>計算ロジックの正確性</strong>が求められる（1円の誤差も許されない）</p>
                    <p>・<strong>回帰テスト</strong>により規制変更時のリグレッションを防止</p>
                    <p>・<strong>仕様書としてのテスト</strong>が後任者への引き継ぎになる</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🏛️ 13:30-13:50 — SOLID原則</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：SOLID原則</div>
                    <p>オブジェクト指向設計の5つの原則。保守性・拡張性の高いコードの基盤です。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>内容</th><th>金融システムでの適用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>S — 単一責任</strong><br>Single Responsibility</td><td>クラスは1つの責任のみ持つ</td><td>「取引登録」と「リスク計算」を別クラスに分離</td></tr>
                        <tr><td><strong>O — 開放閉鎖</strong><br>Open/Closed</td><td>拡張に開き、修正に閉じる</td><td>新しい金融商品の追加時、既存コードを変更せず拡張可能にする</td></tr>
                        <tr><td><strong>L — リスコフ置換</strong><br>Liskov Substitution</td><td>サブクラスは基底クラスと置換可能</td><td>Bond（債券）クラスはInstrument（金融商品）として振る舞える</td></tr>
                        <tr><td><strong>I — インターフェース分離</strong><br>Interface Segregation</td><td>使わないメソッドに依存させない</td><td>IPriceable、IRiskCalculable を分離して必要な機能だけ実装</td></tr>
                        <tr><td><strong>D — 依存性逆転</strong><br>Dependency Inversion</td><td>具象ではなく抽象に依存</td><td>MarketDataProviderインターフェースを通じてBloomberg/Reutersを切替可能に</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🧩 13:50-14:00 — デザインパターンの実践活用</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：GoFデザインパターン（頻出5選）</div>
                    <p>金融システム開発で特に使用頻度の高いデザインパターンを紹介します。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>パターン</th><th>分類</th><th>用途</th><th>金融PJでの使用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Strategy</strong></td><td>振る舞い</td><td>アルゴリズムを動的に切替</td><td>金利計算方式（固定/変動/LIBOR後継）を切替</td></tr>
                        <tr><td><strong>Factory Method</strong></td><td>生成</td><td>生成ロジックを隠蔽</td><td>金融商品タイプに応じたPricerの生成</td></tr>
                        <tr><td><strong>Observer</strong></td><td>振る舞い</td><td>状態変化を通知</td><td>マーケットデータ更新時の全画面自動リフレッシュ</td></tr>
                        <tr><td><strong>Template Method</strong></td><td>振る舞い</td><td>処理の骨格を定義</td><td>日次バッチ処理の共通フロー（取得→計算→格納→通知）</td></tr>
                        <tr><td><strong>Singleton</strong></td><td>生成</td><td>インスタンスを1つに制限</td><td>設定情報管理、DB接続プール</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 出来る社員のコーディング習慣</div>
                    <p>・コーディング前に<strong>15分の設計時間</strong>を取る（急がば回れ）</p>
                    <p>・<strong>意味のある変数名・メソッド名</strong>でコメント不要なコードを目指す</p>
                    <p>・<strong>小さなコミット</strong>を頻繁に行い、レビューしやすくする</p>
                    <p>・迷ったら<strong>YAGNI</strong>（You Ain't Gonna Need It）— 今必要ないものは作らない</p>
                </div>
            </div>
            <div id="day104-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day104-quiz', 'day104-quiz', [
            { question: 'TDDの正しいサイクルはどれですか？', options: ['Green→Red→Refactor', 'Red→Green→Refactor', 'Refactor→Red→Green', 'Red→Refactor→Green'], correct: 1, explanation: 'TDDは Red（失敗するテスト）→ Green（テストを通す）→ Refactor（コード改善）のサイクルで進めます。' },
            { question: 'SOLID原則の「O」（開放閉鎖原則）の意味はどれですか？', options: ['すべてのクラスを公開する', '拡張に開き、修正に閉じる', 'オブジェクトを開放する', 'オープンソースを使う'], correct: 1, explanation: '開放閉鎖原則は、既存コードを修正せずに新機能を拡張できる設計を目指す原則です。' },
            { question: 'Strategyパターンの主な用途はどれですか？', options: ['インスタンスを1つに制限する', 'アルゴリズムを動的に切り替える', '状態変化を通知する', '処理の骨格を定義する'], correct: 1, explanation: 'Strategyパターンはアルゴリズムをクラスとして分離し、実行時に動的に切り替えることができます。' },
            { question: 'YAGNIの意味として正しいものはどれですか？', options: ['常に将来を見越して作れ', '今必要ないものは作らない', '全てのパターンを適用せよ', 'テストは最後に書け'], correct: 1, explanation: 'YAGNI（You Ain\'t Gonna Need It）は、将来必要になる「かもしれない」機能を先に作らないという原則です。' },
            { question: '金融システムでTDDが特に有効な最大の理由はどれですか？', options: ['開発速度が上がるから', '計算ロジックの正確性が求められ1円の誤差も許されないから', '上司が推奨しているから', 'コードが短くなるから'], correct: 1, explanation: '金融システムは計算精度が極めて重要であり、テストによる品質保証が不可欠です。' }
        ]);
    }
};
