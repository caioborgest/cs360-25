
import React from 'react';
import { Button } from '../ui/button';

interface ClientsPaginationProps {
  currentPage: number;
  totalPages: number;
  totalClients: number;
  onPageChange: (page: number) => void;
}

export const ClientsPagination = ({ 
  currentPage, 
  totalPages, 
  totalClients, 
  onPageChange 
}: ClientsPaginationProps) => {
  return (
    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Mostrando 1-3 de {totalClients} clientes
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => (
            <Button 
              key={i + 1}
              variant="outline" 
              size="sm" 
              className={`bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 ${
                currentPage === i + 1 ? 'bg-blue-50 dark:bg-blue-900/30' : ''
              }`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
};
