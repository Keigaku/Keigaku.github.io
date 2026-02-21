// ===========================
// Day 56: 日本経済史 — 戦後復興から令和
// ===========================
window.Day56 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🇯🇵 戦後日本経済の軌跡</h2>
                <p>日本経済の歴史は<strong>奇跡的な成長とその挫折</strong>の物語です。
                金融SIerとして、日本の金融制度がなぜ現在の形になったかを知ることは必須です。</p>
                <table class="styled-table">
                    <thead><tr><th>時期</th><th>キーワード</th><th>経済状況</th><th>金融への影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1945-55</strong></td><td>戦後復興</td><td>ドッジライン、1ドル=360円</td><td>護送船団方式の確立</td></tr>
                        <tr><td><strong>1955-73</strong></td><td>高度経済成長</td><td>年平均10%成長、所得倍増</td><td>メインバンク制の発展</td></tr>
                        <tr><td><strong>1973-85</strong></td><td>安定成長</td><td>石油ショック、省エネ革命</td><td>輸出大国としての地位確立</td></tr>
                        <tr><td><strong>1985-90</strong></td><td>バブル経済</td><td>プラザ合意、株価・地価高騰</td><td>過剰融資、土地神話</td></tr>
                        <tr><td><strong>1990-2000</strong></td><td>バブル崩壊</td><td>株価暴落、不良債権問題</td><td>金融機関の破綻、Big Bang改革</td></tr>
                        <tr><td><strong>2000-12</strong></td><td>デフレの時代</td><td>ゼロ金利、量的緩和</td><td>メガバンク再編、ゆうちょ民営化</td></tr>
                        <tr><td><strong>2013-20</strong></td><td>アベノミクス</td><td>異次元緩和、3本の矢</td><td>マイナス金利、YCC導入</td></tr>
                        <tr><td><strong>2020-現在</strong></td><td>コロナ後・令和</td><td>インフレ回帰、賃上げ</td><td>金利正常化への模索</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>💥 バブル経済の教訓</h2>
                <table class="styled-table">
                    <thead><tr><th>要因</th><th>内容</th><th>教訓</th></tr></thead>
                    <tbody>
                        <tr><td><strong>プラザ合意（1985）</strong></td><td>ドル安誘導 → 急激な円高</td><td>為替政策の副作用</td></tr>
                        <tr><td><strong>金融緩和</strong></td><td>円高対策で低金利</td><td>緩和の長期化がバブルを生む</td></tr>
                        <tr><td><strong>土地神話</strong></td><td>「地価は下がらない」という信仰</td><td>どんな資産も下がり得る</td></tr>
                        <tr><td><strong>不良債権問題</strong></td><td>10年以上かけて処理</td><td>問題の先送りは傷を深くする</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 アベノミクス「3本の矢」</div>
                    <p>・<strong>第1の矢</strong>：大胆な金融政策（異次元緩和）</p>
                    <p>・<strong>第2の矢</strong>：機動的な財政政策</p>
                    <p>・<strong>第3の矢</strong>：民間投資を喚起する成長戦略</p>
                    <p>→ 第1の矢は株高・円安に成功、第3の矢は道半ばと評価</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔮 令和の日本経済の課題</h2>
                <table class="styled-table">
                    <thead><tr><th>課題</th><th>現状</th><th>金融SIerへの影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>少子高齢化</strong></td><td>人口減少が加速</td><td>年金・保険システムの改革需要</td></tr>
                        <tr><td><strong>生産性向上</strong></td><td>G7最低レベル</td><td>DX推進、自動化需要</td></tr>
                        <tr><td><strong>財政赤字</strong></td><td>GDP比250%超の国債</td><td>国債管理システムの重要性</td></tr>
                        <tr><td><strong>金利正常化</strong></td><td>長年のゼロ金利からの脱却</td><td>金利リスク管理システムの再構築</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 知っておくべき日本の金融用語</div>
                    <p>・<strong>護送船団方式</strong>：最も弱い銀行に合わせた規制運営</p>
                    <p>・<strong>メインバンク制</strong>：銀行と企業の密接な長期関係</p>
                    <p>・<strong>YCC</strong>：イールドカーブ・コントロール（長短金利操作）</p>
                    <p>・<strong>NISA</strong>：少額投資非課税制度（「貯蓄から投資へ」政策）</p>
                </div>
            </div>
            <div id="day56-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day56-quiz', 'day56-quiz', [
            { question: 'プラザ合意（1985年）の目的はどれですか？', options: ['日本経済の成長促進', 'ドル高の是正', '石油価格の安定', 'EU統合の推進'], correct: 1, explanation: 'プラザ合意は米国の貿易赤字を是正するため、先進5カ国がドル安に誘導した合意です。' },
            { question: '日本のバブル経済のピークは何年頃ですか？', options: ['1985年', '1989-1990年', '1995年', '2000年'], correct: 1, explanation: '日経平均は1989年12月に38,957円の史上最高値を記録し、その後1990年から崩壊が始まりました。' },
            { question: '「護送船団方式」とはどのような規制手法ですか？', options: ['最も強い銀行に合わせた規制', '最も弱い銀行に合わせた規制', '外国銀行の排除', '競争促進'], correct: 1, explanation: '護送船団方式は最も体力のない金融機関でも存続できるよう、業界全体を守る規制運営方式でした。' },
            { question: 'YCCとは何ですか？', options: ['有価証券の税制', 'イールドカーブ・コントロール', '外国為替制度', '年金制度'], correct: 1, explanation: 'YCC（イールドカーブ・コントロール）は日銀が長短金利を操作する政策枠組みです。' },
            { question: '日本のGDP比の国債残高は約何%ですか？', options: ['100%', '150%', '250%超', '50%'], correct: 2, explanation: '日本の国債残高はGDP比で250%を超え、先進国最大の比率となっています。' }
        ]);
    }
};
