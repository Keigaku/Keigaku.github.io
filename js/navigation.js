// ===========================
// Navigation Manager
// ===========================
const Navigation = {
    days: [
        { num: 1, title: '金融業界と金融商品の基礎', icon: '🏦', desc: '金融業界の全体像と主要な金融商品について学びます', tags: ['金融基礎', '市場構造'] },
        { num: 2, title: '金融数学の基礎', icon: '📐', desc: '確率・統計・線形代数など金融工学に必要な数学基礎', tags: ['確率論', '統計', '線形代数'] },
        { num: 3, title: 'デリバティブ入門', icon: '📊', desc: '先物・オプション・スワップの基本構造と仕組み', tags: ['先物', 'オプション', 'スワップ'] },
        { num: 4, title: 'オプション価格理論', icon: '⚡', desc: 'ブラック・ショールズモデルとオプション価格の決定', tags: ['BS式', 'グリークス', '価格モデル'] },
        { num: 5, title: '時価評価の実務', icon: '💰', desc: '金融商品の時価評価手法とDCF法の実践', tags: ['DCF', '割引率', 'イールドカーブ'] },
        { num: 6, title: '市場リスク管理', icon: '🛡️', desc: 'VaR・感応度分析によるリスク計測手法', tags: ['VaR', '感応度', 'ストレステスト'] },
        { num: 7, title: 'XVAの基礎', icon: '🔬', desc: 'CVA/DVA/FVAなどの評価調整の概念と実務', tags: ['CVA', 'DVA', 'FVA'] },
        { num: 8, title: 'プログラミングとクオンツ開発', icon: '💻', desc: 'クオンツシステム開発に必要なプログラミングの基礎', tags: ['Python', 'C#', '数値計算'] },
        { num: 9, title: 'システム設計とアーキテクチャ', icon: '🏗️', desc: '大規模金融システムの設計パターンと開発プロセス', tags: ['設計', 'アーキテクチャ', 'テスト'] },
        { num: 10, title: '総合演習・復習テスト', icon: '🎯', desc: '10日間の学習内容を総合的に確認する演習', tags: ['総合テスト', '復習'] },
        // --- ボーナス研修 ---
        { num: 11, title: '入社式でのスピーチ', icon: '🎤', desc: '好印象を与えるスピーチの構成法と実践テンプレート', tags: ['スピーチ', '自己紹介', 'プレゼン'], bonus: true },
        { num: 12, title: '評価される社員の仕事の進め方', icon: '⭐', desc: '報連相・タスク管理・主体性など高評価を得る働き方', tags: ['報連相', 'PDCA', 'タスク管理'], bonus: true },
        { num: 13, title: '出来る社員のコミュニケーション', icon: '💬', desc: 'アクティブリスニング・質問力・ビジネスメール術', tags: ['傾聴', '質問力', 'メール'], bonus: true },
        { num: 14, title: '仕事とプライベートの充実', icon: '⚖️', desc: '時間管理・GTD・7つの習慣など人生を豊かにするフレームワーク', tags: ['時間管理', 'GTD', 'ワークライフ'], bonus: true },
        { num: 15, title: '金融業界の常識', icon: '🏛️', desc: '知らないと恥ずかしい業界用語・規制・市場慣行', tags: ['規制', '用語', 'コンプライアンス'], bonus: true },
        { num: 16, title: 'NSSOLの常識', icon: '🏢', desc: '日鉄ソリューションズの事業・文化・プロジェクト体制', tags: ['NSSOL', '企業文化', '組織'], bonus: true },
        { num: 17, title: '赤い銀行について知っておくべきこと', icon: '🔴', desc: 'メインクライアントの組織構造・業務特性・開発の留意点', tags: ['クライアント', '銀行業務', 'システム'], bonus: true },
        // --- 応用金融工学 ---
        { num: 18, title: '金利モデリングとイールドカーブ構築', icon: '📈', desc: 'Short Rateモデル・HWモデル・カーブ補間手法', tags: ['金利モデル', 'HW', 'カーブ構築'], section: 'advanced' },
        { num: 19, title: 'エキゾチックデリバティブとモンテカルロ法', icon: '🎲', desc: '経路依存型商品・分散低減法・擬似乱数の実践', tags: ['モンテカルロ', 'エキゾチック', '分散低減'], section: 'advanced' },
        { num: 20, title: 'XVA実践と大規模計算', icon: '⚙️', desc: 'CVA/FVA計算実装・GPU活用・AAD感応度計算', tags: ['XVA実装', 'GPU', 'AAD'], section: 'advanced' },
        { num: 21, title: '機械学習 × 金融工学', icon: '🤖', desc: 'ニューラルネット価格近似・異常検知・特徴量設計', tags: ['ML', 'NN', '異常検知'], section: 'advanced' },
        // --- PM研修 ---
        { num: 22, title: 'PM基礎 — スコープ・スケジュール・コスト', icon: '📋', desc: 'WBS・EVM・クリティカルパス・PMBOK要素', tags: ['WBS', 'EVM', 'PMBOK'], section: 'pm' },
        { num: 23, title: 'リスク管理とステークホルダーマネジメント', icon: '🎯', desc: 'リスク登録簿・影響×確率・ステークホルダーマップ', tags: ['リスク管理', 'ステークホルダー', '変更管理'], section: 'pm' },
        { num: 24, title: '金融SIerでの開発手法', icon: '🔧', desc: 'ウォーターフォール×アジャイルのハイブリッド・品質管理', tags: ['WF', 'アジャイル', '品質'], section: 'pm' },
        // --- リーダーシップ ---
        { num: 25, title: 'リーダーシップ理論と実践', icon: '👑', desc: 'SL理論・サーバントリーダーシップ・心理的安全性', tags: ['SL理論', 'サーバント', '心理的安全性'], section: 'leadership' },
        { num: 26, title: '影響力・交渉術・ファシリテーション', icon: '🤝', desc: '説得の6原則・BATNA・会議ファシリテーション技法', tags: ['交渉', '影響力', 'ファシリ'], section: 'leadership' },
        { num: 27, title: 'チームビルディングと人材育成', icon: '👥', desc: 'タックマンモデル・1on1・フィードバック・メンタリング', tags: ['チーム', '1on1', '育成'], section: 'leadership' },
        // --- キャリア発展 ---
        { num: 28, title: 'クライアントリレーションシップ', icon: '💼', desc: '信頼構築・提案力・長期関係マネジメントの技法', tags: ['信頼構築', '提案', '関係管理'], section: 'career' },
        { num: 29, title: 'キャリアデザインと自己成長戦略', icon: '🚀', desc: 'キャリアアンカー・T型/Π型人材・学習戦略と自己投資', tags: ['キャリア', 'T型人材', '自己投資'], section: 'career' },
        // --- 経営幹部候補研修 ---
        { num: 30, title: '経営戦略フレームワーク', icon: '♟️', desc: 'SWOT・ポーター5フォース・ブルーオーシャン・VUCA時代の戦略思考', tags: ['SWOT', '5フォース', '戦略'], section: 'executive_prep' },
        { num: 31, title: '財務・会計リテラシー', icon: '📊', desc: 'P/L・B/S・CF読解・ROE/ROA・経営指標ヘルスチェック', tags: ['財務諸表', 'ROE', '経営指標'], section: 'executive_prep' },
        { num: 32, title: '組織設計と組織文化', icon: '🏗️', desc: '組織構造パターン・文化変革・ダイバーシティ&インクルージョン', tags: ['組織設計', '文化', 'D&I'], section: 'executive_prep' },
        { num: 33, title: '事業開発とイノベーション', icon: '💡', desc: '新規事業プロセス・リーンスタートアップ・オープンイノベーション', tags: ['新規事業', 'リーン', 'イノベーション'], section: 'executive_prep' },
        // --- 経営層研修 ---
        { num: 34, title: '金融DXとテクノロジー戦略', icon: '🌐', desc: 'DXロードマップ・AI/クラウド戦略・レガシーモダナイゼーション', tags: ['DX', 'AI戦略', 'クラウド'], section: 'executive' },
        { num: 35, title: 'コーポレートガバナンスとコンプライアンス', icon: '⚖️', desc: '取締役会運営・内部統制・ESG経営・金融規制対応', tags: ['ガバナンス', 'ESG', '内部統制'], section: 'executive' },
        { num: 36, title: '経営意思決定フレームワーク', icon: '🧭', desc: 'データドリブン経営・意思決定バイアス・シナリオプランニング', tags: ['意思決定', 'バイアス', 'シナリオ'], section: 'executive' },
        { num: 37, title: 'ビジョン策定と変革マネジメント', icon: '🔮', desc: 'ビジョナリー経営・コッターの8段階・レジリエンス経営', tags: ['ビジョン', '変革', 'レジリエンス'], section: 'executive' },
        // --- TOEIC 950点突破 ---
        { num: 38, title: 'TOEIC 950点 戦略概論', icon: '🎯', desc: 'スコア構造分析・950点に必要な正答率・最短学習ロードマップ', tags: ['戦略', '学習計画', 'スコア分析'], section: 'toeic' },
        { num: 39, title: 'Listening Part 完全攻略', icon: '🎧', desc: 'Part 1-4 各パート戦略・シャドーイング・ディクテーション', tags: ['Listening', 'シャドーイング', 'Part1-4'], section: 'toeic' },
        { num: 40, title: 'Reading Part 完全攻略', icon: '📖', desc: 'Part 5-7 文法・語彙・速読技術・時間配分', tags: ['Reading', '文法', '速読'], section: 'toeic' },
        { num: 41, title: '金融ビジネス英語マスター', icon: '💼', desc: 'TOEIC頻出金融語彙・ビジネス表現・メール・Web会議', tags: ['金融英語', 'ビジネス', '語彙'], section: 'toeic' },
        { num: 42, title: '本番戦略と最終仕上げ', icon: '🚀', desc: '時間配分・メンタル管理・直前対策・スコアアップ最終戦略', tags: ['本番', '時間配分', '最終仕上げ'], section: 'toeic' },
        // --- 技術スキル強化 ---
        { num: 43, title: 'サイバーセキュリティと金融犯罪対策', icon: '🔒', desc: '脅威モデル・ゼロトラスト・インシデントレスポンス・不正検知', tags: ['セキュリティ', 'ゼロトラスト', '不正検知'], section: 'tech_enhance' },
        { num: 44, title: 'データベース設計とSQL実践', icon: '🗄️', desc: '正規化・インデックス・パフォーマンスチューニング・金融DB設計', tags: ['DB設計', 'SQL', 'チューニング'], section: 'tech_enhance' },
        { num: 45, title: 'クラウドアーキテクチャ入門', icon: '☁️', desc: 'AWS/Azure基礎・IaC・金融のクラウド活用・コスト最適化', tags: ['クラウド', 'AWS', 'IaC'], section: 'tech_enhance' },
        // --- プロフェッショナルスキル ---
        { num: 46, title: 'プレゼンテーション・資料作成術', icon: '📊', desc: 'スライドデザイン・ストーリーテリング・データ可視化・話し方', tags: ['プレゼン', '資料作成', '可視化'], section: 'pro_skills' },
        { num: 47, title: 'メンタルヘルスとセルフマネジメント', icon: '🧘', desc: 'ストレス管理・レジリエンス・マインドフルネス・ワークライフバランス', tags: ['メンタルヘルス', 'ストレス', '自己管理'], section: 'pro_skills' },
        { num: 48, title: '金融業界の最新トレンド', icon: '📡', desc: 'FinTech・CBDC・DeFi・RegTech・生成AIの金融応用', tags: ['FinTech', 'DeFi', 'CBDC'], section: 'pro_skills' },
        { num: 49, title: 'ドキュメンテーション・ナレッジ管理', icon: '📝', desc: '技術文書の書き方・設計書・Wiki運用・ナレッジ共有', tags: ['文書作成', '設計書', 'ナレッジ'], section: 'pro_skills' },
        { num: 50, title: '総合振り返りとキャリアアクションプラン', icon: '🏁', desc: '50日間の総括・スキルマップ・個人開発計画・次のステップ', tags: ['振り返り', 'スキルマップ', 'アクションプラン'], section: 'pro_skills' },
        // --- 世界の常識 ---
        { num: 51, title: '世界経済史 — 産業革命から現代', icon: '🏭', desc: '産業革命・帝国主義・大恐慌・ブレトンウッズ・グローバル化', tags: ['経済史', '産業革命', 'グローバル化'], section: 'world_knowledge' },
        { num: 52, title: '金融危機の歴史', icon: '📉', desc: 'チューリップバブル・南海泡沫・大恐慌・アジア通貨危機・リーマン', tags: ['バブル', '金融危機', '恐慌'], section: 'world_knowledge' },
        { num: 53, title: '地政学入門', icon: '🗺️', desc: '国際秩序・大国間競争・エネルギー安全保障・経済安保', tags: ['地政学', '安全保障', '国際秩序'], section: 'world_knowledge' },
        { num: 54, title: '主要国の政治・経済体制', icon: '🏛️', desc: '米中欧日の政治制度・経済モデル・選挙制度・中央銀行', tags: ['政治体制', '経済モデル', '中央銀行'], section: 'world_knowledge' },
        { num: 55, title: '国際機関と多国間枠組み', icon: '🤝', desc: '国連・IMF・世界銀行・WTO・G7/G20・ASEAN', tags: ['国際機関', 'IMF', 'G20'], section: 'world_knowledge' },
        { num: 56, title: '日本経済史 — 戦後復興から令和', icon: '🇯🇵', desc: '高度成長・バブル経済・失われた30年・アベノミクス', tags: ['日本経済', 'バブル', 'アベノミクス'], section: 'world_knowledge' },
        { num: 57, title: '宗教と文化の基礎知識', icon: '🕌', desc: 'キリスト教・イスラム教・仏教・ヒンドゥー教・儒教・文化圏', tags: ['宗教', '文化', '多様性'], section: 'world_knowledge' },
        { num: 58, title: '哲学とクリティカルシンキング', icon: '🤔', desc: 'ソクラテス・デカルト・功利主義・論理的思考・科学的方法論', tags: ['哲学', '論理思考', '科学方法論'], section: 'world_knowledge' },
        { num: 59, title: '科学リテラシー', icon: '🔬', desc: 'エネルギー問題・気候変動・宇宙開発・生命科学・AI倫理', tags: ['科学', 'エネルギー', '気候変動'], section: 'world_knowledge' },
        { num: 60, title: '統計リテラシーとメディアリテラシー', icon: '📊', desc: 'データの読み方・フェイクニュース・バイアス・情報源の評価', tags: ['統計', 'メディア', 'ファクトチェック'], section: 'world_knowledge' },
        // --- リベラルアーツ ---
        { num: 61, title: '世界の法制度と人権', icon: '⚖️', desc: '大陸法・英米法・国際人権法・知的財産・個人情報保護', tags: ['法制度', '人権', '知的財産'], section: 'liberal_arts' },
        { num: 62, title: '芸術・建築・デザインの潮流', icon: '🎨', desc: 'ルネサンス・印象派・モダニズム・バウハウス・現代アート', tags: ['芸術', '建築', 'デザイン'], section: 'liberal_arts' },
        { num: 63, title: 'テクノロジー史', icon: '⚙️', desc: '印刷術・蒸気機関・電気・コンピュータ・インターネット・AI', tags: ['技術史', 'コンピュータ', 'AI'], section: 'liberal_arts' },
        { num: 64, title: '食文化と国際ビジネスマナー', icon: '🍽️', desc: '各国のビジネスマナー・食のタブー・プロトコル・異文化コミュニケーション', tags: ['マナー', '食文化', '異文化'], section: 'liberal_arts' },
        { num: 65, title: '環境問題とSDGs', icon: '🌱', desc: 'パリ協定・SDGs 17目標・ESG投資・カーボンニュートラル', tags: ['SDGs', 'ESG', '環境'], section: 'liberal_arts' },
        { num: 66, title: '人口動態と社会変化', icon: '👥', desc: '少子高齢化・移民・都市化・Z世代・ジェンダー平等', tags: ['人口', '高齢化', '多様性'], section: 'liberal_arts' },
        { num: 67, title: '戦争と平和 — 20世紀の教訓', icon: '🕊️', desc: 'WWI・WWII・冷戦・核問題・国連平和維持活動', tags: ['戦争', '冷戦', '平和'], section: 'liberal_arts' },
        { num: 68, title: '行動経済学と認知バイアス', icon: '🧠', desc: 'プロスペクト理論・アンカリング・ナッジ・システム1/2', tags: ['行動経済学', 'バイアス', 'ナッジ'], section: 'liberal_arts' },
        { num: 69, title: '名著・名言から学ぶ知恵', icon: '📚', desc: '孫子・マキャベリ・ドラッカー・7つの習慣・サピエンス全史', tags: ['名著', 'リーダーシップ', '知恵'], section: 'liberal_arts' },
        { num: 70, title: '教養人としての総合力', icon: '🎓', desc: '教養の価値・T型人材・学び続ける力・知的好奇心', tags: ['教養', 'T型人材', '生涯学習'], section: 'liberal_arts' },
        { num: 71, title: 'Pythonプログラミング基礎', icon: '🐍', desc: '変数・制御構文・関数・クラス・ライブラリ・金融スクリプト', tags: ['Python', 'プログラミング', '基礎'], section: 'data_science' },
        { num: 72, title: 'データ分析実践', icon: '📊', desc: 'Pandas・NumPy・データクレンジング・集計・時系列分析', tags: ['Pandas', 'NumPy', 'データ分析'], section: 'data_science' },
        { num: 73, title: '機械学習入門', icon: '🤖', desc: '教師あり/なし学習・回帰・分類・クラスタリング・決定木', tags: ['機械学習', 'AI', '分類'], section: 'data_science' },
        { num: 74, title: 'データ可視化の技法', icon: '📈', desc: 'Matplotlib・Seaborn・ダッシュボード・BI・ストーリーテリング', tags: ['可視化', 'BI', 'グラフ'], section: 'data_science' },
        { num: 75, title: '金融AI・機械学習活用', icon: '💹', desc: '不正検知・信用スコアリング・アルゴトレード・NLP・説明可能AI', tags: ['金融AI', 'XAI', 'NLP'], section: 'data_science' },
        { num: 76, title: 'システムアーキテクチャパターン', icon: '🏗️', desc: 'モノリス・マイクロサービス・CQRS・イベント駆動・DDD', tags: ['アーキテクチャ', 'マイクロサービス', 'DDD'], section: 'system_design' },
        { num: 77, title: 'API設計とマイクロサービス', icon: '🔌', desc: 'REST・GraphQL・gRPC・API Gateway・認証・バージョニング', tags: ['API', 'REST', 'GraphQL'], section: 'system_design' },
        { num: 78, title: 'DevOpsとCI/CD', icon: '🔄', desc: 'Git・Jenkins・Docker・Kubernetes・IaC・監視', tags: ['DevOps', 'CI/CD', 'Docker'], section: 'system_design' },
        { num: 79, title: 'テスト戦略と品質保証', icon: '🧪', desc: '単体・結合・E2E・TDD・セキュリティ・パフォーマンステスト', tags: ['テスト', 'TDD', '品質'], section: 'system_design' },
        { num: 80, title: 'パフォーマンスとスケーラビリティ', icon: '⚡', desc: 'キャッシュ・CDN・DB最適化・負荷分散・レイテンシ削減', tags: ['パフォーマンス', 'スケール', 'キャッシュ'], section: 'system_design' },
        { num: 81, title: '会計の基礎', icon: '📒', desc: 'BS・PL・CF・仕訳・IFRS・管理会計・原価計算', tags: ['会計', 'BS', 'PL'], section: 'financial_practice' },
        { num: 82, title: '財務モデリング', icon: '📐', desc: 'DCF・比較法・LBO・シナリオ分析・感度分析・Excel技術', tags: ['財務モデル', 'DCF', 'バリュエーション'], section: 'financial_practice' },
        { num: 83, title: '保険・年金の仕組み', icon: '🛡️', desc: '生保・損保・年金制度・アクチュアリー・インシュアテック', tags: ['保険', '年金', 'アクチュアリー'], section: 'financial_practice' },
        { num: 84, title: '不動産金融', icon: '🏠', desc: 'REIT・モーゲージ・不動産証券化・J-REIT・収益物件分析', tags: ['不動産', 'REIT', '証券化'], section: 'financial_practice' },
        { num: 85, title: '個人の資産運用', icon: '💰', desc: 'NISA・iDeCo・ポートフォリオ理論実践・税金・ライフプラン', tags: ['資産運用', 'NISA', 'iDeCo'], section: 'financial_practice' },
        { num: 86, title: '交渉術', icon: '🤝', desc: 'BATNA・ZOPA・ハーバード流交渉・Win-Win・心理テクニック', tags: ['交渉', 'BATNA', 'Win-Win'], section: 'business_skills' },
        { num: 87, title: 'ビジネスライティング', icon: '✍️', desc: 'メール・議事録・提案書・報告書・ロジカルライティング', tags: ['文書', 'メール', 'ライティング'], section: 'business_skills' },
        { num: 88, title: '顧客関係管理（CRM）', icon: '👔', desc: '顧客分析・LTV・セグメンテーション・提案力・信頼構築', tags: ['CRM', '顧客', '営業'], section: 'business_skills' },
        { num: 89, title: '問題解決フレームワーク', icon: '🧩', desc: 'MECE・ロジックツリー・仮説思考・ゼロベース思考・5Why', tags: ['問題解決', 'MECE', '仮説思考'], section: 'business_skills' },
        { num: 90, title: 'イノベーションと起業家精神', icon: '🚀', desc: 'リーンスタートアップ・MVP・VC・エコシステム・社内起業', tags: ['イノベーション', 'スタートアップ', 'VC'], section: 'business_skills' },
        { num: 91, title: 'ブロックチェーン実践', icon: '⛓️', desc: 'コンセンサス・スマートコントラクト・DeFi・NFT・CBDC・規制', tags: ['ブロックチェーン', 'DeFi', 'スマートコントラクト'], section: 'advanced_tech' },
        { num: 92, title: 'Linux・サーバ管理基礎', icon: '🐧', desc: 'コマンドライン・ファイルシステム・プロセス・シェルスクリプト', tags: ['Linux', 'CLI', 'サーバ'], section: 'advanced_tech' },
        { num: 93, title: 'ネットワーク・インフラ基礎', icon: '🌐', desc: 'TCP/IP・DNS・ファイアウォール・VPN・ゼロトラスト', tags: ['ネットワーク', 'TCP/IP', 'セキュリティ'], section: 'advanced_tech' },
        { num: 94, title: 'アジャイル・スクラム実践', icon: '🔁', desc: 'スプリント・デイリー・レトロ・バックログ・ベロシティ・SAFe', tags: ['アジャイル', 'スクラム', 'SAFe'], section: 'advanced_tech' },
        { num: 95, title: 'RPA・ローコード開発', icon: '🤖', desc: 'UiPath・Power Automate・Power Apps・市民開発者・自動化戦略', tags: ['RPA', 'ローコード', '自動化'], section: 'advanced_tech' },
        { num: 96, title: 'ケーススタディ：メガバンクシステム更改', icon: '🏦', desc: '勘定系刷新・レガシー移行・リスク・PM・ステークホルダー管理', tags: ['ケーススタディ', 'メガバンク', '移行'], section: 'capstone' },
        { num: 97, title: 'ケーススタディ：FinTechスタートアップ', icon: '💡', desc: '事業計画・MVP・資金調達・規制対応・スケール戦略', tags: ['FinTech', 'スタートアップ', 'MVP'], section: 'capstone' },
        { num: 98, title: 'ケーススタディ：国際規制対応PJ', icon: '🌏', desc: 'Basel III・GDPR・AML・クロスボーダー・マルチベンダー管理', tags: ['規制', 'Basel', 'クロスボーダー'], section: 'capstone' },
        { num: 99, title: '模擬面接とキャリア準備', icon: '🎤', desc: '自己PR・STAR法・ケース面接・技術面接・年収交渉', tags: ['面接', 'キャリア', '自己PR'], section: 'capstone' },
        { num: 100, title: '100日間の総括と卒業', icon: '🎉', desc: '全カリキュラム振り返り・スキルマップ・継続学習計画・修了', tags: ['総括', '卒業', '修了'], section: 'capstone' },
        // --- 出来る社員の1日 ---
        { num: 101, title: '09:00 朝のルーティン・情報収集', icon: '🌅', desc: 'OODAループ・GTD・4象限マトリクスで朝の立ち上げを最適化', tags: ['OODA', 'GTD', '4象限'], section: 'daily_routine' },
        { num: 102, title: '10:00 チームMTG・進捗共有', icon: '🗣️', desc: 'デイリースクラム・報連相・PREP法で効果的な情報共有', tags: ['スクラム', '報連相', 'PREP'], section: 'daily_routine' },
        { num: 103, title: '11:00 要件定義・設計レビュー', icon: '📐', desc: 'MECE・ロジックツリー・UMLで論理的な設計を実践', tags: ['MECE', 'ロジックツリー', 'UML'], section: 'daily_routine' },
        { num: 104, title: '13:00 午後の開発・コーディング', icon: '💻', desc: 'TDD・SOLID原則・デザインパターンで高品質な実装', tags: ['TDD', 'SOLID', 'パターン'], section: 'daily_routine' },
        { num: 105, title: '14:00 クライアント折衝・提案', icon: '🤝', desc: 'SPIN話法・BATNA・As-Is/To-Beで説得力のある提案', tags: ['SPIN', 'BATNA', 'As-Is/To-Be'], section: 'daily_routine' },
        { num: 106, title: '15:00 コードレビュー・品質管理', icon: '🔍', desc: 'DORA指標・チェックリスト法・FMEAで品質を担保', tags: ['DORA', 'FMEA', '品質'], section: 'daily_routine' },
        { num: 107, title: '16:00 ドキュメント・ナレッジ共有', icon: '📝', desc: 'ピラミッド原則・SDS法・5W1Hで伝わる文書作成', tags: ['ピラミッド', 'SDS', '5W1H'], section: 'daily_routine' },
        { num: 108, title: '17:00 振り返り・翌日計画', icon: '🔄', desc: 'KPT・PDCA・タイムボックスで継続的改善', tags: ['KPT', 'PDCA', 'タイムボックス'], section: 'daily_routine' },
        { num: 109, title: '18:00 自己研鑽・スキルアップ', icon: '📖', desc: '70:20:10モデル・コルブサイクル・ドレイファスモデル', tags: ['70:20:10', 'コルブ', 'ドレイファス'], section: 'daily_routine' },
        { num: 110, title: '19:00 キャリア構築・ネットワーキング', icon: '🌐', desc: 'ジョハリの窓・メンタリング・Will-Can-Mustでキャリア設計', tags: ['ジョハリ', 'メンタリング', 'Will-Can-Must'], section: 'daily_routine' },

        // --- 🏆 PMP・金融PM実践編 (Day 111-125) ---
        { num: 111, title: 'PMPマインドセットと使命', icon: '🌍', desc: 'PMIイズム、サーバント・リーダーシップ、金融システムの社会的責任', tags: ['PMP', 'People', '倫理'], section: 'pmp_mastery' },
        { num: 112, title: 'チーム構築とエンパワーメント', icon: '🤝', desc: 'タックマンモデル、チーム憲章、心理的安全性', tags: ['PMP', 'People', 'チーム'], section: 'pmp_mastery' },
        { num: 113, title: 'コンフリクト管理とステークホルダー', icon: '⚔️', desc: 'トーマス・キルマンモデル、権力と関心グリッド', tags: ['PMP', 'People', '交渉'], section: 'pmp_mastery' },
        { num: 114, title: 'メンタリングとバーチャルチーム', icon: '🌐', desc: '分散チーム運営、暗黙知・形式知のナレッジ移転', tags: ['PMP', 'People', '育成'], section: 'pmp_mastery' },
        { num: 115, title: '統合管理とスコープ管理', icon: '🧩', desc: 'プロジェクト憲章、WBS、スコープ・クリープへの対処', tags: ['PMP', 'Process', 'スコープ'], section: 'pmp_mastery' },
        { num: 116, title: 'スケジュール管理', icon: '📅', desc: 'クリティカルパス法、PERT見積もり、クラッシング', tags: ['PMP', 'Process', 'スケジュール'], section: 'pmp_mastery' },
        { num: 117, title: 'コスト管理とEVM', icon: '💰', desc: 'アーンド・バリュー・マネジメント、PV/EV/AC、予測', tags: ['PMP', 'Process', 'コスト'], section: 'pmp_mastery' },
        { num: 118, title: '品質管理と継続的改善', icon: '🔍', desc: '品質コスト(COQ)、パレート図、コントロール・チャート', tags: ['PMP', 'Process', '品質'], section: 'pmp_mastery' },
        { num: 119, title: '資源管理とコミュニケーション', icon: '👥', desc: 'RACIチャート、コミュニケーション・チャネルの計算', tags: ['PMP', 'Process', '資源'], section: 'pmp_mastery' },
        { num: 120, title: 'リスク管理', icon: '⚠️', desc: '驚異と機会の対応戦略、EMV計算、リスク登録簿', tags: ['PMP', 'Process', 'リスク'], section: 'pmp_mastery' },
        { num: 121, title: '調達管理', icon: '🤝', desc: '契約タイプ(FP, CR, T&M)、ベンダーコントロールと紛争', tags: ['PMP', 'Process', '調達'], section: 'pmp_mastery' },
        { num: 122, title: 'アジャイル・ハイブリッド手法', icon: '🔄', desc: 'スクラムロール、カンバンWIP制限、ハイブリッド適応', tags: ['PMP', 'Process', 'アジャイル'], section: 'pmp_mastery' },
        { num: 123, title: 'コンプライアンス・監査', icon: '🏛️', desc: '規制対応、品質監査と検査の違い、非機能要件', tags: ['PMP', 'Business', 'コンプラ'], section: 'pmp_mastery' },
        { num: 124, title: 'ビジネス価値とベネフィット', icon: '📈', desc: 'NPV・ROI・IRR・回収期間の判断、ベネフィット計画', tags: ['PMP', 'Business', '価値'], section: 'pmp_mastery' },
        { num: 125, title: '組織の変革管理とケーススタディ', icon: '🦋', desc: 'コッターの8段階変革プロセス、金融PM総括', tags: ['PMP', 'Business', '変革', '総括'], section: 'pmp_mastery' },

        // --- 🧮 統計検定 (Day 126-135) ---
        { num: 126, title: '記述統計と確率', icon: '📊', desc: '代表値、散布度、相関係数とベイズの定理', tags: ['統計2級', '記述統計', '確率'], section: 'statistics_mastery' },
        { num: 127, title: '確率分布と標本分布', icon: '📉', desc: '二項分布、ポアソン分布、大数の法則と中心極限定理', tags: ['統計2級', '確率分布', '中心極限定理'], section: 'statistics_mastery' },
        { num: 128, title: '推定と仮説検定', icon: '🎯', desc: '不偏分散、区間推定(Z/t)、第1種・第2種の誤り', tags: ['統計2級', '推定', '仮説検定'], section: 'statistics_mastery' },
        { num: 129, title: '分散分析と回帰分析', icon: '📈', desc: '一元配置分散分析(ANOVA)、最小二乗法、決定係数', tags: ['統計2級', '分散分析', '回帰分析'], section: 'statistics_mastery' },
        { num: 130, title: 'カテゴリデータの検定と総合', icon: '🧩', desc: '適合度検定、独立性の検定（カイ二乗検定）、2級総合', tags: ['統計2級', 'カイ二乗検定', '総合'], section: 'statistics_mastery' },
        { num: 131, title: '数理統計学の基礎', icon: '📐', desc: '変数変換、積率母関数(MGF)、特性関数と再生性', tags: ['統計1級', '数理統計', 'MGF'], section: 'statistics_mastery' },
        { num: 132, title: '推定理論と最尤推定', icon: '🔍', desc: '一致性・有効性、クラメール・ラオの下限、最尤推定', tags: ['統計1級', '推定理論', '最尤推定'], section: 'statistics_mastery' },
        { num: 133, title: '検定理論と漸近理論', icon: '⚖️', desc: 'ネイマン・ピアソンの補題、尤度比検定、デルタ法', tags: ['統計1級', '検定理論', '尤度比検定'], section: 'statistics_mastery' },
        { num: 134, title: 'マルコフ連鎖と時系列', icon: '⛓️', desc: '推移確率、定常分布、弱定常性、AR/MA/ARIMAモデル', tags: ['統計1級', '確率過程', '時系列分析'], section: 'statistics_mastery' },
        { num: 135, title: '多変量解析と総合', icon: '🌐', desc: '主成分分析(PCA)、判別分析、1級総合キャップストーン', tags: ['統計1級', '多変量解析', 'PCA'], section: 'statistics_mastery' },

        // --- 🏦 Be-DFS 開発責任者研修 (Day 136-150) ---
        { num: 136, title: 'Be-DFSと証券IT全体像', icon: '🏦', desc: 'Be-DFSの位置づけ、フロント→ミドル→バック、連携システム群', tags: ['Be-DFS', '全体像', 'アーキテクチャ'], section: 'bedfs_mastery' },
        { num: 137, title: 'OTCデリバティブの基礎', icon: '📜', desc: '取引所 vs OTC、ISDAマスター契約、トレードライフサイクル', tags: ['OTC', 'ISDA', 'ライフサイクル'], section: 'bedfs_mastery' },
        { num: 138, title: '金利スワップ(IRS)の仕組み', icon: '💱', desc: '固定 vs 変動、Day Count、LIBOR廃止とRFR移行', tags: ['IRS', 'Day Count', 'RFR'], section: 'bedfs_mastery' },
        { num: 139, title: '通貨スワップ・ベーシススワップ', icon: '🌍', desc: 'クロスカレンシースワップ、テナーベーシス、元本交換', tags: ['CCS', 'ベーシス', '元本交換'], section: 'bedfs_mastery' },
        { num: 140, title: 'エクイティデリバティブとTRS', icon: '📈', desc: 'Total Return Swap、リターンレグとファンディングレグ', tags: ['TRS', 'エクイティ', 'リターン'], section: 'bedfs_mastery' },
        { num: 141, title: 'PSWAP (Portfolio Swap) とPB', icon: '📊', desc: 'ポートフォリオスワップ、プライムブローカレッジ、日次リバランス', tags: ['PSWAP', 'PB', 'リバランス'], section: 'bedfs_mastery' },
        { num: 142, title: 'エキゾチック商品とOTCの多様性', icon: '🎨', desc: 'バリアオプション、CDS、商品テンプレート設計', tags: ['エキゾチック', 'CDS', 'テンプレート'], section: 'bedfs_mastery' },
        { num: 143, title: 'ディスカウントファクターとカーブ構築', icon: '📐', desc: 'DF、イールドカーブ、ブートストラップ法、マルチカーブ', tags: ['DF', 'カーブ', 'ブートストラップ'], section: 'bedfs_mastery' },
        { num: 144, title: 'プライシングとグリッドコンピューティング', icon: '🖥️', desc: '時価評価、モンテカルロ法、グリッド計算、EODバッチ', tags: ['プライシング', 'グリッド', 'MtM'], section: 'bedfs_mastery' },
        { num: 145, title: 'Greeks・リスク計算と感応度', icon: '📊', desc: 'Delta/Gamma/Vega/Theta、DV01、バンピング法、AAD', tags: ['Greeks', 'DV01', 'AAD'], section: 'bedfs_mastery' },
        { num: 146, title: 'ブッキングフローとデータモデル', icon: '📝', desc: 'トレードステータス管理、レグ配列、外部IF設計', tags: ['ブッキング', 'データモデル', 'STP'], section: 'bedfs_mastery' },
        { num: 147, title: 'フロントUI設計とトレーダーUX', icon: '🖥️', desc: 'ブロッター、リアルタイム更新、What-If計算、OpenFin', tags: ['UI', 'UX', 'ブロッター'], section: 'bedfs_mastery' },
        { num: 148, title: 'バックオフィス連携と決済', icon: '🔗', desc: '照合、確認書、SSI、フロント/バック照合', tags: ['バック連携', '照合', 'SSI'], section: 'bedfs_mastery' },
        { num: 149, title: 'マーケットデータと規制対応', icon: '📡', desc: 'データフィード、静的データ管理、EMIR/MiFID II/JFSA', tags: ['マーケットデータ', '規制', 'EMIR'], section: 'bedfs_mastery' },
        { num: 150, title: '運用・障害対応とキャップストーン', icon: '⚙️', desc: 'EOD/BODバッチ、障害パターン、監視、Be-DFS総括', tags: ['運用', '障害対応', '総括'], section: 'bedfs_mastery' }
    ],

    currentDay: null,

    init() {
        this.renderNavList();
        this.renderDayCards();
        this.setupEventListeners();
        this.updateProgressUI();
    },

    renderNavList() {
        const navList = document.getElementById('nav-list');
        const sectionLabels = { _default: '📊 金融工学入門', bonus: '📚 ボーナス研修', advanced: '📐 応用金融工学', pm: '📋 PM研修', leadership: '🌟 リーダーシップ', career: '🚀 キャリア発展', executive_prep: '🏛️ 経営幹部候補研修', executive: '👔 経営層研修', toeic: '🎯 TOEIC 950点突破', tech_enhance: '🔧 技術スキル強化', pro_skills: '💎 プロフェッショナルスキル', world_knowledge: '🌍 世界の常識', liberal_arts: '📖 リベラルアーツ', data_science: '📊 データサイエンス', system_design: '🏗️ システム設計', financial_practice: '💰 金融実务', business_skills: '🤝 ビジネス実践', advanced_tech: '⚡ 先端技術', capstone: '🎓 総合演習', daily_routine: '🕐 出来る社員の1日', pmp_mastery: '🏆 PMP・金融PM実践', statistics_mastery: '🧮 統計検定 マスター', bedfs_mastery: '🏦 Be-DFS 開発責任者研修' };
        // Group days by section
        const groups = [];
        let currentGroup = null;
        this.days.forEach(day => {
            const cat = day.bonus ? 'bonus' : (day.section || '_default');
            if (!currentGroup || currentGroup.cat !== cat) {
                currentGroup = { cat, label: sectionLabels[cat] || cat, days: [] };
                groups.push(currentGroup);
            }
            currentGroup.days.push(day);
        });
        // Load collapsed state
        let collapsedState = {};
        try { collapsedState = JSON.parse(localStorage.getItem('nav-collapsed') || '{}'); } catch (e) { }
        let html = `
            <li class="nav-item">
                <a class="nav-link active" data-page="dashboard">
                    <span class="nav-day-num">🏠</span>
                    <span class="nav-day-title">ダッシュボード</span>
                </a>
            </li>`;
        groups.forEach(group => {
            const isCollapsed = collapsedState[group.cat] === true;
            const completedCount = group.days.filter(d => ProgressManager.isDayCompleted(d.num)).length;
            const totalCount = group.days.length;
            const allDone = completedCount === totalCount;
            const progressPct = Math.round((completedCount / totalCount) * 100);
            const progressBadge = allDone
                ? `<span class="nav-section-badge done">✅ 完了</span>`
                : completedCount > 0
                    ? `<span class="nav-section-badge partial">${completedCount}/${totalCount}</span>`
                    : `<span class="nav-section-badge">${totalCount}</span>`;
            html += `<li class="nav-section-header${isCollapsed ? ' collapsed' : ''}${allDone ? ' all-done' : ''}" data-section="${group.cat}">
                <span class="nav-section-label-text">${group.label}</span>
                <span class="nav-section-right">${progressBadge}<span class="nav-section-arrow">▾</span></span>
            </li>`;
            if (!isCollapsed || true) {
                html += `<div class="nav-section-items${isCollapsed ? ' collapsed' : ''}" data-section-items="${group.cat}">`;
                if (completedCount > 0 && !allDone) {
                    html += `<div class="nav-section-progress-bar"><div class="nav-section-progress-fill" style="width:${progressPct}%"></div></div>`;
                }
                group.days.forEach(day => {
                    const completed = ProgressManager.isDayCompleted(day.num);
                    html += `<li class="nav-item">
                    <a class="nav-link${completed ? ' completed' : ''}" data-page="day" data-day="${day.num}">
                        <span class="nav-day-num">${completed ? '' : day.num}</span>
                        <span class="nav-day-title">${day.title}</span>
                    </a>
                </li>`;
                });
                html += `</div>`;
            }
        });
        navList.innerHTML = html;
        // Add toggle listeners
        navList.querySelectorAll('.nav-section-header').forEach(header => {
            header.addEventListener('click', () => {
                const section = header.dataset.section;
                const items = navList.querySelector(`[data-section-items="${section}"]`);
                const isNowCollapsed = !header.classList.contains('collapsed');
                header.classList.toggle('collapsed');
                items.classList.toggle('collapsed');
                try {
                    const state = JSON.parse(localStorage.getItem('nav-collapsed') || '{}');
                    state[section] = isNowCollapsed;
                    localStorage.setItem('nav-collapsed', JSON.stringify(state));
                } catch (e) { }
            });
        });
    },

    renderDayCards() {
        const cardsContainer = document.getElementById('day-cards');
        const sectionLabels = { bonus: '📚 ボーナス研修', advanced: '📐 応用金融工学', pm: '📋 PM研修', leadership: '🌟 リーダーシップ', career: '🚀 キャリア発展', executive_prep: '🏛️ 経営幹部候補研修', executive: '👔 経営層研修', toeic: '🎯 TOEIC 950点突破', tech_enhance: '🔧 技術スキル強化', pro_skills: '💎 プロフェッショナルスキル', world_knowledge: '🌍 世界の常識', liberal_arts: '📖 リベラルアーツ', data_science: '📊 データサイエンス', system_design: '🏗️ システム設計', financial_practice: '💰 金融実務', business_skills: '🤝 ビジネス実践', advanced_tech: '⚡ 先端技術', capstone: '🎓 総合演習', daily_routine: '🕐 出来る社員の1日', pmp_mastery: '🏆 PMP・金融PM実践', statistics_mastery: '🧮 統計検定 マスター' };
        let html = '';
        let lastCat = null;
        this.days.forEach((day, i) => {
            const completed = ProgressManager.isDayCompleted(day.num);
            const cat = day.bonus ? 'bonus' : day.section;
            if (cat && cat !== lastCat) {
                html += `<div style="grid-column:1/-1;margin-top:1.5rem;"><h2 class="section-title">${sectionLabels[cat]}</h2></div>`;
                lastCat = cat;
            }
            html += `
                <div class="day-card animate-in stagger-${(i % 5) + 1} ${completed ? 'completed' : ''} ${cat ? 'bonus-card' : ''}" data-day="${day.num}">
                    <div class="day-card-header">
                        <div class="day-card-num">${completed ? '✓' : 'Day ' + day.num}</div>
                        <div class="day-card-title">${day.title}${cat ? `<span class="bonus-badge">${cat === 'bonus' ? 'BONUS' : cat === 'advanced' ? '応用' : cat === 'pm' ? 'PM' : cat === 'leadership' ? 'LEAD' : cat === 'executive_prep' ? '幹部候補' : cat === 'executive' ? '経営層' : cat === 'toeic' ? 'TOEIC' : cat === 'tech_enhance' ? '技術' : cat === 'pro_skills' ? 'PRO' : cat === 'world_knowledge' ? '常識' : cat === 'liberal_arts' ? '教養' : cat === 'data_science' ? 'DS' : cat === 'system_design' ? '設計' : cat === 'financial_practice' ? '実務' : cat === 'business_skills' ? 'BIZ' : cat === 'advanced_tech' ? '先端' : cat === 'capstone' ? '演習' : cat === 'daily_routine' ? '1日' : cat === 'pmp_mastery' ? '🏆PMP' : cat === 'statistics_mastery' ? '🧮統計' : 'OTHER'}</span>` : ''}</div>
                    </div>
                    <div class="day-card-desc">${day.desc}</div>
                    <div class="day-card-tags">
                        ${day.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
            `;
        });
        cardsContainer.innerHTML = html;
    },

    setupEventListeners() {
        // Nav links
        document.getElementById('nav-list').addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link');
            if (!link) return;

            const page = link.dataset.page;
            const day = link.dataset.day ? parseInt(link.dataset.day) : null;

            if (page === 'dashboard') {
                this.showDashboard();
            } else if (page === 'day' && day) {
                this.showDay(day);
            }

            // Close mobile sidebar
            document.getElementById('sidebar').classList.remove('open');
        });

        // Day cards
        document.getElementById('day-cards').addEventListener('click', (e) => {
            const card = e.target.closest('.day-card');
            if (!card) return;
            const day = parseInt(card.dataset.day);
            this.showDay(day);
        });

        // Mobile toggle
        document.getElementById('sidebar-toggle').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Reset button
        document.getElementById('reset-btn').addEventListener('click', () => {
            if (confirm('全ての進捗をリセットしますか？この操作は取り消せません。')) {
                ProgressManager.reset();
                this.currentDay = null;
                this.showDashboard();
                this.renderNavList();
                this.updateProgressUI();
            }
        });
    },

    showDashboard() {
        this.currentDay = null;
        document.getElementById('dashboard').classList.remove('hidden');
        document.getElementById('day-content').classList.add('hidden');
        this.setActiveNav('dashboard');
        this.renderDayCards();
        this.updateProgressUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    showDay(dayNum) {
        this.currentDay = dayNum;
        document.getElementById('dashboard').classList.add('hidden');
        const dayContent = document.getElementById('day-content');
        dayContent.classList.remove('hidden');

        this.setActiveNav(dayNum);

        // Load day content
        const dayModule = window[`Day${String(dayNum).padStart(2, '0')}`];
        if (dayModule && dayModule.render) {
            dayModule.render(dayContent, dayNum);
        } else {
            dayContent.innerHTML = `
                <div class="day-header">
                    <div class="day-number">Day ${dayNum}</div>
                    <h1 class="day-title">準備中...</h1>
                    <p class="day-description">このレッスンはまだ準備中です。</p>
                </div>
            `;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    setActiveNav(page) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (page === 'dashboard' && link.dataset.page === 'dashboard') {
                link.classList.add('active');
            } else if (typeof page === 'number' && parseInt(link.dataset.day) === page) {
                link.classList.add('active');
            }
        });
    },

    updateProgressUI() {
        const percent = ProgressManager.getProgressPercent();
        document.getElementById('progress-percent').textContent = `${percent}%`;
        document.getElementById('progress-fill').style.width = `${percent}%`;

        // Dashboard stats
        const statCompleted = document.getElementById('stat-completed');
        const statQuizzes = document.getElementById('stat-quizzes');
        const statStreak = document.getElementById('stat-streak');
        const statTime = document.getElementById('stat-time');

        if (statCompleted) statCompleted.textContent = ProgressManager.getCompletedCount();
        if (statQuizzes) statQuizzes.textContent = ProgressManager.getQuizzesPassed();
        if (statStreak) statStreak.textContent = ProgressManager.getStreak();
        if (statTime) statTime.textContent = ProgressManager.getTotalTimeFormatted();
    },

    renderDayTemplate(container, dayNum, dayInfo, sections) {
        const completed = ProgressManager.isDayCompleted(dayNum);
        const totalDays = this.days.length;
        const prevDay = dayNum > 1 ? dayNum - 1 : null;
        const nextDay = dayNum < totalDays ? dayNum + 1 : null;

        container.innerHTML = `
            <div class="day-header">
                <div class="day-breadcrumb">
                    <a onclick="Navigation.showDashboard()">ダッシュボード</a>
                    <span>›</span>
                    <span>Day ${dayNum}</span>
                </div>
                <div class="day-number">${dayInfo.icon} Day ${dayNum}</div>
                <h1 class="day-title">${dayInfo.title}</h1>
                <p class="day-description">${dayInfo.desc}</p>
            </div>
            ${sections}
            <div class="day-complete-section">
                <button class="day-complete-btn ${completed ? 'completed' : ''}" id="complete-day-btn">
                    ${completed ? '✅ 完了済み' : '✅ このDayを完了にする'}
                </button>
                <div class="day-nav-buttons">
                    ${prevDay ? `<button class="btn btn-secondary" onclick="Navigation.showDay(${prevDay})">← Day ${prevDay}</button>` : '<div></div>'}
                    ${nextDay ? `<button class="btn btn-primary" onclick="Navigation.showDay(${nextDay})">Day ${nextDay} →</button>` : '<div></div>'}
                </div>
            </div>
        `;

        // Complete button
        const completeBtn = document.getElementById('complete-day-btn');
        if (completeBtn && !completed) {
            completeBtn.addEventListener('click', () => {
                ProgressManager.completeDay(dayNum);
                completeBtn.textContent = '✅ 完了済み';
                completeBtn.classList.add('completed');
                Navigation.renderNavList();
                Navigation.setActiveNav(dayNum);
                Navigation.updateProgressUI();
            });
        }
    }
};
