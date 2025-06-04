
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  User,
  Activity,
  Database,
  Key,
  Globe,
  Settings
} from 'lucide-react';

export const SecurityAudit = () => {
  const securityMetrics = [
    {
      title: "Tentativas de Login",
      value: "1,247",
      change: "↑ 12 (última hora)",
      status: "normal",
      icon: User
    },
    {
      title: "Logins Falharam",
      value: "23",
      change: "↓ 5 (vs ontem)",
      status: "normal",
      icon: Lock
    },
    {
      title: "IPs Bloqueados",
      value: "156",
      change: "↑ 3 (hoje)",
      status: "warning",
      icon: Shield
    },
    {
      title: "2FA Ativo",
      value: "89.2%",
      change: "↑ 2.1% (este mês)",
      status: "good",
      icon: Key
    }
  ];

  const auditLogs = [
    {
      timestamp: "2024-01-15 14:30:22",
      user: "admin@cs360.com",
      action: "LOGIN_SUCCESS",
      resource: "Super Admin Panel",
      ip: "203.0.113.42",
      userAgent: "Chrome 119.0.0.0",
      risk: "low"
    },
    {
      timestamp: "2024-01-15 14:28:15",
      user: "system",
      action: "ACCOUNT_SUSPENDED",
      resource: "Account ID: acc_1234",
      ip: "10.0.0.1",
      userAgent: "System Process",
      risk: "medium"
    },
    {
      timestamp: "2024-01-15 14:25:33",
      user: "unknown",
      action: "LOGIN_FAILED",
      resource: "Admin Login",
      ip: "198.51.100.25",
      userAgent: "Unknown Bot",
      risk: "high"
    },
    {
      timestamp: "2024-01-15 14:22:10",
      user: "manager@cs360.com",
      action: "DATA_EXPORT",
      resource: "Customer Database",
      ip: "203.0.113.15",
      userAgent: "Firefox 118.0.1",
      risk: "medium"
    },
    {
      timestamp: "2024-01-15 14:20:45",
      user: "system",
      action: "BACKUP_COMPLETED",
      resource: "Production Database",
      ip: "10.0.0.1",
      userAgent: "Automated Backup",
      risk: "low"
    }
  ];

  const securityPolicies = [
    {
      name: "Autenticação Multi-Fator",
      status: "enabled",
      description: "2FA obrigatório para contas administrativas",
      lastUpdated: "2024-01-10"
    },
    {
      name: "Política de Senhas",
      status: "enabled", 
      description: "Mínimo 12 caracteres com complexidade",
      lastUpdated: "2024-01-08"
    },
    {
      name: "Bloqueio por IP",
      status: "enabled",
      description: "Bloqueio automático após 5 tentativas",
      lastUpdated: "2024-01-12"
    },
    {
      name: "Auditoria de Logs",
      status: "enabled",
      description: "Retenção de 90 dias para logs de segurança",
      lastUpdated: "2024-01-05"
    },
    {
      name: "Criptografia de Dados",
      status: "enabled",
      description: "AES-256 para dados em repouso",
      lastUpdated: "2024-01-01"
    },
    {
      name: "Rate Limiting",
      status: "warning",
      description: "Limite de 1000 req/min por IP",
      lastUpdated: "2024-01-14"
    }
  ];

  const activeThreats = [
    {
      type: "Brute Force Attack",
      severity: "high",
      source: "198.51.100.25",
      target: "Admin Login",
      attempts: 45,
      status: "blocked",
      firstSeen: "14:20",
      lastSeen: "14:35"
    },
    {
      type: "Suspicious API Calls",
      severity: "medium", 
      source: "203.0.113.87",
      target: "Customer API",
      attempts: 1200,
      status: "monitoring",
      firstSeen: "13:45",
      lastSeen: "14:30"
    },
    {
      type: "Unusual Login Pattern",
      severity: "low",
      source: "192.0.2.123",
      target: "User Account",
      attempts: 3,
      status: "investigating",
      firstSeen: "12:30",
      lastSeen: "14:15"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'normal': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'danger': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-blue-100 text-blue-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPolicyStatusBadge = (status: string) => {
    switch (status) {
      case 'enabled': return <Badge className="bg-green-100 text-green-800">Ativo</Badge>;
      case 'warning': return <Badge className="bg-yellow-100 text-yellow-800">Atenção</Badge>;
      case 'disabled': return <Badge className="bg-red-100 text-red-800">Inativo</Badge>;
      default: return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Auditoria e Segurança</h2>
          <p className="text-muted-foreground">Monitoramento de segurança e logs de auditoria</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Monitoramento Ativo</span>
          </Badge>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {securityMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className={`text-xs ${getStatusColor(metric.status)}`}>
                    {metric.change}
                  </p>
                </div>
                <metric.icon className={`w-8 h-8 ${getStatusColor(metric.status)}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Threats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span>Ameaças Ativas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64">
              <div className="space-y-3">
                {activeThreats.map((threat, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{threat.type}</span>
                      <Badge className={getSeverityColor(threat.severity)}>
                        {threat.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Origem: {threat.source}</div>
                      <div>Alvo: {threat.target}</div>
                      <div>Tentativas: {threat.attempts}</div>
                      <div>Status: {threat.status}</div>
                      <div>Período: {threat.firstSeen} - {threat.lastSeen}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Security Policies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Políticas de Segurança</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-64">
              <div className="space-y-3">
                {securityPolicies.map((policy, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{policy.name}</div>
                      <div className="text-sm text-muted-foreground">{policy.description}</div>
                      <div className="text-xs text-muted-foreground">
                        Atualizado: {policy.lastUpdated}
                      </div>
                    </div>
                    {getPolicyStatusBadge(policy.status)}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Audit Logs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="w-5 h-5" />
            <span>Logs de Auditoria</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Usuário</TableHead>
                  <TableHead>Ação</TableHead>
                  <TableHead>Recurso</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead>Risco</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {auditLogs.map((log, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-xs">
                      {log.timestamp}
                    </TableCell>
                    <TableCell>{log.user}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{log.action}</Badge>
                    </TableCell>
                    <TableCell className="max-w-48 truncate">
                      {log.resource}
                    </TableCell>
                    <TableCell className="font-mono text-xs">
                      {log.ip}
                    </TableCell>
                    <TableCell>
                      <Badge className={getRiskColor(log.risk)}>
                        {log.risk.toUpperCase()}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações de Segurança</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
              <Lock className="w-5 h-5" />
              <span className="text-sm">Bloquear IP</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Políticas</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
              <Eye className="w-5 h-5" />
              <span className="text-sm">Exportar Logs</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-1">
              <Activity className="w-5 h-5" />
              <span className="text-sm">Relatório</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
