import type { PracticeSummary } from "../types/practice";

export const mockPractices: PracticeSummary[] = [
  {
    id: "1",
    name: "Bright Smile Dental",
    city: "Toronto",
    country: "Canada",
    newPatientsThisMonth: 45,
    appointmentRequests: 120,
    conversionRate: 37.5,
    monthlyTrend: [25, 30, 28, 35, 40, 45],
    marketingSpend: 1250,
  },
  {
    id: "2",
    name: "Downtown Dental Care",
    city: "New York",
    country: "USA",
    newPatientsThisMonth: 18,
    appointmentRequests: 95,
    conversionRate: 18.9,
    monthlyTrend: [20, 18, 15, 16, 17, 18],
    marketingSpend: 850,
  },
  {
    id: "3",
    name: "Sunset Dental Clinic",
    city: "Los Angeles",
    country: "USA",
    newPatientsThisMonth: 8,
    appointmentRequests: 110,
    conversionRate: 7.3,
    monthlyTrend: [12, 10, 9, 8, 7, 8],
    marketingSpend: 600,
  },
];
