// ===========================
// Day 16: NSSOLの常識
// ===========================
window.Day16 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏢 NSSOL（日鉄ソリューションズ）について</h2>
                <p>私たちが所属するNSSOL（日鉄ソリューションズ株式会社）は、日本製鉄グループのIT企業です。
                会社の成り立ち・事業領域・文化を理解することは、日々の業務を円滑に進めるために不可欠です。</p>

                <div class="info-box info">
                    <div class="info-box-title">📋 会社概要</div>
                    <p>・<strong>正式名称</strong>：日鉄ソリューションズ株式会社（NSSOL / NS Solutions）</p>
                    <p>・<strong>親会社</strong>：日本製鉄株式会社</p>
                    <p>・<strong>設立</strong>：1980年10月</p>
                    <p>・<strong>上場</strong>：東証プライム市場</p>
                    <p>・<strong>従業員</strong>：約7,000名（連結）</p>
                    <p>・<strong>本社</strong>：東京都港区虎ノ門</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>💼 事業領域</h2>
                <p>NSSOLは幅広い業界にITソリューションを提供しています。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>事業セグメント</th><th>主なサービス</th><th>主要顧客</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>鉄鋼ソリューション</strong></td><td>製鉄所の生産管理・制御システム</td><td>日本製鉄グループ</td></tr>
                        <tr><td><strong>産業・流通ソリューション</strong></td><td>ERP導入・SCM・EC基盤</td><td>製造業・小売業</td></tr>
                        <tr><td><strong>金融ソリューション</strong></td><td>リスク管理・トレーディング・決済</td><td>メガバンク・証券会社</td></tr>
                        <tr><td><strong>ITインフラソリューション</strong></td><td>クラウド・セキュリティ・ネットワーク</td><td>全業界</td></tr>
                        <tr><td><strong>ITプラットフォーム</strong></td><td>absonne（クラウドサービス）</td><td>企業のDX推進</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 私たちの所属</div>
                    <p>私たちは<strong>金融ソリューション事業部</strong>に所属し、主にメガバンクのクオンツシステム開発に携わっています。
                    デリバティブの価格計算、リスク管理、XVA計算などのシステムを開発・保守しています。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🌟 NSSOLの強みと特徴</h2>

                <h3>技術力の強み</h3>
                <ul>
                    <li><strong>ミッションクリティカルシステム</strong>：製鉄所の操業管理で培った24時間365日止められないシステムの開発力</li>
                    <li><strong>大規模システム開発</strong>：数百人規模のプロジェクトを管理するノウハウ</li>
                    <li><strong>金融工学×IT</strong>：クオンツ領域での高度な数理モデル実装力</li>
                    <li><strong>研究開発投資</strong>：AI・データサイエンス・量子コンピューティング等の先端技術研究</li>
                </ul>

                <h3>企業文化</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>特徴</th><th>内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>品質へのこだわり</strong></td><td>鉄鋼業由来の「品質第一」の文化が根付いている</td></tr>
                        <tr><td><strong>チームワーク重視</strong></td><td>個人プレーよりチームでの成果を重視</td></tr>
                        <tr><td><strong>技術者尊重</strong></td><td>エンジニアのキャリアパスが充実</td></tr>
                        <tr><td><strong>安定性</strong></td><td>日本製鉄の子会社として財務基盤が安定</td></tr>
                        <tr><td><strong>研修制度</strong></td><td>入社後の技術研修・資格取得支援が手厚い</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📂 プロジェクト体制</h2>
                <p>NSSOLのプロジェクトは一般的に以下のような体制で運営されます。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>役職</th><th>略称</th><th>主な役割</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>プロジェクトマネージャー</strong></td><td>PM</td><td>プロジェクト全体の責任者、進捗・品質・コスト管理</td></tr>
                        <tr><td><strong>プロジェクトリーダー</strong></td><td>PL</td><td>チーム単位のリーダー、技術的な意思決定</td></tr>
                        <tr><td><strong>サブリーダー</strong></td><td>SL</td><td>PLの補佐、チーム内の調整</td></tr>
                        <tr><td><strong>SE（上流）</strong></td><td>SE</td><td>要件定義・基本設計</td></tr>
                        <tr><td><strong>SE（詳細設計）</strong></td><td>SE</td><td>詳細設計・プログラム設計</td></tr>
                        <tr><td><strong>プログラマー</strong></td><td>PG</td><td>コーディング・単体テスト</td></tr>
                    </tbody>
                </table>

                <h3>開発プロセス</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>フェーズ</th><th>成果物</th><th>レビュー</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>要件定義</strong></td><td>要件定義書</td><td>クライアントレビュー</td></tr>
                        <tr><td><strong>基本設計</strong></td><td>基本設計書</td><td>社内レビュー＋クライアントレビュー</td></tr>
                        <tr><td><strong>詳細設計</strong></td><td>詳細設計書</td><td>社内レビュー</td></tr>
                        <tr><td><strong>実装</strong></td><td>ソースコード</td><td>コードレビュー</td></tr>
                        <tr><td><strong>単体テスト</strong></td><td>テスト仕様書・結果</td><td>テストレビュー</td></tr>
                        <tr><td><strong>結合テスト</strong></td><td>テスト仕様書・結果</td><td>品質レビュー</td></tr>
                        <tr><td><strong>総合テスト</strong></td><td>テスト仕様書・結果</td><td>クライアント承認</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 新人として知っておくべきこと</div>
                    <p>・<strong>社内システム</strong>：勤怠管理、プロジェクト工数管理は毎日入力</p>
                    <p>・<strong>セキュリティ</strong>：PCロック、クリアデスクを徹底</p>
                    <p>・<strong>資格支援</strong>：情報処理技術者試験、TOEIC等の受験費用を会社が負担</p>
                    <p>・<strong>メンター制度</strong>：入社後は先輩社員がメンターとしてサポート</p>
                </div>
            </div>

            <div id="day16-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day16-quiz', 'day16-quiz', [
            {
                question: 'NSSOLの親会社はどこですか？',
                options: ['NTTデータ', '日立製作所', '日本製鉄', '野村総合研究所'],
                correct: 2,
                explanation: 'NSSOLの親会社は日本製鉄株式会社です。鉄鋼業で培ったミッションクリティカルシステムの開発力が強みの一つです。'
            },
            {
                question: '私たちが所属する事業部はどれですか？',
                options: ['鉄鋼ソリューション事業部', '産業・流通ソリューション事業部', '金融ソリューション事業部', 'ITインフラソリューション事業部'],
                correct: 2,
                explanation: '私たちは金融ソリューション事業部に所属し、メガバンクのクオンツシステム開発に携わっています。'
            },
            {
                question: 'プロジェクト体制で「PL」の役割はどれですか？',
                options: ['プロジェクト全体の責任者', 'チーム単位のリーダー、技術的意思決定', 'コーディング・単体テスト', 'クライアントとの窓口'],
                correct: 1,
                explanation: 'PL（プロジェクトリーダー）はチーム単位のリーダーとして、技術的な意思決定やチーム内の進捗管理を担います。'
            },
            {
                question: '開発プロセスで「基本設計書」のレビュー対象はどれですか？',
                options: ['コードレビューのみ', '社内レビューのみ', '社内レビュー＋クライアントレビュー', 'テストレビューのみ'],
                correct: 2,
                explanation: '基本設計書は社内レビューに加え、クライアントレビューも実施します。クライアントの要件を正しく反映しているか確認するためです。'
            },
            {
                question: 'NSSOLの企業文化として特徴的なものはどれですか？',
                options: ['個人の成果を最優先する', '品質第一の文化が根付いている', 'マニュアルよりも感覚を重視する', '海外事業が中心'],
                correct: 1,
                explanation: 'NSSOLには鉄鋼業由来の「品質第一」の文化が根付いており、ミッションクリティカルシステム開発における高い品質基準が特徴です。'
            }
        ]);
    }
};
