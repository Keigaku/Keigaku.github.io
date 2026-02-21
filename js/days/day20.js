// ===========================
// Day 20: XVA実践と大規模計算
// ===========================
window.Day20 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚙️ XVAの全体像（復習と深掘り）</h2>
                <p>Day 7で基礎を学んだXVAを、実装レベルまで深掘りします。
                XVAは現代のデリバティブ評価において<strong>最も計算負荷が高い</strong>領域の一つです。</p>

                <h3>XVAファミリーの一覧</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>XVA</th><th>正式名称</th><th>計算内容</th><th>計算難度</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>CVA</strong></td><td>Credit Valuation Adjustment</td><td>カウンターパーティの信用リスク</td><td>★★★</td></tr>
                        <tr><td><strong>DVA</strong></td><td>Debit Valuation Adjustment</td><td>自社のデフォルトリスク</td><td>★★★</td></tr>
                        <tr><td><strong>FVA</strong></td><td>Funding Valuation Adjustment</td><td>資金調達コスト</td><td>★★★★</td></tr>
                        <tr><td><strong>ColVA</strong></td><td>Collateral Valuation Adjustment</td><td>担保の影響</td><td>★★★</td></tr>
                        <tr><td><strong>KVA</strong></td><td>Capital Valuation Adjustment</td><td>規制資本コスト</td><td>★★★★★</td></tr>
                        <tr><td><strong>MVA</strong></td><td>Margin Valuation Adjustment</td><td>証拠金コスト</td><td>★★★★</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 XVA計算の核心</div>
                    <p><strong>CVA = Σ EE(t_i) × PD(t_{i-1}, t_i) × LGD × DF(t_i)</strong></p>
                    <p>・<strong>EE（Expected Exposure）</strong>：期待エクスポージャー = 将来時点でのポートフォリオ時価の期待値</p>
                    <p>・<strong>PD（Probability of Default）</strong>：デフォルト確率（CDSスプレッドから算出）</p>
                    <p>・<strong>LGD（Loss Given Default）</strong>：デフォルト時損失率（通常40-60%）</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🏗️ XVA計算アーキテクチャ</h2>

                <h3>計算の流れ</h3>
                <div class="code-block">1. シナリオ生成（Market Scenario Generation）
   - リスクファクター（金利、為替、株価等）の将来シナリオを数千パス生成
   - 計算期間：1年〜30年超

2. エクスポージャー計算（Exposure Calculation）
   - 各シナリオ × 各時点 × 各取引について時価を再計算
   - 典型的な規模：5,000パス × 100時点 × 10,000取引 = 50億回の価格計算

3. アグリゲーション（Aggregation）
   - ネッティングセット単位で集約
   - 担保（CSA）の効果を反映
   - EE、PFE、EPE等のプロファイル計算

