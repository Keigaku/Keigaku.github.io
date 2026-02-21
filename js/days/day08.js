// ===========================
// Day 08: プログラミングとクオンツ開発
// ===========================
window.Day08 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💻 クオンツ開発で使われるプログラミング言語</h2>
                <p>クオンツシステム開発では、目的に応じて複数のプログラミング言語が使われます。
                各言語の特徴と使い分けを理解しましょう。</p>

                <table class="styled-table">
                    <thead><tr><th>言語</th><th>特徴</th><th>主な用途</th></tr></thead>
                    <tbody>
                        <tr><td><strong>C++</strong></td><td>高速実行、メモリ制御</td><td>計算エンジン、リアルタイムシステム</td></tr>
                        <tr><td><strong>C#</strong></td><td>Windows統合、堅牢な型</td><td>GUI/フロントエンド、ビジネスロジック</td></tr>
                        <tr><td><strong>Python</strong></td><td>簡潔、豊富なライブラリ</td><td>プロトタイピング、データ分析、機械学習</td></tr>
                        <tr><td><strong>Java</strong></td><td>プラットフォーム独立、安定性</td><td>サーバーシステム、大規模バッチ</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">💡 なぜ複数の言語が必要？</div>
                    <p><strong>計算速度</strong>が求められる部分（時価計算エンジン）は C++、
                    <strong>ユーザーインターフェース</strong>は C#、
                    <strong>データ分析や検証</strong>は Python、
                    というように適材適所で使い分けます。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🐍 Pythonによるクオンツ計算の例</h2>
                <p>Pythonはクオンツの世界でも非常に人気のある言語です。
                ライブラリが充実しており、金融計算のプロトタイプを素早く作れます。</p>

                <h3>主要ライブラリ</h3>
                <table class="styled-table">
                    <thead><tr><th>ライブラリ</th><th>用途</th></tr></thead>
                    <tbody>
                        <tr><td><strong>NumPy</strong></td><td>数値計算（行列演算、線形代数）</td></tr>
                        <tr><td><strong>SciPy</strong></td><td>科学技術計算（最適化、統計、補間）</td></tr>
                        <tr><td><strong>pandas</strong></td><td>データ操作・分析（時系列データ）</td></tr>
                        <tr><td><strong>matplotlib</strong></td><td>グラフ・チャートの描画</td></tr>
                        <tr><td><strong>QuantLib</strong></td><td>金融工学ライブラリ（価格計算、カーブ構築）</td></tr>
                    </tbody>
                </table>

                <h3>Pythonコード例：ブラック・ショールズ計算</h3>
                <div class="code-block">
import numpy as np
from scipy.stats import norm

