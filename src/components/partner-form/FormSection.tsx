
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, description, children }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900">{title}</CardTitle>
        {description && <p className="text-gray-600">{description}</p>}
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
};
