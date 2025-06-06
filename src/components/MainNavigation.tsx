
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  BarChart3, 
  Users, 
  Target, 
  Zap, 
  TrendingUp,
  Shield,
  Award,
  Handshake,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

export const MainNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const platformFeatures = [
    {
      title: "Dashboard CS360°",
      description: "Painel completo com métricas em tempo real",
      href: "/app",
      icon: BarChart3
    },
    {
      title: "Gestão de Clientes",
      description: "CRM avançado para Customer Success",
      href: "/clients",
      icon: Users
    },
    {
      title: "NPS & CSAT",
      description: "Monitoramento de satisfação e lealdade",
      href: "/nps",
      icon: Target
    },
    {
      title: "LTV & CAC",
      description: "Análise de valor do cliente e custo de aquisição",
      href: "/ltv-cac",
      icon: TrendingUp
    },
    {
      title: "Automação & IA",
      description: "Inteligência artificial para CS",
      href: "/automation",
      icon: Zap
    }
  ];

  const partnerProgram = [
    {
      title: "Programa de Parceiros",
      description: "Junte-se ao nosso programa exclusivo",
      href: "/partners-program",
      icon: Handshake
    },
    {
      title: "Gestão de Parceiros",
      description: "Painel para gerenciar parcerias",
      href: "/partners",
      icon: Users
    },
    {
      title: "Portal do Parceiro",
      description: "Acesso dedicado para parceiros",
      href: "/partner-portal",
      icon: ExternalLink
    },
    {
      title: "Campanhas & Benefícios",
      description: "Campanhas e recompensas exclusivas",
      href: "/campaigns",
      icon: Award
    }
  ];

  const solutions = [
    {
      title: "Para Startups",
      description: "Soluções escaláveis para empresas em crescimento",
      href: "/features#startups"
    },
    {
      title: "Para Empresas",
      description: "Plataforma robusta para grandes operações",
      href: "/features#enterprise"
    },
    {
      title: "Para Agências",
      description: "Gerenciamento multi-cliente simplificado",
      href: "/features#agencies"
    }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              CS360°
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Plataforma */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Plataforma
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-blue-600/20 p-6 no-underline outline-none focus:shadow-md"
                            to="/app"
                          >
                            <BarChart3 className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              CS360° Platform
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Plataforma completa de Customer Success com IA integrada
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      {platformFeatures.map((feature) => (
                        <NavigationMenuLink key={feature.title} asChild>
                          <Link
                            to={feature.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <feature.icon className="w-4 h-4" />
                              <div className="text-sm font-medium leading-none">{feature.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {feature.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Soluções */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutions.map((solution) => (
                        <NavigationMenuLink key={solution.title} asChild>
                          <Link
                            to={solution.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{solution.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {solution.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Parceiros */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Parceiros
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                      {partnerProgram.map((item) => (
                        <NavigationMenuLink key={item.title} asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <item.icon className="w-4 h-4" />
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Links diretos */}
                <NavigationMenuItem>
                  <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), "text-gray-700 hover:text-blue-600 font-medium")}>
                    Preços
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/app">
              <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                Entrar
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Começar Grátis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 px-4">Plataforma</h3>
              {platformFeatures.map((feature) => (
                <Link
                  key={feature.title}
                  to={feature.href}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <feature.icon className="w-5 h-5" />
                  <span>{feature.title}</span>
                </Link>
              ))}
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 px-4">Parceiros</h3>
              {partnerProgram.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 px-4 space-y-2">
              <Link to="/pricing" className="block py-2 text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>
                Preços
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Entrar</Button>
                </Link>
                <Link to="/onboarding" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Começar Grátis</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
