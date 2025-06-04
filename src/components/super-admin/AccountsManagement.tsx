
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Building2, 
  Users, 
  Calendar,
  TrendingUp,
  AlertTriangle,
  Eye,
  Settings,
  Ban,
  CheckCircle
} from 'lucide-react';

export const AccountsManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [planFilter, setPlanFilter] = useState('todos');

  const accounts = [
    {
      id: 'acc_001',
      companyName: 'TechFlow Solutions',
      domain: 'techflow.com.br',
      plan: 'Professional',
      status: 'active',
      users: 12,
      mrr: 'R$ 499',
      createdAt: '2024-01-15',
      lastActivity: '2024-01-20 14:30',
      admin: 'Carlos Silva'
    },
    {
      id: 'acc_002',
      companyName: 'DataInova Corp',
      domain: 'datainova.com',
      plan: 'Enterprise',
      status: 'active',
      users: 45,
      mrr: 'R$ 2.500',
      createdAt: '2023-12-08',
      lastActivity: '2024-01-20 09:15',
      admin: 'Ana Costa'
    },
    {
      id: 'acc_003',
      companyName: 'CloudSoft Ltd',
      domain: 'cloudsoft.io',
      plan: 'Growth',
      status: 'trial',
      users: 8,
      mrr: 'R$ 0',
      createdAt: '2024-01-18',
      lastActivity: '2024-01-19 16:45',
      admin: 'Roberto Lima'
    },
    {
      id: 'acc_004',
      companyName: 'StartupX',
      domain: 'startupx.com.br',
      plan: 'Starter',
      status: 'suspended',
      users: 3,
      mrr: 'R$ 199',
      createdAt: '2023-11-22',
      lastActivity: '2024-01-10 11:20',
      admin: 'Maria Santos'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: 'Ativa', variant: 'default' as const },
      trial: { label: 'Trial', variant: 'secondary' as const },
      suspended: { label: 'Suspensa', variant: 'destructive' as const },
      cancelled: { label: 'Cancelada', variant: 'outline' as const }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.active;
  };

  const getPlanBadge = (plan: string) => {
    const planConfig = {
      'Starter': 'bg-gray-100 text-gray-800',
      'Professional': 'bg-blue-100 text-blue-800',
      'Growth': 'bg-purple-100 text-purple-800',
      'Enterprise': 'bg-green-100 text-green-800'
    };
    return planConfig[plan as keyof typeof planConfig] || planConfig.Starter;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Contas</h2>
          <p className="text-muted-foreground">Monitore e gerencie todas as contas do sistema</p>
        </div>
        <Button>
          <Building2 className="w-4 h-4 mr-2" />
          Nova Conta
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total de Contas</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <Building2 className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Contas Ativas</p>
                <p className="text-2xl font-bold">1,089</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Em Trial</p>
                <p className="text-2xl font-bold">127</p>
              </div>
              <Calendar className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">MRR Total</p>
                <p className="text-2xl font-bold">R$ 624K</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Buscar por empresa, domínio..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos Status</SelectItem>
                <SelectItem value="active">Ativa</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
                <SelectItem value="suspended">Suspensa</SelectItem>
                <SelectItem value="cancelled">Cancelada</SelectItem>
              </SelectContent>
            </Select>

            <Select value={planFilter} onValueChange={setPlanFilter}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Plano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos Planos</SelectItem>
                <SelectItem value="starter">Starter</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="growth">Growth</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Limpar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Accounts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Contas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Empresa</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Usuários</TableHead>
                <TableHead>MRR</TableHead>
                <TableHead>Criada em</TableHead>
                <TableHead>Última Atividade</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map(account => (
                <TableRow key={account.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{account.companyName}</div>
                      <div className="text-sm text-muted-foreground">{account.domain}</div>
                      <div className="text-xs text-muted-foreground">Admin: {account.admin}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPlanBadge(account.plan)}>
                      {account.plan}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadge(account.status).variant}>
                      {getStatusBadge(account.status).label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{account.users}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{account.mrr}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(account.createdAt).toLocaleDateString('pt-BR')}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {account.lastActivity}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
