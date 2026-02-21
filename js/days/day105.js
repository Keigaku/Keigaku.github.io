// ===========================
// Day 105: 14:00-15:00 クライアント折衝・提案活動
// ===========================
window.Day105 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🤝 14:00 — クライアント折衝の時間</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>午後のクライアントミーティングは、金融SIerの価値を直接示す場です。
                    「出来る社員」は<strong>SPIN話法</strong>でクライアントの潜在ニーズを引き出し、
                    <strong>BATNA</strong>で交渉を有利に進め、<strong>As-Is / To-Be分析</strong>で説得力のある提案を行います。</p>
                </div>
                <h3>🎯 14:00-14:20 — ヒアリング（SPIN話法）</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：SPIN話法</div>
                    <p>4種類の質問を順序立てることで、クライアント自身に課題と解決の必要性を気づかせる営業技法です。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>質問タイプ</th><th>目的</th><th>金融PJでの質問例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>S — Situation<br>（状況質問）</strong></td><td>現状を把握する</td><td>「現在のリスク管理システムはいつ頃導入されたものですか？」</td></tr>
                        <tr><td><strong>P — Problem<br>（問題質問）</strong></td><td>課題を認識させる</td><td>「日次のVaR計算にどのくらい時間がかかっていますか？」</td></tr>
                        <tr><td><strong>I — Implication<br>（示唆質問）</strong></td><td>問題の影響を深堀り</td><td>「計算遅延により、経営判断に影響が出たことはありますか？」</td></tr>
                        <tr><td><strong>N — Need-payoff<br>（解決質問）</strong></td><td>解決の価値を認識させる</td><td>「もし計算時間が1/10になったら、どのような活用が可能になりますか？」</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>⚖️ 14:20-14:40 — 交渉準備（BATNA）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：BATNA / ZOPA</div>
                    <p><strong>BATNA</strong>（Best Alternative To a Negotiated Agreement）= 交渉が決裂した場合の最善の代替案</p>
                    <p><strong>ZOPA</strong>（Zone Of Possible Agreement）= 合意可能な範囲</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>概念</th><th>定義</th><th>金融PJでの例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>BATNA</strong></td><td>交渉決裂時の最善策</td><td>「この案件が取れなくても、B社向け提案を準備済み」→ 無理な値引き不要</td></tr>
                        <tr><td><strong>ZOPA</strong></td><td>双方が合意できる範囲</td><td>当社の最低受注額3000万〜クライアント予算5000万 → 3000-5000万がZOPA</td></tr>
                        <tr><td><strong>留保価格</strong></td><td>これ以上は譲れないライン</td><td>工数800人月以下では品質維持不可 → 800人月が留保価格</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 交渉前の準備チェックリスト</div>
                    <p>・自社のBATNAを明確にしておく（交渉力の源泉）</p>
                    <p>・相手のBATNAを推測する（情報収集がカギ）</p>
                    <p>・ZOPAが存在するか事前に見極める</p>
                    <p>・Win-Winの着地点を複数用意する</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📋 14:40-15:00 — 提案活動（As-Is / To-Be）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：As-Is / To-Be 分析</div>
                    <p>現状（As-Is）と理想像（To-Be）のギャップを明確にし、そのギャップを埋める提案を行うフレームワークです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>要素</th><th>内容</th><th>金融PJでの例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>As-Is（現状）</strong></td><td>今の状態を正確に記述</td><td>VaR計算に4時間、手動Excel集計、属人化した運用</td></tr>
                        <tr><td><strong>To-Be（理想像）</strong></td><td>あるべき姿を描く</td><td>VaR計算30分以内、自動化レポート、標準化運用</td></tr>
                        <tr><td><strong>Gap（ギャップ）</strong></td><td>差分を特定</td><td>計算エンジン刷新、ETL構築、運用手順書整備</td></tr>
                        <tr><td><strong>Solution（解決策）</strong></td><td>ギャップを埋める施策</td><td>3フェーズに分けた段階的導入を提案</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 出来る社員の提案術</div>
                    <p>・提案は<strong>クライアントの言葉</strong>で書く（技術用語を避ける）</p>
                    <p>・<strong>定量的な効果</strong>を示す（「4時間→30分」「年間コスト30%削減」）</p>
                    <p>・<strong>リスクと対策</strong>もセットで提示し、信頼感を醸成する</p>
                    <p>・<strong>Next Action</strong>を明確にして終わる（「来週PoC計画をお持ちします」）</p>
                </div>
            </div>
            <div id="day105-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day105-quiz', 'day105-quiz', [
            { question: 'SPIN話法の「I（Implication）」の目的はどれですか？', options: ['現状を把握する', '課題を認識させる', '問題の影響を深堀りする', '解決の価値を認識させる'], correct: 2, explanation: 'Implication（示唆質問）は、問題を放置した場合の影響や深刻さをクライアント自身に認識させるための質問です。' },
            { question: 'BATNAとは何の略ですか？', options: ['Best Action To Negotiate Agreement', 'Best Alternative To a Negotiated Agreement', 'Business Analysis Technical Notation Architecture', 'Basic Approach To Negotiation Advantage'], correct: 1, explanation: 'BATNAは Best Alternative To a Negotiated Agreement の略で、交渉が決裂した場合の最善の代替案を意味します。' },
            { question: 'As-Is / To-Be分析でGapの次に行うことは何ですか？', options: ['もう一度As-Isを分析する', 'Gapを埋めるSolution（解決策）を提案する', 'クライアントに丸投げする', '競合分析を行う'], correct: 1, explanation: 'Gapを特定したら、そのギャップを埋めるための具体的な解決策（Solution）を提案します。' },
            { question: '提案書で定量的効果を示す理由として最も適切なのはどれですか？', options: ['見栄えが良いから', 'クライアントの意思決定を支援し説得力を高めるため', '計算の練習になるから', '上司に言われたから'], correct: 1, explanation: '「4時間→30分」のような定量効果は、投資対効果の判断材料となりクライアントの意思決定を支援します。' },
            { question: 'ZOPAが存在しない場合、最も適切な対応はどれですか？', options: ['強引に交渉を続ける', '無理な値引きで合意する', '交渉を中断し、条件を見直す', '相手を脅す'], correct: 2, explanation: 'ZOPAが存在しない場合は合意不可能なため、条件を見直すか別の選択肢を検討すべきです。' }
        ]);
    }
};
