// ===========================
// Day 21: 機械学習 × 金融工学
// ===========================
window.Day21 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🤖 金融 × 機械学習のパラダイム</h2>
                <p>機械学習は金融工学に革新的な変化をもたらしています。従来は数理モデル（ブラックショールズ等）に依存していた領域に、
                データ駆動型のアプローチが導入され、<strong>速度・精度・柔軟性</strong>が大幅に向上しています。</p>

                <h3>金融ML応用の主要領域</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>領域</th><th>応用例</th><th>利用技術</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>価格近似</strong></td><td>デリバティブの高速プライシング</td><td>ニューラルネット、GPR</td></tr>
                        <tr><td><strong>リスク計算</strong></td><td>XVA加速、感応度近似</td><td>Deep Learning、AAD + ML</td></tr>
                        <tr><td><strong>異常検知</strong></td><td>不正取引・マーケット異常の検出</td><td>Autoencoder、Isolation Forest</td></tr>
                        <tr><td><strong>自然言語処理</strong></td><td>ニュース感情分析、規制文書解析</td><td>BERT、LLM</td></tr>
                        <tr><td><strong>ポートフォリオ最適化</strong></td><td>動的資産配分</td><td>強化学習、Deep RL</td></tr>
                        <tr><td><strong>時系列予測</strong></td><td>ボラティリティ予測、金利予測</td><td>LSTM、Transformer</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 クオンツにとっての最大の恩恵</div>
                    <p><strong>ニューラルネット価格近似</strong>：モンテカルロに数秒かかる計算を、
                    学習済みNNで<strong>ミリ秒レベル</strong>に高速化。リアルタイムリスク管理が可能に。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🧠 ニューラルネットによる価格近似</h2>

                <h3>基本的なアプローチ</h3>
                <div class="code-block">【学習フェーズ（オフライン）】
1. 入力特徴量を定義
   X = [S₀, K, T, σ, r, ...] （原資産価格、行使価格、満期、ボラ、金利等）

2. ラベル（正解）を準備
   Y = MC価格（十分なパス数で精密に計算）

3. NN（例：4層、各128ニューロン）を学習
   Minimize: Σ (NN(X_i) - Y_i)²

