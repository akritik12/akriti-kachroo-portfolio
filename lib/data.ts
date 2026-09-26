 export const profile = {
  name: "Akriti Kachroo",
  firstName: "AKRITI",
  lastName: "KACHROO",
  tagline: "Economics • Public Health • Data Analytics • Market Research • Pharmaceutical Research",
  status: "Open to Analytics Roles",
  eyebrow: "Economics & Data Analytics",
  roleSubtitle: "Quantitative Researcher",
  summary:
    "M.Sc. Economics & Data Analytics candidate turning market research, pricing, and public health data into strategic decisions.",
  email: "aakritikachroo@gmail.com",
  emailAlt: "Akriti.kachroo.2025@sse.ac.in",
  phone: "+91 91494 79232",
  location: "Pune, Maharashtra",
  school: "SSE / SIU",
  linkedin: "https://www.linkedin.com/in/akriti-kachroo",
  github: "https://github.com/akritik12"
};

// Software & platforms
export const coreTools = ["R", "Python", "SQL", "Power BI", "SPSS", "MS Office"];

// Methods & concepts, distinct from the tools/software above
export const coreConcepts = [
  "Econometrics",
  "Statistical Inference",
  "Hypothesis Testing",
  "Regression Modeling",
  "Time Series Forecasting",
  "Conjoint Analysis (CBC & ACBC)",
  "Market Segmentation",
  "Survey Methodology & Sampling",
  "Pricing Strategy",
  "Policy Analysis",
  "Health Technology Assessment",
  "Big Data Analytics"
];

export const stats = [
  { label: "Year in Advanced Analytics", value: 1, suffix: "+" },
  { label: "Survey Responses Analyzed", value: 17000, suffix: "+" },
  { label: "Projects Built", value: 4, suffix: "" },
  { label: "Certifications Earned", value: 6, suffix: "" }
];

// Rotating phrases for the hero typing animation
export const heroRoles = [
  "Financial Analytics",
  "Market Research",
  "Data Science",
  "Econometrics & Forecasting"
];

export const about =
  "M.Sc. Economics & Data Analytics candidate with real-world experience in market research, pricing, and public health policy. My goal is to bridge economics, analytics, and public health — turning data into decisions that matter.";

export const languages = ["English", "Hindi", "Kashmiri"];

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  coursework?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "M.Sc. Economics (Data Analytics)",
    institution: "Symbiosis School of Economics, Symbiosis International University, Pune",
    period: "Expected 2027",
    detail: "CGPA: 7.35/10",
  },
  {
    degree: "M.A. Health Policy, Economics & Finance",
    institution: "Tata Institute of Social Sciences, Mumbai",
    period: "2022",
    detail: "CGPA: 6.5/10"
  },
  {
    degree: "B.A. Economics",
    institution: "Savitribai Phule Pune University",
    period: "2020",
    detail: "8.54/10"
  }
];

export const experience = [
  {
    company: "Optimal Strategix Group",
    role: "Associate – Advanced Analytics",
    location: "Bengaluru",
    period: "2022–2023",
    highlights: [
      "Analysed, cleaned, and validated large datasets to support strategic decision-making",
      "Conducted pricing, market segmentation, and conjoint (CBC & ACBC) analyses to deliver data-driven business insights",
      "Supported Logitech's product launch through competitive analysis, contributing to a 1–6% market share gain",
      "Assisted Becton Dickinson's pricing strategy, contributing to a 0.4% increase in market share",
      "Designed surveys, analysed research data, and prepared reports and presentations for client stakeholders",
      "Led a patient and physician preference study selected for presentation at the ACOG Conference"
    ]
  },
  {
    company: "State Health Systems Resource Centre",
    role: "Research Intern",
    location: "Pune, Maharashtra",
    period: "Jul 2021 – Nov 2021",
    highlights: [
      "Conducted primary data collection and stakeholder interviews across healthcare facilities",
      "Analysed research data and prepared policy briefs and analytical reports",
      "Presented data-driven insights and recommendations to stakeholders"
    ]
  },
  {
    company: "SATHI CEHAT",
    role: "Research Intern",
    location: "Pune, Maharashtra",
    period: "Mar 2021 – May 2021",
    highlights: [
      "Analysed secondary data on healthcare programs and NCD trends",
      "Developed policy briefs and presented analytical findings"
    ]
  },
  {
    company: "Academic Research",
    role: "Impact of Internal Displacement on Health in Kashmir",
    location: "Independent study",
    period: "",
    highlights: [
      "Integrated qualitative interviews with quantitative data analysis",
      "Studied the impact of internal displacement (ID) on the health of the people of Kashmir",
      "Presented findings in a structured research report"
    ]
  }
];

