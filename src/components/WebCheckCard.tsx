
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface WebCheckCardProps {
  title: string;
  value: string | boolean | number;
  icon?: React.ReactNode;
  description?: string;
  status?: 'good' | 'warning' | 'error' | 'info';
  isHighlighted?: boolean;
  details?: string[];
  isExpanded?: boolean;
  customContent?: React.ReactNode;
}

const WebCheckCard: React.FC<WebCheckCardProps> = ({
  title,
  value,
  icon,
  description,
  status = 'info',
  isHighlighted = false,
  details = [],
  isExpanded = false,
  customContent
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const { t } = useTranslation();

  const statusColors = {
    good: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
  };

  const getBooleanDisplay = (val: boolean) => {
    return val ? (
      <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
        {t('yes')}
      </Badge>
    ) : (
      <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
        {t('no')}
      </Badge>
    );
  };

  return (
    <Card className={`transition-all ${isHighlighted ? 'animate-pulse-slow border-red-400 dark:border-red-600' : ''}`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {icon}
            <span>{title}</span>
          </div>

          {typeof value === 'boolean' ? (
            getBooleanDisplay(value)
          ) : (
            <div className="font-medium">
              {value}
            </div>
          )}
        </div>

        {description && (
          <div className={`mt-1 text-sm ${
            status === 'good' ? 'text-green-600 dark:text-green-400' :
            status === 'warning' ? 'text-yellow-600 dark:text-yellow-400' :
            status === 'error' ? 'text-red-600 dark:text-red-400' :
            'text-blue-600 dark:text-blue-400'
          }`}>
            {description}
          </div>
        )}

        {customContent && (
          <div className="mt-3">
            {customContent}
          </div>
        )}

        {details.length > 0 && (
          <>
            {expanded && (
              <div className="mt-3 space-y-1">
                {details.map((detail, index) => (
                  <div key={index} className="text-sm text-foreground/80">{detail}</div>
                ))}
              </div>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              className="mt-2 w-full flex items-center justify-center text-xs"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-3 w-3 mr-1" />
                  {t('showLess')}
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3 mr-1" />
                  {t('showMore')}
                </>
              )}
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default WebCheckCard;
