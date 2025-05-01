
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Progress } from '@/components/ui/progress';
import { useTranslation } from 'react-i18next';

interface SecurityScoreChartProps {
  score: number;
  maxScore?: number;
}

const SecurityScoreChart: React.FC<SecurityScoreChartProps> = ({ 
  score, 
  maxScore = 100 
}) => {
  const { t } = useTranslation();
  const [animatedScore, setAnimatedScore] = useState(0);
  
  // Calculate percentage
  const percentage = (score / maxScore) * 100;
  const remaining = 100 - percentage;
  
  // Data for pie chart
  const data = [
    { name: 'Score', value: percentage },
    { name: 'Remaining', value: remaining }
  ];
  
  // Colors for the pie segments
  const COLORS = ['#0ABAB5', '#f0f0f0'];
  
  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [score]);
  
  // Animate the score counter
  useEffect(() => {
    if (animatedScore < score) {
      const timeout = setTimeout(() => {
        setAnimatedScore(prevScore => {
          const nextScore = prevScore + 1;
          return nextScore <= score ? nextScore : score;
        });
      }, 20);
      
      return () => clearTimeout(timeout);
    }
  }, [animatedScore, score]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={1200}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index]} 
                  className={index === 0 ? "filter drop-shadow-md" : ""} 
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{animatedScore}</span>
          <span className="text-sm text-muted-foreground">{t('securityScore')}</span>
        </div>
      </div>
      <div className="w-full mt-2">
        <Progress 
          value={percentage} 
          className="h-2 bg-muted" 
        />
        <div className="flex justify-between mt-1 text-xs text-muted-foreground">
          <span>0</span>
          <span>{maxScore}</span>
        </div>
      </div>
    </div>
  );
};

export default SecurityScoreChart;
