// ===========================
// Day 72: データ分析実践
// ===========================
window.Day72 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📊 データ分析の基本ツール</h2>
                <table class="styled-table">
                    <thead><tr><th>ライブラリ</th><th>用途</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>NumPy</strong></td><td>数値計算・行列演算</td><td>リターン計算、ポートフォリオ最適化</td></tr>
                        <tr><td><strong>Pandas</strong></td><td>表形式データ操作</td><td>株価データの加工・集計</td></tr>
                        <tr><td><strong>SciPy</strong></td><td>科学計算・統計</td><td>リスク指標計算、最適化</td></tr>
                        <tr><td><strong>statsmodels</strong></td><td>統計モデリング</td><td>回帰分析、時系列分析</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🐼 Pandas実践</h2>
                <div class="code-block"><pre><code>import pandas as pd
import numpy as np

# CSVからデータ読み込み
df = pd.read_csv("stock_prices.csv", parse_dates=["date"])

# 基本統計量の確認
print(df.describe())

# データクレンジング
df = df.dropna()                    # 欠損値の除去
df = df[df["price"] > 0]            # 異常値の除外

# 日次リターンの計算
df["return"] = df["price"].pct_change()

# 月次集計
monthly = df.resample("M", on="date").agg({
    "price": ["first", "last", "mean"],
    "volume": "sum"
})

# ローリング統計
df["ma_20"] = df["price"].rolling(20).mean()
df["vol_20"] = df["return"].rolling(20).std() * np.sqrt(252)</code></pre></div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📋 データ分析のプロセス</h2>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>内容</th><th>Pandasの機能</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. 取得</strong></td><td>データの読み込み</td><td>read_csv, read_excel, read_sql</td></tr>
                        <tr><td><strong>2. 探索（EDA）</strong></td><td>データの全体像を把握</td><td>describe, info, value_counts</td></tr>
                        <tr><td><strong>3. 加工</strong></td><td>欠損値・異常値処理</td><td>dropna, fillna, clip</td></tr>
                        <tr><td><strong>4. 変換</strong></td><td>特徴量エンジニアリング</td><td>apply, map, groupby</td></tr>
                        <tr><td><strong>5. 集計</strong></td><td>統計量の算出</td><td>agg, pivot_table, resample</td></tr>
                        <tr><td><strong>6. 共有</strong></td><td>結果の出力</td><td>to_csv, to_excel, to_html</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 データ分析の心得</div>
                    <p>・<strong>「ゴミを入れればゴミが出る」</strong>（GIGO）— データ品質が全ての基盤</p>
                    <p>・<strong>可視化してから分析</strong>— まずグラフで外観を確認</p>
                    <p>・<strong>再現性</strong>を意識 — コードで手順を残す</p>
                    <p>・<strong>ドメイン知識</strong>と組み合わせる — 数字だけでなく業務理解も重要</p>
                </div>
            </div>
            <div id="day72-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day72-quiz', 'day72-quiz', [
            { question: 'Pandasでデータの基本統計量を確認するメソッドはどれですか？', options: ['info()', 'head()', 'describe()', 'shape'], correct: 2, explanation: 'describe()メソッドは各列の平均、標準偏差、最小値、最大値、四分位数などを一覧表示します。' },
            { question: 'pct_change()メソッドは何を計算しますか？', options: ['絶対変化量', '前の値に対する変化率', '累積和', '移動平均'], correct: 1, explanation: 'pct_change()は前の行との変化率（パーセンテージ変化）を計算するメソッドです。' },
            { question: 'GIGOとは何の略ですか？', options: ['Get In, Get Out', 'Garbage In, Garbage Out', 'Good Input, Good Output', 'Global Information, Global Output'], correct: 1, explanation: 'GIGO（Garbage In, Garbage Out）は、低品質なデータを入力すれば低品質な結果しか得られないという原則です。' },
            { question: '日次リターンのボラティリティを年率換算するために掛ける係数は？', options: ['√12', '√52', '√252', '√365'], correct: 2, explanation: '日次ボラティリティに√252（年間取引日数の平方根）を掛けることで年率換算します。' },
            { question: 'Pandasのresampleメソッドの用途はどれですか？', options: ['データの並び替え', '時系列データの頻度変換', '欠損値の補間', 'データ型の変換'], correct: 1, explanation: 'resampleは時系列データの頻度を変換（日次→月次→年次など）するためのメソッドです。' }
        ]);
    }
};
