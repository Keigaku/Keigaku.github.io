// ===========================
// Day 89: リーダーシップとキャリア
// ===========================
window.Day89 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>👥 リーダーシップスタイル</h2>
                <table class="styled-table">
                    <thead><tr><th>スタイル</th><th>特徴</th><th>最適な場面</th></tr></thead>
                    <tbody>
                        <tr><td><strong>サーバントリーダー</strong></td><td>メンバーを支援する</td><td>自律的なチーム、アジャイル</td></tr>
                        <tr><td><strong>トランスフォーメーショナル</strong></td><td>ビジョンで動機づける</td><td>変革期、新プロジェクト</td></tr>
                        <tr><td><strong>シチュエーショナル</strong></td><td>状況に応じてスタイルを変える</td><td>メンバーの成熟度が異なるチーム</td></tr>
                        <tr><td><strong>コーチング</strong></td><td>個人の成長を支援</td><td>若手育成、OJT</td></tr>
                        <tr><td><strong>ディレクティブ</strong></td><td>明確な指示を出す</td><td>緊急時、経験の浅いチーム</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📈 金融IT業界のキャリアパス</h2>
                <table class="styled-table">
                    <thead><tr><th>ステージ</th><th>年次目安</th><th>役割</th><th>求められるスキル</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ジュニア</strong></td><td>1-3年目</td><td>実装・テスト</td><td>技術力、学習意欲</td></tr>
                        <tr><td><strong>ミドル</strong></td><td>4-7年目</td><td>設計・チームリード</td><td>設計力、コミュニケーション</td></tr>
                        <tr><td><strong>シニア</strong></td><td>8-12年目</td><td>アーキテクト・PM</td><td>全体最適、ビジネス理解</td></tr>
                        <tr><td><strong>マネージャー</strong></td><td>10年目〜</td><td>組織管理・営業</td><td>人材育成、P/L管理</td></tr>
                        <tr><td><strong>エキスパート</strong></td><td>10年目〜</td><td>技術特化・CTO</td><td>深い専門性、技術戦略</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🎯 キャリア戦略のフレームワーク</h2>
                <table class="styled-table">
                    <thead><tr><th>戦略</th><th>内容</th><th>例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>T型人材</strong></td><td>1つの深い専門性 + 幅広い知識</td><td>クラウド×金融知識</td></tr>
                        <tr><td><strong>π型人材</strong></td><td>2つの深い専門性 + 幅広い知識</td><td>AI + 金融 + マネジメント</td></tr>
                        <tr><td><strong>70-20-10の法則</strong></td><td>70%仕事、20%他者から、10%研修</td><td>OJTが最も成長に寄与</td></tr>
                        <tr><td><strong>計画的偶発性</strong></td><td>偶然の出会いを活かす準備</td><td>勉強会参加、社外ネットワーク</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 新入社員の1年目にすべきこと</div>
                    <p>・<strong>技術の基礎固め</strong>：資格取得（基本情報、AWS等）</p>
                    <p>・<strong>業務知識の吸収</strong>：金融ドメインの理解を優先</p>
                    <p>・<strong>人脈形成</strong>：先輩・同期との関係構築</p>
                    <p>・<strong>アウトプットの習慣</strong>：技術ブログ、勉強会での発表</p>
                    <p>・<strong>健康管理</strong>：体力は全ての基盤</p>
                </div>
            </div>
            <div id="day89-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day89-quiz', 'day89-quiz', [
            { question: 'サーバントリーダーシップの特徴はどれですか？', options: ['命令と支配', 'メンバーを支援し、その成長を促す', '全てを自分で決める', 'ルールを厳格に適用'], correct: 1, explanation: 'サーバントリーダーシップはリーダーがメンバーに奉仕し、その成長を支援することで組織全体の成果を高めるスタイルです。' },
            { question: 'T型人材とは何ですか？', options: ['T字型のオフィスで働く人', '1つの深い専門性と幅広い知識を持つ人', '転職が多い人', 'テクニカル人材の略'], correct: 1, explanation: 'T型人材は縦棒（深い専門性）と横棒（幅広い知識）を兼ね備えた人材で、現代の金融IT業界で求められます。' },
            { question: '70-20-10の法則で最も成長に寄与するのはどれですか？', options: ['研修（10%）', '他者から学ぶ（20%）', '仕事の経験（70%）', '全て同等'], correct: 2, explanation: '70-20-10の法則では、人の学びの70%は実際の仕事経験、20%は他者との関わり、10%が研修によるものとされています。' },
            { question: 'シチュエーショナルリーダーシップの特徴はどれですか？', options: ['常に同じスタイル', '部下の成熟度に応じてスタイルを変える', 'リーダーを交代する', '状況を無視する'], correct: 1, explanation: 'シチュエーショナルリーダーシップは部下の能力と意欲のレベルに応じて指示型/支援型/委任型などを使い分けます。' },
            { question: '計画的偶発性理論で重要なことはどれですか？', options: ['全てを計画する', '偶然を避ける', '偶然の出来事を活かす行動力と準備', '変化を拒否する'], correct: 2, explanation: '計画的偶発性理論は、好奇心・粘り強さ・柔軟性・楽観性・冒険心を持つことで偶然をキャリアに活かせるとします。' }
        ]);
    }
};
