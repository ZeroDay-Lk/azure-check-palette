
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WebCheckCard from './WebCheckCard';
import { Shield, Lock, Globe, Code, Server, Calendar } from 'lucide-react';

const ResultsSection = () => {
  // Sample data for demonstration
  const securityResults = [
    {
      title: 'SSL Certificate',
      value: 'Valid',
      description: 'Valid SSL certificate detected, expires in 120 days',
      status: 'good' as const,
      icon: <Lock className="h-4 w-4" />,
      details: [
        'Issued by: Let\'s Encrypt',
        'Valid until: June 28, 2025',
        'Encryption: RSA 2048-bit',
        'Certificate is properly configured'
      ]
    },
    {
      title: 'HTTPS Redirect',
      value: true,
      description: 'All traffic is redirected to HTTPS',
      status: 'good' as const,
      icon: <Shield className="h-4 w-4" />,
      details: [
        'Status code: 301',
        'HTTP to HTTPS redirection confirmed',
        'HSTS header detected',
        'Preload status: Enabled'
      ]
    }
  ];

  const serverResults = [
    {
      title: 'Server Information',
      value: 'Nginx',
      description: 'Running Nginx 1.20.1 on Ubuntu',
      status: 'info' as const,
      icon: <Server className="h-4 w-4" />,
      details: [
        'Server: Nginx 1.20.1',
        'OS: Ubuntu 20.04 LTS',
        'IP: 123.456.789.0',
        'Last updated: 2023-05-15'
      ]
    },
    {
      title: 'DNS Records',
      value: '5',
      description: '5 DNS records found',
      status: 'info' as const,
      icon: <Globe className="h-4 w-4" />,
      details: [
        'A: 123.456.789.0',
        'MX: mail.example.com',
        'TXT: v=spf1 include:_spf.example.com ~all',
        'CNAME: www.example.com'
      ]
    }
  ];

  const techResults = [
    {
      title: 'Technologies',
      value: 'React',
      description: 'React, Tailwind CSS, Node.js',
      status: 'info' as const,
      icon: <Code className="h-4 w-4" />,
      details: [
        'Frontend: React 18.0.0',
        'CSS: Tailwind CSS 3.3.0',
        'Backend: Node.js 16.14.0',
        'Database: MongoDB 5.0.6'
      ]
    },
    {
      title: 'Performance',
      value: '92/100',
      description: 'Lighthouse score: 92/100',
      status: 'good' as const,
      icon: <Calendar className="h-4 w-4" />,
      details: [
        'First Contentful Paint: 0.8s',
        'Time to Interactive: 1.2s',
        'Speed Index: 1.0s',
        'Total Blocking Time: 0.15s'
      ]
    }
  ];

  return (
    <Card className="border border-border p-6 mt-8">
      <Tabs defaultValue="security" className="w-full">
        <TabsList className="mb-6 bg-muted">
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="server">Server</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="all">All Results</TabsTrigger>
        </TabsList>
        
        <TabsContent value="security" className="mt-0">
          <div className="results-grid">
            {securityResults.map((result, index) => (
              <WebCheckCard key={`security-${index}`} {...result} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="server" className="mt-0">
          <div className="results-grid">
            {serverResults.map((result, index) => (
              <WebCheckCard key={`server-${index}`} {...result} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="technology" className="mt-0">
          <div className="results-grid">
            {techResults.map((result, index) => (
              <WebCheckCard key={`tech-${index}`} {...result} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="all" className="mt-0">
          <div className="results-grid">
            {[...securityResults, ...serverResults, ...techResults].map((result, index) => (
              <WebCheckCard key={`all-${index}`} {...result} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ResultsSection;
