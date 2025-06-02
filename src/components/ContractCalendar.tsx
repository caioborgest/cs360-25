
import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';

const contractsData = [
  {
    id: 1,
    clientName: 'TechCorp LTDA',
    contractNumber: 'CT-2024-001',
    endDate: '2024-12-15',
    status: 'Ativo',
    value: 120000,
  },
  {
    id: 2,
    clientName: 'StartupX',
    contractNumber: 'CT-2024-002',
    endDate: '2025-02-28',
    status: 'Ativo',
    value: 60000,
  },
  {
    id: 3,
    clientName: 'BigCorp S.A.',
    contractNumber: 'CT-2024-003',
    endDate: '2024-08-10',
    status: 'Vencido',
    value: 200000,
  },
];

export const ContractCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (day: number) => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  };

  const getContractsForDate = (day: number) => {
    const dateStr = formatDate(day);
    return contractsData.filter(contract => contract.endDate === dateStr);
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const today = new Date();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <CalendarIcon className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Calendário de Contratos
          </h2>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={previousMonth}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white min-w-[180px] text-center">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          
          <Button variant="outline" size="sm" onClick={nextMonth}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }, (_, i) => (
          <div key={`empty-${i}`} className="h-20"></div>
        ))}
        
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dateStr = formatDate(day);
          const contracts = getContractsForDate(day);
          const isToday = today.toDateString() === new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
          
          return (
            <div
              key={day}
              className={`h-20 border border-gray-200 dark:border-gray-700 p-1 ${
                isToday ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-600' : 'bg-white dark:bg-gray-800'
              } rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
            >
              <div className={`text-sm font-medium ${
                isToday ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'
              }`}>
                {day}
              </div>
              
              {contracts.map(contract => (
                <div
                  key={contract.id}
                  className="text-xs bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-1 py-0.5 rounded mt-1 truncate"
                  title={`${contract.clientName} - ${contract.contractNumber}`}
                >
                  <AlertTriangle className="w-3 h-3 inline mr-1" />
                  {contract.clientName}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-100 border border-red-300 rounded"></div>
          <span className="text-gray-600 dark:text-gray-400">Contratos Vencendo</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
          <span className="text-gray-600 dark:text-gray-400">Hoje</span>
        </div>
      </div>
    </div>
  );
};
