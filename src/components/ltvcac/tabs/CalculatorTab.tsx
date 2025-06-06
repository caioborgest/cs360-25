
import React from 'react';
import { Calculator, Settings } from 'lucide-react';
import { Button } from '../../ui/button';
import { calculationModels } from '../data/ltvCacData';

interface CalculatorTabProps {
  calculationModel: number;
  onCalculationModelChange: (model: number) => void;
}

export const CalculatorTab = ({ calculationModel, onCalculationModelChange }: CalculatorTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Modelos de Cálculo</h3>
        <div className="space-y-4">
          {calculationModels.map((model) => (
            <div key={model.id} className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              calculationModel === model.id 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                : 'border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`} onClick={() => onCalculationModelChange(model.id)}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white">{model.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Precisão: {model.accuracy}%</span>
                  {model.active && (
                    <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Ativo</span>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{model.description}</p>
              <p className="text-lg font-bold text-blue-600">LTV Calculado: R$ {(model.ltv / 1000).toFixed(0)}k</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
          <Button className="w-full">
            <Settings className="w-4 h-4 mr-2" />
            Configurar Parâmetros
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Calculadora Rápida</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Receita Média por Cliente (ARPU)
            </label>
            <input 
              type="number" 
              placeholder="3.500" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Margem Bruta (%)
            </label>
            <input 
              type="number" 
              placeholder="75" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Taxa de Churn Mensal (%)
            </label>
            <input 
              type="number" 
              placeholder="3.5" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Custo de Aquisição (CAC)
            </label>
            <input 
              type="number" 
              placeholder="2.450" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <Button className="w-full mt-6">
            <Calculator className="w-4 h-4 mr-2" />
            Calcular LTV
          </Button>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-300 mb-2">Resultado:</h4>
            <p className="text-2xl font-bold text-blue-600">LTV: R$ 75.000</p>
            <p className="text-sm text-blue-700 dark:text-blue-400">Ratio LTV:CAC = 30.6:1</p>
            <p className="text-sm text-blue-700 dark:text-blue-400">Payback: 9.4 meses</p>
          </div>
        </div>
      </div>
    </div>
  );
};
