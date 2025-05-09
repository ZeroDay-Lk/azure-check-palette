import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, CheckCircle2, XCircle, ChevronDown, ChevronUp, ShieldAlert, CircuitBoard } from 'lucide-react';

interface WebCheckCardProps {
  title: string;
  description?: string;
  status: 'good' | 'warning' | 'bad' | 'info' | 'neutral';
  icon?: React.ReactNode;
  details?: string[];
  isExpanded?: boolean;
  value?: string | boolean;
  isHighlighted?: boolean;
}

const WebCheckCard = ({
  title,
  description = '',
  status,
  icon,
  details = [],
  isExpanded = false,
  value,
  isHighlighted = false
}: WebCheckCardProps) => {
  const [expanded, setExpanded] = React.useState(isExpanded);

  const getStatusColor = () => {
    switch (status) {
      case 'good':
        return 'bg-green-800/30 text-green-400 border border-green-400/30';
      case 'warning':
        return 'bg-yellow-800/30 text-yellow-400 border border-yellow-400/30';
      case 'bad':
        return 'bg-red-800/30 text-red-400 border border-red-400/30';
      case 'info':
        return 'bg-blue-800/30 text-blue-400 border border-blue-400/30';
      default:
        return 'bg-gray-800/30 text-gray-400 border border-gray-400/30';
    }
  };

  const getStatusIcon = () => {
    if (typeof value === 'boolean') {
      return value ? 
        <CheckCircle2 className="h-4 w-4 text-green-400" /> : 
        <XCircle className="h-4 w-4 text-red-400" />;
    }
    return icon || <ShieldAlert className="h-4 w-4" />;
  };

  const renderStatusValue = () => {
    if (typeof value === 'boolean') {
      return value ? 
        <span className="text-green-400 font-medium flex items-center gap-1">
          <CheckCircle2 className="h-4 w-4" /> {description || 'はい'}
        </span> : 
        <span className="text-red-400 font-medium flex items-center gap-1">
          <XCircle className="h-4 w-4" /> {description || 'いいえ'}
        </span>;
    }
    
    if (value) {
      return <span className="font-medium text-foreground">{value}</span>;
    }
    
    return description ? <span className="text-foreground/70">{description}</span> : null;
  };

  // Display first 4 details when not expanded, all when expanded
  const visibleDetails = expanded ? details : details.slice(0, 4);
  const hasMoreDetails = details.length > 4;

  // Digital rain effect for highlighted cards
  React.useEffect(() => {
    if (isHighlighted) {
      const interval = setInterval(() => {
        const elements = document.querySelectorAll(`.digital-rain-${title.replace(/\s+/g, '-')}`);
        elements.forEach((el) => {
          if (Math.random() > 0.7) {
            (el as HTMLElement).style.opacity = (Math.random() * 0.7 + 0.3).toString();
          }
        });
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [isHighlighted, title]);

  return (
    <Card className={`overflow-hidden cyber-card relative z-30 ${isHighlighted ? 'border-red-500 animate-pulse-slow' : ''}`}>
      {isHighlighted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <span 
              key={i}
              className={`digital-rain-${title.replace(/\s+/g, '-')} absolute text-xs font-mono text-primary/40`}
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            >
              {['0', '1', '</', '>', '!'][Math.floor(Math.random() * 5)]}
            </span>
          ))}
        </div>
      )}
      
      <CardHeader className={`pb-3 relative z-10 ${isHighlighted ? 'bg-red-900/10' : ''}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-md ${getStatusColor()}`}>
              {getStatusIcon()}
            </div>
            <CardTitle className="text-base font-medium flex items-center gap-1">
              {title}
              {status === 'bad' && <CircuitBoard className="h-3 w-3 text-red-400 animate-pulse" />}
            </CardTitle>
          </div>
        </div>
        <CardDescription className="mt-2 flex items-center gap-1">
          {renderStatusValue()}
        </CardDescription>
      </CardHeader>
      
      {(visibleDetails.length > 0) && (
        <CardContent className="pt-0 relative z-10">
          <ul className="text-sm space-y-1 text-foreground/80">
            {visibleDetails.map((detail, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-primary">❯</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      
      {hasMoreDetails && (
        <div className="px-6 py-2 border-t border-primary/30 relative z-10">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs w-full justify-center flex items-center gap-1 hover:text-primary hover:bg-primary/10"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                Show less <ChevronUp className="h-3 w-3" />
              </>
            ) : (
              <>
                Show more <ChevronDown className="h-3 w-3" />
              </>
            )}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default WebCheckCard;
