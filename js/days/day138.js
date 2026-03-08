// ===========================
// Day 138: 金利スワップ(IRS)の仕組み
// ===========================
window.Day138 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💱 金利スワップ (Interest Rate Swap: IRS)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 OTCデリバティブの「Hello World」</div>
                    <p>金利スワップは<strong>OTCデリバティブ市場で最も取引量が多く</strong>、Be-DFSが扱う商品の中核です。<br>
                    2つの当事者が、同一通貨の想定元本に対する<strong>固定金利と変動金利のキャッシュフロー（利息）を交換</strong>する契約です。</p>
                </div>
                
                <h3>IRS の基本構造</h3>
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); text-align:center; margin-bottom:1rem;">
                    <div style="display:flex; align-items:center; justify-content:center; gap:2rem; flex-wrap:wrap;">
                        <div style="padding:1rem; background:rgba(59,130,246,0.1); border-radius:var(--radius-md);">
                            <strong style="color:var(--accent-blue);">固定金利支払者</strong><br>(Fixed Rate Payer)<br>
                            <small>＝変動金利受取者</small>
                        </div>
                        <div style="text-align:center;">
                            <div>→ <strong>固定金利（例: 1.5%）</strong> →</div>
                            <div style="margin-top:0.5rem;">← <strong>変動金利（例: TONA+10bp）</strong> ←</div>
                        </div>
                        <div style="padding:1rem; background:rgba(16,185,129,0.1); border-radius:var(--radius-md);">
                            <strong style="color:var(--accent-green);">変動金利支払者</strong><br>(Floating Rate Payer)<br>
                            <small>＝固定金利受取者</small>
                        </div>
                    </div>
                    <p style="margin-top:1rem; font-size:0.9rem;">※想定元本（Notional）自体は交換しない（ネッティング後の差額のみ決済）</p>
                </div>

                <h3>Be-DFSでブッキングする際の必須項目</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>項目</th><th>英語</th><th>具体例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>想定元本</strong></td><td>Notional Amount</td><td>10億円 / 10M USD</td></tr>
                        <tr><td><strong>取引開始日</strong></td><td>Effective Date</td><td>2026-04-01</td></tr>
                        <tr><td><strong>満期日</strong></td><td>Maturity Date</td><td>2031-04-01 (5Y)</td></tr>
                        <tr><td><strong>固定金利</strong></td><td>Fixed Rate</td><td>1.50%</td></tr>
                        <tr><td><strong>変動金利指標</strong></td><td>Floating Index</td><td>TONA（JPY）、SOFR（USD）</td></tr>
                        <tr><td><strong>スプレッド</strong></td><td>Spread</td><td>+10bp (0.10%)</td></tr>
                        <tr><td><strong>支払頻度</strong></td><td>Payment Frequency</td><td>半年ごと / 四半期ごと</td></tr>
                        <tr><td><strong>日数計算方法</strong></td><td>Day Count Convention</td><td>ACT/365, 30/360 など</td></tr>
                        <tr><td><strong>カウンターパーティ</strong></td><td>Counterparty</td><td>XX銀行 東京支店</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📐 Day Count Convention（日数計算方法）</h2>
                <p>利息計算の際、「期間の日数をどう数えるか」の取り決めです。<strong>商品や通貨によって異なる</strong>ため、Be-DFSは複数の方式を正確に実装する必要があります。</p>

                <table class="styled-table text-sm">
                    <thead><tr><th>名称</th><th>分子の数え方</th><th>分母</th><th>主な使用場面</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ACT/365</strong></td><td>実日数</td><td>365</td><td>日本円金利（固定側）</td></tr>
                        <tr><td><strong>ACT/360</strong></td><td>実日数</td><td>360</td><td>USD SOFR, EURIBOR等</td></tr>
                        <tr><td><strong>30/360</strong></td><td>各月30日換算</td><td>360</td><td>一部の債券計算</td></tr>
                        <tr><td><strong>ACT/ACT</strong></td><td>実日数</td><td>うるう年考慮</td><td>米国債、ユーロ圏国債</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🚨 開発者視点：クーポン計算の落とし穴</div>
                    <p>固定レグと変動レグで<strong>Day Count Conventionが異なる</strong>ケースは日常的にあります。<br>
                    例：JPY IRS → 固定側=ACT/365、変動側=ACT/365<br>
                    例：USD IRS → 固定側=30/360、変動側=ACT/360<br>
                    <strong>1bpの計算誤差が数百万円の差を生む</strong>ため、この部分の実装テストは最重要です。</p>
                </div>

                <h3>LIBOR廃止とRFR移行</h3>
                <p>2021-2024年にかけて<strong>LIBOR（ロンドン銀行間金利）が段階的に廃止</strong>され、各通貨でリスクフリーレート（RFR）への移行が行われました。<br>
                Be-DFSは、レガシーのLIBOR取引と新しいRFR取引の<strong>両方を並行して処理</strong>できる必要があります。</p>
                <table class="styled-table text-sm">
                    <thead><tr><th>通貨</th><th>旧指標 (LIBOR系)</th><th>新指標 (RFR)</th></tr></thead>
                    <tbody>
                        <tr><td>JPY</td><td>JPY LIBOR / TIBOR</td><td><strong>TONA</strong> (Tokyo Overnight Average)</td></tr>
                        <tr><td>USD</td><td>USD LIBOR</td><td><strong>SOFR</strong> (Secured Overnight Financing Rate)</td></tr>
                        <tr><td>EUR</td><td>EURIBOR / EONIA</td><td><strong>€STR</strong> (Euro Short-Term Rate)</td></tr>
                        <tr><td>GBP</td><td>GBP LIBOR</td><td><strong>SONIA</strong></td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day138-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day138-quiz', 'day138-quiz', [
            { question: 'Plain Vanilla IRS（最も標準的な金利スワップ）において、2つの当事者が交換するものは何ですか？', options: ['想定元本（Notional Amount）そのもの', '固定金利と変動金利に基づくキャッシュフロー（利息）', '株式のリターン', '異なる通貨の元本'], correct: 1, explanation: '金利スワップでは、同一通貨の想定元本に対して「固定金利に基づく利息」と「変動金利に基づく利息」を交換します。想定元本そのものは交換せず、通常はネッティング（差額計算）した後の差額のみを決済します。' },
            { question: 'JPY（日本円）の金利スワップにおいて、LIBOR廃止後に変動金利の参照指標として使われるリスクフリーレート(RFR)はどれですか？', options: ['SOFR', 'SONIA', 'TONA', '€STR'], correct: 2, explanation: 'TONA（Tokyo Overnight Average Rate：東京オーバーナイト平均金利）が、日本円のリスクフリーレート (RFR) として LIBOR に代わって使用されます。' },
            { question: 'Day Count Convention（日数計算方法）がIRSの開発で特に重要な理由として最も適切なものはどれですか？', options: ['見た目のデザインに影響するため', '同一取引でも固定レグと変動レグで異なる方式が使われることがあり、わずかな誤差が大きな金額差を生むため', 'Day Count Conventionは全商品で統一されているため', 'Day Count Conventionはレポート表示にのみ影響するため'], correct: 1, explanation: '固定レグと変動レグでDay Count Conventionが異なるケースは日常的であり（例：USD IRSの固定側は30/360、変動側はACT/360）、1bpの計算誤差が大きな金額差につながるため、正確な実装とテストが最重要です。' },
            { question: 'IRSをBe-DFSにブッキングする際に「Notional Amount（想定元本）」が必要な理由はどれですか？', options: ['想定元本を相手方と物理的に交換するため', '固定・変動の利息（キャッシュフロー）の計算基準となるため', '会計上の資産として計上するため', '取引所に報告するマージンの計算に使うため'], correct: 1, explanation: '想定元本（Notional）は金利スワップにおけるキャッシュフロー（利息）を計算する基準額です。例えば10億円 × 1.5% × (日数/365) のように使われます。想定元本そのものは交換しません。' }
        ]);
    }
};
