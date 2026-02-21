// ===========================
// Day 82: 財務モデリング
// ===========================
window.Day82 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>📐 バリュエーション手法</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>アプローチ</th><th>適用場面</th><th>メリット</th></tr></thead>
                    <tbody>
                        <tr><td><strong>DCF法</strong></td><td>将来FCFの現在価値合計</td><td>安定した事業の評価</td><td>理論的に最も正確</td></tr>
                        <tr><td><strong>類似企業比較法</strong></td><td>同業他社のPER/EV/EBITDAで評価</td><td>上場企業の参考値</td><td>市場の評価を反映</td></tr>
                        <tr><td><strong>類似取引比較法</strong></td><td>過去のM&A事例の倍率</td><td>M&A案件</td><td>実績ベース</td></tr>
                        <tr><td><strong>LBOモデル</strong></td><td>借入金でのレバレッジ買収評価</td><td>PE投資の評価</td><td>リターンの試算</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>💰 DCF法の構成要素</h2>
                <table class="styled-table">
                    <thead><tr><th>要素</th><th>内容</th><th>算出方法</th></tr></thead>
                    <tbody>
                        <tr><td><strong>FCF（フリーキャッシュフロー）</strong></td><td>事業が自由に使える資金</td><td>営業利益×(1-税率)+減価償却−設備投資−運転資本増加</td></tr>
                        <tr><td><strong>WACC</strong></td><td>加重平均資本コスト（割引率）</td><td>株主資本コスト×E/(D+E) + 負債コスト×(1-税率)×D/(D+E)</td></tr>
                        <tr><td><strong>ターミナルバリュー</strong></td><td>予測期間後の残存価値</td><td>最終年FCF×(1+g)/(WACC-g)</td></tr>
                        <tr><td><strong>企業価値（EV）</strong></td><td>事業全体の現在価値</td><td>Σ FCF/(1+WACC)^t + TV/(1+WACC)^n</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>📊 感度分析とシナリオ分析</h2>
                <table class="styled-table">
                    <thead><tr><th>手法</th><th>内容</th><th>用途</th></tr></thead>
                    <tbody>
                        <tr><td><strong>感度分析</strong></td><td>1つのパラメータを変化させて影響を分析</td><td>WACC / 成長率による価値変動</td></tr>
                        <tr><td><strong>シナリオ分析</strong></td><td>複数パラメータを同時変更</td><td>ベース/ブル/ベアの3シナリオ</td></tr>
                        <tr><td><strong>モンテカルロ</strong></td><td>乱数シミュレーション</td><td>価値の確率分布を算出</td></tr>
                    </tbody>
                </table>
                <div class="info-box tip">
                    <div class="info-box-title">💡 財務モデリングのスキル</div>
                    <p>・<strong>Excel力</strong>：キーボードショートカット、関数（INDEX/MATCH, SUMPRODUCT）</p>
                    <p>・<strong>構造化</strong>：入力・計算・出力を明確に分離</p>
                    <p>・<strong>エラーチェック</strong>：BS残高一致、CF計算整合性</p>
                    <p>・<strong>Python移行</strong>：大規模モデルはPython/Jupyterで自動化</p>
                </div>
            </div>
            <div id="day82-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day82-quiz', 'day82-quiz', [
            { question: 'DCF法で使用する割引率はどれですか？', options: ['ROE', 'ROA', 'WACC', 'PER'], correct: 2, explanation: 'DCF法ではWACC（加重平均資本コスト）を割引率として使用し、将来のFCFを現在価値に割り引きます。' },
            { question: 'FCF（フリーキャッシュフロー）とは何ですか？', options: ['売上全体', '事業が自由に使える資金', '借入金', '配当金'], correct: 1, explanation: 'FCFは事業活動から生まれるキャッシュのうち、事業維持に必要な投資を差し引いた自由に使える資金です。' },
            { question: 'ターミナルバリューが企業価値に占める割合は通常どれくらいですか？', options: ['10-20%', '30-40%', '60-80%', '100%'], correct: 2, explanation: 'ターミナルバリューは予測期間後の残存価値で、通常DCF企業価値全体の60-80%を占めます。' },
            { question: '類似企業比較法で使われる代表的な指標はどれですか？', options: ['ROE', 'EV/EBITDA', 'WACC', 'FCF'], correct: 1, explanation: 'EV/EBITDA倍率は業種間の比較に適した指標で、類似企業比較法の代表的な倍率です。' },
            { question: '感度分析の目的はどれですか？', options: ['正確な値を求める', 'パラメータ変化による結果への影響を把握', 'データの可視化', 'データの収集'], correct: 1, explanation: '感度分析は主要パラメータを変化させたときに結果がどう変わるかを分析し、リスク要因を特定します。' }
        ]);
    }
};
