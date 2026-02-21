// ===========================
// Day 55: 国際機関と多国間枠組み
// ===========================
window.Day55 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🤝 主要な国際機関</h2>
                <p>国際社会の秩序は<strong>多国間の枠組み</strong>によって維持されています。
                金融プロフェッショナルとして、これらの機関の役割と影響力を理解することは必須です。</p>
                <table class="styled-table">
                    <thead><tr><th>機関</th><th>設立</th><th>役割</th><th>加盟国</th></tr></thead>
                    <tbody>
                        <tr><td><strong>国連（UN）</strong></td><td>1945年</td><td>国際平和と安全の維持</td><td>193カ国</td></tr>
                        <tr><td><strong>IMF</strong></td><td>1944年</td><td>国際通貨制度の安定、危機対応融資</td><td>190カ国</td></tr>
                        <tr><td><strong>世界銀行</strong></td><td>1944年</td><td>途上国の開発支援融資</td><td>189カ国</td></tr>
                        <tr><td><strong>WTO</strong></td><td>1995年</td><td>国際貿易のルール策定・紛争解決</td><td>164カ国</td></tr>
                        <tr><td><strong>BIS</strong></td><td>1930年</td><td>中央銀行の銀行、バーゼル規制</td><td>63中央銀行</td></tr>
                        <tr><td><strong>OECD</strong></td><td>1961年</td><td>先進国の政策調整、経済分析</td><td>38カ国</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🌐 多国間の枠組み</h2>
                <table class="styled-table">
                    <thead><tr><th>枠組み</th><th>参加</th><th>目的</th><th>金融への影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>G7</strong></td><td>日米英仏独伊加</td><td>先進国の政策協調</td><td>為替介入、制裁協調</td></tr>
                        <tr><td><strong>G20</strong></td><td>先進国＋新興国</td><td>国際経済の安定</td><td>金融規制の国際基準</td></tr>
                        <tr><td><strong>ASEAN</strong></td><td>東南アジア10カ国</td><td>地域の経済統合</td><td>成長市場、投資先</td></tr>
                        <tr><td><strong>EU</strong></td><td>欧州27カ国</td><td>政治・経済統合</td><td>単一市場、ユーロ圏</td></tr>
                        <tr><td><strong>BRICS</strong></td><td>新興5カ国＋拡大</td><td>新興国の連携</td><td>ドル覇権への挑戦</td></tr>
                        <tr><td><strong>RCEP</strong></td><td>アジア太平洋15カ国</td><td>自由貿易推進</td><td>世界最大の自由貿易圏</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💹 IMFと世界銀行の深掘り</h2>
                <table class="styled-table">
                    <thead><tr><th>項目</th><th>IMF</th><th>世界銀行</th></tr></thead>
                    <tbody>
                        <tr><td><strong>目的</strong></td><td>通貨危機の防止・対応</td><td>途上国の開発・貧困削減</td></tr>
                        <tr><td><strong>融資</strong></td><td>短期（国際収支危機対応）</td><td>長期（インフラ・教育等）</td></tr>
                        <tr><td><strong>条件</strong></td><td>構造改革プログラム</td><td>プロジェクト審査</td></tr>
                        <tr><td><strong>モニタリング</strong></td><td>4条協議（年次レビュー）</td><td>開発効果の測定</td></tr>
                        <tr><td><strong>批判</strong></td><td>緊縮要求が社会に悪影響</td><td>先進国主導のアジェンダ</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 実務での活用</div>
                    <p>・<strong>IMFレポート</strong>は各国の経済見通しの信頼できる情報源</p>
                    <p>・<strong>BISの統計</strong>はデリバティブ市場の規模把握に必須</p>
                    <p>・<strong>WTOの紛争事例</strong>は国際貿易リスクの理解に役立つ</p>
                    <p>・<strong>G20声明</strong>は金融規制の方向性を示す</p>
                </div>
            </div>
            <div id="day55-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day55-quiz', 'day55-quiz', [
            { question: 'バーゼル規制を策定する機関はどれですか？', options: ['IMF', 'BIS', 'WTO', '世界銀行'], correct: 1, explanation: 'BIS（国際決済銀行）のバーゼル銀行監督委員会がバーゼル規制を策定しています。' },
            { question: 'IMFと世界銀行の最大の違いはどれですか？', options: ['加盟国数', '所在地', '融資の期間と目的（短期vs長期）', '使用言語'], correct: 2, explanation: 'IMFは短期の通貨危機対応融資、世界銀行は長期の開発支援融資を行う点が最大の違いです。' },
            { question: 'G7に含まれない国はどれですか？', options: ['日本', 'カナダ', '中国', 'フランス'], correct: 2, explanation: 'G7は日米英仏独伊加の7カ国です。中国はG20には参加していますがG7のメンバーではありません。' },
            { question: 'RCEPの特徴はどれですか？', options: ['軍事同盟', '世界最大規模の自由貿易圏', '通貨統合', '国連の下部機関'], correct: 1, explanation: 'RCEP（地域的な包括的経済連携）はアジア太平洋15カ国が参加する世界最大規模の自由貿易圏です。' },
            { question: 'WTOの主な機能はどれですか？', options: ['融資', '国際貿易のルール策定と紛争解決', '通貨管理', '軍事協力'], correct: 1, explanation: 'WTO（世界貿易機関）は自由貿易のルール策定と、加盟国間の貿易紛争の解決を主な機能としています。' }
        ]);
    }
};
