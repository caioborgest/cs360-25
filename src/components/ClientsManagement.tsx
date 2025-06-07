
import React, { useState } from 'react';
import { ClientForm } from './ClientForm';
import { ClientImportModal } from './ClientImportModal';
import { ClientSummaryModal } from './ClientSummaryModal';
import { ClientsHeader } from './clients-management/ClientsHeader';
import { ClientsFilters } from './clients-management/ClientsFilters';
import { ClientsTable } from './clients-management/ClientsTable';
import { ClientsPagination } from './clients-management/ClientsPagination';
import { useClients } from '@/hooks/useClients';
import { convertToDisplayClient } from './clients-management/adapters/clientsAdapter';
import { 
  getRiskColor, 
  getTierColor, 
  getNPSColor, 
  getStatusColor 
} from './clients-management/utils/clientsUtils';
import { Loader2 } from 'lucide-react';

export const ClientsManagement = () => {
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
  const [selectedClient, setSelectedClient] = useState(null);
  const [expandedClient, setExpandedClient] = useState<number | null>(null);

  const { clients, loading, createClient, updateClient, deleteClient } = useClients();

  const filterOptions = {
    tier: ['Todos', 'A', 'B', 'C'],
    profile: ['Todos', 'Arrojado', 'Moderado', 'Conservador'],
    npsCategory: ['Todos', 'Promotor', 'Passivo', 'Detrator'],
    status: ['Todos', 'Ativo', 'Risco', 'Inativo']
  };

  const handleClientSubmit = async (data: any) => {
    if (selectedClient) {
      await updateClient(selectedClient.id, data);
    } else {
      await createClient(data);
    }
    setIsClientFormOpen(false);
    setSelectedClient(null);
  };

  const handleImport = (data: any[]) => {
    console.log('Clientes importados:', data);
    // Implementar lógica de importação
  };

  const handleEditClient = (client: any) => {
    setSelectedClient(client);
    setIsClientFormOpen(true);
  };

  const handleViewDetails = (client: any) => {
    setSelectedClient(client);
    setIsSummaryModalOpen(true);
  };

  const handleStrategies = (clientId: number) => {
    console.log('Ver estratégias do cliente:', clientId);
    // Implementar navegação para estratégias
  };

  const handlePageChange = (page: number) => {
    console.log('Mudança de página:', page);
    // Implementar lógica de paginação
  };

  // Convert clients from database to display format
  const displayClients = clients.map(convertToDisplayClient);

  // Filter clients based on search and filters
  const filteredClients = displayClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTier = filters.tier === 'Todos' || client.tier === filters.tier;
    const matchesStatus = filters.status === 'Todos' || client.status === filters.status;
    const matchesNPS = filters.npsCategory === 'Todos' || client.npsCategory === filters.npsCategory;
    
    return matchesSearch && matchesTier && matchesStatus && matchesNPS;
  });

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <ClientsHeader
          onImport={() => setIsImportModalOpen(true)}
          onExport={() => console.log('Export clientes')}
          onNewClient={() => {
            setSelectedClient(null);
            setIsClientFormOpen(true);
          }}
        />

        {/* Search and Filters */}
        <ClientsFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filters={filters}
          onFiltersChange={setFilters}
          filterOptions={filterOptions}
        />
      </div>

      {/* Table */}
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

      {/* Pagination */}
      <ClientsPagination
        currentPage={1}
        totalPages={Math.ceil(filteredClients.length / 10)}
        totalClients={filteredClients.length}
        onPageChange={handlePageChange}
      />

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
