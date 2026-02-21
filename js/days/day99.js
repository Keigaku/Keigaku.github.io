// ===========================
// Day 99: グローバル金融規制対応ケーススタディ
// ===========================
window.Day99 = {
    render(container, dayNum) {
        const dayInfo = Navigation.days[dayNum - 1];
        const sections = `
            <div class="content-section animate-in">
                <h2>🌍 ケース概要：バーゼルIII対応プロジェクト</h2>
                <div class="info-box">
                    <div class="info-box-title">📋 プロジェクト概要</div>
                    <p><strong>クライアント</strong>：メガバンクCグループ（国内外に拠点展開）</p>
                    <p><strong>背景</strong>：バーゼルIII最終化への対応（2024年3月から段階適用）</p>
                    <p><strong>スコープ</strong>：リスク計算エンジンの刷新、レポーティング自動化</p>
                    <p><strong>期間</strong>：3年</p>
                    <p><strong>関連部門</strong>：リスク管理、経理、IT、コンプライアンス</p>
                </div>
            </div>
            <div class="content-section animate-in stagger-1">
                <h2>📊 主な対応領域</h2>
                <table class="styled-table">
                    <thead><tr><th>規制要件</th><th>対応内容</th><th>システム影響</th></tr></thead>
                    <tbody>
                        <tr><td><strong>標準的手法の見直し</strong></td><td>信用リスク計算の改定</td><td>リスクエンジン再構築</td></tr>
                        <tr><td><strong>アウトプットフロア</strong></td><td>内部モデルのリスク量下限設定</td><td>二重計算ロジック追加</td></tr>
                        <tr><td><strong>CVAリスク</strong></td><td>デリバティブの信用評価調整</td><td>時価評価システム改修</td></tr>
                        <tr><td><strong>レバレッジ比率</strong></td><td>オフバランス項目の計上方法変更</td><td>会計連携の修正</td></tr>
                        <tr><td><strong>ストレステスト</strong></td><td>規制シナリオへの対応</td><td>シミュレーションシステム</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="content-section animate-in stagger-2">
                <h2>⚠️ プロジェクトの課題</h2>
                <table class="styled-table">
                    <thead><tr><th>課題</th><th>内容</th><th>対応</th></tr></thead>
                    <tbody>
                        <tr><td><strong>規制解釈の曖昧さ</strong></td><td>詳細ルールが確定しない中での開発</td><td>柔軟な設計（パラメータ化）</td></tr>
                        <tr><td><strong>グローバル展開</strong></td><td>各国の現地規制との両立</td><td>共通基盤+ローカルカスタマイズ</td></tr>
                        <tr><td><strong>データ品質</strong></td><td>レガシーシステムのデータ不整合</td><td>データクレンジング、マスターデータ管理</td></tr>
                        <tr><td><strong>部門横断</strong></td><td>リスク・経理・ITの言語の違い</td><td>共通用語集、合同ワークショップ</td></tr>
                    </tbody>
                </table>
                <div class="info-box important">
                    <div class="info-box-title">🎯 規制対応プロジェクトの教訓</div>
                    <p>・<strong>規制は「変わるもの」</strong>：パラメータ化で柔軟に対応できる設計</p>
                    <p>・<strong>ビジネス×IT</strong>の両方がわかる人材が成功の鍵</p>
                    <p>・<strong>データガバナンス</strong>の重要性（一度整えると全規制対応に活きる）</p>
                    <p>・<strong>規制対応はコストセンターではない</strong>：競争力の源泉に変える</p>
                </div>
            </div>
            <div id="day99-quiz"></div>
        `;
        Navigation.renderDayTemplate(container, dayNum, dayInfo, sections);
        QuizEngine.render('day99-quiz', 'day99-quiz', [
            { question: 'バーゼルIIIの主な目的はどれですか？', options: ['銀行の利益増大', '銀行の健全性・安定性の確保', 'IT投資の促進', '顧客サービス向上'], correct: 1, explanation: 'バーゼルIIIは金融危機の再発防止を目的とし、銀行に十分な資本や流動性を求める国際規制です。' },
            { question: 'アウトプットフロアの目的はどれですか？', options: ['利益の下限設定', '内部モデルによるリスク量の過小評価を防ぐ', '人員の下限設定', '金利の下限'], correct: 1, explanation: 'アウトプットフロアは内部モデルで計算したリスク量が標準的手法の一定割合を下回らないよう下限を設けるものです。' },
            { question: '規制対応システムでパラメータ化が重要な理由はどれですか？', options: ['計算が速い', '規制変更時に柔軟に対応できる', 'コストが安い', '見た目がよい'], correct: 1, explanation: '規制は継続的に変更されるため、ハードコーディングではなくパラメータ化することで迅速に対応できます。' },
            { question: 'グローバル金融機関の規制対応で「共通基盤+ローカルカスタマイズ」を採用する理由はどれですか？', options: ['安いから', '各国の規制差異に効率的に対応するため', 'ローカルが不要だから', 'グローバルだけで十分'], correct: 1, explanation: 'バーゼル規制は国際基準ですが、各国で実装が異なるため、共通基盤で効率化しつつローカル要件に対応します。' },
            { question: 'CVAリスクとは何ですか？', options: ['市場リスク', 'デリバティブ取引相手の信用リスクに伴う時価変動', '金利リスク', '為替リスク'], correct: 1, explanation: 'CVA（Credit Valuation Adjustment）は取引相手方の信用リスクによるデリバティブの時価調整額のリスクです。' }
        ]);
    }
};
