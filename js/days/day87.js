// ===========================
// Day 87: コンサルティングスキル
// ===========================
window.Day87 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🧠 論理的思考フレームワーク</h2>
                <table class="styled-table">
                    <thead><tr><th>フレームワーク</th><th>内容</th><th>使い所</th></tr></thead>
                    <tbody>
                        <tr><td><strong>MECE</strong></td><td>モレなくダブりなく分類</td><td>問題の構造化、原因分析</td></tr>
                        <tr><td><strong>ロジックツリー</strong></td><td>問題を階層的に分解</td><td>根本原因の特定</td></tr>
                        <tr><td><strong>仮説思考</strong></td><td>最初に仮説を立てて検証</td><td>効率的な問題解決</td></tr>
                        <tr><td><strong>80:20の法則</strong></td><td>重要な20%に集中する</td><td>優先順位づけ</td></tr>
                        <tr><td><strong>SWOT分析</strong></td><td>強み・弱み・機会・脅威</td><td>戦略立案</td></tr>
                        <tr><td><strong>5つのなぜ</strong></td><td>なぜを5回繰り返す</td><td>根本原因分析</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 分析手法</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>目的</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>3C分析</strong></td><td>Customer/Company/Competitor</td><td>新規サービス企画</td></tr>
                        <tr><td><strong>4P分析</strong></td><td>Product/Price/Place/Promotion</td><td>金融商品のマーケティング</td></tr>
                        <tr><td><strong>バリューチェーン</strong></td><td>事業活動の付加価値分析</td><td>証券会社の業務効率化</td></tr>
                        <tr><td><strong>ファイブフォース</strong></td><td>業界の競争環境分析</td><td>フィンテック参入の脅威分析</td></tr>
                        <tr><td><strong>PEST分析</strong></td><td>政治/経済/社会/技術の外部環境</td><td>規制変更の影響分析</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💬 コミュニケーション技法</h2>
                <table class="styled-table">
                    <thead><tr><th>スキル</th><th>内容</th><th>ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ピラミッドストラクチャ</strong></td><td>結論→理由→根拠の順</td><td>最初に結論を述べる</td></tr>
                        <tr><td><strong>エグゼクティブサマリー</strong></td><td>意思決定者向け1ページ要約</td><td>3分で伝わる資料</td></tr>
                        <tr><td><strong>ファシリテーション</strong></td><td>会議を効果的に進行</td><td>発散→収束の設計</td></tr>
                        <tr><td><strong>ステークホルダー管理</strong></td><td>関係者の期待と影響力管理</td><td>権力/関心マトリクス</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 SIerへの応用</div>
                    <p>・<strong>提案書</strong>：ピラミッドストラクチャで構造化</p>
                    <p>・<strong>要件定義</strong>：MECEで業務をモレなく整理</p>
                    <p>・<strong>障害対応</strong>：5つのなぜで根本原因を特定</p>
                    <p>・<strong>ステアリングコミッティ</strong>：エグゼクティブサマリーで報告</p>
                </div>
            </div>
            <div id="day87-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day87-quiz', 'day87-quiz', [
            { question: 'MECEとは何の略ですか？', options: ['Most Effective Cost Estimation', 'Mutually Exclusive, Collectively Exhaustive', 'Maximum Efficiency, Core Excellence', 'Multiple Entry, Combined Exit'], correct: 1, explanation: 'MECE（Mutually Exclusive, Collectively Exhaustive）は「相互に排他的で全体として網羅的」＝モレなくダブりなくの原則です。' },
            { question: 'ピラミッドストラクチャの最上位に来るのはどれですか？', options: ['データ', '仮説', '結論', '詳細分析'], correct: 2, explanation: 'ピラミッドストラクチャは結論を最上位に置き、その下に理由、さらに下に根拠を配置する構造です。' },
            { question: 'ファイブフォース分析で分析するのはどれですか？', options: ['社内の組織構造', '業界の競争環境', '個人のスキル', '財務諸表'], correct: 1, explanation: 'ファイブフォース分析は業界の5つの競争要因（新規参入、代替品、買い手、売り手、既存競合）を分析しします。' },
            { question: '仮説思考の最大の利点はどれですか？', options: ['常に正解が得られる', '分析の効率が飛躍的に上がる', 'データ不要', 'プレゼンが上手くなる'], correct: 1, explanation: '仮説思考は最初に仮説を立ててから検証するため、膨大なデータの中から必要な情報に絞って効率的に分析できます。' },
            { question: 'SWOTのOは何ですか？', options: ['Organization', 'Opportunity', 'Operation', 'Output'], correct: 1, explanation: 'SWOTのOはOpportunity（機会）で、外部環境における自社にとってのチャンスを分析します。' }
        ]);
    }
};
