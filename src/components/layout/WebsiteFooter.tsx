
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { BarChart3 } from 'lucide-react';

export const WebsiteFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold">CS360°</span>
            </div>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              A plataforma de Customer Success com IA que revoluciona resultados. 
              Transforme dados em insights, prevenha churn e escale seu sucesso.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">LinkedIn</Button>
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">YouTube</Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Produto</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/features" className="hover:text-white transition-colors">Funcionalidades</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Preços</Link></li>
              <li><Link to="/features#integrations" className="hover:text-white transition-colors">Integrações</Link></li>
              <li><Link to="/features#security" className="hover:text-white transition-colors">Segurança</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/partners-program" className="hover:text-white transition-colors">Programa de Parceiros</Link></li>
              <li><Link to="/partner-portal-website" className="hover:text-white transition-colors">Portal do Parceiro</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CS360°. Todos os direitos reservados. Transformando Customer Success com Inteligência Artificial.</p>
        </div>
      </div>
    </footer>
  );
};
