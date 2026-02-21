// ===========================
// Day 96: 銀行システム刷新ケーススタディ
// ===========================
window.Day96 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏦 ケース概要：地方銀行のコアバンキング刷新</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 プロジェクト概要</div>
                    <p><strong>クライアント</strong>：地方銀行A行（預金残高5兆円、顧客数100万人）</p>
                    <p><strong>課題</strong>：30年前のCOBOL勘定系システムの維持限界</p>
                    <p><strong>期間</strong>：4年（計画1年 + 開発2年 + 移行1年）</p>
                    <p><strong>予算</strong>：300億円</p>
                    <p><strong>体制</strong>：ピーク時500名</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 プロジェクトの構造</h2>
                <table class="styled-table">
                    <thead><tr><th>フェーズ</th><th>期間</th><th>主な作業</th><th>成果物</th></tr></thead>
                    <tbody>
                        <tr><td><strong>企画</strong></td><td>6ヶ月</td><td>現状分析、RFP作成、ベンダー選定</td><td>プロジェクト計画書</td></tr>
                        <tr><td><strong>要件定義</strong></td><td>6ヶ月</td><td>業務フロー整理、非機能要件定義</td><td>要件定義書</td></tr>
                        <tr><td><strong>基本設計</strong></td><td>6ヶ月</td><td>アーキテクチャ設計、外部設計</td><td>基本設計書</td></tr>
                        <tr><td><strong>詳細設計・開発</strong></td><td>12ヶ月</td><td>プログラム設計、コーディング</td><td>ソースコード</td></tr>
                        <tr><td><strong>テスト</strong></td><td>6ヶ月</td><td>単体/結合/総合/受入テスト</td><td>テスト報告書</td></tr>
                        <tr><td><strong>移行・本番</strong></td><td>12ヶ月</td><td>データ移行、並行稼働、切替</td><td>本番システム</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⚠️ 発生した課題と対応</h2>
                <table class="styled-table">
                    <thead><tr><th>課題</th><th>影響</th><th>対応策</th><th>教訓</th></tr></thead>
                    <tbody>
                        <tr><td><strong>暗黙知の業務ロジック</strong></td><td>要件漏れ→手戻り</td><td>現行ソースのリバースエンジニアリング</td><td>ドキュメント化の重要性</td></tr>
                        <tr><td><strong>データ移行の複雑さ</strong></td><td>データ不整合</td><td>移行リハーサルを5回実施</td><td>早期のデータ品質確認</td></tr>
                        <tr><td><strong>ステークホルダー調整</strong></td><td>要件変更の頻発</td><td>変更管理委員会の設置</td><td>ガバナンスの仕組み化</td></tr>
                        <tr><td><strong>規制対応</strong></td><td>金融庁への報告義務</td><td>専任のコンプラチーム</td><td>規制をプロジェクト計画に組込</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 このケースから学ぶこと</div>
                    <p>・<strong>勘定系刷新は最も難易度が高い</strong>金融ITプロジェクト</p>
                    <p>・<strong>技術だけでなく業務理解</strong>と組織マネジメントが成功の鍵</p>
                    <p>・<strong>移行戦略（ビッグバン or 段階的）</strong>の選択はプロジェクトの命運を分ける</p>
                    <p>・<strong>「テストに王道なし」</strong>：十分なテスト工数の確保が必須</p>
                </div>
            </div>
            <div id="day96-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day96-quiz', 'day96-quiz', [
            { question: '勘定系システム刷新で最も難しいフェーズはどれですか？', options: ['企画', '基本設計', 'データ移行・切替', 'テスト'], correct: 2, explanation: 'データ移行は30年分の業務データを新システムに正確に移すフェーズで、データ不整合のリスクが最も高いです。' },
            { question: '暗黙知の業務ロジックへの対策はどれですか？', options: ['無視する', '現行ソースのリバースエンジニアリング', '新しく設計する', 'ユーザーに聞かない'], correct: 1, explanation: '長年の運用で蓄積された暗黙知は、現行システムのソースコードから業務ロジックを抽出して文書化します。' },
            { question: '変更管理委員会の目的はどれですか？', options: ['コストを増やす', '要件変更を適切に管理・承認する', 'メンバーを増やす', '開発速度を下げる'], correct: 1, explanation: '変更管理委員会は要件変更の影響を評価し、承認プロセスを通じてスコープクリープを防止します。' },
            { question: '移行リハーサルを複数回行う理由はどれですか？', options: ['時間が余っている', 'データ移行の精度と手順を確認し問題を事前発見', '義務だから', '予算消化'], correct: 1, explanation: '移行リハーサルを繰り返すことで、データ変換の精度、所要時間、手順の問題を事前に発見・修正できます。' },
            { question: 'ビッグバン移行の最大のリスクはどれですか？', options: ['コストが安い', '切替時に全機能が一斉に変わるため影響範囲が大きい', '時間がかかる', 'テストが不要'], correct: 1, explanation: 'ビッグバン移行は全機能を一度に切り替えるため、問題発生時の影響範囲が極めて大きくなります。' }
        ]);
    }
};
