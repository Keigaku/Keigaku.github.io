// ===========================
// Day 49: ドキュメンテーション・ナレッジ管理
// ===========================
window.Day49 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📝 なぜドキュメンテーションが重要か</h2>
                <p>金融SIerにとってドキュメンテーションは単なる「おまけ」ではありません。
                <strong>規制対応・監査証跡・保守性の確保</strong>のため、適切な文書作成は業務の中核です。</p>
                <h3>ドキュメントの種類と目的</h3>
                <table class="styled-table">
                    <thead><tr><th>文書</th><th>目的</th><th>読み手</th></tr></thead>
                    <tbody>
                        <tr><td><strong>要件定義書</strong></td><td>「何を作るか」の合意</td><td>クライアント、PM</td></tr>
                        <tr><td><strong>基本設計書</strong></td><td>システム全体のアーキテクチャ</td><td>アーキテクト、開発リーダー</td></tr>
                        <tr><td><strong>詳細設計書</strong></td><td>実装の詳細仕様</td><td>開発者</td></tr>
                        <tr><td><strong>テスト仕様書</strong></td><td>テストの計画と期待結果</td><td>テスター、QA</td></tr>
                        <tr><td><strong>運用手順書</strong></td><td>日常・障害時の操作手順</td><td>運用チーム</td></tr>
                        <tr><td><strong>API仕様書</strong></td><td>インターフェース定義</td><td>連携先、開発者</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>✍️ わかりやすい文書の書き方</h2>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>内容</th><th>悪い例 → 良い例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>結論先行</strong></td><td>最も重要な情報を最初に</td><td>「検討の結果…」→「結論：A案を採用」</td></tr>
                        <tr><td><strong>1文1メッセージ</strong></td><td>一つの文に一つの情報</td><td>長文の複文 → 短文の列挙</td></tr>
                        <tr><td><strong>具体的に</strong></td><td>数値・固有名詞を使う</td><td>「多くの」→「約80%の」</td></tr>
                        <tr><td><strong>読み手を意識</strong></td><td>専門用語のレベルを合わせる</td><td>技術者向け → 経営者向けに翻訳</td></tr>
                        <tr><td><strong>図表の活用</strong></td><td>視覚的に情報を伝える</td><td>文字だけの説明 → フロー図</td></tr>
                    </tbody>
                </table>
                <div class="info-box info">
                    <div class="info-box-title">📘 設計書のチェックポイント</div>
                    <p>・<strong>5W1H</strong>が明確か（What, Why, Who, When, Where, How）</p>
                    <p>・<strong>前提条件</strong>と<strong>制約事項</strong>が記載されているか</p>
                    <p>・<strong>異常系・例外処理</strong>が網羅されているか</p>
                    <p>・<strong>用語の統一</strong>：同じ概念に異なる名称を使っていないか</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📚 ナレッジマネジメント</h2>
                <p>組織の知識を<strong>蓄積・共有・活用</strong>する仕組みです。</p>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>ツール例</th><th>ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Wiki</strong></td><td>Confluence, Notion</td><td>検索可能で構造化された知識ベース</td></tr>
                        <tr><td><strong>テンプレート</strong></td><td>設計書・議事録のひな形</td><td>品質の均一化、作成時間短縮</td></tr>
                        <tr><td><strong>コードコメント</strong></td><td>JSDoc, Javadoc</td><td>WHY（なぜ）を書く、HOWはコードが語る</td></tr>
                        <tr><td><strong>レトロスペクティブ</strong></td><td>KPT, 4Ls</td><td>経験からの学びを制度化</td></tr>
                        <tr><td><strong>勉強会・LT</strong></td><td>社内技術発表</td><td>暗黙知を形式知に変換</td></tr>
                    </tbody>
                </table>
                <h3>SECIモデル（野中郁次郎）</h3>
                <table class="styled-table">
                    <thead><tr><th>プロセス</th><th>知識変換</th><th>例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>共同化（S）</strong></td><td>暗黙知 → 暗黙知</td><td>OJT、ペアプログラミング</td></tr>
                        <tr><td><strong>表出化（E）</strong></td><td>暗黙知 → 形式知</td><td>ベテランのノウハウを文書化</td></tr>
                        <tr><td><strong>連結化（C）</strong></td><td>形式知 → 形式知</td><td>複数文書の体系化・マニュアル化</td></tr>
                        <tr><td><strong>内面化（I）</strong></td><td>形式知 → 暗黙知</td><td>マニュアルを読んで実践で体得</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>🤖 AIを活用した文書作成</h2>
                <table class="styled-table">
                    <thead><tr><th>活用法</th><th>効果</th><th>注意点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ドラフト生成</strong></td><td>初稿作成の大幅な時間短縮</td><td>必ず人間がレビュー・修正</td></tr>
                        <tr><td><strong>文章校正</strong></td><td>誤字脱字・文法チェック</td><td>技術的正確性は人間が確認</td></tr>
                        <tr><td><strong>翻訳</strong></td><td>英語文書の和訳・英訳</td><td>専門用語の訳語を統一</td></tr>
                        <tr><td><strong>要約</strong></td><td>長い議事録やレポートの要約</td><td>重要な詳細が省かれないか確認</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 良いドキュメント文化を作る</div>
                    <p>・<strong>書くことを評価する</strong>：ドキュメント作成を業務として認める</p>
                    <p>・<strong>完璧を求めない</strong>：60点で公開→フィードバックで改善</p>
                    <p>・<strong>定期的な棚卸し</strong>：古い文書の更新・廃止</p>
                    <p>・<strong>検索可能にする</strong>：タグ付け、構造化、命名規則の統一</p>
                </div>
            </div>
            <div id="day49-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day49-quiz', 'day49-quiz', [
            { question: 'コードコメントに書くべき内容はどれですか？', options: ['HOW（どう処理するか）', 'WHY（なぜこの実装なのか）', 'WHAT（何をするか）', 'WHO（誰が書いたか）'], correct: 1, explanation: 'HOWやWHATはコード自体が語ります。コメントはWHY（なぜこの判断をしたか）を記録するのが最も価値があります。' },
            { question: 'SECIモデルの「表出化」とはどのプロセスですか？', options: ['暗黙知を暗黙知に伝える', '暗黙知を形式知に変換する', '形式知を形式知に統合する', '形式知を暗黙知に変換する'], correct: 1, explanation: '表出化はベテランの経験やノウハウ（暗黙知）を文書やマニュアル（形式知）に変換するプロセスです。' },
            { question: '設計書で最も見落としがちなのはどれですか？', options: ['正常系の処理フロー', '異常系・例外処理の記載', 'テーブル定義', '画面設計'], correct: 1, explanation: '正常系は記載されやすいですが、異常系・例外処理の記載が不十分なことが多く、品質問題の原因になります。' },
            { question: 'ナレッジマネジメントで「暗黙知を形式知に変換」する活動はどれですか？', options: ['ペアプロ', '勉強会でのLT発表', '先輩と一緒に作業', 'マニュアルを読む'], correct: 1, explanation: '勉強会やLTは、個人が持つ暗黙知を発表という形式知に変換する「表出化」の典型的な活動です。' },
            { question: 'AIによる文書作成で最も重要な注意点は？', options: ['AIに全てを任せる', '必ず人間がレビュー・修正する', 'AIの出力をそのまま使用する', '機密情報を入力して精度を上げる'], correct: 1, explanation: 'AIは効率的なドラフト生成に有用ですが、正確性・機密性の観点から人間によるレビューが不可欠です。' }
        ]);
    }
};
