// ===========================
// Day 70: 教養人としての総合力
// ===========================
window.Day70 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎓 なぜ教養が必要なのか</h2>
                <p>技術力だけでは一流のプロフェッショナルにはなれません。
                <strong>教養（リベラルアーツ）</strong>は、複雑な世界を多角的に理解し、
                本質的な判断を下すための土台です。</p>
                <table class="styled-table">
                    <thead><tr><th>観点</th><th>教養が必要な理由</th><th>具体例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>判断力</strong></td><td>正解のない問題に向き合える</td><td>AI倫理、ESG投資の判断</td></tr>
                        <tr><td><strong>コミュニケーション</strong></td><td>多様な人と会話できる</td><td>クライアントとの信頼構築</td></tr>
                        <tr><td><strong>創造性</strong></td><td>異分野の知識が新しい発想を生む</td><td>イノベーションの源泉</td></tr>
                        <tr><td><strong>変化への適応</strong></td><td>変化の本質を歴史から学べる</td><td>技術革新への対応力</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🔄 T型人材を目指す</h2>
                <p>T型人材とは<strong>深い専門性（|）と幅広い教養（—）</strong>を兼ね備えた人材です。</p>
                <table class="styled-table">
                    <thead><tr><th>型</th><th>特徴</th><th>評価</th></tr></thead>
                    <tbody>
                        <tr><td><strong>I型</strong></td><td>一つの領域だけに深い専門性</td><td>代替されやすい</td></tr>
                        <tr><td><strong>T型</strong></td><td>深い専門性 + 幅広い教養</td><td>現代の理想形</td></tr>
                        <tr><td><strong>Π型</strong></td><td>2つの深い専門性 + 教養</td><td>さらに希少価値が高い</td></tr>
                        <tr><td><strong>H型</strong></td><td>異なる専門家をつなぐ橋渡し</td><td>リーダー・PMに向く</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 Day 51-70で学んだこと</div>
                    <p>・<strong>経済史</strong>（Day 51-52）：市場の歴史的パターン</p>
                    <p>・<strong>国際関係</strong>（Day 53-55）：地政学と国際機関</p>
                    <p>・<strong>日本</strong>（Day 56）：自国の経済史の深い理解</p>
                    <p>・<strong>文化・思想</strong>（Day 57-58）：宗教、哲学、論理的思考</p>
                    <p>・<strong>科学・メディア</strong>（Day 59-60）：科学リテラシー、情報の見方</p>
                    <p>・<strong>法・芸術・技術</strong>（Day 61-63）：法制度、美術、テクノロジー史</p>
                    <p>・<strong>社会課題</strong>（Day 64-67）：マナー、SDGs、人口、平和</p>
                    <p>・<strong>人間理解</strong>（Day 68-69）：行動経済学、名著の知恵</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🚀 教養を磨き続けるための習慣</h2>
                <table class="styled-table">
                    <thead><tr><th>習慣</th><th>方法</th><th>効果</th></tr></thead>
                    <tbody>
                        <tr><td><strong>毎日のニュース</strong></td><td>日経・Bloomberg・BBCの3つ</td><td>多角的な世界観</td></tr>
                        <tr><td><strong>月1冊の読書</strong></td><td>ジャンルを変えて多読</td><td>知識の幅を広げる</td></tr>
                        <tr><td><strong>美術館・博物館</strong></td><td>年4回は訪問</td><td>感性を磨く</td></tr>
                        <tr><td><strong>異分野の勉強会</strong></td><td>社外コミュニティに参加</td><td>視野を広げる</td></tr>
                        <tr><td><strong>旅行</strong></td><td>異文化体験</td><td>固定観念を壊す</td></tr>
                        <tr><td><strong>アウトプット</strong></td><td>ブログ、SNS、社内発表</td><td>知識の定着</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 最後に — 学び続ける力こそ最大の武器</div>
                    <p>・<strong>知的好奇心</strong>を持ち続ける人が成長し続ける</p>
                    <p>・<strong>「知らない」ことを恥じるのではなく「学ぶ」きっかけにする</strong></p>
                    <p>・<strong>教養は一朝一夕では身につかない</strong>、日々の積み重ねが大事</p>
                    <p>・<strong>このカリキュラムは「入口」</strong>— ここからが本当の学びの始まり</p>
                    <p>素晴らしい教養人・金融プロフェッショナルとしての旅を楽しんでください！🎉</p>
                </div>
            </div>
            <div id="day70-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day70-quiz', 'day70-quiz', [
            { question: 'T型人材の特徴はどれですか？', options: ['広い知識だけを持つ', '深い専門性だけを持つ', '深い専門性と幅広い教養を兼ね備える', '複数の専門性のみ持つ'], correct: 2, explanation: 'T型人材は一つの分野の深い専門性（縦棒）と、幅広い教養（横棒）を併せ持つ人材像です。' },
            { question: '教養が判断力に必要な理由はどれですか？', options: ['計算が速くなる', '正解のない問題に多角的に向き合える', '暗記力が上がる', '資格が取れる'], correct: 1, explanation: '現実のビジネスには唯一の正解がない問題が多く、多角的な視点を教養が提供します。' },
            { question: 'Π型人材とは何ですか？', options: ['専門性がない人材', '2つの深い専門性と幅広い教養を持つ人材', '管理専門の人材', 'IT専門の人材'], correct: 1, explanation: 'Π型人材は2つの深い専門分野を持ち、さらに幅広い教養も兼ね備えた希少価値の高い人材です。' },
            { question: '教養を磨くために最も効果的な習慣はどれですか？', options: ['一つのジャンルだけを深く読む', 'ジャンルを変えて多読し、アウトプットする', 'SNSだけをチェックする', '試験のためだけに勉強する'], correct: 1, explanation: '多様なジャンルの読書とアウトプットの組み合わせが、教養を最も効果的に磨く習慣です。' },
            { question: 'このカリキュラム（Day 51-70）を通して最も伝えたいメッセージは？', options: ['全てを暗記すること', '技術スキルだけあれば良い', '学び続ける力こそ最大の武器', '資格をたくさん取ること'], correct: 2, explanation: '知的好奇心を持ち、日々学び続ける姿勢こそが、変化の激しい時代を生き抜く最大の武器です。' }
        ]);
    }
};
