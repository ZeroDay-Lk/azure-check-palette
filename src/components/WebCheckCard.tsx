
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, CheckCircle2, XCircle } from 'lucide-react';

interface WebCheckCardProps {
  title: string;
  description?: string; // Make description optional
  status: 'good' | 'warning' | 'bad' | 'info' | 'neutral';
  icon?: React.ReactNode;
  details?: string[];
  isExpanded?: boolean;
  value?: string | boolean;
}

const WebCheckCard = ({
  title,
  description = '', // Provide default empty string
  status,
  icon,
  details = [],
  isExpanded = false,
  value
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

  return (
    <Card className="overflow-hidden gradient-border">
      <CardHeader className="pb-3">
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
      
      {(details.length > 0) && (
        <CardContent className={`pt-0 ${!expanded && 'hidden'}`}>
          <ul className="text-sm space-y-1 text-foreground/80">
            {details.map((detail, index) => (
              <li key={index} className="flex gap-2">
                <span>•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      
      {details.length > 0 && (
        <div className="px-6 py-2 border-t border-border">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs w-full justify-center"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show less' : 'Show more'}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default WebCheckCard;
