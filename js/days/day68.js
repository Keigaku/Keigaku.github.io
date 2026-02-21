// ===========================
// Day 68: 行動経済学と認知バイアス
// ===========================
window.Day68 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🧠 行動経済学とは</h2>
                <p>伝統的な経済学は「人間は合理的に行動する」と仮定しますが、
                行動経済学は<strong>人間の認知の歪み（バイアス）</strong>を研究し、
                より現実的な経済行動の理解を目指します。</p>
                <h3>主要な理論</h3>
                <table class="styled-table">
                    <thead><tr><th>理論</th><th>提唱者</th><th>内容</th></tr></thead>
                    <tbody>
                        <tr><td><strong>プロスペクト理論</strong></td><td>カーネマン＆トベルスキー</td><td>利益の喜びより損失の苦痛が大きい（損失回避）</td></tr>
                        <tr><td><strong>システム1/システム2</strong></td><td>カーネマン</td><td>速い思考（直感）と遅い思考（論理）の二重過程</td></tr>
                        <tr><td><strong>ナッジ理論</strong></td><td>セイラー＆サンスティーン</td><td>選択の自由を保ちつつ望ましい方向に誘導</td></tr>
                        <tr><td><strong>メンタル・アカウンティング</strong></td><td>セイラー</td><td>お金に心理的な「色」をつける傾向</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🎯 主要な認知バイアス</h2>
                <table class="styled-table">
                    <thead><tr><th>バイアス</th><th>内容</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>アンカリング</strong></td><td>最初の情報に引きずられる</td><td>初値から離れにくい株価判断</td></tr>
                        <tr><td><strong>確証バイアス</strong></td><td>自分の信念を支持する情報だけ集める</td><td>保有株のポジティブニュースだけ読む</td></tr>
                        <tr><td><strong>サンクコスト効果</strong></td><td>過去の投資が未来の判断を歪める</td><td>含み損の株を「もったいない」と保有し続ける</td></tr>
                        <tr><td><strong>群集心理（ハーディング）</strong></td><td>集団の行動に追随する</td><td>バブル時のパニック買い/売り</td></tr>
                        <tr><td><strong>後知恵バイアス</strong></td><td>結果を知ってから「予想通り」と感じる</td><td>暴落後に「予測できた」と思う</td></tr>
                        <tr><td><strong>現状維持バイアス</strong></td><td>変化を避け現状を好む</td><td>デフォルトの年金プランに留まる</td></tr>
                        <tr><td><strong>フレーミング効果</strong></td><td>表現方法で判断が変わる</td><td>「成功率90%」vs「失敗率10%」</td></tr>
                        <tr><td><strong>過信バイアス</strong></td><td>自分の能力を過大評価</td><td>個人投資家の過剰トレード</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>💡 ナッジの活用</h2>
                <table class="styled-table">
                    <thead><tr><th>ナッジの例</th><th>方法</th><th>効果</th></tr></thead>
                    <tbody>
                        <tr><td><strong>デフォルト設計</strong></td><td>年金の自動加入</td><td>加入率が大幅に向上</td></tr>
                        <tr><td><strong>社会的比較</strong></td><td>「近隣の平均使用量」の表示</td><td>エネルギー消費の削減</td></tr>
                        <tr><td><strong>損失フレーミング</strong></td><td>「X円損します」と表示</td><td>行動変容の効果が大きい</td></tr>
                        <tr><td><strong>簡素化</strong></td><td>手続きを簡単にする</td><td>申請率の向上</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 バイアスへの対策</div>
                    <p>・<strong>データに基づく判断</strong>：直感を過信せず数字で検証</p>
                    <p>・<strong>反対意見を意図的に求める</strong>：確証バイアスへの対策</p>
                    <p>・<strong>投資ルールの事前設定</strong>：感情的判断を排除</p>
                    <p>・<strong>チェックリストの活用</strong>：システム2を強制的に起動</p>
                    <p>・<strong>「自分はバイアスを持っている」</strong>という自覚が最大の防御</p>
                </div>
            </div>
            <div id="day68-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day68-quiz', 'day68-quiz', [
            { question: 'プロスペクト理論の主な主張はどれですか？', options: ['利益と損失は同じ重みで感じる', '損失は利益の約2倍の心理的インパクトがある', '人は常に合理的に判断する', '投資は常にリスクに見合うリターンがある'], correct: 1, explanation: 'プロスペクト理論では、同じ金額の損失は利益の約2〜2.5倍の心理的インパクトがあるとされています。' },
            { question: 'ナッジ理論の特徴はどれですか？', options: ['強制的に行動を変える', '選択の自由を保ちつつ望ましい方向に誘導', '罰則で行動を制御', '情報を隠す'], correct: 1, explanation: 'ナッジは選択肢を制限せず、「デフォルト設定」等の設計で望ましい行動を促す手法です。' },
            { question: 'サンクコスト効果の例はどれですか？', options: ['新しい株を買う', '含み損の株を「もったいない」と保有し続ける', '利益確定する', '分散投資する'], correct: 1, explanation: 'サンクコスト（埋没費用）効果は過去の投資額に引きずられ、合理的な撤退判断ができなくなる現象です。' },
            { question: 'システム1（速い思考）の特徴はどれですか？', options: ['論理的で慎重', '直感的で自動的', '計算が得意', '時間がかかる'], correct: 1, explanation: 'システム1は自動的、直感的、高速に作動する思考モードで、日常判断の大部分を担います。' },
            { question: '確証バイアスへの最も効果的な対策はどれですか？', options: ['直感を信じる', '反対意見を意図的に求める', '同じ意見の人と議論する', '決断を先延ばしにする'], correct: 1, explanation: '「プレモータム」や「悪魔の代弁者」のように反対意見を意図的に検討することが確証バイアスへの有効な対策です。' }
        ]);
    }
};
