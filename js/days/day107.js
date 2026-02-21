// ===========================
// Day 107: 16:00-17:00 ドキュメント作成・ナレッジ共有
// ===========================
window.Day107 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📝 16:00 — ドキュメント作成の時間</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>16時台は思考がまとまりやすい時間帯。設計書・議事録・チーム向けドキュメントの作成に充てます。
                    「出来る社員」は<strong>ピラミッド原則</strong>で論理構成を組み立て、
                    <strong>SDS法</strong>でわかりやすく伝え、<strong>5W1H</strong>で情報の漏れを防ぎます。</p>
                </div>
                <h3>🏛️ 16:00-16:20 — 論理構成（ピラミッド原則）</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：ピラミッド原則（バーバラ・ミント）</div>
                    <p><strong>結論を頂点</strong>に置き、その根拠を階層的に示す文書構成法。マッキンゼーで開発された手法です。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>階層</th><th>内容</th><th>設計書での適用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>頂点（結論）</strong></td><td>最も伝えたいメッセージ</td><td>「マイクロサービス化により処理時間を80%削減する」</td></tr>
                        <tr><td><strong>Key Line（主要論点）</strong></td><td>結論を支える3つ程度の根拠</td><td>①アーキテクチャ変更 ②DB最適化 ③キャッシュ導入</td></tr>
                        <tr><td><strong>支持情報</strong></td><td>各論点の詳細・データ</td><td>各施策の技術仕様、性能見積もり、工数</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 ピラミッド原則の3つのルール</div>
                    <p>・<strong>どの階層も MECE</strong> であること（漏れなくダブりなく）</p>
                    <p>・<strong>上位は下位の要約</strong>であること（So What?テスト）</p>
                    <p>・<strong>同一階層は同種の論理</strong>であること（帰納法 or 演繹法で統一）</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📢 16:20-16:40 — わかりやすい説明（SDS法 + 5W1H）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：SDS法</div>
                    <p><strong>Summary（要約）→ Details（詳細）→ Summary（まとめ）</strong></p>
                    <p>聞き手・読み手が理解しやすい「サンドイッチ構造」のフレームワークです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>内容</th><th>障害報告書での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Summary（要約）</strong></td><td>全体像を端的に伝える</td><td>「本日10:00-10:30、リスク計算サーバの過負荷により日次VaR計算が30分遅延しました」</td></tr>
                        <tr><td><strong>Details（詳細）</strong></td><td>時系列・原因・対応・影響を記述</td><td>時系列経緯、原因（メモリリーク）、暫定対応（再起動）、影響範囲</td></tr>
                        <tr><td><strong>Summary（まとめ）</strong></td><td>結論と今後のアクション</td><td>「恒久対応としてメモリ管理の改修を来週リリース予定。再発防止策を添付」</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：5W1H</div>
                    <p>情報の漏れを防ぐチェックフレーム。あらゆるドキュメントの品質向上に使えます。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>要素</th><th>質問</th><th>議事録での適用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Who</strong></td><td>誰が？</td><td>担当：田中、レビュア：鈴木</td></tr>
                        <tr><td><strong>What</strong></td><td>何を？</td><td>リスク計算バッチのリファクタリング</td></tr>
                        <tr><td><strong>When</strong></td><td>いつまで？</td><td>3/15（金）までに完了</td></tr>
                        <tr><td><strong>Where</strong></td><td>どこで？</td><td>ステージング環境でテスト後、本番適用</td></tr>
                        <tr><td><strong>Why</strong></td><td>なぜ？</td><td>夜間バッチ遅延の恒久対策として</td></tr>
                        <tr><td><strong>How</strong></td><td>どうやって？</td><td>並列処理導入 + クエリ最適化</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📚 16:40-17:00 — ナレッジ共有の仕組み化</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>目的</th><th>ツール例</th><th>金融PJでの活用</th></tr></thead>
                    <tbody>
                        <tr><td><strong>社内Wiki</strong></td><td>暗黙知の形式知化</td><td>Confluence, Notion</td><td>運用手順、障害対応ノウハウ、設計判断記録</td></tr>
                        <tr><td><strong>技術ブログ</strong></td><td>チーム外への発信</td><td>Qiita, Zenn</td><td>技術的な知見の外部発信（社内承認の上）</td></tr>
                        <tr><td><strong>勉強会（LT）</strong></td><td>知識の横展開</td><td>社内イベント</td><td>週次15分のLT（ライトニングトーク）</td></tr>
                        <tr><td><strong>ペアプログラミング</strong></td><td>スキル伝承</td><td>VS Code Live Share</td><td>ジュニアメンバーへのOJT</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 出来る社員のドキュメント術</div>
                    <p>・ドキュメントは<strong>「未来の自分」への手紙</strong>として書く</p>
                    <p>・<strong>テンプレート</strong>を用意して書き出しのハードルを下げる</p>
                    <p>・<strong>図表を多用</strong>し、文字の壁を作らない</p>
                    <p>・<strong>更新日と作成者</strong>を必ず記載し、鮮度がわかるようにする</p>
                    <p>・「書いて終わり」ではなく<strong>チームへの共有・レビュー</strong>まで行う</p>
                </div>
            </div>
            <div id="day107-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day107-quiz', 'day107-quiz', [
            { question: 'ピラミッド原則の頂点に置くべきものはどれですか？', options: ['背景情報', '結論（最も伝えたいメッセージ）', 'データの一覧', '目次'], correct: 1, explanation: 'ピラミッド原則では結論を頂点に置き、その根拠を階層的に示すことで読み手の理解を促進します。' },
            { question: 'SDS法の正しい構造はどれですか？', options: ['Story→Data→Summary', 'Summary→Details→Summary', 'Situation→Decision→Solution', 'Start→Develop→Stop'], correct: 1, explanation: 'SDS法は Summary（要約）→ Details（詳細）→ Summary（まとめ）の構造です。' },
            { question: '5W1Hに含まれないものはどれですか？', options: ['Who', 'How much', 'What', 'When'], correct: 1, explanation: '5W1Hは Who, What, When, Where, Why, How の6要素です。How muchは含まれません（5W2Hには含まれます）。' },
            { question: 'ナレッジ共有で「暗黙知を形式知化する」手法として最も適切なものはどれですか？', options: ['口伝で伝える', '社内Wikiに手順書として記録する', '記憶に頼る', '独り占めする'], correct: 1, explanation: '暗黙知（経験や勘）をWikiなどに文書化することで、チーム全体で活用できる形式知に変換できます。' },
            { question: 'ドキュメントに更新日と作成者を記載する最大の理由はどれですか？', options: ['フォーマットの統一', '情報の鮮度と責任の所在を明確にするため', '文字数を増やすため', '上司の指示だから'], correct: 1, explanation: '更新日により情報が最新かどうかを判断でき、作成者により質問先がわかります。' }
        ]);
    }
};
