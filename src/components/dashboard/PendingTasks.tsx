
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';
import { CheckSquare, Plus, Clock, Calendar } from 'lucide-react';

const pendingTasks = [
  {
    id: 1,
    title: 'Revisar Health Score da TechFlow',
    priority: 'alta',
    dueDate: 'Hoje',
    client: 'TechFlow',
    type: 'health_check',
    progress: 60
  },
  {
    id: 2,
    title: 'Preparar apresentação Q2 para BigCorp',
    priority: 'média',
    dueDate: 'Amanhã',
    client: 'BigCorp S.A.',
    type: 'presentation',
    progress: 30
  },
  {
    id: 3,
    title: 'Follow-up NPS baixo - StartupX',
    priority: 'alta',
    dueDate: 'Hoje',
    client: 'StartupX',
    type: 'follow_up',
    progress: 0
  },
  {
    id: 4,
    title: 'Renovação de contrato - DataInova',
    priority: 'média',
    dueDate: '3 dias',
    client: 'DataInova',
    type: 'renewal',
    progress: 75
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'alta': return 'bg-red-50 text-red-700 border-red-200';
    case 'média': return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'baixa': return 'bg-green-50 text-green-700 border-green-200';
    default: return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

export const PendingTasks = () => {
  return (
    <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <CheckSquare className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <span>Tarefas Pendentes</span>
              <p className="text-sm font-normal text-slate-500 dark:text-slate-400">{pendingTasks.length} itens</p>
            </div>
          </CardTitle>
          <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {pendingTasks.map((task) => (
              <div key={task.id} className="p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="font-medium text-slate-900 dark:text-white text-sm line-clamp-2">
                    {task.title}
                  </h4>
                  <Badge className={`text-xs px-2 py-1 ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium">{task.client}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.dueDate}
                    </div>
                  </div>
                  
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5">
                    <div 
                      className="bg-blue-600 h-1.5 rounded-full transition-all" 
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Progresso</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{task.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Button variant="outline" size="sm" className="w-full mt-4 bg-white/60 hover:bg-white/80 transition-all">
          <Calendar className="w-4 h-4 mr-2" />
          Ver Agenda Completa
        </Button>
      </CardContent>
    </Card>
  );
};
