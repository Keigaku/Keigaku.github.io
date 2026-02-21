// ===========================
// Day 100: 総合演習 — あなたの金融ITキャリアの第一歩
// ===========================
window.Day100 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🎓 100日間の学び総括</h2>
                <p>おめでとうございます！100日間のトレーニングカリキュラムを完了しました。
                ここで学んだ内容を振り返り、今後のキャリアに活かしましょう。</p>
                <table class="styled-table">
                    <thead><tr><th>セクション</th><th>Days</th><th>学んだこと</th></tr></thead>
                    <tbody>
                        <tr><td><strong>金融基礎</strong></td><td>1-10</td><td>金融市場、商品、リスク管理の基礎</td></tr>
                        <tr><td><strong>実務スキル</strong></td><td>11-20</td><td>Excel、SQL、プログラミング基礎</td></tr>
                        <tr><td><strong>金融IT応用</strong></td><td>21-30</td><td>証券システム、決済、フィンテック</td></tr>
                        <tr><td><strong>上級トピック</strong></td><td>31-42</td><td>デリバティブ、規制、リスク管理</td></tr>
                        <tr><td><strong>エグゼクティブ</strong></td><td>43-50</td><td>戦略論、ネゴシエーション、イノベーション</td></tr>
                        <tr><td><strong>世界の知識</strong></td><td>51-60</td><td>歴史、経済、社会、科学</td></tr>
                        <tr><td><strong>リベラルアーツ</strong></td><td>61-70</td><td>哲学、心理学、文学、芸術</td></tr>
                        <tr><td><strong>データサイエンス</strong></td><td>71-75</td><td>Python、分析、ML、可視化、金融AI</td></tr>
                        <tr><td><strong>システム設計</strong></td><td>76-80</td><td>アーキテクチャ、API、DevOps、テスト、性能</td></tr>
                        <tr><td><strong>金融実務</strong></td><td>81-85</td><td>会計、財務モデリング、保険、不動産、資産運用</td></tr>
                        <tr><td><strong>ビジネススキル</strong></td><td>86-90</td><td>PM、コンサル、プレゼン、リーダーシップ、英語</td></tr>
                        <tr><td><strong>先端技術</strong></td><td>91-95</td><td>クラウド、セキュリティ、ブロックチェーン、量子、生成AI</td></tr>
                        <tr><td><strong>ケーススタディ</strong></td><td>96-100</td><td>実践的なプロジェクト事例と総括</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🗺️ 今後のロードマップ</h2>
                <table class="styled-table">
                    <thead><tr><th>期間</th><th>目標</th><th>具体的なアクション</th></tr></thead>
                    <tbody>
                        <tr><td><strong>3ヶ月以内</strong></td><td>基礎固め</td><td>基本情報技術者試験の取得、OJTでの実践</td></tr>
                        <tr><td><strong>6ヶ月以内</strong></td><td>専門性の方向決め</td><td>興味のある分野（開発/PM/インフラ）を探る</td></tr>
                        <tr><td><strong>1年以内</strong></td><td>戦力化</td><td>一人で設計・実装ができるレベル</td></tr>
                        <tr><td><strong>3年以内</strong></td><td>チームリード</td><td>後輩指導、小規模PJ管理</td></tr>
                        <tr><td><strong>5年以内</strong></td><td>スペシャリスト</td><td>T型人材としての専門性確立</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📚 推奨資格ロードマップ</h2>
                <table class="styled-table">
                    <thead><tr><th>時期</th><th>資格</th><th>価値</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1年目</strong></td><td>基本情報技術者、AWS Cloud Practitioner</td><td>IT基礎の証明</td></tr>
                        <tr><td><strong>2-3年目</strong></td><td>応用情報技術者、AWS SAA</td><td>応用力の証明</td></tr>
                        <tr><td><strong>3-5年目</strong></td><td>PMP、証券アナリスト</td><td>専門性の証明</td></tr>
                        <tr><td><strong>5年目〜</strong></td><td>高度情報処理（SA/PM/NW等）</td><td>高度専門性</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🌟 最後に伝えたいこと</div>
                    <p>・<strong>「学び続ける力」が最大の武器</strong>：技術は変わるが、学ぶ力は一生もの</p>
                    <p>・<strong>「T型人材」を目指そう</strong>：金融×IT×αの掛け合わせが市場価値を高める</p>
                    <p>・<strong>失敗を恐れない</strong>：挑戦の数がキャリアを決める</p>
                    <p>・<strong>仲間を大切に</strong>：一人でできることは限られている</p>
                    <p>・<strong>健康第一</strong>：全ての基盤は心身の健康</p>
                    <p style="text-align: center; font-size: 1.3em; margin-top: 20px; font-weight: bold;">
                        🎉 100日間、おめでとうございます！あなたの金融ITキャリアはここから始まります。 🚀
                    </p>
                </div>
            </div>
            <div id="day100-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day100-quiz', 'day100-quiz', [
            { question: '金融IT人材として最も重要な資質はどれですか？', options: ['特定の技術に精通していること', '継続的に学び続ける力', '資格をたくさん持っていること', '残業をいとわないこと'], correct: 1, explanation: '技術は常に変化するため、特定技術よりも新しいことを学び続ける意欲と能力が最大の武器です。' },
            { question: 'T型人材の「T」の横棒は何を表しますか？', options: ['特定の深い専門性', '幅広い知識と経験', '転職経験', 'チーム経験'], correct: 1, explanation: 'T型人材の横棒は幅広い知識・経験を、縦棒は特定分野の深い専門性を表します。' },
            { question: '1年目のSIerエンジニアが最も注力すべきことはどれですか？', options: ['営業スキル', '技術の基礎固めと業務知識の吸収', '管理職への昇進', '副業'], correct: 1, explanation: '1年目は技術力の基礎（プログラミング、システム設計）と金融業務の理解を両方固めることが最優先です。' },
            { question: '100日間のカリキュラムでカバーされていない分野はどれですか？', options: ['データサイエンス', 'リーダーシップ', '料理', 'セキュリティ'], correct: 2, explanation: '当カリキュラムは金融IT人材に必要な知識をカバーしていますが、料理は含まれていません。' },
            { question: '金融IT業界で市場価値を高める最良の方法はどれですか？', options: ['1つの技術だけを極める', '金融×IT×αの掛け合わせ', '転職を繰り返す', '資格だけ取る'], correct: 1, explanation: '金融ドメイン知識、IT技術力、そしてマネジメントやデータサイエンスなどの「α」を掛け合わせることで市場価値が飛躍的に高まります。' }
        ]);
    }
};
