// ===========================
// Day 85: 個人の資産運用
// ===========================
window.Day85 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💰 資産運用の基本原則</h2>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>内容</th><th>具体例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>長期投資</strong></td><td>時間を味方にする</td><td>30年の積立はリスクを大幅に低減</td></tr>
                        <tr><td><strong>分散投資</strong></td><td>卵を一つのカゴに盛るな</td><td>株式・債券・不動産・海外</td></tr>
                        <tr><td><strong>積立投資</strong></td><td>ドルコスト平均法</td><td>毎月一定額を自動積立</td></tr>
                        <tr><td><strong>低コスト</strong></td><td>手数料は確実なマイナスリターン</td><td>インデックスファンド（信託報酬0.1%以下）</td></tr>
                        <tr><td><strong>税制優遇の活用</strong></td><td>NISA・iDeCoを最大限活用</td><td>非課税枠を先に埋める</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 NISA・iDeCo比較</h2>
                <table class="styled-table">
                    <thead><tr><th>項目</th><th>新NISA（2024年〜）</th><th>iDeCo</th></tr></thead>
                    <tbody>
                        <tr><td><strong>年間上限</strong></td><td>360万円（つみたて120+成長240）</td><td>14.4〜81.6万円（職種で異なる）</td></tr>
                        <tr><td><strong>生涯上限</strong></td><td>1,800万円</td><td>なし（運用額は変動）</td></tr>
                        <tr><td><strong>運用益</strong></td><td>非課税</td><td>非課税</td></tr>
                        <tr><td><strong>拠出時</strong></td><td>税制メリットなし</td><td>全額所得控除</td></tr>
                        <tr><td><strong>引き出し</strong></td><td>いつでも可能</td><td>原則60歳まで不可</td></tr>
                        <tr><td><strong>おすすめ順序</strong></td><td>まずこちらから</td><td>NISAの次に</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🎯 ライフプランと資産配分</h2>
                <table class="styled-table">
                    <thead><tr><th>年代</th><th>リスク許容度</th><th>推奨配分例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>20代</strong></td><td>高い（時間がある）</td><td>株式80% / 債券20%</td></tr>
                        <tr><td><strong>30-40代</strong></td><td>中程度（家族・住宅）</td><td>株式60% / 債券30% / 現金10%</td></tr>
                        <tr><td><strong>50代</strong></td><td>やや低い（退職近い）</td><td>株式40% / 債券50% / 現金10%</td></tr>
                        <tr><td><strong>60代以降</strong></td><td>低い（取り崩し期）</td><td>株式20% / 債券60% / 現金20%</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 若手社会人への資産運用アドバイス</div>
                    <p>・<strong>まず新NISA</strong>：毎月つみたて枠で全世界株インデックス</p>
                    <p>・<strong>生活防衛資金</strong>は月収の6ヶ月分を確保してから投資</p>
                    <p>・<strong>保険は最小限</strong>：独身なら高額療養費制度で十分な場合も</p>
                    <p>・<strong>自己投資が最大のリターン</strong>：スキルアップで生涯年収を増やす</p>
                    <p>・<strong>複利の力</strong>：月3万円×30年×年利5% → 約2,500万円</p>
                </div>
            </div>
            <div id="day85-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day85-quiz', 'day85-quiz', [
            { question: 'ドルコスト平均法の効果はどれですか？', options: ['リターンを最大化する', '購入単価を平均化しタイミングリスクを軽減', '短期で利益を出す', '手数料を無料にする'], correct: 1, explanation: 'ドルコスト平均法は一定額を定期的に投資することで、高値で少なく安値で多く買い、平均取得単価を抑えます。' },
            { question: '新NISAの年間投資上限額はいくらですか？', options: ['120万円', '240万円', '360万円', '500万円'], correct: 2, explanation: '新NISAはつみたて投資枠120万円＋成長投資枠240万円＝年間360万円が上限です。' },
            { question: 'iDeCoの掛金の税制メリットはどれですか？', options: ['税制メリットなし', '全額所得控除', '半額控除', '法人税控除'], correct: 1, explanation: 'iDeCoの掛金は全額が所得控除の対象となり、所得税と住民税が軽減されます。' },
            { question: '20代の資産配分で株式比率が高い理由はどれですか？', options: ['株式が安全だから', '投資期間が長く短期の下落を回復できるから', '債券が買えないから', '税金がかからないから'], correct: 1, explanation: '20代は退職まで30年以上あり、短期の価格変動を長期で回復できるため、高リスク高リターンの株式比率を高くできます。' },
            { question: '投資における「手数料」が重要な理由はどれですか？', options: ['手数料は一時的なもの', '手数料は確実なマイナスリターンだから', '手数料は税控除できる', '手数料は返金される'], correct: 1, explanation: '運用成績は不確実ですが、手数料は確実にリターンを減らします。長期では複利で差が拡大します。' }
        ]);
    }
};
