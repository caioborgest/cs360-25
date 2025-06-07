
export interface NPSSurveyFormData {
  name: string;
  description: string;
  selectedSegments: string[];
  emailTemplate: string;
  customSubject: string;
  customContent: string;
  scheduledDate: Date;
  expiryDate: Date | null;
  reminderEnabled: boolean;
  reminderDays: number;
  anonymous: boolean;
}

export interface ClientSegment {
  id: string;
  name: string;
  count: number;
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
}

export interface NPSData {
  month: string;
  score: number;
  responses: number;
  promoters: number;
  passives: number;
  detractors: number;
}
