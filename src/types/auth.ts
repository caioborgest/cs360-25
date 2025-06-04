
export type UserRole = 'super_admin' | 'account_admin' | 'cs_manager' | 'cs_user' | 'sales_specialist';

export type SubscriptionPlan = 'starter' | 'professional' | 'growth' | 'enterprise';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  accountId?: string; // null for super_admin
  isActive: boolean;
  createdAt: string;
  lastAccess?: string;
  permissions: string[];
}

export interface Account {
  id: string;
  companyName: string;
  domain: string;
  plan: SubscriptionPlan;
  status: 'active' | 'suspended' | 'trial' | 'cancelled';
  createdAt: string;
  trialEndsAt?: string;
  subscriptionEndsAt?: string;
  maxUsers: number;
  currentUsers: number;
  features: string[];
  customizations?: {
    logo?: string;
    primaryColor?: string;
    domain?: string;
  };
}

export interface SuperAdminStats {
  totalAccounts: number;
  activeAccounts: number;
  trialAccounts: number;
  totalRevenue: number;
  monthlyRevenue: number;
  totalUsers: number;
  activePartners: number;
  conversionRate: number;
}
