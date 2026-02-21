// ===========================
// Day 58: 哲学とクリティカルシンキング
// ===========================
window.Day58 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🤔 西洋哲学の主要な思想</h2>
                <p>哲学は「正しく考える力」の源泉です。ビジネスにおける<strong>倫理的判断・論理的思考・本質を見抜く力</strong>は全て哲学的思考に基づいています。</p>
                <table class="styled-table">
                    <thead><tr><th>哲学者</th><th>時代</th><th>核心的思想</th><th>ビジネスへの応用</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ソクラテス</strong></td><td>古代ギリシャ</td><td>無知の知、対話的探求</td><td>問いを立てる力、前提を疑う</td></tr>
                        <tr><td><strong>アリストテレス</strong></td><td>古代ギリシャ</td><td>論理学、中庸の徳</td><td>三段論法、バランスのとれた判断</td></tr>
                        <tr><td><strong>デカルト</strong></td><td>近代</td><td>「我思う、ゆえに我あり」</td><td>方法的懐疑、分析的思考</td></tr>
                        <tr><td><strong>カント</strong></td><td>近代</td><td>定言命法（普遍的道徳法則）</td><td>ルールベースの倫理判断</td></tr>
                        <tr><td><strong>J.S.ミル</strong></td><td>近代</td><td>功利主義（最大多数の最大幸福）</td><td>コスト・ベネフィット分析</td></tr>
                        <tr><td><strong>ニーチェ</strong></td><td>近代</td><td>ニヒリズムの克服、超人</td><td>既存の価値観を疑う力</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🧠 クリティカルシンキングの技法</h2>
                <table class="styled-table">
                    <thead><tr><th>技法</th><th>内容</th><th>実践例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>論理的誤謬の識別</strong></td><td>誤った推論を見抜く</td><td>「売上は常に右肩上がり」→ 根拠は？</td></tr>
                        <tr><td><strong>因果関係と相関関係の区別</strong></td><td>相関は因果を意味しない</td><td>アイスクリーム売上と溺死事故（第三因子）</td></tr>
                        <tr><td><strong>MECE</strong></td><td>漏れなくダブりなく</td><td>問題の分解と網羅的分析</td></tr>
                        <tr><td><strong>演繹法 vs 帰納法</strong></td><td>一般→個別 vs 個別→一般</td><td>仮説構築と検証のプロセス</td></tr>
                        <tr><td><strong>反証可能性</strong></td><td>科学的命題は反証可能</td><td>「絶対に…」という主張を疑う</td></tr>
                    </tbody>
                </table>
                <div class="info-box warning">
                    <div class="info-box-title">⚠️ よくある論理的誤謬</div>
                    <p>・<strong>人身攻撃</strong>：主張ではなく人を攻撃する</p>
                    <p>・<strong>ストローマン</strong>：相手の主張を歪めて反論する</p>
                    <p>・<strong>スリッパリースロープ</strong>：極端な結論に飛躍する</p>
                    <p>・<strong>権威に訴える論証</strong>：「偉い人が言ったから正しい」</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⚖️ 倫理的フレームワーク</h2>
                <table class="styled-table">
                    <thead><tr><th>フレームワーク</th><th>判断基準</th><th>金融での適用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>功利主義</strong></td><td>結果が最大幸福をもたらすか</td><td>コスト・ベネフィット分析</td></tr>
                        <tr><td><strong>義務論（カント）</strong></td><td>行為自体が正しいか</td><td>コンプライアンス遵守</td></tr>
                        <tr><td><strong>徳倫理学</strong></td><td>有徳な人ならどう行動するか</td><td>プロフェッショナルの判断</td></tr>
                        <tr><td><strong>正義論（ロールズ）</strong></td><td>最も不利な人が改善されるか</td><td>金融包摂、アクセシビリティ</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 哲学的思考がビジネスを変える</div>
                    <p>・<strong>前提を疑う</strong>ことで、真のイノベーションが生まれる</p>
                    <p>・<strong>論理的に考える</strong>ことで、説得力のある提案ができる</p>
                    <p>・<strong>倫理的に判断する</strong>ことで、長期的な信頼を獲得できる</p>
                </div>
            </div>
            <div id="day58-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day58-quiz', 'day58-quiz', [
            { question: '「無知の知」を提唱した哲学者は誰ですか？', options: ['プラトン', 'ソクラテス', 'アリストテレス', 'デカルト'], correct: 1, explanation: 'ソクラテスは「自分が知らないことを知っている」という自覚こそが知恵の始まりだと説きました。' },
            { question: 'MECEとはどのような考え方ですか？', options: ['最大利益の追求', '漏れなくダブりなく', '多数決の原理', '市場分析手法'], correct: 1, explanation: 'MECE（Mutually Exclusive, Collectively Exhaustive）は、漏れなくダブりなく問題を分解する思考法です。' },
            { question: '功利主義の判断基準はどれですか？', options: ['行為自体の正しさ', '結果が最大多数の最大幸福をもたらすか', '伝統に従っているか', '権威者が認めるか'], correct: 1, explanation: '功利主義は行為の結果が最大多数の最大幸福をもたらすかどうかで善悪を判断する立場です。' },
            { question: '「ストローマン論法」とはどのような誤謬ですか？', options: ['権威に訴える', '相手の主張を歪めて反論する', '人格を攻撃する', '感情に訴える'], correct: 1, explanation: 'ストローマン（藁人形）論法は、相手の主張を歪曲・単純化した上で、その歪曲版を攻撃する誤謬です。' },
            { question: '相関関係と因果関係の違いとして正しいのはどれですか？', options: ['同じ意味', '相関関係は必ず因果関係がある', '相関関係は因果関係を必ずしも意味しない', '因果関係は相関関係の一部'], correct: 2, explanation: '2つの事象が相関していても、直接的な因果関係があるとは限りません（第三の変数の存在等）。' }
        ]);
    }
};
