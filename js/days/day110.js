// ===========================
// Day 110: 19:00-20:00 ネットワーキング・キャリア構築
// ===========================
window.Day110 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🌐 19:00 — ネットワーキングとキャリア構築</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>1日の締めくくりは、<strong>長期的なキャリア構築</strong>に目を向ける時間です。
                    「出来る社員」は<strong>ジョハリの窓</strong>で自己理解を深め、
                    <strong>メンタリング</strong>で成長を加速し、
                    <strong>Will-Can-Must</strong>でキャリア方向性を定めます。</p>
                </div>
                <h3>🪟 19:00-19:20 — 自己理解（ジョハリの窓）</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：ジョハリの窓</div>
                    <p>自分と他者の認識のギャップを可視化し、<strong>自己理解</strong>と<strong>信頼関係構築</strong>に活用するフレームワークです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>領域</th><th>自分</th><th>他者</th><th>金融SEとしての活用</th></tr></thead>
                    <tbody>
                        <tr><td><strong>開放の窓</strong><br>（Open）</td><td>知っている</td><td>知っている</td><td>認められた強み → さらに伸ばす（例：SQL得意）</td></tr>
                        <tr><td><strong>盲点の窓</strong><br>（Blind Spot）</td><td>知らない</td><td>知っている</td><td>他者からのフィードバックで発見（例：説明が上手と言われた）</td></tr>
                        <tr><td><strong>秘密の窓</strong><br>（Hidden）</td><td>知っている</td><td>知らない</td><td>自己開示で信頼を築く（例：実は金融の知識に自信がない → 相談）</td></tr>
                        <tr><td><strong>未知の窓</strong><br>（Unknown）</td><td>知らない</td><td>知らない</td><td>新しい挑戦で可能性を発見（例：実はPM適性があった）</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 開放の窓を広げるアクション</div>
                    <p>・<strong>フィードバックを積極的に求める</strong>（盲点の窓 → 開放の窓）</p>
                    <p>・<strong>自己開示を増やす</strong>（秘密の窓 → 開放の窓）</p>
                    <p>・<strong>新しい経験に挑戦する</strong>（未知の窓 → 開放の窓）</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🧭 19:20-19:40 — メンタリングとネットワーキング</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：メンタリングの4つの機能</div>
                    <p>メンターとの関係を通じてキャリア成長を加速させるフレームワークです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>機能</th><th>内容</th><th>メンターへの質問例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>キャリア機能</strong></td><td>昇進・成長の支援</td><td>「3年目でリーダーを任されるには、今何に注力すべきですか？」</td></tr>
                        <tr><td><strong>心理社会的機能</strong></td><td>精神的なサポート</td><td>「初めてのクライアント対応で不安があるのですが…」</td></tr>
                        <tr><td><strong>ロールモデル機能</strong></td><td>行動の手本を示す</td><td>「〇〇さんが1年目の時、どのように勉強されていましたか？」</td></tr>
                        <tr><td><strong>スポンサーシップ機能</strong></td><td>機会・人脈の提供</td><td>「次のプロジェクトでフロントエンド開発に挑戦したいのですが…」</td></tr>
                    </tbody>
                </table>
                <h4>ネットワーキングの実践</h4>
                <table class="styled-table">
                    <thead><tr><th>活動</th><th>頻度</th><th>効果</th><th>具体例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>社内勉強会参加</strong></td><td>月2回</td><td>他部門との接点</td><td>AI研究会、クラウド分科会への参加</td></tr>
                        <tr><td><strong>社外コミュニティ</strong></td><td>月1回</td><td>業界の視野拡大</td><td>JFUG（Japan Finance User Group）、技術Meetup</td></tr>
                        <tr><td><strong>1on1ランチ</strong></td><td>週1回</td><td>深い信頼関係</td><td>普段話さない先輩や他チームの人とランチ</td></tr>
                        <tr><td><strong>SNS発信</strong></td><td>週2-3回</td><td>パーソナルブランド</td><td>LinkedIn、Xで学びや気づきを発信</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🎯 19:40-20:00 — キャリアの方向性（Will-Can-Must）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：Will-Can-Must</div>
                    <p>3つの円の重なりから自分のキャリアの<strong>スイートスポット</strong>を見つけるフレームワークです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>要素</th><th>問い</th><th>金融SEの記入例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Will（やりたい）</strong></td><td>情熱を持って取り組めること</td><td>最先端の金融テクノロジーを使ったシステム開発</td></tr>
                        <tr><td><strong>Can（できる）</strong></td><td>スキル・経験として持っているもの</td><td>C#/Python開発、金利商品の知識、SQL最適化</td></tr>
                        <tr><td><strong>Must（求められている）</strong></td><td>組織・市場から期待されていること</td><td>クラウド移行推進、若手育成、クライアントリレーション</td></tr>
                    </tbody>
                </table>
                <h4>1日の振り返り — フレームワーク総まとめ</h4>
                <table class="styled-table">
                    <thead><tr><th>時間帯</th><th>活動</th><th>使ったフレームワーク</th></tr></thead>
                    <tbody>
                        <tr><td>09:00-10:00</td><td>朝の立ち上げ</td><td>OODAループ、GTD、4象限マトリクス</td></tr>
                        <tr><td>10:00-11:00</td><td>チームMTG</td><td>デイリースクラム、報連相、PREP法</td></tr>
                        <tr><td>11:00-12:00</td><td>要件定義・設計</td><td>MECE、ロジックツリー、UML</td></tr>
                        <tr><td>13:00-14:00</td><td>開発</td><td>TDD、SOLID原則、デザインパターン</td></tr>
                        <tr><td>14:00-15:00</td><td>クライアント折衝</td><td>SPIN話法、BATNA/ZOPA、As-Is/To-Be</td></tr>
                        <tr><td>15:00-16:00</td><td>コードレビュー</td><td>DORA指標、チェックリスト法、FMEA</td></tr>
                        <tr><td>16:00-17:00</td><td>ドキュメント</td><td>ピラミッド原則、SDS法、5W1H</td></tr>
                        <tr><td>17:00-18:00</td><td>振り返り</td><td>KPT、PDCA、タイムボックス</td></tr>
                        <tr><td>18:00-19:00</td><td>自己研鑽</td><td>70:20:10、コルブサイクル、ドレイファス</td></tr>
                        <tr><td>19:00-20:00</td><td>キャリア構築</td><td>ジョハリの窓、メンタリング、Will-Can-Must</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🌟 Day 101-110 総まとめ — 出来る社員の心得</div>
                    <p>・<strong>フレームワークは道具</strong> — 状況に応じて使い分ける柔軟性が大切</p>
                    <p>・<strong>完璧を目指さず、まず実践</strong> — 使いながら自分のスタイルを磨く</p>
                    <p>・<strong>1日1つ新しいことを試す</strong> — 小さな実験の積み重ねが大きな成長に</p>
                    <p>・<strong>周囲との関係を大切に</strong> — 一人で成果を出せる人はいない</p>
                    <p>・<strong>健康とメンタルが最優先</strong> — 全てのパフォーマンスの基盤</p>
                    <p style="text-align: center; font-size: 1.3em; margin-top: 20px; font-weight: bold;">
                        🎉 これで「出来る社員の1日」マスター完了です！明日から実践しましょう！ 🚀
                    </p>
                </div>
            </div>
            <div id="day110-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day110-quiz', 'day110-quiz', [
            { question: 'ジョハリの窓で「自分は知らないが他者は知っている」領域はどれですか？', options: ['開放の窓', '盲点の窓', '秘密の窓', '未知の窓'], correct: 1, explanation: '盲点の窓（Blind Spot）は自分では気づいていないが他者からは見えている特性を表します。' },
            { question: 'Will-Can-Mustフレームワークのスイートスポットとは何ですか？', options: ['Willだけの領域', 'CanとMustの重なり', 'Will・Can・Must 3つ全てが重なる領域', 'Mustだけの領域'], correct: 2, explanation: '3つの円が全て重なるスイートスポットが、最もやりがいがあり成果も出せるキャリアの方向性です。' },
            { question: 'メンタリングの4つの機能に含まれないものはどれですか？', options: ['キャリア機能', '心理社会的機能', '評価機能', 'ロールモデル機能'], correct: 2, explanation: 'メンタリングは「キャリア機能」「心理社会的機能」「ロールモデル機能」「スポンサーシップ機能」の4つです。評価は含まれません。' },
            { question: 'フレームワークを実務で活かすために最も重要なことはどれですか？', options: ['全てのフレームワークを暗記する', '状況に応じて使い分ける柔軟性を持つ', '1つだけ極める', 'フレームワークなしで直感で動く'], correct: 1, explanation: 'フレームワークは道具であり、状況に応じて適切なものを選び使い分ける柔軟性が最も重要です。' },
            { question: '出来る社員の1日で最も一貫して重要な姿勢はどれですか？', options: ['残業を厭わない姿勢', '完璧を目指す姿勢', '経験から学び継続的に改善する姿勢', '人より早く帰る姿勢'], correct: 2, explanation: '全ての時間帯で共通するのは「振り返り→改善→実践」のサイクルを回し続ける姿勢です。' }
        ]);
    }
};
