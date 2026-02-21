// ===========================
// Day 50: 総合振り返りとキャリアアクションプラン
// ===========================
window.Day50 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏁 50日間の学習を振り返る</h2>
                <p>お疲れさまでした！ここまでの50日間で、金融SIerとして活躍するための
                <strong>幅広いスキルセット</strong>を学んできました。最終日の今日は、
                学びを経験として定着させ、今後のキャリアに活かすための振り返りを行います。</p>
                <h3>50日間のカリキュラム全体像</h3>
                <table class="styled-table">
                    <thead><tr><th>セクション</th><th>Day</th><th>テーマ</th><th>得られるスキル</th></tr></thead>
                    <tbody>
                        <tr><td><strong>基礎研修</strong></td><td>1-10</td><td>金融工学・数理基礎</td><td>デリバティブ、確率統計、VaR</td></tr>
                        <tr><td><strong>ボーナス研修</strong></td><td>11-16</td><td>実務応用・規制</td><td>XVA、FX、コンプライアンス</td></tr>
                        <tr><td><strong>応用金融工学</strong></td><td>17-21</td><td>発展的金融理論</td><td>クレジット、ポートフォリオ、HFT</td></tr>
                        <tr><td><strong>PM研修</strong></td><td>22-24</td><td>プロジェクト管理</td><td>WBS、アジャイル、品質管理</td></tr>
                        <tr><td><strong>リーダーシップ</strong></td><td>25-27</td><td>対人スキル</td><td>ファシリテーション、コーチング</td></tr>
                        <tr><td><strong>キャリア発展</strong></td><td>28-29</td><td>キャリア設計</td><td>専門性構築、ネットワーキング</td></tr>
                        <tr><td><strong>経営研修</strong></td><td>30-37</td><td>経営・幹部スキル</td><td>戦略、財務、ガバナンス</td></tr>
                        <tr><td><strong>TOEIC 950点</strong></td><td>38-42</td><td>英語力強化</td><td>Listening、Reading、ビジネス英語</td></tr>
                        <tr><td><strong>技術スキル強化</strong></td><td>43-45</td><td>技術基盤</td><td>セキュリティ、DB、クラウド</td></tr>
                        <tr><td><strong>プロスキル</strong></td><td>46-50</td><td>総合力</td><td>プレゼン、メンタル、トレンド</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🗺️ スキルマップ自己評価</h2>
                <p>以下の各領域について、<strong>5段階で自己評価</strong>してみましょう。
                学習前と学習後の変化を振り返ることで、成長を実感できます。</p>
                <table class="styled-table">
                    <thead><tr><th>スキル領域</th><th>1: 未経験</th><th>3: 基礎レベル</th><th>5: 実務で活躍</th></tr></thead>
                    <tbody>
                        <tr><td><strong>金融工学・デリバティブ</strong></td><td>概念を聞いたことがない</td><td>基本的な仕組みを説明できる</td><td>モデル実装・価格検証ができる</td></tr>
                        <tr><td><strong>リスク管理</strong></td><td>VaRを知らない</td><td>VaRの種類と特徴を説明できる</td><td>リスク計測システムを設計できる</td></tr>
                        <tr><td><strong>プロジェクトマネジメント</strong></td><td>WBSって何？</td><td>小規模チームのタスク管理ができる</td><td>大規模PJのPMができる</td></tr>
                        <tr><td><strong>リーダーシップ</strong></td><td>後輩指導の経験なし</td><td>チームのファシリテーションができる</td><td>組織の変革をリードできる</td></tr>
                        <tr><td><strong>英語力</strong></td><td>TOEIC 600未満</td><td>TOEIC 800前後</td><td>TOEIC 950+、実務で英語使用</td></tr>
                        <tr><td><strong>技術力（DB/クラウド/セキュリティ）</strong></td><td>基礎知識なし</td><td>概念を説明できる</td><td>設計・構築ができる</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📋 個人開発計画（IDP）の作り方</h2>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>内容</th><th>具体例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. ビジョン設定</strong></td><td>3-5年後の理想像</td><td>「金融DXをリードするアーキテクト」</td></tr>
                        <tr><td><strong>2. ギャップ分析</strong></td><td>現在 vs 理想のスキル差</td><td>クラウド設計経験が不足</td></tr>
                        <tr><td><strong>3. 目標設定</strong></td><td>SMART目標で具体化</td><td>「半年以内にAWS SAA取得」</td></tr>
                        <tr><td><strong>4. アクション計画</strong></td><td>具体的な行動と期限</td><td>毎日30分、Udemyで学習</td></tr>
                        <tr><td><strong>5. 定期レビュー</strong></td><td>月次で進捗を確認</td><td>1on1で上司とレビュー</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 SMART目標の例</div>
                    <p>・<strong>S（Specific）</strong>：「AWS Solutions Architect Associateを取得する」</p>
                    <p>・<strong>M（Measurable）</strong>：「合格する」</p>
                    <p>・<strong>A（Achievable）</strong>：「基礎知識はある。Udemyコースを修了」</p>
                    <p>・<strong>R（Relevant）</strong>：「クラウド移行PJにアサイン予定」</p>
                    <p>・<strong>T（Time-bound）</strong>：「2025年6月まで」</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>🚀 次のステップ — おすすめ資格・学習パス</h2>
                <table class="styled-table">
                    <thead><tr><th>方向性</th><th>推奨資格</th><th>推奨学習</th></tr></thead>
                    <tbody>
                        <tr><td><strong>金融専門家</strong></td><td>証券アナリスト、FRM、CFA</td><td>金融工学の論文を読む</td></tr>
                        <tr><td><strong>IT アーキテクト</strong></td><td>AWS SAA/SAP、Azure Solutions</td><td>大規模システム設計の実務経験</td></tr>
                        <tr><td><strong>プロジェクトマネージャー</strong></td><td>PMP、プロジェクトマネージャ試験</td><td>実際のPJ運営経験を積む</td></tr>
                        <tr><td><strong>経営幹部</strong></td><td>MBA、中小企業診断士</td><td>経営書を読む、経営者と対話</td></tr>
                        <tr><td><strong>データサイエンティスト</strong></td><td>統計検定、G検定、E資格</td><td>Kaggle、論文実装</td></tr>
                        <tr><td><strong>グローバル人材</strong></td><td>TOEIC S&W、英検1級、IELTS</td><td>海外カンファレンス参加</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 この50日間はスタートライン</div>
                    <p>・学んだ知識は<strong>実務で使って初めて自分のもの</strong>になる</p>
                    <p>・<strong>週に1つ</strong>、学んだことを実務に適用してみよう</p>
                    <p>・<strong>アウトプット</strong>を増やす（社内発表、ブログ、勉強会）</p>
                    <p>・<strong>同期・仲間</strong>と学びを共有し、切磋琢磨しよう</p>
                    <p>皆さんの金融SIerとしての活躍を応援しています！🎉</p>
                </div>
            </div>
            <div id="day50-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day50-quiz', 'day50-quiz', [
            { question: 'IDP（個人開発計画）の最初のステップは？', options: ['スキル習得', 'ビジョン設定', 'ギャップ分析', '資格取得'], correct: 1, explanation: 'まず3-5年後の理想像（ビジョン）を設定し、そこから逆算してギャップ分析→目標設定と進めます。' },
            { question: 'SMART目標の「M」は何を表しますか？', options: ['Meaningful', 'Measurable', 'Manageable', 'Motivational'], correct: 1, explanation: 'SMART目標のM はMeasurable（測定可能）、つまり達成を客観的に判定できることを意味します。' },
            { question: '学んだ知識を定着させる最も効果的な方法は？', options: ['テキストを再読する', '実務に適用してアウトプットする', 'ノートにまとめる', '資格試験を受ける'], correct: 1, explanation: '知識は実務に適用し、アウトプット（発表、実装、文書化）することで自分のものになります。' },
            { question: 'この50日間のカリキュラムで取り扱っていないテーマはどれですか？', options: ['デリバティブ', 'TOEIC対策', 'サイバーセキュリティ', '料理の基本'], correct: 3, explanation: '金融SIer向けのカリキュラムなので、料理は含まれていません！' },
            { question: '金融DXを推進するアーキテクトに推奨される資格は？', options: ['簿記1級', 'AWS Solutions Architect', '宅建', 'FP3級'], correct: 1, explanation: '金融DX推進にはクラウドアーキテクチャの知識が不可欠で、AWS Solutions Architectが直接的に役立ちます。' }
        ]);
    }
};
