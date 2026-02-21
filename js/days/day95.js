// ===========================
// Day 95: 生成AI・LLMの金融活用
// ===========================
window.Day95 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🧠 生成AIの進化</h2>
                <table class="styled-table">
                    <thead><tr><th>モデル</th><th>開発元</th><th>特徴</th><th>パラメータ数</th></tr></thead>
                    <tbody>
                        <tr><td><strong>GPT-4</strong></td><td>OpenAI</td><td>マルチモーダル、高精度</td><td>推定数兆</td></tr>
                        <tr><td><strong>Claude</strong></td><td>Anthropic</td><td>安全性重視、長文処理</td><td>非公開</td></tr>
                        <tr><td><strong>Gemini</strong></td><td>Google</td><td>マルチモーダル、検索統合</td><td>非公開</td></tr>
                        <tr><td><strong>Llama</strong></td><td>Meta</td><td>オープンソース</td><td>7B〜405B</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>💹 金融での生成AI活用</h2>
                <table class="styled-table">
                    <thead><tr><th>活用領域</th><th>内容</th><th>効果</th><th>リスク</th></tr></thead>
                    <tbody>
                        <tr><td><strong>レポート自動生成</strong></td><td>市場分析、リサーチレポート</td><td>生産性10倍</td><td>ハルシネーション</td></tr>
                        <tr><td><strong>顧客対応</strong></td><td>AIアドバイザー、FAQ</td><td>24/7対応</td><td>誤った金融アドバイス</td></tr>
                        <tr><td><strong>コード生成</strong></td><td>金融システムのコーディング支援</td><td>開発速度向上</td><td>セキュリティ脆弱性</td></tr>
                        <tr><td><strong>規制文書分析</strong></td><td>規制変更の影響分析</td><td>コンプライアンスコスト削減</td><td>解釈の正確性</td></tr>
                        <tr><td><strong>リスクシナリオ生成</strong></td><td>ストレステストシナリオ作成</td><td>多様なシナリオ</td><td>現実性の検証</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⚙️ 実装パターン</h2>
                <table class="styled-table">
                    <thead><tr><th>パターン</th><th>内容</th><th>メリット</th></tr></thead>
                    <tbody>
                        <tr><td><strong>RAG</strong></td><td>外部知識を検索して組み合わせ</td><td>最新情報の反映、ハルシネーション軽減</td></tr>
                        <tr><td><strong>ファインチューニング</strong></td><td>ドメイン特化のモデル調整</td><td>専門性の向上</td></tr>
                        <tr><td><strong>プロンプトエンジニアリング</strong></td><td>指示の最適化</td><td>低コストで精度向上</td></tr>
                        <tr><td><strong>エージェント</strong></td><td>AIが自律的にタスクを実行</td><td>複雑なワークフロー自動化</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 金融での生成AI利用の注意点</div>
                    <p>・<strong>ハルシネーション</strong>：もっともらしい嘘を出力するリスク</p>
                    <p>・<strong>データセキュリティ</strong>：機密情報をLLMに送信しない</p>
                    <p>・<strong>バイアス</strong>：学習データの偏りによる不公平な出力</p>
                    <p>・<strong>著作権</strong>：生成コンテンツの権利帰属</p>
                    <p>・<strong>Human in the Loop</strong>：最終判断は人間が行う</p>
                </div>
            </div>
            <div id="day95-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day95-quiz', 'day95-quiz', [
            { question: 'RAGの目的はどれですか？', options: ['モデルを軽量化する', '外部知識を検索して生成精度を向上させる', '画像を生成する', 'モデルを学習させる'], correct: 1, explanation: 'RAG（Retrieval-Augmented Generation）は外部の知識ベースから関連情報を検索し、生成AIに組み合わせることでハルシネーションを軽減します。' },
            { question: 'ハルシネーションとは何ですか？', options: ['AIが美しい画像を生成する', 'AIがもっともらしい嘘を出力する', 'AIが高速に処理する', 'AIが学習する'], correct: 1, explanation: 'ハルシネーションは生成AIが事実に基づかない、しかしもっともらしい情報を生成してしまう現象です。' },
            { question: 'プロンプトエンジニアリングの利点はどれですか？', options: ['モデルの再学習が必要', '低コストでAIの出力品質を向上', 'ハードウェアが必要', '時間がかかる'], correct: 1, explanation: 'プロンプトエンジニアリングはモデルを変更せず、指示（プロンプト）の工夫だけで出力品質を向上させる低コスト手法です。' },
            { question: '金融でLLMを使う際に最も注意すべきことはどれですか？', options: ['速度', '機密情報の漏洩とハルシネーション', 'デザイン', 'ストレージ'], correct: 1, explanation: '金融では機密データをLLMに送信するリスクと、ハルシネーションによる誤った情報の提供が最大のリスクです。' },
            { question: 'Human in the Loopの意味はどれですか？', options: ['AIが全てを決定する', '最終判断に人間が介在する', 'ループ処理', '自動化の排除'], correct: 1, explanation: 'Human in the Loopは AIの出力を人間がレビュー・承認するプロセスで、特に金融の重要判断では必須です。' }
        ]);
    }
};
