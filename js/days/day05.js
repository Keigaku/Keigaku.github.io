// ===========================
// Day 05: 時価評価の実務
// ===========================
window.Day05 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💰 時価評価（Mark-to-Market）とは</h2>
                <p>金融商品を「今この瞬間に市場で売買したらいくらの価値があるか」を計算することです。
                <strong>時価評価は金融機関の日常業務の根幹</strong>であり、私たちのシステムの中核機能です。</p>

                <h3>なぜ時価評価が必要？</h3>
                <ul>
                    <li><strong>会計基準</strong>：金融商品は公正価値（時価）で評価する必要がある（IFRS, US-GAAP等）</li>
                    <li><strong>リスク管理</strong>：ポートフォリオの現在の損益を把握するため</li>
                    <li><strong>規制報告</strong>：金融当局への報告義務（バーゼル規制等）</li>
                    <li><strong>取引管理</strong>：担保の授受、マージンコール</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">🔑 時価評価の2つのアプローチ</div>
                    <p><strong>① マーケットアプローチ</strong>：市場で取引されている価格をそのまま使う（株式等の流動性の高い商品）<br>
                    <strong>② モデルアプローチ</strong>：数理モデルで理論価格を計算する（OTCデリバティブ等の非流動性商品）</p>
                    <p>私たちの仕事は主に②のモデルベースの時価評価システムの開発です。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>💹 DCF法（割引キャッシュフロー法）</h2>
                <p><strong>DCF（Discounted Cash Flow）法</strong>は、時価評価の最も基本的な手法です。
                将来のキャッシュフローを現在価値に「割り引いて」計算します。</p>

                <h3>基本原理</h3>
                <div class="formula-box">
                    PV = Σ CF_i / (1 + r_i)^t_i<br><br>
                    PV = 現在価値（Present Value）<br>
                    CF_i = i番目のキャッシュフロー<br>
                    r_i = 割引率（i番目のCFに対応）<br>
                    t_i = キャッシュフロー発生までの期間（年）
                </div>

                <div class="info-box info">
                    <div class="info-box-title">💡 「1年後の100万円」は今いくら？</div>
                    <p>金利が年5%の場合：</p>
                    <p>PV = 100万円 / (1 + 0.05)^1 = <strong>952,381円</strong></p>
                    <p>つまり「1年後の100万円」は、金利5%の環境では今の約95万円に相当します。
                    これが「割引（ディスカウント）」の考え方です。</p>
                </div>

                <h3>金利スワップの時価評価（例）</h3>
                <p>金利スワップの時価は、固定キャッシュフローと変動キャッシュフローのそれぞれの現在価値の差です。</p>
                <div class="formula-box">
                    スワップの時価 = PV(変動レグ) - PV(固定レグ)<br>
                    （固定金利を支払い、変動金利を受け取る場合）
                </div>
            </div>

            <div id="day05-dcf-simulator"></div>

            <div class="content-section animate-in stagger-2">
                <h2>📈 イールドカーブ（金利の期間構造）</h2>
                <p><strong>イールドカーブ</strong>とは、満期（期間）ごとの金利をグラフ化したものです。
                時価評価において最も重要な市場データの一つです。</p>

                <h3>イールドカーブのパターン</h3>
                <table class="styled-table">
                    <thead><tr><th>形状</th><th>特徴</th><th>意味</th></tr></thead>
                    <tbody>
                        <tr><td><strong>順イールド</strong>（Normal）</td><td>長期金利 > 短期金利</td><td>通常の経済状態。将来の金利上昇期待</td></tr>
                        <tr><td><strong>逆イールド</strong>（Inverted）</td><td>短期金利 > 長期金利</td><td>景気後退の予兆とされる</td></tr>
                        <tr><td><strong>フラット</strong></td><td>短期と長期がほぼ同じ</td><td>経済の転換期に見られる</td></tr>
                    </tbody>
                </table>

                <h3>割引ファクター（Discount Factor）</h3>
                <p>期間tまでの割引ファクター DF(t) は、将来のキャッシュフローを現在価値に変換する係数です。</p>
                <div class="formula-box">
                    DF(t) = 1 / (1 + r(t))^t　（年複利の場合）<br>
                    DF(t) = e^(-r(t) × t)　（連続複利の場合）
                </div>

                <div class="info-box tip">
                    <div class="info-box-title">📌 実務の割引ファクター構築</div>
                    <p>実務では、市場で観測される金利データ（国債利回り、スワップレート、OISレート等）から
                    イールドカーブを「ブートストラップ法」で構築し、割引ファクターを計算します。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-3">
                <h2>🔧 時価評価の実務的プロセス</h2>

                <h3>日次時価評価の流れ</h3>
                <ol>
                    <li><strong>市場データの取得</strong>：金利、為替、株価、ボラティリティ等のマーケットデータを収集</li>
                    <li><strong>カーブ構築</strong>：イールドカーブ、ボラティリティサーフェスの構築</li>
                    <li><strong>価格計算</strong>：各ポジション（取引）の時価を数理モデルで計算</li>
                    <li><strong>P&L計算</strong>：前日との差分から損益を計算</li>
                    <li><strong>検証・承認</strong>：計算結果の妥当性チェック、異常値検出</li>
                    <li><strong>報告</strong>：経営層・フロント（トレーダー）・規制当局への報告</li>
                </ol>

                <div class="info-box warning">
                    <div class="info-box-title">⚠️ 時価評価システムの品質要件</div>
                    <p><strong>正確性</strong>：計算結果の精度が極めて重要（金額が大きいため、わずかな誤差も許されない）<br>
                    <strong>速度</strong>：毎日の業務に間に合うよう、数千〜数万ポジションを高速に計算<br>
                    <strong>監査対応</strong>：計算過程を記録し、トレーサビリティを確保</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-4">
                <h2>🧮 数値計算手法</h2>
                <p>全ての金融商品が解析解（BS式のような閉じた数式）で評価できるわけではありません。
                複雑な商品には数値計算が必要です。</p>

                <table class="styled-table">
                    <thead><tr><th>手法</th><th>特徴</th><th>使用場面</th></tr></thead>
                    <tbody>
                        <tr><td><strong>モンテカルロ法</strong></td><td>乱数による確率的シミュレーション</td><td>パス依存商品、多資産商品</td></tr>
                        <tr><td><strong>有限差分法</strong></td><td>偏微分方程式を離散化して解く</td><td>アメリカンオプション等</td></tr>
                        <tr><td><strong>二項・三項ツリー</strong></td><td>価格変動をツリーで近似</td><td>教育目的、アメリカンオプション</td></tr>
                    </tbody>
                </table>
            </div>

            <div id="day05-quiz"></div>
        `;

        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        // DCF Simulator
        SimulatorEngine.renderCalculator('day05-dcf-simulator', {
            title: 'DCF（割引キャッシュフロー）計算機',
            description: '将来のキャッシュフローを割引率で現在価値に変換します。「お金の時間価値」を体感してみましょう。',
            inputs: [
                { label: '将来のキャッシュフロー', type: 'number', default: 1000000, min: 0, unit: '円' },
                { label: '割引率（年利）', type: 'slider', default: 5, min: 0, max: 20, step: 0.5, unit: '%' },
                { label: '期間', type: 'slider', default: 5, min: 1, max: 30, step: 1, unit: '年' }
            ],
            calculate(values) {
                const [cf, rPct, t] = values;
                const r = rPct / 100;
                const pv = cf / Math.pow(1 + r, t);
                const df = 1 / Math.pow(1 + r, t);
                const pvCont = cf * Math.exp(-r * t);
                const lost = cf - pv;
                const fmt = (v) => '¥' + Math.round(v).toLocaleString();
                return [fmt(pv), df.toFixed(6), fmt(pvCont), fmt(lost)];
            },
            resultLabels: ['現在価値 (PV)', '割引ファクター (DF)', '連続複利PV', '時間による減価']
        });

        // Quiz
        QuizEngine.render('day05-quiz', 'day05-quiz', [
            {
                question: '時価評価（Mark-to-Market）の主な目的に含まれないものはどれですか？',
                options: ['会計基準への対応', 'リスク管理', '給与計算', '規制報告'],
                correct: 2,
                explanation: '時価評価は会計基準・リスク管理・規制報告・取引管理に使われます。給与計算には関係しません。'
            },
            {
                question: 'DCF法の基本的な考え方として正しいものはどれですか？',
                options: [
                    '過去のキャッシュフローを合計する',
                    '将来のキャッシュフローを割引率で現在価値に変換する',
                    '最も高い価格で取引された値を使用する',
                    'キャッシュフローを増加率で将来価値に変換する'
                ],
                correct: 1,
                explanation: 'DCF法は将来のキャッシュフローを適切な割引率で割り引いて、現在価値を求める手法です。'
            },
            {
                question: 'イールドカーブが「逆イールド」の形状のとき、一般的に何を示唆しますか？',
                options: ['景気拡大期', '景気後退の予兆', '金利の安定', 'インフレの加速'],
                correct: 1,
                explanation: '逆イールド（短期金利 > 長期金利）は歴史的に景気後退の予兆とされています。'
            },
            {
                question: '金利が上昇すると、将来のキャッシュフローの現在価値はどうなりますか？',
                options: ['増加する', '減少する', '変化しない', '予測できない'],
                correct: 1,
                explanation: '金利（割引率）が上昇すると、将来のキャッシュフローの現在価値は減少します。PV = CF / (1+r)^t で、r が大きくなると PV は小さくなります。'
            },
            {
                question: 'パス依存型の複雑な金融商品の価格計算に最も適した数値計算手法はどれですか？',
                options: ['二項ツリー', 'ブラック・ショールズの解析解', 'モンテカルロ法', '内挿法'],
                correct: 2,
                explanation: 'モンテカルロ法は乱数による確率的シミュレーションで、パス依存商品や多資産商品の価格計算に最も適しています。'
            }
        ]);
    }
};
