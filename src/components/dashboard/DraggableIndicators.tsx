
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  Target,
  Star,
  ArrowUp,
  ArrowDown,
  GripVertical
} from 'lucide-react';

interface Indicator {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: any;
  color: string;
  description: string;
}

const initialIndicators: Indicator[] = [
  {
    id: 'clients',
    title: "Clientes Ativos",
    value: "247",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
    description: "vs mês anterior"
  },
  {
    id: 'mrr',
    title: "MRR Total",
    value: "R$ 485k",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600 dark:text-green-400",
    description: "Receita Mensal"
  },
  {
    id: 'nps',
    title: "NPS Médio",
    value: "72",
    change: "+5.3%",
    trend: "up",
    icon: Star,
    color: "text-purple-600 dark:text-purple-400",
    description: "Score atual"
  },
  {
    id: 'churn',
    title: "Taxa de Churn",
    value: "2.8%",
    change: "-0.5%",
    trend: "down",
    icon: TrendingUp,
    color: "text-orange-600 dark:text-orange-400",
    description: "vs mês anterior"
  },
  {
    id: 'health',
    title: "Health Score",
    value: "85%",
    change: "+3.2%",
    trend: "up",
    icon: Target,
    color: "text-emerald-600 dark:text-emerald-400",
    description: "Saúde geral"
  },
  {
    id: 'alerts',
    title: "Alertas Críticos",
    value: "7",
    change: "-2",
    trend: "down",
    icon: AlertTriangle,
    color: "text-red-600 dark:text-red-400",
    description: "Pendentes"
  }
];

export const DraggableIndicators = () => {
  const [indicators, setIndicators] = useState(initialIndicators);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedItem(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem === targetId) return;

    const draggedIndex = indicators.findIndex(item => item.id === draggedItem);
    const targetIndex = indicators.findIndex(item => item.id === targetId);
    
    const newIndicators = [...indicators];
    const [removed] = newIndicators.splice(draggedIndex, 1);
    newIndicators.splice(targetIndex, 0, removed);
    
    setIndicators(newIndicators);
    setDraggedItem(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {indicators.map((indicator) => (
        <Card 
          key={indicator.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-move"
          draggable
          onDragStart={(e) => handleDragStart(e, indicator.id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, indicator.id)}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <indicator.icon className={`w-5 h-5 ${indicator.color}`} />
                <GripVertical className="w-4 h-4 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400">{indicator.title}</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">{indicator.value}</p>
              <div className="flex items-center text-xs">
                {indicator.trend === "up" ? (
                  <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="w-3 h-3 text-green-500 mr-1" />
                )}
                <span className="text-green-600 dark:text-green-400 font-medium">{indicator.change}</span>
                <span className="ml-1 text-gray-500 dark:text-gray-400">{indicator.description}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
