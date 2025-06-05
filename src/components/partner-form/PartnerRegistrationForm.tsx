
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { StepIndicator } from './StepIndicator';
import { FormSection } from './FormSection';
import { SuccessPage } from './SuccessPage';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';

// Schema de validação
const formSchema = z.object({
  // Etapa 1 - Dados Pessoais
  fullName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  document: z.string().min(11, 'CPF/CNPJ deve ter pelo menos 11 dígitos'),
  city: z.string().min(2, 'Cidade é obrigatória'),
  state: z.string().min(2, 'Estado é obrigatório'),
  
  // Etapa 2 - Presença Digital
  instagram: z.string().optional(),
  socialMedia: z.string().optional(),
  website: z.string().optional(),
  followers: z.string().optional(),
  audience: z.string().optional(),
  
  // Etapa 3 - Perfil como Parceiro
  isClient: z.enum(['sim', 'nao']),
  hasReferred: z.enum(['sim', 'nao']),
  promotionStrategy: z.string().min(10, 'Descreva como pretende divulgar o sistema'),
  wantsMarketingMaterials: z.enum(['sim', 'nao']),
  partnershipType: z.enum(['influenciador', 'afiliado', 'cliente_indicador', 'outro']),
  otherPartnershipType: z.string().optional(),
  
  // Finalização
  acceptsTerms: z.boolean().refine(val => val === true, 'Você deve aceitar os termos'),
  allowsImageUse: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const PartnerRegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const stepLabels = ['Dados Pessoais', 'Presença Digital', 'Perfil de Parceiro'];

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      whatsapp: '',
      document: '',
      city: '',
      state: '',
      instagram: '',
      socialMedia: '',
      website: '',
      followers: '',
      audience: '',
      isClient: 'nao',
      hasReferred: 'nao',
      promotionStrategy: '',
      wantsMarketingMaterials: 'sim',
      partnershipType: 'influenciador',
      otherPartnershipType: '',
      acceptsTerms: false,
      allowsImageUse: false,
    },
  });

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);
    
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ['fullName', 'email', 'whatsapp', 'document', 'city', 'state'];
      case 2:
        return ['instagram', 'socialMedia', 'website', 'followers', 'audience'];
      case 3:
        return ['isClient', 'hasReferred', 'promotionStrategy', 'wantsMarketingMaterials', 'partnershipType', 'acceptsTerms'];
      default:
        return [];
    }
  };

  const saveAndContinueLater = () => {
    const formData = form.getValues();
    localStorage.setItem('partnerFormData', JSON.stringify(formData));
    alert('Dados salvos! Você pode continuar depois.');
  };

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    try {
      // Simular envio para API
      console.log('Enviando dados para /api/partners/apply:', data);
      
      // Simular delay da API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Limpar dados salvos
      localStorage.removeItem('partnerFormData');
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  // Carregar dados salvos ao montar o componente
  React.useEffect(() => {
    const savedData = localStorage.getItem('partnerFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        form.reset(parsedData);
      } catch (error) {
        console.error('Erro ao carregar dados salvos:', error);
      }
    }
  }, [form]);

  if (isSubmitted) {
    return <SuccessPage onBack={() => setIsSubmitted(false)} />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Programa de Parceria - Cadastro</h2>
        <p className="text-lg text-gray-600">
          Junte-se ao nosso programa e comece a ganhar comissões compartilhando o CS360°
        </p>
      </div>

      <StepIndicator 
        currentStep={currentStep} 
        totalSteps={3} 
        stepLabels={stepLabels}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Etapa 1 - Dados Pessoais */}
          {currentStep === 1 && (
            <FormSection 
              title="Dados Pessoais" 
              description="Vamos começar com suas informações básicas"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo *</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail Principal *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp (com DDD) *</FormLabel>
                      <FormControl>
                        <Input placeholder="(11) 99999-9999" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="document"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CPF ou CNPJ *</FormLabel>
                      <FormControl>
                        <Input placeholder="000.000.000-00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade *</FormLabel>
                      <FormControl>
                        <Input placeholder="Sua cidade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estado *</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu estado" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </FormSection>
          )}

          {/* Etapa 2 - Presença Digital */}
          {currentStep === 2 && (
            <FormSection 
              title="Presença Digital" 
              description="Conte-nos sobre sua presença online e audiência"
            >
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="instagram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link do Instagram</FormLabel>
                      <FormControl>
                        <Input placeholder="https://instagram.com/seuusuario" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="socialMedia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>YouTube / TikTok / LinkedIn (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Link para sua rede social principal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Site ou Blog Pessoal (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://seusite.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="followers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de Seguidores ou Audiência Estimada</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione sua audiência" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1000">0 - 1.000</SelectItem>
                            <SelectItem value="1000-5000">1.000 - 5.000</SelectItem>
                            <SelectItem value="5000-10000">5.000 - 10.000</SelectItem>
                            <SelectItem value="10000-50000">10.000 - 50.000</SelectItem>
                            <SelectItem value="50000+">50.000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="audience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Público que Você Costuma Impactar</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva o perfil do seu público (ex: empreendedores, profissionais de tech, gestores...)"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </FormSection>
          )}

          {/* Etapa 3 - Perfil como Parceiro */}
          {currentStep === 3 && (
            <FormSection 
              title="Perfil como Parceiro" 
              description="Algumas informações sobre seu interesse no programa"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="isClient"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Você já é cliente do sistema?</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sim">Sim</SelectItem>
                              <SelectItem value="nao">Não</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hasReferred"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Já indicou alguém para usar o sistema?</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sim">Sim</SelectItem>
                              <SelectItem value="nao">Não</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="promotionStrategy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Como pretende divulgar o sistema? *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva sua estratégia de divulgação (redes sociais, blog, indicação direta, etc.)"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="wantsMarketingMaterials"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Você deseja receber materiais de divulgação prontos?</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sim">Sim</SelectItem>
                            <SelectItem value="nao">Não</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="partnershipType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Escolha o tipo de parceria desejado</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="influenciador">Influenciador digital</SelectItem>
                            <SelectItem value="afiliado">Afiliado</SelectItem>
                            <SelectItem value="cliente_indicador">Cliente que indica amigos</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {form.watch('partnershipType') === 'outro' && (
                  <FormField
                    control={form.control}
                    name="otherPartnershipType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Especifique o tipo de parceria</FormLabel>
                        <FormControl>
                          <Input placeholder="Descreva seu tipo de parceria" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                {/* Termos e Condições */}
                <div className="border-t pt-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="acceptsTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Aceito os Termos do Programa de Parceria *
                          </FormLabel>
                          <p className="text-sm text-gray-600">
                            Li e concordo com os termos e condições do programa de parceria.
                          </p>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="allowsImageUse"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Autorizo o uso do meu nome/imagem em campanhas (opcional)
                          </FormLabel>
                          <p className="text-sm text-gray-600">
                            Permito que o CS360° use meu nome e imagem para divulgação do programa.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </FormSection>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6">
            <div className="flex gap-2">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Anterior
                </Button>
              )}
              
              <Button type="button" variant="ghost" onClick={saveAndContinueLater}>
                <Save className="w-4 h-4 mr-2" />
                Salvar e continuar depois
              </Button>
            </div>

            <div>
              {currentStep < 3 ? (
                <Button type="button" onClick={nextStep}>
                  Próximo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : 'Concluir Cadastro'}
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
