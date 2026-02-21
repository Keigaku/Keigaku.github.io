// ===========================
// Day 83: 保険・年金の仕組み
// ===========================
window.Day83 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🛡️ 保険の基本</h2>
                <table class="styled-table">
                    <thead><tr><th>分類</th><th>種類</th><th>特徴</th><th>IT需要</th></tr></thead>
                    <tbody>
                        <tr><td rowspan="3"><strong>生命保険</strong></td><td>定期保険</td><td>一定期間の死亡保障</td><td rowspan="3">契約管理・数理システム</td></tr>
                        <tr><td>終身保険</td><td>一生涯の保障+貯蓄性</td></tr>
                        <tr><td>年金保険</td><td>老後の収入保障</td></tr>
                        <tr><td rowspan="3"><strong>損害保険</strong></td><td>自動車保険</td><td>事故の損害補償</td><td rowspan="3">査定AI・リスク評価</td></tr>
                        <tr><td>火災保険</td><td>建物・家財の保障</td></tr>
                        <tr><td>賠償責任保険</td><td>第三者への損害賠償</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🏛️ 年金制度</h2>
                <table class="styled-table">
                    <thead><tr><th>階層</th><th>制度</th><th>対象</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1階</strong></td><td>国民年金（基礎年金）</td><td>全国民</td><td>月額約6.5万円（満額）</td></tr>
                        <tr><td><strong>2階</strong></td><td>厚生年金</td><td>会社員・公務員</td><td>報酬比例、月額約14万円（平均）</td></tr>
                        <tr><td><strong>3階</strong></td><td>企業年金（DB/DC）</td><td>一部の企業</td><td>確定給付/確定拠出</td></tr>
                        <tr><td><strong>上乗せ</strong></td><td>iDeCo</td><td>自営業・会社員</td><td>個人型確定拠出年金</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💡 インシュアテック</h2>
                <table class="styled-table">
                    <thead><tr><th>技術</th><th>活用</th><th>効果</th></tr></thead>
                    <tbody>
                        <tr><td><strong>AI査定</strong></td><td>画像認識で事故査定を自動化</td><td>査定時間の短縮</td></tr>
                        <tr><td><strong>テレマティクス</strong></td><td>運転データから保険料を個別設定</td><td>安全運転者の保険料低減</td></tr>
                        <tr><td><strong>P2P保険</strong></td><td>グループで保険料を共有</td><td>透明性の向上</td></tr>
                        <tr><td><strong>パラメトリック保険</strong></td><td>事前定義条件で自動支払い</td><td>迅速な保険金支払い</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 アクチュアリーとは</div>
                    <p>・<strong>保険数理の専門家</strong>：確率・統計を用いて保険料や年金を設計</p>
                    <p>・<strong>超難関資格</strong>：合格まで平均10年以上</p>
                    <p>・<strong>需要大</strong>：保険会社、年金基金、コンサルファーム</p>
                    <p>・<strong>平均年収</strong>：1,000万円以上と高水準</p>
                </div>
            </div>
            <div id="day83-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day83-quiz', 'day83-quiz', [
            { question: '日本の年金制度の1階部分はどれですか？', options: ['厚生年金', '国民年金（基礎年金）', '企業年金', 'iDeCo'], correct: 1, explanation: '国民年金（基礎年金）は全国民が加入する1階部分で、20歳から60歳まで保険料を納めます。' },
            { question: '確定拠出年金（DC）の特徴はどれですか？', options: ['給付額が確定している', '掛金額が確定し運用成績で給付が変動', '国が運用する', '保険料が不要'], correct: 1, explanation: 'DC（Defined Contribution）は毎月の掛金が確定し、自身の運用成績により将来の年金額が変動します。' },
            { question: 'テレマティクス保険とは何ですか？', options: ['電話で申し込む保険', '運転データから保険料を個別設定', '団体保険', '自動更新保険'], correct: 1, explanation: 'テレマティクス保険はGPSやセンサーで運転行動を計測し、安全運転者ほど保険料が安くなる仕組みです。' },
            { question: 'パラメトリック保険の特徴はどれですか？', options: ['査定が必要', '事前定義条件で自動支払い', '掛金が高い', 'オンライン専用'], correct: 1, explanation: 'パラメトリック保険は「震度6以上」等の客観的基準を満たすと自動的に保険金が支払われる仕組みです。' },
            { question: 'アクチュアリーの主な仕事はどれですか？', options: ['営業', '確率・統計を用いた保険料設計', 'システム開発', '法務'], correct: 1, explanation: 'アクチュアリーは確率論・統計学を用いて保険料率や年金の設計・評価を行う保険数理の専門家です。' }
        ]);
    }
};
