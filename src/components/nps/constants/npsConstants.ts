
export const NPS_STEPS = {
  CONFIG: 1,
  AUDIENCE: 2,
  EMAIL: 3
} as const;

export const NPS_STEP_LABELS = {
  [NPS_STEPS.CONFIG]: 'Configuração',
  [NPS_STEPS.AUDIENCE]: 'Público',
  [NPS_STEPS.EMAIL]: 'Email & Agendamento'
} as const;

export const DEFAULT_FORM_DATA = {
  name: '',
  description: '',
  selectedSegments: ['all'],
  emailTemplate: 'standard',
  customSubject: '',
  customContent: '',
  scheduledDate: new Date(),
  expiryDate: null,
  reminderEnabled: true,
  reminderDays: 7,
  anonymous: false
};
