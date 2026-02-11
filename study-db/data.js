// データベーススペシャリスト試験 暗記データ
const STATS_DATA = [
    {
        id: "relational_theory",
        name: "関係モデル・正規化理論",
        icon: "📐",
        color: "#6C5CE7",
        items: [
            { question: "関係モデルの基本用語", answer: "関係（テーブル）、タプル（行）、属性（列）、ドメイン（値の集合）、候補キー、主キー、外部キー。", supplement: "関係の性質: タプルの順序に意味なし、属性の順序に意味なし、タプルの重複なし、属性値は原子値。" },
            { question: "関数従属性", answer: "X → Y: Xの値が決まればYの値が一意に決まる。完全関数従属と部分関数従属。", supplement: "推移的関数従属: X → Y → Z。アームストロングの公理: 反射律、増加律、推移律。閉包の計算。" },
            { question: "第1正規形 (1NF)", answer: "全ての属性値が原子値（繰り返し群の排除）。", supplement: "非正規形: 1つのセルに複数の値。1NF: 属性が単一値。" },
            { question: "第2正規形 (2NF)", answer: "1NF かつ 部分関数従属の排除。非キー属性が候補キー全体に完全関数従属。", supplement: "複合キーの一部にのみ従属する属性を別テーブルに分離。" },
            { question: "第3正規形 (3NF)", answer: "2NF かつ 推移的関数従属の排除。非キー属性間の従属を排除。", supplement: "A → B → C で、AがキーならBを別テーブルに分離。実務ではここまでが一般的。" },
            { question: "ボイス・コッド正規形 (BCNF)", answer: "全ての関数従属の決定項がスーパーキーである。3NFより厳しい条件。", supplement: "3NFでは非キー属性が候補キーの一部に関数従属するケースを許すが、BCNFでは許さない。" },
            { question: "第4正規形 / 第5正規形", answer: "4NF: 多値従属性の排除。5NF: 結合従属性の排除。", supplement: "多値従属性: X →→ Y (Xに対してYが複数値)。実務で4NF以上を意識することは稀。" },
            { question: "非正規化", answer: "性能チューニングのため、正規化を崩してテーブルを統合・冗長化すること。", supplement: "JOINの削減、集計テーブルの事前作成。データ整合性のリスクとトレードオフ。" }
        ]
    },
    {
        id: "sql_advanced",
        name: "SQL（応用）",
        icon: "💻",
        color: "#00B894",
        items: [
            { question: "副問合せ（サブクエリ）", answer: "SELECT文の中にSELECT文をネストする。EXISTS、IN、スカラ副問合せ、相関副問合せ。", supplement: "相関副問合せ: 外側のクエリの値を参照。EXISTS: 副問合せが結果を返すかどうかで判定（NULLも対応可）。" },
            { question: "ウィンドウ関数", answer: "ROW_NUMBER(), RANK(), DENSE_RANK(), SUM() OVER(), LAG(), LEAD()", supplement: "PARTITION BY: グループ分け。ORDER BY: 順序指定。ROWS/RANGE: フレーム指定。集計しつつ行を保持できる強力な機能。" },
            { question: "GRANT / REVOKE", answer: "GRANT: 権限の付与。REVOKE: 権限の剥奪。WITH GRANT OPTION: 権限の再付与権。", supplement: "権限: SELECT, INSERT, UPDATE, DELETE, EXECUTE等。ロールを使って権限をグループ管理。" },
            { question: "ビュー (VIEW)", answer: "仮想テーブル。データの論理的独立性を提供。セキュリティ（列・行の制限）。", supplement: "更新可能ビュー: 単一テーブル、集約なし等の条件を満たす場合。マテリアライズドビュー: 結果を実体化して高速化。" },
            { question: "ストアドプロシージャ", answer: "DBサーバ側に格納された処理プログラム。ネットワーク負荷軽減、セキュリティ向上。", supplement: "プリコンパイルで高速実行。トリガ: イベント（INSERT/UPDATE/DELETE）発生時に自動実行。カーソル: 結果セットを1行ずつ処理。" },
            { question: "WITH句（共通テーブル式 CTE）", answer: "WITH cte AS (SELECT ...) SELECT ... FROM cte。再帰CTEも可能。", supplement: "再帰CTE: WITH RECURSIVE で階層構造（ツリー）や連番生成。可読性が高く、副問合せの代替に。" }
        ]
    },
    {
        id: "transaction",
        name: "トランザクション・同時実行制御",
        icon: "🔄",
        color: "#E17055",
        items: [
            { question: "ACID特性", answer: "原子性 (Atomicity)、一貫性 (Consistency)、分離性 (Isolation)、耐久性 (Durability)", supplement: "原子性: 全て成功 or 全て失敗。一貫性: 制約を常に満たす。分離性: 並行トランザクションが互いに影響しない。耐久性: COMMIT後は永続。" },
            { question: "分離レベルと異常", answer: "READ UNCOMMITTED → READ COMMITTED → REPEATABLE READ → SERIALIZABLE", supplement: "ダーティリード: 未コミットデータの読取り。ファジーリード: 再読取で値変化。ファントムリード: 再読取で行数変化。" },
            { question: "2相ロッキング (2PL)", answer: "成長相: ロックの取得のみ。縮退相: ロックの解放のみ。直列化可能性を保証。", supplement: "厳密2PL (S2PL): コミットまでロック保持。デッドロックの可能性あり。" },
            { question: "デッドロック", answer: "2つ以上のトランザクションが互いのロック解放を待ち、処理が進まない状態。", supplement: "検出: 待ちグラフの循環検出。対策: タイムアウト、ロック取得順序の統一。解消: 一方をロールバック。" },
            { question: "MVCC (Multi-Version Concurrency Control)", answer: "データの複数バージョンを保持し、読取りがロックなしで実行可能な同時実行制御方式。", supplement: "PostgreSQL, MySQL(InnoDB)で採用。スナップショット分離: トランザクション開始時点のデータを参照。" },
            { question: "WAL (Write-Ahead Logging)", answer: "データベースへの更新前にログを書き込む方式。障害回復の基盤。", supplement: "REDO: コミット済みで未反映→再実行。UNDO: 未コミットの変更→取消し。チェックポイント: ログの切り詰め点。" }
        ]
    },
    {
        id: "physical_design",
        name: "物理設計・パフォーマンス",
        icon: "⚡",
        color: "#0984E3",
        items: [
            { question: "インデックス（B+木）", answer: "B+木: 葉ノードにデータ格納、葉がリスト連結。範囲検索に強い。探索 O(log n)。", supplement: "クラスタインデックス: データの物理順序=インデックス順。1テーブルに1つ。非クラスタ: ポインタで参照。ビットマップインデックス: 選択性が低い列向け。" },
            { question: "実行計画 (EXPLAIN)", answer: "SQLの実行方法をオプティマイザが決定した計画。全表スキャン、インデックススキャン、結合方法等。", supplement: "ネステッドループ結合、ハッシュ結合、ソートマージ結合。コストベースオプティマイザが統計情報に基づいて選択。" },
            { question: "パーティショニング", answer: "レンジ（範囲）、リスト（値リスト）、ハッシュ（ハッシュ値）でテーブルを分割。", supplement: "パーティションプルーニング: 不要なパーティションをスキップ。大量データのスキャン効率化、メンテナンス（パーティション単位の操作）。" },
            { question: "レプリケーション", answer: "マスタ-スレーブ: 参照はスレーブに分散。マスタ-マスタ: 双方向同期。非同期/同期/半同期。", supplement: "読取り負荷の分散、DR対策。遅延レプリケーション: 一定時間遅らせて人為ミスの復旧に利用。" },
            { question: "シャーディング", answer: "データを水平分割し、複数のDBサーバに分散配置する手法。", supplement: "シャードキーの設計が重要。クロスシャードクエリはコスト高。一貫性の管理が複雑化。" },
            { question: "接続プーリング", answer: "DB接続を事前に確立してプールしておき、アプリケーションが再利用する。接続コストを削減。", supplement: "最大接続数、アイドルタイムアウト、接続の有効性チェック。PgBouncer, HikariCP等。" }
        ]
    },
    {
        id: "data_modeling",
        name: "データモデリング・概念設計",
        icon: "📊",
        color: "#FDCB6E",
        items: [
            { question: "ER図の表記法", answer: "エンティティ（矩形）、属性（楕円）、関連（ひし形）。IE記法、IDEF1X記法。", supplement: "カーディナリティ: 1対1、1対多、多対多。多対多は連関エンティティで解消。" },
            { question: "スーパータイプ/サブタイプ", answer: "汎化(スーパータイプ)と特化(サブタイプ)の関係。排他・共存、完全・不完全の4パターン。", supplement: "テーブル化: ①スーパータイプのみ ②スーパー+サブ ③サブタイプのみ。性能と正規化のトレードオフ。" },
            { question: "3層スキーマアーキテクチャ", answer: "外部スキーマ（ユーザビュー）→ 概念スキーマ（論理構造）→ 内部スキーマ（物理構造）", supplement: "データ独立性: 概念と物理の分離（物理的独立性）、外部と概念の分離（論理的独立性）。" },
            { question: "ディメンショナルモデリング（スタースキーマ）", answer: "ファクトテーブル（計測値）+ ディメンションテーブル（分析軸）。DWH/OLAP向け。", supplement: "スノーフレークスキーマ: ディメンションをさらに正規化。ファクトレステーブル: 計測値なし（イベント記録）。" },
            { question: "マスタデータ管理 (MDM)", answer: "組織横断的にマスタデータ（顧客、製品、組織等）の一貫性・品質を管理する仕組み。", supplement: "データクレンジング: 重複排除、形式統一。データスチュワード: データ品質の責任者。" }
        ]
    },
    {
        id: "nosql_distributed",
        name: "NoSQL・分散データベース",
        icon: "🌐",
        color: "#A29BFE",
        items: [
            { question: "CAP定理", answer: "一貫性 (Consistency)、可用性 (Availability)、分断耐性 (Partition tolerance) の3つを同時に満たせない。", supplement: "CP: HBase, MongoDB (デフォルト)。AP: DynamoDB, Cassandra。CA: 単一ノードRDBMS。" },
            { question: "BASE特性", answer: "Basically Available, Soft state, Eventually consistent。ACIDの対極。", supplement: "結果整合性: 最終的には一貫性が保たれる。ネットワーク遅延やパーティション下でも可用性を優先。" },
            { question: "キーバリューストア (KVS)", answer: "キーと値のペアでデータを管理。高速な読み書き。Redis, DynamoDB。", supplement: "用途: セッション管理、キャッシュ、ランキング。Redis: インメモリ、データ構造豊富（リスト、セット、ソート済みセット）。" },
            { question: "ドキュメント指向DB", answer: "JSON/BSONドキュメント単位でデータを格納。スキーマレス。MongoDB, Couchbase。", supplement: "ネストした構造をそのまま格納。コレクション単位で管理。インデックスサポート。" },
            { question: "グラフDB", answer: "ノード（頂点）とエッジ（辺）でデータ関係を表現。Neo4j。", supplement: "SNSの友人関係、推薦システム、経路探索に適する。Cypher (Neo4j) クエリ言語。" },
            { question: "NewSQL", answer: "RDBMSのACID特性とNoSQLの水平スケーラビリティを両立する新世代DB。", supplement: "Google Spanner, CockroachDB, TiDB。分散トランザクション、グローバル一貫性。" }
        ]
    },
    {
        id: "bigdata_cloud",
        name: "ビッグデータ・最新技術",
        icon: "🐘",
        color: "#636e72",
        items: [
            { question: "Hadoopエコシステム", answer: "分散処理フレームワーク。HDFS (ストレージ) + MapReduce (処理) が基本。", supplement: "YARN (リソース管理)。Hive (SQLライクなクエリ)。HBase (NoSQL)。Spark (インメモリ処理で高速化)。" },
            { question: "Apache Spark", answer: "インメモリでの高速な分散処理フレームワーク。Hadoop MapReduceの代替として普及。", supplement: "RDD (Resilient Distributed Datasets)。ストリーミング処理、機械学習 (MLlib)、グラフ処理も統合。" },
            { question: "列指向ストレージ (Columnar Storage)", answer: "列ごとにデータを格納する形式。分析クエリ（集計）が高速。", supplement: "Parquet, ORC。行指向はトランザクション処理向き。圧縮率が高い。" },
            { question: "クラウドネイティブデータベース (Aurora)", answer: "ストレージとコンピュートを分離したアーキテクチャ。高い可用性とスケーラビリティ。", supplement: "ログ構造化ストレージ。リードレプリカの高速追加。サーバレス構成。" },
            { question: "SQL:2016 JSONサポート", answer: "標準SQLでJSONデータの格納・検索・生成が可能になった。", supplement: "JSON_VALUE, JSON_QUERY。RDBMSとNoSQLのハイブリッド利用が可能に。" },
            { question: "ベクトルデータベース", answer: "高次元ベクトルデータを格納し、類似性検索を高速に行うDB。AI/LLMで重要。", supplement: "RAG (Retrieval-Augmented Generation) で活用。Pinecone, Milvus, pgvector。" }
        ]
    }
];
