
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Shield, Globe, Server, Lock, Code, Database } from 'lucide-react';
import WebCheckCard from './WebCheckCard';

const DataSection = () => {
  const { t } = useTranslation();

  const generalInfo = [
    {
      title: t('location'),
      value: 'M4M, Toronto, Ontario, Canada',
      icon: <Globe className="h-4 w-4" />,
      status: 'info' as const
    },
    {
      title: t('country'),
      value: 'Canada',
      status: 'info' as const
    },
    {
      title: t('timezone'),
      value: 'America/Toronto',
      status: 'info' as const
    },
    {
      title: t('languages'),
      value: 'en-CA, fr-CA, iu',
      status: 'info' as const
    },
    {
      title: t('currency'),
      value: 'Dollar (CAD)',
      status: 'info' as const
    },
    {
      title: t('coordinates'),
      value: 'Lat: 43.6561, Long: -79.3486',
      status: 'info' as const
    }
  ];

  const sslInfo = [
    {
      title: t('subject'),
      value: 'elvescore.jp',
      icon: <Lock className="h-4 w-4" />,
      status: 'good' as const
    },
    {
      title: t('issuer'),
      value: 'Google Trust Services',
      status: 'info' as const
    },
    {
      title: t('algorithm'),
      value: 'ANSI prime256v1 (NIST P-256)',
      status: 'info' as const
    },
    {
      title: t('expires'),
      value: '28 June 2025',
      status: 'info' as const
    },
    {
      title: t('renewed'),
      value: '30 March 2025',
      status: 'info' as const
    },
    {
      title: t('fingerprint'),
      value: '32:39:25:8A:70:D7:1D',
      status: 'info' as const
    }
  ];

  const serverInfo = [
    {
      title: t('status'),
      value: true,
      icon: <Server className="h-4 w-4" />,
      description: t('online'),
      status: 'good' as const
    },
    {
      title: t('responseTime'),
      value: '565ms',
      status: 'info' as const
    },
    {
      title: t('openPorts'),
      value: '80, 443, 8080',
      status: 'info' as const
    }
  ];

  const securityInfo = [
    {
      title: 'Content Security Policy',
      value: false,
      icon: <Shield className="h-4 w-4" />,
      description: t('no'),
      status: 'warning' as const
    },
    {
      title: t('phishingStatus'),
      value: true,
      description: t('noThreatsFound'),
      status: 'good' as const
    },
    {
      title: t('malwareStatus'),
      value: true,
      description: t('noThreatsFound'),
      status: 'good' as const
    }
  ];

  const dnsRecords = [
    {
      title: 'A Records',
      value: '104.21.112.1, 104.21.96.1',
      icon: <Database className="h-4 w-4" />,
      status: 'info' as const
    },
    {
      title: 'AAAA Records',
      value: '2606:4700:3030::68',
      status: 'info' as const
    },
    {
      title: 'NS Records',
      value: 'gene.ns.cloudflare, aaden.ns.cloudflare',
      status: 'info' as const
    }
  ];

  const headers = [
    {
      title: 'Content-Type',
      value: '1 August 2001',
      icon: <Code className="h-4 w-4" />,
      status: 'info' as const
    },
    {
      title: 'Transfer-Encoding',
      value: 'chunked',
      status: 'info' as const
    },
    {
      title: 'Connection',
      value: 'keep-alive',
      status: 'info' as const
    },
    {
      title: 'X-Powered-By',
      value: 'Next.js',
      status: 'info' as const
    }
  ];

  const carbonFootprint = [
    {
      title: t('initialSize'),
      value: '2.265 bytes',
      status: 'info' as const
    },
    {
      title: t('co2Load'),
      value: '0.0007552 grams',
      status: 'info' as const
    },
    {
      title: t('energyUsage'),
      value: '0.000001709 KMg',
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
    </div>
  );
};

export default DataSection;
