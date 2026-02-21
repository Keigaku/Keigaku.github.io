// ===========================
// Day 33: 事業開発とイノベーション
// ===========================
window.Day33 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💡 イノベーションの類型</h2>
                <p>経営幹部候補に求められるのは、既存事業を守りながら<strong>新しい成長の柱を作る力</strong>です。
                イノベーションを体系的に理解し、組織的に推進する方法を学びます。</p>

                <h3>イノベーションの分類</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>類型</th><th>定義</th><th>金融SIerでの例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>持続的イノベーション</strong></td><td>既存製品・サービスの改善</td><td>計算速度の向上、UI改善</td></tr>
                        <tr><td><strong>破壊的イノベーション</strong></td><td>既存市場の前提を覆す</td><td>クラウドネイティブな金融基盤</td></tr>
                        <tr><td><strong>漸進的イノベーション</strong></td><td>小さな改善の積み重ね</td><td>自動テスト導入、CI/CD整備</td></tr>
                        <tr><td><strong>ラディカルイノベーション</strong></td><td>全く新しいカテゴリの創造</td><td>AI自動プライシングサービス</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🎯 「イノベーションのジレンマ」（クリステンセン）</div>
                    <p>優良企業が<strong>既存顧客の声を聞きすぎる</strong>ことで、破壊的イノベーションに対応できず衰退する。
                    既存の大口クライアントのニーズに応え続けることに集中しすぎると、新しい技術や市場の変化に取り残される危険があります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔄 新規事業開発プロセス</h2>

                <h3>リーンスタートアップ</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>ステップ</th><th>内容</th><th>SIerでの適用</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1. 仮説構築</strong></td><td>顧客の課題と解決策の仮説</td><td>「銀行のリスク計算に1時間以上かかっている」</td></tr>
                        <tr><td><strong>2. MVP（Minimum Viable Product）</strong></td><td>最小限の機能で検証</td><td>簡易プロトタイプで動くものを見せる</td></tr>
                        <tr><td><strong>3. 計測</strong></td><td>仮説を定量的に検証</td><td>PoC結果の測定、顧客フィードバック</td></tr>
                        <tr><td><strong>4. 学習</strong></td><td>ピボットか継続か判断</td><td>データに基づく Go/No-Go判断</td></tr>
                    </tbody>
                </table>

                <h3>ビジネスモデルキャンバス</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>要素</th><th>問い</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>顧客セグメント</strong></td><td>誰のための価値か？</td></tr>
                        <tr><td><strong>価値提案</strong></td><td>どんな課題を解決するか？</td></tr>
                        <tr><td><strong>チャネル</strong></td><td>どうやって届けるか？</td></tr>
                        <tr><td><strong>顧客との関係</strong></td><td>どう関係を構築・維持するか？</td></tr>
                        <tr><td><strong>収益の流れ</strong></td><td>どうやって稼ぐか？</td></tr>
                        <tr><td><strong>リソース</strong></td><td>何が必要か？（人・技術・資金）</td></tr>
                        <tr><td><strong>主要活動</strong></td><td>何をするか？（開発・営業・保守）</td></tr>
                        <tr><td><strong>パートナー</strong></td><td>誰と組むか？</td></tr>
                        <tr><td><strong>コスト構造</strong></td><td>何にコストがかかるか？</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🤝 オープンイノベーション</h2>
                <p>自社だけでなく、外部の知識・技術を活用してイノベーションを実現する手法です。</p>

                <table class="styled-table">
                    <thead>
                        <tr><th>形態</th><th>内容</th><th>金融SIerでの活用</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>スタートアップ協業</strong></td><td>FinTechスタートアップとの共同開発</td><td>AI技術の共同PoC</td></tr>
                        <tr><td><strong>CVC（コーポレートVC）</strong></td><td>スタートアップへの出資</td><td>新技術への早期アクセス</td></tr>
                        <tr><td><strong>アクセラレーター</strong></td><td>スタートアップ支援プログラム</td><td>新事業シーズの発掘</td></tr>
                        <tr><td><strong>産学連携</strong></td><td>大学・研究機関との共同研究</td><td>最先端の数理・AI研究</td></tr>
                        <tr><td><strong>ハッカソン</strong></td><td>短期集中型のアイデア創出</td><td>社内外の人材交流</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 両利きの経営（Ambidexterity）</div>
                    <p>チャールズ・オライリーとマイケル・タッシュマンが提唱：</p>
                    <p>・<strong>深化（Exploit）</strong>：既存事業の効率化・改善を追求する</p>
                    <p>・<strong>探索（Explore）</strong>：新しい可能性の探索に挑戦する</p>
                    <p>優れた企業は両方を同時に行う「両利きの経営」を実践しています。
                    これは組織構造・リソース配分・経営者のリーダーシップの問題です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>📋 新規事業の評価と意思決定</h2>

                <table class="styled-table">
                    <thead>
                        <tr><th>評価軸</th><th>チェック項目</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>市場性</strong></td><td>TAM/SAM/SOM は十分か？成長市場か？</td></tr>
                        <tr><td><strong>競争優位性</strong></td><td>自社が参入する理由は？模倣困難性は？</td></tr>
                        <tr><td><strong>実行可能性</strong></td><td>必要な人材・技術・資金はあるか？</td></tr>
                        <tr><td><strong>財務性</strong></td><td>黒字化までの期間とROIは？</td></tr>
                        <tr><td><strong>戦略的整合性</strong></td><td>全社戦略との整合性はあるか？</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 新規事業のよくある失敗パターン</div>
                    <p>・<strong>技術ドリブンの罠</strong>：「技術があるから」で顧客ニーズ不在のまま始める</p>
                    <p>・<strong>意思決定の遅延</strong>：完璧な事業計画を求めすぎて機を逸する</p>
                    <p>・<strong>既存事業との共食い恐怖</strong>：カニバリゼーションを恐れて動けない</p>
                    <p>・<strong>「小さすぎる」症候群</strong>：大企業が小さい市場を軽視する</p>
                </div>
            </div>

            <div id="day33-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day33-quiz', 'day33-quiz', [
            {
                question: '「イノベーションのジレンマ」で優良企業が衰退する原因はどれですか？',
                options: ['技術力が不足していたから', '既存顧客の声を聞きすぎて破壊的イノベーションに対応できなかった', '経営者が無能だったから', '資金が不足していたから'],
                correct: 1,
                explanation: 'クリステンセンの理論では、優良企業が既存の大口顧客のニーズに応えることに集中しすぎるあまり、新しい破壊的技術への対応が遅れるとされています。'
            },
            {
                question: 'リーンスタートアップの「MVP」とは何ですか？',
                options: ['Most Valuable Player', 'Minimum Viable Product', 'Maximum Value Proposition', 'Market Validation Process'],
                correct: 1,
                explanation: 'MVP（Minimum Viable Product）は仮説を検証するために必要最小限の機能を持つ製品やプロトタイプのことです。'
            },
            {
                question: '「両利きの経営」の2つの要素はどれですか？',
                options: ['攻守', '深化と探索', 'コストと品質', '速度と正確性'],
                correct: 1,
                explanation: '両利きの経営（Ambidexterity）は、既存事業の「深化（Exploit）」と新しい可能性の「探索（Explore）」を同時に行うことです。'
            },
            {
                question: 'ビジネスモデルキャンバスの9要素に含まれないものはどれですか？',
                options: ['価値提案', '顧客セグメント', '競合分析', 'コスト構造'],
                correct: 2,
                explanation: 'ビジネスモデルキャンバスの9要素に「競合分析」は含まれません。競合分析は別のフレームワークで行います。'
            },
            {
                question: 'TAM/SAM/SOMとは何の分析ですか？',
                options: ['技術的実現可能性', '市場規模（全体→獲得可能→現実的獲得）', '組織能力', '顧客満足度'],
                correct: 1,
                explanation: 'TAM（Total Addressable Market）、SAM（Serviceable Available Market）、SOM（Serviceable Obtainable Market）は市場規模を段階的に絞り込んで分析するフレームワークです。'
            }
        ]);
    }
};
