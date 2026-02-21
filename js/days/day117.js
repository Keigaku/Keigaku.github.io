// ===========================
// Day 117: コスト管理とEVM
// ===========================
window.Day117 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>💰 コスト管理とEVM（アーンド・バリュー・マネジメント）</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 プロジェクトの「健康状態」を可視化する定量指標</div>
                    <p>大規模な金融システムの構築において、「予定通り進んでいるか」「予算内に収まるか」を感覚ではなく、客観的な数値で把握し、スポンサーに報告するための強力なツールが**EVM（Earned Value Management）**です。</p>
                </div>
                
                <h3>EVMの3つの基本要素</h3>
                <p>EVMは、スケジュール（期間）とコスト（予算）を<strong>「お金（価値）」</strong>という共通の尺度に換算して比較します。</p>
                <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="flex:1; background: var(--bg-card); padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="color:var(--accent-blue);">PV (Planned Value)</h4>
                        <p>計画価値。「今日までに完了しているはずの作業の予算額」。<br><small>例：今日までに機能A（100万円）と機能B（200万円）が終わる予定だった。<br>→ <strong>PV = 300万円</strong></small></p>
                    </div>
                    <div style="flex:1; background: var(--bg-card); padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="color:var(--accent-green);">EV (Earned Value)</h4>
                        <p>アーンド・バリュー（達成価値）。「今日までに実際に完了した作業に割り当てられていた予算額」。<br><small>例：実際には機能A（100万円）しか終わっていない。<br>→ <strong>EV = 100万円</strong></small></p>
                    </div>
                    <div style="flex:1; background: var(--bg-card); padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="color:var(--accent-red);">AC (Actual Cost)</h4>
                        <p>実コスト。「今日までに完了した作業に対して、実際に支払った費用」。<br><small>例：機能Aを終わらせるのに、残業等で150万円かかってしまった。<br>→ <strong>AC = 150万円</strong></small></p>
                    </div>
                </div>

                <h3>健康診断の指標：差異（Variance）と効率（Index）</h3>
                <table class="styled-table">
                    <thead><tr><th>指標</th><th>計算式</th><th>意味と見方（※EVが最初！）</th></tr></thead>
                    <tbody>
                        <tr><td><strong>SV</strong> スケジュール差異</td><td><code>EV - PV</code></td><td>プラスなら進捗良好（前倒し）。マイナスなら遅延。<br><small>上記の例：100万 - 300万 = -200万円（大幅な遅延）</small></td></tr>
                        <tr><td><strong>CV</strong> コスト差異</td><td><code>EV - AC</code></td><td>プラスなら予算内。マイナスなら予算超過。<br><small>上記の例：100万 - 150万 = -50万円（予算オーバー）</small></td></tr>
                        <tr><td><strong>SPI</strong> スケジュール・インデックス</td><td><code>EV / PV</code></td><td>1.0以上なら良好。1.0未満なら遅延。<br><small>上記の例：100万 / 300万 = 0.33（致命的な遅れ）</small></td></tr>
                        <tr><td><strong>CPI</strong> コスト・インデックス</td><td><code>EV / AC</code></td><td>1.0以上なら良好。1.0未満なら予算超過。<br><small>上記の例：100万 / 150万 = 0.66（致命的なコスト超過）</small></td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 PMP試験の暗記法</div>
                    <p>計算式は常に「<strong>EVから引く、EVを割る</strong>」と覚えてください。</p>
                    <p>CPI < 1.0 または SPI < 1.0 の状況は「赤信号」です。PMは根本原因（ルート・コーズ）を調査し、是正措置（Corrective Action）を立案する必要があります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📈 将来の予測 (Forecasting)</h2>
                <p>現在のSPI/CPIを踏まえて「最終的にいくらかかるか（EAC）」を予測し、スポンサーに報告します。</p>
                <ul>
                    <li><strong>BAC (Budget at Completion):</strong> 完了時の「計画」総予算（プロジェクト開始時に決定済み）。</li>
                    <li><strong>EAC (Estimate at Completion):</strong> 完了時の「修正・予測」総予算。<br>
                    <small>※計算式として最もよく使われるのは <code>BAC / CPI</code>（今のペースのまま最後まで進むと仮定した場合の総コスト）。</small>
                    </li>
                    <li><strong>ETC (Estimate to Complete):</strong> 残作業の予測コスト (EAC - AC)。今からあといくらかかるか。</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">🚨 管理予備（Management Reserve）とコンティンジェンシー予備</div>
                    <p>金融のシステム障害による補償など、想定外のリスク（未知の未知）に備えるため、スポンサーが管理する予算を「管理予備」といいます。PMが自由に使える「コンティンジェンシー予備（既知の未知に対する保険）」とは異なり、PMが管理予備を使うには公式の変更要求が必要です。</p>
                </div>
            </div>

            <div id="day117-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day117-quiz', 'day117-quiz', [
            { question: 'システム開発プロジェクトが進行中ですが、ステータス報告会議でスポンサーから「今のペースだと、最終的な総コストはいくらになるのか教えてほしい」と質問されました。PMが確認すべきEVMの指標はどれですか？', options: ['BAC (Budget at Completion)', 'EAC (Estimate at Completion)', 'ETC (Estimate to Complete)', 'CPI (Cost Performance Index)'], correct: 2, explanation: 'プロジェクトが完了した時点での【修正（予測）された総コスト】は「EAC（Estimate at Completion）」と呼ばれます。BACは初期の計画予算、ETCは残作業に必要なコスト見積もりです。' },
            { question: 'あるAPI連携の開発において、PVが1,000万円、EVが800万円、ACが1,200万円と算出されました。この状況を示す説明として最も正確なものはどれですか？', options: ['進捗は前倒しであり、予算内に収まっている。', '進捗は遅れており、予算も超過している。', '進捗は遅れているが、予算内に収まっている。', '進捗は前倒しだが、予算を超過している。'], correct: 2, explanation: '【SV = EV - PV】→ 800 - 1000 = -200万円。マイナスなのでスケジュールの遅延。【CV = EV - AC】→ 800 - 1200 = -400万円。マイナスなのでコスト超過。よって、遅延かつ予算オーバーが正解です。' },
            { question: '【PMP状況問題】現在、プロジェクトの「CPIが0.85、SPIが1.10」であることが判明しました。PMとして取るべき行動方針のうち、最も適切なものはどれですか？', options: ['スケジュールを早めるため、さらに多くの残業と追加人員を投入する（クラッシングを行う）。', 'スケジュールは良好だがコストが超過しているため、コストを削減する代替案（スコープの縮小やより安価なリソースへの切替）を調査する。', 'スポンサーに即座に報告し、プロジェクトの中止を提案する。', 'すべて順調であるため、特に対策は行わない。'], correct: 2, explanation: 'SPIが1.10（1.0以上）なのでスケジュールは前倒しで良好です。しかし、CPIが0.85（1.0未満）なのでコスト超過（赤字化）の傾向が明白です。したがって、コストを削減または統制するための是正処置をとる必要があります。' },
            { question: 'プロジェクトの予算（コスト・ベースライン）には、リスク登録簿に記載された特定のリスク（サーバー納品の遅延等）に対する対策費用として「コンティンジェンシー予備（Contingency Reserve）」が含まれています。この予備金を使用する権限を持つのは誰ですか？', options: ['プロジェクト・スポンサー', 'ユーザー（顧客）', 'プロジェクト・マネージャー (PM)', '経営層'], correct: 3, explanation: '特定されたリスク（既知の未知）に対するコンティンジェンシー予備は、PMの承認権限内にあり、リスクが顕在化した際にPMの判断で使用できます。一方、パニック相場による倒産連鎖など、全く予期しなかったリスク（未知の未知）用の「管理予備（Management Reserve）」の使用権限は経営層やスポンサーが持ちます。' },
            { question: 'アーンド・バリュー（EV）という指標の最大の利点は何ですか？', options: ['各メンバーの個別の残業時間を正確に把握できること。', 'スケジュールとコストの進捗を「完了した作業の経済的価値」という共通の客観的な尺度で統合して分析できること。', 'プロジェクトで発生しうるリスクの確率を計算できること。', '将来のユーザー満足度を予測できること。'], correct: 2, explanation: '従来の「何日遅れたか」「いくら使ったか」を別々に管理するのではなく、「100万円分の完了するはずだった作業（PV）」に対して「実際には80万円分の作業量しか完了しておらず（EV＝価値）」「それを作るのに120万円かかった（AC）」というように、作業の成果を金額に換算して統合管理（Integration）できるのがEVMの最大の強みです。' }
        ]);
    }
};
