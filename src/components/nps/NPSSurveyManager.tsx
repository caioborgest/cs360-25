
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { useToast } from '../../hooks/use-toast';
import { 
  Send, 
  Calendar, 
  Users, 
  Mail, 
  Eye, 
  Edit, 
  Trash2,
  Plus,
  Filter,
  CheckCircle,
  Clock,
  AlertCircle,
  Target,
  BarChart3
} from 'lucide-react';

interface NPSSurvey {
  id: string;
  title: string;
  message: string;
  targetSegment: string;
  status: 'draft' | 'scheduled' | 'sent' | 'completed';
  scheduledDate: string;
  sentDate?: string;
  totalSent: number;
  totalResponses: number;
  npsScore?: number;
  createdAt: string;
  followupMessage?: string;
}

const mockSurveys: NPSSurvey[] = [
  {
    id: '1',
    title: 'Pesquisa Q4 2024',
    message: 'Como você avaliaria nossos serviços?',
    targetSegment: 'all',
    status: 'completed',
    scheduledDate: '2024-12-01',
    sentDate: '2024-12-01',
    totalSent: 127,
    totalResponses: 89,
    npsScore: 78,
    createdAt: '2024-11-25',
    followupMessage: 'Obrigado por sua resposta valiosa!'
  },
  {
    id: '2',
    title: 'Pesquisa Onboarding',
    message: 'Como foi sua experiência de onboarding?',
    targetSegment: 'new',
    status: 'sent',
    scheduledDate: '2024-12-15',
    sentDate: '2024-12-15',
    totalSent: 23,
    totalResponses: 12,
    createdAt: '2024-12-10',
    followupMessage: 'Sua opinião nos ajuda a melhorar!'
  },
  {
    id: '3',
    title: 'Pesquisa Trimestral',
    message: 'Avalie nossos serviços no último trimestre',
    targetSegment: 'tierA',
    status: 'scheduled',
    scheduledDate: '2024-12-30',
    totalSent: 0,
    totalResponses: 0,
    createdAt: '2024-12-18',
    followupMessage: 'Agradecemos sua participação!'
  }
];

