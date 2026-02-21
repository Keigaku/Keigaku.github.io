// ===========================
// Day 04: オプション価格理論
// ===========================
window.Day04 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚡ オプション価格はどう決まるか？</h2>
                <p>Day 3で学んだオプションの「プレミアム（価格）」は、一体どうやって決まるのでしょうか？
                適正な価格を数学的に計算するのが<strong>オプション価格理論</strong>です。</p>

                <h3>オプション価格に影響を与える要因</h3>
                <table class="styled-table">
                    <thead><tr><th>要因</th><th>記号</th><th>コール価格への影響</th><th>プット価格への影響</th></tr></thead>
                    <tbody>
                        <tr><td>原資産価格</td><td>S</td><td>↑ 上昇</td><td>↓ 下落</td></tr>
                        <tr><td>行使価格</td><td>K</td><td>↓ 下落</td><td>↑ 上昇</td></tr>
                        <tr><td>残存期間</td><td>T</td><td>↑ 上昇</td><td>↑ 上昇</td></tr>
                        <tr><td>ボラティリティ</td><td>σ</td><td>↑ 上昇</td><td>↑ 上昇</td></tr>
                        <tr><td>金利</td><td>r</td><td>↑ 上昇</td><td>↓ 下落</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📜 ブラック・ショールズモデル</h2>
                <p>1973年にフィッシャー・ブラックとマイロン・ショールズが発表した、オプション価格の計算公式です。
                金融工学の最も重要な成果の一つで、ショールズはこの功績でノーベル経済学賞を受賞しました。</p>

                <h3>ブラック・ショールズ公式</h3>
                <div class="formula-box">
                    <strong>コールオプション:</strong> C = S × N(d₁) - K × e^(-rT) × N(d₂)<br><br>
                    <strong>プットオプション:</strong> P = K × e^(-rT) × N(-d₂) - S × N(-d₁)<br><br>
                    d₁ = [ln(S/K) + (r + σ²/2) × T] / (σ × √T)<br>
                    d₂ = d₁ - σ × √T
                </div>

                <table class="styled-table">
                    <thead><tr><th>記号</th><th>意味</th></tr></thead>
                    <tbody>
                        <tr><td>S</td><td>原資産の現在価格</td></tr>
                        <tr><td>K</td><td>行使価格（ストライク価格）</td></tr>
                        <tr><td>T</td><td>満期までの期間（年）</td></tr>
                        <tr><td>r</td><td>リスクフリーレート（無リスク金利）</td></tr>
                        <tr><td>σ</td><td>ボラティリティ（年率）</td></tr>
                        <tr><td>N(x)</td><td>標準正規分布の累積分布関数</td></tr>
                        <tr><td>ln</td><td>自然対数</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">💡 BS式の前提条件</div>
                    <p>ブラック・ショールズモデルにはいくつかの仮定があります：</p>
                    <ul style="margin:0.5rem 0 0 1rem;">
                        <li>株価は幾何ブラウン運動に従う</li>
                        <li>ボラティリティと金利は一定</li>
                        <li>取引コスト・税金がない</li>
                        <li>配当がない</li>
                        <li>連続的に取引可能</li>
                    </ul>
                    <p>現実にはこれらの仮定は正確ではないため、実務では様々な拡張モデルが使われます。</p>
                </div>
            </div>

            <div id="day04-bs-calculator"></div>

            <div class="content-section animate-in stagger-2">
                <h2>🎯 グリークス（Greeks）</h2>
                <p>オプション価格が各パラメータの変化に対してどれくらい敏感かを表す指標群です。
                <strong>リスク管理</strong>の要であり、私たちのシステムで計算する重要な値です。</p>

                <table class="styled-table">
                    <thead><tr><th>グリーク</th><th>記号</th><th>意味</th><th>数式</th></tr></thead>
                    <tbody>
                        <tr><td><strong>デルタ</strong></td><td>Δ</td><td>原資産価格の変化に対する感応度</td><td>∂C/∂S</td></tr>
                        <tr><td><strong>ガンマ</strong></td><td>Γ</td><td>デルタの変化率（2次の感応度）</td><td>∂²C/∂S²</td></tr>
                        <tr><td><strong>ベガ</strong></td><td>ν</td><td>ボラティリティの変化に対する感応度</td><td>∂C/∂σ</td></tr>
                        <tr><td><strong>シータ</strong></td><td>Θ</td><td>時間経過に対する感応度（時間価値の減少）</td><td>∂C/∂t</td></tr>
                        <tr><td><strong>ロー</strong></td><td>ρ</td><td>金利の変化に対する感応度</td><td>∂C/∂r</td></tr>
                    </tbody>
                </table>

                <h3>グリークスの実務での使い方</h3>
                <ul>
                    <li><strong>デルタヘッジ</strong>：デルタを0に保つことでポートフォリオを市場変動から中立化</li>
                    <li><strong>リスク限度管理</strong>：各グリークスに上限を設定してリスクを制限</li>
                    <li><strong>P&L分解</strong>：日々の損益をグリークスの変化で説明・分析</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">🔑 なぜグリークスが重要か</div>
                    <p>金融機関は何千ものオプションを保有しています。各種グリークスを集計することで、
                    ポートフォリオ全体の市場感応度を把握し、リスクを管理します。
                    私たちのシステムの重要な機能の一つです。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🌐 実務で使われるモデル</h2>
                <p>ブラック・ショールズは基本ですが、実務ではより高度なモデルが使われます：</p>

                <h3>ボラティリティ・スマイル / スキュー</h3>
                <p>実際の市場では、行使価格によってインプライドボラティリティ（IV）が異なります。
                BS式の仮定（ボラティリティ一定）が現実と異なることを示しています。</p>

                <h3>主な拡張モデル</h3>
                <table class="styled-table">
                    <thead><tr><th>モデル</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ローカルボラティリティモデル</strong></td><td>ボラティリティが原資産価格と時間の関数</td></tr>
                        <tr><td><strong>確率ボラティリティモデル</strong><br>(Heston等)</td><td>ボラティリティ自体も確率的に変動</td></tr>
                        <tr><td><strong>ジャンプ拡散モデル</strong><br>(Merton等)</td><td>株価の急激な変動（ジャンプ）を考慮</td></tr>
                        <tr><td><strong>金利モデル</strong><br>(Hull-White, LGM等)</td><td>金利の期間構造をモデル化</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">📌 現場で知っておくべきこと</div>
                    <p>これらのモデルの数理的詳細は徐々に学べばOKですが、「BS式は出発点であり、
                    実務ではより精度の高いモデルを使う」ということを理解しておきましょう。</p>
                </div>
            </div>

            <div id="day04-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // Black-Scholes Calculator
        this.renderBSCalculator('day04-bs-calculator');

        // Quiz
        QuizEngine.render('day04-quiz', 'day04-quiz', [
            {
                question: 'ブラック・ショールズ式の前提として「正しくない」ものはどれですか？',
                options: [
                    '株価は幾何ブラウン運動に従う',
                    'ボラティリティは一定',
                    '株価は突然大きくジャンプすることがある',
                    '取引コストがない'
                ],
                correct: 2,
                explanation: 'BSモデルでは株価は連続的に動く（ジャンプしない）と仮定します。ジャンプを考慮するのはMertonのジャンプ拡散モデルなどです。'
            },
            {
                question: 'ボラティリティが上昇すると、コールオプションとプットオプションの価格はそれぞれどうなりますか？',
                options: [
                    'コール：上昇、プット：下落',
                    'コール：下落、プット：上昇',
                    'コール：上昇、プット：上昇',
                    'コール：下落、プット：下落'
                ],
                correct: 2,
                explanation: 'ボラティリティの上昇は、原資産価格の変動幅の拡大を意味します。オプションは「権利」なので、有利な方向に動く可能性が増えれば価値が上がります。したがって、コール・プットどちらも上昇します。'
            },
            {
                question: 'グリークスのうち、原資産価格の変化に対するオプション価格の感応度を何と呼びますか？',
                options: ['ガンマ (Γ)', 'ベガ (ν)', 'デルタ (Δ)', 'シータ (Θ)'],
                correct: 2,
                explanation: 'デルタ(Δ)は原資産価格の変化に対するオプション価格の感応度（∂C/∂S）です。'
            },
            {
                question: '「デルタヘッジ」とは何ですか？',
                options: [
                    'デルタが最大になるようにポジションを調整すること',
                    'デルタを0に保つことでポートフォリオを市場変動から中立化すること',
                    'デルタの高いオプションだけを購入すること',
                    'オプションのシータ（時間減衰）を相殺すること'
                ],
                correct: 1,
                explanation: 'デルタヘッジは、ポートフォリオ全体のデルタを0（デルタニュートラル）に保つことで、原資産価格の変動に対するリスクを中立化する手法です。'
            },
            {
                question: '実際の市場で行使価格によってインプライドボラティリティが異なる現象を何と呼びますか？',
                options: ['ボラティリティ・クラスタリング', 'ボラティリティ・スマイル/スキュー', 'ボラティリティ・スパイク', 'ボラティリティ・ドリフト'],
                correct: 1,
                explanation: 'ボラティリティ・スマイル（またはスキュー）は、行使価格によってインプライドボラティリティが異なる現象です。BSの「ボラティリティ一定」の仮定が現実と異なることを示しています。'
            }
        ]);
    },

    renderBSCalculator(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div class="simulator-container">
                <div class="simulator-title">🧮 ブラック・ショールズ計算機</div>
                <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:1.25rem;">
                    パラメータを変更して、オプション価格とグリークスがどう変化するか確認しましょう。
                </p>
                <div class="sim-controls">
                    <div class="sim-control">
                        <label class="sim-label">原資産価格 (S) <span class="sim-value-display" id="bs-s-val">100</span></label>
                        <input type="range" class="sim-slider" id="bs-s" min="50" max="200" value="100" step="1">
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">行使価格 (K) <span class="sim-value-display" id="bs-k-val">100</span></label>
                        <input type="range" class="sim-slider" id="bs-k" min="50" max="200" value="100" step="1">
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">残存期間 (T) <span class="sim-value-display" id="bs-t-val">1.0</span> 年</label>
                        <input type="range" class="sim-slider" id="bs-t" min="0.01" max="5" value="1" step="0.01">
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">金利 (r) <span class="sim-value-display" id="bs-r-val">5</span>%</label>
                        <input type="range" class="sim-slider" id="bs-r" min="0" max="15" value="5" step="0.5">
                    </div>
                    <div class="sim-control">
                        <label class="sim-label">ボラティリティ (σ) <span class="sim-value-display" id="bs-vol-val">20</span>%</label>
                        <input type="range" class="sim-slider" id="bs-vol" min="5" max="80" value="20" step="1">
                    </div>
                </div>

                <div class="sim-results" id="bs-results" style="margin-top:1rem;">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
                        <div class="sim-result-item" style="border-left:3px solid var(--accent-blue);">
                            <div class="sim-result-label">コール価格</div>
                            <div class="sim-result-value" id="bs-call-price">-</div>
                        </div>
                        <div class="sim-result-item" style="border-left:3px solid var(--accent-pink);">
                            <div class="sim-result-label">プット価格</div>
                            <div class="sim-result-value" id="bs-put-price">-</div>
                        </div>
                    </div>
                    <h4 style="color:var(--text-muted);font-size:0.8rem;margin-bottom:0.75rem;">グリークス</h4>
                    <div class="sim-result-grid" style="grid-template-columns:repeat(5,1fr);">
                        <div class="sim-result-item">
                            <div class="sim-result-label">デルタ (Δ)</div>
                            <div class="sim-result-value" id="bs-delta" style="font-size:1.1rem;">-</div>
                        </div>
                        <div class="sim-result-item">
                            <div class="sim-result-label">ガンマ (Γ)</div>
                            <div class="sim-result-value" id="bs-gamma" style="font-size:1.1rem;">-</div>
                        </div>
                        <div class="sim-result-item">
                            <div class="sim-result-label">ベガ (ν)</div>
                            <div class="sim-result-value" id="bs-vega" style="font-size:1.1rem;">-</div>
                        </div>
                        <div class="sim-result-item">
                            <div class="sim-result-label">シータ (Θ)</div>
                            <div class="sim-result-value" id="bs-theta" style="font-size:1.1rem;">-</div>
                        </div>
                        <div class="sim-result-item">
                            <div class="sim-result-label">d₁</div>
                            <div class="sim-result-value" id="bs-d1" style="font-size:1.1rem;">-</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const update = () => {
            const S = parseFloat(document.getElementById('bs-s').value);
            const K = parseFloat(document.getElementById('bs-k').value);
            const T = parseFloat(document.getElementById('bs-t').value);
            const r = parseFloat(document.getElementById('bs-r').value) / 100;
            const sigma = parseFloat(document.getElementById('bs-vol').value) / 100;

            document.getElementById('bs-s-val').textContent = S;
            document.getElementById('bs-k-val').textContent = K;
            document.getElementById('bs-t-val').textContent = T.toFixed(2);
            document.getElementById('bs-r-val').textContent = (r * 100).toFixed(1);
            document.getElementById('bs-vol-val').textContent = (sigma * 100).toFixed(0);

            const call = SimulatorEngine.blackScholes(S, K, T, r, sigma, 'call');
            const put = SimulatorEngine.blackScholes(S, K, T, r, sigma, 'put');

            document.getElementById('bs-call-price').textContent = call.price.toFixed(4);
            document.getElementById('bs-put-price').textContent = put.price.toFixed(4);
            document.getElementById('bs-delta').textContent = call.delta.toFixed(4);
            document.getElementById('bs-gamma').textContent = call.gamma.toFixed(6);
            document.getElementById('bs-vega').textContent = call.vega.toFixed(4);
            document.getElementById('bs-theta').textContent = call.theta.toFixed(4);
            document.getElementById('bs-d1').textContent = call.d1.toFixed(4);
        };

        ['bs-s', 'bs-k', 'bs-t', 'bs-r', 'bs-vol'].forEach(id => {
            document.getElementById(id).addEventListener('input', update);
        });

        update();
    }
};
