// ===========================
// Day 109: 18:00-19:00 自己研鑽・スキルアップ
// ===========================
window.Day109 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📖 18:00 — 自己研鑽の時間</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 このセクションで学ぶこと</div>
                    <p>業務時間後の自己研鑽が、将来の市場価値を決定します。
                    「出来る社員」は<strong>70:20:10モデル</strong>で学習方法を最適化し、
                    <strong>コルブの経験学習サイクル</strong>で経験を知恵に変え、
                    <strong>ドレイファスモデル</strong>で自分のスキルレベルを把握します。</p>
                </div>
                <h3>📊 18:00-18:20 — 学習戦略（70:20:10モデル）</h3>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：70:20:10 モデル</div>
                    <p>人材開発の研究から導き出された、効果的な学習の配分モデルです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>割合</th><th>学習源</th><th>内容</th><th>金融SEとしての実践</th></tr></thead>
                    <tbody>
                        <tr><td><strong>70%</strong></td><td>経験学習<br>（OJT）</td><td>実際の業務から学ぶ</td><td>プロジェクトでの開発・運用・障害対応の実体験</td></tr>
                        <tr><td><strong>20%</strong></td><td>他者から学習<br>（フィードバック）</td><td>上司・先輩・同僚から学ぶ</td><td>コードレビュー、1on1、メンタリング、勉強会</td></tr>
                        <tr><td><strong>10%</strong></td><td>公式学習<br>（研修・書籍）</td><td>体系的な知識を習得</td><td>資格勉強、技術書、オンラインコース、社外セミナー</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 70%の経験学習を最大化するコツ</div>
                    <p>・<strong>ストレッチ目標</strong>を設定する（少し背伸びした仕事に挑戦）</p>
                    <p>・経験した後に必ず<strong>振り返り（リフレクション）</strong>を行う</p>
                    <p>・<strong>失敗経験</strong>こそ最大の学習機会と捉える</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🔄 18:20-18:40 — 経験を知恵に変える（コルブの経験学習サイクル）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：コルブの経験学習サイクル</div>
                    <p>経験を「やっただけ」で終わらせず、<strong>4つのステップ</strong>で着実に自分のスキルに変換します。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>ステップ</th><th>内容</th><th>金融SEの実践例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>① 具体的経験</strong><br>Concrete Experience</td><td>実際に何かを経験する</td><td>初めてクライアント向けにシステム障害の説明を行った</td></tr>
                        <tr><td><strong>② 省察的観察</strong><br>Reflective Observation</td><td>経験を振り返り分析する</td><td>「あの説明は技術用語が多すぎてクライアントに伝わりにくかった」</td></tr>
                        <tr><td><strong>③ 抽象的概念化</strong><br>Abstract Conceptualization</td><td>教訓・原則を導き出す</td><td>「非技術者には影響→原因→対策の順で、ビジネス用語で説明すべき」</td></tr>
                        <tr><td><strong>④ 能動的実験</strong><br>Active Experimentation</td><td>導き出した原則を次に試す</td><td>次の障害報告ではSDS法を使い、ビジネス影響から説明する</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📈 18:40-19:00 — スキルレベルの把握（ドレイファスモデル）</h2>
                <div class="info-box important">
                    <div class="info-box-title">🔄 フレームワーク：ドレイファスモデル（技能習得の5段階）</div>
                    <p>スキル習得の段階を理解し、現在の自分のレベルと次の目標を明確にするモデルです。</p>
                </div>
                <table class="styled-table">
                    <thead><tr><th>段階</th><th>特徴</th><th>金融SEの例</th><th>学習方法</th></tr></thead>
                    <tbody>
                        <tr><td><strong>① 初心者</strong><br>Novice</td><td>ルールに従って行動</td><td>マニュアル通りにSQLを書ける</td><td>手順書・研修・チュートリアル</td></tr>
                        <tr><td><strong>② 中級者</strong><br>Advanced Beginner</td><td>状況に応じて判断し始める</td><td>パフォーマンスを意識したSQLが書ける</td><td>OJT・コードレビューでの学び</td></tr>
                        <tr><td><strong>③ 上級者</strong><br>Competent</td><td>全体を見て優先順位をつける</td><td>DB設計全体を俯瞰して最適化できる</td><td>プロジェクトリード経験</td></tr>
                        <tr><td><strong>④ 熟練者</strong><br>Proficient</td><td>直感的に状況を把握</td><td>障害発生時に直感的に原因箇所を特定</td><td>多様なプロジェクト経験</td></tr>
                        <tr><td><strong>⑤ 達人</strong><br>Expert</td><td>無意識に最適解を導く</td><td>アーキテクチャの判断が自然にできる</td><td>教えることで更に深化</td></tr>
                    </tbody>
                </table>
                <h4>自己研鑽の具体的メニュー</h4>
                <table class="styled-table">
                    <thead><tr><th>カテゴリ</th><th>活動内容</th><th>所要時間</th><th>効果</th></tr></thead>
                    <tbody>
                        <tr><td><strong>技術書の精読</strong></td><td>1日10ページ、ノートにまとめる</td><td>30分/日</td><td>体系的知識の習得</td></tr>
                        <tr><td><strong>資格勉強</strong></td><td>問題集を解く（基本情報、AWS等）</td><td>30分/日</td><td>知識の証明・体系化</td></tr>
                        <tr><td><strong>ハンズオン</strong></td><td>個人プロジェクトでコードを書く</td><td>30分/日</td><td>実践的スキルの定着</td></tr>
                        <tr><td><strong>技術記事の執筆</strong></td><td>学んだことをQiita/Zennに書く</td><td>週1回60分</td><td>知識の定着・アウトプット</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">🎯 出来る社員の自己研鑽ルール</div>
                    <p>・<strong>毎日30分</strong>を死守する（完璧より継続）</p>
                    <p>・<strong>インプット:アウトプット = 3:7</strong>を目指す</p>
                    <p>・<strong>四半期ごとに学習テーマ</strong>を決め、浅く広くではなく深く学ぶ</p>
                    <p>・<strong>学んだことを翌日の業務で1つ試す</strong>（コルブサイクル④）</p>
                </div>
            </div>
            <div id="day109-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day109-quiz', 'day109-quiz', [
            { question: '70:20:10モデルで最も大きな割合を占める学習源はどれですか？', options: ['公式学習（研修・書籍）', '他者からの学習（フィードバック）', '経験学習（OJT）', 'オンラインコース'], correct: 2, explanation: '70:20:10モデルでは実際の業務経験（OJT）が70%と最も大きな割合を占めます。' },
            { question: 'コルブの経験学習サイクルで「具体的経験」の次のステップは何ですか？', options: ['能動的実験', '抽象的概念化', '省察的観察', '具体的行動'], correct: 2, explanation: '具体的経験の後は「省察的観察」として経験を振り返り分析するステップに進みます。' },
            { question: 'ドレイファスモデルの5段階で「直感的に状況を把握できる」のは何段階目ですか？', options: ['上級者（③）', '熟練者（④）', '達人（⑤）', '中級者（②）'], correct: 1, explanation: '熟練者（Proficient）レベルでは、経験に基づく直感的な状況把握が可能になります。' },
            { question: '自己研鑽で「インプット:アウトプット = 3:7」が推奨される理由はどれですか？', options: ['インプットは不要だから', 'アウトプットすることで知識が定着するから', '時間がないから', 'アウトプットの方が楽だから'], correct: 1, explanation: '学んだことを説明・実践・発信することで、記憶の定着率が飛躍的に高まります（ラーニングピラミッド）。' },
            { question: '経験学習を最大化するために最も重要なことはどれですか？', options: ['とにかく量をこなす', '経験後に必ず振り返り（リフレクション）を行う', '高難度のタスクだけに挑む', '失敗を避ける'], correct: 1, explanation: '経験しただけでは学びになりません。振り返りにより教訓を抽出し、次に活かすことが最も重要です。' }
        ]);
    }
};
