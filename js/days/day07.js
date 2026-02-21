// ===========================
// Day 07: XVAの基礎
// ===========================
window.Day07 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔬 XVAとは</h2>
                <p>XVA（X-Value Adjustment）は、デリバティブ取引の理論価格に対する
                <strong>各種調整項目の総称</strong>です。「X」には様々なアルファベットが入ります。</p>

                <h3>なぜXVAが生まれたか？</h3>
                <p>2008年の金融危機（リーマンショック）以前は、デリバティブ取引において
                取引相手が破綻するリスクはあまり考慮されていませんでした。</p>
                <p>リーマン・ブラザーズの破綻により、<strong>「取引相手が破綻したら、その取引の価値はどうなるのか？」</strong>
                という問題が顕在化し、XVAの概念が急速に発展しました。</p>

                <div class="info-box important">
                    <div class="info-box-title">🔑 XVAは業務の3本柱の一つ</div>
                    <p>XVA計測は私たちの業務の重要な柱です。金融規制の強化に伴い、
                    XVA計算システムの重要性はますます高まっています。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📋 XVAの種類</h2>

                <table class="styled-table">
                    <thead><tr><th>名称</th><th>正式名</th><th>何を調整するか</th></tr></thead>
                    <tbody>
                        <tr><td><strong>CVA</strong></td><td>Credit Valuation Adjustment</td><td>取引相手の信用リスク（デフォルト確率）</td></tr>
                        <tr><td><strong>DVA</strong></td><td>Debit Valuation Adjustment</td><td>自社の信用リスク（自社のデフォルト時の利得）</td></tr>
                        <tr><td><strong>FVA</strong></td><td>Funding Valuation Adjustment</td><td>担保や資金調達のコスト</td></tr>
                        <tr><td><strong>MVA</strong></td><td>Margin Valuation Adjustment</td><td>初期証拠金（IM）の調達コスト</td></tr>
                        <tr><td><strong>KVA</strong></td><td>Capital Valuation Adjustment</td><td>規制資本の維持コスト</td></tr>
                        <tr><td><strong>ColVA</strong></td><td>Collateral Valuation Adjustment</td><td>担保の通貨・種類による影響</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>💳 CVA（Credit Valuation Adjustment）</h2>
                <p>XVAの中で最も基本的かつ重要な調整項目です。</p>

                <h3>CVAの直感的理解</h3>
                <div class="info-box info">
                    <div class="info-box-title">📖 CVAを家庭で例えると</div>
                    <p>友人にお金を貸すとき、「この友人は借りたお金を返してくれるだろうか？」と考えますよね。
                    もし友人が信用できない場合、実質的にはその貸出の価値は下がります。</p>
                    <p>金融でも同じです。取引相手が破綻（デフォルト）する可能性を考慮すると、
                    デリバティブ取引の価値は「理論価格」より低くなります。この差がCVAです。</p>
                </div>

                <h3>CVAの数式</h3>
                <div class="formula-box">
                    CVA ≈ Σ DF(t_i) × EE(t_i) × PD(t_{i-1}, t_i) × LGD<br><br>
                    DF = 割引ファクター<br>
                    EE = 期待エクスポージャー（Expected Exposure）<br>
                    PD = デフォルト確率（Probability of Default）<br>
                    LGD = デフォルト時損失率（Loss Given Default）
                </div>

                <h3>CVA計算の流れ</h3>
                <ol>
                    <li><strong>エクスポージャー計算</strong>：ポートフォリオの将来の期待エクスポージャー（EE）プロファイルを計算</li>
                    <li><strong>デフォルト確率</strong>：取引相手のCDSスプレッドや格付けからデフォルト確率を推定</li>
                    <li><strong>LGD設定</strong>：デフォルト時の回収率に基づく損失率を設定（通常40-60%）</li>
                    <li><strong>CVA計算</strong>：上記の要素を組み合わせてCVAを算出</li>
                </ol>

                <div class="info-box tip">
                    <div class="info-box-title">📌 EE（期待エクスポージャー）とは</div>
                    <p>将来のある時点で、取引相手が破綻した場合に失われる可能性のある金額の期待値です。
                    モンテカルロシミュレーションで市場の将来パスを多数生成し、各パスでのポートフォリオ価値を計算して求めます。</p>
                    <p>これが<strong>CVA計算が非常に計算コストが高い理由</strong>です。「シミュレーションの中でシミュレーションを行う」ような構造になるためです。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🏦 DVAとFVA</h2>

                <h3>DVA（Debit Valuation Adjustment）</h3>
                <p><strong>自社が破綻した場合</strong>に、取引相手に対する支払い義務から解放される利得を反映したものです。
                CVAの「逆」の概念です。</p>
                <ul>
                    <li>CVA = 取引相手のデフォルトリスクによる損失</li>
                    <li>DVA = 自社のデフォルトリスクによる「利得」</li>
                    <li>Bilateral CVA = CVA - DVA</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ DVAの議論</div>
                    <p>「自社の信用が悪化すると利益が増える」という直感に反する性質があり、
                    DVAの会計上の取扱いについては議論が続いています。</p>
                </div>

                <h3>FVA（Funding Valuation Adjustment）</h3>
                <p>デリバティブ取引に伴う<strong>資金調達コスト</strong>を反映する調整です。</p>
                <ul>
                    <li>無担保取引では、金融機関が取引のヘッジに必要な資金を調達するコストが発生</li>
                    <li>このコストは「リスクフリーレート + 自社のクレジットスプレッド」で調達</li>
                    <li>FVAはこの追加コストを取引価格に反映</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>⚙️ XVA計算の技術的課題</h2>
                <p>XVA計算は金融機関のシステムの中でも<strong>最も計算負荷が高い</strong>処理の一つです。</p>

                <h3>主な課題</h3>
                <table class="styled-table">
                    <thead><tr><th>課題</th><th>詳細</th></tr></thead>
                    <tbody>
                        <tr><td><strong>計算量</strong></td><td>モンテカルロシミュレーション × 数万ポジション × 複数シナリオ</td></tr>
                        <tr><td><strong>速度要件</strong></td><td>日次で全ポートフォリオのXVAを計算する必要</td></tr>
                        <tr><td><strong>高速化技術</strong></td><td>GPU計算、近似手法（AAD等）、分散コンピューティング</td></tr>
                        <tr><td><strong>モデルリスク</strong></td><td>使用するモデルの選択が結果に大きく影響</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">📌 私たちの技術的貢献</div>
                    <p>XVA計算の高速化・効率化は、私たちのシステム開発の重要なテーマです。
                    C++やGPUプログラミング等の高性能計算技術が求められる理由がここにあります。</p>
                </div>
            </div>

            <div id="day07-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // Quiz
        QuizEngine.render('day07-quiz', 'day07-quiz', [
            {
                question: 'XVAの「X」の部分に入る最も基本的な調整項目はどれですか？',
                options: ['FVA', 'MVA', 'CVA', 'KVA'],
                correct: 2,
                explanation: 'CVA（Credit Valuation Adjustment）が最も基本的かつ重要なXVA項目です。取引相手の信用リスクを反映します。'
            },
            {
                question: 'CVAが金融業界で重要になったきっかけは何ですか？',
                options: [
                    'AI技術の発展',
                    '2008年の金融危機（リーマンショック）',
                    '暗号通貨の登場',
                    'ESG投資の普及'
                ],
                correct: 1,
                explanation: '2008年のリーマン・ブラザーズの破綻により、取引相手のデフォルトリスク（カウンターパーティリスク）が顕在化し、CVAの重要性が急速に認識されました。'
            },
            {
                question: 'CVAの計算式に含まれる「EE（Expected Exposure）」とは何ですか？',
                options: [
                    '取引から得られる期待利益',
                    '取引相手が破綻した場合に失われる可能性のある金額の期待値',
                    '取引のVaR',
                    '市場のボラティリティ'
                ],
                correct: 1,
                explanation: 'EE（期待エクスポージャー）は、将来のある時点で取引相手が破綻した場合に失われる可能性のある金額の期待値です。'
            },
            {
                question: 'DVA（Debit Valuation Adjustment）の直感に反する特徴は？',
                options: [
                    '計算が非常に高速',
                    '取引相手の信用が良いほど大きくなる',
                    '自社の信用が悪化すると利益が増える',
                    '金利変動に無関係'
                ],
                correct: 2,
                explanation: 'DVAは「自社が破綻すると支払い義務から解放される利得」を反映するため、自社の信用が悪化すると利益が増えるという直感に反する性質があります。'
            },
            {
                question: 'XVA計算が非常に計算コストが高い最大の理由は？',
                options: [
                    'データ量が多いから',
                    'モンテカルロシミュレーションの入れ子構造になるため',
                    '為替レートの計算が複雑だから',
                    '会計基準が複雑だから'
                ],
                correct: 1,
                explanation: 'XVA計算では「将来の市場シミュレーション × 各時点でのポートフォリオ再評価」というシミュレーションの入れ子構造になるため、非常に計算コストが高くなります。'
            }
        ]);
    }
};
