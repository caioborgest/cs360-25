
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useForm } from 'react-hook-form';
import { 
  Users, 
  UserPlus, 
  DollarSign, 
  Phone, 
  HeadphonesIcon,
  Mail,
  Edit,
  Trash2
} from 'lucide-react';

interface InternalUser {
  id: string;
  name: string;
  email: string;
  role: 'financeiro' | 'comercial' | 'cs';
  department: string;
  phone: string;
  status: 'active' | 'inactive';
  permissions: string[];
}

interface InternalUserFormData {
  name: string;
  email: string;
  role: 'financeiro' | 'comercial' | 'cs';
  phone: string;
}

export const InternalTeamManagement = () => {
  const [users, setUsers] = useState<InternalUser[]>([
    {
      id: '1',
      name: 'Ana Silva',
      email: 'ana.silva@cs360.com',
      role: 'financeiro',
      department: 'Financeiro',
      phone: '(11) 99999-1111',
      status: 'active',
      permissions: ['comissoes', 'notas_fiscais', 'pagamentos']
    },
    {
      id: '2',
      name: 'Carlos Santos',
      email: 'carlos.santos@cs360.com',
      role: 'comercial',
      department: 'Comercial',
      phone: '(11) 99999-2222',
      status: 'active',
      permissions: ['vendas', 'prospecção', 'negociação']
    },
    {
      id: '3',
      name: 'Maria Costa',
      email: 'maria.costa@cs360.com',
      role: 'cs',
      department: 'Customer Success',
      phone: '(11) 99999-3333',
      status: 'active',
      permissions: ['acompanhamento', 'onboarding', 'relacionamento']
    }
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const form = useForm<InternalUserFormData>();

  const roles = [
    { 
      value: 'financeiro', 
      label: 'Financeiro', 
      icon: DollarSign, 
      color: 'bg-green-100 text-green-800',
      permissions: ['comissoes', 'notas_fiscais', 'pagamentos', 'relatorios_financeiros']
    },
    { 
      value: 'comercial', 
      label: 'Consultor Comercial', 
      icon: Phone, 
      color: 'bg-blue-100 text-blue-800',
      permissions: ['vendas', 'prospecção', 'negociação', 'propostas']
    },
    { 
      value: 'cs', 
      label: 'Customer Success', 
      icon: HeadphonesIcon, 
      color: 'bg-purple-100 text-purple-800',
      permissions: ['acompanhamento', 'onboarding', 'relacionamento', 'suporte']
    }
  ];

  const getRoleInfo = (role: string) => {
    return roles.find(r => r.value === role) || roles[0];
  };

  const handleSubmit = (data: InternalUserFormData) => {
    const roleInfo = getRoleInfo(data.role);
    const newUser: InternalUser = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      role: data.role,
      department: roleInfo.label,
      phone: data.phone,
      status: 'active',
      permissions: roleInfo.permissions
    };
    
    setUsers([...users, newUser]);
    form.reset();
    setIsFormOpen(false);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Equipe Interna - Gestão de Parceiros</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Gerencie a equipe responsável pelo programa de parceiros
            </p>
          </div>
          <Button onClick={() => setIsFormOpen(true)}>
            <UserPlus className="w-4 h-4 mr-2" />
            Novo Usuário
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuário</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Departamento</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Permissões</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(user => {
                const roleInfo = getRoleInfo(user.role);
                return (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {user.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <roleInfo.icon className="w-4 h-4" />
                        <span>{roleInfo.label}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={roleInfo.color}>
                        {user.department}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {user.phone}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {user.permissions.slice(0, 2).map(permission => (
                          <Badge key={permission} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                        {user.permissions.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{user.permissions.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                        {user.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Novo Usuário da Equipe</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
                      <Input type="email" placeholder="usuario@cs360.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Função</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a função" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roles.map(role => (
                          <SelectItem key={role.value} value={role.value}>
                            <div className="flex items-center space-x-2">
                              <role.icon className="w-4 h-4" />
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="(11) 99999-9999" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsFormOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">Criar Usuário</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
