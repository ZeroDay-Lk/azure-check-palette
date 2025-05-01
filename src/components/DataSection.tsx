
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Shield, Globe, Server, Lock, Code, Database, Cookie, Tag, Archive, ExternalLink, Check, XCircle } from 'lucide-react';
import WebCheckCard from './WebCheckCard';

const DataSection = () => {
  const { t } = useTranslation();

  const generalInfo = [
    {
      title: t('location'),
      value: 'M4M, Toronto, Ontario, Canada',
      icon: <Globe className="h-4 w-4" />,
      status: 'info' as const,
      details: ['緯度: 43.6561', '経度: -79.3486']
    },
    {
      title: t('country'),
      value: 'Canada',
      status: 'info' as const,
      details: ['国コード: CA', '地域: 北米']
    },
    {
      title: t('timezone'),
      value: 'America/Toronto',
      status: 'info' as const,
      details: ['UTC-05:00', 'DST: はい']
    },
    {
      title: t('languages'),
      value: 'en-CA, fr-CA, iu',
      status: 'info' as const,
      details: ['英語 (カナダ)', 'フランス語 (カナダ)', 'イヌクティトゥット語']
    },
    {
      title: t('currency'),
      value: 'Dollar (CAD)',
      status: 'info' as const,
      details: ['記号: $', '為替レート: 1 CAD = 0.74 USD']
    },
    {
      title: t('coordinates'),
      value: 'Lat: 43.6561, Long: -79.3486',
      status: 'info' as const,
      details: ['UTM: 17T 630084 4833438']
    }
  ];

  const sslInfo = [
    {
      title: t('subject'),
      value: 'elvescore.jp',
      icon: <Lock className="h-4 w-4" />,
      status: 'good' as const,
      details: ['Common Name: elvescore.jp', 'Alt Names: www.elvescore.jp, app.elvescore.jp']
    },
    {
      title: t('issuer'),
      value: 'Google Trust Services',
      status: 'info' as const,
      details: ['Organization: Google Trust Services LLC', 'Country: US']
    },
    {
      title: t('algorithm'),
      value: 'ANSI prime256v1 (NIST P-256)',
      status: 'info' as const,
      details: ['セキュリティ強度: 128-bit', 'SHA-256ハッシュ']
    },
    {
      title: t('expires'),
      value: '28 June 2025',
      status: 'info' as const,
      details: ['残り有効期間: 341日']
    },
    {
      title: t('renewed'),
      value: '30 March 2025',
      status: 'info' as const,
      details: ['最終更新: 61日前']
    },
    {
      title: t('fingerprint'),
      value: '32:39:25:8A:70:D7:1D',
      status: 'info' as const,
      details: ['SHA-1: 32:39:25:8A:70:D7:1D:34:CA:B2:11:7D:3F:B0:19:54:26:32:F1:9A']
    }
  ];

  const serverInfo = [
    {
      title: t('status'),
      value: true,
      icon: <Server className="h-4 w-4" />,
      description: t('online'),
      status: 'good' as const,
      details: ['HTTP ステータス: 200 OK', 'アップタイム: 99.98%']
    },
    {
      title: t('responseTime'),
      value: '565ms',
      status: 'info' as const,
      details: ['TTFB: 320ms', 'DNS解決: 35ms', 'TLS ハンドシェイク: 210ms']
    },
    {
      title: t('openPorts'),
      value: '80, 443, 8080',
      status: 'info' as const,
      details: ['80: HTTP', '443: HTTPS', '8080: 代替HTTP']
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
        '多くのセキュリティポートがクローズされています'
      ]
    }
  ];

  const securityInfo = [
    {
      title: 'Content Security Policy',
      value: false,
      icon: <Shield className="h-4 w-4" />,
      description: t('no'),
      status: 'warning' as const,
      details: ['CSPヘッダーが見つかりません', 'XSSの脆弱性のリスクが高まります']
    },
    {
      title: 'HTTP Security Headers',
      value: false,
      description: t('no'),
      status: 'warning' as const,
      details: [
        'Strict-Transport-Security: いいえ',
        'X-Content-Type-Options: いいえ',
        'X-Frame-Options: いいえ',
        'X-XSS-Protection: いいえ'
      ]
    },
    {
      title: t('phishingStatus'),
      value: true,
      description: t('noThreatsFound'),
      status: 'good' as const,
      details: ['Safe Browsing: クリア', 'PhishTank: クリア', 'OpenPhish: クリア']
    },
    {
      title: t('malwareStatus'),
      value: true,
      description: t('noThreatsFound'),
      status: 'good' as const,
      details: ['VirusTotal: クリア', 'Malwaredomains: クリア']
    },
    {
      title: 'Firewall',
      value: true,
      description: 'Cloudflare WAF',
      status: 'good' as const,
      details: ['DDoS保護: 有効', 'ボット対策: 有効', 'レート制限: 有効']
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
        '104.21.16.1'
      ]
    },
    {
      title: 'AAAA Records',
      value: '2606:4700:3030::68',
      status: 'info' as const,
      details: ['2606:4700:3030::68', 'IPv6互換']
    },
    {
      title: 'NS Records',
      value: 'gene.ns.cloudflare, aaden.ns.cloudflare',
      status: 'info' as const,
      details: ['gene.ns.cloudflare.com', 'aaden.ns.cloudflare.com']
    },
    {
      title: 'MX Records',
      value: 'aspmx.l.google.com',
      status: 'info' as const,
      details: [
        'aspmx.l.google.com (優先度: 1)',
        'alt1.aspmx.l.google.com (優先度: 5)',
        'alt2.aspmx.l.google.com (優先度: 5)'
      ]
    }
  ];

  const headers = [
    {
      title: 'Content-Type',
      value: 'text/html; charset=utf-8',
      icon: <Code className="h-4 w-4" />,
      status: 'info' as const,
      details: ['MIME タイプ: text/html', 'エンコーディング: UTF-8']
    },
    {
      title: 'Transfer-Encoding',
      value: 'chunked',
      status: 'info' as const,
      details: ['データ転送方法: チャンク単位']
    },
    {
      title: 'Connection',
      value: 'keep-alive',
      status: 'info' as const,
      details: ['タイムアウト: 120s', '最大リクエスト数: 100']
    },
    {
      title: 'X-Powered-By',
      value: 'Next.js',
      status: 'info' as const,
      details: ['フレームワーク: Next.js', 'バージョン: 14.0.3']
    },
    {
      title: 'Cache-Control',
      value: 'private, no-cache...',
      status: 'info' as const,
      details: ['private', 'no-cache', 'no-store', 'must-revalidate']
    },
    {
      title: 'Server',
      value: 'Cloudflare',
      status: 'info' as const,
      details: ['CDNプロバイダ: Cloudflare', 'エッジロケーション: 多数']
    }
  ];

  const cookies = [
    {
      title: 'NEXT_LOCALE',
      value: 'en',
      icon: <Cookie className="h-4 w-4" />,
      status: 'info' as const,
      details: ['目的: 言語設定', '有効期限: セッション']
    },
    {
      title: 'cf_bm',
      value: 'ZHNW_8xohgCCrmlUm...',
      status: 'info' as const,
      details: ['目的: ボット対策', '有効期限: 30分', 'HTTPOnly: はい', 'セキュア: はい']
    },
    {
      title: '_ga',
      value: 'GA1.2.1234567890.1234567890',
      status: 'info' as const,
      details: ['目的: アナリティクス', '有効期限: 2年', 'HTTPOnly: いいえ']
    }
  ];

  const socialTags = [
    {
      title: 'Title',
      value: 'Elves Core',
      icon: <Tag className="h-4 w-4" />,
      status: 'info' as const,
      details: ['OGタイトル: Elves Core - ウェブセキュリティ']
    },
    {
      title: 'Description',
      value: 'A Global Team of ...',
      status: 'info' as const,
      details: ['メタ説明: A Global Team of Security Researchers and Penetration Testers']
    },
    {
      title: 'Twitter Card',
      value: 'summary_large_image',
      status: 'info' as const,
      details: ['Twitter:site: @elvescore', 'Twitter:creator: @elvestech']
    }
  ];

  const archiveHistory = [
    {
      title: 'First Scan',
      value: '23 February 2024',
      icon: <Archive className="h-4 w-4" />,
      status: 'info' as const,
      details: ['初回スキャン時間: 14:23:45 UTC']
    },
    {
      title: 'Last Scan',
      value: '20 February 2025',
      status: 'info' as const,
      details: ['最終スキャン時間: 09:12:37 UTC']
    },
    {
      title: 'Total Scans',
      value: '32',
      status: 'info' as const,
      details: ['毎週のスキャン: はい', '自動スキャン: はい']
    },
    {
      title: 'Change Count',
      value: '30',
      status: 'info' as const,
      details: ['主要な変更: 12', '軽微な変更: 18']
    },
    {
      title: 'Avg Size',
      value: '27458 bytes',
      status: 'info' as const,
      details: ['最大サイズ: 31204 bytes', '最小サイズ: 24102 bytes']
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
        'https://elvescore.jp → https://www.elvescore.jp'
      ]
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
        'Quad9: ブロックされていません'
      ]
    }
  ];

  const carbonFootprint = [
    {
      title: t('initialSize'),
      value: '2.265 bytes',
      status: 'info' as const,
      details: ['圧縮後: 1.837 bytes', 'images: 540KB']
    },
    {
      title: t('co2Load'),
      value: '0.0007552 grams',
      status: 'info' as const,
      details: ['年間CO2排出量: 2.76 kg (推定10,000訪問者)']
    },
    {
      title: t('energyUsage'),
      value: '0.000001709 KMg',
      status: 'info' as const,
      details: ['データセンター: グリーン電力 80%', 'CDN: 炭素中立']
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
          <Cookie className="h-5 w-5 text-primary" />
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
          <Tag className="h-5 w-5 text-primary" />
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
          <Archive className="h-5 w-5 text-primary" />
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
          <ExternalLink className="h-5 w-5 text-primary" />
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
          <ExternalLink className="h-5 w-5 text-primary" />
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
