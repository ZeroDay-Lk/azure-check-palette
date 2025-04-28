
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Globe, Server, Lock } from 'lucide-react';
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

  return (
    <Card className="mt-8 p-6">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">{t('generalInfo')}</TabsTrigger>
          <TabsTrigger value="ssl">{t('sslCertificate')}</TabsTrigger>
          <TabsTrigger value="security">{t('security')}</TabsTrigger>
          <TabsTrigger value="server">{t('serverInfo')}</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {generalInfo.map((item, index) => (
              <WebCheckCard key={`general-${index}`} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ssl" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sslInfo.map((item, index) => (
              <WebCheckCard key={`ssl-${index}`} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {securityInfo.map((item, index) => (
              <WebCheckCard key={`security-${index}`} {...item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="server" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serverInfo.map((item, index) => (
              <WebCheckCard key={`server-${index}`} {...item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default DataSection;
