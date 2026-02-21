// ===========================
// Day 71: Pythonプログラミング基礎
// ===========================
window.Day71 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🐍 なぜPythonなのか</h2>
                <p>Pythonは<strong>金融・データサイエンス・AI</strong>の分野で最も使われるプログラミング言語です。
                シンプルな文法と豊富なライブラリが、初学者からプロまで幅広く支持されています。</p>
                <table class="styled-table">
                    <thead><tr><th>特徴</th><th>内容</th><th>金融での活用</th></tr></thead>
                    <tbody>
                        <tr><td><strong>読みやすい文法</strong></td><td>インデントによる構造化</td><td>チーム開発・保守性</td></tr>
                        <tr><td><strong>豊富なライブラリ</strong></td><td>NumPy, Pandas, scikit-learn</td><td>データ分析・機械学習</td></tr>
                        <tr><td><strong>インタラクティブ実行</strong></td><td>Jupyter Notebook</td><td>分析レポートの共有</td></tr>
                        <tr><td><strong>大規模コミュニティ</strong></td><td>情報が豊富</td><td>問題解決が速い</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📝 基本文法</h2>
                <div class="code-block"><pre><code># 変数と型
name = "金融太郎"     # 文字列
age = 25              # 整数
rate = 0.05           # 浮動小数点
is_active = True      # 真偽値

# リストと辞書
prices = [100, 105, 103, 108, 110]
portfolio = {"株式": 0.6, "債券": 0.3, "現金": 0.1}

# 条件分岐
if rate > 0.03:
    print("金利が高い")
elif rate > 0.01:
    print("金利は普通")
else:
    print("低金利")

# ループ
for price in prices:
    print(f"価格: {price}")

# リスト内包表記
returns = [(prices[i] - prices[i-1]) / prices[i-1]
           for i in range(1, len(prices))]</code></pre></div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔧 関数とクラス</h2>
                <div class="code-block"><pre><code># 関数
def calculate_return(buy_price, sell_price):
    """リターンを計算する"""
    return (sell_price - buy_price) / buy_price

# クラス
class Bond:
    def __init__(self, face_value, coupon_rate, years):
        self.face_value = face_value
        self.coupon_rate = coupon_rate
        self.years = years

    def annual_coupon(self):
        return self.face_value * self.coupon_rate

# 使用例
bond = Bond(1000000, 0.02, 10)
print(f"年間利息: {bond.annual_coupon():,.0f}円")</code></pre></div>
                <div class="info-box tip">
                    <div class="info-box-title">💡 金融エンジニアのPython活用</div>
                    <p>・<strong>データ分析</strong>：市場データの取得・加工・分析</p>
                    <p>・<strong>自動化</strong>：定型レポートの自動生成</p>
                    <p>・<strong>プロトタイピング</strong>：トレーディング戦略の検証</p>
                    <p>・<strong>API連携</strong>：外部サービスとのデータ連携</p>
                </div>
            </div>
            <div id="day71-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day71-quiz', 'day71-quiz', [
            { question: 'Pythonでリストの要素を順番に処理するにはどの構文を使いますか？', options: ['if文', 'for文', 'def文', 'class文'], correct: 1, explanation: 'for文はリストなどのイテラブルオブジェクトの要素を順番に処理するための繰り返し構文です。' },
            { question: 'Pythonの辞書型で正しい定義はどれですか？', options: ['[1, 2, 3]', '(1, 2, 3)', '{"key": "value"}', '{1, 2, 3}'], correct: 2, explanation: '辞書型は{キー: 値}の形式で定義し、キーを使って値にアクセスします。' },
            { question: 'Pythonのクラスでコンストラクタを定義するメソッド名は？', options: ['__init__', '__main__', '__start__', '__new__'], correct: 0, explanation: '__init__メソッドはクラスのインスタンスが生成される際に自動的に呼ばれるコンストラクタです。' },
            { question: 'リスト内包表記の利点はどれですか？', options: ['実行速度が遅い', '簡潔にリストを生成できる', 'エラーが出にくい', 'メモリを多く使う'], correct: 1, explanation: 'リスト内包表記はforループを1行で書ける簡潔な記法で、Pythonらしいコードの代表例です。' },
            { question: '金融分野でPythonが最も活用されている領域はどれですか？', options: ['ゲーム開発', 'データ分析と機械学習', 'ハードウェア制御', 'Webデザイン'], correct: 1, explanation: 'Pythonは豊富なデータ分析・機械学習ライブラリにより、金融分野で最も広く使われています。' }
        ]);
    }
};
