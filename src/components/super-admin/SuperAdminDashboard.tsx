
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  TrendingUp, 
  Users, 
  Building2, 
  DollarSign, 
  Handshake,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export const SuperAdminDashboard = () => {
  const stats = [
    {
      title: "Contas Ativas",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: Building2,
      color: "text-blue-600"
    },
    {
      title: "Receita Mensal",
      value: "R$ 624.350",
      change: "+8.2%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Usuários Ativos",
      value: "8.943",
      change: "+15.7%",
      trend: "up",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Parceiros Ativos",
      value: "89",
      change: "+23.1%",
      trend: "up",
      icon: Handshake,
      color: "text-orange-600"
    }
  ];

  const recentActivity = [
    {
      type: "new_account",
      message: "Nova conta criada: TechFlow Solutions",
      time: "5 min atrás",
      status: "success"
    },
    {
      type: "upgrade",
      message: "DataInova fez upgrade para Enterprise",
      time: "12 min atrás",
      status: "success"
    },
    {
      type: "partner_application",
      message: "Nova solicitação de parceria: AgênciaCS",
      time: "25 min atrás",
      status: "warning"
    },
    {
      type: "churn_alert",
      message: "Alerta de churn: CloudSoft (risco alto)",
      time: "1h atrás",
      status: "error"
    },
    {
      type: "payment",
      message: "Pagamento recebido: R$ 4.997 - GrowthCorp",
      time: "2h atrás",
      status: "success"
    }
  ];

  const accountsByPlan = [
    { plan: "Starter", count: 543, revenue: "R$ 108.057", color: "bg-gray-500" },
    { plan: "Professional", count: 398, revenue: "R$ 198.602", color: "bg-blue-500" },
    { plan: "Growth", count: 246, revenue: "R$ 245.754", color: "bg-purple-500" },
    { plan: "Enterprise", count: 60, revenue: "R$ 71.937", color: "bg-green-500" }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="w-3 h-3 text-red-500 mr-1" />
                )}
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>
                  {stat.change}
                </span>
                <span className="ml-1">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Atividade Recente</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {activity.status === "success" && (
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    )}
                    {activity.status === "warning" && (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    )}
                    {activity.status === "error" && (
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Accounts by Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building2 className="w-5 h-5" />
              <span>Contas por Plano</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {accountsByPlan.map((plan, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${plan.color}`}></div>
                    <div>
                      <div className="font-medium">{plan.plan}</div>
                      <div className="text-sm text-muted-foreground">{plan.count} contas</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{plan.revenue}</div>
                    <div className="text-sm text-muted-foreground">MRR</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Health */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Status do Sistema</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium">API Status</div>
                <div className="text-sm text-green-600">Operacional</div>
              </div>
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div>
                <div className="font-medium">Database</div>
                <div className="text-sm text-green-600">99.9% Uptime</div>
              </div>
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div>
                <div className="font-medium">Queue Jobs</div>
                <div className="text-sm text-yellow-600">1.2k pendentes</div>
              </div>
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
