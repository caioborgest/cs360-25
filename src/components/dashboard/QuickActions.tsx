
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Users, Target, BarChart3, Bell, Zap } from 'lucide-react';

export const QuickActions = () => {
  return (
    <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-slate-900 dark:text-white">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <Zap className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <span>Ações Rápidas</span>
            <p className="text-sm font-normal text-slate-500 dark:text-slate-400">Shortcuts úteis</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-20 flex-col space-y-2 bg-white/60 hover:bg-white/80 border-blue-200 hover:border-blue-300 transition-all">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-xs font-medium">Novo Cliente</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2 bg-white/60 hover:bg-white/80 border-green-200 hover:border-green-300 transition-all">
            <Target className="w-5 h-5 text-green-600" />
            <span className="text-xs font-medium">Nova Meta</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2 bg-white/60 hover:bg-white/80 border-purple-200 hover:border-purple-300 transition-all">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            <span className="text-xs font-medium">Relatório</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col space-y-2 bg-white/60 hover:bg-white/80 border-amber-200 hover:border-amber-300 transition-all">
            <Bell className="w-5 h-5 text-amber-600" />
            <span className="text-xs font-medium">Alertas</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
