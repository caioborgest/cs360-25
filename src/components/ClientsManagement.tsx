
import React, { useState } from 'react';
import { ClientForm } from './clients/ClientForm';
import { ClientImportModal } from './clients/ClientImportModal';
import { ClientSummaryModal } from './ClientSummaryModal';
import { ClientsHeader } from './clients-management/ClientsHeader';
import { ClientsFilters } from './clients-management/ClientsFilters';
import { ClientsTable } from './clients-management/ClientsTable';
import { ClientsPagination } from './clients-management/ClientsPagination';
import { useClients } from '@/hooks/useClients';
import { convertToDisplayClient, type DisplayClient } from './clients-management/adapters/clientsAdapter';
import { 
  getRiskColor, 
  getTierColor, 
  getNPSColor, 
  getStatusColor 
} from './clients-management/utils/clientsUtils';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ClientsManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    tier: 'Todos',
    profile: 'Todos',
    npsCategory: 'Todos',
    status: 'Todos'
  });
  const [isClientFormOpen, setIsClientFormOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<DisplayClient | null>(null);
  const [expandedClient, setExpandedClient] = useState<number | null>(null);

  const { clients, loading, createClient, updateClient, deleteClient } = useClients();

  const filterOptions = {
    tier: ['Todos', 'A', 'B', 'C'],
    profile: ['Todos', 'Arrojado', 'Moderado', 'Conservador'],
    npsCategory: ['Todos', 'Promotor', 'Passivo', 'Detrator'],
    status: ['Todos', 'Ativo', 'Risco', 'Inativo']
  };

  const handleClientSubmit = async (data: any) => {
    try {
      if (selectedClient) {
        // Find the original client by matching display ID
        const originalClient = clients.find(c => 
          parseInt(c.id.slice(0, 8), 16) === selectedClient.id
        );
        if (originalClient) {
          await updateClient(originalClient.id, data);
        }
      } else {
        await createClient(data);
      }
      setIsClientFormOpen(false);
      setSelectedClient(null);
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
    }
  };

  const handleImport = async (data: any[]) => {
    try {
      let importedCount = 0;
      for (const clientData of data) {
        await createClient(clientData);
        importedCount++;
      }
      toast({
        title: "Sucesso",
        description: `${importedCount} clientes importados com sucesso`
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao importar clientes",
        variant: "destructive"
      });
    }
  };

  const handleEditClient = (client: DisplayClient) => {
    setSelectedClient(client);
    setIsClientFormOpen(true);
  };

  const handleViewDetails = (client: DisplayClient) => {
    setSelectedClient(client);
    setIsSummaryModalOpen(true);
  };

  const handleStrategies = (clientId: number) => {
    console.log('Ver estratégias do cliente:', clientId);
  };

  const handlePageChange = (page: number) => {
    console.log('Mudança de página:', page);
  };

  // Convert clients from database to display format
  const displayClients: DisplayClient[] = clients.map(convertToDisplayClient);

  // Filter clients based on search and filters
  const filteredClients = displayClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.contact?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTier = filters.tier === 'Todos' || client.tier === filters.tier;
    const matchesStatus = filters.status === 'Todos' || client.status === filters.status;
    const matchesNPS = filters.npsCategory === 'Todos' || client.npsCategory === filters.npsCategory;
    
    return matchesSearch && matchesTier && matchesStatus && matchesNPS;
  });

  if (loading) {
    return (
      <div className="bg-card rounded-xl shadow-sm border border-border p-8 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-border">
        <ClientsHeader
          onImport={() => setIsImportModalOpen(true)}
          onExport={() => console.log('Export clientes')}
          onNewClient={() => {
            setSelectedClient(null);
            setIsClientFormOpen(true);
          }}
        />

        {/* Search and Filters */}
        <div className="mt-4">
          <ClientsFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filters={filters}
            onFiltersChange={setFilters}
            filterOptions={filterOptions}
          />
        </div>
      </div>

      {/* Table - Scrollable on mobile */}
      <div className="overflow-x-auto">
        <ClientsTable
          clients={filteredClients}
          expandedClient={expandedClient}
          onExpandClient={setExpandedClient}
          onEditClient={handleEditClient}
          onViewDetails={handleViewDetails}
          onStrategies={handleStrategies}
          getTierColor={getTierColor}
          getNPSColor={getNPSColor}
          getRiskColor={getRiskColor}
          getStatusColor={getStatusColor}
        />
      </div>

      {/* Pagination */}
      <div className="p-4 sm:p-6 border-t border-border">
        <ClientsPagination
          currentPage={1}
          totalPages={Math.ceil(filteredClients.length / 10)}
          totalClients={filteredClients.length}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Modals */}
      <ClientForm
        isOpen={isClientFormOpen}
        onClose={() => {
          setIsClientFormOpen(false);
          setSelectedClient(null);
        }}
        onSubmit={handleClientSubmit}
        client={selectedClient}
      />

      <ClientImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImport={handleImport}
      />

      <ClientSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => {
          setIsSummaryModalOpen(false);
          setSelectedClient(null);
        }}
        client={selectedClient}
      />
    </div>
  );
};
