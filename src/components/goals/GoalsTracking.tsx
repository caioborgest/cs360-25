
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { 
  TrendingUp, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Edit, 
  MessageSquare,
  Upload,
  Calendar,
  Target,
  Users,
  BarChart3
} from 'lucide-react';

const activeGoals = [
  {
    id: 1,
    title: 'Aumentar NPS para 80+',
    category: 'Customer Success',
    progress: 75,
    target: 80,
    current: 72,
    unit: 'pontos',
    deadline: '30/06/2024',
    status: 'on-track',
    lastUpdate: '2024-01-15',
    milestones: [
      { id: 1, title: 'Atingir 70 pontos', target: 70, completed: true, date: '2024-01-10' },
      { id: 2, title: 'Atingir 75 pontos', target: 75, completed: false, date: '2024-01-25' }
    ],
    updates: [
      { id: 1, date: '2024-01-15', user: 'João Silva', message: 'NPS subiu para 72 pontos após implementação das melhorias no onboarding', value: 72 },
      { id: 2, date: '2024-01-10', user: 'Maria Santos', message: 'Primeira milestone alcançada!', value: 70 }
    ]
  },
  {
    id: 2,
    title: 'Reduzir Churn para 2%',
    category: 'Retenção',
    progress: 60,
    target: 2,
    current: 3.2,
    unit: '%',
    deadline: '31/07/2024',
    status: 'at-risk',
    lastUpdate: '2024-01-14',
    milestones: [
      { id: 3, title: 'Churn abaixo de 4%', target: 4, completed: true, date: '2024-01-05' },
      { id: 4, title: 'Churn abaixo de 3%', target: 3, completed: false, date: '2024-02-15' }
    ],
    updates: [
      { id: 3, date: '2024-01-14', user: 'Carlos Oliveira', message: 'Implementadas ações de retenção proativa', value: 3.2 }
    ]
  }
];

export const GoalsTracking = () => {
  const [selectedGoal, setSelectedGoal] = useState<any>(null);
  const [updateValue, setUpdateValue] = useState('');
  const [updateComment, setUpdateComment] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-track': return 'text-green-600 bg-green-100';
      case 'at-risk': return 'text-yellow-600 bg-yellow-100';
      case 'behind': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'on-track': return <CheckCircle className="w-4 h-4" />;
      case 'at-risk': return <AlertTriangle className="w-4 h-4" />;
      case 'behind': return <Clock className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const handleUpdateGoal = () => {
    // Implementar lógica de atualização
    console.log('Atualizando meta:', { value: updateValue, comment: updateComment });
    setUpdateValue('');
    setUpdateComment('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {activeGoals.map((goal) => (
          <Card key={goal.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{goal.title}</CardTitle>
                  <Badge variant="outline" className="mb-2">{goal.category}</Badge>
                </div>
                <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                  {getStatusIcon(goal.status)}
                  <span className="ml-1">
                    {goal.status === 'on-track' ? 'No Prazo' :
                     goal.status === 'at-risk' ? 'Em Risco' : 'Atrasada'}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Progresso</span>
                  <span className="text-sm font-medium">{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <div className="flex items-center justify-between mt-1 text-xs text-gray-500">
                  <span>Atual: {goal.current} {goal.unit}</span>
                  <span>Meta: {goal.target} {goal.unit}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Prazo: {goal.deadline}</span>
                </div>
                <span className="text-gray-500">
                  Atualizado: {goal.lastUpdate}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-700">Marcos:</div>
                {goal.milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center space-x-2 text-sm">
                    <div className={`w-4 h-4 rounded-full ${milestone.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                      {milestone.completed && <CheckCircle className="w-3 h-3 text-white m-0.5" />}
                    </div>
                    <span className={milestone.completed ? 'line-through text-gray-500' : ''}>
                      {milestone.title}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="flex-1" onClick={() => setSelectedGoal(goal)}>
                      <Edit className="w-4 h-4 mr-1" />
                      Atualizar
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Atualizar Meta: {goal.title}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Valor Atual</label>
                        <Input
                          value={updateValue}
                          onChange={(e) => setUpdateValue(e.target.value)}
                          placeholder={`${goal.current} ${goal.unit}`}
                          type="number"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Comentário</label>
                        <Textarea
                          value={updateComment}
                          onChange={(e) => setUpdateComment(e.target.value)}
                          placeholder="Descreva o progresso, obstáculos ou conquistas..."
                          rows={3}
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button onClick={handleUpdateGoal} className="flex-1">
                          Salvar Atualização
                        </Button>
                        <Button variant="outline">
                          <Upload className="w-4 h-4 mr-1" />
                          Anexar
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="sm">
                  <BarChart3 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Histórico de Atualizações */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            <span>Atualizações Recentes</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeGoals.flatMap(goal => 
              goal.updates.map(update => (
                <div key={update.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{goal.title}</h4>
                      <span className="text-sm text-gray-500">{update.date}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{update.message}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Valor: {update.value} {goal.unit}</span>
                      <span>Por: {update.user}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
