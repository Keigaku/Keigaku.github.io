// ===========================
// Day 34: 金融DXとテクノロジー戦略
// ===========================
window.Day34 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🌐 金融業界のDX — 全体像</h2>
                <p>DX（デジタルトランスフォーメーション）は単なるIT化ではなく、
                <strong>デジタル技術を活用してビジネスモデル・組織・文化を根本的に変革すること</strong>です。
                金融業界はDXの最前線にあり、経営層はテクノロジーを「道具」ではなく「戦略の中核」として捉える必要があります。</p>

                <h3>金融DXの4段階</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>段階</th><th>内容</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Stage 1: デジタイゼーション</strong></td><td>アナログ → デジタルへの変換</td><td>紙の帳票をPDFに、対面をオンラインに</td></tr>
                        <tr><td><strong>Stage 2: デジタライゼーション</strong></td><td>業務プロセスのデジタル化</td><td>RPA導入、ワークフロー自動化</td></tr>
                        <tr><td><strong>Stage 3: DX</strong></td><td>ビジネスモデルの変革</td><td>APIバンキング、BaaS（Banking as a Service）</td></tr>
                        <tr><td><strong>Stage 4: DX2.0</strong></td><td>エコシステム全体の変革</td><td>金融×非金融の融合、埋込型金融</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 経営層が理解すべきDXの本質</div>
                    <p>DXの成功は<strong>テクノロジーの選択</strong>ではなく<strong>経営のコミットメント</strong>で決まります。
                    ・CIOだけの仕事ではなく、CEO・取締役会レベルの議題</p>
                    <p>・IT予算の80%が「守り」（既存システム保守）に使われている現状をどう変えるか</p>
                    <p>・人材育成・組織変革なしの技術導入は「手段の目的化」になる</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🤖 テクノロジートレンドと金融への応用</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>技術</th><th>金融での活用領域</th><th>経営判断のポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>生成AI / LLM</strong></td><td>文書作成、コード生成、顧客対応</td><td>リスク管理、ガバナンス、倫理面の整備</td></tr>
                        <tr><td><strong>クラウド</strong></td><td>インフラのモダナイゼーション</td><td>マルチクラウド戦略、ベンダーロックイン回避</td></tr>
                        <tr><td><strong>ブロックチェーン</strong></td><td>決済、証券取引、本人確認</td><td>規制対応、既存インフラとの統合</td></tr>
                        <tr><td><strong>量子コンピュータ</strong></td><td>ポートフォリオ最適化、暗号解読リスク</td><td>中長期的な準備（量子耐性暗号等）</td></tr>
                        <tr><td><strong>API/マイクロサービス</strong></td><td>システム連携、オープンバンキング</td><td>アーキテクチャ戦略、技術的負債解消</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🏛️ レガシーモダナイゼーション</h2>
                <p>金融機関の最大の課題の一つが<strong>レガシーシステムの刷新</strong>です。</p>

                <h3>モダナイゼーション戦略</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>戦略</th><th>概要</th><th>リスク</th><th>期間</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>リホスト</strong></td><td>そのままクラウドに移行</td><td>低</td><td>短</td></tr>
                        <tr><td><strong>リプラットフォーム</strong></td><td>一部をクラウド最適化</td><td>中</td><td>中</td></tr>
                        <tr><td><strong>リファクター</strong></td><td>アーキテクチャを再設計</td><td>高</td><td>長</td></tr>
                        <tr><td><strong>リビルド</strong></td><td>ゼロから再構築</td><td>最高</td><td>最長</td></tr>
                        <tr><td><strong>リプレース</strong></td><td>パッケージ/SaaS に置換</td><td>中</td><td>中</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 2025年の崖</div>
                    <p>経産省の「DXレポート」で指摘：レガシーシステムを放置すると<strong>年間最大12兆円の経済損失</strong>が生じる。
                    金融機関のコアバンキングシステムの多くは20年以上前の設計であり、
                    保守要員の退職・技術の陳腐化・セキュリティリスクが深刻化しています。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📋 DXロードマップの策定</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>フェーズ</th><th>期間</th><th>目標</th><th>施策</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Phase 1</strong></td><td>0〜6ヶ月</td><td>Quick Win の創出</td><td>RPA・AI-OCR導入、ペーパーレス化</td></tr>
                        <tr><td><strong>Phase 2</strong></td><td>6〜18ヶ月</td><td>基盤の近代化</td><td>クラウド移行、API基盤構築</td></tr>
                        <tr><td><strong>Phase 3</strong></td><td>18〜36ヶ月</td><td>新サービスの創出</td><td>データ分析基盤、AI活用ユースケース</td></tr>
                        <tr><td><strong>Phase 4</strong></td><td>36ヶ月〜</td><td>エコシステムの構築</td><td>パートナー連携、埋込型金融</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 経営層のDXリーダーシップ</div>
                    <p>・<strong>ビジョンを語る</strong>：「なぜDXなのか」を組織全体に浸透させる</p>
                    <p>・<strong>投資の意思決定</strong>：短期的なROIだけでなく、中長期的な競争力の観点で判断</p>
                    <p>・<strong>人材戦略</strong>：デジタル人材の採用・育成・リスキリング</p>
                    <p>・<strong>失敗を許容する文化</strong>：イノベーションには試行錯誤が不可欠</p>
                </div>
            </div>

            <div id="day34-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day34-quiz', 'day34-quiz', [
            {
                question: 'DX（デジタルトランスフォーメーション）の本質はどれですか？',
                options: ['ITシステムを最新化すること', 'デジタル技術でビジネスモデル・組織・文化を根本的に変革すること', 'ペーパーレス化を進めること', 'クラウドに移行すること'],
                correct: 1,
                explanation: 'DXは単なるIT化やデジタル化ではなく、デジタル技術を活用してビジネスモデル・組織・文化を根本的に変革することです。'
            },
            {
                question: 'DXの成功を左右する最も重要な要素はどれですか？',
                options: ['最新テクノロジーの選択', '大規模な予算', '経営のコミットメントとリーダーシップ', '外部コンサルタントの活用'],
                correct: 2,
                explanation: '技術や予算も重要ですが、DXの成否は経営層のコミットメント、ビジョン共有、組織文化変革のリーダーシップで決まります。'
            },
            {
                question: '「2025年の崖」で指摘されている年間の経済損失は最大いくらですか？',
                options: ['1兆円', '5兆円', '12兆円', '100兆円'],
                correct: 2,
                explanation: '経産省のDXレポートでは、レガシーシステムを放置した場合、最大年間12兆円の経済損失が生じると警告しています。'
            },
            {
                question: 'レガシーモダナイゼーションで最もリスクが低い戦略はどれですか？',
                options: ['リホスト', 'リファクター', 'リビルド', 'リプレース'],
                correct: 0,
                explanation: 'リホストは既存システムをそのままクラウドに移行する方法で、アーキテクチャの変更を伴わないため最もリスクが低い戦略です。'
            },
            {
                question: '「埋込型金融（Embedded Finance）」とはどのような概念ですか？',
                options: ['金融機関のシステムを統合すること', '非金融サービスの中に金融機能を組み込むこと', '金融商品をパッケージ化すること', 'ATMの数を増やすこと'],
                correct: 1,
                explanation: '埋込型金融はECサイトやSaaS等の非金融サービスの中に決済・融資・保険などの金融機能を組み込む新しいビジネスモデルです。'
            }
        ]);
    }
};
