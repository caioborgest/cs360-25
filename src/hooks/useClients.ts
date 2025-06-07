
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import type { DatabaseClient } from '@/types/database';

export interface Client extends DatabaseClient {}

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchClients = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClients((data as Client[]) || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createClient = async (clientData: Omit<Client, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    if (!user) return { error: 'No user logged in' };
    
    try {
      const { data, error } = await supabase
        .from('clients')
        .insert({ ...clientData, user_id: user.id })
        .select()
        .single();

      if (error) throw error;
      setClients(prev => [data as Client, ...prev]);
      return { data: data as Client, error: null };
    } catch (err: any) {
      return { data: null, error: err.message };
    }
  };

  const updateClient = async (id: string, updates: Partial<Client>) => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setClients(prev => prev.map(client => client.id === id ? data as Client : client));
      return { data: data as Client, error: null };
    } catch (err: any) {
      return { data: null, error: err.message };
    }
  };

  const deleteClient = async (id: string) => {
    try {
      const { error } = await supabase
        .from('clients')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setClients(prev => prev.filter(client => client.id !== id));
      return { error: null };
    } catch (err: any) {
      return { error: err.message };
    }
  };

  useEffect(() => {
    fetchClients();
  }, [user]);

  return {
    clients,
    loading,
    error,
    createClient,
    updateClient,
    deleteClient,
    refetch: fetchClients
  };
};
