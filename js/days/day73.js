// ===========================
// Day 73: 機械学習入門
// ===========================
window.Day73 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🤖 機械学習の全体像</h2>
                <table class="styled-table">
                    <thead><tr><th>種類</th><th>説明</th><th>代表的手法</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>教師あり学習</strong></td><td>正解ラベル付きデータで学習</td><td>回帰、分類、SVM、ランダムフォレスト</td><td>信用スコアリング、株価予測</td></tr>
                        <tr><td><strong>教師なし学習</strong></td><td>正解なしでパターンを発見</td><td>クラスタリング、次元削減、異常検知</td><td>顧客セグメンテーション</td></tr>
                        <tr><td><strong>強化学習</strong></td><td>試行錯誤で最適行動を学ぶ</td><td>Q学習、方策勾配法</td><td>最適執行、ポートフォリオ管理</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📈 代表的なアルゴリズム</h2>
                <table class="styled-table">
                    <thead><tr><th>アルゴリズム</th><th>種類</th><th>特徴</th><th>使い所</th></tr></thead>
                    <tbody>
                        <tr><td><strong>線形回帰</strong></td><td>回帰</td><td>シンプル、解釈しやすい</td><td>リターン予測のベースライン</td></tr>
                        <tr><td><strong>ロジスティック回帰</strong></td><td>分類</td><td>確率を出力</td><td>債務不履行の予測</td></tr>
                        <tr><td><strong>決定木</strong></td><td>分類/回帰</td><td>可視化しやすい</td><td>ルールベースの与信判断</td></tr>
                        <tr><td><strong>ランダムフォレスト</strong></td><td>分類/回帰</td><td>高精度、過学習に強い</td><td>不正検知、リスク評価</td></tr>
                        <tr><td><strong>XGBoost</strong></td><td>分類/回帰</td><td>コンペ最強クラス</td><td>信用スコアリング</td></tr>
                        <tr><td><strong>k-means</strong></td><td>クラスタリング</td><td>教師なしの代表格</td><td>顧客分類、市場レジーム判定</td></tr>
                        <tr><td><strong>ニューラルネット</strong></td><td>深層学習</td><td>複雑なパターン学習</td><td>画像認識、自然言語処理</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⚙️ 機械学習のワークフロー</h2>
                <table class="styled-table">
                    <thead><tr><th>手順</th><th>内容</th><th>注意点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. 問題定義</strong></td><td>何を予測するか明確にする</td><td>ビジネス課題との紐付け</td></tr>
                        <tr><td><strong>2. データ収集</strong></td><td>必要なデータを集める</td><td>データの偏り（バイアス）に注意</td></tr>
                        <tr><td><strong>3. 前処理</strong></td><td>欠損値補完、正規化、エンコーディング</td><td>リーク（未来情報の混入）を防ぐ</td></tr>
                        <tr><td><strong>4. 学習・評価</strong></td><td>モデル訓練と交差検証</td><td>過学習を防ぐ（正則化、早期停止）</td></tr>
                        <tr><td><strong>5. デプロイ</strong></td><td>本番環境への実装</td><td>モデルの劣化（ドリフト）を監視</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 金融MLの特有の課題</div>
                    <p>・<strong>ノイズが多い</strong>：市場データはシグナル比が低い</p>
                    <p>・<strong>非定常性</strong>：市場のレジーム（状態）が変化する</p>
                    <p>・<strong>規制</strong>：モデルの説明可能性が求められる</p>
                    <p>・<strong>バックテストの罠</strong>：過去の成績が未来を保証しない</p>
                </div>
            </div>
            <div id="day73-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day73-quiz', 'day73-quiz', [
            { question: '教師あり学習と教師なし学習の違いはどれですか？', options: ['計算速度の違い', '正解ラベルの有無', 'データ量の違い', '使用言語の違い'], correct: 1, explanation: '教師あり学習は正解ラベル付きデータで学習し、教師なし学習は正解なしでデータのパターンを発見します。' },
            { question: '過学習（オーバーフィッティング）とは何ですか？', options: ['モデルが単純すぎる', '訓練データに特化しすぎて汎化性能が低い', 'データが多すぎる', '計算時間が長すぎる'], correct: 1, explanation: '過学習は訓練データに過度に適合し、未知のデータに対する予測精度が低下する現象です。' },
            { question: 'XGBoostの特徴はどれですか？', options: ['教師なし学習', '画像認識に特化', 'テーブルデータで高精度', 'リアルタイム処理に特化'], correct: 2, explanation: 'XGBoostは勾配ブースティングを用いたアルゴリズムで、テーブルデータの予測タスクで非常に高い精度を誇ります。' },
            { question: 'データリークとは何ですか？', options: ['データが漏洩すること', '未来の情報が訓練データに混入すること', 'データが不足すること', 'データが破損すること'], correct: 1, explanation: 'データリークは予測時に利用できない将来の情報が訓練データに混入し、見かけ上高精度なモデルを生むことです。' },
            { question: 'モデルドリフトとは何ですか？', options: ['モデルのバージョン管理', '時間経過でモデルの精度が劣化すること', 'モデルの移植', 'モデルの可視化'], correct: 1, explanation: 'モデルドリフトはデータの分布変化によりデプロイ済みモデルの精度が時間とともに低下する現象です。' }
        ]);
    }
};
