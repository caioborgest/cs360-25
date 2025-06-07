
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Users, AlertTriangle, CheckCircle, Brain, Award, Activity, Eye } from 'lucide-react';

const recentActivities = [
  {
    id: 1,
    type: 'client',
    title: 'Novo cliente TechCorp cadastrado',
    description: 'Cliente Premium com potencial alto',
    time: '2 min atrás',
    icon: Users,
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconColor: 'text-emerald-600'
  },
  {
    id: 2,
    type: 'alert',
    title: 'Risco de churn detectado',
    description: 'StartupX - Health Score crítico',
    time: '15 min atrás',
    icon: AlertTriangle,
    color: 'bg-red-50 text-red-700 border-red-200',
    iconColor: 'text-red-600'
  },
  {
    id: 3,
    type: 'task',
    title: 'Follow-up agendado completado',
    description: 'Reunião com BigCorp realizada',
    time: '1 hora atrás',
    icon: CheckCircle,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    iconColor: 'text-blue-600'
  },
  {
    id: 4,
    type: 'ai',
    title: 'IA identificou oportunidade',
    description: 'Upsell recomendado para InnovateTech',
    time: '2 horas atrás',
    icon: Brain,
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    iconColor: 'text-purple-600'
  },
  {
    id: 5,
    type: 'achievement',
    title: 'Meta de NPS atingida',
    description: 'Superamos o objetivo do trimestre',
    time: '4 horas atrás',
    icon: Award,
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    iconColor: 'text-amber-600'
  }
];

export const RecentActivities = () => {
  return (
    <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span>Atividades Recentes</span>
              <p className="text-sm font-normal text-slate-500 dark:text-slate-400">Últimas atualizações</p>
            </div>
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className={`p-4 rounded-xl border transition-all cursor-pointer hover:shadow-md ${activity.color}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/80 ${activity.iconColor}`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate mb-1">
                      {activity.title}
                    </p>
                    <p className="text-xs opacity-80 truncate mb-2">
                      {activity.description}
                    </p>
                    <p className="text-xs opacity-60">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Button variant="outline" size="sm" className="w-full mt-4 bg-white/60 hover:bg-white/80 transition-all">
          Ver Todas as Atividades
        </Button>
      </CardContent>
    </Card>
  );
};
