// ===========================
// Day 78: DevOpsとCI/CD
// ===========================
window.Day78 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🔄 DevOpsとは</h2>
                <p>DevOpsは<strong>開発（Dev）と運用（Ops）を融合</strong>し、ソフトウェアの開発・テスト・デリバリーを
                高速化・安定化する文化・プラクティスです。</p>
                <table class="styled-table">
                    <thead><tr><th>原則</th><th>内容</th><th>ツール例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>CI（継続的インテグレーション）</strong></td><td>コード変更を頻繁にマージ＆自動テスト</td><td>Jenkins, GitHub Actions</td></tr>
                        <tr><td><strong>CD（継続的デリバリー）</strong></td><td>いつでもリリースできる状態を維持</td><td>ArgoCD, Spinnaker</td></tr>
                        <tr><td><strong>IaC（Infrastructure as Code）</strong></td><td>インフラをコードで管理</td><td>Terraform, CloudFormation</td></tr>
                        <tr><td><strong>監視・オブザーバビリティ</strong></td><td>システムの可視化・異常検知</td><td>Prometheus, Grafana, Datadog</td></tr>
                        <tr><td><strong>自動化</strong></td><td>手作業の排除</td><td>Ansible, Chef, Puppet</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🐳 コンテナとオーケストレーション</h2>
                <table class="styled-table">
                    <thead><tr><th>技術</th><th>役割</th><th>メリット</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Docker</strong></td><td>アプリをコンテナとしてパッケージ化</td><td>環境差異の解消、軽量</td></tr>
                        <tr><td><strong>Kubernetes</strong></td><td>コンテナのオーケストレーション</td><td>自動スケール、自己修復</td></tr>
                        <tr><td><strong>Helm</strong></td><td>Kubernetesのパッケージマネージャ</td><td>デプロイの標準化</td></tr>
                        <tr><td><strong>イメージレジストリ</strong></td><td>コンテナイメージの保管</td><td>バージョン管理、脆弱性スキャン</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🏦 金融業界のDevOps</h2>
                <table class="styled-table">
                    <thead><tr><th>課題</th><th>従来の問題</th><th>DevOpsでの解決</th></tr></thead>
                    <tbody>
                        <tr><td><strong>リリース頻度</strong></td><td>年数回のビッグバンリリース</td><td>週次/日次の小さなリリース</td></tr>
                        <tr><td><strong>障害対応</strong></td><td>手動での復旧、長時間停止</td><td>自動ロールバック、Blue-Greenデプロイ</td></tr>
                        <tr><td><strong>環境管理</strong></td><td>手作業構築、本番との差異</td><td>IaCで環境を完全再現</td></tr>
                        <tr><td><strong>コンプライアンス</strong></td><td>手動の承認プロセス</td><td>Policy as Code（自動チェック）</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 DevOps成功のポイント</div>
                    <p>・<strong>文化が先、ツールは後</strong>：チーム間の壁を壊すことが最優先</p>
                    <p>・<strong>小さく始める</strong>：全てを一度に変えない</p>
                    <p>・<strong>計測する</strong>：デプロイ頻度、リードタイム、MTTR、変更失敗率</p>
                    <p>・<strong>セキュリティを組み込む</strong>（DevSecOps）</p>
                </div>
            </div>
            <div id="day78-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day78-quiz', 'day78-quiz', [
            { question: 'CI（継続的インテグレーション）の主な目的はどれですか？', options: ['手動テスト', 'コード変更を頻繁にマージし自動テスト', '年1回のリリース', '手動デプロイ'], correct: 1, explanation: 'CIはコード変更を頻繁にメインブランチにマージし、自動テストで品質を担保するプラクティスです。' },
            { question: 'Dockerの最大の利点はどれですか？', options: ['計算が速い', '環境差異を解消しどこでも同じ動作を保証', 'データベース不要', 'ネットワーク不要'], correct: 1, explanation: 'Dockerはアプリを環境ごとコンテナ化し、開発・テスト・本番で同一の動作環境を保証します。' },
            { question: 'IaC（Infrastructure as Code）の利点はどれですか？', options: ['手動でのみ構築', 'インフラの完全再現性と自動化', 'ハードウェア不要', 'コスト増加'], correct: 1, explanation: 'IaCはインフラをコードで定義することで、環境の完全な再現性、バージョン管理、自動構築を実現します。' },
            { question: 'Blue-Greenデプロイの特徴はどれですか？', options: ['本番環境が1つだけ', '新旧2つの環境を切り替えてリリース', 'テストを省略する', '手動切り替え'], correct: 1, explanation: 'Blue-Greenデプロイは新旧2環境を用意し、切り替えることでダウンタイムゼロのリリースと即時ロールバックを実現します。' },
            { question: 'DevOpsの4つのKey Metricsに含まれないのはどれですか？', options: ['デプロイ頻度', 'リードタイム', 'コード行数', '変更失敗率'], correct: 2, explanation: 'DORA 4 Key Metricsはデプロイ頻度、リードタイム、MTTR（復旧時間）、変更失敗率の4つです。' }
        ]);
    }
};
