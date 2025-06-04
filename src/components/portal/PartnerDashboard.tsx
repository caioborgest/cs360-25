
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { TrendingUp, Users, DollarSign, Award, Copy, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/badge';

export const PartnerDashboard = () => {
  const partnerInfo = {
    name: "Digital Solutions",
    type: "Revenda",
    level: "Gold",
    referralLink: "https://app.cs360.com/r/digital-solutions-xyz"
  };

  const stats = [
    {
      title: "Leads Gerados",
      value: "47",
      change: "+12 este mês",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Clientes Convertidos",
      value: "12",
      change: "+3 este mês",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Comissão do Mês",
      value: "R$ 1.794,00",
      change: "+23% vs anterior",
      icon: DollarSign,
      color: "text-purple-600"
    },
    {
      title: "NPS Médio",
      value: "8.5",
      change: "Excelente",
      icon: Award,
      color: "text-orange-600"
    }
  ];

  const copyReferralLink = () => {
    navigator.clipboard.writeText(partnerInfo.referralLink);
    // toast success
  };

  return (
    <div className="space-y-6">
      {/* Partner Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Informações do Parceiro</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{partnerInfo.name}</h3>
              <div className="flex items-center space-x-3">
                <Badge variant="outline">{partnerInfo.type}</Badge>
                <Badge>{partnerInfo.level}</Badge>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="text-sm text-muted-foreground">Seu Link de Indicação</div>
              <div className="flex items-center space-x-2">
                <code className="bg-muted px-2 py-1 rounded text-sm">
                  {partnerInfo.referralLink.substring(0, 30)}...
                </code>
                <Button size="sm" variant="outline" onClick={copyReferralLink}>
                  <Copy className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex-col space-y-2">
              <Users className="w-6 h-6" />
              <span>Gerar Link de Indicação</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <DollarSign className="w-6 h-6" />
              <span>Solicitar Pagamento</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Award className="w-6 h-6" />
              <span>Fazer Certificação</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
