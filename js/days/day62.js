// ===========================
// Day 62: 芸術・建築・デザインの潮流
// ===========================
window.Day62 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎨 西洋美術の大きな流れ</h2>
                <p>美術や建築の知識は<strong>教養の象徴</strong>であり、国際的なビジネスシーンでの会話の幅を広げます。
                また、デザイン思考はビジネスにも直接活かせます。</p>
                <table class="styled-table">
                    <thead><tr><th>時代/様式</th><th>年代</th><th>代表者</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ルネサンス</strong></td><td>14-16世紀</td><td>ダヴィンチ、ミケランジェロ</td><td>人間中心主義、写実的表現</td></tr>
                        <tr><td><strong>バロック</strong></td><td>17世紀</td><td>カラヴァッジオ、ベルニーニ</td><td>劇的表現、光と影</td></tr>
                        <tr><td><strong>印象派</strong></td><td>19世紀後半</td><td>モネ、ルノワール</td><td>光の表現、屋外制作</td></tr>
                        <tr><td><strong>キュビスム</strong></td><td>20世紀初頭</td><td>ピカソ、ブラック</td><td>多視点の同時表現</td></tr>
                        <tr><td><strong>抽象表現主義</strong></td><td>20世紀半ば</td><td>ポロック、ロスコ</td><td>感情の直接的表現</td></tr>
                        <tr><td><strong>ポップアート</strong></td><td>1960年代</td><td>ウォーホル、リキテンスタイン</td><td>大衆文化の芸術化</td></tr>
                        <tr><td><strong>現代アート</strong></td><td>現在</td><td>バンクシー、草間彌生</td><td>概念重視、社会的メッセージ</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🏗️ 建築の歴史とデザイン</h2>
                <table class="styled-table">
                    <thead><tr><th>様式</th><th>特徴</th><th>代表例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ゴシック</strong></td><td>尖頭アーチ、大聖堂</td><td>パリのノートルダム大聖堂</td></tr>
                        <tr><td><strong>バウハウス</strong></td><td>「形態は機能に従う」</td><td>グロピウス設計の校舎</td></tr>
                        <tr><td><strong>モダニズム</strong></td><td>装飾の排除、合理性</td><td>ル・コルビュジエの建築</td></tr>
                        <tr><td><strong>ポストモダン</strong></td><td>遊戯性、歴史的引用</td><td>フィリップ・ジョンソン AT&Tビル</td></tr>
                        <tr><td><strong>現代建築</strong></td><td>サステナビリティ、テクノロジー</td><td>安藤忠雄（コンクリート）、隈研吾（木材）</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💡 デザイン思考とビジネス</h2>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>内容</th><th>ビジネスでの活用</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. 共感</strong></td><td>ユーザーの声を聴く</td><td>顧客ヒアリング、ペルソナ設計</td></tr>
                        <tr><td><strong>2. 問題定義</strong></td><td>真の課題を見つける</td><td>Issue分析、「なぜ？」を5回</td></tr>
                        <tr><td><strong>3. 発想</strong></td><td>多様なアイデアを出す</td><td>ブレインストーミング</td></tr>
                        <tr><td><strong>4. プロトタイプ</strong></td><td>素早く形にする</td><td>MVP、モックアップ</td></tr>
                        <tr><td><strong>5. テスト</strong></td><td>検証と改善</td><td>ユーザーテスト、A/Bテスト</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 なぜ芸術が教養として重要か</div>
                    <p>・<strong>美術館</strong>は国際的なビジネスパーソンの社交場</p>
                    <p>・<strong>デザイン思考</strong>はイノベーションの源泉</p>
                    <p>・<strong>アート投資</strong>は富裕層向け金融の重要分野</p>
                    <p>・<strong>審美眼</strong>はプレゼン資料やUIデザインにも活きる</p>
                </div>
            </div>
            <div id="day62-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day62-quiz', 'day62-quiz', [
            { question: '印象派の特徴はどれですか？', options: ['宗教的テーマ', '光の表現と屋外制作', '幾何学的抽象', '大衆文化の引用'], correct: 1, explanation: '印象派は光の変化を捉えることを重視し、戸外での制作を特徴としました。' },
            { question: 'バウハウスの設計理念はどれですか？', options: ['装飾こそが美', '形態は機能に従う', '自然との調和', '歴史の復元'], correct: 1, explanation: 'バウハウスは「形態は機能に従う（Form follows Function）」を理念とし、近代デザインの基礎を築きました。' },
            { question: 'デザイン思考の最初のステップはどれですか？', options: ['アイデア出し', '共感（ユーザー理解）', 'プロトタイプ', 'テスト'], correct: 1, explanation: 'デザイン思考はまずユーザーに「共感」し、その真のニーズを理解することから始まります。' },
            { question: 'アンディ・ウォーホルが代表するアート様式はどれですか？', options: ['印象派', 'キュビスム', 'ポップアート', '抽象表現主義'], correct: 2, explanation: 'ウォーホルはキャンベル缶やマリリン・モンローの作品で知られるポップアートの代表的アーティストです。' },
            { question: 'ル・コルビュジエはどの建築様式の代表ですか？', options: ['ゴシック', 'バロック', 'モダニズム', 'ポストモダン'], correct: 2, explanation: 'ル・コルビュジエは近代建築の5原則を提唱したモダニズム建築の巨匠です。' }
        ]);
    }
};
