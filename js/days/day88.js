// ===========================
// Day 88: プレゼンテーション技術
// ===========================
window.Day88 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎤 プレゼンの3つの柱</h2>
                <table class="styled-table">
                    <thead><tr><th>柱</th><th>内容</th><th>効果</th><th>例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ロゴス（論理）</strong></td><td>データと根拠</td><td>信頼性</td><td>数字、グラフ、事実</td></tr>
                        <tr><td><strong>パトス（感情）</strong></td><td>共感と物語</td><td>動機付け</td><td>ストーリー、ビジョン</td></tr>
                        <tr><td><strong>エトス（信頼）</strong></td><td>話者の権威と誠実さ</td><td>受容</td><td>実績、専門性、態度</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📑 スライドデザインの原則</h2>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>内容</th><th>悪い例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ワンメッセージ</strong></td><td>1スライドに1つのメッセージ</td><td>情報詰め込みスライド</td></tr>
                        <tr><td><strong>ビジュアル優先</strong></td><td>テキストよりグラフ・図</td><td>文章だらけのスライド</td></tr>
                        <tr><td><strong>フォントサイズ</strong></td><td>最小24pt（大きい部屋は30pt）</td><td>12ptの小さすぎる文字</td></tr>
                        <tr><td><strong>色は3色以内</strong></td><td>基本色 + アクセント1-2色</td><td>カラフルすぎるデザイン</td></tr>
                        <tr><td><strong>余白を活用</strong></td><td>詰め込まず呼吸のあるデザイン</td><td>隙間なくびっしり</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔧 プレゼン実践テクニック</h2>
                <table class="styled-table">
                    <thead><tr><th>場面</th><th>テクニック</th><th>ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>冒頭</strong></td><td>フック（問いかけ、驚きのデータ）</td><td>最初の30秒で引き込む</td></tr>
                        <tr><td><strong>本体</strong></td><td>「3つの理由」構造</td><td>人は3つまで記憶できる</td></tr>
                        <tr><td><strong>Q&A</strong></td><td>「良い質問ですね」を避ける</td><td>質問を言い換えて確認</td></tr>
                        <tr><td><strong>結び</strong></td><td>明確なCall to Action</td><td>次に何をすべきか具体的に</td></tr>
                        <tr><td><strong>緊張対策</strong></td><td>十分な練習 + 最初の2分を暗記</td><td>練習は本番の3倍の時間</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 SIerでのプレゼン場面</div>
                    <p>・<strong>提案プレゼン</strong>：顧客への提案（勝率に直結）</p>
                    <p>・<strong>ステアリングコミッティ</strong>：経営層への進捗報告</p>
                    <p>・<strong>技術レビュー</strong>：設計方針の承認</p>
                    <p>・<strong>見積もり説明</strong>：費用の妥当性を論理的に説明</p>
                </div>
            </div>
            <div id="day88-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day88-quiz', 'day88-quiz', [
            { question: 'ロゴス・パトス・エトスの中で「データに基づく論理」はどれですか？', options: ['パトス', 'エトス', 'ロゴス', 'カオス'], correct: 2, explanation: 'ロゴス（logos）は論理的根拠やデータに基づく説得手法で、アリストテレスの修辞学に由来します。' },
            { question: '1スライドに含めるべきメッセージの数はいくつですか？', options: ['3つ', '5つ', '1つ', '制限なし'], correct: 2, explanation: 'ワンメッセージの原則：1スライドに1つの明確なメッセージに絞ることで理解度が向上します。' },
            { question: 'プレゼンの冒頭で最も重要なことはどれですか？', options: ['自己紹介を長く行う', '最初の30秒で聴衆を引き込む', '全体の概要を読み上げる', '資料を配布する'], correct: 1, explanation: '冒頭のフック（問いかけ、驚きのデータなど）で聴衆の注意を引くことがプレゼン成功の鍵です。' },
            { question: 'プレゼンで人が記憶しやすいポイントの数はいくつですか？', options: ['1つ', '3つ', '7つ', '10つ'], correct: 1, explanation: '「マジカルナンバー3」の法則で、人は3つの項目を記憶しやすいため、主要メッセージは3つに絞ります。' },
            { question: 'スライドデザインで推奨される色数はどれですか？', options: ['1色', '3色以内', '5色以上', '色は使わない'], correct: 1, explanation: '基本色＋アクセント1-2色の合計3色以内に抑えることで、統一感のある読みやすいスライドになります。' }
        ]);
    }
};
