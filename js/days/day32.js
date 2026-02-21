// ===========================
// Day 32: 組織設計と組織文化
// ===========================
window.Day32 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏗️ 組織設計の基礎</h2>
                <p>組織とは<strong>戦略を実行するための器</strong>です。「戦略が組織を規定し、組織が戦略を制約する」
                （チャンドラー）— 優れた戦略があっても、それを実行できる組織がなければ意味がありません。</p>

                <h3>主要な組織構造</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>構造</th><th>特徴</th><th>適する状況</th><th>リスク</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>機能別組織</strong></td><td>営業・開発・管理等の機能で分割</td><td>単一事業、安定環境</td><td>セクショナリズム</td></tr>
                        <tr><td><strong>事業部制</strong></td><td>事業単位で独立した組織</td><td>多角化企業</td><td>重複コスト</td></tr>
                        <tr><td><strong>マトリクス組織</strong></td><td>機能 × 事業 の二重構造</td><td>複雑な大企業</td><td>指揮系統の混乱</td></tr>
                        <tr><td><strong>プロジェクト型</strong></td><td>プロジェクト単位で編成</td><td>SIer、コンサル</td><td>ナレッジの断片化</td></tr>
                        <tr><td><strong>ネットワーク型</strong></td><td>外部パートナーとの連携</td><td>スタートアップ</td><td>コントロールの困難さ</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📘 SIerの組織設計の特殊性</div>
                    <p>SIerは「機能別（技術・営業・管理）」×「プロジェクト型」のハイブリッド組織が多く、
                    メンバーは<strong>所属部署のライン上司</strong>と<strong>プロジェクトのPM</strong>の二重のレポートラインを持ちます。
                    この構造の運用がうまくいくかどうかがSIerの組織力を左右します。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🌍 組織文化</h2>
                <p>エドガー・シャインの3層モデルで組織文化を理解します。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>層</th><th>内容</th><th>可視性</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>人工物（Artifacts）</strong></td><td>目に見える文化の表れ</td><td>高い</td><td>オフィス環境、服装、社内イベント</td></tr>
                        <tr><td><strong>標榜する価値観</strong></td><td>公式に掲げる理念や方針</td><td>中程度</td><td>企業ミッション、行動規範</td></tr>
                        <tr><td><strong>基本的前提認識</strong></td><td>無意識の信念・思い込み</td><td>低い</td><td>「上が決めたことに従うべき」「技術力が全て」</td></tr>
                    </tbody>
                </table>

                <h3>文化変革のアプローチ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>ステップ</th><th>内容</th><th>具体例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 現状認識</strong></td><td>現在の文化を客観的に把握</td><td>社員アンケート、外部コンサル診断</td></tr>
                        <tr><td><strong>2. 目指す文化の定義</strong></td><td>理想の文化を言語化</td><td>「挑戦を奨励する文化」「顧客価値第一」</td></tr>
                        <tr><td><strong>3. ギャップの特定</strong></td><td>現在と理想の差を明確化</td><td>コミュニケーション不足、縦割り意識</td></tr>
                        <tr><td><strong>4. 介入施策</strong></td><td>制度・行動・シンボルの変更</td><td>人事制度改革、オフィス改善、タウンホール</td></tr>
                        <tr><td><strong>5. 定着と強化</strong></td><td>日常的な文化の実践</td><td>リーダーの率先、成功事例の共有</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🌈 ダイバーシティ&インクルージョン（D&I）</h2>
                <p>D&Iは道徳的な要請だけでなく、<strong>イノベーションと業績の源泉</strong>としてのビジネス的意義があります。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>概念</th><th>定義</th><th>組織への効果</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>ダイバーシティ</strong></td><td>多様な人材が存在すること</td><td>多角的な視点、創造性の向上</td></tr>
                        <tr><td><strong>インクルージョン</strong></td><td>多様な人材が活躍できる環境</td><td>エンゲージメント向上、離職率低下</td></tr>
                        <tr><td><strong>エクイティ</strong></td><td>公平な機会と支援の提供</td><td>潜在能力の最大化</td></tr>
                        <tr><td><strong>ビロンギング</strong></td><td>帰属意識を持てること</td><td>心理的安全性、チームワーク</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ D&Iの落とし穴</div>
                    <p>・<strong>数合わせ</strong>にならないこと — 女性管理職比率だけを追うのは本末転倒</p>
                    <p>・<strong>同質性バイアス</strong> — 「自分と似た人を採用・登用する」無意識のバイアス</p>
                    <p>・<strong>形だけのインクルージョン</strong> — 多様な人材がいても意見が反映されなければ意味がない</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📐 組織設計の実践知</h2>

                <h3>スパン・オブ・コントロール</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>項目</th><th>狭いスパン（3〜5人）</th><th>広いスパン（10〜20人）</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>マネジメント</strong></td><td>手厚い指導・監督</td><td>自律性重視</td></tr>
                        <tr><td><strong>適する場面</strong></td><td>新人多い、複雑業務</td><td>ベテラン中心、定型業務</td></tr>
                        <tr><td><strong>組織階層</strong></td><td>深い（階層が多い）</td><td>浅い（フラット）</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 組織設計で経営幹部候補が考えるべきこと</div>
                    <p>・<strong>戦略と組織は一体</strong> — 組織を変えずに戦略だけ変えても機能しない</p>
                    <p>・<strong>構造よりも運用</strong> — 組織図を変えるだけでは何も変わらない。運用（会議体、情報フロー、評価制度）が鍵</p>
                    <p>・<strong>文化は制度より強い</strong> — 制度を変えても文化が変わらなければ元に戻る</p>
                </div>
            </div>

            <div id="day32-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day32-quiz', 'day32-quiz', [
            {
                question: '「戦略が組織を規定する」と提唱した経営学者は誰ですか？',
                options: ['ピーター・ドラッカー', 'マイケル・ポーター', 'アルフレッド・チャンドラー', 'ヘンリー・ミンツバーグ'],
                correct: 2,
                explanation: 'アルフレッド・チャンドラーは「Structure follows Strategy（構造は戦略に従う）」と提唱し、戦略と組織の関係を明らかにしました。'
            },
            {
                question: 'エドガー・シャインの組織文化モデルで最も可視性が低い層はどれですか？',
                options: ['人工物（Artifacts）', '標榜する価値観', '基本的前提認識', '行動規範'],
                correct: 2,
                explanation: '基本的前提認識は無意識の信念や思い込みであり、組織文化の最深層で最も見えにくいですが、最も強力に行動を支配します。'
            },
            {
                question: 'マトリクス組織の最大のリスクはどれですか？',
                options: ['コストが高い', '指揮系統の混乱（二重レポート）', '人材が育たない', '意思決定が速すぎる'],
                correct: 1,
                explanation: 'マトリクス組織では機能軸と事業軸の二重のレポートラインが生じ、指揮系統の混乱や責任の不明確化が起こりやすくなります。'
            },
            {
                question: 'D&Iにおける「インクルージョン」の意味はどれですか？',
                options: ['多様な人材を採用すること', '多様な人材が活躍できる環境を作ること', '全員に同じ待遇を与えること', '管理職の多様性を高めること'],
                correct: 1,
                explanation: 'インクルージョンとは、多様な背景を持つ人材が組織の中で受け入れられ、意見が尊重され、能力を発揮できる環境を整えることです。'
            },
            {
                question: '組織文化の変革で最も重要なのはどれですか？',
                options: ['組織図を変更すること', '制度を改革すること', 'リーダーが率先して新しい行動を示すこと', '外部コンサルタントを雇うこと'],
                correct: 2,
                explanation: '組織文化の変革にはリーダーの率先行動が最も効果的です。制度や組織図も重要ですが、リーダーの行動が伴わなければ文化は変わりません。'
            }
        ]);
    }
};
