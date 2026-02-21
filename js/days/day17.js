// ===========================
// Day 17: 赤い銀行について知っておくべきこと
// ===========================
window.Day17 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔴 メインクライアントを理解する</h2>
                <p>私たちのチームが主に担当するクライアントは、日本を代表するメガバンクグループです。
                クライアントの組織・業務・文化を理解することは、システム開発の品質に直結します。</p>

                <div class="info-box important">
                    <div class="info-box-title">🎯 なぜクライアントを理解すべきか</div>
                    <p><strong>1. 要件の背景が分かる</strong> — なぜその機能が必要かを理解できる</p>
                    <p><strong>2. 的確な提案ができる</strong> — クライアントの課題を先回りして解決できる</p>
                    <p><strong>3. コミュニケーションがスムーズ</strong> — 業界用語・組織構造を知っていると会話が通じる</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🏦 メガバンクの組織構造</h2>
                <p>メガバンクは非常に大きな組織であり、複数のグループ会社と部門で構成されています。</p>

                <h3>典型的なメガバンクグループの構成</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>エンティティ</th><th>役割</th><th>主な業務</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>持株会社（FG/FHD）</strong></td><td>グループ統括</td><td>経営戦略、グループガバナンス</td></tr>
                        <tr><td><strong>商業銀行</strong></td><td>預金・融資</td><td>法人向け貸出、リテール、為替取引</td></tr>
                        <tr><td><strong>信託銀行</strong></td><td>資産管理・年金</td><td>信託業務、不動産、年金運用</td></tr>
                        <tr><td><strong>証券会社</strong></td><td>債券・株式引受</td><td>市場業務、投資銀行業務</td></tr>
                        <tr><td><strong>資産運用会社</strong></td><td>運用</td><td>投資信託、機関投資家向け運用</td></tr>
                    </tbody>
                </table>

                <h3>市場部門（マーケット業務）の構造</h3>
                <p>私たちが関わるのは主に<strong>市場部門（マーケット部門）</strong>です。</p>
                <table class="styled-table">
                    <thead>
                        <tr><th>部門</th><th>機能</th><th>関連システム</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>フロントオフィス</strong></td><td>トレーディング・営業</td><td>取引システム、プライシングツール</td></tr>
                        <tr><td><strong>ミドルオフィス</strong></td><td>リスク管理・損益管理</td><td>リスク計算エンジン、P&Lシステム</td></tr>
                        <tr><td><strong>バックオフィス</strong></td><td>決済・事務・経理</td><td>約定照合、決済システム</td></tr>
                        <tr><td><strong>クオンツ部門</strong></td><td>モデル開発・検証</td><td>価格計算ライブラリ、XVAエンジン</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>💹 私たちが開発するシステム</h2>

                <h3>クオンツシステムの全体像</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>システム領域</th><th>概要</th><th>技術的特徴</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>プライシングエンジン</strong></td><td>デリバティブの理論価格を計算</td><td>モンテカルロ法、有限差分法</td></tr>
                        <tr><td><strong>リスク計算エンジン</strong></td><td>VaR、感応度、ストレステスト</td><td>大量データの並列処理</td></tr>
                        <tr><td><strong>XVAエンジン</strong></td><td>CVA/DVA/FVA等の評価調整計算</td><td>重い計算、GPUの活用も</td></tr>
                        <tr><td><strong>約定管理システム</strong></td><td>取引の約定・管理</td><td>高い信頼性、リアルタイム性</td></tr>
                        <tr><td><strong>規制報告システム</strong></td><td>バーゼルIII等の規制対応</td><td>正確性・期限厳守</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">💻 使われる技術スタック</div>
                    <p>・<strong>フロントエンド</strong>：Excel VBA、C# WPF、Webアプリ</p>
                    <p>・<strong>バックエンド</strong>：C#/.NET、Python、C++</p>
                    <p>・<strong>計算エンジン</strong>：C++、CUDA（GPU計算）</p>
                    <p>・<strong>データベース</strong>：SQL Server、Oracle</p>
                    <p>・<strong>ジョブ管理</strong>：JP1、SystemWalker</p>
                    <p>・<strong>バージョン管理</strong>：Git（GitLab/GitHub Enterprise）</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>⚠️ 開発における留意点</h2>

                <h3>銀行特有の制約</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>カテゴリ</th><th>制約</th><th>理由</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>セキュリティ</strong></td><td>開発ネットワークは銀行のセキュリティポリシーに準拠</td><td>機密情報保護（個人情報、取引情報）</td></tr>
                        <tr><td><strong>リリース管理</strong></td><td>厳格なリリース手順（承認フロー多段階）</td><td>金融システムの安定性確保</td></tr>
                        <tr><td><strong>ドキュメント</strong></td><td>設計書・テスト仕様書等のドキュメントが必須</td><td>監査対応、属人化防止</td></tr>
                        <tr><td><strong>テスト</strong></td><td>単体→結合→総合テストの段階的な品質確認</td><td>本番障害の影響が大きいため</td></tr>
                        <tr><td><strong>障害対応</strong></td><td>障害時は即時報告・迅速な対応が求められる</td><td>金融取引への影響を最小化</td></tr>
                    </tbody>
                </table>

                <h3>コミュニケーションの注意点</h3>
                <div class="info-box warning">
                    <div class="info-box-title">🚨 クライアント対応で気をつけること</div>
                    <p>・<strong>敬語は必須</strong>：メール・対面とも丁寧な敬語を使う</p>
                    <p>・<strong>クライアント名の取り扱い</strong>：社外・SNSでクライアント名やプロジェクト詳細を口にしない</p>
                    <p>・<strong>「赤い銀行」等の通称</strong>：社内でのみ使用可。社外では正式名称を使う</p>
                    <p>・<strong>名刺・資料の取り扱い</strong>：クライアントからもらった資料は情報管理規定に従う</p>
                    <p>・<strong>常駐先でのマナー</strong>：お客様のオフィスにいる意識を常に持つ</p>
                </div>

                <h3>仕事を進める上でのTips</h3>
                <ul>
                    <li><strong>銀行の決裁ラインを理解する</strong> — 承認者が複数いることが多い</li>
                    <li><strong>会議体の種類を把握する</strong> — 定例会、課題管理会、レビュー会など</li>
                    <li><strong>銀行カレンダーを意識する</strong> — 年度末（3月）、中間決算（9月）は特に多忙</li>
                    <li><strong>業務時間の違い</strong> — 市場取引は早朝から（トレーダーは7時台出社も）</li>
                    <li><strong>専門用語を覚える</strong> — Day 15で学んだ用語は実際の会議で頻出</li>
                </ul>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🎓 まとめ：プロフェッショナルとして</h2>

                <div class="info-box tip">
                    <div class="info-box-title">✨ 信頼されるSEになるために</div>
                    <p>・クライアントの業務を深く理解する努力を続ける</p>
                    <p>・「言われたことをやる」だけでなく、「こうした方が良いのでは」と提案する</p>
                    <p>・品質への妥協をしない（金融システムのバグは社会的影響が大きい）</p>
                    <p>・チーム内外での信頼関係を大切にする</p>
                    <p>・常にセキュリティとコンプライアンスを意識する</p>
                </div>
            </div>

            <div id="day17-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day17-quiz', 'day17-quiz', [
            {
                question: 'メガバンクの「フロントオフィス」の主な機能はどれですか？',
                options: ['リスク管理・コンプライアンス', 'トレーディング・営業', '決済・事務・経理', 'システム開発・保守'],
                correct: 1,
                explanation: 'フロントオフィスはトレーディング（市場取引）と営業を担当する部門で、直接収益を上げる部門です。'
            },
            {
                question: '私たちが主に関わるのはどの部門ですか？',
                options: ['リテール部門', '法人融資部門', '市場部門（マーケット部門）', '人事部門'],
                correct: 2,
                explanation: '私たちは市場部門（マーケット部門）に関わるクオンツシステム開発を行っています。デリバティブの価格計算やリスク管理が主な領域です。'
            },
            {
                question: '銀行システム開発で特に重要な制約はどれですか？',
                options: ['開発速度を最優先する', '設計書なしでアジャイル開発する', '厳格なリリース手順と品質確認', 'コストを最小限に抑える'],
                correct: 2,
                explanation: '金融システムは障害時の社会的影響が大きいため、厳格なリリース手順（多段階の承認フロー）と段階的な品質確認（単体→結合→総合テスト）が求められます。'
            },
            {
                question: 'クライアント対応で適切な行動はどれですか？',
                options: ['SNSでプロジェクトの進捗を共有する', '社外でクライアントの通称を使う', '丁寧な敬語を使い情報管理を徹底する', 'メールは友達感覚でカジュアルに書く'],
                correct: 2,
                explanation: '金融機関をクライアントとする場合、敬語の使用と情報管理の徹底は絶対条件です。クライアント名やプロジェクト詳細は社外で口にしてはいけません。'
            },
            {
                question: 'XVAエンジンで計算するものはどれですか？',
                options: ['従業員の給与計算', 'CVA/DVA/FVA等の評価調整', '株価のテクニカル分析', 'ローンの返済シミュレーション'],
                correct: 1,
                explanation: 'XVAエンジンはCVA（信用評価調整）/DVA（デビット評価調整）/FVA（資金調達評価調整）などの計算を行います。デリバティブの公正価値評価に不可欠です。'
            }
        ]);
    }
};
