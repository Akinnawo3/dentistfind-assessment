import React from "react";
import "../../PracticeSummaryCard.css";
import type { PracticeSummary } from "../../types/practice";

interface PracticeSummaryCardProps {
  practice: PracticeSummary;
}

type PerformanceStatus = "high" | "stable" | "at-risk";

const Header = ({ name, city, country }: { name: string; city: string; country: string }) => (
  <div className="card-header">
    <h2 className="practice-name">{name}</h2>
    <p className="practice-location">
      {city}, {country}
    </p>
  </div>
);

const StatusIndicator = ({ conversionRate }: { conversionRate: number }) => {
  const getStatusConfig = (rate: number) => {
    if (rate >= 20) return { label: "High Performer", className: "status-high" };
    if (rate < 10) return { label: "At Risk", className: "status-risk" };
    return { label: "Stable", className: "status-stable" };
  };

  const statusConfig = getStatusConfig(conversionRate);

  return <div className={`status-indicator ${statusConfig.className}`}>{statusConfig.label}</div>;
};

const Metrics = ({ newPatientsThisMonth, appointmentRequests, conversionRate, marketingSpend }: { newPatientsThisMonth: number; appointmentRequests: number; conversionRate: number; marketingSpend?: number }) => (
  <div className="metrics-container">
    <div className="metric-item">
      <span className="metric-label">New Patients</span>
      <span className="metric-value">{newPatientsThisMonth}</span>
      <span className="metric-subtext">this month</span>
    </div>

    <div className="metric-item">
      <span className="metric-label">Appointment Requests</span>
      <span className="metric-value">{appointmentRequests}</span>
      <span className="metric-subtext">this month</span>
    </div>

    <div className="metric-item">
      <span className="metric-label">Conversion Rate</span>
      <span className="metric-value">{conversionRate}%</span>
      <span className="metric-subtext">from requests</span>
    </div>

    <div className="metric-item">
      <span className="metric-label">Marketing Spend</span>
      <span className="metric-value">${marketingSpend?.toLocaleString() || "0"}</span>
      <span className="metric-subtext">this month</span>
    </div>
  </div>
);

// Trend Visualization
const TrendChart = ({ monthlyTrend, status }: { monthlyTrend: number[]; status: PerformanceStatus }) => {
  const maxValue = Math.max(...monthlyTrend) || 1;

  const getStatusColor = (status: PerformanceStatus) => {
    switch (status) {
      case "high":
        return "#10b981";
      case "at-risk":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getMonthLabel = (index: number) => {
    const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];
    return months[index];
  };

  const barColor = getStatusColor(status);

  return (
    <div className="trend-section">
      <h4 className="section-title">6-Month Trend (New Patients)</h4>
      <div className="trend-chart">
        {monthlyTrend.map((value, index) => (
          <div key={index} className="trend-bar-container">
            <div
              className="trend-bar"
              style={{
                height: `${(value / maxValue) * 80}%`,
                backgroundColor: barColor,
              }}
              title={`${getMonthLabel(index)}: ${value} patients`}
            />
            <span className="trend-label">{getMonthLabel(index)}</span>
            <span className="trend-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Recommendations based on conversion rate
const Recommendations = ({ conversionRate }: { conversionRate: number }) => {
  const getRecommendations = (rate: number): string[] => {
    if (rate < 10) {
      return ["Consider increasing ad budget on top-performing channels.", "Optimize mobile landing page layout."];
    } else if (rate >= 20) {
      return ["Scale successful campaigns to similar markets.", "Consider expanding service offerings."];
    } else {
      return ["Test new ad creatives to improve engagement.", "Review follow-up process for appointment requests."];
    }
  };

  const recommendations = getRecommendations(conversionRate);

  return (
    <div className="recommendations-section">
      <h4 className="section-title">Recommendations</h4>
      <ul className="recommendations-list">
        {recommendations.map((rec, index) => (
          <li key={index} className="recommendation-item">
            <span className="bullet">•</span>
            {rec}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main card component
const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({ practice }) => {
  const getPerformanceStatus = (conversionRate: number): PerformanceStatus => {
    if (conversionRate >= 20) return "high";
    if (conversionRate < 10) return "at-risk";
    return "stable";
  };

  const performanceStatus = getPerformanceStatus(practice.conversionRate);

  return (
    <div className="practice-card">
      <Header name={practice.name} city={practice.city} country={practice.country} />

      <StatusIndicator conversionRate={practice.conversionRate} />

      <Metrics newPatientsThisMonth={practice.newPatientsThisMonth} appointmentRequests={practice.appointmentRequests} conversionRate={practice.conversionRate} marketingSpend={practice.marketingSpend} />

      <TrendChart monthlyTrend={practice.monthlyTrend} status={performanceStatus} />

      <Recommendations conversionRate={practice.conversionRate} />
    </div>
  );
};

export default PracticeSummaryCard;
