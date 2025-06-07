
// Interfaces locais para a aplicação
export interface DatabaseClient {
  id: string;
  user_id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  tier: 'A' | 'B' | 'C';
  status: 'Ativo' | 'Risco' | 'Inativo';
  mrr: number;
  ltv: number;
  cac: number;
  nps_score?: number;
  nps_category?: 'Promotor' | 'Passivo' | 'Detrator';
  risk_score: number;
  last_interaction?: string;
  created_at: string;
  updated_at: string;
}

export interface DatabaseContract {
  id: string;
  user_id: string;
  client_id: string;
  contract_number: string;
  start_date: string;
  end_date: string;
  value: number;
  status: 'Ativo' | 'Encerrado' | 'Suspenso' | 'Cancelado';
  renewal_status: 'Renovado' | 'Pendente' | 'Em Negociação' | 'Rejeitado';
  services?: any;
  created_at: string;
  updated_at: string;
}

export interface DatabaseGoal {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  category: string;
  target: number;
  current: number;
  unit: string;
  deadline: string;
  status: 'on-track' | 'at-risk' | 'behind' | 'completed';
  priority: 'low' | 'medium' | 'high';
  created_at: string;
  updated_at: string;
}

export interface DatabaseService {
  id: string;
  user_id: string;
  name: string;
  category: 'plano' | 'addon' | 'implementacao' | 'treinamento';
  price: number;
  description?: string;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface DatabaseProfile {
  id: string;
  full_name?: string;
  company_name?: string;
  plan_type?: string;
  ai_credits?: number;
  ai_credits_used?: number;
}
