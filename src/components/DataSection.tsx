import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Shield, Globe, Server, Lock, Code, Database, Cookie, Tag, Archive, ExternalLink } from 'lucide-react';
import WebCheckCard from './WebCheckCard';
import SecurityScoreChart from './SecurityScoreChart';

const DataSection = () => {
  const { t } = useTranslation();

  const generalInfo = [
    {
      title: t('location'),
      value: 'M4M, トロント, オンタリオ, カナダ',
      icon: <Globe className="h-4 w-4" />,
      status: 'info' as const,
      details: [
        '緯度: 43.6561', 
        '経度: -79.3486', 
        '地区コード: +1-416',
        'インターネットTLD: .ca'
      ]
    },
    {
      title: t('country'),
      value: 'カナダ',
      status: 'info' as const,
      details: [
        '国コード: CA', 
        '地域: 北米', 
        '人口: 3,810万人（2021年）',
        '首都: オタワ'
      ]
    },
    {
      title: t('timezone'),
      value: 'America/Toronto',
      status: 'info' as const,
      details: [
        'UTC-05:00', 
        'DST: はい', 
        '標準時: 東部標準時（EST）',
        '夏時間: 東部夏時間（EDT）'
      ]
    },
    {
      title: t('languages'),
      value: 'en-CA, fr-CA, iu',
      status: 'info' as const,
      details: [
        '英語 (カナダ)', 
        'フランス語 (カナダ)', 
        'イヌクティトゥット語',
        'カナダの公用語: 英語・フランス語'
      ]
    },
    {
      title: t('currency'),
      value: 'カナダドル (CAD)',
      status: 'info' as const,
      details: [
        '記号: $', 
        '為替レート: 1 CAD = 0.74 USD',
        'コイン: 5¢, 10¢, 25¢, $1, $2',
        '紙幣: $5, $10, $20, $50, $100'
      ]
    },
    {
      title: t('coordinates'),
      value: 'Lat: 43.6561, Long: -79.3486',
      status: 'info' as const,
      details: [
        'UTM: 17T 630084 4833438',
        'MGRS: 17T NJ 3008 3343',
        'DMS: 43° 39′ 22″ N, 79° 20′ 55″ W',
        '地理的位置: 五大湖地域'
      ]
    }
  ];

  const sslInfo = [
    {
      title: t('subject'),
      value: 'elvescore.jp',
      icon: <Lock className="h-4 w-4" />,
      status: 'good' as const,
      details: [
        'Common Name: elvescore.jp', 
        'Alt Names: www.elvescore.jp, app.elvescore.jp',
        'Organization: Elves Technology Inc.',
        'Organizational Unit: Web Security Division'
      ]
    },
    {
      title: t('issuer'),
      value: 'Google Trust Services',
      status: 'info' as const,
      details: [
        'Organization: Google Trust Services LLC', 
        'Country: US',
        'CA: Google Internet Authority G3',
        '証明書の種類: DV (Domain Validation)'
      ]
    },
    {
      title: t('algorithm'),
      value: 'ANSI prime256v1 (NIST P-256)',
      status: 'info' as const,
      details: [
        'セキュリティ強度: 128-bit', 
        'SHA-256ハッシュ',
        '鍵長: 256ビット',
        '暗号化スイート: ECDHE-ECDSA-AES128-GCM-SHA256'
      ]
    },
    {
      title: t('expires'),
      value: '28 June 2025',
      status: 'info' as const,
      details: [
        '残り有効期間: 341日',
        '発行日: 30 March 2023',
        '総有効期間: 365日',
        '自動更新設定: 有効'
      ]
    },
    {
      title: t('renewed'),
      value: '30 March 2025',
      status: 'info' as const,
      details: [
        '最終更新: 61日前',
        '更新方法: 自動',
        '次回予定更新日: 28 February 2026',
        '発行元同一: はい'
      ]
    },
    {
      title: t('fingerprint'),
      value: '32:39:25:8A:70:D7:1D',
      status: 'info' as const,
      details: [
        'SHA-1: 32:39:25:8A:70:D7:1D:34:CA:B2:11:7D:3F:B0:19:54:26:32:F1:9A',
        'SHA-256: E5:F5:62:C0:6D:B1:29:95:C8:3E:08:D3:0B:C7:F8:19:54:A4:6E:7D',
        'MD5: 88:77:F2:3A:B8:04:08:62:11:45:8C:23',
        'Serial: 323925:8A70:D71D:34CA:B211:7D3F'
      ]
    }
  ];

  const serverInfo = [
    {
      title: t('status'),
      value: true,
      icon: <Server className="h-4 w-4" />,
      description: t('online'),
      status: 'good' as const,
      details: [
        'HTTP ステータス: 200 OK', 
        'アップタイム: 99.98%',
        '直近の停止: 2025-04-15 (2時間)',
        '監視システム: Pingdom, Uptime Robot'
      ]
    },
    {
      title: t('responseTime'),
      value: '565ms',
      status: 'info' as const,
      details: [
        'TTFB: 320ms', 
        'DNS解決: 35ms', 
        'TLS ハンドシェイク: 210ms',
        'コンテンツダウンロード: 425ms'
      ]
    },
    {
      title: t('openPorts'),
      value: '80, 443, 8080',
      status: 'info' as const,
      details: [
        '80: HTTP', 
        '443: HTTPS', 
        '8080: 代替HTTP',
        '3000: 開発環境'
      ]
    },
    {
      title: t('closedPorts'),
      value: '20, 21, 22, 23, 25...',
      status: 'info' as const,
      details: [
        '20: FTP-データ, 21: FTP-コントロール', 
        '22: SSH, 23: Telnet, 25: SMTP',
        '53: DNS, 67-68: DHCP', 
        '110: POP3, 119: NNTP, 123: NTP',
        '143: IMAP, 156: SQL, 161-162: SNMP',
        '179: BGP, 389: LDAP, 587: SMTP Submission',
        '993: IMAPS, 995: POP3S, 3306: MySQL',
        '3389: RDP, 5060: SIP, 5900: VNC',
        '8000, 8888: 代替Webサーバー'
      ],
      isExpanded: true
    }
  ];

  const securityInfo = [
    {
      title: 'Content Security Policy',
      value: false,
      icon: <Shield className="h-4 w-4" />,
      description: t('no'),
      status: 'warning' as const,
      isHighlighted: true,
      details: [
        'CSPヘッダーが見つかりません', 
        'XSSの脆弱性のリスクが高まります',
        '推奨設定: default-src \'self\'; script-src \'self\'',
        'セキュリティ評価: 中リスク'
      ]
    },
    {
      title: 'HTTP Security Headers',
      value: false,
      description: t('no'),
      status: 'warning' as const,
      isHighlighted: true,
      details: [
        'Strict-Transport-Security: いいえ',
        'X-Content-Type-Options: いいえ',
        'X-Frame-Options: いいえ',
        'X-XSS-Protection: いいえ',
        '推奨: すべてのセキュリティヘッダーを実装する',
        'Content-Security-Policy-Report-Only: 段階的に導入可能',
        'Referrer-Policy: 未設定',
        'Permissions-Policy: 未設定'
      ],
      isExpanded: true
    },
    {
      title: t('phishingStatus'),
      value: true,
      description: t('noThreatsFound'),
      status: 'good' as const,
      details: [
        'Safe Browsing: クリア', 
        'PhishTank: クリア', 
        'OpenPhish: クリア',
        'APWG: 登録なし'
      ]
    },
    {
      title: t('malwareStatus'),
      value: true,
      description: t('noThreatsFound'),
      status: 'good' as const,
      details: [
        'VirusTotal: クリア', 
        'Malwaredomains: クリア',
        'MalwareBytes: クリア',
        'Google Safe Browsing: クリア'
      ]
    },
    {
      title: 'Firewall',
      value: true,
      description: 'Cloudflare WAF',
      status: 'good' as const,
      isHighlighted: true,
      details: [
        'DDoS保護: 有効', 
        'ボット対策: 有効', 
        'レート制限: 有効',
        'ファイアウォールルール: 75個適用中',
        'ブロックされた攻撃: 4,382件（過去30日間）',
        '地理的制限: 特定の国からのトラフィックをブロック',
        'IPレピュテーション: 有効'
      ],
      isExpanded: true
    }
  ];

  const dnsRecords = [
    {
      title: 'A Records',
      value: '104.21.96.1, 104.21.112.1...',
      icon: <Database className="h-4 w-4" />,
      status: 'info' as const,
      details: [
        '104.21.96.1',
        '104.21.112.1',
        '104.21.80.1',
        '104.21.48.1',
        '104.21.64.1',
        '104.21.52.1',
        '104.21.16.1',
        'TTL: 300秒',
        'ロードバランシング: あり（Cloudflare）',
        'Anycastネットワーク: はい',
        'レコード追加日: 2023-06-18'
      ],
      isExpanded: true
    },
    {
      title: 'AAAA Records',
      value: '2606:4700:3030::68',
      status: 'info' as const,
      details: [
        '2606:4700:3030::68', 
        'IPv6互換',
        'TTL: 300秒',
        'プロトコル: IPv6'
      ]
    },
    {
      title: 'NS Records',
      value: 'gene.ns.cloudflare, aaden.ns.cloudflare',
      status: 'info' as const,
      details: [
        'gene.ns.cloudflare.com', 
        'aaden.ns.cloudflare.com',
        'TTL: 86400秒',
        'セカンダリDNS: なし'
      ]
    },
    {
      title: 'MX Records',
      value: 'aspmx.l.google.com',
      status: 'info' as const,
      details: [
        'aspmx.l.google.com (優先度: 1)',
        'alt1.aspmx.l.google.com (優先度: 5)',
        'alt2.aspmx.l.google.com (優先度: 5)',
        'TTL: 3600秒',
        'SPFレコード: v=spf1 include:_spf.google.com ~all',
        'DMARCレコード: v=DMARC1; p=none',
        'メールサービス: Google Workspace'
      ]
    }
  ];

  const headers = [
    {
      title: 'Content-Type',
      value: 'text/html; charset=utf-8',
      icon: <Code className="h-4 w-4" />,
      status: 'info' as const,
      details: [
        'MIME タイプ: text/html', 
        'エンコーディング: UTF-8',
        '言語設定: ja-JP',
        'コンテンツ言語: 日本語'
      ]
    },
    {
      title: 'Transfer-Encoding',
      value: 'chunked',
      status: 'info' as const,
      details: [
        'データ転送方法: チャンク単位',
        '圧縮: gzip',
        '効率: 高',
        'HTTP/2: サポート'
      ]
    },
    {
      title: 'Connection',
      value: 'keep-alive',
      status: 'info' as const,
      details: [
        'タイムアウト: 120s', 
        '最大リクエスト数: 100',
        '接続タイプ: 持続的',
        'アイドルタイムアウト: 60秒'
      ]
    },
    {
      title: 'X-Powered-By',
      value: 'Next.js',
      status: 'info' as const,
      details: [
        'フレームワーク: Next.js', 
        'バージョン: 14.0.3',
        'ランタイム: Node.js 20.9.0',
        'ホスティング: Vercel'
      ]
    },
    {
      title: 'Cache-Control',
      value: 'private, no-cache...',
      status: 'info' as const,
      details: [
        'private', 
        'no-cache', 
        'no-store', 
        'must-revalidate',
        'max-age: 0',
        'Surrogate-Control: max-age=3600',
        'Pragma: no-cache'
      ]
    },
    {
      title: 'Server',
      value: 'Cloudflare',
      status: 'info' as const,
      details: [
        'CDNプロバイダ: Cloudflare', 
        'エッジロケーション: 多数',
        'キャッシュ設定: アグレッシブ',
        'PoP（接続ポイント）: 275以上'
      ]
    }
  ];

  const cookies = [
    {
      title: 'NEXT_LOCALE',
      value: 'en',
      icon: <Cookie className="h-4 w-4" />,
      status: 'info' as const,
      details: [
        '目的: 言語設定', 
        '有効期限: セッション',
        'HTTPOnly: はい',
        'SameSite: Lax'
      ]
    },
    {
      title: 'cf_bm',
      value: 'ZHNW_8xohgCCrmlUm...',
      status: 'info' as const,
      details: [
        '��的: ボット対策', 
        '有効期限: 30分', 
        'HTTPOnly: はい', 
        'セキュア: はい',
        'ドメイン: .elvescore.jp',
        'SameSite: None'
      ]
    },
    {
      title: '_ga',
      value: 'GA1.2.1234567890.1234567890',
      status: 'info' as const,
      details: [
        '目的: アナリティクス', 
        '有効期限: 2年', 
        'HTTPOnly: いいえ',
        'サードパーティ: Google Analytics',
        'GDPR対応: はい',
        'オプトアウト可能: はい'
      ]
    }
  ];

  const socialTags = [
    {
      title: 'Title',
      value: 'Elves Core',
      icon: <Tag className="h-4 w-4" />,
      status: 'info' as const,
      details: [
        'OGタイトル: Elves Core - ウェブセキュリティ',
        'Twitterタイトル: Elves Core | Web Security',
        'HTML Title: Elves Core - Professional Security Services',
        'ブランディング: 一貫性あり'
      ]
    },
    {
      title: 'Description',
      value: 'A Global Team of ...',
      status: 'info' as const,
      details: [
        'メタ説明: A Global Team of Security Researchers and Penetration Testers',
        'OG説明: 世界中のセキュリティ研究者と侵入テスターのグローバルチーム',
        'Twitter説明: セキュリティを専門とするプロフェッショナルチーム',
        '文字数: 78文字（最適: 50-160文字）'
      ]
    },
    {
      title: 'Twitter Card',
      value: 'summary_large_image',
      status: 'info' as const,
      details: [
        'Twitter:site: @elvescore', 
        'Twitter:creator: @elvestech',
        'カードタイプ: summary_large_image',
        'イメージサイズ: 1200x630px'
      ]
    }
  ];

  const archiveHistory = [
    {
      title: 'First Scan',
      value: '23 February 2024',
      icon: <Archive className="h-4 w-4" />,
      status: 'info' as const,
      details: [
        '初回スキャン時間: 14:23:45 UTC',
        'スキャンツール: Web Archive Bot',
        'キャプチャの種類: フルページ',
        '初回サイズ: 1.8MB'
      ]
    },
    {
      title: 'Last Scan',
      value: '20 February 2025',
      status: 'info' as const,
      details: [
        '最終スキャン時間: 09:12:37 UTC',
        '前回からの変更: あり（中程度）',
        'キャプチャ結果: 完全',
        '保存URL数: 127'
      ]
    },
    {
      title: 'Total Scans',
      value: '32',
      status: 'info' as const,
      details: [
        '毎週のスキャン: はい', 
        '自動スキャン: はい',
        '手動スキャン: 5回',
        '平均スキャン間隔: 11.33日'
      ]
    },
    {
      title: 'Change Count',
      value: '30',
      status: 'info' as const,
      details: [
        '主要な変更: 12', 
        '軽微な変更: 18',
        '最大の変更: 2024年10月（サイトリニューアル）',
        '変更頻度: 毎月平均2.5回'
      ]
    },
    {
      title: 'Avg Size',
      value: '27458 bytes',
      status: 'info' as const,
      details: [
        '最大サイズ: 31204 bytes', 
        '最小サイズ: 24102 bytes',
        '初期サイズからの成長: 34%',
        '圧縮効率: 62%'
      ]
    }
  ];

  const redirects = [
    {
      title: 'Redirect Count',
      value: '2',
      icon: <ExternalLink className="h-4 w-4" />,
      status: 'info' as const,
      details: [
        'http://elvescore.jp → https://elvescore.jp', 
        'https://elvescore.jp → https://www.elvescore.jp',
        'リダイレクトタイプ: 301（恒久的）',
        'リダイレクト遅延: 0.2秒',
        'リダイレクトチェーン: 正常',
        'リダイレクトループ: なし',
        'HTTPS強制: はい'
      ],
      isExpanded: true
    }
  ];

  const threats = [
    {
      title: 'Block Lists',
      value: '0/12',
      icon: <Shield className="h-4 w-4" />,
      status: 'good' as const,
      details: [
        'AdGuard: ブロックされていません',
        'CleanBrowsing: ブロックされていません',
        'Cloudflare: ブロックされていません',
        'Google DNS: ブロックされていません',
        'OpenDNS: ブロックされていません',
        'Quad9: ブロックされていません',
        'Spamhaus: ブロックされていません',
        'SURBL: ブロックされていません',
        'URIBL: ブロックされていません',
        'Barracuda: ブロックされていません',
        'Sophos: ブロックされていません',
        'McAfee: ブロックされていません'
      ],
      isExpanded: true
    }
  ];

  const carbonFootprint = [
    {
      title: t('initialSize'),
      value: '2.265 bytes',
      status: 'info' as const,
      details: [
        '圧縮後: 1.837 bytes', 
        'images: 540KB',
        '合計転送量: 782KB',
        'モバイルロード時間: 1.8秒'
      ]
    },
    {
      title: t('co2Load'),
      value: '0.0007552 grams',
      status: 'info' as const,
      details: [
        '年間CO2排出量: 2.76 kg (推定10,000訪問者)',
        '同等排出量: お茶1杯を作るのと同じ（100回の訪問）',
        'カーボンオフセット: はい',
        '環境効率改善の余地: 15%'
      ]
    },
    {
      title: t('energyUsage'),
      value: '0.000001709 KMg',
      status: 'info' as const,
      details: [
        'データセンター: グリーン電力 80%', 
        'CDN: 炭素中立',
        '再生可能エネルギーの使用: はい',
        'グリーンホスティング認証: あり'
      ]
    }
  ];

  const externalTools = [
    {
      title: 'VirusTotal',
      value: 'virustotal.com',
      icon: <ExternalLink className="h-4 w-4" />,
      status: 'info' as const
    },
    {
      title: 'Archive',
      value: 'archive.org',
      status: 'info' as const
    },
    {
      title: 'Sucuri SiteCheck',
      value: 'sitecheck.sucuri.net',
      status: 'info' as const
    },
    {
      title: 'SSL Labs Test',
      value: 'ssl.labs.com',
      status: 'info' as const
    },
    {
      title: 'Shodan',
      value: 'shodan.io',
      status: 'info' as const
    },
    {
      title: 'URLScan',
      value: 'urlscan.io',
      status: 'info' as const
    }
  ];

  const matrixInfo = [
    {
      title: 'セキュリティスコア',
      value: '78/100',
      icon: <Shield className="h-4 w-4" />,
      status: 'warning' as const,
      isHighlighted: true,
      details: [
        'SSL/TLS: 90/100',
        'HTTPヘッダー: 60/100',
        'コンテンツセキュリティ: 75/100',
        'サーバー構成: 85/100',
        '脆弱性: なし検出',
        '改善推奨: HTTPセキュリティヘッダーの実装',
        'CSPポリシーの追加が必要'
      ],
      isExpanded: true,
      customContent: <SecurityScoreChart score={78} />
    }
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-6">
      {/* General Information Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          {t('generalInfo')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {generalInfo.map((item, index) => (
            <WebCheckCard key={`general-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Matrix Score Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          {t('securityMatrix')}
        </h2>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
          <div className="flex justify-center items-center py-4">
            <SecurityScoreChart score={78} />
          </div>
          {matrixInfo.map((item, index) => (
            <WebCheckCard key={`matrix-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* SSL Certificate Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          {t('sslCertificate')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sslInfo.map((item, index) => (
            <WebCheckCard key={`ssl-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Headers Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          {t('headers')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {headers.map((item, index) => (
            <WebCheckCard key={`headers-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* DNS Records Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          {t('dnsRecords')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dnsRecords.map((item, index) => (
            <WebCheckCard key={`dns-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Security Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          {t('security')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {securityInfo.map((item, index) => (
            <WebCheckCard key={`security-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Server Info Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Server className="h-5 w-5 text-primary" />
          {t('serverInfo')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serverInfo.map((item, index) => (
            <WebCheckCard key={`server-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Cookies Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Cookie className="h-4 w-4 text-primary" />
          {t('cookies')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cookies.map((item, index) => (
            <WebCheckCard key={`cookies-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Social Tags Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Tag className="h-4 w-4 text-primary" />
          {t('socialTags')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {socialTags.map((item, index) => (
            <WebCheckCard key={`social-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Archive History Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Archive className="h-4 w-4 text-primary" />
          {t('archiveHistory')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {archiveHistory.map((item, index) => (
            <WebCheckCard key={`archive-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Redirects Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="h-4 w-4 text-primary" />
          {t('redirects')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {redirects.map((item, index) => (
            <WebCheckCard key={`redirects-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Threats Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          {t('threats')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {threats.map((item, index) => (
            <WebCheckCard key={`threats-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* Carbon Footprint Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          {t('carbonFootprint')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {carbonFootprint.map((item, index) => (
            <WebCheckCard key={`carbon-${index}`} {...item} />
          ))}
        </div>
      </Card>

      {/* External Tools Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ExternalLink className="h-4 w-4 text-primary" />
          {t('externalTools')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {externalTools.map((item, index) => (
            <WebCheckCard key={`tools-${index}`} {...item} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DataSection;
