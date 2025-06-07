
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../ui/table';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  ExternalLink,
  Copy,
  Eye,
  TrendingUp,
  Users,
  MousePointer,
  Star,
  Calendar,
  Search,
  Download,
  Filter
} from 'lucide-react';

const mockLinksData = [
  {
    id: '1',
    slug: 'pesquisa-trimestral-q2',
    surveyName: 'Pesquisa Trimestral Q2',
    url: 'https://cs360.app/survey/pesquisa-trimestral-q2',
    status: 'ativa',
    clicks: 247,
    responses: 189,
    responseRate: 76.5,
    npsScore: 78,
    createdAt: '2024-06-01',
    lastAccessed: '2024-06-15 14:30',
    sources: [
      { name: 'Email', count: 156, percentage: 82.5 },
      { name: 'Redes Sociais', count: 21, percentage: 11.1 },
      { name: 'Link Direto', count: 12, percentage: 6.4 }
    ]
  },
  {
    id: '2',
    slug: 'pos-implementacao',
    surveyName: 'Pesquisa Pós-Implementação',
    url: 'https://cs360.app/survey/pos-implementacao',
    status: 'finalizada',
    clicks: 156,
    responses: 143,
    responseRate: 91.7,
    npsScore: 82,
    createdAt: '2024-05-15',
    lastAccessed: '2024-05-30 16:45',
    sources: [
      { name: 'Email', count: 134, percentage: 93.7 },
      { name: 'QR Code', count: 6, percentage: 4.2 },
      { name: 'Website', count: 3, percentage: 2.1 }
    ]
  }
];

const dailyStatsData = [
  { date: '2024-06-10', clicks: 23, responses: 18, rate: 78.3 },
  { date: '2024-06-11', clicks: 31, responses: 24, rate: 77.4 },
  { date: '2024-06-12', clicks: 28, responses: 22, rate: 78.6 },
  { date: '2024-06-13', clicks: 35, responses: 28, rate: 80.0 },
  { date: '2024-06-14', clicks: 42, responses: 31, rate: 73.8 },
  { date: '2024-06-15', clicks: 38, responses: 29, rate: 76.3 }
];

const sourceColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const getStatusColor = (status: string) => {
  const colors = {
    'ativa': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    'finalizada': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    'pausada': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'expirada': 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
};

export const NPSLinksReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const filteredLinks = mockLinksData.filter(link =>
    link.surveyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalClicks = mockLinksData.reduce((sum, link) => sum + link.clicks, 0);
  const totalResponses = mockLinksData.reduce((sum, link) => sum + link.responses, 0);
  const avgResponseRate = totalClicks > 0 ? (totalResponses / totalClicks) * 100 : 0;
  const avgNPSScore = mockLinksData.reduce((sum, link) => sum + link.npsScore, 0) / mockLinksData.length;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      {/* Métricas Gerais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total de Cliques</p>
                <p className="text-2xl font-bold text-blue-600">{totalClicks.toLocaleString()}</p>
              </div>
              <MousePointer className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Respostas</p>
                <p className="text-2xl font-bold text-green-600">{totalResponses.toLocaleString()}</p>
              </div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Taxa Conversão</p>
                <p className="text-2xl font-bold text-purple-600">{avgResponseRate.toFixed(1)}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">NPS Médio</p>
                <p className="text-2xl font-bold text-orange-600">{avgNPSScore.toFixed(0)}</p>
              </div>
              <Star className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos de Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">Performance Diária</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyStatsData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => new Date(value).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })}
                />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  labelFormatter={(value) => new Date(value).toLocaleDateString('pt-BR')}
                  formatter={(value: any, name: string) => [
                    name === 'rate' ? `${value}%` : value,
                    name === 'clicks' ? 'Cliques' : name === 'responses' ? 'Respostas' : 'Taxa de Conversão'
                  ]}
                />
                <Line type="monotone" dataKey="clicks" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="responses" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="rate" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900 dark:text-white">Fontes de Tráfego</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockLinksData[0].sources}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ name, percentage }) => `${name} (${percentage}%)`}
                >
                  {mockLinksData[0].sources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={sourceColors[index % sourceColors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any, name: string) => [value, 'Cliques']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Links */}
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-gray-900 dark:text-white">Links de Pesquisas</CardTitle>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar pesquisas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 bg-white dark:bg-gray-700"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pesquisa</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Cliques</TableHead>
                  <TableHead>Respostas</TableHead>
                  <TableHead>Taxa</TableHead>
                  <TableHead>NPS</TableHead>
                  <TableHead>Último Acesso</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLinks.map((link) => (
                  <TableRow key={link.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <TableCell>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{link.surveyName}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{link.slug}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(link.status)} capitalize`}>
                        {link.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-300">{link.clicks}</TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-300">{link.responses}</TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-300">{link.responseRate}%</TableCell>
                    <TableCell>
                      <span className="font-medium text-blue-600 dark:text-blue-400">
                        {link.npsScore}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-700 dark:text-gray-300">
                      <div className="text-sm">
                        {new Date(link.lastAccessed).toLocaleDateString('pt-BR')}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => copyToClipboard(link.url)}
                          className="bg-white dark:bg-gray-700"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(link.url, '_blank')}
                          className="bg-white dark:bg-gray-700"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => setSelectedLink(selectedLink === link.id ? null : link.id)}
                          className="bg-white dark:bg-gray-700"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Detalhes do Link Selecionado */}
          {selectedLink && (
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-600">
              {(() => {
                const link = mockLinksData.find(l => l.id === selectedLink);
                return link ? (
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">Detalhes: {link.surveyName}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label className="text-sm text-gray-600 dark:text-gray-400">URL Completa</Label>
                        <p className="text-sm text-gray-900 dark:text-white break-all">{link.url}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600 dark:text-gray-400">Criado em</Label>
                        <p className="text-sm text-gray-900 dark:text-white">{new Date(link.createdAt).toLocaleDateString('pt-BR')}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600 dark:text-gray-400">Fontes de Tráfego</Label>
                        <div className="space-y-1">
                          {link.sources.map((source, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-gray-700 dark:text-gray-300">{source.name}</span>
                              <span className="text-gray-900 dark:text-white">{source.count} ({source.percentage}%)</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
