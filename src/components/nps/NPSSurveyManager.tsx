
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
import { 
  Send, 
  Calendar, 
  Users, 
  Mail, 
  Eye, 
  Edit, 
  Trash2,
  Plus,
  Filter
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
    createdAt: '2024-11-25'
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
    createdAt: '2024-12-10'
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
    createdAt: '2024-12-18'
  }
];

export const NPSSurveyManager: React.FC = () => {
  const [surveys, setSurveys] = useState<NPSSurvey[]>(mockSurveys);
  const [showCreateModal, setShowCreateModal] = useState(false);
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
      draft: { label: 'Rascunho', variant: 'secondary' as const, color: 'bg-gray-100 text-gray-800' },
      scheduled: { label: 'Agendada', variant: 'default' as const, color: 'bg-blue-100 text-blue-800' },
      sent: { label: 'Enviada', variant: 'default' as const, color: 'bg-yellow-100 text-yellow-800' },
      completed: { label: 'Concluída', variant: 'default' as const, color: 'bg-green-100 text-green-800' }
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
    const newSurvey: NPSSurvey = {
      id: Date.now().toString(),
      title: formData.title,
      message: formData.message,
      targetSegment: formData.targetSegment,
      status: formData.scheduledDate ? 'scheduled' : 'draft',
      scheduledDate: formData.scheduledDate,
      totalSent: 0,
      totalResponses: 0,
      createdAt: new Date().toISOString().split('T')[0]
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
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Gerenciamento de Pesquisas NPS
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Crie, agende e monitore pesquisas NPS enviadas por email
          </p>
        </div>
        <Button onClick={() => setShowCreateModal(true)} className="bg-gradient-to-r from-blue-600 to-purple-600">
          <Plus className="w-4 h-4 mr-2" />
          Nova Pesquisa
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Enviadas</p>
                <p className="text-2xl font-bold text-blue-600">
                  {surveys.reduce((sum, s) => sum + s.totalSent, 0)}
                </p>
              </div>
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Respostas</p>
                <p className="text-2xl font-bold text-green-600">
                  {surveys.reduce((sum, s) => sum + s.totalResponses, 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Taxa de Resposta</p>
                <p className="text-2xl font-bold text-purple-600">
                  {Math.round((surveys.reduce((sum, s) => sum + s.totalResponses, 0) / 
                    Math.max(surveys.reduce((sum, s) => sum + s.totalSent, 0), 1)) * 100)}%
                </p>
              </div>
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Agendadas</p>
                <p className="text-2xl font-bold text-orange-600">
                  {surveys.filter(s => s.status === 'scheduled').length}
                </p>
              </div>
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Surveys Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Pesquisas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pesquisa</TableHead>
                <TableHead>Segmento</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Agendamento</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>NPS Score</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {surveys.map(survey => {
                const statusInfo = getStatusBadge(survey.status);
                const responseRate = survey.totalSent > 0 
                  ? Math.round((survey.totalResponses / survey.totalSent) * 100) 
                  : 0;
                
                return (
                  <TableRow key={survey.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{survey.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {survey.message}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {getSegmentLabel(survey.targetSegment)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusInfo.color}>
                        {statusInfo.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>Agendada: {survey.scheduledDate}</div>
                        {survey.sentDate && (
                          <div className="text-gray-500">Enviada: {survey.sentDate}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{survey.totalSent} enviadas</div>
                        <div>{survey.totalResponses} respostas</div>
                        <div className="text-green-600">{responseRate}% taxa</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {survey.npsScore ? (
                        <div className="text-lg font-bold text-green-600">
                          {survey.npsScore}
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        {survey.status === 'scheduled' && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleSendSurvey(survey.id)}
                            className="text-blue-600"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        )}
                        <Button variant="ghost" size="sm" className="text-red-600">
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
            <DialogTitle>Nova Pesquisa NPS</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="title">Título da Pesquisa</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Ex: Pesquisa de Satisfação Q4 2024"
              />
            </div>
            
            <div>
              <Label htmlFor="message">Mensagem da Pesquisa</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Digite a mensagem que será enviada por email..."
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="segment">Segmento de Clientes</Label>
                <Select 
                  value={formData.targetSegment} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, targetSegment: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os clientes</SelectItem>
                    <SelectItem value="tierA">Nível A</SelectItem>
                    <SelectItem value="tierB">Nível B</SelectItem>
                    <SelectItem value="tierC">Nível C</SelectItem>
                    <SelectItem value="new">Novos (< 90 dias)</SelectItem>
                    <SelectItem value="active">Ativos (> 90 dias)</SelectItem>
                    <SelectItem value="risk">Em risco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="scheduledDate">Data de Envio</Label>
                <Input
                  id="scheduledDate"
                  type="date"
                  value={formData.scheduledDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, scheduledDate: e.target.value }))}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="followup">Mensagem de Agradecimento</Label>
              <Textarea
                id="followup"
                value={formData.followupMessage}
                onChange={(e) => setFormData(prev => ({ ...prev, followupMessage: e.target.value }))}
                placeholder="Mensagem exibida após o cliente responder a pesquisa..."
                rows={2}
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateModal(false)}>
              Cancelar
            </Button>
            <Button onClick={handleCreateSurvey}>
              Criar Pesquisa
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
