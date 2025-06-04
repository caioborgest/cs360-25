
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { 
  Handshake, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Award,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';

export const PartnersManagement = () => {
  const partnerStats = [
    {
      title: "Parceiros Ativos",
      value: "89",
      change: "+12",
      icon: Handshake,
      color: "text-blue-600"
    },
    {
      title: "Leads Gerados",
      value: "2,456",
      change: "+234",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Comissões Pagas",
      value: "R$ 89.450",
      change: "+18%",
      icon: DollarSign,
      color: "text-purple-600"
    },
    {
      title: "Taxa Conversão",
      value: "24.8%",
      change: "+3.2%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const partners = [
    {
      id: 'prt_001',
      name: 'AgênciaCS Pro',
      type: 'Implementadora',
      level: 'Gold',
      status: 'approved',
      leadsGenerated: 45,
      conversions: 12,
      commission: 'R$ 4.650',
      nps: 9.2,
      certifications: 4
    },
    {
      id: 'prt_002',
      name: 'DigitalSuccess',
      type: 'Revenda',
      level: 'Platinum',
      status: 'approved',
      leadsGenerated: 89,
      conversions: 23,
      commission: 'R$ 8.970',
      nps: 8.8,
      certifications: 5
    },
    {
      id: 'prt_003',
      name: 'GrowthPartner',
      type: 'White Label',
      level: 'Elite',
      status: 'approved',
      leadsGenerated: 156,
      conversions: 42,
      commission: 'R$ 15.680',
      nps: 9.5,
      certifications: 5
    },
    {
      id: 'prt_004',
      name: 'StartCS Agency',
      type: 'Indicação',
      level: 'Member',
      status: 'pending',
      leadsGenerated: 12,
      conversions: 3,
      commission: 'R$ 450',
      nps: 7.8,
      certifications: 2
    }
  ];

  const getTypeBadge = (type: string) => {
    const typeConfig = {
      'Indicação': 'bg-gray-100 text-gray-800',
      'Revenda': 'bg-blue-100 text-blue-800',
      'Implementadora': 'bg-purple-100 text-purple-800',
      'White Label': 'bg-green-100 text-green-800'
    };
    return typeConfig[type as keyof typeof typeConfig] || typeConfig['Indicação'];
  };

  const getLevelBadge = (level: string) => {
    const levelConfig = {
      'Starter': 'bg-gray-100 text-gray-800',
      'Member': 'bg-blue-100 text-blue-800',
      'Gold': 'bg-yellow-100 text-yellow-800',
      'Platinum': 'bg-purple-100 text-purple-800',
      'Elite': 'bg-red-100 text-red-800'
    };
    return levelConfig[level as keyof typeof levelConfig] || levelConfig['Starter'];
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      approved: { label: 'Aprovado', variant: 'default' as const, icon: CheckCircle },
      pending: { label: 'Pendente', variant: 'secondary' as const, icon: Clock },
      suspended: { label: 'Suspenso', variant: 'destructive' as const, icon: AlertCircle }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.approved;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestão de Parceiros</h2>
          <p className="text-muted-foreground">Monitore performance e comissionamento de parceiros</p>
        </div>
        <Button>
          <Handshake className="w-4 h-4 mr-2" />
          Novo Parceiro
        </Button>
      </div>

      {/* Partner Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {partnerStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600">+{stat.change} este mês</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Partners Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Parceiros</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Parceiro</TableHead>
                <TableHead>Tipo/Nível</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Comissão</TableHead>
                <TableHead>NPS</TableHead>
                <TableHead>Certificações</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.map(partner => {
                const statusInfo = getStatusBadge(partner.status);
                return (
                  <TableRow key={partner.id}>
                    <TableCell>
                      <div className="font-medium">{partner.name}</div>
                      <div className="text-sm text-muted-foreground">ID: {partner.id}</div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge className={getTypeBadge(partner.type)}>
                          {partner.type}
                        </Badge>
                        <Badge className={getLevelBadge(partner.level)}>
                          {partner.level}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusInfo.variant} className="flex items-center space-x-1 w-fit">
                        <statusInfo.icon className="w-3 h-3" />
                        <span>{statusInfo.label}</span>
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{partner.leadsGenerated} leads</div>
                        <div className="text-muted-foreground">{partner.conversions} conversões</div>
                        <div className="text-green-600">
                          {((partner.conversions / partner.leadsGenerated) * 100).toFixed(1)}% conv.
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-green-600">
                      {partner.commission}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">{partner.nps}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {partner.certifications}/5
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">Ver</Button>
                        <Button variant="ghost" size="sm">Pagar</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
