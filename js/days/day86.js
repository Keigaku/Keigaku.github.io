// ===========================
// Day 86: プロジェクトマネジメント
// ===========================
window.Day86 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📋 PM手法の比較</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>特徴</th><th>適した場面</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ウォーターフォール</strong></td><td>計画→設計→実装→テスト→リリース</td><td>要件が明確、規制対応</td><td>勘定系システム</td></tr>
                        <tr><td><strong>アジャイル/スクラム</strong></td><td>2-4週スプリントで反復開発</td><td>変化が多い、フロント台</td><td>モバイルバンキング</td></tr>
                        <tr><td><strong>SAFe</strong></td><td>大規模アジャイルフレームワーク</td><td>大企業の組織横断開発</td><td>全社DX推進</td></tr>
                        <tr><td><strong>PMBOK</strong></td><td>PM知識体系（10の知識エリア）</td><td>体系的管理が必要</td><td>大規模プロジェクト</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 PMBOKの10の知識エリア</h2>
                <table class="styled-table">
                    <thead><tr><th>知識エリア</th><th>内容</th><th>重要ツール</th></tr></thead>
                    <tbody>
                        <tr><td><strong>統合管理</strong></td><td>プロジェクト全体の統合</td><td>プロジェクト憲章</td></tr>
                        <tr><td><strong>スコープ管理</strong></td><td>成果物の範囲定義</td><td>WBS</td></tr>
                        <tr><td><strong>スケジュール管理</strong></td><td>工程と納期管理</td><td>ガントチャート、クリティカルパス</td></tr>
                        <tr><td><strong>コスト管理</strong></td><td>予算策定と管理</td><td>EVM（アーンドバリュー）</td></tr>
                        <tr><td><strong>品質管理</strong></td><td>品質計画と保証</td><td>テスト戦略</td></tr>
                        <tr><td><strong>資源管理</strong></td><td>人員・設備の調達</td><td>RACI図</td></tr>
                        <tr><td><strong>コミュニケーション管理</strong></td><td>情報共有の計画</td><td>報告体系</td></tr>
                        <tr><td><strong>リスク管理</strong></td><td>リスクの特定・対応</td><td>リスクマトリクス</td></tr>
                        <tr><td><strong>調達管理</strong></td><td>外部調達の管理</td><td>RFP、契約管理</td></tr>
                        <tr><td><strong>ステークホルダー管理</strong></td><td>関係者の期待管理</td><td>ステークホルダーマップ</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⚠️ 金融IT プロジェクトの失敗要因</h2>
                <table class="styled-table">
                    <thead><tr><th>失敗要因</th><th>具体例</th><th>対策</th></tr></thead>
                    <tbody>
                        <tr><td><strong>スコープクリープ</strong></td><td>要件が際限なく膨張</td><td>変更管理プロセスの厳格化</td></tr>
                        <tr><td><strong>見積もりの甘さ</strong></td><td>楽観的すぎる工数見積もり</td><td>3点見積もり、過去実績参照</td></tr>
                        <tr><td><strong>コミュニケーション不足</strong></td><td>業務部門とIT部門の認識齟齬</td><td>プロトタイプ・PoC</td></tr>
                        <tr><td><strong>技術的負債</strong></td><td>レガシーシステムとの統合</td><td>段階的移行計画</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 若手PMへのアドバイス</div>
                    <p>・<strong>「No」を言える勇気</strong>：無理なスケジュールは最初に交渉</p>
                    <p>・<strong>リスクは早期に共有</strong>：悪い報告ほど早く</p>
                    <p>・<strong>ステークホルダー管理</strong>が技術以上に重要</p>
                    <p>・<strong>振り返り（レトロスペクティブ）</strong>を必ず実施</p>
                </div>
            </div>
            <div id="day86-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day86-quiz', 'day86-quiz', [
            { question: 'WBSとは何ですか？', options: ['Web-Based System', 'Work Breakdown Structure', 'Wide Band System', 'Workflow Basic Standard'], correct: 1, explanation: 'WBS（Work Breakdown Structure）はプロジェクトの成果物を階層的に分解し、作業範囲を明確にする手法です。' },
            { question: 'スコープクリープとは何ですか？', options: ['スコープの縮小', '要件が際限なく膨張すること', 'スケジュールの前倒し', 'コストの削減'], correct: 1, explanation: 'スコープクリープは変更管理が不十分で要件が際限なく増えていくことで、プロジェクト遅延の主要因です。' },
            { question: 'EVM（Earned Value Management）で使う指標はどれですか？', options: ['ROE, ROA', 'PV, EV, AC', 'CPU, メモリ', 'PER, PBR'], correct: 1, explanation: 'EVMはPV（計画価値）、EV（出来高）、AC（実績コスト）を比較してコスト・スケジュールの進捗を管理します。' },
            { question: 'RACI図のRは何を意味しますか？', options: ['Risk', 'Responsible（実行責任者）', 'Review', 'Report'], correct: 1, explanation: 'RACI図のRはResponsible（実行責任者）で、タスクを実際に実行する担当者を示します。' },
            { question: 'アジャイル開発のスプリントレビューの目的はどれですか？', options: ['次のスプリントを計画する', '完成した成果物をステークホルダーに見せフィードバックを得る', 'バグを修正する', 'メンバーを評価する'], correct: 1, explanation: 'スプリントレビューはスプリントで完成した成果物をデモし、ステークホルダーからフィードバックを得る場です。' }
        ]);
    }
};
