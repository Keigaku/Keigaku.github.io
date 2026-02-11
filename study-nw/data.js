// ネットワークスペシャリスト試験 暗記データ
const STATS_DATA = [
    {
        id: "network_basics",
        name: "ネットワーク基礎・OSI参照モデル",
        icon: "🌐",
        color: "#6C5CE7",
        items: [
            { question: "OSI参照モデル 7層", answer: "L1物理→L2データリンク→L3ネットワーク→L4トランスポート→L5セッション→L6プレゼンテーション→L7アプリケーション", supplement: "各層の代表プロトコル: L2(Ethernet,PPP)、L3(IP,ICMP)、L4(TCP,UDP)、L7(HTTP,DNS,SMTP)。" },
            { question: "カプセル化とPDU", answer: "L7:データ→L4:セグメント→L3:パケット→L2:フレーム→L1:ビット", supplement: "送信側で上位→下位にヘッダ付加（カプセル化）。受信側で下位→上位にヘッダ除去（非カプセル化）。" },
            { question: "イーサネットフレーム (IEEE 802.3)", answer: "プリアンブル(8B)+宛先MAC(6B)+送元MAC(6B)+タイプ(2B)+データ(46-1500B)+FCS(4B)", supplement: "MTU (Maximum Transmission Unit): 1500バイト。ジャンボフレーム: 9000バイト。FCS: CRC-32で誤り検出。" },
            { question: "CSMA/CD と CSMA/CA", answer: "CSMA/CD: 有線LAN（衝突検出）。CSMA/CA: 無線LAN（衝突回避）。", supplement: "CSMA/CD: 送信中に衝突検出→ジャム信号→ランダム時間後に再送。全二重通信では不要。CSMA/CA: RTS/CTSで事前予約。" },
            { question: "帯域幅と遅延の計算", answer: "伝送時間 = データ量 ÷ 帯域幅。遅延 = 伝搬遅延 + 伝送遅延 + 処理遅延 + キューイング遅延", supplement: "スループット: 実効的な転送速度。帯域幅 × 遅延積 = パイプラインに入るデータ量。" },
            { question: "全二重と半二重", answer: "全二重: 双方向同時通信。半二重: 交互に通信。", supplement: "スイッチ接続は全二重。ハブ接続は半二重でCSMA/CD必要。" }
        ]
    },
    {
        id: "switching",
        name: "スイッチング・VLAN",
        icon: "🔀",
        color: "#00B894",
        items: [
            { question: "L2スイッチの動作", answer: "MACアドレステーブル（CAMテーブル）を学習し、宛先MACアドレスに基づいてフレームを転送。", supplement: "フラッディング: 未知の宛先MACへの転送（全ポートに送出）。エージング: 一定時間アクセスがないエントリを削除。" },
            { question: "VLAN (IEEE 802.1Q)", answer: "物理ネットワークを論理的に分割。タグVLAN: フレームにVLAN IDタグを付加してトランクリンクで転送。", supplement: "アクセスポート: 1つのVLANに所属。トランクポート: 複数VLANのフレームを運搬。ネイティブVLAN: タグなしフレームのVLAN。" },
            { question: "スパニングツリープロトコル (STP/IEEE 802.1D)", answer: "L2ネットワークのループを防止するプロトコル。ルートブリッジを起点に冗長パスをブロック。", supplement: "RSTP (802.1w): 高速収束。PVST+: VLANごとにSTP。ブリッジ優先度+MACでルートブリッジ選出。" },
            { question: "リンクアグリゲーション (IEEE 802.3ad / LACP)", answer: "複数の物理リンクを1つの論理リンクに束ねて帯域を拡大し冗長性を確保する。", supplement: "LACP: 動的にリンクを束ねるプロトコル。スタティック: 手動設定。最大8ポートまで束ねられる。" },
            { question: "L3スイッチ", answer: "L2スイッチにルーティング機能を追加。VLAN間ルーティングをハードウェアで高速処理。", supplement: "ルータとの違い: L3スイッチはASIC (専用チップ) でワイヤスピード処理。WAN接続にはルータが必要。" }
        ]
    },
    {
        id: "ip_routing",
        name: "IPアドレスとルーティング",
        icon: "🛤️",
        color: "#E17055",
        items: [
            { question: "IPv4アドレスとCIDR", answer: "32ビット。CIDR表記: /24 = サブネットマスク255.255.255.0。ホスト数 = 2^(32-プレフィクス長) - 2", supplement: "プライベートアドレス: 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。VLSM: 可変長サブネットマスク。" },
            { question: "IPv6アドレス", answer: "128ビット。16進数4桁をコロンで区切って8グループ。リンクローカル: fe80::/10。", supplement: "グローバルユニキャスト: 2000::/3。マルチキャスト: ff00::/8。ブロードキャストは廃止（マルチキャストに統合）。NDP (近隣探索プロトコル) がARPの代替。" },
            { question: "ルーティングプロトコル分類", answer: "IGP: RIP (距離ベクトル)、OSPF (リンク状態)。EGP: BGP (パスベクトル)。", supplement: "RIP: ホップ数（最大15）、30秒ごとに更新。OSPF: コスト（帯域幅ベース）、LSAで経路情報交換。BGP: AS間ルーティング。" },
            { question: "OSPF (Open Shortest Path First)", answer: "リンク状態型。エリア分割で大規模対応。SPF (ダイクストラ) アルゴリズムで最短経路計算。", supplement: "エリア0 (バックボーンエリア) が必須。LSA (Link State Advertisement) でリンク状態をフラッディング。DR/BDR選出。" },
            { question: "BGP (Border Gateway Protocol)", answer: "AS (自律システム) 間のルーティング。パス属性（AS-PATH等）に基づいて経路選択。", supplement: "eBGP: AS間。iBGP: AS内。ポリシーベースルーティング。インターネットの根幹プロトコル。" },
            { question: "NAT / NAPT", answer: "NAT: プライベートIP↔グローバルIPの1対1変換。NAPT: ポート番号も変換して多対1。", supplement: "スタティックNAT: 固定変換。ダイナミックNAT: プールから動的割当。CGNAT: ISPレベルのNAT。" },
            { question: "ICMP", answer: "エラー通知と診断用プロトコル。ping (Echo Request/Reply)、traceroute (TTL超過)。", supplement: "到達不能メッセージ、リダイレクトメッセージ、時間超過メッセージ。ICMPv6ではNDPの機能も担う。" }
        ]
    },
    {
        id: "transport_app",
        name: "トランスポート・アプリケーション層",
        icon: "📨",
        color: "#0984E3",
        items: [
            { question: "TCP の主要機能", answer: "3ウェイハンドシェイク、シーケンス番号、ACK、再送制御、フロー制御（ウィンドウ）、輻輳制御。", supplement: "3WHS: SYN→SYN+ACK→ACK。4ウェイ終了: FIN→ACK→FIN→ACK。MSS: 最大セグメントサイズ。" },
            { question: "TCPウィンドウ制御", answer: "スライディングウィンドウ: ACKを待たずにウィンドウサイズ分だけ連続送信。", supplement: "受信ウィンドウ (rwnd): 受信側のバッファ。輻輳ウィンドウ (cwnd): ネットワーク状態に応じた制限。実効ウィンドウ = min(rwnd, cwnd)。" },
            { question: "TCP輻輳制御", answer: "スロースタート→輻輳回避→(パケットロス)→快速再送/快速回復 or スロースタートに戻る", supplement: "スロースタート: cwndを指数的に増加。輻輳回避: cwndを線形増加。Reno, CUBIC, BBR等のアルゴリズム。" },
            { question: "DNS の名前解決", answer: "再帰問合せ（リゾルバ→フルサービスリゾルバ）と反復問合せ（フルサービスリゾルバ→権威DNS）。", supplement: "レコード: A (IPv4), AAAA (IPv6), MX (メール), CNAME (別名), NS (権威DNS), PTR (逆引き), TXT (SPF等)。" },
            { question: "DHCP", answer: "DORA: Discover → Offer → Request → Ack。IPアドレス、サブネットマスク、デフォルトGW、DNSを自動配布。", supplement: "リース期間。DHCPリレーエージェント: 異なるサブネットにDHCPを中継。スコープ: 配布するIPアドレスの範囲。" },
            { question: "HTTP/HTTPS", answer: "HTTP/1.1: 持続的接続。HTTP/2: 多重化、ヘッダ圧縮。HTTP/3: QUIC (UDP上)。HTTPS = HTTP + TLS。", supplement: "ステータスコード: 2xx成功、3xxリダイレクト、4xxクライアントエラー、5xxサーバエラー。REST API。" },
            { question: "メール関連プロトコル", answer: "SMTP: 送信 (ポート25/587)。POP3: 受信・ダウンロード (110)。IMAP4: サーバで管理 (143)。", supplement: "SMTP AUTH: 認証付き送信。STARTTLS/SMTPS: 暗号化。SPF/DKIM/DMARC: 送信ドメイン認証。" }
        ]
    },
    {
        id: "network_security",
        name: "ネットワークセキュリティ",
        icon: "🔒",
        color: "#FDCB6E",
        items: [
            { question: "ファイアウォールの種類", answer: "パケットフィルタリング型、ステートフルインスペクション型、アプリケーションゲートウェイ (プロキシ) 型。", supplement: "WAF: Webアプリ特化。NGFW (次世代FW): アプリケーション識別、IPS統合。ゾーンベースFW。" },
            { question: "IDS / IPS", answer: "IDS: 不正アクセスを検知して通知。IPS: 検知＋遮断。", supplement: "NIDS/NIPS: ネットワーク型。HIDS/HIPS: ホスト型。シグネチャ検知（既知攻撃）とアノマリ検知（異常行動）。" },
            { question: "IPsec", answer: "AH (認証ヘッダ): 認証のみ。ESP (暗号ペイロード): 暗号化+認証。IKE: 鍵交換。", supplement: "トランスポートモード: エンドツーエンド。トンネルモード: GW間（VPN）。SA (Security Association) で通信パラメータ合意。" },
            { question: "TLS (Transport Layer Security)", answer: "TLSハンドシェイク: ClientHello→ServerHello→証明書交換→鍵交換→暗号化通信開始。", supplement: "TLS 1.3: 1-RTTハンドシェイク（高速化）、前方秘匿性 (PFS) 必須。証明書: X.509。" },
            { question: "802.1X認証", answer: "サプリカント（端末）→オーセンティケータ（スイッチ/AP）→認証サーバ（RADIUS）の3者構成。", supplement: "EAP (Extensible Authentication Protocol): EAP-TLS, PEAP等。ポートベースのネットワークアクセス制御。" },
            { question: "ネットワーク攻撃手法", answer: "ARPスプーフィング、DNSキャッシュポイズニング、DDoS、中間者攻撃 (MitM)、ポートスキャン", supplement: "対策: DNSSEC (DNS応答の署名検証)、DAI (Dynamic ARP Inspection)、レートリミット、IPS。" }
        ]
    },
    {
        id: "network_design",
        name: "ネットワーク設計・運用",
        icon: "📐",
        color: "#A29BFE",
        items: [
            { question: "冗長化設計", answer: "VRRP/HSRP: デフォルトGWの冗長化。マルチホーミング: ISP接続の冗長化。STP: L2冗長化。", supplement: "VRRP: 仮想IPアドレスを共有。マスタルータ障害時にバックアップが引き継ぐ。" },
            { question: "QoS (Quality of Service)", answer: "優先制御: DiffServ (DSCP値で分類)。帯域制御: ポリシング、シェーピング。キューイング: PQ, WFQ, LLQ。", supplement: "IntServ: フロー単位で保証（RSVPで予約）。DiffServ: クラス単位でベストエフォート改善。VoIP/動画はEF (Expedited Forwarding)。" },
            { question: "SD-WAN", answer: "ソフトウェアでWANを制御する技術。コントロールプレーンとデータプレーンの分離。", supplement: "ゼロタッチプロビジョニング、アプリケーション識別による経路選択。VPN自動構築。" },
            { question: "SDN (Software-Defined Networking)", answer: "ネットワーク機器の制御をソフトウェアで一元管理。OpenFlowが代表的プロトコル。", supplement: "コントローラ: 集中制御。フローテーブルでパケット処理を定義。ネットワークの仮想化・自動化。" },
            { question: "SNMP / NetFlow / syslog", answer: "SNMP: 機器の監視・管理。NetFlow: トラフィック分析。syslog: ログの集約。", supplement: "SNMP: MIBでOIDを管理。SNMPv3で暗号化・認証。Trap: 機器からの自発的通知。" },
            { question: "無線LAN (IEEE 802.11)", answer: "802.11ac: 5GHz, 最大6.9Gbps。802.11ax (Wi-Fi 6): OFDMA, MU-MIMO。802.11be (Wi-Fi 7)。", supplement: "WPA3: SAE (Simultaneous Authentication of Equals)。ローミング: AP間の移動。チャネルボンディング。" }
        ]
    },
    {
        id: "virtualization_carrier",
        name: "仮想化・キャリアネットワーク",
        icon: "☁️",
        color: "#dfe6e9",
        items: [
            { question: "VXLAN (Virtual Extensible LAN)", answer: "L3ネットワーク上にL2ネットワークをトンネリングする技術。VLAN ID不足（4096個）を解消。", supplement: "VNI (24ビット) で約1600万個のセグメント識別。UDPカプセル化。マルチテナント環境で利用。" },
            { question: "5G ネットワークスライシング", answer: "1つの物理ネットワークを仮想的に分割し、用途（超高速、多数同時接続、低遅延）に応じた品質を提供する技術。", supplement: "eMBB (高速大容量)、mMTC (多数同時接続)、URLLC (超高信頼・低遅延)。" },
            { question: "NFV (Network Functions Virtualization)", answer: "ルータやFW等の専用機器の機能を、汎用サーバ上の仮想マシンとしてソフトウェアで実装する技術。", supplement: "専用ハードウェアからの脱却。コスト削減、柔軟な構成変更。VNF (Virtual Network Function)。" },
            { question: "Wi-Fi 6E / Wi-Fi 7", answer: "6E: 6GHz帯を利用可能。7: 帯域幅320MHz、4096QAM、マルチリンク操作 (MLO) で超高速・低遅延。", supplement: "6GHz帯は混雑が少なく干渉に強い。MLO: 複数の周波数帯を同時に使用して通信。" },
            { question: "ローカル5G", answer: "企業や自治体が自らの敷地内に構築・運用する5Gネットワーク。", supplement: "キャリアのエリア外でも利用可能。セキュリティ、安定性、柔軟性が高い。スマート工場や建設現場で活用。" },
            { question: "MEC (Multi-access Edge Computing)", answer: "モバイルネットワークのエッジ（基地局近く）にサーバを配置し、低遅延処理を実現する技術。", supplement: "自動運転、遠隔手術、AR/VRなど、リアルタイム性が求められるアプリケーションに必須。" }
        ]
    }
];
