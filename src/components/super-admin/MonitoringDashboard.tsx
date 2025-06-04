
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  Activity,
  Server,
  Database,
  Cpu,
  HardDrive,
  Wifi,
  AlertTriangle,
  CheckCircle,
  Clock,
  RefreshCw,
  Download,
  Filter
} from 'lucide-react';

export const MonitoringDashboard = () => {
  const [autoRefresh, setAutoRefresh] = useState(true);

  const systemServices = [
    {
      name: "API Gateway",
      status: "online",
      uptime: "99.98%",
      responseTime: "145ms",
      requests: "2.4M/day",
      errors: "0.02%"
    },
    {
      name: "Database Primary",
      status: "online",
      uptime: "99.99%",
      responseTime: "12ms",
      connections: "245/500",
      queries: "15.2K/min"
    },
    {
      name: "Redis Cache",
      status: "online",
      uptime: "99.95%",
      responseTime: "3ms",
      hitRate: "94.2%",
      memory: "2.1GB/8GB"
    },
    {
      name: "File Storage",
      status: "online",
      uptime: "99.92%",
      responseTime: "89ms",
      usage: "456GB/2TB",
      bandwidth: "124MB/s"
    },
    {
      name: "Email Service",
      status: "online",
      uptime: "99.87%",
      responseTime: "234ms",
      delivered: "98.9%",
      queue: "12 pending"
    },
    {
      name: "Background Jobs",
      status: "warning",
      uptime: "99.85%",
      responseTime: "567ms",
      processed: "1.2K/min",
      failed: "0.8%"
    }
  ];

  const performanceMetrics = [
    { name: "CPU Usage", value: 24, unit: "%", status: "normal", threshold: 80 },
    { name: "Memory Usage", value: 67, unit: "%", status: "normal", threshold: 85 },
    { name: "Disk I/O", value: 43, unit: "%", status: "normal", threshold: 90 },
    { name: "Network In", value: 156, unit: "MB/s", status: "normal", threshold: 500 },
    { name: "Network Out", value: 89, unit: "MB/s", status: "normal", threshold: 500 },
    { name: "Database Connections", value: 245, unit: "conn", status: "normal", threshold: 450 }
  ];

  const systemLogs = [
    {
      timestamp: "2024-01-15 14:32:15",
      level: "INFO",
      service: "API Gateway",
      message: "Health check completed successfully",
      details: "All endpoints responding normally"
    },
    {
      timestamp: "2024-01-15 14:31:45",
      level: "WARNING",
      service: "Background Jobs",
      message: "Queue processing slower than usual",
      details: "Average processing time: 567ms (threshold: 300ms)"
    },
    {
      timestamp: "2024-01-15 14:30:22",
      level: "ERROR",
      service: "Email Service",
      message: "Failed to send email notification",
      details: "SMTP timeout for user notification email"
    },
    {
      timestamp: "2024-01-15 14:29:10",
      level: "INFO",
      service: "Database",
      message: "Automatic backup completed",
      details: "Backup size: 2.4GB, Duration: 145s"
    },
    {
      timestamp: "2024-01-15 14:28:33",
      level: "INFO",
      service: "Cache",
      message: "Cache statistics updated",
      details: "Hit rate: 94.2%, Memory usage: 2.1GB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'offline': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'online': return <Badge className="bg-green-100 text-green-800">Online</Badge>;
      case 'warning': return <Badge className="bg-yellow-100 text-yellow-800">Atenção</Badge>;
      case 'offline': return <Badge className="bg-red-100 text-red-800">Offline</Badge>;
      default: return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'INFO': return 'text-blue-600 bg-blue-50';
      case 'WARNING': return 'text-yellow-600 bg-yellow-50';
      case 'ERROR': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getMetricColor = (value: number, threshold: number) => {
    const percentage = (value / threshold) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Monitoramento do Sistema</h2>
          <p className="text-muted-foreground">Status em tempo real e métricas de performance</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={autoRefresh ? 'bg-green-50 border-green-200' : ''}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${autoRefresh ? 'animate-spin' : ''}`} />
            Auto Refresh
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar Logs
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="services">Serviços</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Status Geral</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">99.96%</div>
                  <div className="text-sm text-muted-foreground">Uptime Geral</div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-sm font-medium text-green-800">
                      Sistema Operacional
                    </div>
                    <div className="text-xs text-green-600">
                      Todos os serviços críticos online
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  <span>Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tempo de Resposta</span>
                    <span className="font-medium">145ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Requisições/min</span>
                    <span className="font-medium">1.8K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Taxa de Erro</span>
                    <span className="font-medium text-green-600">0.02%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <span>Alertas Ativos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">2</div>
                  <div className="text-sm text-muted-foreground">Alertas de Warning</div>
                  <div className="mt-4 space-y-2">
                    <div className="text-xs bg-yellow-50 p-2 rounded text-yellow-800">
                      Background Jobs lentos
                    </div>
                    <div className="text-xs bg-yellow-50 p-2 rounded text-yellow-800">
                      Uso de memória alto
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{metric.name}</p>
                      <p className={`text-2xl font-bold ${getMetricColor(metric.value, metric.threshold)}`}>
                        {metric.value}{metric.unit}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className={`h-2 rounded-full ${
                            getMetricColor(metric.value, metric.threshold).includes('red') ? 'bg-red-500' :
                            getMetricColor(metric.value, metric.threshold).includes('yellow') ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min((metric.value / metric.threshold) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Limite: {metric.threshold}{metric.unit}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Status dos Serviços</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Server className={`w-5 h-5 ${getStatusColor(service.status)}`} />
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Uptime: {service.uptime} | Response: {service.responseTime}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(service.status)}
                      <div className="text-xs text-muted-foreground mt-1">
                        {service.requests || service.connections || service.usage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Logs do Sistema</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {systemLogs.map((log, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border rounded text-sm">
                      <div className="flex-shrink-0">
                        <Badge className={`text-xs ${getLogLevelColor(log.level)}`}>
                          {log.level}
                        </Badge>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{log.service}</span>
                          <span className="text-muted-foreground">{log.timestamp}</span>
                        </div>
                        <div className="text-gray-900 mt-1">{log.message}</div>
                        <div className="text-muted-foreground text-xs mt-1">{log.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
