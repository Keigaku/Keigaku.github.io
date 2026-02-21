// ===========================
// Day 63: テクノロジー史
// ===========================
window.Day63 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚙️ 技術革命の系譜</h2>
                <p>テクノロジーの歴史を知ることは、<strong>次の技術革命を予見する力</strong>を養います。
                金融業界は常にテクノロジーの最前線にいます。</p>
                <table class="styled-table">
                    <thead><tr><th>年代</th><th>技術</th><th>発明者</th><th>社会への影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1450年</strong></td><td>活版印刷術</td><td>グーテンベルク</td><td>知識の民主化、宗教改革</td></tr>
                        <tr><td><strong>1769年</strong></td><td>蒸気機関の改良</td><td>ワット</td><td>産業革命、工場制度</td></tr>
                        <tr><td><strong>1876年</strong></td><td>電話</td><td>ベル</td><td>遠隔通信の始まり</td></tr>
                        <tr><td><strong>1879年</strong></td><td>電球の実用化</td><td>エジソン</td><td>夜間活動、電力産業</td></tr>
                        <tr><td><strong>1903年</strong></td><td>飛行機</td><td>ライト兄弟</td><td>グローバルな移動革命</td></tr>
                        <tr><td><strong>1946年</strong></td><td>ENIAC（電子計算機）</td><td>エッカート＆モークリー</td><td>コンピュータ時代の幕開け</td></tr>
                        <tr><td><strong>1969年</strong></td><td>ARPANET</td><td>米国防総省</td><td>インターネットの原型</td></tr>
                        <tr><td><strong>1991年</strong></td><td>World Wide Web</td><td>ティム・バーナーズ＝リー</td><td>情報革命</td></tr>
                        <tr><td><strong>2007年</strong></td><td>iPhone</td><td>アップル</td><td>モバイル革命</td></tr>
                        <tr><td><strong>2022年</strong></td><td>ChatGPT</td><td>OpenAI</td><td>生成AI革命</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>💻 コンピュータの進化</h2>
                <table class="styled-table">
                    <thead><tr><th>世代</th><th>技術</th><th>特徴</th><th>金融での活用</th></tr></thead>
                    <tbody>
                        <tr><td><strong>第1世代</strong></td><td>真空管</td><td>部屋1つ分のサイズ</td><td>科学計算</td></tr>
                        <tr><td><strong>第2世代</strong></td><td>トランジスタ</td><td>小型化、COBOL登場</td><td>銀行の勘定系システム</td></tr>
                        <tr><td><strong>第3世代</strong></td><td>集積回路（IC）</td><td>さらなる小型化</td><td>ATM、オンラインバンキング</td></tr>
                        <tr><td><strong>第4世代</strong></td><td>マイクロプロセッサ</td><td>個人用PC、GUI</td><td>電子取引、証券システム</td></tr>
                        <tr><td><strong>第5世代</strong></td><td>AI・クラウド</td><td>機械学習、分散処理</td><td>HFT、リスク管理AI</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔮 次の技術革命</h2>
                <table class="styled-table">
                    <thead><tr><th>技術</th><th>現在の段階</th><th>金融への影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>量子コンピュータ</strong></td><td>研究・初期実用化</td><td>暗号の脅威、ポートフォリオ最適化</td></tr>
                        <tr><td><strong>生成AI</strong></td><td>急速に普及中</td><td>自動レポート作成、コード生成</td></tr>
                        <tr><td><strong>ブロックチェーン</strong></td><td>金融応用が拡大</td><td>DeFi、トークン化資産</td></tr>
                        <tr><td><strong>6G通信</strong></td><td>研究段階</td><td>超低遅延、ホログラム会議</td></tr>
                        <tr><td><strong>脳コンピュータ接続</strong></td><td>初期研究</td><td>未知の可能性</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 テクノロジー史から学ぶ教訓</div>
                    <p>・新技術は常に<strong>「過大評価 → 幻滅 → 実用化」</strong>のサイクルをたどる</p>
                    <p>・<strong>プラットフォームの転換期</strong>に大きなビジネスチャンスがある</p>
                    <p>・<strong>ネットワーク効果</strong>が勝者総取りを生む（インターネット、SNS）</p>
                    <p>・<strong>金融業界</strong>は常に新技術の最大の顧客である</p>
                </div>
            </div>
            <div id="day63-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day63-quiz', 'day63-quiz', [
            { question: 'World Wide Webを発明したのは誰ですか？', options: ['ビル・ゲイツ', 'スティーブ・ジョブズ', 'ティム・バーナーズ＝リー', 'マーク・ザッカーバーグ'], correct: 2, explanation: 'ティム・バーナーズ＝リーは1991年にCERNでWorld Wide Webを考案・実装しました。' },
            { question: 'COBOLが開発された主な目的は？', options: ['科学計算', 'ビジネスデータ処理', 'グラフィック表示', 'ゲーム開発'], correct: 1, explanation: 'COBOL（Common Business-Oriented Language）はビジネスデータ処理用に開発され、現在も銀行の勘定系で稼働しています。' },
            { question: 'グーテンベルクの活版印刷術の最大の社会的影響はどれですか？', options: ['娯楽の普及', '知識の民主化', '紙の消費増加', '新聞の創刊'], correct: 1, explanation: '活版印刷により書物が大量生産可能になり、聖書の翻訳・普及を通じて宗教改革を促しました。' },
            { question: 'ガートナーのハイプサイクルで、新技術が実用化される前に経験する段階は？', options: ['即座に普及', '過大評価 → 幻滅 → 実用化', '需要が先に生まれる', '政府の規制で遅延'], correct: 1, explanation: '新技術は過大な期待 → 幻滅期 → 啓発期を経て、最終的に生産性の安定期に至ります。' },
            { question: 'インターネットの原型となったネットワークはどれですか？', options: ['Ethernet', 'ARPANET', 'Wi-Fi', 'Bluetooth'], correct: 1, explanation: 'ARPANET（1969年）は米国防総省が開発した分散ネットワークで、インターネットの原型です。' }
        ]);
    }
};
