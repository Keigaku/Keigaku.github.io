// ===========================
// Day 94: 量子コンピューティングと金融
// ===========================
window.Day94 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚛️ 量子コンピューティングの基礎</h2>
                <table class="styled-table">
                    <thead><tr><th>概念</th><th>古典コンピュータ</th><th>量子コンピュータ</th></tr></thead>
                    <tbody>
                        <tr><td><strong>基本単位</strong></td><td>ビット（0 or 1）</td><td>量子ビット（0と1の重ね合わせ）</td></tr>
                        <tr><td><strong>処理方式</strong></td><td>逐次的</td><td>並列（量子並列性）</td></tr>
                        <tr><td><strong>得意な問題</strong></td><td>汎用的</td><td>最適化、シミュレーション、因数分解</td></tr>
                        <tr><td><strong>現状</strong></td><td>成熟</td><td>NISQ（ノイズあり中規模量子）時代</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>💹 金融への応用可能性</h2>
                <table class="styled-table">
                    <thead><tr><th>分野</th><th>内容</th><th>期待される効果</th><th>実現時期</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ポートフォリオ最適化</strong></td><td>多変数の組合せ最適化</td><td>最適解の高速探索</td><td>5-10年</td></tr>
                        <tr><td><strong>モンテカルロ</strong></td><td>量子振幅推定</td><td>二次的な高速化</td><td>5-10年</td></tr>
                        <tr><td><strong>リスク分析</strong></td><td>複雑なリスクモデルの計算</td><td>VaR計算の高速化</td><td>5-15年</td></tr>
                        <tr><td><strong>暗号解読</strong></td><td>RSA等の現行暗号の解読</td><td>セキュリティの脅威</td><td>10-20年</td></tr>
                        <tr><td><strong>機械学習</strong></td><td>量子機械学習</td><td>特定問題での高速化</td><td>研究段階</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔐 ポスト量子暗号（PQC）</h2>
                <p>量子コンピュータがRSAを解読できるようになる前に、<strong>量子耐性のある暗号</strong>への移行が必要です。</p>
                <table class="styled-table">
                    <thead><tr><th>暗号方式</th><th>基盤</th><th>標準化状況</th></tr></thead>
                    <tbody>
                        <tr><td><strong>格子暗号</strong></td><td>格子問題の困難さ</td><td>NIST標準化済み（CRYSTALS-Kyber）</td></tr>
                        <tr><td><strong>ハッシュベース</strong></td><td>ハッシュ関数の一方向性</td><td>NIST標準化済み（SPHINCS+）</td></tr>
                        <tr><td><strong>コードベース</strong></td><td>誤り訂正符号</td><td>候補検討中</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 金融機関が今すべきこと</div>
                    <p>・<strong>暗号の棚卸し</strong>：使用中の暗号方式を把握</p>
                    <p>・<strong>PQC移行計画</strong>：段階的な暗号更新ロードマップ</p>
                    <p>・<strong>量子人材の確保</strong>：将来に向けた人材育成</p>
                    <p>・<strong>PoC（概念実証）</strong>：量子アルゴリズムの実験開始</p>
                </div>
            </div>
            <div id="day94-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day94-quiz', 'day94-quiz', [
            { question: '量子ビットと古典ビットの違いはどれですか？', options: ['速度が違う', '量子ビットは0と1の重ね合わせ状態を取れる', 'サイズが違う', '色が違う'], correct: 1, explanation: '量子ビットは量子力学の重ね合わせの原理により、0と1の状態を同時に持つことができます。' },
            { question: '量子コンピュータが金融で最も期待される応用はどれですか？', options: ['文書作成', 'ポートフォリオ最適化', 'メール送信', 'ファイル管理'], correct: 1, explanation: '多数の資産の組合せ最適化は量子コンピュータの得意分野で、ポートフォリオ最適化への応用が最も期待されています。' },
            { question: 'ポスト量子暗号（PQC）が必要な理由はどれですか？', options: ['現行暗号が遅い', '量子コンピュータが現行暗号を解読する可能性', '暗号が古い', 'コストが高い'], correct: 1, explanation: '量子コンピュータが十分に発達するとRSA等の現行公開鍵暗号を解読できるため、量子耐性のある暗号が必要です。' },
            { question: 'NISQとは何ですか？', options: ['新しいプログラミング言語', 'ノイズあり中規模量子デバイス', 'ネットワークプロトコル', 'セキュリティ基準'], correct: 1, explanation: 'NISQ（Noisy Intermediate-Scale Quantum）は現在の量子コンピュータの段階で、ノイズが多く中規模なデバイスを指します。' },
            { question: 'Shorのアルゴリズムの脅威はどれですか？', options: ['データベースの破壊', 'RSA暗号の因数分解が高速にできる', '量子ビットの消失', 'インターネットの停止'], correct: 1, explanation: 'Shorのアルゴリズムは大きな整数の因数分解を効率的に行え、RSA暗号の安全性を脅かします。' }
        ]);
    }
};
