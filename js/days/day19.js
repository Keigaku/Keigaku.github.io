// ===========================
// Day 19: エキゾチックデリバティブとモンテカルロ法
// ===========================
window.Day19 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎲 エキゾチックデリバティブとは</h2>
                <p>バニラ（プレーン）オプションとは異なる、複雑なペイオフ構造を持つデリバティブの総称です。
                実務では顧客のニーズに応じた多様なエキゾチック商品が取引されています。</p>

                <h3>代表的なエキゾチック・オプション</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>種類</th><th>特徴</th><th>ペイオフ条件</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>バリアオプション</strong></td><td>原資産がバリアに触れるとactivate/deactivate</td><td>Knock-In / Knock-Out</td></tr>
                        <tr><td><strong>アジアンオプション</strong></td><td>原資産の平均価格に基づくペイオフ</td><td>算術平均 or 幾何平均</td></tr>
                        <tr><td><strong>ルックバックオプション</strong></td><td>期間中の最大/最小価格に基づく</td><td>max(S) or min(S)を使用</td></tr>
                        <tr><td><strong>デジタル（バイナリ）</strong></td><td>条件成立で固定額を支払う</td><td>1 or 0 のペイオフ</td></tr>
                        <tr><td><strong>オートコーラブル</strong></td><td>判定日に条件達成で早期償還</td><td>仕組債で多用</td></tr>
                        <tr><td><strong>バスケットオプション</strong></td><td>複数原資産のポートフォリオに基づく</td><td>相関が重要</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 なぜモンテカルロ法が必要か</div>
                    <p>経路依存型（バリア、アジアン、ルックバック等）のエキゾチックは解析解が存在しないことが多く、
                    <strong>モンテカルロ・シミュレーション</strong>が唯一の実用的な計算手法となります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔢 モンテカルロ法の基礎</h2>

                <h3>アルゴリズムの流れ</h3>
                <div class="code-block">1. リスク中立確率の下で原資産価格パスを生成
   S(t+dt) = S(t) * exp[(r - σ²/2)dt + σ√dt * Z]
   Z ~ N(0,1)

2. 各パスについてペイオフを計算
   例：コールオプション → max(S(T) - K, 0)

3. ペイオフの平均を計算

4. 無リスク金利で現在価値に割引
   Price = e^(-rT) * (1/N) * Σ payoff_i

5. 標準誤差を計算
   SE = σ_payoff / √N</div>

                <h3>収束特性</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>シミュレーション数 N</th><th>誤差 O(1/√N)</th><th>精度を1桁上げるには</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1,000</td><td>≈ 3.16%</td><td>-</td></tr>
                        <tr><td>10,000</td><td>≈ 1.00%</td><td>10倍のN</td></tr>
                        <tr><td>100,000</td><td>≈ 0.32%</td><td>100倍のN</td></tr>
                        <tr><td>1,000,000</td><td>≈ 0.10%</td><td>10,000倍のN</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 計算量の壁</div>
                    <p>精度を1桁上げるにはシミュレーション数を100倍にする必要があります（O(1/√N)の収束）。
                    これが分散低減法やGPU計算が必要な理由です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📉 分散低減法（Variance Reduction）</h2>
                <p>同じシミュレーション数でも精度を大幅に向上させるテクニック群です。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>手法</th><th>原理</th><th>効果</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>対称変量法</strong></td><td>Z と -Z のペアを使用</td><td>分散を約半分に削減、実装容易</td></tr>
                        <tr><td><strong>制御変量法</strong></td><td>解析解のある類似商品で補正</td><td>大幅な分散削減が可能</td></tr>
                        <tr><td><strong>重点サンプリング</strong></td><td>重要な領域から多くサンプリング</td><td>OTMオプションに有効</td></tr>
                        <tr><td><strong>層化サンプリング</strong></td><td>乱数の分布を均一化</td><td>安定した収束</td></tr>
                        <tr><td><strong>準モンテカルロ法</strong></td><td>低食い違い列（Sobol等）を使用</td><td>O(1/N)に近い収束速度</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 準モンテカルロ（Quasi-Monte Carlo）</div>
                    <p>擬似乱数の代わりに<strong>低食い違い列（Sobol列、Halton列）</strong>を使用する手法。
                    理論上 O(1/N) に近い収束速度が得られ、実務では標準的な手法です。</p>
                    <p>ただし<strong>次元の呪い</strong>に注意：高次元では効果が薄れることがあります。
                    Brownian Bridge 構築法との組み合わせが効果的です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>💻 実装上の考慮点</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>トピック</th><th>ポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>乱数生成器</strong></td><td>Mersenne Twister（MT19937）が標準。NVIDIAのcuRANDも広く使用</td></tr>
                        <tr><td><strong>パス離散化</strong></td><td>Euler-Maruyama法 vs Milstein法。精度と速度のトレードオフ</td></tr>
                        <tr><td><strong>メモリ管理</strong></td><td>全パスをメモリに保持 vs パスごとに計算。経路依存型は前者が必要</td></tr>
                        <tr><td><strong>並列化</strong></td><td>パス間は独立 → 並列化が容易。GPU向けアーキテクチャ</td></tr>
                        <tr><td><strong>感応度計算</strong></td><td>バンピング法 vs パスワイズ法 vs 尤度比法。後者は同一パスで計算可能</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day19-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day19-quiz', 'day19-quiz', [
            {
                question: 'アジアンオプションのペイオフは何に基づきますか？',
                options: ['原資産の最終価格', '原資産の平均価格', '原資産の最大価格', 'バリアへの到達可否'],
                correct: 1,
                explanation: 'アジアンオプションは期間中の原資産の平均価格に基づくペイオフ構造を持ちます。算術平均と幾何平均の2種類があります。'
            },
            {
                question: 'モンテカルロ法の収束速度はどれですか？',
                options: ['O(1/N)', 'O(1/√N)', 'O(1/N²)', 'O(log N)'],
                correct: 1,
                explanation: '標準的なモンテカルロ法の収束速度はO(1/√N)です。精度を1桁上げるにはシミュレーション数を100倍にする必要があります。'
            },
            {
                question: '準モンテカルロ法で使用される「低食い違い列」はどれですか？',
                options: ['メルセンヌ・ツイスタ', 'ボックス・ミューラー法', 'Sobol列', 'ガウス分布'],
                correct: 2,
                explanation: 'Sobol列は低食い違い列の一つで、擬似乱数よりも空間を均一にカバーするため、モンテカルロの収束速度が向上します。'
            },
            {
                question: '対称変量法（Antithetic Variates）の原理はどれですか？',
                options: ['解析解のある商品で補正する', '乱数Zと-Zのペアを使用する', '重要な領域から多くサンプリングする', '低食い違い列を使用する'],
                correct: 1,
                explanation: '対称変量法は正規乱数Zに加えて-Zでもシミュレーションを行い、負の相関を利用して分散を約半分に削減します。'
            },
            {
                question: 'エキゾチックデリバティブの価格計算にモンテカルロ法が必要な理由はどれですか？',
                options: ['計算が最も速いから', '実装が最も簡単だから', '経路依存型のペイオフに解析解が存在しないことが多いから', '常に正確な値が得られるから'],
                correct: 2,
                explanation: 'バリア、アジアン、ルックバック等の経路依存型オプションは解析解が存在しないことが多く、モンテカルロ法が唯一の実用的な手法となります。'
            }
        ]);
    }
};
