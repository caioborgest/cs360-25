
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { useForm } from 'react-hook-form';
import { Users, UserPlus, Edit, Trash2, Shield, Eye, Mail, Calendar, Lock, CheckCircle, AlertTriangle } from 'lucide-react';

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

const roles = [
  { value: 'admin', label: 'Administrador da Conta', color: 'red', accessLevel: 5, permissions: ['all'] },
  { value: 'cs_manager', label: 'Gestor de CS', color: 'blue', accessLevel: 4, permissions: ['clients', 'contracts', 'reports', 'strategies'] },
  { value: 'sales_specialist', label: 'Especialista de Vendas', color: 'green', accessLevel: 3, permissions: ['clients', 'services', 'ltv_cac'] },
  { value: 'cs_user', label: 'Usuário CS', color: 'gray', accessLevel: 2, permissions: ['clients', 'nps'] },
  { value: 'financial_analyst', label: 'Analista Financeiro', color: 'purple', accessLevel: 3, permissions: ['reports', 'ltv_cac', 'contracts'] }
];

const departments = [
  'Customer Success',
  'Vendas',
  'Financeiro',
  'Marketing',
  'Tecnologia',
  'Administrativo'
];

const allPermissions = [
  { id: 'clients', name: 'Gestão de Clientes', department: 'cs' },
  { id: 'contracts', name: 'Contratos', department: 'financial' },
  { id: 'services', name: 'Serviços & Upsell', department: 'sales' },
  { id: 'nps', name: 'NPS', department: 'cs' },
  { id: 'ltv_cac', name: 'LTV & CAC', department: 'financial' },
  { id: 'strategies', name: 'Estratégias', department: 'cs' },
  { id: 'automation', name: 'Automação & IA', department: 'tech' },
  { id: 'reports', name: 'Relatórios', department: 'admin' },
  { id: 'user_management', name: 'Gestão de Usuários', department: 'admin' },
  { id: 'billing', name: 'Faturamento', department: 'financial' }
];

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
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      role: 'cs_user',
      department: 'Customer Success',
      permissions: []
    }
  });

  const getRoleBadgeColor = (role: string) => {
    const roleData = roles.find(r => r.value === role);
    return roleData?.color || 'gray';
  };

  const getRoleLabel = (role: string) => {
    const roleData = roles.find(r => r.value === role);
    return roleData?.label || role;
  };

  const getAccessLevelIcon = (level: number) => {
    if (level >= 5) return <Shield className="w-4 h-4 text-red-500" />;
    if (level >= 4) return <Lock className="w-4 h-4 text-blue-500" />;
    if (level >= 3) return <CheckCircle className="w-4 h-4 text-green-500" />;
    return <Eye className="w-4 h-4 text-gray-500" />;
  };

  const handleRoleChange = (roleValue: string) => {
    const role = roles.find(r => r.value === roleValue);
    if (role) {
      setSelectedPermissions(role.permissions);
      form.setValue('role', roleValue);
    }
  };

  const handleCreateUser = (data: any) => {
    const selectedRole = roles.find(r => r.value === data.role);
    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      role: data.role || 'cs_user',
      status: 'active',
      lastAccess: 'Nunca',
      permissions: selectedPermissions,
      department: data.department,
      accessLevel: selectedRole?.accessLevel || 2
    };
    setUsers([...users, newUser]);
    setIsDialogOpen(false);
    setSelectedPermissions([]);
    form.reset();
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  const canAccessPermission = (userPermissions: string[], permission: string) => {
    return userPermissions.includes('all') || userPermissions.includes(permission);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <CardTitle>Gestão de Usuários & Permissões</CardTitle>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center space-x-2">
                <UserPlus className="w-4 h-4" />
                <span>Novo Usuário</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Adicionar Novo Usuário</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleCreateUser)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Digite o nome" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="usuario@empresa.com" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Perfil de Acesso</FormLabel>
                          <Select onValueChange={handleRoleChange} value={field.value || 'cs_user'}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione um perfil" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {roles.map(role => (
                                <SelectItem key={role.value} value={role.value}>
                                  <div className="flex items-center space-x-2">
                                    {getAccessLevelIcon(role.accessLevel)}
                                    <span>{role.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Departamento</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value || 'Customer Success'}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o departamento" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {departments.map(dept => (
                                <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-3">
                    <FormLabel>Permissões do Sistema</FormLabel>
                    <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto border rounded-lg p-4">
                      {allPermissions.map(permission => (
                        <div key={permission.id} className="flex items-center space-x-3">
                          <input 
                            type="checkbox" 
                            id={permission.id} 
                            className="rounded"
                            checked={selectedPermissions.includes(permission.id) || selectedPermissions.includes('all')}
                            onChange={(e) => {
                              if (e.target.checked && !selectedPermissions.includes(permission.id)) {
                                setSelectedPermissions([...selectedPermissions, permission.id]);
                              } else {
                                setSelectedPermissions(selectedPermissions.filter(p => p !== permission.id));
                              }
                            }}
                            disabled={selectedPermissions.includes('all')}
                          />
                          <label htmlFor={permission.id} className="text-sm flex items-center space-x-2">
                            <span>{permission.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {permission.department}
                            </Badge>
                          </label>
                        </div>
                      ))}
                    </div>
                    {selectedPermissions.includes('all') && (
                      <div className="flex items-center space-x-2 text-sm text-blue-600 bg-blue-50 p-2 rounded">
                        <Shield className="w-4 h-4" />
                        <span>Administrador tem acesso total ao sistema</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancelar
                    </Button>
                    <Button type="submit">Criar Usuário</Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Perfil & Acesso</TableHead>
                <TableHead>Departamento</TableHead>
                <TableHead>Permissões</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {getAccessLevelIcon(user.accessLevel)}
                      <Badge variant="secondary" className={`bg-${getRoleBadgeColor(user.role)}-100 text-${getRoleBadgeColor(user.role)}-800`}>
                        {getRoleLabel(user.role)}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.department}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {user.permissions.includes('all') ? (
                        <Badge className="bg-red-100 text-red-800 text-xs">
                          Acesso Total
                        </Badge>
                      ) : (
                        user.permissions.slice(0, 2).map(permission => (
                          <Badge key={permission} variant="outline" className="text-xs">
                            {allPermissions.find(p => p.id === permission)?.name || permission}
                          </Badge>
                        ))
                      )}
                      {user.permissions.length > 2 && !user.permissions.includes('all') && (
                        <Badge variant="outline" className="text-xs">
                          +{user.permissions.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                        {user.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                      {user.status === 'active' && (
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {user.lastAccess}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" title="Editar usuário">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="Ver detalhes">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Remover usuário"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Activity Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span>Monitoramento de Atividades</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { user: 'Maria Santos', action: 'Acessou relatórios financeiros', time: '2 min atrás', status: 'normal' },
              { user: 'Carlos Oliveira', action: 'Tentou acessar área restrita', time: '5 min atrás', status: 'warning' },
              { user: 'Ana Costa', action: 'Exportou dados de contratos', time: '15 min atrás', status: 'normal' },
              { user: 'João Silva', action: 'Criou novo usuário', time: '1h atrás', status: 'admin' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.status === 'warning' ? 'bg-yellow-500' : 
                    activity.status === 'admin' ? 'bg-blue-500' : 'bg-green-500'
                  }`}></div>
                  <div>
                    <p className="text-sm font-medium">{activity.user}</p>
                    <p className="text-xs text-gray-600">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
