
import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const suggestions = [
  "Quais clientes têm maior risco de churn?",
  "Mostre a correlação entre NPS e LTV",
  "Sugira ações para melhorar o CSAT"
];

export const AIAssistant = () => {
  const [message, setMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Assistente de IA</h3>
          </div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600 mb-3">Olá, como posso ajudar você hoje?</p>
          <p className="text-sm text-gray-500">
            Analiso seus dados e identifico oportunidades importantes.
          </p>
        </div>
        
        {!isExpanded ? (
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setIsExpanded(true)}
                className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-700">{suggestion}</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Pergunta:</strong> Como posso ajudar você hoje?
              </p>
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua pergunta sobre os indicadores..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
