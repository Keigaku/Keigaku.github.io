// ===========================
// Day 06: 市場リスク管理
// ===========================
window.Day06 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🛡️ リスク管理とは</h2>
                <p>金融機関にとって、リスク管理は最も重要な業務の一つです。
                市場リスク管理とは、<strong>金利・為替・株価等の市場変動によって生じうる損失</strong>を把握・制御することです。</p>

                <h3>リスクの種類</h3>
                <table class="styled-table">
                    <thead><tr><th>リスク種類</th><th>内容</th><th>例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>市場リスク</strong></td><td>市場価格の変動による損失</td><td>金利変動、株価下落</td></tr>
                        <tr><td><strong>信用リスク</strong></td><td>取引相手の債務不履行</td><td>社債のデフォルト</td></tr>
                        <tr><td><strong>流動性リスク</strong></td><td>資産を適正価格で売買できない</td><td>市場の混乱時</td></tr>
                        <tr><td><strong>オペレーショナルリスク</strong></td><td>業務プロセスの失敗</td><td>システム障害、人為的ミス</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🔑 私たちの業務との関連</div>
                    <p>私たちが開発するシステムは、主に<strong>市場リスク</strong>の計測を担当します。
                    信用リスクはXVA（Day 7）で部分的にカバーします。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📊 VaR（Value at Risk）</h2>
                <p><strong>VaR</strong>は市場リスクの最も代表的な指標です。</p>
                <div class="info-box info">
                    <div class="info-box-title">📖 VaRの定義</div>
                    <p>「ある信頼水準のもと、一定期間内に被りうる最大損失額」</p>
                    <p>例：<strong>「99%VaR = 1億円」</strong>の意味 → 「今後1日で、99%の確率で損失は1億円以内に収まる」</p>
                </div>

                <h3>VaRの計算方法</h3>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>概要</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>分散共分散法</strong><br>（パラメトリック法）</td>
                            <td>ポートフォリオのリターンが正規分布に従うと仮定し、分散（σ²）から計算</td>
                            <td>高速だが正規分布仮定に依存</td></tr>
                        <tr><td><strong>ヒストリカル法</strong></td>
                            <td>過去の実際の市場変動データを使って損益分布を作成</td>
                            <td>仮定が少ないが過去のデータに依存</td></tr>
                        <tr><td><strong>モンテカルロ法</strong></td>
                            <td>乱数で多数のシナリオを生成し、損益分布を推定</td>
                            <td>柔軟だが計算コストが高い</td></tr>
                    </tbody>
                </table>

                <h3>分散共分散法のVaR計算</h3>
                <div class="formula-box">
                    VaR = |μ - z_α × σ| × ポジション金額<br><br>
                    μ = 平均リターン（通常0と仮定）<br>
                    σ = ボラティリティ（標準偏差）<br>
                    z_α = 信頼水準に対応する正規分布の分位点<br>
                    （99% → z = 2.326, 95% → z = 1.645）
                </div>
            </div>

            <div id="day06-var-simulator"></div>

            <div class="content-section animate-in stagger-2">
                <h2>📐 感応度分析</h2>
                <p>ポートフォリオの価値が、市場の各リスクファクターの変化に対して
                どれくらい敏感に反応するかを調べる分析です。</p>

                <h3>主要な感応度指標</h3>
                <table class="styled-table">
                    <thead><tr><th>指標</th><th>対象リスク</th><th>内容</th></tr></thead>
                    <tbody>
                        <tr><td><strong>BPV / DV01</strong></td><td>金利</td><td>金利が1bp（0.01%）変化したときの価値変動</td></tr>
                        <tr><td><strong>デルタ</strong></td><td>原資産価格</td><td>原資産1単位変化時の価値変動</td></tr>
                        <tr><td><strong>ベガ</strong></td><td>ボラティリティ</td><td>ボラティリティ1%変化時の価値変動</td></tr>
                        <tr><td><strong>FX感応度</strong></td><td>為替</td><td>為替レート変化時の価値変動</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">📌 感応度分析の実務利用</div>
                    <p>トレーダーは感応度をリアルタイムに見ながら取引を行います。
                    リスク管理部門は感応度に上限（リミット）を設定し、過度なリスクテイクを防ぎます。
                    私たちのシステムはこれらの感応度を高速に計算・表示する必要があります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🔥 ストレステスト</h2>
                <p>VaRは「通常の市場環境」でのリスク指標ですが、リーマンショックのような<strong>異常事態</strong>では
                VaRを大幅に超える損失が発生し得ます。</p>

                <h3>ストレステストとは</h3>
                <p>極端な市場シナリオ（金利急騰、株価暴落等）を仮定して、ポートフォリオにどの程度の
                損失が出るかを計算する手法です。</p>

                <h3>ストレステストの種類</h3>
                <ul>
                    <li><strong>ヒストリカルストレス</strong>：過去の実際の危機（リーマンショック等）のシナリオを適用</li>
                    <li><strong>仮想ストレス</strong>：仮想的な極端シナリオ（「金利が3%上昇」等）を設定</li>
                    <li><strong>逆ストレステスト</strong>：「致命的な損失が出るのはどんなシナリオか」を逆算</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ VaRの限界</div>
                    <p>VaRは「最大損失」ではありません。99%VaRが1億円でも、残り1%で10億円の損失が出る可能性があります。
                    VaRを超える損失を評価する指標として<strong>Expected Shortfall（期待ショートフォール）</strong>も使われます。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🏛️ バーゼル規制</h2>
                <p>銀行の健全性を確保するための国際的な規制枠組み（バーゼル銀行監督委員会）です。
                市場リスクに対して一定の<strong>自己資本（資本バッファー）</strong>を積むことを義務づけています。</p>

                <h3>バーゼル規制の変遷</h3>
                <ul>
                    <li><strong>バーゼルI（1988年）</strong>：信用リスクに対する簡易的な規制</li>
                    <li><strong>バーゼルII（2004年）</strong>：市場リスク・オペリスクを追加、内部モデルの使用許可</li>
                    <li><strong>バーゼルIII（2010年〜）</strong>：金融危機の教訓を反映、資本要件の強化</li>
                    <li><strong>FRTB（2019年〜）</strong>：市場リスクの抜本的見直し（ESの採用等）</li>
                </ul>
            </div>

            <div id="day06-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // VaR Simulator
        this.renderVaRSimulator('day06-var-simulator');

        // Quiz
        QuizEngine.render('day06-quiz', 'day06-quiz', [
            {
                question: '「99%VaR = 5億円」とはどういう意味ですか？',
                options: [
                    '最大損失が5億円を決して超えない',
                    '99%の確率で損失が5億円以内に収まる',
                    '平均損失が5億円',
                    '5億円を超える損失が99%の確率で発生'
                ],
                correct: 1,
                explanation: '99%VaRが5億円 = 99%の確率で損失は5億円以内。ただし、残り1%ではそれ以上の損失が発生し得ます。VaRは「最大損失」ではありません。'
            },
            {
                question: 'VaRの計算方法のうち、「過去の実際の市場データをそのまま使う」手法はどれですか？',
                options: ['分散共分散法', 'ヒストリカル法', 'モンテカルロ法', 'ブートストラップ法'],
                correct: 1,
                explanation: 'ヒストリカル法は、過去の実際の市場変動データを使って損益分布を作成し、VaRを計算する手法です。'
            },
            {
                question: 'BPV（Basis Point Value）/ DV01 とは何を表す指標ですか？',
                options: [
                    '株価が1%変化したときの損益',
                    '金利が1bp（0.01%）変化したときの価値変動',
                    'ボラティリティが1%変化したときの価値変動',
                    '為替が1%変動したときの損益'
                ],
                correct: 1,
                explanation: 'BPV/DV01は金利が1ベーシスポイント（0.01%）変化したときのポートフォリオの価値変動を表す感応度指標です。'
            },
            {
                question: 'ストレステストのうち「致命的な損失が出るシナリオを逆算する」手法は？',
                options: ['ヒストリカルストレス', '仮想ストレス', '逆ストレステスト', 'シナリオ分析'],
                correct: 2,
                explanation: '逆ストレステストは、「どのようなシナリオで致命的な損失が発生するか」を逆算する手法です。'
            },
            {
                question: 'バーゼルIIIが策定された主な背景は何ですか？',
                options: [
                    'IT技術の進歩に対応するため',
                    '2008年の金融危機の教訓を反映するため',
                    '新しいデリバティブ商品の登場に対応するため',
                    '日本の金融法改正に対応するため'
                ],
                correct: 1,
                explanation: 'バーゼルIIIは2008年の世界金融危機（リーマンショック）の教訓を反映し、銀行の資本規制を強化するために策定されました。'
            }
        ]);
    },

    renderVaRSimulator(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="simulator-container">
                <div class="simulator-title">📊 VaR（Value at Risk）シミュレータ</div>
                <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1.25rem;">
                    ポートフォリオの規模とボラティリティを変更して、VaRがどう変化するか確認しましょう。
                    （分散共分散法による計算）
                </p>
                <div class="sim-controls">
                    <div class="sim-control">
                        <label class="sim-label">ポートフォリオ金額 <span class="sim-value-display" id="var-pos-val">10</span> 億円</label>
                        <input type="range" class="sim-slider" id="var-pos" min="1" max="100" value="10" step="1">
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">年率ボラティリティ (σ) <span class="sim-value-display" id="var-vol-val">20</span>%</label>
                        <input type="range" class="sim-slider" id="var-vol" min="5" max="60" value="20" step="1">
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">保有期間 <span class="sim-value-display" id="var-days-val">10</span> 日</label>
                        <input type="range" class="sim-slider" id="var-days" min="1" max="30" value="10" step="1">
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">信頼水準</label>
                        <select class="sim-input" id="var-conf" style="cursor:pointer;">
                            <option value="0.95">95%</option>
                            <option value="0.99" selected>99%</option>
                            <option value="0.999">99.9%</option>
                        </select>
                    </div>
                </div>
                <button class="sim-btn" id="var-calc-btn">VaRを計算する</button>

                <div class="sim-results" id="var-results" style="margin-top:1.25rem;display:none;">
                    <div class="sim-result-grid" style="grid-template-columns:repeat(3,1fr);">
                        <div class="sim-result-item" style="border-left:3px solid var(--accent-red);">
                            <div class="sim-result-label">VaR</div>
                            <div class="sim-result-value" id="var-result" style="color:var(--accent-red);">-</div>
                        </div>
                        <div class="sim-result-item">
                            <div class="sim-result-label">日次ボラティリティ</div>
                            <div class="sim-result-value" id="var-daily-vol">-</div>
                        </div>
                        <div class="sim-result-item">
                            <div class="sim-result-label">期間ボラティリティ</div>
                            <div class="sim-result-value" id="var-period-vol">-</div>
                        </div>
                    </div>
                    <div style="margin-top:1rem;font-size:0.85rem;color:var(--text-muted);line-height:1.6;" id="var-explanation"></div>
                </div>
            </div>
        `;

        ['var-pos', 'var-vol', 'var-days'].forEach(id => {
            document.getElementById(id).addEventListener('input', (e) => {
                document.getElementById(id + '-val').textContent = e.target.value;
            });
        });

        document.getElementById('var-calc-btn').addEventListener('click', () => {
            const pos = parseFloat(document.getElementById('var-pos').value) * 1e8; // 億円 → 円
            const annualVol = parseFloat(document.getElementById('var-vol').value) / 100;
            const days = parseFloat(document.getElementById('var-days').value);
            const conf = parseFloat(document.getElementById('var-conf').value);

            const zMap = { '0.95': 1.645, '0.99': 2.326, '0.999': 3.090 };
            const z = zMap[String(conf)];

            const dailyVol = annualVol / Math.sqrt(252);
            const periodVol = dailyVol * Math.sqrt(days);
            const var_ = pos * periodVol * z;

            const fmtYen = (v) => {
                if (v >= 1e8) return (v / 1e8).toFixed(2) + '億円';
                if (v >= 1e4) return (v / 1e4).toFixed(0) + '万円';
                return Math.round(v).toLocaleString() + '円';
            };

            document.getElementById('var-result').textContent = fmtYen(var_);
            document.getElementById('var-daily-vol').textContent = (dailyVol * 100).toFixed(2) + '%';
            document.getElementById('var-period-vol').textContent = (periodVol * 100).toFixed(2) + '%';
            document.getElementById('var-explanation').innerHTML =
                `<strong>計算過程:</strong><br>` +
                `日次ボラティリティ = ${(annualVol * 100).toFixed(0)}% / √252 = ${(dailyVol * 100).toFixed(2)}%<br>` +
                `${days}日間ボラティリティ = ${(dailyVol * 100).toFixed(2)}% × √${days} = ${(periodVol * 100).toFixed(2)}%<br>` +
                `VaR (${(conf * 100).toFixed(1)}%) = ${fmtYen(pos)} × ${(periodVol * 100).toFixed(2)}% × ${z} = <strong>${fmtYen(var_)}</strong>`;
            document.getElementById('var-results').style.display = 'block';
        });
    }
};
