
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
import { Users, UserPlus, Edit, Trash2, Shield, Eye, Mail, Calendar } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastAccess: string;
  permissions: string[];
}

const roles = [
  { value: 'admin', label: 'Administrador da Conta', color: 'red' },
  { value: 'cs_manager', label: 'Gestor de CS', color: 'blue' },
  { value: 'sales_specialist', label: 'Especialista de Vendas', color: 'green' },
  { value: 'cs_user', label: 'Usuário CS', color: 'gray' }
];

const permissions = [
  'Visualizar Dashboard',
  'Gerenciar Clientes',
  'Editar Contratos',
  'Configurar Estratégias',
  'Acessar Relatórios',
  'Gerenciar Usuários',
  'Configurações da Conta'
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
      permissions: permissions
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@empresa.com',
      role: 'cs_manager',
      status: 'active',
      lastAccess: '2024-01-15 09:15',
      permissions: permissions.slice(0, 5)
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      role: 'cs_user',
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

  const handleCreateUser = (data: any) => {
    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      role: data.role || 'cs_user',
      status: 'active',
      lastAccess: 'Nunca',
      permissions: data.permissions || []
    };
    setUsers([...users, newUser]);
    setIsDialogOpen(false);
    form.reset({
      name: '',
      email: '',
      role: 'cs_user',
      permissions: []
    });
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <CardTitle>Gerenciamento de Usuários</CardTitle>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-2">
              <UserPlus className="w-4 h-4" />
              <span>Novo Usuário</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Usuário</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleCreateUser)} className="space-y-4">
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
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Perfil de Acesso</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value || 'cs_user'}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um perfil" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {roles.map(role => (
                            <SelectItem key={role.value} value={role.value}>
                              {role.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <div className="space-y-2">
                  <FormLabel>Permissões</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {permissions.map(permission => (
                      <div key={permission} className="flex items-center space-x-2">
                        <input type="checkbox" id={permission} className="rounded" />
                        <label htmlFor={permission} className="text-sm">{permission}</label>
                      </div>
                    ))}
                  </div>
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
              <TableHead>Perfil</TableHead>
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
                  <Badge variant="secondary" className={`bg-${getRoleBadgeColor(user.role)}-100 text-${getRoleBadgeColor(user.role)}-800`}>
                    {getRoleLabel(user.role)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                    {user.status === 'active' ? 'Ativo' : 'Inativo'}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-500">
                  {user.lastAccess}
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-800"
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
  );
};
