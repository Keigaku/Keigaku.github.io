// ===========================
// Day 113: コンフリクト管理とステークホルダーエンゲージメント
// ===========================
window.Day113 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚔️ コンフリクト管理 (Conflict Management)</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 対立は「悪」ではない</div>
                    <p>金融システム開発において、部署間（営業 vs コンプラ、開発 vs インフラ）の利害対立は日常茶飯事です。PMIイズムでは、**「コンフリクト（対立）は避けられないものであり、適切に管理されればより良い代替案を生み出す源泉になる」**と考えます。決して逃げてはいけません。</p>
                </div>
                
                <h3>コンフリクト解決の5つのアプローチ（トーマス＝キルマン・モデル）</h3>
                <p>状況に応じて、PMは以下の5つの解決アプローチを使い分けます。PMP試験では「この状況で最適なアプローチはどれか？」が頻繁に問われます。</p>

                <table class="styled-table">
                    <thead><tr><th>アプローチ<br>(PMBOK用語)</th><th>特徴（Win / Lose）</th><th>金融PJでの適切な使用シーン</th></tr></thead>
                    <tbody>
                        <tr><td><strong>1. コラボレーション<br> / 問題解決</strong><br>(Collaborating / Problem Solving)</td><td><strong>Win - Win</strong><br>双方の意見を取り入れ、より良い第三の案を生み出す。最良のアプローチ。</td><td>時間的余裕があり、複雑なアーキテクチャ設計においてインフラチームとアプリチームで意見が割れたとき。根本原因から議論し最適な設計を導く。</td></tr>
                        <tr><td><strong>2. 妥協 / 和解</strong><br>(Compromising / Reconciling)</td><td><strong>Lose - Lose (または一部Win)</strong><br>双方が少しずつ譲歩して合意点を見つける。</td><td>お互い譲らないが期限が迫っているとき。「今回はA部署の要望を優先するが、フェーズ2ではB部署の機能を必ず入れる」と折り合いをつける。</td></tr>
                        <tr><td><strong>3. 強制 / 指揮</strong><br>(Forcing / Directing)</td><td><strong>Win - Lose</strong><br>権力や職位を使って一方の意見を押し通す。</td><td>緊急本番障害の復旧時や、コンプライアンス的に「絶対に法規上NG」な仕様をビジネス側が要求してきたとき。（議論の余地なし）</td></tr>
                        <tr><td><strong>4. 鎮静 / 融和</strong><br>(Smoothing / Accommodating)</td><td><strong>Lose - Win</strong><br>相違点から目をそらし、合意できる点（共通部分）を強調して雰囲気を維持する。</td><td>対立している内容の重要性が低く、それよりも「顧客との関係性維持（信頼貯金）」を優先したいとき。一旦相手に譲る。</td></tr>
                        <tr><td><strong>5. 撤退 / 回避</strong><br>(Withdrawing / Avoiding)</td><td><strong>Lose - Lose (先送り)</strong><br>問題から逃げる。問題解決を後回しにする。</td><td>双方が感情的になりすぎているため、一旦クールダウンさせるために「明日また話そう」と議論を打ち切るとき。</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 PMP試験の黄金律</div>
                    <p>問題文に特別な制約（緊急事態、法律違反など）がない限り、PMPにおける正解の行動は常に<strong>「Collaborating / Problem Solving（コラボレーション・問題解決）」</strong>です。Win-Loseになる強制や、問題を先送りする回避は、通常不正解となります。</p>
                </div>
            </div>

            <div class="content-section animate-in stagger-1">
                <h2>🎯 ステークホルダー・エンゲージメント</h2>
                <p>ステークホルダー（利害関係者）とは、プロジェクトにより影響を与える、または影響を受ける全ての人・組織です。単なる「顧客対応」ではなく、彼らの期待をマネジメントし、プロジェクトへの「積極的な関与（エンゲージメント）」を引き出すことがPMの役割です。</p>

                <h3>権力と関心グリッド (Power/Interest Grid)</h3>
                <p>多数のステークホルダーを全て同じ時間と労力で対応することは不可能です。ステークホルダーを分類し、戦略的に対応します。</p>
                <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin-bottom:1rem;">
                    <div style="display:grid; grid-template-columns: auto 1fr 1fr; gap:10px;">
                        <div></div><div style="font-weight:bold;">関心：低 (Interest: Low)</div><div style="font-weight:bold;">関心：高 (Interest: High)</div>
                        <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight:bold; padding-right:10px;">権力：高<br>(Power: High)</div>
                        <div style="border: 2px solid var(--accent-orange); padding: 1rem; border-radius: 8px;"><strong>満足させる (Keep Satisfied)</strong><br>例：直接関与しないが予算の決定権を持つCFO。<br>→ 定期的なサマリー報告を怠らない。</div>
                        <div style="border: 2px solid var(--accent-red); padding: 1rem; border-radius: 8px; background: rgba(248, 113, 113, 0.1);"><strong>密接に管理 (Manage Closely)</strong><br>例：システムの主要エンドユーザー部門の長。<br>→ 最重要。最も頻繁にコミュニケーションし、期待を満たし続ける。</div>
                        <div style="writing-mode: vertical-rl; text-orientation: mixed; font-weight:bold; padding-right:10px;">権力：低<br>(Power: Low)</div>
                        <div style="border: 2px solid var(--text-muted); padding: 1rem; border-radius: 8px;"><strong>監視する (Monitor)</strong><br>例：他部署の一般社員。<br>→ 最小限の労力で状況を監視する。</div>
                        <div style="border: 2px solid var(--accent-blue); padding: 1rem; border-radius: 8px;"><strong>情報を提供する (Keep Informed)</strong><br>例：システムを利用する若手オペレーター。<br>→ 意思決定権はないが業務影響が大きいため、しっかり情報を共有する。</div>
                    </div>
                </div>

                <h3>ステークホルダー・エンゲージメント評価マトリクス</h3>
                <p>ステークホルダーの「現在の関与レベル（Current）」と「プロジェクト成功のために期待する関与レベル（Desired）」のギャップを可視化します。</p>
                <table class="styled-table">
                    <thead><tr><th>ステークホルダー</th><th>Unaware<br>(無認識)</th><th>Resistant<br>(抵抗)</th><th>Neutral<br>(中立)</th><th>Supportive<br>(支持)</th><th>Leading<br>(主導)</th></tr></thead>
                    <tbody>
                        <tr><td>コンプライアンス部門長</td><td></td><td><strong>C</strong> (現在)</td><td></td><td><strong>D</strong> (目標)</td><td></td></tr>
                        <tr><td>プロジェクト・スポンサー</td><td></td><td></td><td></td><td></td><td><strong>C / D</strong></td></tr>
                        <tr><td>営業部門長</td><td><strong>C</strong> (現在)</td><td></td><td></td><td><strong>D</strong> (目標)</td><td></td></tr>
                    </tbody>
                </table>
                <p>上記の例で、コンプライアンス部門長は新システム導入に「抵抗(Resistant)」しています（C）。しかしプロジェクト成功には「支持(Supportive)」が必要です（D）。PMは両者のギャップを埋めるためのコミュニケーション戦略（懸念事項のヒアリングと解決策提示など）を立案します。</p>
            </div>

            <div id="day113-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);

        QuizEngine.render('day113-quiz', 'day113-quiz', [
            { question: '【PMP状況問題】要件定義会議で、フロントエンドチームとバックエンドチームがシステムのアーキテクチャについて激しく対立しています。双方とも論理的な根拠があり譲りません。スケジュールにはある程度の余裕があります。PMとして採用すべきコンフリクト解決手法はどれですか？', options: ['「妥協（Compromising）」：双方に少しずつ譲歩させ、折衷案として中途半端なアーキテクチャにする。', '「撤退（Withdrawing）」：放っておけばそのうち結論が出るので、会議を静観する。', '「コラボレーション（Collaborating）」：両チームの懸念を深く掘り下げ、双方が納得する全く新しい最適なアーキテクチャ（第三の案）を模索するようファシリテートする。', '「強制（Forcing）」：PMの権限により、バックエンドチームの案を採用すると決定する。'], correct: 2, explanation: '時間的な余裕があり、設計のような重要な論点である場合、双方が深く議論を尽くして全体最適な解決策（Win-Win）を生み出す「コラボレーション（問題解決）」が常に最善のアプローチです。妥協は一時しのぎになりやすく、アーキテクチャの負債となる可能性があります。' },
            { question: '【PMP状況問題】あなたは厳しい金融規制要件を満たす必要のある決済システムの導入PMです。チームリーダーが「納期の関係で、一部のセキュリティ暗号化処理を簡略化して実装したい」と主張しています。PMとして採用すべきコンフリクト解決手法はどれですか？', options: ['「鎮静・融和（Smoothing）」：彼の不満を和らげつつ、とりあえず実装を進めさせる。', '「コラボレーション（Collaborating）」：どうすれば簡略化しつつセキュリティを保てるか、ブレインストーミングを行う。', '「強制（Forcing）」：規制要件の違反は許されないため、議論の余地なく却下し、完全な暗号化の実装を指示する。', '「妥協（Compromising）」：半分だけ暗号化して、残りは次のリリースに回す。'], correct: 2, explanation: 'コンプライアンスや法律・規制違反に関わる事項、または緊急の安全に関わる事象については、議論や譲歩の余地はありません。この例外的なケースにおいてのみ、自身の権力を用いた「強制・指揮（Forcing）」が正解のアプローチとなります。' },
            { question: '権力と関心グリッド（Power/Interest Grid）において、「プロミスキング（約束の不履行）」をしてでもシステムのリリースを最優先で要求してくる、権力は低いが関心が非常に高いステークホルダーに対して、どのような対応を取るべきですか？', options: ['密接に管理する (Manage Closely)', '満足させる (Keep Satisfied)', '情報を提供する (Keep Informed)', '監視する (Monitor)'], correct: 2, explanation: '「権力：低、関心：高」のカテゴリに入ります。彼らに決定権（権力）はありませんが、システムに強い関心があるため、プロジェクトの状況について継続的に「情報を提供する（Keep Informed）」ことで、彼らの不安を解消し不満の爆発を防ぐ必要があります。' },
            { question: '【PMP状況問題】プロジェクト開始から2ヶ月後、主要なステークホルダーへの定期的な現状報告を行っていたところ、ステークホルダーから「このような機能を作っているとは知らなかった。このシステムは私の業務フローと全く合わない」と強いクレームを受けました。PMがプロジェクト初期の段階で怠っていた可能性が最も高いプロセスはどれですか？', options: ['チーム憲章の作成', 'ステークホルダーの特定と期待の分析', '予算の見積もり', '品質管理計画の作成'], correct: 1, explanation: 'ステークホルダーが後になって「知らなかった」「期待と違う」と不満を漏らすケースは、プロジェクトの立ち上げフェーズである「ステークホルダーの特定（Identify Stakeholders）」と、彼らのニーズや期待を取りまとめるプロセスが不十分だったことに起因します。ステークホルダー分析を早期に行うことが重要です。' },
            { question: 'ステークホルダー・エンゲージメント評価マトリクスにおいて、プロジェクトの目標達成に不可欠な部門長が現在「抵抗（Resistant）」の状態にあると判明しました。PMが取るべき適切な行動として、PMPの一般的な考えに沿っているものはどれですか？', options: ['抵抗勢力からの影響を避けるため、その部門長をプロジェクトから外し、会議に呼ばないようにする。', '部門長の抵抗の根本原因（不安や誤解など）をヒアリングするための1on1ミーティングを設定する。', 'スポンサーに即座にエスカレーションし、上層部から部門長へ命令を下してもらう。', 'プロジェクトの成功には関係ないと考え、そのまま状況を監視する。'], correct: 1, explanation: 'ステークホルダーが抵抗している場合、PMPイズムでは「コラボレーション・対話」と「問題の根本原因追及」を最優先します。排除したり上層部を使ったりするのではなく、直接対話（1on1等）によって彼らの懸念や期待（WIIFM: What is in it for me? - 私に何のメリットがあるの？）を理解し、エンゲージメントレベルを「支持」へ引き上げる努力をします。' }
        ]);
    }
};
