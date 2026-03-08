// ===========================
// Day 136: Be-DFSと証券IT全体像
// ===========================
window.Day136 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏦 Be-DFS とは何か</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 Be-DFS = Booking Derivative Front System</div>
                    <p>Be-DFSは証券会社のフロントオフィスに位置する<strong>OTCデリバティブ取引のブッキング（約定登録）システム</strong>です。<br>
                    トレーダーが他行・顧客との間で合意した取引条件をシステムに登録し、プライシング（時価評価）やリスク計算を行い、バックオフィスへ連携する——証券ビジネスの「心臓部」の一つです。</p>
                </div>
                
                <h3>名前に隠された役割</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>略称</th><th>正式名</th><th>意味</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Be</strong></td><td>Booking</td><td>取引を正式にシステムに登録する行為。約定エントリーとも呼ぶ</td></tr>
                        <tr><td><strong>D</strong></td><td>Derivative</td><td>対象商品はOTCデリバティブ（スワップ、オプション等）</td></tr>
                        <tr><td><strong>F</strong></td><td>Front</td><td>フロントオフィス向けシステム（トレーダー・セールスが利用）</td></tr>
                        <tr><td><strong>S</strong></td><td>System</td><td>ITシステムそのもの</td></tr>
                    </tbody>
                </table>

                <h3>OTC（Over The Counter）とは？</h3>
                <p>取引所を通さず、<strong>当事者同士が相対（あいたい）で直接取引</strong>する形態です。<br>
                取引所取引（先物やETFなど）は商品が標準化されていますが、OTCは<strong>条件を自由にカスタマイズ</strong>できるのが最大の特徴です。<br>
                その反面、Be-DFSのような<strong>ブッキングシステムは多種多様な商品構造に対応</strong>する必要があり、設計の複雑度が格段に高くなります。</p>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🗺️ 証券会社ITの全体アーキテクチャ</h2>
                <p>Be-DFSは単独で動くのではなく、多数のシステムと連携して初めて機能します。開発責任者は「全体の中での立ち位置」を理解することが最重要です。</p>

                <h3>フロント → ミドル → バック の3層構造</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>レイヤー</th><th>主な役割</th><th>代表的なシステム</th></tr></thead>
                    <tbody>
                        <tr><td><strong>フロントオフィス</strong></td><td>トレード執行・ブッキング・プライシング・P&L</td><td><strong>Be-DFS</strong>、EMS/OMS、電子取引プラットフォーム</td></tr>
                        <tr><td><strong>ミドルオフィス</strong></td><td>リスク管理・コンプライアンス・P&L検証</td><td>リスクエンジン、VaR計算、規制報告、照合システム</td></tr>
                        <tr><td><strong>バックオフィス</strong></td><td>決済・確認書・ポジション管理・会計</td><td>決済システム、確認書照合（MarkitWire等）、GL連携</td></tr>
                    </tbody>
                </table>

                <h3>Be-DFS の連携システム群</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
                    <div style="background: var(--bg-card); padding: 1.2rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-blue);">
                        <h4 style="margin-top:0; color:var(--accent-blue);">⬅️ 上流（データを受け取る）</h4>
                        <ul style="margin:0; padding-left:1.2rem;">
                            <li><strong>電子取引PF</strong>（Bloomberg TOMS, Tradeweb）</li>
                            <li><strong>マーケットデータ</strong>（Bloomberg/Reuters/Refinitiv）</li>
                            <li><strong>静的データマスタ</strong>（銘柄、カウンターパーティ）</li>
                        </ul>
                    </div>
                    <div style="background: var(--bg-card); padding: 1.2rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-green);">
                        <h4 style="margin-top:0; color:var(--accent-green);">➡️ 下流（データを渡す）</h4>
                        <ul style="margin:0; padding-left:1.2rem;">
                            <li><strong>バックオフィス</strong>（決済指図、確認書生成）</li>
                            <li><strong>リスクエンジン</strong>（ポジション、Greeks）</li>
                            <li><strong>会計・GL</strong>（P&L、評価損益）</li>
                            <li><strong>規制報告</strong>（EMIR/MiFID II/JFSA）</li>
                        </ul>
                    </div>
                    <div style="background: var(--bg-card); padding: 1.2rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-purple);">
                        <h4 style="margin-top:0; color:var(--accent-purple);">🔄 双方向</h4>
                        <ul style="margin:0; padding-left:1.2rem;">
                            <li><strong>グリッド計算基盤</strong>（プライシング計算）</li>
                            <li><strong>照合システム</strong>（MarkitWire, DTCC）</li>
                            <li><strong>担保管理</strong>（マージンコール）</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🔄 Be-DFS のデータフロー概要</h2>
                <div class="info-box tip">
                    <div class="info-box-title">💡 開発責任者として最初に押さえること</div>
                    <p>Be-DFSは大きく2つのメインフローで動きます。</p>
                    <ol>
                        <li><strong>フロント→バック（約定→計算→決済）</strong>：トレーダーが取引をブッキング → グリッドで時価計算 → バックオフィスに決済データ送信</li>
                        <li><strong>バック→フロント（ポジション反映）</strong>：決済結果やコーポレートアクションの情報 → フロント画面にポジション・P&L反映</li>
                    </ol>
                </div>

                <h3>Be-DFSの主要機能</h3>
                <ul class="feature-list">
                    <li><strong>トレードエントリー（ブッキング）</strong>：OTCデリバティブ取引の登録・修正・取消</li>
                    <li><strong>プライシング（時価評価）</strong>：グリッドコンピューティングを用いた高速な価格計算</li>
                    <li><strong>ポジション管理</strong>：リアルタイムのポジション表示</li>
                    <li><strong>P&L計算</strong>：日次・リアルタイムの損益表示</li>
                    <li><strong>リスク指標表示</strong>：Greeks（感応度）の表示</li>
                    <li><strong>バックオフィス連携</strong>：約定データのSTP（Straight Through Processing）</li>
                </ul>
            </div>

            <div id="day136-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day136-quiz', 'day136-quiz', [
            { question: 'Be-DFSの「Be」は何の略称ですか？', options: ['Backend', 'Booking', 'Benchmark', 'Bilateral'], correct: 1, explanation: 'Be = Booking（ブッキング）です。トレーダーが合意した取引条件をシステムに正式に登録する行為を指します。D=Derivative, F=Front, S=System で、フロントオフィス向けのOTCデリバティブのブッキングシステムを意味します。' },
            { question: 'OTC（Over The Counter）取引の最大の特徴はどれですか？', options: ['取引所が仲介するため安全性が高い', '商品条件が標準化されており取引が簡単', '当事者同士で条件を自由にカスタマイズできる', '個人投資家のみが参加できる'], correct: 2, explanation: 'OTC取引は取引所を通さず当事者同士が相対で直接取引する形態で、条件を自由にカスタマイズできることが最大の特徴です。その分、Be-DFSのようなブッキングシステムは多種多様な商品構造に対応する必要があり、設計の複雑度が高くなります。' },
            { question: '証券会社のITアーキテクチャにおいて、Be-DFSはどのレイヤーに位置しますか？', options: ['バックオフィス', 'ミドルオフィス', 'フロントオフィス', '外部接続レイヤー'], correct: 2, explanation: 'Be-DFSはフロントオフィスに位置するシステムです。トレーダーやセールスが直接利用し、取引のブッキング（約定登録）、プライシング（時価評価）、P&L表示などを担当します。ここで登録された取引データがバックオフィスの決済システムや、ミドルオフィスのリスクエンジンへと流れていきます。' },
            { question: 'Be-DFSが「グリッドコンピューティング」を使用する主な目的は何ですか？', options: ['ユーザー認証の高速化', 'デリバティブの時価評価（プライシング）計算', 'メールの送受信', 'データベースのバックアップ'], correct: 1, explanation: 'OTCデリバティブの時価評価は、モンテカルロ・シミュレーションなど計算量が膨大になるケースが多くあります。グリッドコンピューティングを使い、多数のサーバに計算を分散処理させることで、大量のポジションの評価を高速に完了させます。' }
        ]);
    }
};
