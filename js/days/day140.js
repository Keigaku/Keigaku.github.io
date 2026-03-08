// ===========================
// Day 140: エクイティデリバティブとTRS
// ===========================
window.Day140 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📈 エクイティデリバティブ概要</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 株式（エクイティ）を原資産とするデリバティブ</div>
                    <p>金利スワップが「金利」を対象とするのに対し、エクイティデリバティブは<strong>個別株式や株価指数のリターン</strong>を対象とするOTC商品群です。<br>
                    ヘッジファンドやプライムブローカレッジの主力商品であり、Be-DFSで扱う重要なカテゴリです。</p>
                </div>

                <h3>主なエクイティOTC商品</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>商品</th><th>概要</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Equity Swap</strong></td><td>株式リターンと固定/変動金利を交換</td></tr>
                        <tr><td><strong>TRS (Total Return Swap)</strong></td><td>株式の<strong>トータルリターン</strong>（値上がり＋配当）と金利を交換</td></tr>
                        <tr><td><strong>CFD (Contract for Difference)</strong></td><td>差金決済取引。TRSの簡易版</td></tr>
                        <tr><td><strong>Variance Swap</strong></td><td>実現ボラティリティと固定ストライクの差を交換</td></tr>
                        <tr><td><strong>OTCオプション</strong></td><td>バリアオプション等、カスタマイズされた株式オプション</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔄 TRS (Total Return Swap) — トータル・リターン・スワップ</h2>
                <p>TRSはBe-DFSで扱う<strong>最も重要なエクイティ商品の一つ</strong>です。</p>

                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <h4 style="margin-top:0; color:var(--accent-blue);">TRS の仕組み</h4>
                    <div style="display:flex; align-items:center; justify-content:center; gap:2rem; flex-wrap:wrap; text-align:center;">
                        <div style="padding:1rem; background:rgba(59,130,246,0.1); border-radius:var(--radius-md);">
                            <strong style="color:var(--accent-blue);">リターン受取者</strong><br>(Total Return Receiver)<br>
                            <small>＝経済的に株を「持っている」のと同じ効果</small>
                        </div>
                        <div style="text-align:center;">
                            <div>← <strong>トータルリターン</strong>（値上がり＋配当）←</div>
                            <div style="margin-top:0.5rem;">→ <strong>ファンディングコスト</strong>（SOFR + スプレッド）→</div>
                        </div>
                        <div style="padding:1rem; background:rgba(16,185,129,0.1); border-radius:var(--radius-md);">
                            <strong style="color:var(--accent-green);">リターン支払者</strong><br>(Total Return Payer)<br>
                            <small>＝実際に株を保有している側（通常は銀行）</small>
                        </div>
                    </div>
                </div>

                <h3>TRS の2つのレグ</h3>
                <ul class="feature-list">
                    <li><strong>リターンレグ (Return Leg / Equity Leg)</strong><br>
                    原資産（株式や株価指数）の<strong>トータルリターン</strong>（Price Return + Dividend）を支払う/受け取る。<br>
                    株価が上がれば受取者にプラス、下がれば支払者にプラス。<br>
                    <small style="color:var(--accent-purple);">※「トータル」= 値上がり益 + 配当（分配金）の両方を含む</small></li>
                    <li><strong>ファンディングレグ (Funding Leg / Financing Leg)</strong><br>
                    対価として<strong>変動金利（例: SOFR + 50bp）</strong>を支払う。いわば「株を借りているレンタル料」。<br>
                    <small style="color:var(--accent-purple);">※スプレッドの大きさは信用力やポジションの規模で変動</small></li>
                </ul>

                <h3>なぜTRSを使うのか？</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                    <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-blue);">
                        <strong>レバレッジ効果</strong><br>
                        <small>全額の資金を用意せずに、マージン（担保）だけで株式の経済効果を得られる</small>
                    </div>
                    <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-green);">
                        <strong>規制・税制上の理由</strong><br>
                        <small>直接保有できない市場の株式にアクセスする手段</small>
                    </div>
                    <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-purple);">
                        <strong>バランスシート効率</strong><br>
                        <small>実際に株式を保有しないため、BS上の資産が膨張しない</small>
                    </div>
                </div>

                <div class="info-box important">
                    <div class="info-box-title">🚨 Be-DFS開発でのTRS固有の課題</div>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>リセット（Valuation Date）</strong>：定期的に（日次/週次/月次）リターン部分を清算し、新しい参照価格からリスタート</li>
                        <li><strong>配当処理</strong>：原資産の配当（Dividend）発生時にキャッシュフローを自動生成</li>
                        <li><strong>コーポレートアクション対応</strong>：株式分割・合併・MBO等が発生した場合の自動調整ロジック</li>
                        <li><strong>マージンコール</strong>：日次の時価評価を基に担保の差入/返却を計算</li>
                    </ul>
                </div>
            </div>

            <div id="day140-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day140-quiz', 'day140-quiz', [
            { question: 'TRS (Total Return Swap) の「トータルリターン」には何が含まれますか？', options: ['株価の値上がり益のみ', '配当のみ', '株価の値上がり益（Price Return）と配当（Dividend）の両方', '金利のみ'], correct: 2, explanation: 'TRSの「トータルリターン」には、原資産の値上がり/値下がり（Price Return）に加えて、配当金（Dividend）も含まれます。これが単なるEquity Swapとの違いの一つです。' },
            { question: 'TRSにおいて「ファンディングレグ」を支払う側（リターン受取者）にとって、このコストは何に相当しますか？', options: ['保険料', '株式を借りているレンタル料（資金調達コスト）', '取引所手数料', '税金'], correct: 1, explanation: 'ファンディングレグは、リターン受取者が支払う「資金調達コスト（レンタル料）」です。TRSにより全額の資金を用意せずに株式のリターンを享受できますが、その対価として変動金利（SOFR + スプレッド等）を支払います。' },
            { question: 'TRSのBe-DFS実装において、「リセット（Valuation Date）」で行われる処理はどれですか？', options: ['取引を完全に終了する', '定期的にリターン部分を清算し、新しい参照価格からリスタートする', 'システムを再起動する', 'マスターデータを更新する'], correct: 1, explanation: 'TRSでは定期的な「リセット日」に、その期間の株価変動に基づくリターンを清算（決済）し、新しい参照価格（Reset Price）からリスタートします。この頻度は日次・週次・月次など取引条件により異なります。' },
            { question: 'TRSを利用する主な理由として「レバレッジ効果」があります。これはどういう意味ですか？', options: ['株価の下落リスクを完全に回避できること', '全額の資金を用意せずに、マージン（担保）だけで株式の経済効果（リターン）を得られること', '複数の取引所に同時に注文を出せること', '税金が免除されること'], correct: 1, explanation: 'レバレッジ効果とは、実際に株式を全額購入する資金がなくても、マージン（担保）のみを差し入れることで株式のフルリターンを享受できることを意味します。ただし下落時の損失も同様に拡大するリスクがあります。' }
        ]);
    }
};
