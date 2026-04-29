export type CompanyType = {
  company_id: string;
  name: string;
  industry: string;
  region: string;
  created_at: string;
};

export type CompanyMetrics = {
  warning: [];
  healthy: [];
  "at-risk": [];
};

export type CompanyMetricType = {
  company_id: string;
  grr: number;
  nrr: number;
  saas_health: number;
  hardware_health: number;
  relationship_health: number;
  overall_health: number;
  onboarding_completion: number;
  time_to_value_days: number;
  avg_first_response_time: number;
  rma_rate: number;
  implementation_nps: {
    nps: number;
    promoters_pct: number;
    passives_pct: number;
    detractors_pct: number;
  };
  service_to_saas_ratio: number;
  logo_churn: number;
};

export type CompanyHealthStatus = "warning" | "at risk" | "warning";
