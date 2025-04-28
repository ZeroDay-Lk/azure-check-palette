
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const DomainInput = () => {
  const [domain, setDomain] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateDomain = (input: string) => {
    const pattern = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    return pattern.test(input);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!domain) {
      toast.error('Please enter a domain');
      return;
    }

    if (!validateDomain(domain)) {
      toast.error('Please enter a valid domain');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Analysis complete for ${domain}`);
      console.log('Analyzing domain:', domain);
      // Here you would trigger the actual domain analysis
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Enter a domain (e.g. example.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="pr-10 h-12 text-base"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
        </div>
        <Button 
          type="submit" 
          className="h-12 px-6 font-medium"
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </Button>
      </form>
    </div>
  );
};

export default DomainInput;
