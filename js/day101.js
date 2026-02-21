// ===========================
// Day 101: 09:00-10:00 朝のルーティン — 情報収集とタスク整理
// ===========================
window.Day101 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🌅 09:00 — 出社・朝の立ち上げ</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>金融ビジネスエンジニアリング部 第三グループの「出来る社員」は、朝の1時間をどう使うかで1日の生産性が決まることを知っています。
                    ここでは<strong>情報収集→優先度判断→タスク整理</strong>の一連のフレームワークを身につけます。</p>
                </div>
                <h3>☕ 09:00-09:10 — 挨拶と環境セットアップ</h3>
                <table class="styled-table">
                    <thead><tr><th>行動</th><th>ポイント</th><th>効果</th></tr></thead>
                    <tbody>
                        <tr><td><strong>元気な挨拶</strong></td><td>チーム全員に聞こえる声で「おはようございます」</td><td>心理的安全性の醸成・存在感の確立</td></tr>
                        <tr><td><strong>PC起動・ツール立ち上げ</strong></td><td>Outlook→Teams→Jira→開発環境の順序で起動</td><td>ルーティン化で判断コストをゼロに</td></tr>
                        <tr><td><strong>今日のスケジュール確認</strong></td><td>Outlookカレンダーを開き、MTG時間を確認</td><td>時間のブロッキングで集中時間を確保</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📧 09:10-09:30 — メールチェック（OODA ループ）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：OODA ループ</div>
                    <p><strong>Observe（観察）→ Orient（状況判断）→ Decide（意思決定）→ Act（行動）</strong></p>
                    <p>メール処理にOODAループを適用することで、素早く的確な対応が可能になります。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>OODAステップ</th><th>メール処理での適用</th><th>具体例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Observe</strong></td><td>未読メールを全件ざっと確認（件名・差出人）</td><td>30通の未読 → クライアント5通、社内20通、その他5通</td></tr>
                        <tr><td><strong>Orient</strong></td><td>緊急度×重要度で分類</td><td>クライアントからの障害連絡 → 最優先対応</td></tr>
                        <tr><td><strong>Decide</strong></td><td>対応方針を決定（即返信/後で/委任/削除）</td><td>2分以内で返せるものは即返信</td></tr>
                        <tr><td><strong>Act</strong></td><td>方針に従い実行</td><td>即返信5通、後で対応フラグ3通、委任2通</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 2分ルール（GTDより）</div>
                    <p>2分以内で完了するタスクは<strong>その場で即実行</strong>する。後回しにすると管理コストの方が高くなります。</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📰 09:30-09:45 — 市場・業界情報の収集</h2>
                <p>金融SE として、毎朝のマーケット情報チェックは必須です。「出来る社員」は以下のソースを15分で巡回します。</p>
                <table class="styled-table">
                    <thead><tr><th>情報源</th><th>チェック項目</th><th>業務への影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>日経新聞（電子版）</strong></td><td>金融面・マーケット面のヘッドライン</td><td>クライアント会話のネタ、規制動向の把握</td></tr>
                        <tr><td><strong>Bloomberg / Reuters</strong></td><td>為替・金利・株価の前日終値と海外動向</td><td>システム影響分析（ボラティリティ上昇時の負荷）</td></tr>
                        <tr><td><strong>社内ポータル</strong></td><td>全社通達・部門ニュース・障害情報</td><td>プロジェクトに影響する社内イベントの把握</td></tr>
                        <tr><td><strong>技術ブログ/Qiita</strong></td><td>関連技術の新着トピック（5分だけ）</td><td>新技術のキャッチアップ・提案のネタ</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>📊 09:45-10:00 — タスク整理（4象限マトリクス）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：アイゼンハワー・マトリクス（4象限）</div>
                    <p>全タスクを<strong>「緊急度」×「重要度」</strong>の2軸で整理し、優先順位を明確にします。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>象限</th><th>性質</th><th>行動</th><th>今日の例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>第1象限</strong></td><td>緊急 × 重要</td><td>即座に取り組む</td><td>本番障害対応、今日締切の設計書</td></tr>
                        <tr><td><strong>第2象限</strong></td><td>非緊急 × 重要</td><td>時間をブロックして計画的に</td><td>アーキテクチャ検討、スキルアップ</td></tr>
                        <tr><td><strong>第3象限</strong></td><td>緊急 × 非重要</td><td>委任・効率化</td><td>定例会の議事録作成（テンプレ化）</td></tr>
                        <tr><td><strong>第4象限</strong></td><td>非緊急 × 非重要</td><td>排除・最小化</td><td>不要なCCメールの整理</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 出来る社員のポイント</div>
                    <p>・朝イチで<strong>第2象限（重要だが非緊急）</strong>のタスクに時間をブロックする</p>
                    <p>・Jira/Backlogに今日のタスクを登録し、<strong>見える化</strong>する</p>
                    <p>・1日の終わりにスケジュール通りだったか<strong>振り返る習慣</strong>をつける</p>
                </div>
            </div>
            <div id="day101-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day101-quiz', 'day101-quiz', [
            { question: 'OODAループの正しい順序はどれですか？', options: ['Observe→Orient→Decide→Act', 'Orient→Observe→Act→Decide', 'Act→Decide→Orient→Observe', 'Decide→Act→Observe→Orient'], correct: 0, explanation: 'OODAループは Observe（観察）→ Orient（状況判断）→ Decide（意思決定）→ Act（行動）の順序で回します。' },
            { question: 'GTDの2分ルールとは何ですか？', options: ['2分間休憩を取る', '2分以内で完了するタスクはその場で実行する', '2分でメールを読む', '2分で会議を終わらせる'], correct: 1, explanation: '2分以内で完了するタスクは後回しにせず即実行する方が、管理コストを考えると効率的です。' },
            { question: 'アイゼンハワー・マトリクスで最も時間を投資すべき象限はどれですか？', options: ['第1象限（緊急×重要）', '第2象限（非緊急×重要）', '第3象限（緊急×非重要）', '第4象限（非緊急×非重要）'], correct: 1, explanation: '第2象限（重要だが緊急でない）に計画的に時間を投資することで、第1象限の危機的タスクの発生を予防できます。' },
            { question: '金融SEが毎朝マーケット情報をチェックする最大の理由はどれですか？', options: ['株取引をするため', 'クライアントとの会話や業務影響の把握のため', '上司に報告するため', '新聞記事を書くため'], correct: 1, explanation: '金融SEはクライアントとの信頼関係構築や、マーケット変動によるシステム影響を把握するために情報収集が必要です。' },
            { question: '朝の挨拶を重視する理由として最も適切なものはどれですか？', options: ['社内規則だから', 'チームの心理的安全性を高め、存在感を確立するため', '声を出す練習のため', '上司にアピールするため'], correct: 1, explanation: '挨拶はチームの心理的安全性を高め、コミュニケーションの起点となる重要な行動です。' }
        ]);
    }
};
