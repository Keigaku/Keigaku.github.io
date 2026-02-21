// ===========================
// Day 81: 会計の基礎
// ===========================
window.Day81 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📒 財務三表</h2>
                <p>会計は<strong>「ビジネスの共通言語」</strong>です。金融SIerとして、
                クライアントの業務を理解するために財務三表の読み方は必須スキルです。</p>
                <table class="styled-table">
                    <thead><tr><th>財務諸表</th><th>別名</th><th>表すもの</th><th>ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>貸借対照表（BS）</strong></td><td>バランスシート</td><td>ある時点の財政状態</td><td>資産＝負債＋純資産</td></tr>
                        <tr><td><strong>損益計算書（PL）</strong></td><td>P&L</td><td>一定期間の経営成績</td><td>売上−費用＝利益</td></tr>
                        <tr><td><strong>キャッシュフロー計算書（CF）</strong></td><td>C/F</td><td>資金の出入り</td><td>営業CF＋投資CF＋財務CF</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 主要な財務指標</h2>
                <table class="styled-table">
                    <thead><tr><th>指標</th><th>計算式</th><th>意味</th><th>目安</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ROE</strong></td><td>当期純利益 / 自己資本</td><td>自己資本の収益性</td><td>8%以上が優良</td></tr>
                        <tr><td><strong>ROA</strong></td><td>当期純利益 / 総資産</td><td>資産の効率性</td><td>5%以上</td></tr>
                        <tr><td><strong>PER</strong></td><td>株価 / EPS</td><td>株価の割安/割高</td><td>15倍が標準</td></tr>
                        <tr><td><strong>PBR</strong></td><td>株価 / BPS</td><td>純資産との比較</td><td>1倍以下は割安</td></tr>
                        <tr><td><strong>自己資本比率</strong></td><td>自己資本 / 総資産</td><td>財務の健全性</td><td>40%以上が安全</td></tr>
                        <tr><td><strong>営業利益率</strong></td><td>営業利益 / 売上</td><td>本業の収益力</td><td>10%以上が優良</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🌐 IFRS vs 日本基準</h2>
                <table class="styled-table">
                    <thead><tr><th>項目</th><th>日本基準</th><th>IFRS</th></tr></thead>
                    <tbody>
                        <tr><td><strong>のれん</strong></td><td>定期償却（20年以内）</td><td>非償却（減損テスト）</td></tr>
                        <tr><td><strong>収益認識</strong></td><td>実現主義</td><td>IFRS15（5ステップ）</td></tr>
                        <tr><td><strong>開発費</strong></td><td>原則費用処理</td><td>条件付き資産計上</td></tr>
                        <tr><td><strong>採用企業</strong></td><td>日本の大多数</td><td>グローバル企業（日本でも増加中）</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 SIerが会計を学ぶ理由</div>
                    <p>・<strong>勘定系システム</strong>：会計処理の自動化を開発する</p>
                    <p>・<strong>要件定義</strong>：クライアントとの共通言語として必要</p>
                    <p>・<strong>規制対応</strong>：IFRS対応システム開発の需要増</p>
                    <p>・<strong>自社の経営理解</strong>：自社の財務状況を読める</p>
                </div>
            </div>
            <div id="day81-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day81-quiz', 'day81-quiz', [
            { question: '「資産＝負債＋純資産」はどの財務諸表の基本等式ですか？', options: ['損益計算書', '貸借対照表', 'キャッシュフロー計算書', '株主資本等変動計算書'], correct: 1, explanation: '貸借対照表（バランスシート）は「資産＝負債＋純資産」の等式で成り立ちます。' },
            { question: 'ROEの分母はどれですか？', options: ['総資産', '売上高', '自己資本', '負債'], correct: 2, explanation: 'ROE（自己資本利益率）= 当期純利益 ÷ 自己資本で、株主から見た収益性を示します。' },
            { question: 'PER 15倍の株とPER 30倍の株、どちらが割安ですか？', options: ['PER 15倍', 'PER 30倍', '同じ', '判断できない'], correct: 0, explanation: 'PERが低いほど1円の利益に対して株価が安い＝割安と判断されます（同業比較が前提）。' },
            { question: 'IFRSでの「のれん」の扱いはどれですか？', options: ['即時費用処理', '定期償却（20年）', '非償却（減損テストのみ）', '存在しない'], correct: 2, explanation: 'IFRSではのれんを償却せず、毎期減損テストを行い価値の低下があった場合のみ減損処理します。' },
            { question: '営業CFがマイナスの企業の状態はどれですか？', options: ['順調に成長中', '本業で資金が流出している', '投資を積極的に行っている', '借入を返済している'], correct: 1, explanation: '営業CFのマイナスは本業からキャッシュを生み出せていない状態で、継続的であれば深刻な問題です。' }
        ]);
    }
};