4. XVA計算
   - CVA = EE × PD × LGD を全時点で積分
   - 感応度（デルタ、ガンマ）も計算</div>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 「シミュレーション内のシミュレーション」問題</div>
                    <p>XVA感応度計算では、外側のシナリオごとに内側のモンテカルロが必要になる場合があります。
                    これは計算量が爆発する「Nested Monte Carlo」問題と呼ばれます。</p>
                    <p>解決策：<strong>回帰法（Longstaff-Schwartz法の応用）</strong>、<strong>ニューラルネット近似</strong>、<strong>AAD</strong></p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🚀 GPU計算とAAD</h2>

                <h3>GPU活用</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>項目</th><th>CPU</th><th>GPU</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>コア数</strong></td><td>8〜64コア</td><td>数千〜数万コア</td></tr>
                        <tr><td><strong>得意な処理</strong></td><td>逐次的・複雑な分岐</td><td>大量の同一計算の並列実行</td></tr>
                        <tr><td><strong>MC適性</strong></td><td>良好だが限界あり</td><td>パス並列に最適（10〜100倍高速化）</td></tr>
                        <tr><td><strong>開発言語</strong></td><td>C++/C#/Python</td><td>CUDA、OpenCL</td></tr>
                        <tr><td><strong>メモリ制約</strong></td><td>数百GB可能</td><td>GPU VRAM（8〜80GB）に制限</td></tr>
                    </tbody>
                </table>

                <h3>AAD（Adjoint Algorithmic Differentiation）</h3>
                <div class="info-box info">
                    <div class="info-box-title">📘 AADとは</div>
                    <p>自動微分の一種で、<strong>計算コストほぼ一定</strong>で全てのリスクファクターに対する感応度を同時に計算できる技術です。</p>
                    <p>・通常のバンピング法：N個のリスクファクター → N+1回の価格計算が必要</p>
                    <p>・AAD：1回の価格計算（＋アジョイント計算）で全N個の感応度を取得</p>
                    <p>・<strong>計算量削減</strong>：リスクファクターが数千ある場合、数千倍の高速化</p>
                    <p>・実装：QuantLib-AAD、手作りテープ、またはTensorFlow/PyTorch等のADフレームワーク</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🔧 実装のベストプラクティス</h2>
                <table class="styled-table">
                    <thead>
                        <tr><th>カテゴリ</th><th>推奨事項</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>アーキテクチャ</strong></td><td>計算グリッド（分散計算基盤）上で並列実行</td></tr>
                        <tr><td><strong>キャッシュ戦略</strong></td><td>シナリオ・マーケットデータのキャッシュで再計算回避</td></tr>
                        <tr><td><strong>近似手法</strong></td><td>テイラー展開近似、回帰モデル、NN代替モデル</td></tr>
                        <tr><td><strong>インクリメンタル計算</strong></td><td>新規取引の追加分だけを差分計算</td></tr>
                        <tr><td><strong>結果検証</strong></td><td>ベンチマーク商品での精度検証、P&L Explain</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day20-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day20-quiz', 'day20-quiz', [
            {
                question: 'CVA計算の主要な入力データで「EE」とは何ですか？',
                options: ['Estimated Error', 'Expected Exposure', 'Effective Estimate', 'Excess Equity'],
                correct: 1,
                explanation: 'EE（Expected Exposure）は期待エクスポージャーで、将来の各時点におけるポートフォリオの正の時価の期待値です。'
            },
            {
                question: '「Nested Monte Carlo」問題が発生するのはどのような計算ですか？',
                options: ['単純な価格計算', 'XVA感応度計算', 'イールドカーブ構築', 'ヒストリカルVaR'],
                correct: 1,
                explanation: 'XVAの感応度計算では、外側のシナリオ各々について内側のモンテカルロ・シミュレーションが必要となり、計算量が爆発する問題が生じます。'
            },
            {
                question: 'AAD（Adjoint Algorithmic Differentiation）の最大の利点はどれですか？',
                options: ['コードが簡潔になる', 'メモリ使用量が減る', '計算コストほぼ一定で全リスクファクターの感応度を同時計算できる', '乱数の品質が向上する'],
                correct: 2,
                explanation: 'AADは1回の価格計算（＋アジョイント計算）で全てのリスクファクターに対する感応度を同時に取得できます。従来のバンピング法と比べて劇的な高速化が可能です。'
            },
            {
                question: 'KVA（Capital Valuation Adjustment）は何のコストを反映しますか？',
                options: ['信用リスクコスト', '資金調達コスト', '規制資本コスト', '担保管理コスト'],
                correct: 2,
                explanation: 'KVAは取引に対して銀行が積むべき規制資本のコストを反映するXVAです。バーゼルIII規制と密接に関連しています。'
            },
            {
                question: 'GPU計算でXVAを高速化する際の主な制約はどれですか？',
                options: ['コア数が少ない', 'GPU VRAMのメモリ制限', '電力消費が大きい', 'プログラミング言語が限られる'],
                correct: 1,
                explanation: 'GPU計算の主な制約はVRAM（ビデオメモリ）の容量です。大量のシナリオデータやポートフォリオデータをGPUメモリに載せる必要があります。'
            }
        ]);
    }
};
