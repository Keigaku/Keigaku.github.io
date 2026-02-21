// ===========================
// Day 30: 経営戦略フレームワーク
// ===========================
window.Day30 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>♟️ 戦略的思考の基盤</h2>
                <p>経営戦略とは、<strong>限られたリソースをどこに集中させて競争優位を築くか</strong>を決めることです。
                経営層を目指すリーダーには、日々のオペレーションを超えた「全体最適」の視点が求められます。</p>

                <h3>VUCA時代の戦略思考</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>意味</th><th>金融SIerへの影響</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Volatility（変動性）</strong></td><td>変化が激しく予測困難</td><td>市場ニーズの急変、技術トレンドの短命化</td></tr>
                        <tr><td><strong>Uncertainty（不確実性）</strong></td><td>過去の経験が通用しない</td><td>規制変更、新たな競合の参入</td></tr>
                        <tr><td><strong>Complexity（複雑性）</strong></td><td>因果関係が読めない</td><td>グローバル規制の相互影響、テクノロジー融合</td></tr>
                        <tr><td><strong>Ambiguity（曖昧性）</strong></td><td>正解が一つではない</td><td>DX戦略の最適解が不明確</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 VUCA時代の戦略アプローチ</div>
                    <p>従来の「分析→計画→実行」モデルから、<strong>「仮説→実験→学習→適応」</strong>のアジャイル戦略へ。
                    完璧な戦略を1年かけて作るよりも、小さく素早く試して学ぶことが重要です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔍 外部環境分析</h2>

                <h3>ポーターの5フォース分析</h3>
                <p>業界の収益構造を理解するフレームワークです。</p>
                <table class="styled-table">
                    <thead>
                        <tr><th>フォース</th><th>内容</th><th>金融SIer業界での具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>業界内の競争</strong></td><td>既存企業間の競争激度</td><td>NRI、野村総研、アクセンチュア等との競合</td></tr>
                        <tr><td><strong>新規参入の脅威</strong></td><td>新規参入の容易さ</td><td>クラウドベンダーの金融サービス参入</td></tr>
                        <tr><td><strong>代替品の脅威</strong></td><td>代替ソリューションの存在</td><td>SaaS、FinTech企業の台頭</td></tr>
                        <tr><td><strong>買い手の交渉力</strong></td><td>顧客の価格交渉力</td><td>メガバンクの強い交渉ポジション</td></tr>
                        <tr><td><strong>売り手の交渉力</strong></td><td>サプライヤーの交渉力</td><td>高度人材の獲得競争、ベンダーライセンス</td></tr>
                    </tbody>
                </table>

                <h3>PEST分析</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>分析対象</th><th>金融SIerへの示唆</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Political（政治）</strong></td><td>規制、政策、国際関係</td><td>金融規制強化、デジタル円構想</td></tr>
                        <tr><td><strong>Economic（経済）</strong></td><td>景気、金利、為替</td><td>金利環境変化によるシステム需要変動</td></tr>
                        <tr><td><strong>Social（社会）</strong></td><td>人口、価値観、労働市場</td><td>人材不足、リモートワーク定着</td></tr>
                        <tr><td><strong>Technological（技術）</strong></td><td>技術革新、デジタル化</td><td>AI、クラウド、量子コンピュータ</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📋 戦略策定フレームワーク</h2>

                <h3>SWOT分析 → クロスSWOT</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th></th><th>機会（O）</th><th>脅威（T）</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>強み（S）</strong></td><td>✅ <strong>SO戦略</strong>：強みで機会を最大活用<br>（例：クオンツ力でAI金融参入）</td><td>⚡ <strong>ST戦略</strong>：強みで脅威に対抗<br>（例：深い業務知識でSaaS差別化）</td></tr>
                        <tr><td><strong>弱み（W）</strong></td><td>🔄 <strong>WO戦略</strong>：弱みを克服して機会獲得<br>（例：クラウド人材を育成してDX参入）</td><td>🛡️ <strong>WT戦略</strong>：弱みと脅威を最小化<br>（例：ニッチ領域に集中特化）</td></tr>
                    </tbody>
                </table>

                <h3>ブルーオーシャン戦略</h3>
                <div class="info-box info">
                    <div class="info-box-title">📘 レッドオーシャン → ブルーオーシャン</div>
                    <p><strong>レッドオーシャン</strong>：既存市場で血みどろの競争（価格競争、コモディティ化）</p>
                    <p><strong>ブルーオーシャン</strong>：新たな価値を創造し、競争のない市場空間を開拓</p>
                    <p>戦略キャンバス：業界の競争要因を可視化し、「取り除く・減らす・増やす・創造する」の4つのアクションで差別化</p>
                </div>

                <h3>アンゾフの成長マトリクス</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th></th><th>既存製品</th><th>新規製品</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>既存市場</strong></td><td>市場浸透（シェア拡大）</td><td>製品開発（新サービス投入）</td></tr>
                        <tr><td><strong>新規市場</strong></td><td>市場開拓（海外・異業種進出）</td><td>多角化（新領域チャレンジ）</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🎯 戦略実行のフレームワーク</h2>

                <h3>バランスト・スコアカード（BSC）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>視点</th><th>問い</th><th>KPI例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>財務</strong></td><td>株主にどう映るか</td><td>売上高、利益率、ROE</td></tr>
                        <tr><td><strong>顧客</strong></td><td>顧客にどう映るか</td><td>顧客満足度、リピート率</td></tr>
                        <tr><td><strong>業務プロセス</strong></td><td>どの業務で卓越すべきか</td><td>品質指標、プロジェクト成功率</td></tr>
                        <tr><td><strong>学習と成長</strong></td><td>どう変革・改善し続けるか</td><td>社員満足度、研修時間、離職率</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 戦略を語れるリーダーになるために</div>
                    <p>・フレームワークは<strong>「思考の道具」</strong>であり「答え」ではない</p>
                    <p>・複数のフレームワークを<strong>組み合わせて</strong>多角的に分析する</p>
                    <p>・<strong>自社と自部門の戦略</strong>を、これらのフレームワークで説明できるよう練習する</p>
                    <p>・戦略の良し悪しは<strong>実行されてこそ</strong>判断できる — Action first!</p>
                </div>
            </div>

            <div id="day30-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day30-quiz', 'day30-quiz', [
            {
                question: 'VUCAの「A（Ambiguity）」が意味するものはどれですか？',
                options: ['変動性が高い', '不確実性が高い', '複雑性が高い', '正解が一つではなく曖昧'],
                correct: 3,
                explanation: 'Ambiguity（曖昧性）は、物事の因果関係が不明確で、正解が一つに定まらない状態を指します。'
            },
            {
                question: 'ポーターの5フォースで「代替品の脅威」に該当する金融SIerの例はどれですか？',
                options: ['既存の大手SIerとの競争', 'SaaS・FinTech企業の台頭', 'メガバンクの交渉力', '高度人材の獲得競争'],
                correct: 1,
                explanation: 'SaaSやFinTech企業は従来のSIer提供サービスの「代替品」として機能し、業界の収益性に影響を与えます。'
            },
            {
                question: 'クロスSWOTの「SO戦略」とは何ですか？',
                options: ['弱みを克服して機会を獲得する', '強みで機会を最大限に活用する', '強みで脅威に対抗する', '弱みと脅威を最小化する'],
                correct: 1,
                explanation: 'SO戦略は、自社の強み（Strength）を活用して外部環境の機会（Opportunity）を最大限に取り込む戦略です。'
            },
            {
                question: 'バランスト・スコアカードの4つの視点に含まれないものはどれですか？',
                options: ['財務', '顧客', '学習と成長', '技術革新'],
                correct: 3,
                explanation: 'BSCの4つの視点は「財務」「顧客」「業務プロセス」「学習と成長」です。「技術革新」は独立した視点としては含まれません。'
            },
            {
                question: 'ブルーオーシャン戦略の本質はどれですか？',
                options: ['既存市場で価格競争に勝つ', '新たな価値を創造し競争のない市場空間を開拓する', '全ての競合を淘汰する', '海外市場に進出する'],
                correct: 1,
                explanation: 'ブルーオーシャン戦略は既存の競争ルールで戦うのではなく、新たな価値を創造して競争のない新市場を切り拓く戦略です。'
            }
        ]);
    }
};
