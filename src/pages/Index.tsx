
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, Globe, Server, Code, Search, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DomainInput from '@/components/DomainInput';
import ResultsSection from '@/components/ResultsSection';
import DataSection from '@/components/DataSection';
import { Separator } from '@/components/ui/separator';
import DigitalBackground from '@/components/DigitalBackground';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-card rounded-lg p-6 border border-border">
    <div className="bg-primary/10 w-10 h-10 rounded-md flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-medium text-lg mb-2">{title}</h3>
    <p className="text-foreground/70 text-sm">{description}</p>
  </div>
);

const Index = () => {  
  return (
    <div className="min-h-screen flex flex-col bg-background relative">
      <DigitalBackground />
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pb-12">
        <section className="text-center my-12 md:my-16">
          <div className="inline-block mb-3">
            <Badge variant="outline" className="px-3 py-1 bg-accent text-accent-foreground">
              Professional Security Analysis
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Advanced <span className="text-primary">Web Security Scanner</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Cyber Crew Web Anylacer provides comprehensive security analysis for any domain — including SSL, DNS, headers, and more.
          </p>
          
          <DomainInput />
        </section>
        
        {/* Data Section */}
        <DataSection />
        
        <section id="features" className="my-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Powerful Analysis Tools</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              WebCheck offers comprehensive website diagnostics with an easy-to-use interface
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Shield className="text-primary h-5 w-5" />} 
              title="Security Analysis" 
              description="Check SSL certificates, security headers, and detect vulnerabilities" 
            />
            <FeatureCard 
              icon={<Server className="text-primary h-5 w-5" />} 
              title="Server Details" 
              description="Examine hosting info, response headers, and DNS configuration" 
            />
            <FeatureCard 
              icon={<Code className="text-primary h-5 w-5" />} 
              title="Tech Stack Detection" 
              description="Identify frameworks, libraries, and technologies in use" 
            />
            <FeatureCard 
              icon={<Search className="text-primary h-5 w-5" />} 
              title="SEO Insights" 
              description="Analyze meta tags, structured data, and performance metrics" 
            />
          </div>
        </section>
        
        <Separator className="my-12" />
        
        <section id="about" className="my-12 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">About WebCheck</h2>
            <p className="text-foreground/80">
              A modern reimagining of the web-check project with a focus on usability and elegance
            </p>
          </div>
          
          <div className="prose prose-sm mx-auto text-foreground/80">
            <p>
              WebCheck is inspired by the open-source project created by Alicia Sykes (Lissy93). 
              It provides comprehensive website analysis to help developers, security researchers, 
              and curious individuals learn more about any domain.
            </p>
            <p>
              All scanning is done client-side, ensuring your queries remain private. 
              The tool is completely free to use and the source code is available on GitHub.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
