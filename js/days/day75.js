// ===========================
// Day 75: 金融AI・機械学習活用
// ===========================
window.Day75 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💹 金融におけるAI活用マップ</h2>
                <table class="styled-table">
                    <thead><tr><th>領域</th><th>AI活用</th><th>使用技術</th><th>効果</th></tr></thead>
                    <tbody>
                        <tr><td><strong>不正検知</strong></td><td>異常取引のリアルタイム検出</td><td>異常検知、グラフNN</td><td>検出率向上、誤検知削減</td></tr>
                        <tr><td><strong>信用スコアリング</strong></td><td>融資審査の自動化</td><td>XGBoost、ロジスティック回帰</td><td>審査速度10倍</td></tr>
                        <tr><td><strong>アルゴトレード</strong></td><td>自動売買戦略</td><td>強化学習、時系列モデル</td><td>ミリ秒単位の判断</td></tr>
                        <tr><td><strong>NLP</strong></td><td>ニュース・決算書の分析</td><td>BERT、GPT</td><td>センチメント分析</td></tr>
                        <tr><td><strong>リスク管理</strong></td><td>VaR計算、ストレステスト</td><td>モンテカルロ、深層学習</td><td>計算高速化</td></tr>
                        <tr><td><strong>顧客対応</strong></td><td>チャットボット、FAQ</td><td>生成AI、RAG</td><td>24時間対応</td></tr>
                        <tr><td><strong>コンプライアンス</strong></td><td>規制文書の自動チェック</td><td>NLP、ルールエンジン</td><td>人的ミス削減</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🔍 説明可能AI（XAI）</h2>
                <p>金融では<strong>「なぜその判断をしたか」の説明が規制上必須</strong>です。</p>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>説明方法</th><th>用途</th></tr></thead>
                    <tbody>
                        <tr><td><strong>SHAP</strong></td><td>各特徴量の貢献度を定量化</td><td>個別予測の要因説明</td></tr>
                        <tr><td><strong>LIME</strong></td><td>局所的な線形近似で説明</td><td>個別ケースの解釈</td></tr>
                        <tr><td><strong>特徴量重要度</strong></td><td>モデル全体で重要な変数</td><td>モデルの傾向把握</td></tr>
                        <tr><td><strong>Attention可視化</strong></td><td>モデルが注目した部分</td><td>テキスト分析の解釈</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⚖️ AI倫理とガバナンス</h2>
                <table class="styled-table">
                    <thead><tr><th>課題</th><th>内容</th><th>対策</th></tr></thead>
                    <tbody>
                        <tr><td><strong>公平性</strong></td><td>特定属性への差別的出力</td><td>バイアス検出・緩和ツール</td></tr>
                        <tr><td><strong>透明性</strong></td><td>ブラックボックス問題</td><td>XAI手法の導入</td></tr>
                        <tr><td><strong>堅牢性</strong></td><td>攻撃・異常入力への耐性</td><td>敵対的検証、入力バリデーション</td></tr>
                        <tr><td><strong>プライバシー</strong></td><td>個人データの保護</td><td>差分プライバシー、連合学習</td></tr>
                        <tr><td><strong>ガバナンス</strong></td><td>モデルのライフサイクル管理</td><td>MLOps、モデルレジストリ</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 金融AI開発者の心得</div>
                    <p>・<strong>精度だけでなく説明可能性</strong>を重視する</p>
                    <p>・<strong>バックテストの限界</strong>を理解した上で活用する</p>
                    <p>・<strong>人間の判断</strong>を完全に置き換えるのではなく補助する</p>
                    <p>・<strong>継続的な監視</strong>とモデルの更新を仕組み化する</p>
                </div>
            </div>
            <div id="day75-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day75-quiz', 'day75-quiz', [
            { question: 'SHAPの目的はどれですか？', options: ['モデルの学習速度向上', '各特徴量の予測への貢献度を定量化', 'データの前処理', 'モデルの圧縮'], correct: 1, explanation: 'SHAPはゲーム理論に基づき、各特徴量が個別の予測にどの程度貢献しているかを定量的に示します。' },
            { question: '金融でAIモデルの説明可能性が重要な理由はどれですか？', options: ['処理速度が上がる', '規制当局への説明義務がある', 'データが少なくて済む', 'コストが下がる'], correct: 1, explanation: '金融規制では融資判断などにAIを使う場合、なぜその決定をしたか説明できることが求められます。' },
            { question: 'RAG（Retrieval-Augmented Generation）の特徴はどれですか？', options: ['画像生成に特化', '外部知識を検索して生成AIに組み合わせる', 'データを圧縮する', 'モデルを軽量化する'], correct: 1, explanation: 'RAGは生成AIに外部のドキュメントや知識ベースから情報を検索して組み合わせ、より正確な回答を生成する手法です。' },
            { question: '連合学習（Federated Learning）の利点はどれですか？', options: ['学習速度が速い', 'データを共有せずにモデルを学習できる', 'モデルが小さくなる', 'GPUが不要'], correct: 1, explanation: '連合学習は各機関のデータをその場に留めたまま、モデルのパラメータのみを共有して学習する手法でプライバシーを保護します。' },
            { question: 'MLOpsの目的はどれですか？', options: ['機械学習の研究推進', 'MLモデルのライフサイクルを運用管理する', 'データの収集を自動化', '新しいアルゴリズムの開発'], correct: 1, explanation: 'MLOpsはモデルの開発、デプロイ、監視、再学習のライフサイクルを体系的に管理するための実践です。' }
        ]);
    }
};
