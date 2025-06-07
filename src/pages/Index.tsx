
import React from 'react';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/hooks/useAuth';
import { useClients } from '@/hooks/useClients';
import { useContracts } from '@/hooks/useContracts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, FileText, TrendingUp, Target, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { profile } = useAuth();
  const { clients } = useClients();
  const { contracts } = useContracts();
  const navigate = useNavigate();

  const activeClients = clients.filter(c => c.status === 'Ativo').length;
  const activeContracts = contracts.filter(c => c.status === 'Ativo').length;
  const totalMRR = clients.reduce((sum, client) => sum + client.mrr, 0);
  const averageNPS = clients.length > 0 
    ? Math.round(clients.reduce((sum, client) => sum + (client.nps_score || 0), 0) / clients.length)
    : 0;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Bem-vindo, {profile?.full_name || 'Usuário'}!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Aqui está um resumo da sua plataforma de Customer Success
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clientes Ativos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeClients}</div>
              <p className="text-xs text-muted-foreground">
                de {clients.length} total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contratos Ativos</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeContracts}</div>
              <p className="text-xs text-muted-foreground">
                de {contracts.length} total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">MRR Total</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                R$ {totalMRR.toLocaleString('pt-BR')}
              </div>
              <p className="text-xs text-muted-foreground">
                Receita mensal recorrente
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NPS Médio</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageNPS}</div>
              <p className="text-xs text-muted-foreground">
                Net Promoter Score
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Gestão de Clientes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Gerencie seus clientes, acompanhe métricas e analise o desempenho.
              </p>
              <Button onClick={() => navigate('/clients')} className="w-full">
                Ir para Clientes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contratos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Monitore contratos, renovações e oportunidades de upsell.
              </p>
              <Button onClick={() => navigate('/contracts')} className="w-full">
                Ver Contratos
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objetivos & Metas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Defina e acompanhe metas de crescimento e performance.
              </p>
              <Button onClick={() => navigate('/goals')} className="w-full">
                Gerenciar Metas
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Plan & Credits Info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Plano & Créditos IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Plano atual: <span className="font-semibold capitalize">{profile?.plan_type || 'starter'}</span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Créditos IA: {(profile?.ai_credits || 0) - (profile?.ai_credits_used || 0)} / {profile?.ai_credits || 0}
                </p>
              </div>
              <Button onClick={() => navigate('/pricing')} variant="outline">
                Upgrade de Plano
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Index;
