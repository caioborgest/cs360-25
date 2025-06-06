
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Calculator, TrendingUp, Users, Sparkles } from 'lucide-react';

interface ROICalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ROICalculatorModal = ({ isOpen, onClose }: ROICalculatorModalProps) => {
  const [formData, setFormData] = useState({
    currentCustomers: '',
    averageMonthlyRevenue: '',
    currentChurnRate: '',
    customerAcquisitionCost: '',
  });

  const [results, setResults] = useState<{
    currentLTV: number;
    projectedLTV: number;
    churnReduction: number;
    roiPercentage: number;
    monthlySavings: number;
  } | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const customers = parseInt(formData.currentCustomers) || 0;
    const monthlyRevenue = parseFloat(formData.averageMonthlyRevenue) || 0;
    const churnRate = parseFloat(formData.currentChurnRate) || 0;
    const cac = parseFloat(formData.customerAcquisitionCost) || 0;

    // Cálculos baseados nos benefícios do CS360°
    const currentLTV = monthlyRevenue / (churnRate / 100);
    const improvedChurnRate = churnRate * 0.6; // 40% de redução no churn
    const projectedLTV = monthlyRevenue / (improvedChurnRate / 100);
    
    const churnReduction = 40; // 40% de redução
    const ltvIncrease = ((projectedLTV - currentLTV) / currentLTV) * 100;
    
    const monthlySavings = customers * (projectedLTV - currentLTV) * (churnRate / 100 / 12);
    const annualSavings = monthlySavings * 12;
    const cs360Cost = 6000; // Custo anual estimado
    const roiPercentage = ((annualSavings - cs360Cost) / cs360Cost) * 100;

    setResults({
      currentLTV: currentLTV,
      projectedLTV: projectedLTV,
      churnReduction: churnReduction,
      roiPercentage: roiPercentage,
      monthlySavings: monthlySavings
    });
  };

  const resetCalculator = () => {
    setFormData({
      currentCustomers: '',
      averageMonthlyRevenue: '',
      currentChurnRate: '',
      customerAcquisitionCost: '',
    });
    setResults(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Calculator className="w-6 h-6 mr-3 text-blue-600" />
            Calculadora de ROI Personalizado
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {!results ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customers">Número atual de clientes</Label>
                  <Input
                    id="customers"
                    type="number"
                    placeholder="Ex: 150"
                    value={formData.currentCustomers}
                    onChange={(e) => handleInputChange('currentCustomers', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="revenue">Receita média mensal por cliente (R$)</Label>
                  <Input
                    id="revenue"
                    type="number"
                    placeholder="Ex: 2500"
                    value={formData.averageMonthlyRevenue}
                    onChange={(e) => handleInputChange('averageMonthlyRevenue', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="churn">Taxa de churn mensal atual (%)</Label>
                  <Input
                    id="churn"
                    type="number"
                    placeholder="Ex: 5"
                    step="0.1"
                    value={formData.currentChurnRate}
                    onChange={(e) => handleInputChange('currentChurnRate', e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="cac">Custo de aquisição por cliente (R$)</Label>
                  <Input
                    id="cac"
                    type="number"
                    placeholder="Ex: 3000"
                    value={formData.customerAcquisitionCost}
                    onChange={(e) => handleInputChange('customerAcquisitionCost', e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateROI}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                  disabled={!formData.currentCustomers || !formData.averageMonthlyRevenue || !formData.currentChurnRate}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calcular ROI
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">
                      {results.roiPercentage.toFixed(0)}%
                    </div>
                    <div className="text-sm text-green-700">ROI Anual Projetado</div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">
                      R$ {results.monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-blue-700">Economia Mensal</div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {results.churnReduction}%
                    </div>
                    <div className="text-sm text-purple-700">Redução de Churn</div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      2.3x
                    </div>
                    <div className="text-sm text-orange-700">Aumento do LTV</div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Resumo dos Resultados
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>LTV Atual:</span>
                    <span className="font-medium">R$ {results.currentLTV.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LTV Projetado:</span>
                    <span className="font-medium text-green-600">R$ {results.projectedLTV.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Economia Anual:</span>
                    <span className="font-medium text-blue-600">R$ {(results.monthlySavings * 12).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Criar Conta e Começar Teste Grátis
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    onClick={resetCalculator}
                    className="flex-1"
                  >
                    Calcular Novamente
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={onClose}
                    className="flex-1"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            </>
          )}

          <div className="text-xs text-gray-500 text-center">
            * Cálculos baseados em dados médios de clientes CS360°. Resultados podem variar.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
