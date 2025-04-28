
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shield, Globe, Server, Lock, AlertTriangle } from 'lucide-react';

const DataCard = ({ 
  title, 
  icon, 
  children 
}: { 
  title: string; 
  icon: React.ReactNode; 
  children: React.ReactNode;
}) => (
  <Card className="h-full overflow-hidden">
    <CardHeader className="pb-3">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="p-4 pt-0">
      {children}
    </CardContent>
  </Card>
);

const DataTable = ({ rows }: { rows: { label: string; value: string | React.ReactNode }[] }) => (
  <Table>
    <TableBody>
      {rows.map((row, i) => (
        <TableRow key={i} className="border-b-0 hover:bg-transparent">
          <TableCell className="py-1 px-0 font-medium text-sm text-muted-foreground">
            {row.label}
          </TableCell>
          <TableCell className="py-1 px-0 text-right text-sm">
            {row.value}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const DataSection = () => {
  return (
    <section className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DataCard title="General Information" icon={<Globe className="h-4 w-4" />}>
          <DataTable rows={[
            { label: "Location", value: "M4M, Toronto, Ontario, Canada" },
            { label: "Timezone", value: "America/Toronto" },
            { label: "Languages", value: "en-CA, fr-CA, iu" },
            { label: "Currency", value: "Dollar (CAD)" },
            { label: "Coordinates", value: "Lat: 43.6561, Long: -79.3486" }
          ]} />
        </DataCard>

        <DataCard title="SSL Certificate" icon={<Lock className="h-4 w-4" />}>
          <DataTable rows={[
            { label: "Subject", value: "elvescore.jp" },
            { label: "Issuer", value: "Google Trust Services" },
            { label: "Algorithm", value: "ANSI prime256v1 (NIST P-256)" },
            { label: "Expires", value: "28 June 2025" },
            { label: "Renewed", value: "30 March 2025" },
            { label: "Fingerprint", value: "32:39:25:8A:70:D7:11:55:..." }
          ]} />
        </DataCard>

        <DataCard title="Headers" icon={<Server className="h-4 w-4" />}>
          <DataTable rows={[
            { label: "Content-Type", value: "1 August 2001" },
            { label: "Transfer-Encoding", value: "chunked" },
            { label: "Connection", value: "keep-alive" },
            { label: "X-Powered-By", value: "Next.js" },
            { label: "Server", value: "Cloudflare" }
          ]} />
        </DataCard>

        <DataCard title="DNS Records" icon={<Globe className="h-4 w-4" />}>
          <div className="max-h-60 overflow-y-auto">
            <p className="text-sm font-medium mb-1">A Records:</p>
            <ul className="text-xs space-y-1 mb-3">
              <li>104.21.96.1</li>
              <li>104.21.112.1</li>
              <li>104.21.80.1</li>
              <li>104.21.48.1</li>
              <li>104.21.64.1</li>
              <li>104.21.52.1</li>
              <li>104.21.16.1</li>
            </ul>
            <p className="text-sm font-medium mb-1">AAAA Records:</p>
            <ul className="text-xs mb-3">
              <li>2606:4700:3030::68</li>
            </ul>
            <p className="text-sm font-medium mb-1">NS Records:</p>
            <ul className="text-xs">
              <li>gene.ns.cloudflare.com</li>
              <li>aaden.ns.cloudflare.com</li>
            </ul>
          </div>
        </DataCard>

        <DataCard title="Security" icon={<Shield className="h-4 w-4" />}>
          <DataTable rows={[
            { label: "Content Security Policy", value: "❌ No" },
            { label: "Strict Transport Policy", value: "❌ No" },
            { label: "X-Content-Type-Options", value: "❌ No" },
            { label: "X-Frame-Options", value: "❌ No" },
            { label: "X-XSS-Protection", value: "❌ No" },
            { label: "HSTS Check", value: "❌ Not Enabled" },
            { label: "DNSSEC", value: "❌ Not Present" },
            { label: "Firewall", value: "✅ Yes (Cloudflare WAF)" }
          ]} />
        </DataCard>

        <DataCard title="Server Info" icon={<Server className="h-4 w-4" />}>
          <DataTable rows={[
            { label: "Status", value: "✅ Online" },
            { label: "Response Time", value: "565ms" },
            { label: "Open Ports", value: "80, 443, 8080" },
            { label: "Social Title", value: "Elves Core" },
            { label: "Description", value: "A Global Team of White Hat Hackers" },
            { label: "Phishing Status", value: "✅ No Phishing Found" },
            { label: "Malware Status", value: "✅ No Malware Found" }
          ]} />
        </DataCard>
      </div>
    </section>
  );
};

export default DataSection;
