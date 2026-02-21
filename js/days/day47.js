// ===========================
// Day 47: メンタルヘルスとセルフマネジメント
// ===========================
window.Day47 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🧘 IT業界のメンタルヘルス</h2>
                <p>IT業界は<strong>高い心理的負荷</strong>を伴う業種です。
                納期プレッシャー、技術の急速な変化、長時間労働がストレス要因になります。
                心身の健康は<strong>パフォーマンスの土台</strong>であり、キャリアの持続可能性を左右します。</p>
                <h3>ストレスのメカニズム</h3>
                <table class="styled-table">
                    <thead><tr><th>段階</th><th>身体の反応</th><th>サイン</th></tr></thead>
                    <tbody>
                        <tr><td><strong>警告反応期</strong></td><td>ストレスホルモン分泌</td><td>緊張感、集中力上昇</td></tr>
                        <tr><td><strong>抵抗期</strong></td><td>適応しようと頑張る</td><td>慢性的な疲労、イライラ</td></tr>
                        <tr><td><strong>疲弊期</strong></td><td>適応能力の限界</td><td>不眠、体調不良、意欲低下</td></tr>
                    </tbody>
                </table>
                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 要注意サイン</div>
                    <p>以下の変化が2週間以上続く場合は、専門家への相談を検討してください：</p>
                    <p>・睡眠障害（寝つけない、早朝覚醒）</p>
                    <p>・持続的な疲労感、意欲の著しい低下</p>
                    <p>・集中力の低下、ミスの増加</p>
                    <p>・周囲との関わりの減少、孤立</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🧠 レジリエンスを高める習慣</h2>
                <table class="styled-table">
                    <thead><tr><th>習慣</th><th>効果</th><th>具体的な方法</th></tr></thead>
                    <tbody>
                        <tr><td><strong>睡眠の質向上</strong></td><td>認知機能・判断力の回復</td><td>就寝90分前に入浴、ブルーライト制限</td></tr>
                        <tr><td><strong>運動習慣</strong></td><td>ストレスホルモンの減少</td><td>週3回30分の有酸素運動</td></tr>
                        <tr><td><strong>マインドフルネス</strong></td><td>注意力・感情制御の向上</td><td>毎朝5分の呼吸瞑想</td></tr>
                        <tr><td><strong>ジャーナリング</strong></td><td>思考の整理、感情の言語化</td><td>毎晩3行日記（良かったこと3つ）</td></tr>
                        <tr><td><strong>社会的つながり</strong></td><td>孤立の防止、帰属感</td><td>1on1、チームランチ、趣味の仲間</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⏰ タイムマネジメント</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>概要</th><th>効果</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ポモドーロ・テクニック</strong></td><td>25分集中 + 5分休憩</td><td>集中力の持続、疲労防止</td></tr>
                        <tr><td><strong>アイゼンハワー・マトリクス</strong></td><td>重要度×緊急度で4分類</td><td>「重要だが緊急でない」に時間を割く</td></tr>
                        <tr><td><strong>タスクバッチング</strong></td><td>類似タスクをまとめて処理</td><td>コンテキストスイッチの削減</td></tr>
                        <tr><td><strong>2分ルール</strong></td><td>2分で終わるタスクは即実行</td><td>細かいタスクの蓄積防止</td></tr>
                        <tr><td><strong>ディープワーク</strong></td><td>通知オフで深い集中の時間を確保</td><td>知的生産性の大幅向上</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-3">
                <h2>⚖️ ワークライフバランス</h2>
                <table class="styled-table">
                    <thead><tr><th>実践</th><th>内容</th><th>ポイント</th></tr></thead>
                    <tbody>
                        <tr><td><strong>境界設定</strong></td><td>仕事と私生活の境界を明確に</td><td>退勤後のメールチェックを制限</td></tr>
                        <tr><td><strong>有休取得</strong></td><td>計画的に休暇を取得</td><td>休むことも「プロの能力」</td></tr>
                        <tr><td><strong>No と言う力</strong></td><td>過剰な依頼を断る</td><td>「今の優先事項は〇〇です」と伝える</td></tr>
                        <tr><td><strong>趣味・コミュニティ</strong></td><td>仕事以外のアイデンティティ</td><td>社外のつながりも大切にする</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 「頑張りすぎない」のも実力</div>
                    <p>・マラソンのように<strong>持続可能なペース</strong>で走ること</p>
                    <p>・<strong>助けを求めること</strong>は弱さではなく強さ</p>
                    <p>・キャリアは30年以上続く<strong>超長期戦</strong></p>
                    <p>・<strong>健康を失ったら全てを失う</strong>ことを忘れない</p>
                </div>
            </div>
            <div id="day47-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day47-quiz', 'day47-quiz', [
            { question: 'ストレスの「疲弊期」のサインはどれですか？', options: ['集中力上昇', '緊張感', '不眠、体調不良、意欲低下', '適度な緊張'], correct: 2, explanation: '疲弊期は適応能力の限界を超えた状態で、不眠、体調不良、意欲低下が特徴的なサインです。' },
            { question: 'ポモドーロ・テクニックの基本は？', options: ['50分集中 + 10分休憩', '25分集中 + 5分休憩', '45分集中 + 15分休憩', '2時間集中 + 30分休憩'], correct: 1, explanation: 'ポモドーロ・テクニックは25分の集中＋5分の休憩を1セットとして繰り返す時間管理法です。' },
            { question: 'アイゼンハワー・マトリクスで最も時間を割くべき領域は？', options: ['重要かつ緊急', '重要だが緊急でない', '緊急だが重要でない', '重要でも緊急でもない'], correct: 1, explanation: '「重要だが緊急でない」領域（自己投資、関係構築、計画）に意識的に時間を割くことが重要です。' },
            { question: 'マインドフルネスの主な効果はどれですか？', options: ['体力の増強', '注意力と感情制御の向上', '知識の増加', '社交性の向上'], correct: 1, explanation: 'マインドフルネス瞑想は注意力の改善と感情制御力の向上に効果があることが科学的に示されています。' },
            { question: '「ディープワーク」の要点はどれですか？', options: ['マルチタスクで効率化', '通知をオフにして深い集中の時間を確保', '長時間連続で作業する', 'チームで議論する時間を増やす'], correct: 1, explanation: 'ディープワークはSNSやメール等の通知を遮断し、知的生産に集中する時間を意図的に確保することです。' }
        ]);
    }
};