export const NPSSurveyManager: React.FC = () => {
  const { toast } = useToast();
  const [surveys, setSurveys] = useState<NPSSurvey[]>(mockSurveys);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState<NPSSurvey | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    targetSegment: 'all',
    scheduledDate: '',
    followupMessage: ''
  });

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      draft: { label: 'Rascunho', variant: 'secondary' as const, color: 'bg-gray-100 text-gray-800', icon: Edit },
      scheduled: { label: 'Agendada', variant: 'default' as const, color: 'bg-blue-100 text-blue-800', icon: Clock },
      sent: { label: 'Enviada', variant: 'default' as const, color: 'bg-yellow-100 text-yellow-800', icon: Send },
      completed: { label: 'Concluída', variant: 'default' as const, color: 'bg-green-100 text-green-800', icon: CheckCircle }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.draft;
  };

  const getSegmentLabel = (segment: string) => {
    const segments = {
      all: 'Todos os clientes',
      tierA: 'Nível A',
      tierB: 'Nível B', 
      tierC: 'Nível C',
      new: 'Novos (< 90 dias)',
      active: 'Ativos (> 90 dias)',
      risk: 'Em risco'
    };
    return segments[segment as keyof typeof segments] || segment;
  };

  const handleCreateSurvey = () => {
    if (!formData.title || !formData.message) {
      toast({
        title: "Erro",
        description: "Título e mensagem são obrigatórios",
        variant: "destructive"
      });
      return;
    }

    const newSurvey: NPSSurvey = {
      id: Date.now().toString(),
      title: formData.title,
      message: formData.message,
      targetSegment: formData.targetSegment,
      status: formData.scheduledDate ? 'scheduled' : 'draft',
      scheduledDate: formData.scheduledDate || new Date().toISOString().split('T')[0],
      totalSent: 0,
      totalResponses: 0,
      createdAt: new Date().toISOString().split('T')[0],
      followupMessage: formData.followupMessage || 'Obrigado por sua resposta!'
    };
    
    setSurveys([newSurvey, ...surveys]);
    setShowCreateModal(false);
    setFormData({
      title: '',
      message: '',
      targetSegment: 'all',
      scheduledDate: '',
      followupMessage: ''
    });

    toast({
      title: "Sucesso",
      description: "Pesquisa criada com sucesso!",
    });
  };

  const handleSendSurvey = (surveyId: string) => {
    setSurveys(surveys.map(survey => 
      survey.id === surveyId 
        ? { 
            ...survey, 
            status: 'sent' as const, 
            sentDate: new Date().toISOString().split('T')[0],
            totalSent: Math.floor(Math.random() * 200) + 50
          }
        : survey
    ));

    toast({
      title: "Pesquisa Enviada",
      description: "A pesquisa foi enviada com sucesso para os clientes!",
    });
  };

  const handleViewSurvey = (survey: NPSSurvey) => {
    setSelectedSurvey(survey);
    setShowViewModal(true);
  };

  const handleEditSurvey = (survey: NPSSurvey) => {
    setSelectedSurvey(survey);
    setFormData({
      title: survey.title,
      message: survey.message,
      targetSegment: survey.targetSegment,
      scheduledDate: survey.scheduledDate,
      followupMessage: survey.followupMessage || ''
    });
    setShowEditModal(true);
  };

  const handleUpdateSurvey = () => {
    if (!selectedSurvey) return;

    setSurveys(surveys.map(survey => 
      survey.id === selectedSurvey.id 
        ? {
            ...survey,
            title: formData.title,
            message: formData.message,
            targetSegment: formData.targetSegment,
            scheduledDate: formData.scheduledDate,
            followupMessage: formData.followupMessage
          }
        : survey
    ));

    setShowEditModal(false);
    setSelectedSurvey(null);

    toast({
      title: "Sucesso",
      description: "Pesquisa atualizada com sucesso!",
    });
  };

  const handleDeleteSurvey = (surveyId: string) => {
    setSurveys(surveys.filter(survey => survey.id !== surveyId));
    toast({
      title: "Sucesso",
      description: "Pesquisa removida com sucesso!",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Gerenciamento de Pesquisas NPS
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Crie, agende e monitore pesquisas NPS enviadas automaticamente por email
          </p>
        </div>
        <Button 
          onClick={() => setShowCreateModal(true)} 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
          size="lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nova Pesquisa
        </Button>
      </div>

      {/* Enhanced Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Total Enviadas</p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                  {surveys.reduce((sum, s) => sum + s.totalSent, 0)}
                </p>
                <p className="text-xs text-blue-500 mt-1">Emails enviados</p>
              </div>
              <Mail className="w-10 h-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">Total Respostas</p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-300">
                  {surveys.reduce((sum, s) => sum + s.totalResponses, 0)}
                </p>
                <p className="text-xs text-green-500 mt-1">Clientes responderam</p>
              </div>
              <Users className="w-10 h-10 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Taxa de Resposta</p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                  {Math.round((surveys.reduce((sum, s) => sum + s.totalResponses, 0) / 
                    Math.max(surveys.reduce((sum, s) => sum + s.totalSent, 0), 1)) * 100)}%
                </p>
                <p className="text-xs text-purple-500 mt-1">Taxa de engajamento</p>
              </div>
              <BarChart3 className="w-10 h-10 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600 dark:text-orange-400">Agendadas</p>
                <p className="text-3xl font-bold text-orange-700 dark:text-orange-300">
                  {surveys.filter(s => s.status === 'scheduled').length}
                </p>
                <p className="text-xs text-orange-500 mt-1">Pesquisas pendentes</p>
              </div>
              <Calendar className="w-10 h-10 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Surveys Table */}
      <Card className="shadow-lg border-0">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Target className="w-6 h-6 text-blue-600" />
            Lista de Pesquisas NPS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50/50 dark:bg-gray-800/50">
                <TableHead className="font-semibold">Pesquisa</TableHead>
                <TableHead className="font-semibold">Segmento</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Cronograma</TableHead>
                <TableHead className="font-semibold">Performance</TableHead>
                <TableHead className="font-semibold">NPS Score</TableHead>
                <TableHead className="font-semibold">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {surveys.map(survey => {
                const statusInfo = getStatusBadge(survey.status);
                const responseRate = survey.totalSent > 0 
                  ? Math.round((survey.totalResponses / survey.totalSent) * 100) 
                  : 0;
                
                return (
                  <TableRow key={survey.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                    <TableCell>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{survey.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs mt-1">
                          {survey.message}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-medium">
                        {getSegmentLabel(survey.targetSegment)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${statusInfo.color} flex items-center gap-1 w-fit`}>
                        <statusInfo.icon className="w-3 h-3" />
                        {statusInfo.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">Agendada: {survey.scheduledDate}</div>
                        {survey.sentDate && (
                          <div className="text-gray-500 mt-1">Enviada: {survey.sentDate}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        <div className="font-medium">{survey.totalSent} enviadas</div>
                        <div className="text-gray-600">{survey.totalResponses} respostas</div>
                        <div className="text-green-600 font-semibold">{responseRate}% taxa</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {survey.npsScore ? (
                        <div className="text-2xl font-bold text-green-600">
                          {survey.npsScore}
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleViewSurvey(survey)}
                          className="hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEditSurvey(survey)}
                          className="hover:bg-yellow-50 hover:text-yellow-600"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        {survey.status === 'scheduled' && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleSendSurvey(survey.id)}
                            className="text-green-600 hover:bg-green-50"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleDeleteSurvey(survey.id)}
                          className="text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Survey Modal */}
      <Dialog open={showCreateModal} onOpenChange={setShowCreateModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Nova Pesquisa NPS</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div>
              <Label htmlFor="title" className="text-sm font-semibold">Título da Pesquisa</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Ex: Pesquisa de Satisfação Q4 2024"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="text-sm font-semibold">Mensagem da Pesquisa</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Digite a mensagem que será enviada por email..."
                rows={3}
                className="mt-1"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="segment" className="text-sm font-semibold">Segmento de Clientes</Label>
                <Select 
                  value={formData.targetSegment} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, targetSegment: value }))}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os clientes</SelectItem>
                    <SelectItem value="tierA">Nível A</SelectItem>
                    <SelectItem value="tierB">Nível B</SelectItem>
                    <SelectItem value="tierC">Nível C</SelectItem>
                    <SelectItem value="new">Novos (&lt; 90 dias)</SelectItem>
                    <SelectItem value="active">Ativos (&gt; 90 dias)</SelectItem>
                    <SelectItem value="risk">Em risco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="scheduledDate" className="text-sm font-semibold">Data de Envio</Label>
                <Input
                  id="scheduledDate"
                  type="date"
                  value={formData.scheduledDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, scheduledDate: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="followup" className="text-sm font-semibold">Mensagem de Agradecimento</Label>
              <Textarea
                id="followup"
                value={formData.followupMessage}
                onChange={(e) => setFormData(prev => ({ ...prev, followupMessage: e.target.value }))}
                placeholder="Mensagem exibida após o cliente responder a pesquisa..."
                rows={2}
                className="mt-1"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleCreateSurvey} className="bg-gradient-to-r from-blue-600 to-purple-600">
              Criar Pesquisa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Survey Modal */}
      <Dialog open={showViewModal} onOpenChange={setShowViewModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Detalhes da Pesquisa</DialogTitle>
          </DialogHeader>
          
          {selectedSurvey && (
            <div className="space-y-4 py-4">
              <div>
                <Label className="text-sm font-semibold">Título</Label>
                <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded">{selectedSurvey.title}</p>
              </div>
              
              <div>
                <Label className="text-sm font-semibold">Mensagem</Label>
                <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded">{selectedSurvey.message}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-semibold">Segmento</Label>
                  <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded">{getSegmentLabel(selectedSurvey.targetSegment)}</p>
                </div>
                <div>
                  <Label className="text-sm font-semibold">Status</Label>
                  <div className="mt-1">
                    <Badge className={getStatusBadge(selectedSurvey.status).color}>
                      {getStatusBadge(selectedSurvey.status).label}
                    </Badge>
                  </div>
                </div>
              </div>

              {selectedSurvey.followupMessage && (
                <div>
                  <Label className="text-sm font-semibold">Mensagem de Agradecimento</Label>
                  <p className="mt-1 p-2 bg-gray-50 dark:bg-gray-800 rounded">{selectedSurvey.followupMessage}</p>
                </div>
              )}
            </div>
          )}
          
          <DialogFooter>
            <Button onClick={() => setShowViewModal(false)}>
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Survey Modal */}
      <Dialog open={showEditModal} onOpenChange={setShowEditModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Editar Pesquisa</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div>
              <Label htmlFor="title" className="text-sm font-semibold">Título da Pesquisa</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Ex: Pesquisa de Satisfação Q4 2024"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="text-sm font-semibold">Mensagem da Pesquisa</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Digite a mensagem que será enviada por email..."
                rows={3}
                className="mt-1"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="segment" className="text-sm font-semibold">Segmento de Clientes</Label>
                <Select 
                  value={formData.targetSegment} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, targetSegment: value }))}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os clientes</SelectItem>
                    <SelectItem value="tierA">Nível A</SelectItem>
                    <SelectItem value="tierB">Nível B</SelectItem>
                    <SelectItem value="tierC">Nível C</SelectItem>
                    <SelectItem value="new">Novos (&lt; 90 dias)</SelectItem>
                    <SelectItem value="active">Ativos (&gt; 90 dias)</SelectItem>
                    <SelectItem value="risk">Em risco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="scheduledDate" className="text-sm font-semibold">Data de Envio</Label>
                <Input
                  id="scheduledDate"
                  type="date"
                  value={formData.scheduledDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, scheduledDate: e.target.value }))}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="followup" className="text-sm font-semibold">Mensagem de Agradecimento</Label>
              <Textarea
                id="followup"
                value={formData.followupMessage}
                onChange={(e) => setFormData(prev => ({ ...prev, followupMessage: e.target.value }))}
                placeholder="Mensagem exibida após o cliente responder a pesquisa..."
                rows={2}
                className="mt-1"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleUpdateSurvey} className="bg-gradient-to-r from-blue-600 to-purple-600">
              Atualizar Pesquisa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
