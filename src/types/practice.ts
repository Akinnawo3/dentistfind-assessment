export type PracticeSummary = {
  id: string;
  name: string;
  city: string;
  country: string;
  newPatientsThisMonth: number;
  appointmentRequests: number;
  conversionRate: number;
  monthlyTrend: number[]; 
  marketingSpend?: number; 
};

export type PerformanceStatus = "high" | "stable" | "at-risk";
