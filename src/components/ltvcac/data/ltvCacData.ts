
export const ltvCacData = [
  { month: 'Jan', ltv: 124000, cac: 2800, ratio: 44.3, clients: 127, revenue: 485000, cacEfficiency: 78, cacTrend: 'up' },
  { month: 'Fev', ltv: 128000, cac: 2650, ratio: 48.3, clients: 132, revenue: 502000, cacEfficiency: 82, cacTrend: 'down' },
  { month: 'Mar', ltv: 132000, cac: 2900, ratio: 45.5, clients: 138, revenue: 518000, cacEfficiency: 75, cacTrend: 'up' },
  { month: 'Abr', ltv: 135000, cac: 2750, ratio: 49.1, clients: 145, revenue: 535000, cacEfficiency: 85, cacTrend: 'down' },
  { month: 'Mai', ltv: 142000, cac: 2600, ratio: 54.6, clients: 151, revenue: 548000, cacEfficiency: 88, cacTrend: 'down' },
  { month: 'Jun', ltv: 148000, cac: 2450, ratio: 60.4, clients: 158, revenue: 565000, cacEfficiency: 92, cacTrend: 'down' }
];

export const cacAnalysisData = [
  { channel: 'Google Ads', cac: 2800, volume: 45, efficiency: 78, trend: 'stable' },
  { channel: 'Facebook Ads', cac: 3200, volume: 32, efficiency: 65, trend: 'down' },
  { channel: 'LinkedIn', cac: 4500, volume: 18, efficiency: 85, trend: 'up' },
  { channel: 'Organic', cac: 800, volume: 25, efficiency: 95, trend: 'up' },
  { channel: 'Referral', cac: 1200, volume: 38, efficiency: 90, trend: 'up' }
];

export const cacOptimizationSuggestions = [
  { 
    channel: 'Facebook Ads', 
    currentCAC: 3200, 
    targetCAC: 2800, 
    potentialSaving: 12800, 
    action: 'Otimizar targeting de audiência',
    priority: 'high'
  },
  { 
    channel: 'Google Ads', 
    currentCAC: 2800, 
    targetCAC: 2400, 
    potentialSaving: 18000, 
    action: 'Melhorar Quality Score das palavras-chave',
    priority: 'medium'
  },
  { 
    channel: 'LinkedIn', 
    currentCAC: 4500, 
    targetCAC: 3800, 
    potentialSaving: 12600, 
    action: 'Testar formatos de anúncios',
    priority: 'low'
  }
];

export const segmentData = [
  { segment: 'Nível A', ltv: 180000, cac: 2200, ratio: 81.8, clients: 45, avgContract: 24, churnRate: 2.1, payback: 8 },
  { segment: 'Nível B', ltv: 148000, cac: 2450, ratio: 60.4, clients: 78, avgContract: 18, churnRate: 3.5, payback: 11 },
  { segment: 'Nível C', ltv: 95000, cac: 2800, ratio: 33.9, clients: 120, avgContract: 12, churnRate: 5.8, payback: 16 },
  { segment: 'Arrojado', ltv: 165000, cac: 2300, ratio: 71.7, clients: 32, avgContract: 20, churnRate: 2.8, payback: 9 },
  { segment: 'Moderado', ltv: 125000, cac: 2600, ratio: 48.1, clients: 89, avgContract: 15, churnRate: 4.2, payback: 13 },
  { segment: 'Conservador', ltv: 110000, cac: 2900, ratio: 37.9, clients: 65, avgContract: 14, churnRate: 6.1, payback: 15 }
];

