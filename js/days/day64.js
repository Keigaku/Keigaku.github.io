// ===========================
// Day 64: 食文化と国際ビジネスマナー
// ===========================
window.Day64 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🍽️ 各国のビジネスマナー</h2>
                <p>グローバルビジネスでは<strong>マナーの違い一つで商談の成否が分かれる</strong>ことがあります。
                文化的な感受性（Cultural Sensitivity）を持つことは、プロフェッショナルの条件です。</p>
                <table class="styled-table">
                    <thead><tr><th>国</th><th>挨拶</th><th>名刺交換</th><th>時間感覚</th><th>食事のマナー</th></tr></thead>
                    <tbody>
                        <tr><td><strong>🇯🇵 日本</strong></td><td>お辞儀</td><td>両手で丁寧に</td><td>5分前到着</td><td>箸の作法、乾杯</td></tr>
                        <tr><td><strong>🇺🇸 アメリカ</strong></td><td>握手、ファーストネーム</td><td>カジュアル</td><td>時間厳守</td><td>チップ文化（15-20%）</td></tr>
                        <tr><td><strong>🇬🇧 イギリス</strong></td><td>握手、敬称</td><td>控えめ</td><td>時間厳守</td><td>ティータイムの重要性</td></tr>
                        <tr><td><strong>🇨🇳 中国</strong></td><td>握手</td><td>両手、肩書き重視</td><td>やや柔軟</td><td>回転テーブル、乾杯文化</td></tr>
                        <tr><td><strong>🇸🇦 サウジ</strong></td><td>右手の握手</td><td>丁寧に受け取る</td><td>柔軟</td><td>右手で食べる、豚肉・酒禁止</td></tr>
                        <tr><td><strong>🇮🇳 インド</strong></td><td>ナマステ or 握手</td><td>右手で交換</td><td>比較的柔軟</td><td>右手で食べる、菜食者多い</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🚫 食のタブーと配慮</h2>
                <table class="styled-table">
                    <thead><tr><th>宗教/文化</th><th>禁止食材</th><th>その他の制限</th></tr></thead>
                    <tbody>
                        <tr><td><strong>イスラム教</strong></td><td>豚肉、アルコール</td><td>ハラール認証の食品のみ</td></tr>
                        <tr><td><strong>ユダヤ教</strong></td><td>豚肉、エビ等甲殻類</td><td>コーシャ認証、肉と乳製品を分ける</td></tr>
                        <tr><td><strong>ヒンドゥー教</strong></td><td>牛肉（牛は聖獣）</td><td>菜食主義者が多い</td></tr>
                        <tr><td><strong>仏教（厳格）</strong></td><td>肉全般</td><td>精進料理</td></tr>
                        <tr><td><strong>ヴィーガン</strong></td><td>全ての動物性食品</td><td>蜂蜜やゼラチンも不可</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🌐 国際プロトコルの基本</h2>
                <table class="styled-table">
                    <thead><tr><th>場面</th><th>ポイント</th><th>注意事項</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ドレスコード</strong></td><td>相手の文化に合わせる</td><td>中東では肌の露出に注意</td></tr>
                        <tr><td><strong>贈答品</strong></td><td>文化に配慮した品物</td><td>中国：時計は不可（「送終」に通じる）</td></tr>
                        <tr><td><strong>座席順</strong></td><td>上座・下座の概念</td><td>日本と欧米で異なる場合あり</td></tr>
                        <tr><td><strong>宗教行事</strong></td><td>休日を尊重する</td><td>ラマダン、安息日への配慮</td></tr>
                        <tr><td><strong>ボディランゲージ</strong></td><td>ジェスチャーの意味が異なる</td><td>OKサインが侮辱になる国も</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 異文化対応の黄金ルール</div>
                    <p>・<strong>事前調査</strong>：訪問先の文化・宗教・マナーを必ず調べる</p>
                    <p>・<strong>関心を示す</strong>：相手の文化に関心を持つ姿勢が信頼を生む</p>
                    <p>・<strong>失敗を恐れない</strong>：誠意を持って対応すれば許される</p>
                    <p>・<strong>柔軟性</strong>：自分のやり方に固執しない</p>
                </div>
            </div>
            <div id="day64-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day64-quiz', 'day64-quiz', [
            { question: 'イスラム教で禁止されている食材はどれですか？', options: ['牛肉', '鶏肉', '豚肉', '羊肉'], correct: 2, explanation: 'イスラム教では豚肉とアルコールが禁止されており、食品はハラール認証が必要です。' },
            { question: 'ヒンドゥー教で食べることが禁じられている肉はどれですか？', options: ['鶏肉', '豚肉', '牛肉', '魚'], correct: 2, explanation: 'ヒンドゥー教では牛は聖獣とされ、食べることが禁じられています。' },
            { question: 'アメリカのレストランで一般的なチップの割合はどれですか？', options: ['5-10%', '15-20%', '30-40%', 'チップは不要'], correct: 1, explanation: 'アメリカではレストランで食事代の15-20%のチップを渡すのが一般的なマナーです。' },
            { question: '中国で贈答品として避けるべきものはどれですか？', options: ['茶葉', '時計', '書籍', '絹のスカーフ'], correct: 1, explanation: '中国語で「時計を贈る（送钟）」は「葬式に行く（送終）」と同音で縁起が悪いとされます。' },
            { question: '「コーシャ」認証とはどの宗教の食の基準ですか？', options: ['キリスト教', 'イスラム教', 'ユダヤ教', '仏教'], correct: 2, explanation: 'コーシャ（Kosher）はユダヤ教の食事規定に基づく食品認証で、食材や調理方法に厳密なルールがあります。' }
        ]);
    }
};
