// ===========================
// Day 137: OTCデリバティブの基礎
// ===========================
window.Day137 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📜 OTCデリバティブの世界</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「取引所」vs「OTC」— 2つの市場</div>
                    <p>デリバティブ（金融派生商品）の取引には2つの市場が存在します。Be-DFSが扱うのはOTC市場の商品です。</p>
                </div>

                <table class="styled-table text-sm">
                    <thead><tr><th></th><th>取引所取引 (Exchange)</th><th>OTC取引 (相対取引)</th></tr></thead>
                    <tbody>
                        <tr><td><strong>商品</strong></td><td>標準化（先物、上場オプション）</td><td><strong>自由設計（IRS, TRS, CDS等）</strong></td></tr>
                        <tr><td><strong>相手方リスク</strong></td><td>取引所（CCP）が保証</td><td>カウンターパーティリスクあり</td></tr>
                        <tr><td><strong>契約</strong></td><td>取引所ルール</td><td><strong>ISDAマスター契約</strong></td></tr>
                        <tr><td><strong>決済</strong></td><td>日次値洗い（証拠金）</td><td>期中キャッシュフロー交換</td></tr>
                        <tr><td><strong>透明性</strong></td><td>板情報が公開</td><td>基本的に非公開（ダークマーケット）</td></tr>
                    </tbody>
                </table>

                <h3>ISDAマスター契約 — OTCの法的基盤</h3>
                <p><strong>ISDA (International Swaps and Derivatives Association)</strong> が策定した標準契約書です。OTC取引を行う2者は事前にこの契約を締結しており、<strong>個別取引ごとに「Confirmation（確認書）」</strong>を交わして具体的な条件を定めます。</p>
                <ul class="feature-list">
                    <li><strong>マスター契約</strong>：ネッティング条項、デフォルト事由、準拠法など基本ルールを網羅</li>
                    <li><strong>Schedule</strong>：マスター契約の個社カスタマイズ部分</li>
                    <li><strong>CSA（Credit Support Annex）</strong>：担保（マージン）の受渡しルール。評価通貨、閾値(Threshold)、MTA等を規定</li>
                    <li><strong>Confirmation</strong>：個別取引の具体的条件（金額、金利、日付等）</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔄 トレードライフサイクル（取引の一生）</h2>
                <p>Be-DFS開発者は、取引が生まれてから満期を迎えるまでの<strong>全ステージ</strong>を理解する必要があります。各ステージで異なるシステム処理が必要になるためです。</p>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem; margin-bottom: 1.5rem;">
                    <div style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">1️⃣</div>
                        <strong>Pre-Trade</strong><br>
                        <small>価格照会・プライシング・与信枠チェック</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">2️⃣</div>
                        <strong>Execution</strong><br>
                        <small>約定（Trade）・Be-DFSへブッキング</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">3️⃣</div>
                        <strong>Confirmation</strong><br>
                        <small>取引相手との条件照合・確認書交換</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">4️⃣</div>
                        <strong>Clearing</strong><br>
                        <small>CCP清算（義務対象の場合）</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">5️⃣</div>
                        <strong>Settlement</strong><br>
                        <small>期中CF交換・最終決済</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(107,114,128,0.15), rgba(107,114,128,0.05)); padding: 1rem; border-radius: var(--radius-md); text-align:center;">
                        <div style="font-size:1.5rem;">6️⃣</div>
                        <strong>Maturity / Termination</strong><br>
                        <small>満期・早期解約・ノベーション</small>
                    </div>
                </div>

                <h3>ライフサイクルイベント（Be-DFSで管理が必要）</h3>
                <ul class="feature-list">
                    <li><strong>New</strong>：新規取引の登録。トレーダーが画面から入力、または電子PFから自動取込</li>
                    <li><strong>Amend</strong>：条件変更。相手方と合意した変更をシステムに反映（金利変更、日付変更等）</li>
                    <li><strong>Cancel</strong>：取引の取消。誤入力やトレードのキャンセル</li>
                    <li><strong>Novation</strong>：取引の一方を第三者へ移転。3者間で合意が必要</li>
                    <li><strong>Partial Termination</strong>：想定元本の一部解約</li>
                    <li><strong>Unwind / Full Termination</strong>：取引の早期終了。残存価値の清算</li>
                </ul>
            </div>

            <div id="day137-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day137-quiz', 'day137-quiz', [
            { question: 'OTCデリバティブ取引の法的基盤となる標準契約のフレームワークを策定している業界団体はどれですか？', options: ['FCA (Financial Conduct Authority)', 'ISDA (International Swaps and Derivatives Association)', 'SEC (Securities and Exchange Commission)', 'FINRA (Financial Industry Regulatory Authority)'], correct: 1, explanation: 'ISDA（International Swaps and Derivatives Association）がOTCデリバティブ取引の標準マスター契約を策定しています。OTC取引を行う2者は事前にISDAマスター契約を締結し、その上で個別取引ごとにConfirmation（確認書）を交わします。' },
            { question: 'CSA（Credit Support Annex）の主な目的はどれですか？', options: ['取引の会計処理ルールを定める', '担保（マージン）の受渡しルールを定める', '取引の税務処理方法を定める', '取引の報告義務を定める'], correct: 1, explanation: 'CSA（Credit Support Annex）はISDAマスター契約の付属文書で、担保（マージン）の受渡しに関するルールを定めます。評価通貨、担保の種類（現金/有価証券）、閾値（Threshold）、最低移転額（MTA）などが規定されます。' },
            { question: 'トレードライフサイクルにおいて、「Novation（ノベーション）」とはどのような操作ですか？', options: ['取引の全額を一度に決済すること', '取引を新しい条件で更新すること', '取引の一方を第三者へ移転すること', '取引を取引所清算に移行させること'], correct: 2, explanation: 'ノベーションとは、既存のOTC取引において、一方の当事者のポジションを第三者へ移転する操作です。元の契約は消滅し、新しい当事者との間で新たな契約が成立します。3者間での合意が必要なため、Be-DFS上でも3者間のステータス管理が求められます。' },
            { question: 'Be-DFSにおけるトレードステータス「Amend」の説明として正しいものはどれですか？', options: ['新規の取引をシステムに登録すること', '取引を完全にキャンセルすること', '取引相手と合意した条件変更をシステムに反映すること', '取引を満期前に早期終了すること'], correct: 2, explanation: 'Amendは取引の条件変更です。例えば固定金利の変更やスケジュールの修正など、取引相手と合意した変更をBe-DFSに反映します。変更履歴（Audit Trail）を正確に記録することも重要な要件です。' }
        ]);
    }
};