def black_scholes(S, K, T, r, sigma, option_type='call'):
    """ブラック・ショールズ価格計算"""
    d1 = (np.log(S/K) + (r + sigma**2/2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    
    if option_type == 'call':
        price = S * norm.cdf(d1) - K * np.exp(-r*T) * norm.cdf(d2)
    else:
        price = K * np.exp(-r*T) * norm.cdf(-d2) - S * norm.cdf(-d1)
    
    return price

# 使用例
price = black_scholes(S=100, K=100, T=1, r=0.05, sigma=0.2)
print(f"コールオプション価格: {price:.4f}")
# → コールオプション価格: 10.4506
                </div>

                <h3>Pythonコード例：モンテカルロシミュレーション</h3>
                <div class="code-block">
import numpy as np

def monte_carlo_call(S, K, T, r, sigma, n_simulations=100000):
    """モンテカルロ法によるコールオプション価格計算"""
    # ランダムな正規分布乱数を生成
    z = np.random.standard_normal(n_simulations)
    
    # 幾何ブラウン運動で株価パスを生成
    ST = S * np.exp((r - 0.5 * sigma**2) * T + sigma * np.sqrt(T) * z)
    
    # ペイオフを計算
    payoff = np.maximum(ST - K, 0)
    
    # 割引現在価値の平均 = オプション価格
    price = np.exp(-r * T) * np.mean(payoff)
    
    return price

price = monte_carlo_call(S=100, K=100, T=1, r=0.05, sigma=0.2)
print(f"MC推定価格: {price:.4f}")
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>⚙️ C++での高速計算</h2>
                <p>計算エンジンには処理速度が求められるため、C++が多用されます。</p>

                <h3>C++が選ばれる理由</h3>
                <ul>
                    <li><strong>実行速度</strong>：Pythonの50〜100倍の速度で数値計算が可能</li>
                    <li><strong>メモリ管理</strong>：大規模なシミュレーションでメモリ使用量を最適化</li>
                    <li><strong>並列処理</strong>：マルチスレッド、SIMD命令、GPU計算への対応</li>
                    <li><strong>既存資産</strong>：金融機関の多くの計算ライブラリがC++で書かれている</li>
                </ul>

                <h3>C++コード例</h3>
                <div class="code-block">
#include &lt;cmath&gt;
#include &lt;iostream&gt;

// 正規分布CDF（簡易版）
double normalCDF(double x) {
    return 0.5 * erfc(-x * M_SQRT1_2);
}

// ブラック・ショールズ
double blackScholes(double S, double K, double T, 
                    double r, double sigma) {
    double d1 = (log(S/K) + (r + sigma*sigma/2) * T) 
                / (sigma * sqrt(T));
    double d2 = d1 - sigma * sqrt(T);
    return S * normalCDF(d1) - K * exp(-r*T) * normalCDF(d2);
}

int main() {
    double price = blackScholes(100.0, 100.0, 1.0, 0.05, 0.2);
    std::cout &lt;&lt; "Call Price: " &lt;&lt; price &lt;&lt; std::endl;
    return 0;
}
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🏗️ クオンツシステムの構成</h2>
                <p>大規模なクオンツシステムは複数のコンポーネントで構成されます。</p>

                <table class="styled-table">
                    <thead><tr><th>コンポーネント</th><th>役割</th><th>主な技術</th></tr></thead>
                    <tbody>
                        <tr><td><strong>計算エンジン</strong></td><td>時価計算、リスク計算の実行</td><td>C++, GPU (CUDA)</td></tr>
                        <tr><td><strong>データ基盤</strong></td><td>市場データ、取引データの管理</td><td>SQL, NoSQL, 時系列DB</td></tr>
                        <tr><td><strong>API/サービス層</strong></td><td>計算リクエストの受付・結果配信</td><td>REST API, gRPC, メッセージキュー</td></tr>
                        <tr><td><strong>フロントエンド</strong></td><td>ユーザー向けの画面・帳票</td><td>C# (WPF), Web (React等)</td></tr>
                        <tr><td><strong>バッチ/ジョブ管理</strong></td><td>日次計算の実行管理</td><td>ジョブスケジューラ, 分散計算</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🔑 開発プロセス</div>
                    <p>私たちの仕事は、金融機関のクオンツ（金融数学の専門家）が設計した
                    数理モデルを、上記のようなシステムとして実装することです。
                    <strong>数理モデルの理解 + ソフトウェア工学</strong>の両方が求められます。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🔢 数値計算の基礎テクニック</h2>

                <h3>浮動小数点の理解</h3>
                <p>コンピュータは実数を正確に表現できません。<strong>浮動小数点演算</strong>には誤差が伴います。</p>
                <div class="code-block">
// Python
>>> 0.1 + 0.2
0.30000000000000004  # ← 正確に0.3にならない！

// 金融では金額の精度が重要 → 適切な丸め処理が必要
                </div>

                <h3>数値微分</h3>
                <p>解析的に微分できない場合、数値的に近似します（バンピング法）。</p>
                <div class="formula-box">
                    f'(x) ≈ [f(x + h) - f(x - h)] / (2h)　（中心差分）
                </div>

                <h3>AAD（Adjoint Algorithmic Differentiation）</h3>
                <p>グリークスの高速計算手法。通常のバンピングよりも大幅に効率的で、
                XVA計算の高速化に不可欠な技術です。</p>
            </div>

            <div id="day08-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // Quiz
        QuizEngine.render('day08-quiz', 'day08-quiz', [
            {
                question: 'クオンツシステムの「計算エンジン」部分にC++が選ばれる最大の理由は？',
                options: [
                    '文法がシンプルだから',
                    '実行速度が高速だから',
                    'ライブラリが豊富だから',
                    'クロスプラットフォーム対応だから'
                ],
                correct: 1,
                explanation: 'C++はPythonの50〜100倍の実行速度を実現でき、大規模な数値計算に最適です。メモリ管理の精密さも重要な利点です。'
            },
            {
                question: 'Pythonのライブラリ「NumPy」の主な用途は？',
                options: ['Web開発', '数値計算（行列演算等）', '画像認識', 'テキスト処理'],
                correct: 1,
                explanation: 'NumPyは数値計算ライブラリで、行列演算・線形代数・配列操作を効率的に行います。金融の数値計算に不可欠です。'
            },
            {
                question: 'コンピュータで 0.1 + 0.2 の計算結果が正確に 0.3 にならない理由は？',
                options: [
                    'バグ',
                    'プログラミング言語の欠陥',
                    '浮動小数点表現の精度限界',
                    'CPUの故障'
                ],
                correct: 2,
                explanation: 'コンピュータは2進数で実数を表現するため、0.1や0.2を正確に表現できません。これは浮動小数点演算の本質的な性質です。'
            },
            {
                question: '中心差分法による数値微分の公式は？',
                options: [
                    'f\'(x) ≈ [f(x+h) - f(x)] / h',
                    'f\'(x) ≈ [f(x+h) - f(x-h)] / (2h)',
                    'f\'(x) ≈ [f(x) - f(x-h)] / h',
                    'f\'(x) ≈ [f(x+h) + f(x-h)] / (2h)'
                ],
                correct: 1,
                explanation: '中心差分法は [f(x+h) - f(x-h)] / (2h) で、前進差分や後退差分よりも精度が高い（2次精度）です。'
            },
            {
                question: 'クオンツシステム開発で「数理モデルの理解」と合わせて求められるスキルは？',
                options: [
                    'マーケティング',
                    'ソフトウェア工学',
                    'プレゼンテーション',
                    'デザイン'
                ],
                correct: 1,
                explanation: 'クオンツシステム開発では、金融数学の数理モデルを理解した上で、それをソフトウェアとして実装するスキルが必要です。'
            }
        ]);
    }
};
