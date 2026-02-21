// ===========================
// Day 36: 経営意思決定フレームワーク
// ===========================
window.Day36 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🧭 経営意思決定の本質</h2>
                <p>経営とは<strong>「不確実な状況下で意思決定を行い、その結果に責任を持つこと」</strong>です。
                決断の質が企業の命運を左右します。しかし、人間の判断にはバイアスが伴います。
                優れた経営者はバイアスを知り、仕組みで補正しながら意思決定の質を高めています。</p>

                <h3>意思決定の3つのモデル</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>モデル</th><th>概要</th><th>適する場面</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>合理的モデル</strong></td><td>全情報を収集・分析し最適解を選ぶ</td><td>時間と情報が十分ある場合</td></tr>
                        <tr><td><strong>限定合理性モデル</strong></td><td>「十分に良い」選択肢を選ぶ（サイモン）</td><td>現実の多くの経営判断</td></tr>
                        <tr><td><strong>ゴミ箱モデル</strong></td><td>問題・解・参加者・機会が偶然的に結合</td><td>組織内政治が複雑な場面</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📘 「決めないリスク」の方が大きい</div>
                    <p>日本企業の経営課題として頻繁に指摘されるのが<strong>意思決定の遅さ</strong>です。
                    ・全会一致を求めすぎる（稟議文化）</p>
                    <p>・「もう少しデータが揃ってから」と先延ばしにする</p>
                    <p>・責任を回避するための「様子見」</p>
                    <p>VUCA時代には、<strong>70%の確信で迅速に決断し、残り30%は走りながら修正する</strong>ことが求められます。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🧠 認知バイアスと意思決定</h2>
                <p>ノーベル経済学賞を受賞したカーネマンの研究によれば、人間の判断は多くのバイアスに影響されます。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>バイアス</th><th>内容</th><th>経営での典型例</th><th>対策</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>確証バイアス</strong></td><td>自分の仮説を支持する情報ばかり集める</td><td>「この投資は成功する」の根拠だけ探す</td><td>反対意見を意図的に集める（悪魔の代弁者）</td></tr>
                        <tr><td><strong>アンカリング</strong></td><td>最初の情報に引きずられる</td><td>前年の予算ベースで思考停止</td><td>ゼロベース思考を導入</td></tr>
                        <tr><td><strong>サンクコストの誤謬</strong></td><td>投入済みコストに囚われる</td><td>赤字プロジェクトの撤退判断ができない</td><td>「今から始めるとして投資するか？」と問う</td></tr>
                        <tr><td><strong>集団浅慮</strong></td><td>集団で極端な意思決定に走る</td><td>役員会で反対意見が出ない</td><td>独立した社外取締役、匿名投票</td></tr>
                        <tr><td><strong>現状維持バイアス</strong></td><td>変化を避け現状を好む</td><td>「今のシステムで問題ない」</td><td>変化しないリスクを数値化する</td></tr>
                        <tr><td><strong>生存者バイアス</strong></td><td>成功例だけで判断する</td><td>成功した新規事業だけを参考にする</td><td>失敗事例も体系的に分析する</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📊 データドリブン経営</h2>

                <h3>データに基づく意思決定のフレームワーク</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>ステップ</th><th>内容</th><th>注意点</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 問いの設定</strong></td><td>意思決定に必要な問いを明確化</td><td>データから問いを作るのではなく、問いからデータを探す</td></tr>
                        <tr><td><strong>2. データ収集</strong></td><td>内部・外部データの収集</td><td>データの質・完全性を確認</td></tr>
                        <tr><td><strong>3. 分析</strong></td><td>統計的分析、可視化</td><td>相関と因果を混同しない</td></tr>
                        <tr><td><strong>4. 解釈</strong></td><td>分析結果のビジネス的意味</td><td>コンテキストを加味する</td></tr>
                        <tr><td><strong>5. 意思決定</strong></td><td>データと直感のバランスで判断</td><td>データが全てではない</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ データドリブンの罠</div>
                    <p>・<strong>分析麻痺（Analysis Paralysis）</strong>：データを集めすぎて決断できなくなる</p>
                    <p>・<strong>データの過信</strong>：数字にならないもの（文化、士気、信頼）を軽視する</p>
                    <p>・<strong>後方視</strong>：過去データは将来のブレイクスルーを予測できない</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🗺️ シナリオプランニング</h2>
                <p>不確実な未来に備える経営手法です。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>ステップ</th><th>内容</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 焦点となる問い</strong></td><td>意思決定の焦点を明確化</td><td>「5年後の金融SIer業界はどうなるか」</td></tr>
                        <tr><td><strong>2. 不確実性の特定</strong></td><td>影響度・不確実性が高い要因</td><td>AI規制の動向、金利環境</td></tr>
                        <tr><td><strong>3. シナリオ構築</strong></td><td>2×2マトリクスで4つのシナリオ</td><td>AI規制（厳格/緩和）×金利（上昇/低下）</td></tr>
                        <tr><td><strong>4. 含意の抽出</strong></td><td>各シナリオでの自社への影響</td><td>必要な投資や人材の変化</td></tr>
                        <tr><td><strong>5. 堅牢な戦略</strong></td><td>全シナリオで有効な戦略を特定</td><td>どのシナリオでもAI人材は必要</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 優れた経営意思決定の原則</div>
                    <p>・<strong>Speed over Perfection</strong>：完璧な判断より素早い判断と軌道修正</p>
                    <p>・<strong>Reversible vs Irreversible</strong>：可逆的な判断は素早く、不可逆な判断は慎重に</p>
                    <p>・<strong>Disagree and Commit</strong>：異論があっても決定後は全力でコミット</p>
                    <p>・<strong>Pre-mortem</strong>：「この意思決定が失敗したと仮定して、原因は何か？」と事前に考える</p>
                </div>
            </div>

            <div id="day36-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day36-quiz', 'day36-quiz', [
            {
                question: '「サンクコストの誤謬」を回避するための有効な問いはどれですか？',
                options: ['今までいくら投資したか？', '今から始めるとして、この投資をするか？', '競合はどうしているか？', '過去の成功事例は何か？'],
                correct: 1,
                explanation: 'サンクコストに囚われないためには、「今ゼロの状態からスタートするとして、この投資判断をするか？」と問うことが有効です。'
            },
            {
                question: '「集団浅慮（グループシンク）」への対策として適切なのはどれですか？',
                options: ['全員一致を求める', '独立した社外取締役を入れる', '議論を短時間で終わらせる', 'リーダーが最初に意見を述べる'],
                correct: 1,
                explanation: '独立した視点を持つ社外取締役や「悪魔の代弁者」の役割を設けることで、同調圧力による集団浅慮を防げます。'
            },
            {
                question: 'シナリオプランニングの最終ゴールはどれですか？',
                options: ['最も可能性の高い未来を予測すること', '全てのシナリオで有効な堅牢な戦略を特定すること', 'リスクをゼロにすること', '一つの最適シナリオに賭けること'],
                correct: 1,
                explanation: 'シナリオプランニングは未来を予測するのではなく、複数の将来像に備え、どのシナリオでも有効な「堅牢な戦略」を見出すことが目的です。'
            },
            {
                question: 'アマゾンの「Reversible / Irreversible」意思決定フレームワークの要点はどれですか？',
                options: ['全ての判断を慎重に行う', '可逆的な判断は素早く、不可逆な判断は慎重に', '全ての判断をデータに基づいて行う', '直感を信じる'],
                correct: 1,
                explanation: '可逆的な意思決定（やり直しがきく）は迅速に、不可逆な意思決定（後戻りが困難）は慎重に行うべきという原則です。'
            },
            {
                question: 'データドリブン経営の「分析麻痺」を避けるために重要なのはどれですか？',
                options: ['より多くのデータを集める', '期限を決めてデータが不完全でも判断する', 'AIに全ての分析を任せる', 'データを使わずに直感で決める'],
                correct: 1,
                explanation: 'データドリブン経営でも「十分なデータ」に到達することは稀です。期限を設定し、70%のデータで判断する勇気が必要です。'
            }
        ]);
    }
};
