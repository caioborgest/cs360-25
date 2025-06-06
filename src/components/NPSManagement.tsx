
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Star, Settings, Mail, Users, Download, Upload, ArrowRight, Calendar, Plus, Send, PieChart as PieChartIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

// Dados simulados
const npsScoreData = [
  { month: 'Jan', score: 60 },
  { month: 'Fev', score: 65 },
  { month: 'Mar', score: 63 },
  { month: 'Abr', score: 67 },
  { month: 'Mai', score: 70 },
  { month: 'Jun', score: 75 },
  { month: 'Jul', score: 72 },
  { month: 'Ago', score: 73 },
  { month: 'Set', score: 75 },
  { month: 'Out', score: 78 },
  { month: 'Nov', score: 82 },
  { month: 'Dez', score: 85 }
];

const npsDistributionData = [
  { name: 'Promotores', value: 65 },
  { name: 'Passivos', value: 25 },
  { name: 'Detratores', value: 10 }
];

const npsCategoryData = [
  { category: 'Onboarding', promoters: 70, passives: 20, detractors: 10 },
  { category: 'Interface', promoters: 65, passives: 25, detractors: 10 },
  { category: 'Suporte', promoters: 85, passives: 10, detractors: 5 },
  { category: 'Preço', promoters: 60, passives: 25, detractors: 15 },
  { category: 'Recursos', promoters: 75, passives: 20, detractors: 5 }
];

const COLORS = ['#10B981', '#F59E0B', '#EF4444'];

