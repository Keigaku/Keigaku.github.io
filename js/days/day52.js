// ===========================
// Day 52: 金融危機の歴史
// ===========================
window.Day52 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📉 バブルと崩壊の400年史</h2>
                <p>金融危機は<strong>人間の本質的な心理</strong>（欲望と恐怖）から生まれます。
                歴史上のバブルを学ぶことで、次の危機の兆候を察知する力を養います。</p>
                <table class="styled-table">
                    <thead><tr><th>年代</th><th>危機</th><th>原因</th><th>教訓</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1637</strong></td><td>チューリップ・バブル</td><td>投機的熱狂</td><td>バブルは全ての資産で起こり得る</td></tr>
                        <tr><td><strong>1720</strong></td><td>南海泡沫事件</td><td>詐欺的企業への投機</td><td>情報の非対称性の危険</td></tr>
                        <tr><td><strong>1929</strong></td><td>ウォール街大暴落</td><td>過剰なレバレッジ</td><td>信用取引の規制が必要</td></tr>
                        <tr><td><strong>1990</strong></td><td>日本のバブル崩壊</td><td>不動産・株式の過大評価</td><td>金融緩和の出口戦略の重要性</td></tr>
                        <tr><td><strong>1997</strong></td><td>アジア通貨危機</td><td>固定相場制と短期資金依存</td><td>通貨制度の脆弱性</td></tr>
                        <tr><td><strong>2000</strong></td><td>ITバブル崩壊</td><td>テック企業の過大評価</td><td>収益なき成長への過信</td></tr>
                        <tr><td><strong>2008</strong></td><td>リーマン・ショック</td><td>サブプライム・CDS</td><td>金融工学の暴走、規制の不備</td></tr>
                        <tr><td><strong>2020</strong></td><td>コロナ市場混乱</td><td>パンデミックによる経済停止</td><td>中央銀行の超緩和策のリスク</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🔍 リーマン・ショック深掘り</h2>
                <p>2008年の金融危機は金融SIerが<strong>最も理解すべき危機</strong>です。
                現在の金融規制（バーゼルIII等）は全てここから生まれました。</p>
                <table class="styled-table">
                    <thead><tr><th>段階</th><th>出来事</th><th>メカニズム</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. 源流</strong></td><td>サブプライムローンの拡大</td><td>低金利政策 → 住宅への過剰融資</td></tr>
                        <tr><td><strong>2. 増幅</strong></td><td>CDO・CDSの複雑化</td><td>リスクの分散? → 実は集中</td></tr>
                        <tr><td><strong>3. 格付詐欺</strong></td><td>AAA格付けの乱発</td><td>利益相反（格付会社 = 被格付企業顧客）</td></tr>
                        <tr><td><strong>4. 崩壊</strong></td><td>住宅価格下落 → 連鎖破綻</td><td>リーマン破綻 → 世界金融危機</td></tr>
                        <tr><td><strong>5. 対応</strong></td><td>公的資金注入、QE</td><td>TARP、量的緩和、ゼロ金利政策</td></tr>
                    </tbody>
                </table>
                <div class="info-box warning">
                    <div class="info-box-title">⚠️ バブルの共通パターン</div>
                    <p>・<strong>「今回は違う」</strong>という確信</p>
                    <p>・<strong>レバレッジ</strong>の過剰な拡大</p>
                    <p>・<strong>新しい金融商品</strong>へのリスク過小評価</p>
                    <p>・<strong>規制の後追い</strong>：危機が起きてから規制が強化される</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🛡️ 危機後に生まれた規制</h2>
                <table class="styled-table">
                    <thead><tr><th>規制</th><th>内容</th><th>目的</th></tr></thead>
                    <tbody>
                        <tr><td><strong>バーゼルIII</strong></td><td>自己資本比率の強化</td><td>銀行の健全性確保</td></tr>
                        <tr><td><strong>ドッド・フランク法</strong></td><td>デリバティブ規制、ボルカー・ルール</td><td>Too Big to Failの防止</td></tr>
                        <tr><td><strong>中央清算機関</strong></td><td>OTCデリバティブの清算義務</td><td>カウンターパーティリスクの軽減</td></tr>
                        <tr><td><strong>ストレステスト</strong></td><td>銀行の耐久力検査</td><td>危機への備えの定量化</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 金融SIerへの示唆</div>
                    <p>・規制「対応」システムの需要は危機後に急増する</p>
                    <p>・リスク管理システムの高度化は<strong>ビジネスチャンス</strong></p>
                    <p>・歴史を知ることで<strong>次の需要を予測</strong>できる</p>
                </div>
            </div>
            <div id="day52-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day52-quiz', 'day52-quiz', [
            { question: 'リーマン・ショックの直接的な原因となった金融商品はどれですか？', options: ['国債', 'サブプライム住宅ローン関連商品（CDO/CDS）', '株式', '外貨預金'], correct: 1, explanation: 'サブプライムローンを証券化したCDOと、それに対する保険であるCDSの複雑な連鎖が危機を増幅させました。' },
            { question: '日本のバブル崩壊が起きた年はいつですか？', options: ['1985年', '1990年', '1997年', '2000年'], correct: 1, explanation: '日本のバブル経済は1990年に株価・不動産価格の下落とともに崩壊し、「失われた30年」の始まりとなりました。' },
            { question: 'バブルに共通する心理はどれですか？', options: ['「今回こそ危険だ」', '「今回は違う」という確信', '冷静な分析', '慎重な投資'], correct: 1, explanation: '全てのバブルに共通するのは「今回は違う（This time is different）」という集団的確信です。' },
            { question: 'バーゼルIIIの主な目的はどれですか？', options: ['金利の引き下げ', '銀行の自己資本比率の強化', '通貨の統一', '株式市場の活性化'], correct: 1, explanation: 'バーゼルIIIはリーマン・ショックの教訓から、銀行の自己資本比率を引き上げ健全性を確保するための国際的枠組みです。' },
            { question: '1997年のアジア通貨危機の主な原因はどれですか？', options: ['戦争', '固定相場制と短期外貨借入への依存', '自然災害', 'IT化の遅れ'], correct: 1, explanation: 'アジア諸国は固定相場制を採用しながら短期の外貨建て資金に依存しており、投機的攻撃に脆弱でした。' }
        ]);
    }
};
