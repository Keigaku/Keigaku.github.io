// ===========================
// Day 147: フロントUI設計とトレーダーUX
// ===========================
window.Day147 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🖥️ トレーダー向けフロントUI</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「1秒の遅れが数千万円のロスに」</div>
                    <p>Be-DFSのフロント画面は<strong>マーケットが動いている中で即座に判断・入力する</strong>トレーダーが使います。<br>
                    一般的なWebアプリのUXとは要求水準が全く異なり、<strong>情報密度の高さ・レスポンスの速さ・データの正確さ</strong>が最優先です。</p>
                </div>
                
                <h3>Be-DFS の主要画面</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>画面名</th><th>主な機能</th><th>ユーザー</th></tr></thead>
                    <tbody>
                        <tr><td><strong>トレードエントリー</strong></td><td>新規取引の入力。商品タイプ選択 → 条件入力 → プライシング → Submit</td><td>トレーダー</td></tr>
                        <tr><td><strong>ブロッター</strong></td><td>当日の約定一覧。リアルタイム更新。フィルタ・ソート</td><td>トレーダー、セールス</td></tr>
                        <tr><td><strong>ポジションビュー</strong></td><td>ブック/カウンターパーティ別のポジション一覧</td><td>トレーダー、リスク</td></tr>
                        <tr><td><strong>P&Lダッシュボード</strong></td><td>リアルタイムP&L表示。ブック別・通貨別の損益</td><td>トレーダー、マネジメント</td></tr>
                        <tr><td><strong>リスク画面</strong></td><td>Greeks（DV01等）の表示。テナーバケット別</td><td>トレーダー、リスク</td></tr>
                        <tr><td><strong>カーブ/マーケットデータ</strong></td><td>現在のイールドカーブ、為替レート等の確認</td><td>トレーダー、クオンツ</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>⚡ トレーダーUXの特殊要件</h2>

                <h3>1. リアルタイム更新</h3>
                <ul class="feature-list">
                    <li><strong>WebSocket / Server-Sent Events</strong>：P&L、ポジション、マーケットデータがリアルタイムで画面に反映される必要がある</li>
                    <li><strong>差分更新</strong>：画面全体をリロードするのではなく、変更のあったセルだけを更新（パフォーマンス）</li>
                    <li><strong>色による変化の強調</strong>：値が上がると緑、下がると赤にフラッシュ（ブリンク）</li>
                </ul>

                <h3>2. 情報密度とレイアウト</h3>
                <ul class="feature-list">
                    <li><strong>高密度テーブル（グリッド）</strong>：大量のデータを一画面に表示。スクロールではなく「一目で全体を把握」が理想</li>
                    <li><strong>マルチモニタ対応</strong>：トレーダーは通常4〜6枚のモニタを使用。ウィンドウのアンドック・配置自由</li>
                    <li><strong>キーボードショートカット</strong>：マウスクリックよりキーボード操作を重視</li>
                </ul>

                <h3>3. トレードエントリーの入力補助</h3>
                <div class="info-box tip">
                    <div class="info-box-title">💡 入力ミスを防ぐUI設計</div>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>商品テンプレート</strong>：IRS, TRS等の商品を選ぶと、必要な入力項目が自動展開</li>
                        <li><strong>オートコンプリート</strong>：カウンターパーティ名、銘柄コードの入力補助</li>
                        <li><strong>リアルタイムバリデーション</strong>：入力中にエラーを即座にフィードバック</li>
                        <li><strong>What-If計算</strong>：Submitする前に「この条件だとPVはいくら？」をプレビュー</li>
                        <li><strong>ブック自動設定</strong>：トレーダーのデスク/権限に応じたデフォルトブック自動選択</li>
                    </ul>
                </div>

                <h3>4. フロントアプリケーション技術選定</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>技術</th><th>特徴</th><th>採用例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>デスクトップアプリ</strong><br>(WPF/WinForms/Java Swing)</td><td>高速、マルチウィンドウ、キーボード操作◎</td><td>レガシーシステムに多い</td></tr>
                        <tr><td><strong>Web（React + WebSocket）</strong></td><td>デプロイ容易、クロスプラット</td><td>モダンシステムの主流</td></tr>
                        <tr><td><strong>Electron / OpenFin</strong></td><td>Webの柔軟性 + デスクトップの機能</td><td>金融フロントで急拡大</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day147-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day147-quiz', 'day147-quiz', [
            { question: 'トレーダー向けUIにおいて「ブロッター」とは何を表示する画面ですか？', options: ['イールドカーブのグラフ', '当日の約定一覧をリアルタイムで更新表示する画面', 'システムのエラーログ', '社内チャット'], correct: 1, explanation: 'ブロッター（Blotter）は、当日のトレード約定を一覧表示する画面です。新規取引がブッキングされるとリアルタイムで追加され、ステータス変更もリアルタイムで反映されます。トレーダーはこの画面で自分の取引を常時監視します。' },
            { question: 'トレーダー向けUI設計において、画面更新にWebSocket/SSEを使う理由として最も適切なものはどれですか？', options: ['セキュリティを強化するため', 'P&Lやマーケットデータをリアルタイムで画面に反映するため', '画面のデザインを美しくするため', 'データベースの負荷を下げるため'], correct: 1, explanation: 'WebSocket/SSEを使用することで、サーバからクライアントへプッシュ通知でリアルタイムにデータを配信できます。P&L、ポジション、マーケットデータなどが変動するたびに画面を即座に更新する必要があるため、ポーリング（定期的なリクエスト）ではなくプッシュ型が適しています。' },
            { question: 'トレードエントリー画面における「What-If計算」の目的はどれですか？', options: ['取引を自動的に承認すること', 'Submit前に「この条件だとPVはいくらか」をプレビューすること', 'バックオフィスにデータを送信すること', 'マーケットデータを更新すること'], correct: 1, explanation: 'What-If計算は、トレーダーがブッキング（Submit）する前に、入力した取引条件でのPV（現在価値）やリスク指標を事前にシミュレーションする機能です。「この条件で約定して良いか」の判断材料を提供します。' },
            { question: '金融フロントアプリケーションで「OpenFin」のような技術が採用される理由はどれですか？', options: ['サーバサイドの処理を高速化するため', 'Webの柔軟性（デプロイ容易・クロスプラット）とデスクトップアプリの機能（マルチウィンドウ・アンドック）を両立するため', 'データベースを不要にするため', 'プログラミングが不要になるため'], correct: 1, explanation: 'OpenFinやElectronは、Webアプリケーション（HTML/CSS/JS）の開発効率とデプロイの容易さを保ちつつ、マルチウィンドウ・アンドック・システムトレイ統合等のデスクトップアプリ固有の機能を実現できるフレームワークで、金融フロントでの採用が急拡大しています。' }
        ]);
    }
};