export const projectCategories = ["All", "Finance & Economics", "Market Research", "Machine Learning"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectMetric = { label: string; value: string };
export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  tag: string;
  year: string;
  categories: Exclude<ProjectCategory, "All">[];
  description: string;
  tech: string[];
  github: string;
  demo: string;
  metrics: ProjectMetric[];
  highlights: string[];
  image?: { src: string; alt: string; width: number; height: number };
  extraLinks?: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Explainable Unemployment Rate Forecaster",
    tag: "Live Project",
    year: "2026",
    categories: ["Machine Learning", "Finance & Economics"],
    description:
      "A gradient-boosted (XGBoost) model forecasting next month's US unemployment rate from live FRED macro data — with every prediction explained via SHAP waterfall plots, not treated as a black box. Deployed as a live interactive dashboard.",
    tech: ["Python", "XGBoost", "SHAP", "FRED API", "Streamlit"],
    github: "https://github.com/akritik12/explainable-unemployment-forecaster",
    demo: "https://unemployment-forecaster-akriti.streamlit.app/",
    metrics: [
      { label: "Data source", value: "Live FRED API" },
      { label: "Model", value: "XGBoost" },
      { label: "Explainability", value: "SHAP" }
    ],
    highlights: [
      "Pulls live US macroeconomic indicators from the Federal Reserve's FRED API",
      "Forecasts next month's unemployment rate with a gradient-boosted model",
      "Explains every forecast with a SHAP waterfall plot, showing which indicators pushed it up or down",
      "Deployed as a public Streamlit dashboard anyone can try"
    ]
  },
  {
    title: "Indian FMCG Financial Statement Analysis",
    tag: "Real Project",
    year: "2026",
    categories: ["Finance & Economics"],
    description:
      "A 5-year ratio and DuPont analysis of HUL, ITC, Dabur, Britannia and Marico (FY21–FY26), built as a formula-driven Excel model with an interactive dashboard — pick a company and year and every KPI, chart and peer ranking updates.",
    tech: ["Excel", "Financial Modelling", "Ratio Analysis", "DuPont Analysis", "INDEX/MATCH"],
    github: "https://github.com/akritik12/indian-fmcg-financial-analysis",
    demo: "",
    metrics: [
      { label: "Companies", value: "5" },
      { label: "Years analysed", value: "FY21–FY26" },
      { label: "Highest ROE (Britannia)", value: "53.6%" },
      { label: "Live formulas", value: "1,700+" }
    ],
    highlights: [
      "Britannia leads on returns (ROE 53.6%, ROCE 56.3%), driven by 2.1x asset turnover — not margins",
      "ITC has the best operating margin (~35%) but a 164-day cash conversion cycle from leaf-tobacco inventory",
      "HUL runs a −89-day cash conversion cycle: suppliers effectively fund its operations",
      "Flagged one-off gains (ITC Hotels demerger in FY25) that would otherwise overstate profit growth",
      "Every figure reconciled: all 30 company-years balance, and Excel ratios match an independent Python check"
    ],
    image: {
      src: "/projects/fmcg-dashboard.png",
      alt: "Interactive Excel dashboard comparing FMCG companies",
      width: 1124,
      height: 1138
    },
    extraLinks: [
      {
        label: "Download dashboard (.xlsx)",
        href: "https://github.com/akritik12/indian-fmcg-financial-analysis/raw/main/FMCG_Financial_Analysis_dashboard.xlsx"
      }
    ]
  },
  {
    title: "Customer Sentiment Analysis",
    tag: "Real Project",
    year: "2025",
    categories: ["Machine Learning", "Market Research"],
    description:
      "An NLP pipeline classifying Amazon customer reviews as Positive, Neutral, or Negative using TF-IDF features and Logistic Regression — with an honest look at how class imbalance makes high accuracy misleading.",
    tech: ["Python", "scikit-learn", "TF-IDF", "NLP", "Pandas"],
    github: "https://github.com/akritik12/Customer-Sentiment-Analysis",
    demo: "",
    metrics: [
      { label: "Reviews analysed", value: "27,867" },
      { label: "Accuracy", value: "93.3%" },
      { label: "Macro F1", value: "0.42" }
    ],
    highlights: [
      "Cleaned 34,660 raw reviews and labelled sentiment from star ratings (1–2 Negative, 3 Neutral, 4–5 Positive)",
      "93% of reviews are positive, so accuracy alone barely beats always guessing \"Positive\"",
      "Used per-class recall and macro F1 to expose weak Negative and Neutral detection",
      "Word clouds surface the main complaint themes: apps, charging, speed and returns"
    ],
    image: {
      src: "/projects/sentiment-confusion-matrix.png",
      alt: "Confusion matrix of the sentiment model",
      width: 569,
      height: 455
    }
  },
  {
    title: "Food Impact on Indians: Survey Analysis",
    tag: "Real Project",
    year: "2025",
    categories: ["Market Research"],
    description:
      "Exploratory analysis of a 17,686-respondent diet and health survey in Orange Data Mining — using PCA, K-Means and chi-square tests to check whether real consumer segments exist before recommending anything.",
    tech: ["Orange Data Mining", "PCA", "K-Means", "Chi-square", "Survey Research"],
    github: "https://github.com/akritik12/Food--Impact-on--Indians-Market--Research",
    demo: "",
    metrics: [
      { label: "Survey responses", value: "17,686" },
      { label: "Variance in PC1 + PC2", value: "9.2%" },
      { label: "Region × cuisine χ² p-value", value: "0.829" }
    ],
    highlights: [
      "Profiled respondents: 54% vegetarian, 49% sedentary, 47% in the obese BMI range",
      "PCA and silhouette scores (< 0.05) showed no natural customer segments",
      "Chi-square tests found no link between region and cuisine, or diet and exercise",
      "Concluded the dataset is likely synthetic — and said so, rather than presenting random patterns as insight"
    ],
    image: {
      src: "/projects/food-pca.png",
      alt: "PCA explained variance plot from Orange Data Mining",
      width: 1108,
      height: 763
    }
  }
];

