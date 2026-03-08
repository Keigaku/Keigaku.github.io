// ===========================
// Day 142: エキゾチック商品とOTCの多様性
// ===========================
window.Day142 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎨 エキゾチックデリバティブ</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 バニラでは満たせない顧客ニーズ</div>
                    <p>標準的な（バニラ）オプションやスワップでは対応できない複雑なリスクヘッジや投資戦略のために、<strong>条件をカスタマイズしたOTC商品</strong>が多数存在します。Be-DFSはこれらの多様な商品に対応できる<strong>柔軟なデータモデルと商品テンプレート機構</strong>が求められます。</p>
                </div>

                <h3>代表的なエキゾチック商品</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>商品名</th><th>特徴</th><th>Be-DFS実装のポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>バリアオプション</strong></td><td>株価がある水準（バリア）に達すると権利が発生（ノックイン）or 消滅（ノックアウト）</td><td>リアルタイムのバリア監視ロジック</td></tr>
                        <tr><td><strong>アジアンオプション</strong></td><td>満期時の一点ではなく、<strong>期間平均価格</strong>で決済</td><td>平均価格の計算・蓄積ロジック</td></tr>
                        <tr><td><strong>ルックバックオプション</strong></td><td>期間中の<strong>最高値/最安値</strong>を参照</td><td>期間中の極値の記録</td></tr>
                        <tr><td><strong>Autocallable</strong></td><td>観察日に原資産が一定水準以上なら早期償還</td><td>複数の観察日とトリガー条件の管理</td></tr>
                        <tr><td><strong>デジタル/バイナリ</strong></td><td>条件成立で固定額を支払い、不成立ならゼロ</td><td>ペイアウト構造のモデリング</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📜 クレジットデリバティブ (CDS等)</h2>
                <p>信用リスク（デフォルトリスク）を売買するOTC商品です。</p>

                <h3>CDS (Credit Default Swap)</h3>
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <div style="display:flex; align-items:center; justify-content:center; gap:2rem; flex-wrap:wrap; text-align:center;">
                        <div style="padding:1rem; background:rgba(59,130,246,0.1); border-radius:var(--radius-md);">
                            <strong style="color:var(--accent-blue);">プロテクション購入者</strong><br>
                            <small>（信用リスクのヘッジをしたい側）</small>
                        </div>
                        <div>
                            <div>→ <strong>定期的にプレミアム（スプレッド）</strong> →</div>
                            <div style="margin-top:0.5rem;">← <strong>クレジットイベント発生時に補償</strong> ←</div>
                        </div>
                        <div style="padding:1rem; background:rgba(239,68,68,0.1); border-radius:var(--radius-md);">
                            <strong style="color:var(--accent-red);">プロテクション売却者</strong><br>
                            <small>（信用リスクを引き受ける側）</small>
                        </div>
                    </div>
                    <p style="text-align:center; margin-top:1rem; font-size:0.9rem;">※「保険」に似た構造。参照先企業がデフォルトすれば売却者が損失を補償</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🏗️ OTCの多様性にBe-DFSはどう対応するか</h2>
                <p>OTC市場の強みは「何でもカスタマイズできる」ことですが、システム側から見ると<strong>「何が来るかわからない」恐怖</strong>でもあります。</p>
                
                <div class="info-box tip">
                    <div class="info-box-title">💡 設計パターン：商品テンプレート＋パラメータ駆動</div>
                    <p>先進的なBe-DFSは以下のアプローチで多様性に対応します。</p>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>商品テンプレート</strong>：IRS、CCS、TRS、オプション等の「型」を定義。新商品は既存テンプレートの組み合わせ or 拡張で対応</li>
                        <li><strong>パラメータ駆動</strong>：ペイオフ構造やスケジュールをハードコードせず、パラメータ（設定値）で柔軟に変更可能にする</li>
                        <li><strong>レグの汎化</strong>：固定レグ、変動レグ、エクイティレグ等を汎用的な「レグ」オブジェクトとして設計し、自由に組み合わせ</li>
                        <li><strong>ペイオフスクリプト</strong>：複雑なペイオフ条件をスクリプト言語（Python等）で定義し、エンジンで実行</li>
                    </ul>
                </div>

                <h3>商品分類マトリクス（Be-DFS の内部分類例）</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>資産クラス</th><th>主な商品</th><th>バニラ</th><th>エキゾチック</th></tr></thead>
                    <tbody>
                        <tr><td><strong>金利</strong></td><td>IRS, CCS, Swaption</td><td>✅</td><td>CMS Spread, Range Accrual</td></tr>
                        <tr><td><strong>為替</strong></td><td>FX Forward, FX Option</td><td>✅</td><td>TARF, Dual Currency</td></tr>
                        <tr><td><strong>株式</strong></td><td>Equity Swap, TRS, PSWAP</td><td>✅</td><td>Autocallable, Barrier</td></tr>
                        <tr><td><strong>クレジット</strong></td><td>CDS</td><td>✅</td><td>CDO, Nth-to-Default</td></tr>
                        <tr><td><strong>コモディティ</strong></td><td>Commodity Swap</td><td>✅</td><td>Asian, Spread Option</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day142-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day142-quiz', 'day142-quiz', [
            { question: 'バリアオプションにおいて、「ノックアウト」とはどのような仕組みですか？', options: ['バリア価格に達すると新たなオプションが発生する', 'バリア価格に達するとオプションの権利が消滅する', 'バリア価格に達すると自動的に行使される', 'バリア価格に達すると想定元本が倍になる'], correct: 1, explanation: 'ノックアウト型バリアオプションは、原資産の価格が設定されたバリア水準に到達すると、オプションの権利が消滅（無効化）する仕組みです。逆に、バリアに到達して初めて権利が発生するのが「ノックイン」型です。' },
            { question: 'CDS (Credit Default Swap) の構造として正しいものはどれですか？', options: ['固定金利と変動金利を交換する', 'プロテクション購入者が定期プレミアムを支払い、クレジットイベント発生時にプロテクション売却者が補償する', '株式のリターンと金利を交換する', '異なる通貨間で元本と利息を交換する'], correct: 1, explanation: 'CDSでは、プロテクション購入者が定期的にプレミアム（スプレッド）を支払い、もし参照先企業にクレジットイベント（デフォルト等）が発生した場合、プロテクション売却者が損失を補償します。「信用リスクの保険」のような構造です。' },
            { question: 'Be-DFSがOTCの多様な商品に対応するための設計アプローチとして最も適切なものはどれですか？', options: ['全ての商品を個別にハードコードする', '商品テンプレートとパラメータ駆動の設計で柔軟性を確保する', '対応商品を3種類に限定する', '全てExcelで処理する'], correct: 1, explanation: 'OTCの多様性に対応するには、商品テンプレート（IRS、CCS、TRS等の「型」定義）とパラメータ駆動（条件を設定値で柔軟に変更可能）の設計が重要です。レグの汎化やペイオフスクリプトと組み合わせることで、新商品にも迅速に対応できます。' },
            { question: 'アジアンオプションの特徴として正しいものはどれですか？', options: ['アジア市場でのみ取引されるオプション', '満期日の一時点ではなく、期間中の平均価格で決済される', '行使価格が毎日変動する', '元本が自動的に増加する'], correct: 1, explanation: 'アジアンオプションは、決済価格として満期日の1時点の価格ではなく、あらかじめ定められた期間中の平均価格（算術平均 or 幾何平均）を使用します。名称はアジアとは無関係で、初めてこの商品がアジアの銀行で取引されたことに由来するとされています。' }
        ]);
    }
};