【推論フェーズ（オンライン）】
4. 新しい入力 X_new に対して
   Price ≈ NN(X_new)    ← ミリ秒で完了</div>

                <h3>NNアーキテクチャの選択</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>構造</th><th>適用場面</th><th>注意点</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>FCN（全結合）</strong></td><td>基本的な価格近似</td><td>最も汎用的、入力次元が低い場合</td></tr>
                        <tr><td><strong>Residual Network</strong></td><td>深いネットワーク</td><td>勾配消失問題を緩和</td></tr>
                        <tr><td><strong>LSTM</strong></td><td>時系列依存のある商品</td><td>経路依存型デリバティブに適合</td></tr>
                        <tr><td><strong>Chebyshev NN</strong></td><td>数学的に構造化された近似</td><td>補間精度が高い</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🔍 金融MLの実践上の課題</h2>

                <h3>金融特有のMLの難しさ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>課題</th><th>内容</th><th>対策</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>非定常性</strong></td><td>市場のレジームが変化する</td><td>定期的な再学習、レジーム検出</td></tr>
                        <tr><td><strong>小サンプル</strong></td><td>金融危機データは極めて少ない</td><td>データ拡張、転移学習</td></tr>
                        <tr><td><strong>解釈可能性</strong></td><td>規制当局がブラックボックスを許容しない</td><td>SHAP、LIME、Attention可視化</td></tr>
                        <tr><td><strong>過学習</strong></td><td>過去のパターンが将来にあてはまらない</td><td>交差検証、正則化、ドロップアウト</td></tr>
                        <tr><td><strong>因果推論</strong></td><td>相関と因果の区別が困難</td><td>因果推論フレームワーク</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ モデルリスク管理</div>
                    <p>金融機関では<strong>SR 11-7</strong>（FRBのモデルリスク管理ガイダンス）に基づき、
                    MLモデルにも従来の数理モデルと同等の検証・承認プロセスが求められます。</p>
                    <p>・<strong>独立検証</strong>：開発者以外がモデルの妥当性を検証</p>
                    <p>・<strong>バックテスト</strong>：Out-of-Sample期間での性能検証</p>
                    <p>・<strong>ストレステスト</strong>：極端な市場環境でのモデルの挙動確認</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🛠️ 異常検知の実践</h2>
                <p>金融業界では不正取引、市場操作、システム障害の検出にMLが積極的に活用されています。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>手法</th><th>原理</th><th>適用場面</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Isolation Forest</strong></td><td>異常データは少ない分割で孤立する</td><td>取引パターンの異常検出</td></tr>
                        <tr><td><strong>Autoencoder</strong></td><td>再構成誤差が大きいデータを異常と判定</td><td>時系列データの異常パターン</td></tr>
                        <tr><td><strong>One-Class SVM</strong></td><td>正常データの境界を学習</td><td>新種の不正パターン検出</td></tr>
                        <tr><td><strong>統計的手法</strong></td><td>MAD、Grubbs検定</td><td>価格データの外れ値</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 今後のトレンド</div>
                    <p>・<strong>Diffusion Model</strong>：金融シナリオ生成への応用研究が活発化</p>
                    <p>・<strong>Physics-Informed NN</strong>：BSDEなどの金融PDEを制約として組み込む</p>
                    <p>・<strong>Graph Neural Network</strong>：カウンターパーティ・ネットワークの分析</p>
                    <p>・<strong>LLM（大規模言語モデル）</strong>：規制文書の自動解析、コード生成支援</p>
                </div>
            </div>

            <div id="day21-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day21-quiz', 'day21-quiz', [
            {
                question: 'ニューラルネットを使ったデリバティブ価格近似の最大の利点はどれですか？',
                options: ['モデルリスクがなくなる', 'モンテカルロより正確になる', 'ミリ秒レベルの高速プライシングが可能になる', 'パラメータの自動キャリブレーション'],
                correct: 2,
                explanation: 'NNによる価格近似の最大の利点は速度です。学習済みモデルはミリ秒レベルでの推論が可能で、リアルタイムリスク管理が実現します。'
            },
            {
                question: '金融MLにおける「解釈可能性」の問題への対策で使われる手法はどれですか？',
                options: ['ドロップアウト', 'SHAP/LIME', 'バッチ正規化', 'データ拡張'],
                correct: 1,
                explanation: 'SHAP（SHapley Additive exPlanations）やLIME（Local Interpretable Model-agnostic Explanations）は、MLモデルの予測根拠を説明する手法で、規制対応に重要です。'
            },
            {
                question: 'SR 11-7とは何ですか？',
                options: ['金利モデルの規格', 'FRBのモデルリスク管理ガイダンス', 'データベースの設計標準', 'セキュリティ認証基準'],
                correct: 1,
                explanation: 'SR 11-7はFRB（米連邦準備制度）が発行したモデルリスク管理に関するガイダンスで、MLモデルを含むすべてのモデルに適用されます。'
            },
            {
                question: 'Isolation Forestの異常検知の原理はどれですか？',
                options: ['正常データのクラスタからの距離で判定', '異常データは少ない分割で孤立する', '再構成誤差の大きさで判定', '時系列の変化点を検出'],
                correct: 1,
                explanation: 'Isolation Forestはランダムに特徴量と分割点を選んでデータを分離していき、少ない分割回数で孤立するデータを異常と判定します。'
            },
            {
                question: 'Physics-Informed Neural Network（PINN）が金融で注目されている理由はどれですか？',
                options: ['物理学が金融に応用されるため', 'BSDEなどの金融PDEを制約として組み込めるため', '計算コストが最も低いため', '最も新しいアーキテクチャだから'],
                correct: 1,
                explanation: 'PINNはBlack-Scholes PDEやBSDEなどの金融の偏微分方程式を学習の制約条件として組み込むことで、物理法則（金融の数理構造）を満たす解を得ることができます。'
            }
        ]);
    }
};
