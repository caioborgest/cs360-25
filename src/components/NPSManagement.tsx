import React, { useState } from 'react';
import { 
  Star, 
  Mail, 
  Send, 
  Users, 
  TrendingUp, 
  MessageSquare,
  Plus,
  Download,
  Filter,
  Search,
  Calendar,
  BarChart3,
  Edit,
  Settings
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { NPSCharts } from './nps/NPSCharts';
import { NPSSurveyManager } from './nps/NPSSurveyManager';
import { NPSDataCollector } from './nps/NPSDataCollector';
import { NPSFormEditor } from './nps/NPSFormEditor';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';

const npsData = [
  { month: 'Jan', score: 68, responses: 156, promoters: 89, passives: 45, detractors: 22 },
  { month: 'Fev', score: 72, responses: 143, promoters: 98, passives: 32, detractors: 13 },
  { month: 'Mar', score: 69, responses: 167, promoters: 95, passives: 51, detractors: 21 },
  { month: 'Abr', score: 74, responses: 178, promoters: 112, passives: 43, detractors: 23 },
  { month: 'Mai', score: 76, responses: 189, promoters: 125, passives: 41, detractors: 23 },
  { month: 'Jun', score: 78, responses: 201, promoters: 138, passives: 42, detractors: 21 }
];

const surveyData = [
  {
    id: 1,
    name: 'Pesquisa Trimestral Q2',
    status: 'ativa',
    sent: 247,
    responses: 189,
    responseRate: 76.5,
    npsScore: 78,
    createdAt: '2024-06-01',
    expiresAt: '2024-06-30'
  },
  {
    id: 2,
    name: 'Pesquisa Pós-Implementação',
    status: 'finalizada',
    sent: 156,
    responses: 143,
    responseRate: 91.7,
    npsScore: 82,
    createdAt: '2024-05-15',
    expiresAt: '2024-05-30'
  },
  {
    id: 3,
    name: 'Pesquisa de Satisfação Geral',
    status: 'rascunho',
    sent: 0,
    responses: 0,
    responseRate: 0,
    npsScore: 0,
    createdAt: '2024-06-10',
    expiresAt: '2024-07-10'
  }
];

const feedbackData = [
  {
    id: 1,
    client: 'TechCorp LTDA',
    score: 9,
    category: 'promoter',
    feedback: 'Excelente plataforma! O suporte é muito eficiente e os resultados são visíveis.',
    date: '2024-06-15',
    segment: 'Enterprise'
  },
  {
    id: 2,
    client: 'StartupX',
    score: 7,
    category: 'passive',
    feedback: 'Boa ferramenta, mas gostaria de ver mais funcionalidades de automação.',
    date: '2024-06-14',
    segment: 'Growth'
  },
  {
    id: 3,
    client: 'BigCorp S.A.',
    score: 10,
    category: 'promoter',
    feedback: 'Revolucionou nossa gestão de Customer Success. Recomendo fortemente!',
    date: '2024-06-13',
    segment: 'Enterprise'
  },
  {
    id: 4,
    client: 'MidCompany',
    score: 4,
    category: 'detractor',
    feedback: 'A interface poderia ser mais intuitiva. Alguns relatórios são confusos.',
    date: '2024-06-12',
    segment: 'Professional'
  }
];

const getScoreColor = (score: number) => {
  if (score >= 9) return 'text-green-600 dark:text-green-400';
  if (score >= 7) return 'text-yellow-600 dark:text-yellow-400';
  return 'text-red-600 dark:text-red-400';
};

const getCategoryColor = (category: string) => {
  const colors = {
    'promoter': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'passive': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'detractor': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  };
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
};

const getStatusColor = (status: string) => {
  const colors = {
    'ativa': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'finalizada': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    'rascunho': 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400',
    'pausada': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
};

export const NPSManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSurveyManagerOpen, setIsSurveyManagerOpen] = useState(false);
  const [isFormEditorOpen, setIsFormEditorOpen] = useState(false);
  const [isCollectorOpen, setIsCollectorOpen] = useState(false);
  const [selectedFormConfig, setSelectedFormConfig] = useState(null);

  const currentNPS = npsData[npsData.length - 1]?.score || 0;
  const previousNPS = npsData[npsData.length - 2]?.score || 0;
  const npsChange = currentNPS - previousNPS;

  const totalResponses = npsData[npsData.length - 1]?.responses || 0;
  const responseRate = surveyData.find(s => s.status === 'ativa')?.responseRate || 0;

  const handleExport = () => {
    console.log('Exportando dados NPS...');
  };

  const handleSendSurvey = (surveyId: number) => {
    console.log('Enviando pesquisa:', surveyId);
  };

  const filteredFeedback = feedbackData.filter(feedback =>
    feedback.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feedback.feedback.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateForm = () => {
    setSelectedFormConfig(null);
    setIsFormEditorOpen(true);
  };

  const handleEditForm = (formConfig: any) => {
    setSelectedFormConfig(formConfig);
    setIsFormEditorOpen(true);
  };

  const handleSaveForm = (config: any) => {
    console.log('Formulário NPS salvo:', config);
    // Aqui você salvaria a configuração do formulário
  };

  const handleNPSResponse = (response: any) => {
    console.log('Resposta NPS coletada:', response);
    // Aqui você processaria a resposta NPS
  };

  const handleTestForm = () => {
    setIsCollectorOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">NPS Atual</p>
                <p className="text-2xl font-bold text-blue-600">{currentNPS}</p>
                <p className={`text-sm ${npsChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {npsChange >= 0 ? '+' : ''}{npsChange} vs mês anterior
                </p>
              </div>
              <Star className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Respostas</p>
                <p className="text-2xl font-bold text-green-600">{totalResponses}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">este mês</p>
              </div>
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa de Resposta</p>
                <p className="text-2xl font-bold text-purple-600">{responseRate}%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">pesquisa ativa</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Promotores</p>
                <p className="text-2xl font-bold text-orange-600">138</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">68.7% do total</p>
              </div>
              <Users className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 shadow-xl">
        <CardHeader className="border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl font-semibold text-slate-900 dark:text-white">Gestão NPS</CardTitle>
                <p className="text-sm text-slate-600 dark:text-slate-400">Sistema completo de pesquisas NPS</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={handleCreateForm} className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm">
                <Edit className="w-4 h-4 mr-2" />
                Editor de Formulário
              </Button>
              <Button variant="outline" size="sm" onClick={handleTestForm} className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm">
                <Settings className="w-4 h-4 mr-2" />
                Testar Formulário
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport} className="bg-white/60 dark:bg-slate-700/60 backdrop-blur-sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" onClick={() => setIsSurveyManagerOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Nova Pesquisa
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-100/50 dark:bg-slate-700/50">
              <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
                <BarChart3 className="w-4 h-4" />
                Visão Geral
              </TabsTrigger>
              <TabsTrigger value="surveys" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
                <Mail className="w-4 h-4" />
                Pesquisas
              </TabsTrigger>
              <TabsTrigger value="feedback" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
                <MessageSquare className="w-4 h-4" />
                Feedback
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">
                <TrendingUp className="w-4 h-4" />
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <NPSCharts data={npsData} />
            </TabsContent>

            <TabsContent value="surveys" className="mt-6">
              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pesquisa</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Enviadas</TableHead>
                        <TableHead>Respostas</TableHead>
                        <TableHead>Taxa</TableHead>
                        <TableHead>NPS</TableHead>
                        <TableHead>Período</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {surveyData.map((survey) => (
                        <TableRow key={survey.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <TableCell>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{survey.name}</div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${getStatusColor(survey.status)} capitalize`}>
                              {survey.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{survey.sent}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{survey.responses}</TableCell>
                          <TableCell className="text-gray-700 dark:text-gray-300">{survey.responseRate}%</TableCell>
                          <TableCell>
                            <span className={`font-medium ${getScoreColor(survey.npsScore)}`}>
                              {survey.npsScore || '-'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                              {survey.createdAt} até {survey.expiresAt}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {survey.status === 'rascunho' && (
                                <Button 
                                  size="sm" 
                                  className="bg-blue-600 hover:bg-blue-700 text-white"
                                  onClick={() => handleSendSurvey(survey.id)}
                                >
                                  <Send className="w-4 h-4 mr-1" />
                                  Enviar
                                </Button>
                              )}
                              {survey.status === 'ativa' && (
                                <Button size="sm" variant="outline" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  Programar
                                </Button>
                              )}
                              <Button size="sm" variant="ghost" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                                Ver Detalhes
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Buscar feedback por cliente ou comentário..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                      />
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                </div>

                <div className="space-y-4">
                  {filteredFeedback.map((item) => (
                    <Card key={item.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="font-medium text-gray-900 dark:text-white">{item.client}</span>
                              <Badge className={getCategoryColor(item.category)}>
                                {item.category}
                              </Badge>
                              <Badge variant="outline">{item.segment}</Badge>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-3">{item.feedback}</p>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-gray-500 dark:text-gray-400">Score:</span>
                              <span className={`text-xl font-bold ${getScoreColor(item.score)}`}>{item.score}</span>
                              <div className="flex space-x-1 ml-2">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${
                                      star <= item.score 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300 dark:text-gray-600'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <Button size="sm" variant="outline" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              Responder
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              Ações
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">Distribuição por Segmento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Enterprise</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full w-20"></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">83</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Growth</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full w-18"></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">76</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Professional</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full w-16"></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">68</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">Tendências de Melhoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                        <h4 className="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-2">Interface & Usabilidade</h4>
                        <p className="text-sm text-yellow-700 dark:text-yellow-400">23% dos detratores mencionam dificuldades com a interface</p>
                      </div>
                      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Automações</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-400">31% solicitam mais funcionalidades de automação</p>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                        <h4 className="text-sm font-medium text-green-800 dark:text-green-300 mb-2">Suporte</h4>
                        <p className="text-sm text-green-700 dark:text-green-400">Maior pontuação entre promotores - 94% satisfeitos</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Survey Manager Modal */}
      <NPSSurveyManager
        isOpen={isSurveyManagerOpen}
        onClose={() => setIsSurveyManagerOpen(false)}
        onSubmit={(data) => {
          console.log('Nova pesquisa criada:', data);
          setIsSurveyManagerOpen(false);
        }}
      />

      <NPSFormEditor
        isOpen={isFormEditorOpen}
        onClose={() => setIsFormEditorOpen(false)}
        formConfig={selectedFormConfig}
        onSave={handleSaveForm}
      />

      {isCollectorOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="mb-4 flex justify-end">
              <Button
                variant="outline"
                onClick={() => setIsCollectorOpen(false)}
                className="bg-white/90 hover:bg-white text-slate-700"
              >
                Fechar Teste
              </Button>
            </div>
            <NPSDataCollector
              surveyId="test-survey"
              clientInfo={{
                name: "Empresa Teste",
                email: "teste@empresa.com",
                segment: "Enterprise"
              }}
              onSubmit={handleNPSResponse}
            />
          </div>
        </div>
      )}
    </div>
  );
};
