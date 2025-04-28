
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

interface WebCheckCardProps {
  title: string;
  description: string;
  status: 'good' | 'warning' | 'bad' | 'info' | 'neutral';
  icon?: React.ReactNode;
  details?: string[];
  isExpanded?: boolean;
}

const WebCheckCard = ({
  title,
  description,
  status,
  icon,
  details = [],
  isExpanded = false
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

  return (
    <Card className="overflow-hidden gradient-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-md ${getStatusColor()}`}>
              {icon || <Info className="h-4 w-4" />}
            </div>
            <CardTitle className="text-base font-medium">{title}</CardTitle>
          </div>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      {(expanded && details.length > 0) && (
        <CardContent className="pt-0">
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
