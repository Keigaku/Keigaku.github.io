// ===========================
// Day 118: 品質管理と継続的改善
// ===========================
window.Day118 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔍 品質管理 (Quality Management)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 「グレード（等級）」と「品質（Quality）」の違い</div>
                    <p>金融システムにおいて、1ミリ秒の遅延なく1秒間に10万件のトランザクションを処理できる超高速エンジン（＝高グレード）は、常に必要とは限りません（社内用の月次経費精算システムなど）。<br>
                    しかし、要件として定められた通りにバグなく安定して動くこと（＝高品質）は常に求められます。</p>
                    <p style="text-align:center; font-weight:bold; color:var(--accent-red); margin-top:0.5rem;">低グレードは許容されるが、低品質は決して許されない。</p>
                </div>
                
                <h3>COQ (Cost of Quality: 品質のコスト)</h3>
                <p>バグを出さないための投資と、バグを出してしまった後の損失を比較する考え方です。「品質への投資は、最終的な全体コストを引き下げる」というのがPMPイズムです。</p>

                <table class="styled-table">
                    <thead><tr><th colspan="2">適合コスト (Cost of Conformance)<br><small>不具合を「防ぐ」ために事前にお金をかける</small></th><th colspan="2">不適合コスト (Cost of Nonconformance)<br><small>不具合を「出した」結果として支払うツケ</small></th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>予防コスト (Prevention)</strong></td>
                            <td><strong>評価コスト (Appraisal)</strong></td>
                            <td><strong>内部失敗コスト (Internal)</strong></td>
                            <td><strong>外部失敗コスト (External)</strong></td>
                        </tr>
                        <tr>
                            <td>・トレーニング・教育<br>・テスト環境の自動化構築<br>・十分な設計時間を確保する</td>
                            <td>・単体テスト、結合テストの実行<br>・コードレビュー<br>・インスペクション（監査）</td>
                            <td>【リリース前】<br>・バグの修正作業（手戻り）<br>・再設計、再テスト</td>
                            <td>【リリース後】<br>・インシデント対応、システムのダウンタイム<br>・顧客への損害賠償や信頼失墜</td>
                        </tr>
                    </tbody>
                </table>
                <p>品質管理計画では、<strong>左側の「適合コスト（特に予防コスト）」に投資し、右側の「外部失敗コスト」をゼロにする</strong>ことを目指します。</p>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>📊 品質コントロールと継続的改善</h2>
                <p>品質を監視・測定するためのデータ分析手法です（かつて「品質管理の7つ道具」と呼ばれていたものの一部が含まれます）。</p>
                
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="background: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="color:var(--accent-blue);">1. コントロール・チャート (管理図)</h4>
                        <p>プロセスの挙動が「許容範囲内（安定しているか）」か「異常（上限や下限の管理限界を超えたか）」を時系列で監視します。例：APIのレスポンスタイムが常に平均0.5秒以内に収まっているかを監視する。</p>
                        <p><small>※【7の法則法則】：7点連続して平均値より同じ側（上または下）に結果が出た場合、管理限界内であってもプロセスが制御不能（シフト）に陥りつつある兆候とみなします。</small></p>
                    </div>
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
                    <div style="flex:1; min-width:300px; background: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="color:var(--accent-green);">2. パレート図 (Pareto Chart)</h4>
                        <p>「バグの80%は、20%の特定のモジュール（根本原因）から発生している」というパレートの法則（80:20の法則）に基づきます。棒グラフ（原因の頻度）と折れ線グラフ（累積比率）を組み合わせ、優先的に対策すべきクリティカルな少数の原因を特定します。</p>
                    </div>
                    <div style="flex:1; min-width:300px; background: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md);">
                        <h4 style="color:var(--accent-purple);">3. 石川ダイアグラム (特性要因図)</h4>
                        <p>魚の骨（Fishbone）のような図。本番障害（結果：特性）が発生した際、その根本原因を「人（Man）、機械（Machine）、方法（Method）、材料（Material）」などのカテゴリーに遡って深く分析（Whyを5回繰り返すような分析）するために使用します。</p>
                    </div>
                </div>

                <div class="info-box tip" style="margin-top:2rem;">
                    <div class="info-box-title">💡 PDCAと継続的改善 (Kaizen)</div>
                    <p>品質は最初から完璧に作れるものではありません。PMP・アジャイルイズムでは、小さなプロセス改善を常に回し続ける（継続的改善）ことを求めています。レトロスペクティブ（振り返り）はそのための最重要イベントです。</p>
                </div>
            </div>

            <div id="day118-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day118-quiz', 'day118-quiz', [
            { question: '【PMP状況問題】金融機関の決済システムを開発しています。システム要件には「レスポンスタイムが確実に0.5秒以内であること」と明記されています。現在のテスト結果は平均1.2秒と要件を満たしていません。しかしデザインは洗練され最高級のUXを持っています。この状況を的確に表す用語の組み合わせはどれですか？', options: ['低グレード、低品質', '高グレード、低品質', '高グレード、高品質', '低グレード、高品質'], correct: 2, explanation: '洗練された最高級のデザインや機能（高グレード・高級）を備えていても、「要件を満たしていない（1.2秒かかってしまう）」のであれば、それは「低品質」です。「グレード」は設計レベルの高さや機能の多さであり、「品質」は要件を満たしている度合いを示します。プロジェクトマネジメントでは低品質は許されません。' },
            { question: 'プロジェクトの予算承認において、品質保証部門が「開発者へのテスト駆動開発（TDD）のトレーニング費用」を計上してきました。この費用は「品質コスト（COQ）」のどのカテゴリーに分類されますか？', options: ['予防コスト (Prevention Cost)', '評価コスト (Appraisal Cost)', '内部失敗コスト (Internal Failure Cost)', '外部失敗コスト (External Failure Cost)'], correct: 1, explanation: 'トレーニング教育、正しい設計プロセスの導入など、「エラーがシステムに組み込まれることを事前に防ぐ」ための投資は『予防コスト（適合コスト）』に該当します。一方、書かれたコードに対してテストを実施してバグを探す費用は『評価コスト』です。' },
            { question: '統合テストの段階で、システムに数百件のバグが発見されました。PMは、限られたリソースと期間の中で、最も影響が大きいシステム上の欠陥の根源を見つけ出し、優先的に修正を当てたいと考えています。状況を分析し優先順位を決定するために最も適したツールはどれですか？', options: ['コントロール・チャート (Control Chart)', 'パレート図 (Pareto Chart)', 'WBS (Work Breakdown Structure)', '特性要因図 (Fishbone Diagram)'], correct: 2, explanation: '多数の問題がある中で、「少数の決定的な原因が、問題の大部分（80%等）を引き起こしている」ことを可視化し、優先的に対応すべき課題を特定するためのツールは「パレート図」です。' },
            { question: '運用中の仮想通貨取引所のサーバーレスポンスタイムを「コントロール・チャート（管理図）」で監視していました。平均値が規定の0.2秒近辺ですが、直近で「連続した7回の測定結果」がすべて平均値より上の0.25秒前後（管理限界内）で推移しています。PMとしての正しい判断はどれですか？', options: ['すべての結果が管理限界（システムエラー許容範囲）に収まっているので、特に問題視せず放置する。', '7の法則（セブンの法則）により、プロセスが制御不能になりつつあるかシフトが起きているとみなせるため、根本原因の調査（メモリリークの可能性等）を開始する。', 'サーバーを直ちにシャットダウンし、ユーザーに障害報告を出す。', 'コントロール・チャートの上方の管理限界線を引き上げて、データを正常な範囲内に見せる。'], correct: 2, explanation: '【7の法則】についてです。7つの連続したデータポイントが平均値の同じ側（上か下か）にある場合、プロセスが偶然ではなく何らかの特定の原因（Special Cause）によって偏ってしまっている（シフトしている）ことを示唆しています。管理限界を超えていなくても、異常とみなして調査が必要です。' },
            { question: '【PMP状況問題】システムを本番稼働させた1週間後、エンドユーザーから重大な計算ロジックのミスが報告され、システムを一時停止して改修する事態となりました。この際にかかる対応費用（ダウンタイムの損失、顧客対応、修正と再リリース）は、どのコストに含まれますか？', options: ['評価コスト', '予防コスト', '外部失敗コスト', '内部失敗コスト'], correct: 3, explanation: '製品やサービスが顧客の手に渡った（リリースされた）後で発見されたエラーによって生じるすべてのコスト（損害賠償、サポート対応、リコール、ブランドの失墜など）は「外部失敗コスト」です。これは品質コストの中でプロジェクト（組織）にとって最も高くつく最悪のコストであり、PMはこれを避けるために予防・評価コストに投資します。' }
        ]);
    }
};
