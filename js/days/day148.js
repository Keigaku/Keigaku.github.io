// ===========================
// Day 148: バックオフィス連携と決済
// ===========================
window.Day148 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔗 バックオフィスとの連携</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「フロントで入った取引を、正確にバックへ届ける」</div>
                    <p>Be-DFS（フロント）でブッキングされた取引データは、バックオフィスの決済システム・会計システムへ<strong>STP（Straight Through Processing）</strong>で自動連携されます。<br>
                    このフロント→バック連携の品質が、事務ミス（オペレーショナルリスク）の削減に直結します。</p>
                </div>
                
                <h3>フロント → バック のデータフロー</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.6rem; margin-bottom: 1.5rem;">
                    <div style="background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>Be-DFS</strong><br>
                        <small>取引ブッキング<br>ステータス確定</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>照合システム</strong><br>
                        <small>MarkitWire / DTCC<br>取引相手との条件照合</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>確認書生成</strong><br>
                        <small>Confirmation作成<br>電子的交換 or 郵送</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>決済指図</strong><br>
                        <small>SSI (Standard<br>Settlement Instructions)</small>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05)); padding: 0.8rem; border-radius: var(--radius-md); text-align:center;">
                        <strong>会計・GL</strong><br>
                        <small>仕訳生成<br>総勘定元帳</small>
                    </div>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📋 照合（マッチング）と確認書</h2>
                <h3>取引照合のプロセス</h3>
                <p>OTC取引は相対なので、<strong>自社の認識と相手方の認識が一致しているか</strong>を確認する必要があります。</p>
                <ul class="feature-list">
                    <li><strong>電子照合</strong>：MarkitWire（現IHS Markit/S&P Global）やDTCC等のプラットフォームで、両社が取引条件を登録し自動マッチング</li>
                    <li><strong>照合項目</strong>：商品タイプ、想定元本、金利/スプレッド、日付、通貨 — 全項目が一致して初めて「Confirmed」</li>
                    <li><strong>ブレーク（不一致）</strong>：1項目でも不一致なら「Break」であり、調査・修正が必要（バック部門の重要業務）</li>
                </ul>

                <h3>SSI (Standard Settlement Instructions)</h3>
                <p>キャッシュフローの支払先銀行口座情報です。カウンターパーティ×通貨の組み合わせで事前に登録されています。</p>
                <div class="info-box tip">
                    <div class="info-box-title">💡 SSIマスタの重要性</div>
                    <p>SSIの誤りは<strong>資金の誤送金</strong>に直結するため、マスタ管理と変更プロセスは非常に厳格です。Be-DFSからバックオフィスへデータを渡す際、<strong>SSI情報を自動付与</strong>することでオペレーショナルリスクを低減します。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🔄 バック → フロント の戻しフロー</h2>
                <p>逆方向、つまりバックオフィスからフロントへの情報フローも重要です。</p>

                <table class="styled-table text-sm">
                    <thead><tr><th>データ種類</th><th>内容</th><th>Be-DFS での影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>決済ステータス</strong></td><td>CF交換が実際に完了したか</td><td>画面上のステータス更新</td></tr>
                        <tr><td><strong>コーポレートアクション</strong></td><td>株式分割、合併、配当確定情報</td><td>TRS/PSWAP の参照価格・数量調整</td></tr>
                        <tr><td><strong>担保情報</strong></td><td>マージンコール結果、担保受渡し状況</td><td>ポジション評価への反映</td></tr>
                        <tr><td><strong>ファンドアクション</strong></td><td>NAV変動、リバランス情報</td><td>PSWAP構成銘柄の更新</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🚨 フロント/バック不整合：最大のオペリスク</div>
                    <p>フロント（Be-DFS）とバックオフィスの<strong>データ不整合（ブレーク）</strong>は、誤った損益報告や決済ミスにつながります。<br>
                    <strong>日次照合ジョブ</strong>で、フロントのポジションとバックのポジションが一致しているかを自動チェックし、ブレークを検出・報告する仕組みが必須です。</p>
                </div>
            </div>

            <div id="day148-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day148-quiz', 'day148-quiz', [
            { question: 'OTC取引の「照合（マッチング）」のプロセスで正しい説明はどれですか？', options: ['トレーダー同士が口頭で確認する', '自社と取引相手が照合プラットフォームに取引条件を登録し、全項目の一致を確認する', '取引所が自動で照合する', '年に1回だけ行う棚卸し作業'], correct: 1, explanation: 'OTC取引の照合は、MarkitWire / DTCC等のプラットフォーム上で自社と取引相手の双方が取引条件を登録し、商品タイプ・想定元本・金利・日付・通貨等の全項目が一致しているかを自動マッチングするプロセスです。' },
            { question: 'SSI (Standard Settlement Instructions) とは何ですか？', options: ['取引の承認ワークフロー', 'キャッシュフローの支払先銀行口座情報', 'リスク計算の設定情報', '取引の法的契約書'], correct: 1, explanation: 'SSIはキャッシュフロー（利息や元本）を支払うための銀行口座情報で、カウンターパーティと通貨の組み合わせごとに事前登録されています。SSIの誤りは資金の誤送金に直結するため、管理は非常に厳格です。' },
            { question: 'フロント（Be-DFS）とバックオフィス間の「データ不整合（ブレーク）」を防ぐために最も重要な仕組みはどれですか？', options: ['手動で月次チェック', '日次照合ジョブによるフロント/バックのポジション自動突合チェック', '年次の外部監査', 'トレーダーの自己申告'], correct: 1, explanation: '日次照合ジョブで、フロントシステム（Be-DFS）のポジション・取引データと、バックオフィスシステムのポジション・取引データを自動的に突合し、不一致（ブレーク）を検出・報告する仕組みが必須です。ブレークの早期発見が誤った損益報告や決済ミスの防止に直結します。' },
            { question: 'コーポレートアクション（株式分割等）の情報がバックからフロント（Be-DFS）へ連携される際に影響を受ける商品はどれですか？', options: ['金利スワップ (IRS)', 'TRS / PSWAP（エクイティ関連商品）', '通貨スワップ (CCS)', 'FXフォワード'], correct: 1, explanation: 'TRS（Total Return Swap）やPSWAP（Portfolio Swap）は株式を原資産とするため、構成銘柄の株式分割・合併・配当確定等のコーポレートアクション情報を受け取り、参照価格や数量を調整する必要があります。' }
        ]);
    }
};
