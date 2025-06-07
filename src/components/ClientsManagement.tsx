
import React, { useState } from 'react';
import { ClientForm } from './ClientForm';
import { ClientImportModal } from './ClientImportModal';
import { ClientSummaryModal } from './ClientSummaryModal';
import { ClientsHeader } from './clients-management/ClientsHeader';
import { ClientsFilters } from './clients-management/ClientsFilters';
import { ClientsTable } from './clients-management/ClientsTable';
import { ClientsPagination } from './clients-management/ClientsPagination';
import { clientsData, filterOptions } from './clients-management/data/clientsData';
import { 
  getRiskColor, 
  getTierColor, 
  getNPSColor, 
  getStatusColor 
} from './clients-management/utils/clientsUtils';

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

  const handleClientSubmit = (data: any) => {
    console.log('Cliente cadastrado:', data);
    // Aqui você implementaria a lógica para salvar o cliente
  };

  const handleImport = (data: any[]) => {
    console.log('Clientes importados:', data);
    // Aqui você implementaria a lógica para importar os clientes
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
    // Aqui você implementaria a navegação para estratégias específicas
  };

  const handlePageChange = (page: number) => {
    console.log('Mudança de página:', page);
    // Implementar lógica de paginação
  };

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
        clients={clientsData}
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
        totalPages={3}
        totalClients={127}
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
