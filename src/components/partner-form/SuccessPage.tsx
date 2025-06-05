
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

interface SuccessPageProps {
  onBack?: () => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({ onBack }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <Card className="p-8">
        <CardContent className="space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900">Cadastro Realizado com Sucesso!</h2>
          
          <p className="text-lg text-gray-600">
            Obrigado por se inscrever no nosso Programa de Parceria! 
          </p>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-blue-800 font-medium">
              Em breve você receberá um e-mail com as instruções para ativar sua conta de parceiro e começar a ganhar comissões.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Próximos Passos:</h3>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Verificar sua caixa de entrada (pode chegar no spam)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Ativar sua conta através do link no e-mail
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Acessar o portal do parceiro e começar a divulgar
              </li>
            </ul>
          </div>
          
          {onBack && (
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Programa
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
