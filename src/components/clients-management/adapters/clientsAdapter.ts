
import type { DatabaseClient } from '@/types/database';

export interface DisplayClient {
  id: number;
  name: string;
  contact: string;
  email: string;
  tier: string;
  profile: string;
  nps: number;
  npsCategory: string;
  ltv: number;
  ltvProjected: number;
  contractEnd: string;
  services: number;
  trust: number;
  status: string;
  lastInteraction: string;
  riskScore: number;
  opportunities: string[];
  contracts: Array<{
    id: string;
    service: string;
    status: string;
    value: number;
  }>;
}

export const convertToDisplayClient = (dbClient: DatabaseClient): DisplayClient => {
  return {
    id: parseInt(dbClient.id.slice(0, 8), 16), // Convert UUID to number for display
    name: dbClient.name,
    contact: dbClient.phone || 'N/A',
    email: dbClient.email,
    tier: dbClient.tier,
    profile: 'Moderado', // Default profile
    nps: dbClient.nps_score || 0,
    npsCategory: dbClient.nps_category || 'Passivo',
    ltv: dbClient.ltv,
    ltvProjected: dbClient.ltv * 1.2, // Projected 20% higher
    contractEnd: '2024-12-31', // Default contract end
    services: 1, // Default services count
    trust: 85, // Default trust score
    status: dbClient.status,
    lastInteraction: dbClient.last_interaction || dbClient.updated_at,
    riskScore: dbClient.risk_score,
    opportunities: ['Upsell Premium', 'Add-on Services'], // Default opportunities
    contracts: [
      {
        id: `CT-${dbClient.id.slice(0, 6).toUpperCase()}`,
        service: 'Plano Principal',
        status: 'Ativo',
        value: dbClient.mrr * 12
      }
    ]
  };
};
