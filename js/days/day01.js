// ===========================
// Day 01: 金融業界と金融商品の基礎
// ===========================
window.Day01 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🏦 金融業界の全体像</h2>
                <p>金融業界は、お金を必要とする人（資金需要者）と、お金を持っている人（資金供給者）を結びつける役割を果たしています。
                私たちが所属する組織は、大手金融機関のクオンツシステム開発を行っています。</p>

                <h3>金融業界の主要プレイヤー</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>プレイヤー</th><th>役割</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>銀行</strong></td><td>預金の受入・貸出、送金・決済</td><td>メガバンク、地方銀行</td></tr>
                        <tr><td><strong>証券会社</strong></td><td>株式・債券の売買仲介、引受</td><td>野村證券、大和証券</td></tr>
                        <tr><td><strong>保険会社</strong></td><td>リスクの引受、資産運用</td><td>日本生命、東京海上</td></tr>
                        <tr><td><strong>資産運用会社</strong></td><td>投資信託・年金の運用管理</td><td>野村AM、大和AM</td></tr>
                        <tr><td><strong>取引所</strong></td><td>市場の運営・取引マッチング</td><td>JPX（日本取引所）</td></tr>
                        <tr><td><strong>中央銀行</strong></td><td>金融政策・通貨発行</td><td>日本銀行</td></tr>
                    </tbody>
                </table>

                <div class="info-box info">
                    <div class="info-box-title">💡 クオンツとは？</div>
                    <p><strong>クオンツ（Quant）</strong>= Quantitative Analyst の略。数学・統計学・プログラミングを駆使して、
                    金融商品の価格付け、リスク管理、トレーディング戦略の開発を行う専門家です。</p>
                    <p>私たちの仕事は、このクオンツと協力してシステムを開発することです。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>💴 金融市場の種類</h2>

                <h3>① 株式市場</h3>
                <p>企業が資金調達のために株式を発行し、投資家が売買する市場です。</p>
                <ul>
                    <li><strong>一次市場（発行市場）</strong>：企業が新たに株式を発行する市場（IPO等）</li>
                    <li><strong>二次市場（流通市場）</strong>：発行済みの株式を投資家間で売買する市場（東証等）</li>
                </ul>

                <h3>② 債券市場</h3>
                <p>国や企業が発行する債券（借金の証書）を取引する市場です。</p>
                <ul>
                    <li><strong>国債</strong>：政府が発行（最も安全とされる）</li>
                    <li><strong>社債</strong>：企業が発行（信用リスクに応じて金利が変動）</li>
                    <li><strong>地方債</strong>：地方自治体が発行</li>
                </ul>

                <h3>③ 為替市場（FX市場）</h3>
                <p>異なる通貨を交換する市場。世界最大の金融市場です（1日の取引量: 約7.5兆ドル）。</p>

                <h3>④ デリバティブ市場</h3>
                <p>株式・債券・為替などの「原資産」から派生した金融商品を取引する市場です。
                <strong>Day 3で詳しく学びます。</strong></p>

                <div class="info-box tip">
                    <div class="info-box-title">📌 ポイント</div>
                    <p>私たちの仕事では、特に<strong>デリバティブ市場</strong>に関わることが多いです。
                    デリバティブの「時価評価」「リスク計測」「XVA計測」が主要業務となります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📋 主要な金融商品</h2>

                <h3>現物商品</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>商品</th><th>特徴</th><th>リスク</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>株式</strong></td><td>企業の所有権の一部。配当と値上がり益</td><td>価格変動リスク</td></tr>
                        <tr><td><strong>債券</strong></td><td>定期的な利息（クーポン）と満期時の元本返済</td><td>金利リスク、信用リスク</td></tr>
                        <tr><td><strong>投資信託</strong></td><td>複数の資産をまとめてプロが運用</td><td>分散されるがゼロではない</td></tr>
                        <tr><td><strong>預金</strong></td><td>元本保証（上限あり）、低リスク低リターン</td><td>インフレリスク</td></tr>
                    </tbody>
                </table>

                <h3>デリバティブ商品（概要）</h3>
                <table class="styled-table">
                    <thead>
                        <tr><th>商品</th><th>概要</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>先物（Futures）</strong></td><td>将来の決められた日に、決められた価格で売買する契約</td></tr>
                        <tr><td><strong>オプション（Options）</strong></td><td>将来の決められた日に、決められた価格で売買する<em>権利</em></td></tr>
                        <tr><td><strong>スワップ（Swaps）</strong></td><td>キャッシュフロー（お金の流れ）を交換する契約</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🔑 重要概念：時価評価（Mark-to-Market）</div>
                    <p>金融商品を「今この瞬間に売買したら、いくらの価値があるか」を計算すること。
                    これが私たちのシステムの中核機能の一つです。Day 5で詳しく学びます。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🏢 私たちの仕事が関わる領域</h2>
                <p>業務内容を整理すると、以下の3つの柱があります：</p>

                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;margin:1rem 0;">
                    <div style="padding:1.25rem;border-radius:var(--radius-md);background:rgba(96,165,250,0.06);border:1px solid rgba(96,165,250,0.2);">
                        <h4 style="color:var(--accent-blue);margin:0 0 0.5rem;">💰 時価評価</h4>
                        <p style="font-size:0.85rem;margin:0;">デリバティブの理論価格を金融工学の数理モデルで計算するシステム</p>
                    </div>
                    <div style="padding:1.25rem;border-radius:var(--radius-md);background:rgba(167,139,250,0.06);border:1px solid rgba(167,139,250,0.2);">
                        <h4 style="color:var(--accent-purple);margin:0 0 0.5rem;">🛡️ 市場リスク計測</h4>
                        <p style="font-size:0.85rem;margin:0;">市場の変動によってどれくらい損失が出る可能性があるかを計量するシステム</p>
                    </div>
                    <div style="padding:1.25rem;border-radius:var(--radius-md);background:rgba(244,114,182,0.06);border:1px solid rgba(244,114,182,0.2);">
                        <h4 style="color:var(--accent-pink);margin:0 0 0.5rem;">🔬 XVA計測</h4>
                        <p style="font-size:0.85rem;margin:0;">取引相手の信用リスクや資金調達コスト等を考慮した価格調整を計算するシステム</p>
                    </div>
                </div>
            </div>

            <div id="day01-matching"></div>

            <div id="day01-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // Matching Quiz
        QuizEngine.renderMatching('day01-matching', 'day01-matching', [
            { term: '株式', definition: '企業の所有権の一部を表す有価証券' },
            { term: '債券', definition: '発行者が投資家から資金を借り入れ、利息を支払う証書' },
            { term: 'デリバティブ', definition: '原資産から派生した金融商品の総称' },
            { term: 'クオンツ', definition: '数学・統計学で金融分析を行う専門家' },
            { term: '時価評価', definition: '金融商品の現在の市場価値を計算すること' },
            { term: 'XVA', definition: '取引相手リスク等を考慮した評価調整の総称' }
        ]);

        // Quiz
        QuizEngine.render('day01-quiz', 'day01-quiz', [
            {
                question: '金融市場において、企業が新たに株式を発行して資金を調達する市場を何と呼びますか？',
                options: ['流通市場', '発行市場（一次市場）', 'デリバティブ市場', '為替市場'],
                correct: 1,
                explanation: '企業が新たに株式を発行する市場は「発行市場（一次市場）」です。すでに発行された株式を投資家間で売買するのが「流通市場（二次市場）」です。'
            },
            {
                question: 'クオンツ（Quant）が主に活用する学問分野はどれですか？',
                options: ['法律と会計', '数学・統計学・プログラミング', '心理学とマーケティング', '歴史と政治学'],
                correct: 1,
                explanation: 'クオンツは Quantitative Analyst の略で、数学・統計学・プログラミングを駆使して金融商品の分析を行う専門家です。'
            },
            {
                question: '将来のある時点で、あらかじめ決められた価格で売買する「権利」を持つデリバティブ商品はどれですか？',
                options: ['先物（Futures）', 'スワップ（Swaps）', 'オプション（Options）', '債券（Bonds）'],
                correct: 2,
                explanation: 'オプションは売買の「権利」です。先物は売買の「義務」がある契約、スワップはキャッシュフローを交換する契約です。'
            },
            {
                question: '時価評価（Mark-to-Market）とは何ですか？',
                options: [
                    '過去の取得価格で資産を評価すること',
                    '金融商品の現在の市場価値を計算すること',
                    '将来の予想価格を見積もること',
                    '税務上の評価額を決めること'
                ],
                correct: 1,
                explanation: '時価評価とは、金融商品を「今この瞬間に売買したらいくらの価値があるか」を計算することです。'
            },
            {
                question: '私たちの業務の3つの柱に含まれないものはどれですか？',
                options: ['時価評価', '市場リスク計測', 'XVA計測', '株式トレーディング'],
                correct: 3,
                explanation: '私たちの業務は「時価評価」「市場リスク計測」「XVA計測」の3本柱です。トレーディング自体は金融機関のトレーダーが行います。'
            }
        ]);
    }
};
