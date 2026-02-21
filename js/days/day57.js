// ===========================
// Day 57: 宗教と文化の基礎知識
// ===========================
window.Day57 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🕌 世界の主要宗教</h2>
                <p>グローバルなビジネスでは<strong>宗教と文化の理解</strong>が不可欠です。
                価値観・祝日・食事制限・ビジネス慣行の多くが宗教的背景に根ざしています。</p>
                <table class="styled-table">
                    <thead><tr><th>宗教</th><th>信者数</th><th>核心的教え</th><th>ビジネスへの影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>キリスト教</strong></td><td>約24億人</td><td>神の愛、隣人愛</td><td>日曜休業、クリスマス商戦</td></tr>
                        <tr><td><strong>イスラム教</strong></td><td>約19億人</td><td>六信五行、唯一神アッラー</td><td>イスラム金融（利子禁止）、ハラール</td></tr>
                        <tr><td><strong>ヒンドゥー教</strong></td><td>約12億人</td><td>輪廻転生、カルマ</td><td>カースト制の影響、菜食主義</td></tr>
                        <tr><td><strong>仏教</strong></td><td>約5億人</td><td>四諦八正道、中道</td><td>瞑想・マインドフルネスブーム</td></tr>
                        <tr><td><strong>儒教</strong></td><td>文化圏として広大</td><td>仁義礼智信、五倫</td><td>東アジアのビジネス文化の基盤</td></tr>
                        <tr><td><strong>ユダヤ教</strong></td><td>約1400万人</td><td>律法（トーラー）、選民思想</td><td>安息日（金曜夕〜土曜夕）、金融との歴史的関係</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>💰 イスラム金融</h2>
                <p>世界の金融の約<strong>1%を占め成長中</strong>のイスラム金融は、金融SIerにとって重要な市場です。</p>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>内容</th><th>対応する金融商品</th></tr></thead>
                    <tbody>
                        <tr><td><strong>利子（リバー）禁止</strong></td><td>お金でお金を生むことは禁止</td><td>ムラーバハ（原価加算取引）</td></tr>
                        <tr><td><strong>不確実性（ガラル）禁止</strong></td><td>過度な投機は禁止</td><td>タカフル（相互扶助保険）</td></tr>
                        <tr><td><strong>ハラーム産業への投資禁止</strong></td><td>酒・豚肉・ギャンブル関連不可</td><td>スクーク（イスラム債）</td></tr>
                        <tr><td><strong>利益・損失の共有</strong></td><td>リスクとリターンの分担</td><td>ムシャーラカ（共同出資）</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🌏 文化圏と価値観</h2>
                <table class="styled-table">
                    <thead><tr><th>文化圏</th><th>主な国</th><th>ビジネス文化の特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>アングロサクソン</strong></td><td>米英豪加</td><td>個人主義、成果主義、直接的コミュニケーション</td></tr>
                        <tr><td><strong>大陸ヨーロッパ</strong></td><td>独仏伊</td><td>ワークライフバランス、階層的組織</td></tr>
                        <tr><td><strong>東アジア</strong></td><td>日中韓</td><td>集団主義、長期関係重視、面子</td></tr>
                        <tr><td><strong>南アジア</strong></td><td>印</td><td>関係構築重視、フレキシブルな時間感覚</td></tr>
                        <tr><td><strong>中東</strong></td><td>サウジ、UAE</td><td>信頼関係が最優先、宗教的慣行への配慮</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 グローバルビジネスの心得</div>
                    <p>・<strong>ラマダン期間</strong>はイスラム圏のビジネスペースが変わる</p>
                    <p>・<strong>旧正月</strong>は中華圏の経済活動に大きな影響</p>
                    <p>・<strong>名刺交換</strong>の作法は国によって大きく異なる</p>
                    <p>・<strong>「常識」は文化によって異なる</strong>ことを常に意識する</p>
                </div>
            </div>
            <div id="day57-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day57-quiz', 'day57-quiz', [
            { question: 'イスラム金融で禁止されているものはどれですか？', options: ['株式投資', '利子（リバー）', '不動産投資', '貿易金融'], correct: 1, explanation: 'イスラム教では利子（リバー）は禁止されており、利益・損失共有型の金融商品が用いられます。' },
            { question: '世界最大の信者数を持つ宗教はどれですか？', options: ['イスラム教', 'ヒンドゥー教', 'キリスト教', '仏教'], correct: 2, explanation: 'キリスト教は約24億人の信者を持つ世界最大の宗教です。イスラム教が約19億人で第2位です。' },
            { question: '儒教が最も影響を与えている地域はどれですか？', options: ['中東', '南米', '東アジア', '北欧'], correct: 2, explanation: '儒教は日本・中国・韓国・ベトナムなど東アジアのビジネス文化や社会構造に深い影響を与えています。' },
            { question: 'スクークとは何ですか？', options: ['イスラム式の株式', 'イスラム債', 'イスラム式保険', 'イスラムの祝日'], correct: 1, explanation: 'スクーク（Sukuk）はイスラム法に準拠した債券に相当する金融商品で、利子の代わりに資産収益を分配します。' },
            { question: 'ラマダン期間中のビジネスへの影響はどれですか？', options: ['影響なし', 'ビジネスペースが変わる', '全面的に休業', '株式市場が閉鎖'], correct: 1, explanation: 'ラマダン（断食月）中はイスラム圏で労働時間の短縮やビジネス慣行の変化が見られます。' }
        ]);
    }
};
