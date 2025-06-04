
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { 
  Settings, 
  Shield, 
  Database, 
  Globe, 
  Bell,
  Zap,
  Lock,
  Monitor,
  Activity
} from 'lucide-react';

export const SystemSettings = () => {
  const systemHealth = [
    { service: "API Gateway", status: "online", uptime: "99.98%", responseTime: "145ms" },
    { service: "Database Primary", status: "online", uptime: "99.99%", responseTime: "12ms" },
    { service: "Redis Cache", status: "online", uptime: "99.95%", responseTime: "3ms" },
    { service: "Queue Workers", status: "warning", uptime: "99.87%", responseTime: "250ms" },
    { service: "File Storage", status: "online", uptime: "99.92%", responseTime: "89ms" }
  ];

  const featureFlags = [
    { name: "Nova Dashboard IA", enabled: true, description: "Dashboard com insights de IA para admins" },
    { name: "Programa Parceiros V2", enabled: false, description: "Nova versão do programa de parceiros" },
    { name: "Billing Automático", enabled: true, description: "Cobrança automática de upgrades" },
    { name: "White Label Beta", enabled: false, description: "Funcionalidades white label em beta" },
    { name: "API v3", enabled: false, description: "Nova versão da API com GraphQL" }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      online: { label: 'Online', variant: 'default' as const, color: 'text-green-500' },
      warning: { label: 'Atenção', variant: 'secondary' as const, color: 'text-yellow-500' },
      offline: { label: 'Offline', variant: 'destructive' as const, color: 'text-red-500' }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.online;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Configurações do Sistema</h2>
          <p className="text-muted-foreground">Monitoramento e configurações avançadas da plataforma</p>
        </div>
        <Button variant="outline">
          <Activity className="w-4 h-4 mr-2" />
          Logs do Sistema
        </Button>
      </div>

      {/* System Health */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Monitor className="w-5 h-5" />
            <span>Status dos Serviços</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systemHealth.map((service, index) => {
              const statusInfo = getStatusBadge(service.status);
              return (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      service.status === 'online' ? 'bg-green-500' : 
                      service.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></div>
                    <div>
                      <div className="font-medium">{service.service}</div>
                      <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium">Uptime: {service.uptime}</div>
                    <div className="text-muted-foreground">Resp: {service.responseTime}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Feature Flags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>Feature Flags</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {featureFlags.map((feature, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{feature.name}</div>
                  <div className="text-sm text-muted-foreground">{feature.description}</div>
                </div>
                <Switch checked={feature.enabled} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security & Configuration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Segurança</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">2FA Obrigatório</div>
                <div className="text-sm text-muted-foreground">Para contas Enterprise</div>
              </div>
              <Switch checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">IP Whitelist</div>
                <div className="text-sm text-muted-foreground">Restringir acesso por IP</div>
              </div>
              <Switch checked={false} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Audit Logs</div>
                <div className="text-sm text-muted-foreground">Log completo de ações</div>
              </div>
              <Switch checked={true} />
            </div>
            <Button variant="outline" className="w-full">
              <Lock className="w-4 h-4 mr-2" />
              Configurar Políticas
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="w-5 h-5" />
              <span>Manutenção</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="font-medium text-blue-800">Backup Automático</div>
              <div className="text-sm text-blue-600">Último: Hoje 03:00</div>
              <div className="text-sm text-blue-600">Próximo: Amanhã 03:00</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="font-medium text-green-800">Cache Status</div>
              <div className="text-sm text-green-600">Hit Rate: 94.2%</div>
              <div className="text-sm text-green-600">Memória: 2.1GB / 8GB</div>
            </div>
            <Button variant="outline" className="w-full">
              <Database className="w-4 h-4 mr-2" />
              Executar Manutenção
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Global Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>Configurações Globais</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="font-medium">Limite Global de Usuários</label>
                <div className="text-sm text-muted-foreground">Máximo de usuários por conta</div>
                <div className="text-lg font-bold mt-1">100 usuários</div>
              </div>
              <div>
                <label className="font-medium">Retenção de Logs</label>
                <div className="text-sm text-muted-foreground">Tempo de armazenamento</div>
                <div className="text-lg font-bold mt-1">90 dias</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="font-medium">Taxa Padrão API</label>
                <div className="text-sm text-muted-foreground">Requisições por minuto</div>
                <div className="text-lg font-bold mt-1">1000 req/min</div>
              </div>
              <div>
                <label className="font-medium">Modo Manutenção</label>
                <div className="text-sm text-muted-foreground">Desabilitar acesso temporariamente</div>
                <Switch checked={false} className="mt-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