export const clientRanking = [
  { id: 1, name: 'Tech Solutions Corp', ltv: 285000, segment: 'Nível A', nps: 89, churn_risk: 'Baixo', monthly_revenue: 12500 },
  { id: 2, name: 'Digital Marketing Pro', ltv: 265000, segment: 'Nível A', nps: 92, churn_risk: 'Baixo', monthly_revenue: 11800 },
  { id: 3, name: 'Innovation Labs', ltv: 245000, segment: 'Nível A', nps: 87, churn_risk: 'Baixo', monthly_revenue: 10900 },
  { id: 4, name: 'Data Analytics Inc', ltv: 225000, segment: 'Nível B', nps: 85, churn_risk: 'Baixo', monthly_revenue: 9800 },
  { id: 5, name: 'Cloud Services Ltd', ltv: 210000, segment: 'Nível B', nps: 78, churn_risk: 'Médio', monthly_revenue: 8950 },
  { id: 6, name: 'Web Development Co', ltv: 195000, segment: 'Nível B', nps: 82, churn_risk: 'Baixo', monthly_revenue: 8200 },
  { id: 7, name: 'Mobile Apps Studio', ltv: 185000, segment: 'Nível B', nps: 75, churn_risk: 'Médio', monthly_revenue: 7800 },
  { id: 8, name: 'E-commerce Plus', ltv: 175000, segment: 'Nível C', nps: 72, churn_risk: 'Médio', monthly_revenue: 7200 },
  { id: 9, name: 'Social Media Agency', ltv: 165000, segment: 'Nível C', nps: 69, churn_risk: 'Alto', monthly_revenue: 6800 },
  { id: 10, name: 'Content Creators', ltv: 155000, segment: 'Nível C', nps: 65, churn_risk: 'Alto', monthly_revenue: 6200 }
];

export const cohortData = [
  { cohort: 'Jan 2023', ltv3m: 42000, ltv6m: 85000, ltv12m: 148000, ltv24m: 220000 },
  { cohort: 'Fev 2023', ltv3m: 38000, ltv6m: 82000, ltv12m: 145000, ltv24m: 215000 },
  { cohort: 'Mar 2023', ltv3m: 45000, ltv6m: 88000, ltv12m: 152000, ltv24m: 225000 },
  { cohort: 'Abr 2023', ltv3m: 41000, ltv6m: 86000, ltv12m: 149000, ltv24m: null },
  { cohort: 'Mai 2023', ltv3m: 43000, ltv6m: 87000, ltv12m: 151000, ltv24m: null },
  { cohort: 'Jun 2023', ltv3m: 46000, ltv6m: 89000, ltv12m: null, ltv24m: null }
];

export const cohortAnalysis = [
  { cohort: 'Jan 2023', size: 127, ltv_3m: 42000, ltv_6m: 85000, ltv_12m: 148000, ltv_24m: 220000, retention_12m: 78 },
  { cohort: 'Fev 2023', size: 132, ltv_3m: 38000, ltv_6m: 82000, ltv_12m: 145000, ltv_24m: 215000, retention_12m: 82 },
  { cohort: 'Mar 2023', size: 138, ltv_3m: 45000, ltv_6m: 88000, ltv_12m: 152000, ltv_24m: 225000, retention_12m: 75 },
  { cohort: 'Abr 2023', size: 145, ltv_3m: 41000, ltv_6m: 86000, ltv_12m: 149000, ltv_24m: null, retention_12m: 85 },
  { cohort: 'Mai 2023', size: 151, ltv_3m: 43000, ltv_6m: 87000, ltv_12m: 151000, ltv_24m: null, retention_12m: 88 },
  { cohort: 'Jun 2023', size: 158, ltv_3m: 46000, ltv_6m: 89000, ltv_12m: null, ltv_24m: null, retention_12m: null }
];

export const calculationModels = [
  { 
    id: 1, 
    name: 'Modelo Tradicional', 
    description: 'Baseado em ARPU e Churn Rate médio', 
    ltv: 148000, 
    accuracy: 85, 
    active: true 
  },
  { 
    id: 2, 
    name: 'Modelo Preditivo', 
    description: 'Usa Machine Learning para prever comportamento', 
    ltv: 152000, 
    accuracy: 92, 
    active: false 
  },
  { 
    id: 3, 
    name: 'Modelo Segmentado', 
    description: 'Calcula LTV por segmento de cliente', 
    ltv: 145000, 
    accuracy: 88, 
    active: false 
  }
];