export const skillSections = [
  {
    number: "01",
    title: "Market Research & Conjoint Analysis",
    subtitle: "Consumer Insight",
    description:
      "Designing CBC & ACBC conjoint studies and segmentation work that turn stated preference into pricing and product decisions.",
    deliverables: [
      "Conjoint analysis (CBC & ACBC)",
      "Pricing strategy studies",
      "Market segmentation",
      "Survey design & fielding"
    ],
    stack: ["SPSS", "Excel", "R", "Survey Tools"]
  },
  {
    number: "02",
    title: "Data Analytics & Visualization",
    subtitle: "Visual Intelligence",
    description:
      "Turning raw survey and market data into dashboards and reports a stakeholder can act on without a data team in the room.",
    deliverables: [
      "Interactive dashboards",
      "KPI diagnostic reports",
      "EDA & data cleaning",
      "Visual storytelling decks"
    ],
    stack: ["Power BI", "SQL", "Python", "R (ggplot2)", "Excel"]
  },
  {
    number: "03",
    title: "Predictive Modeling & Applied ML",
    subtitle: "Forecasting & Explainability",
    description:
      "Explainable forecasting and classification models, built to be trusted by a stakeholder who isn't a data scientist.",
    deliverables: [
      "Time-series forecasting (XGBoost)",
      "SHAP explainability",
      "NLP / text classification",
      "Clustering & segmentation"
    ],
    stack: ["Python", "scikit-learn", "XGBoost", "SHAP"]
  }
];

export const certifications = [
  {
    title: "Social Media Data Analytics",
    issuer: "University of Washington (Coursera)"
  },
  {
    title: "Applied Text Mining in Python",
    issuer: "University of Michigan (Coursera)"
  },
  {
    title: "Certified Research Expert (CRE)",
    issuer: "International Institute for Procurement and Market Research (IIPMR)"
  },
  {
    title: "Using R for Geospatial Statistical Modeling",
    issuer: "Case Western Reserve University (Coursera)"
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM (Coursera)"
  },
  {
    title: "Data Collection and Processing with Python",
    issuer: "University of Michigan (Coursera)"
  }
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];