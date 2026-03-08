// ===========================
// Day 139: 通貨スワップ・ベーシススワップ
// ===========================
window.Day139 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🌍 通貨スワップ (Cross Currency Swap: CCS)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 異なる通貨間でキャッシュフローを交換する</div>
                    <p>金利スワップ（IRS）は同一通貨内での交換でしたが、通貨スワップは<strong>異なる通貨</strong>間で元本と利息を交換する契約です。<br>
                    IRSとの最大の違いは<strong>元本の交換が発生する</strong>ことです。</p>
                </div>
                
                <h3>CCS の基本的な仕組み</h3>
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <h4 style="margin-top:0; color:var(--accent-blue);">取引開始時（Initial Exchange）</h4>
                    <p>当事者Aが <strong>10億円</strong> を当事者Bに渡し、当事者Bが <strong>1,000万USD</strong> を当事者Aに渡す（スポットレートで等価）</p>
                    
                    <h4 style="color:var(--accent-green);">期中（Interim Period）</h4>
                    <p>Aは USD の利息（SOFR等）を支払い、BはJPYの利息（TONA等）を支払う</p>
                    
                    <h4 style="color:var(--accent-purple);">満期時（Final Exchange）</h4>
                    <p>開始時と<strong>逆方向に同額の元本を再交換</strong>する（Aが1,000万USDを返却、Bが10億円を返却）</p>
                </div>

                <div class="info-box important">
                    <div class="info-box-title">🚨 開発者視点：IRS との決定的な違い</div>
                    <p>通貨スワップでは<strong>元本交換が発生する</strong>ため、Be-DFSは以下を追加で管理する必要があります。</p>
                    <ul style="margin-top:0.5rem;">
                        <li>開始時・満期時の元本交換のキャッシュフロー生成</li>
                        <li>為替レート（交換レート）の保持</li>
                        <li>2通貨分のディスカウントカーブ</li>
                        <li>為替リスク（FX Delta）の計算</li>
                    </ul>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔀 ベーシススワップ (Basis Swap)</h2>
                <p>ベーシススワップは<strong>変動金利 vs 変動金利</strong>を交換するスワップです。「固定 vs 変動」のIRSと比較すると、<strong>両方のレグが変動</strong>する点が異なります。</p>

                <h3>テナーベーシススワップ</h3>
                <p>同じ通貨で、<strong>異なるテナー（期間）の変動金利</strong>を交換します。</p>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); text-align:center; margin-bottom: 1rem;">
                    <p><strong>3ヶ月 TONA</strong> ⟷ <strong>6ヶ月 TONA + スプレッド</strong></p>
                    <small>参照期間の長さによるリスクプレミアムの差（テナーベーシス）を交換</small>
                </div>

                <h3>クロスカレンシー・ベーシススワップ</h3>
                <p>異なる通貨の変動金利同士を交換します。通貨間の資金需給を反映した「ベーシス」が上乗せされます。</p>
                <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); text-align:center; margin-bottom: 1rem;">
                    <p><strong>3ヶ月 TONA + α bp</strong> ⟷ <strong>3ヶ月 SOFR</strong></p>
                    <small>αが「クロスカレンシーベーシス」— 日本の金融機関のドル調達コストを反映</small>
                </div>

                <h3>Be-DFS における商品トランプカード的な整理</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>商品名</th><th>Leg 1</th><th>Leg 2</th><th>元本交換</th></tr></thead>
                    <tbody>
                        <tr><td><strong>IRS</strong></td><td>固定金利</td><td>変動金利</td><td>なし</td></tr>
                        <tr><td><strong>Basis Swap</strong></td><td>変動金利A</td><td>変動金利B</td><td>なし</td></tr>
                        <tr><td><strong>CCS</strong></td><td>通貨A利息</td><td>通貨B利息</td><td><strong>あり</strong></td></tr>
                        <tr><td><strong>FX Swap</strong></td><td>—</td><td>—</td><td><strong>あり</strong>（短期）</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day139-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day139-quiz', 'day139-quiz', [
            { question: '通貨スワップ（CCS）と金利スワップ（IRS）の最も大きな違いはどれですか？', options: ['CCSは変動金利を使わない', 'CCSでは元本の交換が発生する', 'CCSは取引所でのみ取引される', 'CCSには満期がない'], correct: 1, explanation: '通貨スワップ（CCS）では、取引開始時と満期時に異なる通貨の元本を交換します。これがIRS（同一通貨で元本交換なし）との最大の違いです。Be-DFSではこの元本交換のキャッシュフロー管理と為替リスク計算が追加で必要になります。' },
            { question: 'ベーシススワップの特徴として正しいものはどれですか？', options: ['固定金利と変動金利を交換する', '変動金利と変動金利を交換する', '元本と利息の両方を必ず交換する', '株式のリターンと金利を交換する'], correct: 1, explanation: 'ベーシススワップは「変動金利 vs 変動金利」を交換するスワップです。同じ通貨で異なるテナー（期間）の変動金利を交換するテナーベーシススワップや、異なる通貨の変動金利同士を交換するクロスカレンシー・ベーシススワップがあります。' },
            { question: 'クロスカレンシー・ベーシススワップにおける「ベーシス」は何を反映していますか？', options: ['取引手数料', '通貨間の資金需給の差（ドル調達コスト等）', '取引所の清算手数料', 'インフレ率の差'], correct: 1, explanation: 'クロスカレンシー・ベーシスは、通貨間の資金需給を反映したスプレッドです。例えば日本の金融機関が米ドル資金を調達する際のコストが変動金利に上乗せされます。市場ストレス時にはこのベーシスが拡大し、ドル調達コストが上昇します。' },
            { question: 'Be-DFSにおいて、通貨スワップをIRSと比較して追加で管理する必要があるデータとして、最も重要なものはどれですか？', options: ['トレーダーの氏名', '取引開始時・満期時の元本交換キャッシュフローと為替レート', '会議室の予約情報', 'メールの送信ログ'], correct: 1, explanation: '通貨スワップでは元本交換が発生するため、開始時・満期時の元本交換のキャッシュフロー生成、交換時の為替レートの保持、2通貨分のディスカウントカーブ、そして為替リスク (FX Delta) の計算がBe-DFSに追加で必要になります。' }
        ]);
    }
};
