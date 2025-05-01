
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, CheckCircle2, XCircle, ChevronDown, ChevronUp } from 'lucide-react';

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
        return 'bg-green-100 text-green-600';
      case 'warning':
        return 'bg-yellow-100 text-yellow-600';
      case 'bad':
        return 'bg-red-100 text-red-600';
      case 'info':
        return 'bg-accent text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = () => {
    if (typeof value === 'boolean') {
      return value ? 
        <CheckCircle2 className="h-4 w-4 text-green-600" /> : 
        <XCircle className="h-4 w-4 text-red-600" />;
    }
    return icon || <Info className="h-4 w-4" />;
  };

  const renderStatusValue = () => {
    if (typeof value === 'boolean') {
      return value ? 
        <span className="text-green-600 font-medium flex items-center gap-1">
          <CheckCircle2 className="h-4 w-4" /> {description || 'はい'}
        </span> : 
        <span className="text-red-600 font-medium flex items-center gap-1">
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

  return (
    <Card className={`overflow-hidden gradient-border ${isHighlighted ? 'border-red-500 animate-pulse-slow' : ''}`}>
      <CardHeader className={`pb-3 ${isHighlighted ? 'bg-red-50 dark:bg-red-900/10' : ''}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-md ${getStatusColor()}`}>
              {getStatusIcon()}
            </div>
            <CardTitle className="text-base font-medium">{title}</CardTitle>
          </div>
        </div>
        <CardDescription className="mt-2 flex items-center gap-1">
          {renderStatusValue()}
        </CardDescription>
      </CardHeader>
      
      {(visibleDetails.length > 0) && (
        <CardContent className="pt-0">
          <ul className="text-sm space-y-1 text-foreground/80">
            {visibleDetails.map((detail, index) => (
              <li key={index} className="flex gap-2">
                <span>•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      
      {hasMoreDetails && (
        <div className="px-6 py-2 border-t border-border">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs w-full justify-center flex items-center gap-1"
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
