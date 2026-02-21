// ===========================
// Day 61: 世界の法制度と人権
// ===========================
window.Day61 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>⚖️ 世界の二大法体系</h2>
                <p>法制度の違いは<strong>契約書の書き方からコンプライアンスまで</strong>、
                金融ビジネスのあらゆる場面に影響します。</p>
                <table class="styled-table">
                    <thead><tr><th>項目</th><th>大陸法（シビルロー）</th><th>英米法（コモンロー）</th></tr></thead>
                    <tbody>
                        <tr><td><strong>起源</strong></td><td>ローマ法、ナポレオン法典</td><td>イギリス判例法</td></tr>
                        <tr><td><strong>採用国</strong></td><td>日独仏伊、中南米、東アジア</td><td>米英豪加、香港、シンガポール</td></tr>
                        <tr><td><strong>特徴</strong></td><td>成文法（法典）中心</td><td>判例法中心</td></tr>
                        <tr><td><strong>裁判</strong></td><td>法律の条文を適用</td><td>過去の判例を参照</td></tr>
                        <tr><td><strong>契約書</strong></td><td>比較的短い（法律で補完）</td><td>極めて詳細（想定を全て記載）</td></tr>
                        <tr><td><strong>金融への影響</strong></td><td>規制が体系的</td><td>ISDA契約などが発達</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>🌐 国際人権法</h2>
                <table class="styled-table">
                    <thead><tr><th>法規</th><th>年</th><th>内容</th></tr></thead>
                    <tbody>
                        <tr><td><strong>世界人権宣言</strong></td><td>1948</td><td>全30条、人類初の普遍的人権文書</td></tr>
                        <tr><td><strong>国際人権規約</strong></td><td>1966</td><td>自由権規約（A規約）と社会権規約（B規約）</td></tr>
                        <tr><td><strong>ビジネスと人権に関する指導原則</strong></td><td>2011</td><td>企業の人権尊重責任を明確化</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 金融と人権</div>
                    <p>・<strong>ESGのS</strong>（Social）：人権デューデリジェンスの義務化が進行</p>
                    <p>・<strong>サプライチェーン</strong>：取引先の人権侵害リスクを管理</p>
                    <p>・<strong>投融資審査</strong>：人権リスクの高い企業への融資を回避</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>🔒 知的財産と個人情報保護</h2>
                <table class="styled-table">
                    <thead><tr><th>種類</th><th>保護対象</th><th>期間</th><th>金融での例</th></tr></thead>
                    <tbody>
                        <tr><td><strong>特許</strong></td><td>発明</td><td>出願から20年</td><td>金融アルゴリズムの特許</td></tr>
                        <tr><td><strong>著作権</strong></td><td>創作物</td><td>著者死後70年</td><td>ソフトウェアのコード</td></tr>
                        <tr><td><strong>商標</strong></td><td>ブランド・ロゴ</td><td>登録から10年（更新可）</td><td>銀行のブランド保護</td></tr>
                        <tr><td><strong>営業秘密</strong></td><td>ノウハウ</td><td>秘密管理が条件</td><td>トレーディング戦略</td></tr>
                    </tbody>
                </table>
                <table class="styled-table">
                    <thead><tr><th>法規</th><th>地域</th><th>特徴</th></tr></thead>
                    <tbody>
                        <tr><td><strong>GDPR</strong></td><td>EU</td><td>世界最強の個人情報保護、域外適用</td></tr>
                        <tr><td><strong>個人情報保護法</strong></td><td>日本</td><td>2022年改正で罰則強化</td></tr>
                        <tr><td><strong>CCPA/CPRA</strong></td><td>カリフォルニア</td><td>消費者の権利重視</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 IT・金融と法のインターフェース</div>
                    <p>・<strong>ISDA Master Agreement</strong>：デリバティブ取引の国際標準契約</p>
                    <p>・<strong>GDPR対応</strong>は金融システム設計の必須要件</p>
                    <p>・<strong>API利用規約</strong>の法的理解は開発者にも必要</p>
                </div>
            </div>
            <div id="day61-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day61-quiz', 'day61-quiz', [
            { question: '英米法（コモンロー）の最大の特徴はどれですか？', options: ['成文法典が中心', '判例法が中心', '宗教法に基づく', '大統領令で運用'], correct: 1, explanation: '英米法は成文法典よりも過去の判例の蓄積を重視し、裁判所の判断が法源となります。' },
            { question: 'GDPRの最大の特徴はどれですか？', options: ['罰則がない', '域外適用がある', '企業にのみ適用', 'EU内でのみ有効'], correct: 1, explanation: 'EU域外の企業であってもEU市民のデータを扱う場合はGDPRが適用される域外適用が特徴です。' },
            { question: '「ビジネスと人権に関する指導原則」はいつ策定されましたか？', options: ['1948年', '1966年', '2011年', '2020年'], correct: 2, explanation: '2011年に国連人権理事会で承認されたラギー原則（ビジネスと人権に関する指導原則）です。' },
            { question: 'ISDA Master Agreementは何の標準契約ですか？', options: ['株式取引', 'デリバティブ取引', '不動産取引', '雇用契約'], correct: 1, explanation: 'ISDAマスター契約はOTCデリバティブ取引の国際標準契約で、世界中の金融機関が使用しています。' },
            { question: '営業秘密の保護に必要な条件はどれですか？', options: ['特許出願', '秘密として管理すること', '政府への登録', '公開すること'], correct: 1, explanation: '営業秘密は特許と異なり、秘密として管理していることが保護の条件です（秘密管理性）。' }
        ]);
    }
};
