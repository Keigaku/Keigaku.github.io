// ===========================
// Day 98: フィンテック企業のDX支援ケーススタディ
// ===========================
window.Day98 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🚀 ケース概要：保険会社のDX推進</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 プロジェクト概要</div>
                    <p><strong>クライアント</strong>：中堅生命保険会社B社</p>
                    <p><strong>課題</strong>：紙ベースの契約手続き、平均7日間の査定、若年層の顧客減少</p>
                    <p><strong>目標</strong>：契約手続きのデジタル化、査定のAI自動化、モバイルアプリ提供</p>
                    <p><strong>期間</strong>：2年（3フェーズに分割）</p>
                    <p><strong>予算</strong>：20億円</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 DX推進の3フェーズ</h2>
                <table class="styled-table">
                    <thead><tr><th>フェーズ</th><th>期間</th><th>内容</th><th>KPI</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Phase 1: デジタル基盤</strong></td><td>6ヶ月</td><td>APIプラットフォーム構築、データ基盤整備</td><td>API化率 50%</td></tr>
                        <tr><td><strong>Phase 2: 顧客体験</strong></td><td>8ヶ月</td><td>モバイルアプリ、オンライン契約、マイページ</td><td>オンライン契約率 30%</td></tr>
                        <tr><td><strong>Phase 3: AI活用</strong></td><td>10ヶ月</td><td>AI査定、チャットボット、レコメンド</td><td>査定時間 80%削減</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📈 成果と教訓</h2>
                <table class="styled-table">
                    <thead><tr><th>指標</th><th>Before</th><th>After</th><th>改善率</th></tr></thead>
                    <tbody>
                        <tr><td><strong>契約手続き時間</strong></td><td>7日間</td><td>即日〜1日</td><td>85%削減</td></tr>
                        <tr><td><strong>査定時間</strong></td><td>5日間</td><td>1日</td><td>80%削減</td></tr>
                        <tr><td><strong>顧客満足度</strong></td><td>65点</td><td>82点</td><td>26%向上</td></tr>
                        <tr><td><strong>20代契約数</strong></td><td>月100件</td><td>月350件</td><td>250%増加</td></tr>
                        <tr><td><strong>営業員の工数</strong></td><td>事務作業60%</td><td>事務作業25%</td><td>提案時間が倍増</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 DX成功のポイント</div>
                    <p>・<strong>経営者のコミットメント</strong>が最重要（CxOレベルの推進）</p>
                    <p>・<strong>「デジタル化≠DX」</strong>：業務プロセス自体を変革する</p>
                    <p>・<strong>アジャイル×ウォーターフォール</strong>のハイブリッド</p>
                    <p>・<strong>チェンジマネジメント</strong>：現場の抵抗を丁寧に解消</p>
                    <p>・<strong>小さな成功体験</strong>（Quick Win）でモメンタム作り</p>
                </div>
            </div>
            <div id="day98-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day98-quiz', 'day98-quiz', [
            { question: 'DXで最も重要な成功要因はどれですか？', options: ['最新技術の導入', '経営者のコミットメント', '大量の予算', '外部コンサルタント'], correct: 1, explanation: 'DXの成功には経営トップが変革の必要性を理解し、全社的にコミットすることが最も重要です。' },
            { question: '「デジタル化≠DX」の意味はどれですか？', options: ['デジタル化は不要', '既存業務の電子化だけでは真のDXではない', 'DXは簡単', 'デジタル化とDXは同じ'], correct: 1, explanation: '単に紙を電子化するのではなく、業務プロセスやビジネスモデル自体を変革することがDXの本質です。' },
            { question: 'Quick Winが重要な理由はどれですか？', options: ['予算を消化する', '早期の成功体験で組織のモメンタムを作る', '時間を稼ぐ', 'KPIを達成する'], correct: 1, explanation: 'Quick Win（短期間での小さな成功）は組織の変革に対する支持を得て、推進力を維持するために重要です。' },
            { question: 'チェンジマネジメントとは何ですか？', options: ['システム変更管理', '組織変革に伴う人や文化の変化を管理する', 'コスト管理', 'スケジュール変更'], correct: 1, explanation: 'チェンジマネジメントは新しいシステムやプロセスの導入に伴う組織文化や人の変化を計画的に管理することです。' },
            { question: 'Phase 1でAPIプラットフォームを最初に構築する理由はどれですか？', options: ['簡単だから', '後続のフェーズの基盤となるから', '安いから', '見た目がよいから'], correct: 1, explanation: 'API基盤はモバイルアプリやAI機能の基盤となるため、最初に構築しておくことで後続の開発を効率化します。' }
        ]);
    }
};
