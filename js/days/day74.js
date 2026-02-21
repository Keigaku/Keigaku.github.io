// ===========================
// Day 74: データ可視化の技法
// ===========================
window.Day74 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📈 グラフの種類と使い分け</h2>
                <table class="styled-table">
                    <thead><tr><th>グラフ</th><th>用途</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>折れ線グラフ</strong></td><td>時系列の推移</td><td>株価チャート、金利推移</td></tr>
                        <tr><td><strong>棒グラフ</strong></td><td>カテゴリ比較</td><td>セクター別リターン</td></tr>
                        <tr><td><strong>ヒストグラム</strong></td><td>分布の確認</td><td>リターン分布（正規分布との比較）</td></tr>
                        <tr><td><strong>散布図</strong></td><td>2変数の関係</td><td>リスク-リターン、相関分析</td></tr>
                        <tr><td><strong>ヒートマップ</strong></td><td>行列データ</td><td>相関行列、セクター連動性</td></tr>
                        <tr><td><strong>箱ひげ図</strong></td><td>分布とばらつき</td><td>月別リターンのばらつき</td></tr>
                        <tr><td><strong>ローソク足</strong></td><td>OHLC（始値・高値・安値・終値）</td><td>株価・為替のテクニカル分析</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🛠️ 可視化ツール比較</h2>
                <table class="styled-table">
                    <thead><tr><th>ツール</th><th>特徴</th><th>最適な場面</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Matplotlib</strong></td><td>Pythonの基盤、高いカスタマイズ性</td><td>論文・レポート向けの精密グラフ</td></tr>
                        <tr><td><strong>Seaborn</strong></td><td>統計的可視化に特化、美しいデフォルト</td><td>探索的データ分析（EDA）</td></tr>
                        <tr><td><strong>Plotly</strong></td><td>インタラクティブ、Webに強い</td><td>ダッシュボード、プレゼン資料</td></tr>
                        <tr><td><strong>Tableau</strong></td><td>ノーコードBI、ドラッグ&ドロップ</td><td>経営層向け可視化</td></tr>
                        <tr><td><strong>Power BI</strong></td><td>Microsoft連携、業務統合</td><td>社内レポーティング</td></tr>
                        <tr><td><strong>Excel</strong></td><td>誰でも使える、簡易分析</td><td>ちょっとした確認、共有</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🎨 データストーリーテリング</h2>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>内容</th><th>悪い例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>メッセージ先行</strong></td><td>伝えたいことを先に決める</td><td>データを全部見せるだけ</td></tr>
                        <tr><td><strong>シンプルに</strong></td><td>不要な情報を削る</td><td>3D円グラフ、装飾過多</td></tr>
                        <tr><td><strong>比較を明確に</strong></td><td>基準線や前年比を示す</td><td>単独の数値だけ提示</td></tr>
                        <tr><td><strong>色使いの意図</strong></td><td>強調したい部分だけ色をつける</td><td>全部カラフル</td></tr>
                        <tr><td><strong>適切なスケール</strong></td><td>ゼロ起点、適切な軸範囲</td><td>軸の切り取りで誤解を誘う</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 可視化の黄金ルール</div>
                    <p>・<strong>「5秒ルール」</strong>：5秒で主要メッセージが伝わるか</p>
                    <p>・<strong>「So What?」</strong>：グラフから何が言えるかを明記</p>
                    <p>・<strong>対象者に合わせる</strong>：経営層にはシンプル、分析者には詳細</p>
                    <p>・<strong>印刷を考慮</strong>：白黒でも区別できるデザイン</p>
                </div>
            </div>
            <div id="day74-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day74-quiz', 'day74-quiz', [
            { question: '相関行列の可視化に最も適したグラフはどれですか？', options: ['折れ線グラフ', '棒グラフ', 'ヒートマップ', '円グラフ'], correct: 2, explanation: 'ヒートマップは色の濃淡で行列データの値を表現でき、相関行列の可視化に最適です。' },
            { question: 'ローソク足チャートが表すデータはどれですか？', options: ['出来高', '始値・高値・安値・終値', '移動平均', 'リターン分布'], correct: 1, explanation: 'ローソク足はOHLC（Open, High, Low, Close）データを視覚的に表現するチャートです。' },
            { question: 'データストーリーテリングで最初にすべきことは？', options: ['データを全て表示する', '3Dグラフを作る', '伝えたいメッセージを決める', '色をたくさん使う'], correct: 2, explanation: 'メッセージ先行の原則：まず伝えたいことを明確にし、それを最も効果的に伝えるグラフを選びます。' },
            { question: 'Plotlyの最大の特徴はどれですか？', options: ['印刷に強い', 'インタラクティブ（操作可能）', '高速処理', 'ノーコード'], correct: 1, explanation: 'Plotlyはズーム、ホバー、フィルタなどのインタラクティブ機能が充実したWeb向け可視化ツールです。' },
            { question: '経営層向けのグラフで避けるべきものはどれですか？', options: ['シンプルな棒グラフ', '明確なメッセージ付きグラフ', '複雑で情報過多なグラフ', 'トレンドライン付き折れ線'], correct: 2, explanation: '経営層には複雑さを排除し、主要メッセージが一目でわかるシンプルなグラフが最適です。' }
        ]);
    }
};