export const NPSManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  
  const [surveyForm, setSurveyForm] = useState({
    title: 'Avaliação NPS CS360°',
    message: 'Queremos saber sua opinião sobre os nossos serviços. Numa escala de 0 a 10, qual a probabilidade de você recomendar o CS360° para um amigo ou colega?',
    clientSegment: 'all',
    scheduledDate: '',
    followupMessage: 'Agradecemos muito pelo seu feedback! Sua opinião é essencial para continuarmos melhorando nossos serviços.',
  });
  
  const handleSurveyFormChange = (field: string, value: string) => {
    setSurveyForm(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSendSurvey = () => {
    console.log('Enviando pesquisa NPS:', surveyForm);
    setShowSurveyModal(false);
    // Aqui implementaria a lógica de agendamento e envio
  };

  return (
    <div className="space-y-6">
      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-100 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Star className="w-8 h-8 text-green-600" />
              <span className="text-xs font-medium text-green-800 dark:text-green-400">
                Atual
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-green-600">78</p>
              <p className="text-sm text-green-700 dark:text-green-400">NPS Score</p>
            </div>
            <div className="mt-4 flex items-center text-xs text-green-600">
              <ArrowRight className="w-3 h-3 mr-1" />
              <span>+8 pontos vs trimestre anterior</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Participação
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">42%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Taxa de Resposta</p>
            </div>
            <div className="mt-4 flex items-center text-xs text-gray-600 dark:text-gray-400">
              <ArrowRight className="w-3 h-3 mr-1" />
              <span>127 de 302 clientes</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <PieChartIcon className="w-8 h-8 text-purple-600" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Distribuição
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <p className="text-xl font-bold text-green-600">65%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Promotores</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-yellow-600">25%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Passivos</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-red-600">10%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Detratores</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-orange-600" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                Agenda
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-bold text-gray-900 dark:text-white">14</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dias para próxima pesquisa</p>
            </div>
            <Button size="sm" variant="ghost" className="mt-2 text-blue-600 hover:text-blue-800 p-0 h-auto">
              Ver agenda completa
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Conteúdo Principal */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
            Gestão de NPS
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowConfigModal(true)} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
            <Button size="sm" onClick={() => setShowSurveyModal(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <Send className="w-4 h-4 mr-2" />
              Nova Pesquisa
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="details">Análise Detalhada</TabsTrigger>
              <TabsTrigger value="history">Histórico de Pesquisas</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Gráfico de Evolução do NPS */}
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gray-900 dark:text-white">
                      Evolução do NPS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={npsScoreData}>
                        <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
                        <XAxis dataKey="month" className="text-xs" />
                        <YAxis className="text-xs" domain={[0, 100]} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgb(255 255 255 / 0.95)', border: '1px solid rgb(229 231 235)', borderRadius: '8px' }} />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="score" 
                          name="NPS Score" 
                          stroke="#10B981" 
                          strokeWidth={3}
                          dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                
                {/* Distribuição do NPS */}
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gray-900 dark:text-white">
                      Distribuição do NPS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={npsDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {npsDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: 'rgb(255 255 255 / 0.95)', border: '1px solid rgb(229 231 235)', borderRadius: '8px' }} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
              
              {/* NPS por Categoria */}
              <Card className="mt-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    NPS por Categoria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={npsCategoryData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-40" />
                      <XAxis dataKey="category" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip contentStyle={{ backgroundColor: 'rgb(255 255 255 / 0.95)', border: '1px solid rgb(229 231 235)', borderRadius: '8px' }} />
                      <Legend />
                      <Bar dataKey="promoters" name="Promotores" stackId="a" fill={COLORS[0]} />
                      <Bar dataKey="passives" name="Passivos" stackId="a" fill={COLORS[1]} />
                      <Bar dataKey="detractors" name="Detratores" stackId="a" fill={COLORS[2]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="details" className="pt-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    Análise de Feedback
                  </CardTitle>
                  <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar Dados
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Aqui colocaria mais análises detalhadas de NPS */}
                    <p className="text-gray-600 dark:text-gray-400">
                      Análises detalhadas e feedback qualitativo seriam exibidos nesta seção...
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="pt-6">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    Histórico de Pesquisas
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                      <Upload className="w-4 h-4 mr-2" />
                      Importar
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
                      <Download className="w-4 h-4 mr-2" />
                      Exportar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Aqui colocaria uma tabela ou lista de pesquisas anteriores */}
                    <p className="text-gray-600 dark:text-gray-400">
                      Histórico de pesquisas NPS seria exibido nesta seção...
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Modal para Nova Pesquisa */}
      <Dialog open={showSurveyModal} onOpenChange={setShowSurveyModal}>
        <DialogContent className="bg-white dark:bg-gray-900 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Send className="w-5 h-5" />
              Nova Pesquisa NPS
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <Label htmlFor="title" className="text-gray-700 dark:text-gray-300">Título da Pesquisa</Label>
                <Input
                  id="title"
                  value={surveyForm.title}
                  onChange={(e) => handleSurveyFormChange('title', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Mensagem</Label>
                <Textarea
                  id="message"
                  value={surveyForm.message}
                  onChange={(e) => handleSurveyFormChange('message', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white mt-1"
                  rows={4}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clientSegment" className="text-gray-700 dark:text-gray-300">Segmento de Clientes</Label>
                  <Select value={surveyForm.clientSegment} onValueChange={(value) => handleSurveyFormChange('clientSegment', value)}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white mt-1">
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                      <SelectItem value="all">Todos os clientes</SelectItem>
                      <SelectItem value="tierA">Nível A</SelectItem>
                      <SelectItem value="tierB">Nível B</SelectItem>
                      <SelectItem value="tierC">Nível C</SelectItem>
                      <SelectItem value="active">Ativos (mais de 90 dias)</SelectItem>
                      <SelectItem value="new">Novos (menos de 90 dias)</SelectItem>
                      <SelectItem value="risk">Em risco</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="scheduledDate" className="text-gray-700 dark:text-gray-300">Data de Envio</Label>
                  <Input
                    id="scheduledDate"
                    type="date"
                    value={surveyForm.scheduledDate}
                    onChange={(e) => handleSurveyFormChange('scheduledDate', e.target.value)}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="followupMessage" className="text-gray-700 dark:text-gray-300">Mensagem de Agradecimento</Label>
                <Textarea
                  id="followupMessage"
                  value={surveyForm.followupMessage}
                  onChange={(e) => handleSurveyFormChange('followupMessage', e.target.value)}
                  className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white mt-1"
                  rows={2}
                />
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSurveyModal(false)} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
              Cancelar
            </Button>
            <Button onClick={handleSendSurvey} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <Send className="w-4 h-4 mr-2" />
              Programar Envio
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal para Configurações */}
      <Dialog open={showConfigModal} onOpenChange={setShowConfigModal}>
        <DialogContent className="bg-white dark:bg-gray-900 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Settings className="w-5 h-5" />
              Configurações de NPS
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-1 gap-4">
              {/* Configurações de NPS ficariam aqui */}
              <p className="text-gray-600 dark:text-gray-400">
                Configurações de frequência, segmentação, modelos de pesquisa, e outros parâmetros seriam exibidas nesta seção...
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfigModal(false)} className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600">
              Cancelar
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Salvar Configurações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
