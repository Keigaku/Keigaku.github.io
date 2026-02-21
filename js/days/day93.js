// ===========================
// Day 93: ブロックチェーンとWeb3
// ===========================
window.Day93 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⛓️ ブロックチェーンの仕組み</h2>
                <table class="styled-table">
                    <thead><tr><th>要素</th><th>内容</th><th>金融との関連</th></tr></thead>
                    <tbody>
                        <tr><td><strong>分散台帳</strong></td><td>複数ノードがデータを共有</td><td>中央管理者不要の取引記録</td></tr>
                        <tr><td><strong>コンセンサス</strong></td><td>取引の正当性を参加者で合意</td><td>PoW, PoS — エネルギーと速度のトレードオフ</td></tr>
                        <tr><td><strong>暗号化</strong></td><td>ハッシュと電子署名で改ざん防止</td><td>取引の完全性保証</td></tr>
                        <tr><td><strong>スマートコントラクト</strong></td><td>自動執行されるプログラム</td><td>決済の自動化、デリバティブ契約</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>💰 金融でのブロックチェーン活用</h2>
                <table class="styled-table">
                    <thead><tr><th>分野</th><th>活用例</th><th>効果</th><th>課題</th></tr></thead>
                    <tbody>
                        <tr><td><strong>CBDC（中央銀行デジタル通貨）</strong></td><td>デジタル円など</td><td>決済効率化、金融包摂</td><td>プライバシー、設計</td></tr>
                        <tr><td><strong>セキュリティトークン</strong></td><td>株式・債券のトークン化</td><td>24/7取引、小口化</td><td>法制度整備</td></tr>
                        <tr><td><strong>国際送金</strong></td><td>Ripple等による即時決済</td><td>コスト・時間の削減</td><td>規制のハーモナイゼーション</td></tr>
                        <tr><td><strong>貿易金融</strong></td><td>信用状のデジタル化</td><td>書類処理の自動化</td><td>参加者の合意形成</td></tr>
                        <tr><td><strong>DeFi</strong></td><td>分散型金融サービス</td><td>仲介不要、24/7利用</td><td>規制未整備、スマコンリスク</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🌐 Web3の全体像</h2>
                <table class="styled-table">
                    <thead><tr><th>世代</th><th>特徴</th><th>金融との関係</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Web1.0</strong></td><td>閲覧のみ（Read）</td><td>オンラインの情報提供</td></tr>
                        <tr><td><strong>Web2.0</strong></td><td>双方向（Read/Write）</td><td>オンラインバンキング</td></tr>
                        <tr><td><strong>Web3.0</strong></td><td>分散・所有（Read/Write/Own）</td><td>DeFi、トークン経済</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 ブロックチェーンの現実的な評価</div>
                    <p>・<strong>「全てをブロックチェーンに」は間違い</strong>：中央集権型が適切な場合も多い</p>
                    <p>・<strong>パーミッションドBC</strong>は金融機関向き（Hyperledger等）</p>
                    <p>・<strong>技術的には未成熟</strong>：スケーラビリティ、ガス代の課題</p>
                    <p>・<strong>規制動向を注視</strong>：各国でルール策定中</p>
                </div>
            </div>
            <div id="day93-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day93-quiz', 'day93-quiz', [
            { question: 'スマートコントラクトとは何ですか？', options: ['紙の契約書', 'ブロックチェーン上で自動執行されるプログラム', '弁護士との契約', '保険契約'], correct: 1, explanation: 'スマートコントラクトはブロックチェーン上にデプロイされ、条件を満たすと自動的に実行されるプログラムです。' },
            { question: 'CBDCとは何ですか？', options: ['仮想通貨取引所', '中央銀行が発行するデジタル通貨', '暗号資産の一種', 'ブランクチェック'], correct: 1, explanation: 'CBDC（Central Bank Digital Currency）は中央銀行が直接発行するデジタル形式の法定通貨です。' },
            { question: 'DeFiの特徴はどれですか？', options: ['銀行が管理する', '仲介機関なしで金融サービスを提供', '政府が運営', '現金のみ対応'], correct: 1, explanation: 'DeFi（Decentralized Finance）はブロックチェーン上のスマートコントラクトにより、仲介機関なしで金融サービスを実現します。' },
            { question: 'PoS（Proof of Stake）の特徴はどれですか？', options: ['大量の電力を使う', '保有量に応じて検証権を得る', '全員が計算する', '中央管理者が決める'], correct: 1, explanation: 'PoSはトークンの保有量（ステーク）に応じてブロックの検証権を得るコンセンサス方式で、PoWより省エネです。' },
            { question: '金融機関向けのブロックチェーンはどのタイプが多いですか？', options: ['パブリック型', 'パーミッションド（許可制）型', '匿名型', '分散型'], correct: 1, explanation: '金融機関ではアクセス管理や規制対応の観点から、参加者を制限できるパーミッションド型が適しています。' }
        ]);
    }
};
