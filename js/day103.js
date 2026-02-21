// ===========================
// Day 103: 11:00-12:00 要件定義・設計レビュー
// ===========================
window.Day103 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📐 11:00 — 要件定義と設計の時間</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>午前中の集中力が高い時間帯は、<strong>要件定義・設計</strong>という最も頭を使う作業に充てます。
                    「出来る社員」は<strong>MECE</strong>と<strong>ロジックツリー</strong>で論理的に分解し、
                    <strong>UML</strong>で可視化して関係者と合意形成を行います。</p>
                </div>
                <h3>🧠 11:00-11:20 — 要件の分解（MECE）</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：MECE（ミーシー）</div>
                    <p><strong>Mutually Exclusive, Collectively Exhaustive</strong></p>
                    <p>「漏れなく、ダブりなく」物事を分解する思考フレームワーク。要件定義の必須スキルです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>意味</th><th>金融システムでの適用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Mutually Exclusive<br>（相互排他）</strong></td><td>各要素が重複しない</td><td>取引の分類：「株式」「債券」「デリバティブ」「外為」（重複なし）</td></tr>
                        <tr><td><strong>Collectively Exhaustive<br>（全体網羅）</strong></td><td>全体を漏れなくカバー</td><td>リスクの分類：市場リスク、信用リスク、流動性リスク、オペレーショナルリスク</td></tr>
                    </tbody>
                </table>
                <h4>❌ MECEでない例 vs ✅ MECEな例</h4>
                <table class="styled-table">
                    <thead><tr><th>テーマ</th><th>❌ NG</th><th>✅ OK</th></tr></thead>
                    <tbody>
                        <tr><td>顧客分類</td><td>「法人」「中小企業」「個人」<br>→ 中小企業は法人に含まれる</td><td>「機関投資家」「事業法人」「個人」「政府系」</td></tr>
                        <tr><td>処理タイミング</td><td>「リアルタイム」「バッチ」「夜間」<br>→ 夜間はバッチの一部</td><td>「リアルタイム」「日中バッチ」「夜間バッチ」「月次バッチ」</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🌳 11:20-11:40 — 問題分解（ロジックツリー）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：ロジックツリー</div>
                    <p>問題や要件をMECEに階層分解して可視化する手法。<strong>Why型・What型・How型</strong>の3種類があります。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>種類</th><th>問いの形</th><th>用途</th><th>金融PJでの例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Why型<br>（原因追究）</strong></td><td>なぜ〇〇か？</td><td>障害原因分析</td><td>「なぜ夜間バッチが遅延したか」→ データ量増加 / SQL性能 / サーバリソース</td></tr>
                        <tr><td><strong>What型<br>（要素分解）</strong></td><td>何が必要か？</td><td>要件の洗い出し</td><td>「市場リスク管理に必要な機能」→ VaR計算 / ストレステスト / レポーティング</td></tr>
                        <tr><td><strong>How型<br>（解決策）</strong></td><td>どうやるか？</td><td>実装方針の検討</td><td>「パフォーマンス改善方法」→ DB最適化 / キャッシュ / 並列処理 / インフラ増強</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📊 11:40-12:00 — 設計の可視化（UML）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：UML（Unified Modeling Language）</div>
                    <p>システム設計を<strong>標準化された図</strong>で可視化する言語。金融SIerでは必須スキルです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>UML図</th><th>用途</th><th>金融PJでの使用場面</th><th>使用タイミング</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ユースケース図</strong></td><td>システムと利用者の関係</td><td>トレーダー・リスク管理者のシステム操作を整理</td><td>要件定義フェーズ</td></tr>
                        <tr><td><strong>シーケンス図</strong></td><td>処理の流れを時系列で表現</td><td>約定→ポジション更新→リスク再計算の流れ</td><td>基本設計フェーズ</td></tr>
                        <tr><td><strong>クラス図</strong></td><td>データ構造と関連</td><td>取引・商品・顧客のエンティティ関係</td><td>詳細設計フェーズ</td></tr>
                        <tr><td><strong>状態遷移図</strong></td><td>状態の変化を表現</td><td>取引の状態管理（新規→承認→約定→決済→完了）</td><td>詳細設計フェーズ</td></tr>
                        <tr><td><strong>アクティビティ図</strong></td><td>業務フローの表現</td><td>日次リスクレポート作成の業務フロー</td><td>業務設計フェーズ</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 出来る社員の設計レビュー術</div>
                    <p>・レビュー前に<strong>「この設計書の目的」「対象読者」「レビュー観点」</strong>を明確にする</p>
                    <p>・指摘は<strong>「事実 → 影響 → 提案」</strong>の順で伝える</p>
                    <p>・「良い点」もフィードバックし、建設的な議論を促す</p>
                    <p>・設計判断には必ず<strong>「なぜこの方式を選んだか」</strong>を記録する（ADR: Architecture Decision Record）</p>
                </div>
            </div>
            <div id="day103-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day103-quiz', 'day103-quiz', [
            { question: 'MECEとは何の略ですか？', options: ['Most Effective, Completely Efficient', 'Mutually Exclusive, Collectively Exhaustive', 'Multiple Examples, Clear Explanation', 'Management Executive Committee Evaluation'], correct: 1, explanation: 'MECEは Mutually Exclusive（相互排他）, Collectively Exhaustive（全体網羅）の略で、「漏れなくダブりなく」を意味します。' },
            { question: '「なぜ夜間バッチが遅延したか」を分析する際に使うロジックツリーのタイプはどれですか？', options: ['What型', 'How型', 'Why型', 'When型'], correct: 2, explanation: 'Why型ロジックツリーは原因を追究するために「なぜ」を繰り返して問題を分解します。' },
            { question: 'シーケンス図の主な用途はどれですか？', options: ['データ構造の表現', '処理の流れを時系列で表現', '状態の変化を表現', '業務フローの表現'], correct: 1, explanation: 'シーケンス図はオブジェクト間のメッセージのやり取りを時系列で表現し、処理の流れを可視化します。' },
            { question: 'ADR（Architecture Decision Record）の主な目的はどれですか？', options: ['コードのバグを記録する', '設計判断の理由を記録する', '勤怠を記録する', 'テスト結果を記録する'], correct: 1, explanation: 'ADRは「なぜこの設計方式を選んだか」という判断理由を記録し、将来の変更時の参考にします。' },
            { question: '設計レビューで指摘する際の適切な順序はどれですか？', options: ['提案→事実→影響', '事実→影響→提案', '影響→提案→事実', '提案→影響→事実'], correct: 1, explanation: '「事実（何が起きているか）→ 影響（どんな問題があるか）→ 提案（どう改善するか）」の順で伝えると建設的です。' }
        ]);
    }
};
