
import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const feedbacks = [
  {
    client: 'Cliente A',
    feedback: '"O suporte foi excelente e resolveu meu problema rapidamente."',
    rating: 5,
    date: '2 dias atrás'
  },
  {
    client: 'Cliente B',
    feedback: '"Recomendação: A área não atendia totalmente minhas expectativas."',
    rating: 3,
    date: '1 semana atrás'
  },
  {
    client: 'Cliente C',
    feedback: '"Recebi CSAT but não altamente na implementação do produto."',
    rating: 4,
    date: '2 semanas atrás'
  }
];

const recommendations = [
  {
    title: 'Risco de Churn Alto',
    description: '5 clientes com Health Score abaixo de 30',
    urgency: 'Urgente',
    color: 'red'
  },
  {
    title: 'Oportunidades de Upsell',
    description: '12 clientes com alta adoção e poucos 2',
    urgency: 'Prioridade',
    color: 'purple'
  },
  {
    title: 'Follow-up CSAT Baixo',
    description: 'Agendar uma CSAT < 5 nas últimas 7 dias',
    urgency: 'Médio',
    color: 'orange'
  },
  {
    title: 'Renovações Próximas',
    description: '7 contratos vencem nos próximos 30 dias',
    urgency: 'Atenção',
    color: 'blue'
  }
];

export const FeedbackSection = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Feedback CSAT Recente</h3>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {feedbacks.map((feedback, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm text-gray-900">{feedback.client}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{feedback.rating}/5</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{feedback.feedback}</p>
              <span className="text-xs text-gray-400">{feedback.date}</span>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
          Ver todos os feedbacks
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Ações Recomendadas</h3>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${
                    rec.color === 'red' ? 'bg-red-500' :
                    rec.color === 'purple' ? 'bg-purple-500' :
                    rec.color === 'orange' ? 'bg-orange-500' :
                    'bg-blue-500'
                  }`}></div>
                  <span className="font-medium text-sm text-gray-900">{rec.title}</span>
                </div>
                <p className="text-xs text-gray-600">{rec.description}</p>
                <span className={`inline-block mt-1 px-2 py-1 text-xs rounded ${
                  rec.color === 'red' ? 'bg-red-100 text-red-700' :
                  rec.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                  rec.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {rec.urgency}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
          Ver todas as recomendações
        </button>
      </div>
    </div>
  );
};
