// ===========================
// Day 35: コーポレートガバナンスとコンプライアンス
// ===========================
window.Day35 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚖️ コーポレートガバナンスとは</h2>
                <p>コーポレートガバナンスとは、<strong>企業が健全な経営を行うための仕組み・体制</strong>です。
                株主、顧客、従業員、社会など多様なステークホルダーの利害を調整し、
                企業価値の持続的な向上を実現するための統治構造を指します。</p>

                <h3>コーポレートガバナンス・コードの原則</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>原則</th><th>内容</th><th>経営層の役割</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>株主の権利</strong></td><td>株主の権利を適切に確保する</td><td>情報開示、対話の推進</td></tr>
                        <tr><td><strong>ステークホルダーとの協働</strong></td><td>多様な利害関係者との適切な関係</td><td>ESG課題への取り組み</td></tr>
                        <tr><td><strong>情報開示と透明性</strong></td><td>適切な情報開示と透明性の確保</td><td>非財務情報の積極開示</td></tr>
                        <tr><td><strong>取締役会の責務</strong></td><td>戦略指針の提示と監督</td><td>実効性のある取締役会の運営</td></tr>
                        <tr><td><strong>株主との対話</strong></td><td>建設的な対話を行う</td><td>IR活動、株主総会運営</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📘 日本のガバナンス改革の流れ</div>
                    <p>・2015年：コーポレートガバナンス・コード適用開始</p>
                    <p>・2018年：改訂（政策保有株式の削減、CEO解任手続き等）</p>
                    <p>・2021年：再改訂（取締役会の多様性、サステナビリティ、英文開示）</p>
                    <p>・東証の市場再編（プライム/スタンダード/グロース）でガバナンス要件が厳格化</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🏛️ 内部統制</h2>
                <p>J-SOX法に基づく内部統制は、<strong>財務報告の信頼性を確保するための仕組み</strong>です。</p>

                <h3>内部統制の6つの基本的要素（COSO フレームワーク）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>内容</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>統制環境</strong></td><td>組織全体の倫理観と統制意識</td><td>経営者の姿勢、企業文化</td></tr>
                        <tr><td><strong>リスクの評価と対応</strong></td><td>リスクの特定・分析・対応</td><td>リスクアセスメント、リスクマップ</td></tr>
                        <tr><td><strong>統制活動</strong></td><td>方針・手続きの実施</td><td>職務分掌、承認プロセス</td></tr>
                        <tr><td><strong>情報と伝達</strong></td><td>必要な情報の適時伝達</td><td>報告体制、内部通報制度</td></tr>
                        <tr><td><strong>モニタリング</strong></td><td>統制の有効性を継続的に評価</td><td>内部監査、自己点検</td></tr>
                        <tr><td><strong>ITへの対応</strong></td><td>ITに係る統制</td><td>アクセス管理、変更管理</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🌱 ESG経営</h2>
                <p>ESGは投資家の評価軸として定着し、経営戦略そのものに組み込むべき要素となっています。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>内容</th><th>金融SIerの取り組み</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>E（環境）</strong></td><td>気候変動、カーボンニュートラル</td><td>データセンターの省エネ、Scope 1-3排出管理</td></tr>
                        <tr><td><strong>S（社会）</strong></td><td>人権、労働、多様性</td><td>D&I推進、働き方改革、健康経営</td></tr>
                        <tr><td><strong>G（ガバナンス）</strong></td><td>経営の透明性、監督機能</td><td>社外取締役の活用、コンプライアンス強化</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 TCFD提言と気候関連リスク</div>
                    <p>TCFD（気候関連財務情報開示タスクフォース）に基づく情報開示が求められています：</p>
                    <p>・<strong>ガバナンス</strong>：気候変動に対する取締役会の監督体制</p>
                    <p>・<strong>戦略</strong>：気候関連リスクと機会の事業への影響</p>
                    <p>・<strong>リスク管理</strong>：気候関連リスクの識別・評価・管理プロセス</p>
                    <p>・<strong>指標と目標</strong>：温室効果ガス排出量等の具体的指標</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🔒 金融規制とコンプライアンス</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>規制</th><th>概要</th><th>SIerへの影響</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>バーゼル規制</strong></td><td>銀行の自己資本比率規制</td><td>リスク計算システムの高度化需要</td></tr>
                        <tr><td><strong>FRTB</strong></td><td>マーケットリスクの新規制</td><td>トレーディング勘定の計算ロジック刷新</td></tr>
                        <tr><td><strong>個人情報保護法</strong></td><td>個人データの取扱規制</td><td>データ管理、匿名加工、同意管理</td></tr>
                        <tr><td><strong>GDPR</strong></td><td>EU一般データ保護規則</td><td>グローバル展開時のデータ管理</td></tr>
                        <tr><td><strong>AI規制</strong></td><td>AIの利用に関するガイドライン</td><td>説明可能AI、公平性の確保</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ コンプライアンス違反の代償</div>
                    <p>・<strong>金銭的損失</strong>：巨額の罰金・制裁金（グローバル銀行で数千億円規模の事例も）</p>
                    <p>・<strong>レピュテーションリスク</strong>：信頼の失墜は回復に年単位を要する</p>
                    <p>・<strong>事業継続リスク</strong>：業務停止命令、免許取消</p>
                    <p>経営層の最も重要な責務の一つは<strong>「コンプライアンスのトーン・アット・ザ・トップ」</strong>を示すことです。</p>
                </div>
            </div>

            <div id="day35-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day35-quiz', 'day35-quiz', [
            {
                question: 'コーポレートガバナンス・コードの基本原則に含まれないものはどれですか？',
                options: ['株主の権利の確保', '情報開示と透明性', '利益の最大化', '株主との対話'],
                correct: 2,
                explanation: '「利益の最大化」は基本原則に含まれません。コードは「企業価値の持続的な向上」を重視しています。'
            },
            {
                question: 'COSOフレームワークの6要素で「経営者の姿勢や企業文化」に該当するのはどれですか？',
                options: ['統制活動', '統制環境', 'リスクの評価と対応', 'モニタリング'],
                correct: 1,
                explanation: '統制環境は組織全体の倫理観、経営者の姿勢、企業文化など、内部統制の基盤となる要素です。'
            },
            {
                question: 'ESGの「S（社会）」に該当する取り組みはどれですか？',
                options: ['カーボンニュートラル', 'ダイバーシティ&インクルージョン推進', '社外取締役の増員', '温室効果ガス削減'],
                correct: 1,
                explanation: 'D&I推進、人権尊重、労働環境改善、健康経営などが「S（社会）」の領域に該当します。'
            },
            {
                question: 'TCFDが求める情報開示の4つの柱に含まれないものはどれですか？',
                options: ['ガバナンス', '戦略', '財務業績', 'リスク管理'],
                correct: 2,
                explanation: 'TCFDの4つの柱は「ガバナンス」「戦略」「リスク管理」「指標と目標」です。「財務業績」は含まれません。'
            },
            {
                question: '「トーン・アット・ザ・トップ」とはどのような意味ですか？',
                options: ['経営層の報酬水準', '経営層が率先してコンプライアンスの姿勢を示すこと', '取締役会の議事進行', '株主総会での説明責任'],
                correct: 1,
                explanation: 'トーン・アット・ザ・トップとは、経営陣やトップマネジメントがコンプライアンスや倫理意識の模範を示し、組織全体の姿勢を方向付けることです。'
            }
        ]);
    }
};
