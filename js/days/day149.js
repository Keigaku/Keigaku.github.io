// ===========================
// Day 149: マーケットデータ・静的データと規制対応
// ===========================
window.Day149 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📡 マーケットデータ</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「Be-DFSの計算エンジンの燃料」</div>
                    <p>プライシング、リスク計算、P&L — Be-DFSの全ての計算は<strong>マーケットデータ（市場価格データ）</strong>に依存しています。データが遅延したり、誤っていたりすると、<strong>全ての計算結果が信頼できなくなる</strong>ため、データ管理は開発責任者の最重要テーマの一つです。</p>
                </div>
                
                <h3>マーケットデータの種類</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>データ種別</th><th>具体例</th><th>取得元</th><th>更新頻度</th></tr></thead>
                    <tbody>
                        <tr><td><strong>金利</strong></td><td>OISレート、スワップレート、国債利回り</td><td>Bloomberg, Refinitiv</td><td>リアルタイム / EOD</td></tr>
                        <tr><td><strong>為替</strong></td><td>スポットレート、FXフォワードポイント</td><td>Bloomberg, Reuters</td><td>リアルタイム</td></tr>
                        <tr><td><strong>株価</strong></td><td>個別株終値、指数（TOPIX, S&P500）</td><td>取引所フィード、Bloomberg</td><td>リアルタイム / EOD</td></tr>
                        <tr><td><strong>ボラティリティ</strong></td><td>インプライドVol、Volatility Surface</td><td>Bloomberg, 社内計算</td><td>日中 / EOD</td></tr>
                        <tr><td><strong>クレジット</strong></td><td>CDSスプレッド、格付け</td><td>Bloomberg, Markit</td><td>日次</td></tr>
                    </tbody>
                </table>

                <h3>EODスナップショットの重要性</h3>
                <div class="info-box important">
                    <div class="info-box-title">🚨 「どの時点のマーケットデータで計算したか」が全て</div>
                    <p>EOD（End of Day）のP&Lやリスク計算は、特定時点のマーケットデータ「スナップショット」を使って行います。</p>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>スナップショット時刻</strong>：通常は東京市場クローズ（15:00 JST）やNYクローズ（17:00 EST）</li>
                        <li><strong>全計算で同一スナップショット</strong>：P&Lもリスクも同じデータを使わないと整合性が崩れる</li>
                        <li><strong>スナップショットの保存</strong>：過去の再計算・監査のために永続保存が必須</li>
                    </ul>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🗃️ 静的データ（マスタデータ）</h2>
                <p>取引を正しくブッキング・処理するために必要な「参照データ」です。</p>

                <table class="styled-table text-sm">
                    <thead><tr><th>マスタ名</th><th>内容</th><th>Be-DFSでの用途</th></tr></thead>
                    <tbody>
                        <tr><td><strong>カウンターパーティマスタ</strong></td><td>取引相手の法人情報、LEI、ISDA契約有無</td><td>取引入力時の相手方特定、与信チェック</td></tr>
                        <tr><td><strong>銘柄マスタ</strong></td><td>株式の銘柄コード（ISIN/RIC/BBG Ticker）</td><td>TRS/PSWAPの原資産指定</td></tr>
                        <tr><td><strong>カレンダーマスタ</strong></td><td>各国の祝日カレンダー</td><td>営業日調整（Biz Day Convention）</td></tr>
                        <tr><td><strong>ブックマスタ</strong></td><td>トレーディングブック（デスク/ポートフォリオの単位）</td><td>P&L・ポジション管理の単位</td></tr>
                        <tr><td><strong>SSIマスタ</strong></td><td>決済口座情報</td><td>バック連携時の決済指図</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>📜 規制対応（Regulatory Reporting）</h2>
                <p>2008年の金融危機以降、OTCデリバティブ市場への規制が大幅に強化されました。Be-DFSはこれらの<strong>規制報告の元データを生成</strong>する責任を負います。</p>

                <h3>主要な規制と報告義務</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>規制</th><th>管轄</th><th>主な要件</th></tr></thead>
                    <tbody>
                        <tr><td><strong>EMIR</strong></td><td>EU</td><td>OTCデリバティブ取引の取引報告（Trade Repository への報告）、CCP清算義務</td></tr>
                        <tr><td><strong>Dodd-Frank</strong></td><td>米国</td><td>スワップの報告義務、SEF（取引施設）使用義務</td></tr>
                        <tr><td><strong>MiFID II / MiFIR</strong></td><td>EU</td><td>取引の透明性、最良執行、取引データ報告</td></tr>
                        <tr><td><strong>金商法・JFSA規制</strong></td><td>日本</td><td>OTCデリバティブの報告、証拠金規制、CCP清算</td></tr>
                        <tr><td><strong>Basel III / FRTB</strong></td><td>国際</td><td>資本賦課の計算（SA-CVA等）— リスクデータの提供</td></tr>
                        <tr><td><strong>UMR</strong></td><td>国際</td><td>証拠金規制。ISDA SIMMモデルによるIM計算</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">💡 UTI / UPI / LEI — 規制が求める識別子</div>
                    <ul style="margin-top:0.5rem;">
                        <li><strong>UTI (Unique Transaction Identifier)</strong>：取引ごとの一意識別子。報告時に必須</li>
                        <li><strong>UPI (Unique Product Identifier)</strong>：商品タイプの標準化コード</li>
                        <li><strong>LEI (Legal Entity Identifier)</strong>：法人の国際標準識別子。カウンターパーティ特定に必須</li>
                    </ul>
                </div>
            </div>

            <div id="day149-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day149-quiz', 'day149-quiz', [
            { question: 'EODのP&L計算において「マーケットデータのスナップショット」が重要な理由はどれですか？', options: ['データベースの容量を節約するため', '全ての計算が同一時点のデータで行われ、整合性が保たれるため', '翌日のマーケット予測に使うため', '外部に公開するため'], correct: 1, explanation: 'EODの公式P&LやリスクレポートはSpecific時点のマーケットデータのスナップショットを基に計算されます。P&Lもリスクも同じスナップショットを使わなければ計算結果の整合性が崩れ、「P&Lの額とリスクの額が合わない」という問題が発生します。' },
            { question: 'カレンダーマスタがBe-DFSで必要な理由として正しいものはどれですか？', options: ['トレーダーの休暇管理のため', '各国の祝日を考慮した営業日調整（Business Day Convention）の計算に使うため', '会議室の予約管理のため', 'メール送信のスケジュールのため'], correct: 1, explanation: 'OTCデリバティブでは、支払日や開始日が祝日に当たる場合に「前営業日」または「翌営業日」に調整（Business Day Convention）する必要があります。日本・米国・英国等、複数国のカレンダーを組み合わせて使うため、正確なカレンダーマスタは必須です。' },
            { question: 'LEI (Legal Entity Identifier) とは何ですか？', options: ['取引の一意識別子', '法人の国際標準識別子', '商品タイプの標準化コード', 'マーケットデータの識別子'], correct: 1, explanation: 'LEI (Legal Entity Identifier) は、金融取引を行う法人を一意に識別する20桁の国際標準コードです。EMIR等の規制報告において、カウンターパーティの特定に必須です。UTIは取引の識別子、UPIは商品タイプの識別子です。' },
            { question: 'OTCデリバティブ分野で2008年金融危機後に大幅強化された規制の目的として最も本質的なものはどれですか？', options: ['金融機関の利益を最大化すること', 'OTC市場の透明性向上とシステミックリスクの低減', '取引所取引を全廃すること', '個人投資家の参入促進'], correct: 1, explanation: '金融危機後のEMIR/Dodd-Frank等の規制改革は、OTCデリバティブ市場の「不透明さ」がシステミックリスク（一社の問題が金融システム全体に波及するリスク）の原因となったとの反省から、取引報告義務・CCP清算義務・証拠金規制を通じて市場の透明性向上とリスク低減を目指しています。' }
        ]);
    }
};
