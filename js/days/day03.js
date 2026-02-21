// ===========================
// Day 03: デリバティブ入門
// ===========================
window.Day03 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📊 デリバティブとは？</h2>
                <p><strong>デリバティブ（金融派生商品）</strong>とは、株式・債券・金利・為替などの<strong>原資産（Underlying Asset）</strong>から
                「派生」して作られた金融商品の総称です。</p>

                <h3>デリバティブの3つの主な目的</h3>
                <ul>
                    <li><strong>ヘッジ（Hedging）</strong>：リスクを回避・軽減する（例：輸出企業が為替変動リスクを回避）</li>
                    <li><strong>投機（Speculation）</strong>：少ない資金で大きな利益を狙う（レバレッジ効果）</li>
                    <li><strong>裁定取引（Arbitrage）</strong>：市場の価格差を利用して無リスクで利益を得る</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">🔑 なぜ「デリバティブ」を学ぶのか？</div>
                    <p>私たちの業務の中心は、デリバティブの<strong>時価評価</strong>・<strong>リスク計測</strong>・<strong>XVA計測</strong>のシステム開発です。
                    デリバティブの仕組みを理解することが、業務の基盤となります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔄 先物（Futures / Forwards）</h2>
                <p>将来の決められた日に、決められた価格で原資産を売買する<strong>義務</strong>がある契約です。</p>

                <h3>先物取引の例</h3>
                <div class="info-box info">
                    <div class="info-box-title">📖 例：トヨタの為替ヘッジ</div>
                    <p>トヨタは車を米国に輸出し、ドルで売上を受け取ります。半年後にドルを円に替えるとき、
                    円高になっていると損をします。</p>
                    <p>→ 為替先物契約で「半年後に1ドル=150円で交換する」と約束すれば、為替変動リスクを回避できます。</p>
                </div>

                <h3>先物 vs フォワード</h3>
                <table class="styled-table">
                    <thead><tr><th>特徴</th><th>先物（Futures）</th><th>フォワード（Forward）</th></tr></thead>
                    <tbody>
                        <tr><td>取引場所</td><td>取引所（標準化）</td><td>店頭（OTC、相対取引）</td></tr>
                        <tr><td>決済方法</td><td>日次の値洗い（差金決済）</td><td>満期時の一括決済</td></tr>
                        <tr><td>信用リスク</td><td>清算機関が保証</td><td>取引相手リスクあり</td></tr>
                        <tr><td>カスタマイズ</td><td>標準化された仕様</td><td>自由に設計可能</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>⚡ オプション（Options）</h2>
                <p>将来の決められた日（または期間内）に、決められた価格で原資産を売買する<strong>権利</strong>を持つ契約です。</p>

                <h3>オプションの基本用語</h3>
                <table class="styled-table">
                    <thead><tr><th>用語</th><th>英語</th><th>意味</th></tr></thead>
                    <tbody>
                        <tr><td><strong>コール</strong></td><td>Call</td><td>原資産を「買う権利」</td></tr>
                        <tr><td><strong>プット</strong></td><td>Put</td><td>原資産を「売る権利」</td></tr>
                        <tr><td><strong>行使価格</strong></td><td>Strike Price (K)</td><td>売買の基準となる価格</td></tr>
                        <tr><td><strong>満期日</strong></td><td>Expiration</td><td>権利を行使できる最終日</td></tr>
                        <tr><td><strong>プレミアム</strong></td><td>Premium</td><td>オプションの購入価格</td></tr>
                    </tbody>
                </table>

                <h3>オプションのペイオフ（損益）</h3>
                <div class="formula-box">
                    コールオプションの買い手: max(S - K, 0) - Premium<br>
                    プットオプションの買い手: max(K - S, 0) - Premium<br><br>
                    S = 満期時の原資産価格, K = 行使価格
                </div>

                <h3>ITM・ATM・OTM</h3>
                <table class="styled-table">
                    <thead><tr><th>状態</th><th>コールの場合</th><th>プットの場合</th><th>意味</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ITM</strong> (In-The-Money)</td><td>S > K</td><td>S < K</td><td>権利行使すれば利益</td></tr>
                        <tr><td><strong>ATM</strong> (At-The-Money)</td><td>S ≈ K</td><td>S ≈ K</td><td>ほぼ損益ゼロ</td></tr>
                        <tr><td><strong>OTM</strong> (Out-of-The-Money)</td><td>S < K</td><td>S > K</td><td>権利行使しても損</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">📌 オプション vs 先物の決定的な違い</div>
                    <p><strong>先物</strong>は売買の「義務」→ 不利な状況でも取引しなければならない。<br>
                    <strong>オプション</strong>は売買の「権利」→ 不利な場合は権利を放棄すればよい。<br>
                    その代わり、オプションの買い手はプレミアム（保険料）を支払います。</p>
                </div>
            </div>

            <div id="day03-payoff"></div>

            <div class="content-section animate-in stagger-3">
                <h2>🔀 スワップ（Swaps）</h2>
                <p><strong>スワップ</strong>とは、二者間でキャッシュフロー（お金の流れ）を一定期間にわたって交換する契約です。</p>

                <h3>金利スワップ（Interest Rate Swap）</h3>
                <p>最も一般的なスワップ。<strong>固定金利</strong>と<strong>変動金利</strong>のキャッシュフローを交換します。</p>
                <div class="info-box info">
                    <div class="info-box-title">📖 例：金利スワップの仕組み</div>
                    <p><strong>A社</strong>（変動金利で借入中）：金利上昇が不安 → 固定金利を支払いたい<br>
                    <strong>B社</strong>（固定金利で借入中）：金利低下を予想 → 変動金利を支払いたい</p>
                    <p>→ 二社が金利支払いを「スワップ（交換）」することで、双方のニーズを満たします。</p>
                </div>

                <h3>通貨スワップ（Currency Swap）</h3>
                <p>異なる通貨のキャッシュフローを交換する契約。グローバル企業の資金調達に利用されます。</p>

                <h3>クレジット・デフォルト・スワップ（CDS）</h3>
                <p>信用リスク（デフォルト＝債務不履行のリスク）を売買する商品。XVA（Day 7）に深く関連します。</p>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🏢 OTC vs 取引所取引</h2>
                <table class="styled-table">
                    <thead><tr><th>特徴</th><th>取引所取引</th><th>OTC（店頭取引）</th></tr></thead>
                    <tbody>
                        <tr><td>取引場所</td><td>公開の取引所</td><td>金融機関間の相対取引</td></tr>
                        <tr><td>標準化</td><td>高い（決まった仕様）</td><td>低い（カスタマイズ可能）</td></tr>
                        <tr><td>信用リスク</td><td>清算機関が保証</td><td>取引相手リスクあり</td></tr>
                        <tr><td>取引量</td><td>OTCより少ない</td><td>世界のデリバティブの約80%</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ OTC取引と取引相手リスク</div>
                    <p>OTC取引では取引相手が破綻するリスク（カウンターパーティリスク）があります。
                    2008年の金融危機（リーマンショック）でこのリスクが顕在化し、XVAの概念が発展しました。</p>
                </div>
            </div>

            <div id="day03-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // Payoff Diagram Simulator
        this.renderPayoffDiagram('day03-payoff');

        // Quiz
        QuizEngine.render('day03-quiz', 'day03-quiz', [
            {
                question: 'デリバティブ取引の主な目的に含まれないものはどれですか？',
                options: ['ヘッジ（リスク回避）', '投機（利益追求）', '裁定取引', '預金'],
                correct: 3,
                explanation: 'デリバティブの主な目的はヘッジ・投機・裁定取引の3つです。預金はデリバティブではありません。'
            },
            {
                question: 'コールオプションの買い手が持つのはどのような権利ですか？',
                options: ['原資産を売る義務', '原資産を買う権利', '原資産を売る権利', '原資産を買う義務'],
                correct: 1,
                explanation: 'コール = 買う権利、プット = 売る権利です。「義務」ではなく「権利」なので、不利な場合は行使しなくてよいのがオプションの特徴です。'
            },
            {
                question: '金利スワップとは何ですか？',
                options: [
                    '異なる通貨を交換する取引',
                    '固定金利と変動金利のキャッシュフローを交換する取引',
                    '株式と債券を交換する取引',
                    '信用リスクを売買する取引'
                ],
                correct: 1,
                explanation: '金利スワップは最も一般的なスワップで、固定金利と変動金利のキャッシュフローを交換する取引です。'
            },
            {
                question: '原資産価格(S)が100、行使価格(K)が90のコールオプションの状態は？',
                options: ['OTM (Out-of-The-Money)', 'ATM (At-The-Money)', 'ITM (In-The-Money)', '該当なし'],
                correct: 2,
                explanation: 'コールオプションでS(100) > K(90)なので、権利行使すれば利益が出るITM（イン・ザ・マネー）です。'
            },
            {
                question: 'OTC（店頭）デリバティブの特徴として正しいものはどれですか？',
                options: [
                    '清算機関が信用リスクを保証する',
                    '取引所で標準化された商品のみ取引できる',
                    'カスタマイズが可能だが取引相手リスクがある',
                    '個人投資家のみが参加できる'
                ],
                correct: 2,
                explanation: 'OTC取引はカスタマイズ可能ですが、取引相手リスク（カウンターパーティリスク）があるのが特徴です。'
            }
        ]);
    },

    renderPayoffDiagram(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="simulator-container">
                <div class="simulator-title">📈 オプション ペイオフ図シミュレータ</div>
                <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1rem;">
                    行使価格とプレミアムを変更して、ペイオフ（損益）がどう変化するか確認しましょう。
                </p>
                <div class="sim-controls">
                    <div class="sim-control">
                        <label class="sim-label">オプションタイプ</label>
                        <select class="sim-input" id="payoff-type" style="cursor:pointer;">
                            <option value="call-buy">コール買い</option>
                            <option value="call-sell">コール売り</option>
                            <option value="put-buy">プット買い</option>
                            <option value="put-sell">プット売り</option>
                        </select>
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">行使価格 (K) <span class="sim-value-display" id="payoff-k-val">100</span></label>
                        <input type="range" class="sim-slider" id="payoff-k" min="50" max="150" value="100" step="5">
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">プレミアム <span class="sim-value-display" id="payoff-premium-val">10</span></label>
                        <input type="range" class="sim-slider" id="payoff-premium" min="1" max="30" value="10" step="1">
                    </div>
                </div>
                <div class="sim-canvas-container">
                    <canvas id="payoff-canvas" class="sim-canvas"></canvas>
                </div>
            </div>
        `;

        const draw = () => {
            const type = document.getElementById('payoff-type').value;
            const K = parseFloat(document.getElementById('payoff-k').value);
            const premium = parseFloat(document.getElementById('payoff-premium').value);
            const canvas = document.getElementById('payoff-canvas');
            const ctx = canvas.getContext('2d');

            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * 2;
            canvas.height = rect.height * 2;
            ctx.scale(2, 2);
            const w = rect.width, h = rect.height;

            ctx.clearRect(0, 0, w, h);

            const margin = { top: 30, right: 30, bottom: 50, left: 60 };
            const xMin = 20, xMax = 200, yMin = -50, yMax = 80;

            // Draw axes
            SimulatorEngine.drawAxes(ctx, w, h, {
                margin, xMin, xMax, yMin, yMax,
                xLabel: '原資産価格 (S)',
                yLabel: '損益',
                xTicks: [
                    { value: 50, label: '50' }, { value: 100, label: '100' },
                    { value: 150, label: '150' }, { value: 200, label: '200' }
                ],
                yTicks: [
                    { value: -40, label: '-40' }, { value: -20, label: '-20' },
                    { value: 0, label: '0' }, { value: 20, label: '20' },
                    { value: 40, label: '40' }, { value: 60, label: '60' }
                ]
            });

            // Zero line
            const zeroY = h - margin.bottom - (0 - yMin) / (yMax - yMin) * (h - margin.top - margin.bottom);
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(margin.left, zeroY);
            ctx.lineTo(w - margin.right, zeroY);
            ctx.stroke();
            ctx.setLineDash([]);

            // Generate payoff points
            const points = [];
            for (let S = xMin; S <= xMax; S += 1) {
                let payoff;
                switch (type) {
                    case 'call-buy': payoff = Math.max(S - K, 0) - premium; break;
                    case 'call-sell': payoff = -(Math.max(S - K, 0) - premium); break;
                    case 'put-buy': payoff = Math.max(K - S, 0) - premium; break;
                    case 'put-sell': payoff = -(Math.max(K - S, 0) - premium); break;
                }
                points.push([S, payoff]);
            }

            // Draw payoff line
            const isBuy = type.includes('buy');
            SimulatorEngine.drawLine(ctx, points, w, h, {
                margin, xMin, xMax, yMin, yMax,
                color: isBuy ? '#60a5fa' : '#f472b6',
                lineWidth: 2.5,
                fill: isBuy ? 'rgba(96,165,250,0.15)' : 'rgba(244,114,182,0.15)'
            });

            // Strike price line
            const kX = margin.left + (K - xMin) / (xMax - xMin) * (w - margin.left - margin.right);
            ctx.strokeStyle = 'rgba(251, 146, 60, 0.5)';
            ctx.setLineDash([3, 3]);
            ctx.beginPath();
            ctx.moveTo(kX, margin.top);
            ctx.lineTo(kX, h - margin.bottom);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = '#fb923c';
            ctx.font = '11px "Noto Sans JP", sans-serif';
            ctx.fillText(`K=${K}`, kX + 5, margin.top + 15);

            // Legend
            const typeLabels = {
                'call-buy': 'コール買い', 'call-sell': 'コール売り',
                'put-buy': 'プット買い', 'put-sell': 'プット売り'
            };
            ctx.fillStyle = isBuy ? '#60a5fa' : '#f472b6';
            ctx.font = 'bold 13px "Noto Sans JP", sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(typeLabels[type], margin.left + 10, margin.top + 15);
        };

        // Update display values
        document.getElementById('payoff-k').addEventListener('input', (e) => {
            document.getElementById('payoff-k-val').textContent = e.target.value;
            draw();
        });
        document.getElementById('payoff-premium').addEventListener('input', (e) => {
            document.getElementById('payoff-premium-val').textContent = e.target.value;
            draw();
        });
        document.getElementById('payoff-type').addEventListener('change', draw);

        // Initial draw
        setTimeout(draw, 100);
    }
};
