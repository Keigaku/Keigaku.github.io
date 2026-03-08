// ===========================
// Day 150: Be-DFS 運用・障害対応とキャップストーン
// ===========================
window.Day150 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚙️ Be-DFS の日次運用</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「止まらないシステム」を維持する責務</div>
                    <p>Be-DFSはフロントオフィスの基幹システムです。<strong>市場が開いている間は止められない</strong>。<br>
                    開発責任者は機能開発だけでなく、<strong>日次運用の安定性・障害対応体制の構築</strong>も重要な責務です。</p>
                </div>
                
                <h3>EOD / BOD バッチ処理</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>処理</th><th>タイミング</th><th>内容</th></tr></thead>
                    <tbody>
                        <tr><td><strong>EOD (End of Day)</strong></td><td>市場クローズ後<br>(日本: 15:00以降)</td><td>
                            ・全ポジションの公式時価評価<br>
                            ・公式P&L確定<br>
                            ・リスク値（VaR/Greeks）計算<br>
                            ・バックオフィスへのデータ配信<br>
                            ・規制報告データ生成
                        </td></tr>
                        <tr><td><strong>BOD (Beginning of Day)</strong></td><td>翌営業日の<br>市場オープン前</td><td>
                            ・マーケットデータ更新<br>
                            ・カーブ再構築<br>
                            ・マスタデータ更新反映<br>
                            ・前日EOD結果の検証<br>
                            ・トレーダー向けポジション準備
                        </td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">🚨 EODバッチが遅延するとどうなるか？</div>
                    <ul style="margin-top:0.5rem;">
                        <li>公式P&Lの確定が遅れ → <strong>マネジメントへの損益報告が遅延</strong></li>
                        <li>リスク値が出ない → <strong>翌日のリスク枠管理ができない</strong></li>
                        <li>バックへのデータ遅延 → <strong>決済処理が間に合わないリスク</strong></li>
                        <li>規制報告の期限超過 → <strong>罰金・レピュテーションリスク</strong></li>
                    </ul>
                    <p style="margin-top:0.5rem;"><strong>EODバッチのSLA（完了期限）は絶対厳守</strong>。開発責任者はバッチの所要時間を常に監視し、パフォーマンス改善に注力する必要があります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🚨 障害パターンと対応</h2>
                <p>Be-DFS運用で遭遇する典型的な障害パターンとその対応方針です。</p>

                <table class="styled-table text-sm">
                    <thead><tr><th>障害パターン</th><th>影響</th><th>対応</th></tr></thead>
                    <tbody>
                        <tr><td><strong>グリッド計算ノード障害</strong></td><td>プライシング遅延</td><td>自動フェイルオーバー、予備ノードへの切替え</td></tr>
                        <tr><td><strong>マーケットデータフィード断</strong></td><td>リアルタイム計算不能</td><td>代替フィードへの切替え、キャッシュデータでの暫定運用</td></tr>
                        <tr><td><strong>バックIF障害</strong></td><td>STP停止、決済遅延</td><td>メッセージキューでの蓄積と復旧後の一括再送</td></tr>
                        <tr><td><strong>DB障害</strong></td><td>ブッキング不能</td><td>DR(Disaster Recovery)サイトへの切替え</td></tr>
                        <tr><td><strong>EODバッチ遅延</strong></td><td>公式P&L遅延</td><td>ボトルネック特定、並列度の動的調整</td></tr>
                        <tr><td><strong>カーブ構築失敗</strong></td><td>全評価値が信頼不能</td><td>入力データの検証、前日カーブでの暫定計算</td></tr>
                    </tbody>
                </table>

                <h3>監視体制と KPI</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-blue);">
                        <strong>システム監視</strong>
                        <ul style="margin:0.5rem 0 0; padding-left:1.2rem; font-size:0.9rem;">
                            <li>CPU/メモリ/ディスク使用率</li>
                            <li>グリッドノード稼働状況</li>
                            <li>MQキュー深度</li>
                            <li>アプリケーションログ（エラー検知）</li>
                        </ul>
                    </div>
                    <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border-left: 4px solid var(--accent-green);">
                        <strong>ビジネス監視</strong>
                        <ul style="margin:0.5rem 0 0; padding-left:1.2rem; font-size:0.9rem;">
                            <li>EODバッチ完了時刻</li>
                            <li>フロント/バック照合結果</li>
                            <li>評価値の前日比（大幅変動の検知）</li>
                            <li>ブッキング件数の異常検知</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="content-section animate-in stagger-2">
                <h2>🏆 Be-DFS 開発責任者としての総合キャップストーン</h2>
                <p>15日間の研修を通じて学んだ知識を振り返ります。</p>

                <h3>全体サマリー</h3>
                <table class="styled-table text-sm">
                    <thead><tr><th>Phase</th><th>Day</th><th>学んだこと</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ドメイン基礎</strong></td><td>136-139</td><td>Be-DFSの位置づけ、OTC基礎、IRS、CCS、ベーシススワップ</td></tr>
                        <tr><td><strong>商品知識</strong></td><td>140-142</td><td>TRS、PSWAP、プライムブローカレッジ、エキゾチック、CDS</td></tr>
                        <tr><td><strong>評価・計算</strong></td><td>143-145</td><td>ディスカウントファクター、カーブ構築、グリッドコンピューティング、Greeks</td></tr>
                        <tr><td><strong>システム設計</strong></td><td>146-148</td><td>ブッキングフロー、データモデル、フロントUI、バックオフィス連携</td></tr>
                        <tr><td><strong>運用・規制</strong></td><td>149-150</td><td>マーケットデータ、規制対応、日次運用、障害対応</td></tr>
                    </tbody>
                </table>

                <div style="background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(59,130,246,0.05)); padding: 1.5rem; border-radius: var(--radius-md); margin-top: 1.5rem;">
                    <p style="text-align:center; font-size:1.1rem; font-weight:bold; color:var(--accent-purple); margin:0;">
                        Be-DFSの開発責任者は「技術」×「ドメイン」×「運用」の<br>
                        三位一体の知識が求められる、<br>
                        金融IT の中でも最もチャレンジングで面白いポジションです。
                    </p>
                </div>
            </div>

            <div id="day150-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day150-quiz', 'day150-quiz', [
            { question: 'EOD（End of Day）バッチ処理のSLA（完了期限）が厳守される理由として最も深刻なものはどれですか？', options: ['翌日のログファイルが生成できない', '遅延すると公式P&L確定、リスク管理、決済処理、規制報告の全てに支障が出る', '社内メールの配信が遅れる', 'トレーダーの残業代が増える'], correct: 1, explanation: 'EODバッチが遅延すると、公式P&Lの確定遅延（マネジメント報告不能）、リスク値の未算出（翌日のリスク枠管理不能）、バックオフィスへのデータ遅延（決済処理遅延）、規制報告の期限超過（罰金リスク）と、ビジネスインパクトが多方面に及びます。' },
            { question: 'マーケットデータフィードが断絶した場合の適切な暫定対応はどれですか？', options: ['全ての計算を停止して翌日まで待つ', '代替フィードへ切替え、利用できない場合はキャッシュ（最新取得済み）データで暫定運用する', 'トレーダーに手動で数値を入力してもらう', 'マーケットデータなしで計算を続行する'], correct: 1, explanation: 'マーケットデータフィード断の場合、まず代替フィード（例：Bloombergが止まればRefinitivに切替え）を試みます。代替もない場合は、最後に正常取得できたキャッシュデータを使って暫定的に計算を継続し、トレーダーに「暫定値」であることを明示します。' },
            { question: 'Be-DFS開発責任者に求められる3つの柱として正しい組み合わせはどれですか？', options: ['営業力・交渉力・プレゼン力', '技術力・ドメイン知識・運用管理能力', 'デザイン力・マーケティング・会計知識', '人事管理・法務・総務'], correct: 1, explanation: 'Be-DFSの開発責任者には、①技術力（システム設計・グリッド計算・高性能UI等）、②ドメイン知識（OTCデリバティブ・プライシング・リスク管理等）、③運用管理能力（EODバッチ・障害対応・SLA管理等）の三位一体の知識が必要です。' },
            { question: 'グリッド計算ノードの障害に対する適切な対応設計はどれですか？', options: ['手動でノードを再起動する', '障害ノードのジョブを自動的に予備ノードへフェイルオーバーして処理を継続する', '全ての計算を停止して調査する', 'エラーを無視して次の計算に進む'], correct: 1, explanation: '数百〜数千の計算ノードがあるグリッド環境では、個別ノードの障害は日常的に発生し得ます。障害ノードのジョブを自動検知し、予備ノード（または他の空きノード）へフェイルオーバーして処理を継続する設計が必要です（フォールトトレランス）。' }
        ]);
    }
};
