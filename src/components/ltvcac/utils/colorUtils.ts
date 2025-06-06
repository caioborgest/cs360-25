
export const getPriorityColor = (priority: string) => {
  const colors = {
    'high': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    'medium': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'low': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
  };
  return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const getSegmentColor = (segment: string) => {
  const colors = {
    'Nível A': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Nível B': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Nível C': 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300',
    'Arrojado': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'Moderado': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Conservador': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };
  return colors[segment as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const getRatioColor = (ratio: number) => {
  if (ratio >= 50) return 'text-green-600';
  if (ratio >= 30) return 'text-yellow-600';
  return 'text-red-600';
};

export const getRiskColor = (risk: string) => {
  const colors = {
    'Baixo': 'text-green-600',
    'Médio': 'text-yellow-600', 
    'Alto': 'text-red-600',
    'Crítico': 'text-red-700'
  };
  return colors[risk as keyof typeof colors] || 'text-gray-600';
};

export const getCorrelationColor = (correlation: number) => {
  const abs = Math.abs(correlation);
  if (abs >= 0.7) return 'text-green-600';
  if (abs >= 0.4) return 'text-yellow-600';
  return 'text-red-600';
};
