
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Users, 
  Trophy, 
  Target, 
  TrendingUp, 
  Award, 
  Star,
  Crown,
  Medal,
  UserPlus,
  MessageSquare,
  Calendar
} from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'João Silva',
    role: 'CS Manager',
    department: 'Customer Success',
    goalsCount: 8,
    completedGoals: 6,
    averageProgress: 87,
    totalPoints: 950,
    rank: 1,
    avatar: 'JS',
    goals: [
      { id: 1, title: 'Aumentar NPS', progress: 75, status: 'on-track' },
      { id: 2, title: 'Reduzir Churn', progress: 90, status: 'completed' }
    ]
  },
  {
    id: 2,
    name: 'Maria Santos',
    role: 'Sales Representative',
    department: 'Vendas',
    goalsCount: 6,
    completedGoals: 4,
    averageProgress: 82,
    totalPoints: 780,
    rank: 2,
    avatar: 'MS',
    goals: [
      { id: 3, title: 'Novos Clientes', progress: 85, status: 'on-track' },
      { id: 4, title: 'Aumentar MRR', progress: 60, status: 'at-risk' }
    ]
  },
  {
    id: 3,
    name: 'Carlos Oliveira',
    role: 'CS Specialist',
    department: 'Customer Success',
    goalsCount: 5,
    completedGoals: 3,
    averageProgress: 75,
    totalPoints: 650,
    rank: 3,
    avatar: 'CO',
    goals: [
      { id: 5, title: 'Onboarding Time', progress: 95, status: 'completed' },
      { id: 6, title: 'Customer Health', progress: 55, status: 'behind' }
    ]
  }
];

const achievements = [
  { id: 1, name: 'Meta Master', description: 'Completou 10 metas', icon: Trophy, color: 'text-yellow-500' },
  { id: 2, name: 'Consistência', description: '30 dias consecutivos de progresso', icon: Target, color: 'text-blue-500' },
  { id: 3, name: 'Team Player', description: 'Colaborou em 5 metas de equipe', icon: Users, color: 'text-green-500' },
  { id: 4, name: 'Speed Runner', description: 'Completou meta antes do prazo', icon: TrendingUp, color: 'text-purple-500' }
];

const teamStats = {
  totalMembers: 24,
  activeGoals: 45,
  completedGoals: 128,
  averageCompletion: 78,
  topPerformer: 'João Silva',
  monthlyGrowth: 12
};

export const GoalsTeam = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Award className="w-5 h-5 text-orange-500" />;
      default: return <Target className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'on-track': return 'bg-blue-100 text-blue-800';
      case 'at-risk': return 'bg-yellow-100 text-yellow-800';
      case 'behind': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Estatísticas da Equipe */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold text-blue-700">{teamStats.totalMembers}</p>
            <p className="text-xs text-blue-600">Membros</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold text-green-700">{teamStats.activeGoals}</p>
            <p className="text-xs text-green-600">Metas Ativas</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-2xl font-bold text-purple-700">{teamStats.completedGoals}</p>
            <p className="text-xs text-purple-600">Concluídas</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-red-50">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <p className="text-2xl font-bold text-orange-700">{teamStats.averageCompletion}%</p>
            <p className="text-xs text-orange-600">Média de Conclusão</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
            <p className="text-xl font-bold text-yellow-700">Top</p>
            <p className="text-xs text-yellow-600">Performer</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0 bg-gradient-to-br from-teal-50 to-green-50">
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-teal-600" />
            <p className="text-2xl font-bold text-teal-700">+{teamStats.monthlyGrowth}%</p>
            <p className="text-xs text-teal-600">Este Mês</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ranking" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ranking">🏆 Ranking</TabsTrigger>
          <TabsTrigger value="achievements">🎖️ Conquistas</TabsTrigger>
          <TabsTrigger value="collaboration">🤝 Colaboração</TabsTrigger>
        </TabsList>

        <TabsContent value="ranking">
          <Card className="shadow-lg border-0">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span>Ranking da Equipe</span>
              </CardTitle>
              <Button variant="outline" size="sm">
                <UserPlus className="w-4 h-4 mr-1" />
                Convidar Membro
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      {getRankIcon(member.rank)}
                      <span className="font-bold text-lg">#{member.rank}</span>
                    </div>
                    
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role} • {member.department}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg text-blue-600">{member.totalPoints} pts</p>
                          <p className="text-xs text-gray-500">{member.completedGoals}/{member.goalsCount} metas</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">Progresso Médio</span>
                            <span className="text-xs font-medium">{member.averageProgress}%</span>
                          </div>
                          <Progress value={member.averageProgress} className="h-2" />
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedMember(member)}
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Conquistas Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                      <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                      <div>
                        <h4 className="font-semibold">{achievement.name}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Conquistas Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                    <div>
                      <h4 className="font-semibold">João Silva</h4>
                      <p className="text-sm text-gray-600">Conquistou "Meta Master"</p>
                      <p className="text-xs text-gray-500">2 dias atrás</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <Target className="w-8 h-8 text-blue-500" />
                    <div>
                      <h4 className="font-semibold">Maria Santos</h4>
                      <p className="text-sm text-gray-600">Conquistou "Consistência"</p>
                      <p className="text-xs text-gray-500">1 semana atrás</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="collaboration">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-500" />
                <span>Metas Colaborativas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Aumentar NPS da Empresa para 85+</h4>
                    <Badge className="bg-green-100 text-green-800">Equipe CS</Badge>
                  </div>
                  <Progress value={78} className="mb-3" />
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>3 colaboradores envolvidos</span>
                    <span>78% concluído</span>
                    <span>Prazo: 30/06/2024</span>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Reduzir Tempo de Onboarding</h4>
                    <Badge className="bg-blue-100 text-blue-800">Cross-functional</Badge>
                  </div>
                  <Progress value={65} className="mb-3" />
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>5 colaboradores envolvidos</span>
                    <span>65% concluído</span>
                    <span>Prazo: 15/07/2024</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
