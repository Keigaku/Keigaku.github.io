// ===========================
// Day 24: 金融SIerでの開発手法
// ===========================
window.Day24 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔧 ウォーターフォールとアジャイル</h2>
                <p>金融SIerでは従来ウォーターフォール（WF）が主流でしたが、近年は<strong>ハイブリッドアプローチ</strong>が増えています。
                どちらかに偏るのではなく、プロジェクトの特性に応じて最適な手法を選択・組み合わせることが重要です。</p>

                <h3>ウォーターフォール vs アジャイル</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>項目</th><th>ウォーターフォール</th><th>アジャイル（スクラム）</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>計画</strong></td><td>事前に全体を詳細計画</td><td>スプリントごとに計画</td></tr>
                        <tr><td><strong>変更対応</strong></td><td>変更管理プロセスで対応（重い）</td><td>バックログで柔軟に優先順位変更</td></tr>
                        <tr><td><strong>成果物</strong></td><td>フェーズごとの設計書</td><td>動くソフトウェア（インクリメント）</td></tr>
                        <tr><td><strong>テスト</strong></td><td>開発完了後に集中的にテスト</td><td>各スプリントでテストを含む</td></tr>
                        <tr><td><strong>リスク検出</strong></td><td>後工程で発覚しがち</td><td>早期にフィードバック取得</td></tr>
                        <tr><td><strong>監査対応</strong></td><td>ドキュメントが豊富で対応しやすい</td><td>別途ドキュメント作成が必要</td></tr>
                        <tr><td><strong>金融との相性</strong></td><td>規制・ドキュメント要件に適合</td><td>迅速なデリバリーに適合</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🔀 ハイブリッドアプローチ</h2>
                <p>金融SIerで増えている「いいとこ取り」の開発手法です。</p>

                <h3>典型的なハイブリッドパターン</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>パターン</th><th>内容</th><th>適用場面</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>WF + アジャイル開発</strong></td><td>要件定義・基本設計はWF、実装以降はスクラム</td><td>要件は固まるが実装に不確実性がある</td></tr>
                        <tr><td><strong>フェーズ内スプリント</strong></td><td>WFの各フェーズ内で2週間のイテレーション</td><td>WFの枠組みを維持しつつ柔軟性を確保</td></tr>
                        <tr><td><strong>プロトタイプ→WF</strong></td><td>アジャイルでプロトタイプ→WFで本開発</td><td>UI/UX重視の案件、新技術導入</td></tr>
                        <tr><td><strong>SAFe</strong></td><td>大規模アジャイルフレームワーク</td><td>100人以上のプロジェクト</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">📘 クオンツ開発でのベストプラクティス</div>
                    <p>クオンツシステム開発では以下のハイブリッドが効果的です：</p>
                    <p>・<strong>モデル開発</strong>：アジャイル的（プロトタイプ→検証→改良の反復）</p>
                    <p>・<strong>基盤システム</strong>：ウォーターフォール的（設計→実装→テストの段階的進行）</p>
                    <p>・<strong>UI/レポート</strong>：スクラム（短サイクルでユーザーフィードバック取得）</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>✅ 品質管理（Quality Management）</h2>
                <p>金融システムの品質は<strong>社会インフラの信頼性</strong>に直結します。</p>

                <h3>テスト戦略</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>テストレベル</th><th>内容</th><th>実施者</th><th>クオンツ特有の観点</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>単体テスト</strong></td><td>関数レベルの動作確認</td><td>開発者</td><td>数値精度、境界値、特殊ケース</td></tr>
                        <tr><td><strong>結合テスト</strong></td><td>モジュール間連携テスト</td><td>テストチーム</td><td>カーブ→プライシング→リスクの連携</td></tr>
                        <tr><td><strong>システムテスト</strong></td><td>システム全体の動作確認</td><td>テストチーム</td><td>EOD一気通貫、大量データ</td></tr>
                        <tr><td><strong>UAT</strong></td><td>ユーザー受入テスト</td><td>クライアント</td><td>業務シナリオでの検証</td></tr>
                        <tr><td><strong>性能テスト</strong></td><td>処理速度・スループット</td><td>テストチーム</td><td>MC計算のスケーラビリティ</td></tr>
                    </tbody>
                </table>

                <h3>品質メトリクス</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>メトリクス</th><th>計算方法</th><th>目標値（目安）</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>バグ密度</strong></td><td>バグ数 / KLOC</td><td>0.5〜2.0 件/KLOC</td></tr>
                        <tr><td><strong>テストカバレッジ</strong></td><td>テスト済みコード / 全コード</td><td>80%以上</td></tr>
                        <tr><td><strong>レビュー指摘率</strong></td><td>指摘件数 / 成果物ページ数</td><td>1〜3 件/ページ</td></tr>
                        <tr><td><strong>障害収束率</strong></td><td>累計障害数のS字カーブ</td><td>テスト終盤に収束</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🏁 出来るPMの心得</h2>

                <div class="info-box tip">
                    <div class="info-box-title">✨ PMとして覚えておくべきこと</div>
                    <p>・<strong>完璧な計画はない</strong> — 計画は変わるものと認識し、変化に適応する</p>
                    <p>・<strong>早期の問題検出が最も安い</strong> — 要件定義のバグ修正は100倍安い</p>
                    <p>・<strong>コミュニケーションが90%</strong> — PMの仕事の大部分はコミュニケーション</p>
                    <p>・<strong>「何を測るかが何を達成するか」</strong> — 適切なメトリクスが行動を変える</p>
                    <p>・<strong>バッドニュースは早く</strong> — 問題を隠すのは最悪の選択</p>
                </div>
            </div>

            <div id="day24-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day24-quiz', 'day24-quiz', [
            {
                question: 'ウォーターフォール開発の金融SIerにおける最大のメリットはどれですか？',
                options: ['変更に柔軟に対応できる', '規制・監査対応のドキュメントが充実する', '開発速度が最も速い', 'チーム規模が小さくて済む'],
                correct: 1,
                explanation: 'WF開発では各フェーズで詳細なドキュメント（設計書、テスト仕様書等）を作成するため、金融規制や監査への対応が容易です。'
            },
            {
                question: 'ハイブリッドアプローチで「プロトタイプ→WF」パターンが適している場面はどれですか？',
                options: ['要件が完全に固まっている場合', 'UI/UX重視の案件や新技術導入時', '10人以下の小規模チーム', '保守・運用フェーズ'],
                correct: 1,
                explanation: 'プロトタイプでアジャイルに素早く形を作り、フィードバックを得た後にWFで堅牢に本開発する手法は、UI/UX重視や新技術案件に効果的です。'
            },
            {
                question: 'バグ密度の計算方法はどれですか？',
                options: ['バグ数 × テスト工数', 'バグ数 / コード行数（KLOC）', 'バグ数 / チームメンバー数', 'バグ数 / テストケース数'],
                correct: 1,
                explanation: 'バグ密度はバグ数をKLOC（1000行単位のコード行数）で割って算出します。品質の定量的な指標として広く使われています。'
            },
            {
                question: '「要件定義のバグ修正は100倍安い」とはどういう意味ですか？',
                options: ['要件定義フェーズのコストが安い', '早期に発見した不具合ほど修正コストが低い', '要件定義書の修正が容易', 'テストフェーズを省略できる'],
                correct: 1,
                explanation: '不具合の修正コストは発見が遅くなるほど指数関数的に増大します。要件定義段階で発見すればドキュメント修正のみで済みますが、本番稼働後は影響範囲が膨大になります。'
            },
            {
                question: 'クオンツシステム開発での最適な品質管理アプローチはどれですか？',
                options: ['ドキュメントを最小限にして速度を重視する', '数値精度の検証を含む多段階テストを実施する', 'UAT（ユーザー受入テスト）のみ実施する', '完全自動テストのみに頼る'],
                correct: 1,
                explanation: 'クオンツシステムでは数値計算の精度が重要なため、数値精度・境界値・特殊ケースの検証を含む多段階テスト（単体→結合→システム→UAT）が不可欠です。'
            }
        ]);
    }
};
