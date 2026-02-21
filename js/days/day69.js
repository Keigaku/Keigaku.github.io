// ===========================
// Day 69: 名著・名言から学ぶ知恵
// ===========================
window.Day69 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📚 ビジネスパーソン必読の古典</h2>
                <p>時代を超えて読み継がれる名著には<strong>普遍的な知恵</strong>が詰まっています。
                ここでは、金融・ビジネスに特に役立つ名著を厳選して紹介します。</p>
                <table class="styled-table">
                    <thead><tr><th>著作</th><th>著者</th><th>核心メッセージ</th><th>ビジネスへの教訓</th></tr></thead>
                    <tbody>
                        <tr><td><strong>孫子の兵法</strong></td><td>孫武</td><td>「彼を知り己を知れば百戦殆うからず」</td><td>情報の重要性、戦略的思考</td></tr>
                        <tr><td><strong>君主論</strong></td><td>マキャベリ</td><td>「愛されるより恐れられるべき」</td><td>権力とリーダーシップの現実論</td></tr>
                        <tr><td><strong>国富論</strong></td><td>アダム・スミス</td><td>「見えざる手」による市場の自己調整</td><td>自由市場経済の基礎</td></tr>
                        <tr><td><strong>資本論</strong></td><td>マルクス</td><td>資本主義の内在的矛盾</td><td>格差の問題、社会的責任</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>💼 現代のビジネス名著</h2>
                <table class="styled-table">
                    <thead><tr><th>著作</th><th>著者</th><th>核心メッセージ</th></tr></thead>
                    <tbody>
                        <tr><td><strong>経営者の条件</strong></td><td>ドラッカー</td><td>成果を上げるために時間を管理し、重要なことに集中する</td></tr>
                        <tr><td><strong>7つの習慣</strong></td><td>コヴィー</td><td>主体性、目的志向、Win-Winの原則</td></tr>
                        <tr><td><strong>イノベーションのジレンマ</strong></td><td>クリステンセン</td><td>優良企業が破壊的イノベーションに負ける構造</td></tr>
                        <tr><td><strong>FACTFULNESS</strong></td><td>ロスリング</td><td>データに基づいた正しい世界観の構築</td></tr>
                        <tr><td><strong>サピエンス全史</strong></td><td>ハラリ</td><td>人類の成功は「虚構（フィクション）」を信じる能力にある</td></tr>
                        <tr><td><strong>思考、速いと遅い</strong></td><td>カーネマン</td><td>人間の意思決定はバイアスだらけ（Day 68で詳細）</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💎 名言から学ぶ</h2>
                <table class="styled-table">
                    <thead><tr><th>名言</th><th>発言者</th><th>教訓</th></tr></thead>
                    <tbody>
                        <tr><td><em>「他人が貪欲なときに恐れ、他人が恐れるときに貪欲であれ」</em></td><td>ウォーレン・バフェット</td><td>逆張りの投資哲学</td></tr>
                        <tr><td><em>「過去の実績は将来の結果を保証しない」</em></td><td>投資の格言</td><td>データの限界の認識</td></tr>
                        <tr><td><em>「計画のないビジョンはただの夢、ビジョンのない計画はただの作業」</em></td><td>日本のことわざ</td><td>ビジョンと実行力の両立</td></tr>
                        <tr><td><em>「変化しないことが最大のリスクである」</em></td><td>ラリー・エリソン</td><td>変化への適応力</td></tr>
                        <tr><td><em>「私は失敗したのではない。うまくいかない方法を1万通り見つけたのだ」</em></td><td>エジソン</td><td>失敗からの学び</td></tr>
                        <tr><td><em>「知識に投資することは、常に最良の利回りをもたらす」</em></td><td>ベンジャミン・フランクリン</td><td>学び続けることの価値</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 読書のすすめ</div>
                    <p>・<strong>年間12冊</strong>（月1冊）を目標に — まず量から始める</p>
                    <p>・<strong>アウトプット</strong>もセットで — 読書メモ、SNS投稿</p>
                    <p>・<strong>古典と新刊</strong>をバランスよく — 不変の原則と最新情報</p>
                    <p>・<strong>ジャンルを横断</strong>して — T型人材への第一歩</p>
                </div>
            </div>
            <div id="day69-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day69-quiz', 'day69-quiz', [
            { question: '「彼を知り己を知れば百戦殆うからず」は誰の言葉ですか？', options: ['マキャベリ', '孫武（孫子）', 'ドラッカー', 'クラウゼヴィッツ'], correct: 1, explanation: '孫子は紀元前500年頃の中国の兵法家で、情報の重要性を説いたこの言葉は現代のビジネス戦略にも通じます。' },
            { question: '「イノベーションのジレンマ」の主張はどれですか？', options: ['イノベーションは常に成功する', '優良企業は破壊的イノベーションに適応しにくい', 'イノベーションは大企業が独占する', '技術革新は不要'], correct: 1, explanation: 'クリステンセンは、既存顧客に過度に適応した優良企業が破壊的イノベーションに負ける構造を示しました。' },
            { question: 'サピエンス全史で人類の成功の鍵とされるものはどれですか？', options: ['身体能力', '虚構（フィクション）を信じる能力', '農業技術', '金属加工'], correct: 1, explanation: 'ハラリは、人間が国家・宗教・貨幣などの虚構を集団で信じる能力が大規模な協力を可能にしたと主張しています。' },
            { question: 'ウォーレン・バフェットの投資哲学を表す名言はどれですか？', options: ['常に市場に従え', '他人が恐れるときに貪欲であれ', '短期で利益を出せ', 'レバレッジを最大化せよ'], correct: 1, explanation: 'バフェットは市場のパニック時こそ投資のチャンスであり、過熱時には慎重であるべきと説いています。' },
            { question: 'ドラッカーが最も重視した経営資源はどれですか？', options: ['資金', '設備', '時間', '原材料'], correct: 2, explanation: 'ドラッカーは「時間は最も希少な資源」であり、時間管理こそが成果を上げる第一歩だと主張しました。' }
        ]);
    }
};
