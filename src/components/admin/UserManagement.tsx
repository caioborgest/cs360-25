
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { Users, UserPlus } from 'lucide-react';
import { UserForm } from './users/UserForm';
import { UserTable } from './users/UserTable';
import { ActivityMonitor } from './users/ActivityMonitor';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastAccess: string;
  permissions: string[];
  department: string;
  accessLevel: number;
}

export const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@empresa.com',
      role: 'admin',
      status: 'active',
      lastAccess: '2024-01-15 14:30',
      permissions: ['all'],
      department: 'Administrativo',
      accessLevel: 5
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@empresa.com',
      role: 'cs_manager',
      status: 'active',
      lastAccess: '2024-01-15 09:15',
      permissions: ['clients', 'contracts', 'reports', 'strategies'],
      department: 'Customer Success',
      accessLevel: 4
    },
    {
      id: '3',
      name: 'Carlos Oliveira',
      email: 'carlos@empresa.com',
      role: 'sales_specialist',
      status: 'active',
      lastAccess: '2024-01-15 11:20',
      permissions: ['clients', 'services', 'ltv_cac'],
      department: 'Vendas',
      accessLevel: 3
    },
    {
      id: '4',
      name: 'Ana Costa',
      email: 'ana@empresa.com',
      role: 'financial_analyst',
      status: 'active',
      lastAccess: '2024-01-15 08:45',
      permissions: ['reports', 'ltv_cac', 'contracts'],
      department: 'Financeiro',
      accessLevel: 3
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCreateUser = (newUser: User) => {
    setUsers([...users, newUser]);
    setIsDialogOpen(false);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <CardTitle>Gestão de Usuários & Permissões</CardTitle>
          </div>
          <Button onClick={() => setIsDialogOpen(true)} className="flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Novo Usuário</span>
          </Button>
        </CardHeader>
        <CardContent>
          <UserTable users={users} onDeleteUser={handleDeleteUser} />
        </CardContent>
      </Card>

      <ActivityMonitor />

      <UserForm 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={handleCreateUser}
      />
    </div>
  );
};
