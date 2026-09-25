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
  { label: "Year in Advanced Analytics", value: "1+" },
  { label: "Survey Responses Analyzed", value: "17,000+" },
  { label: "Certifications Earned", value: "6" }
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

export const projects = [
  {
    title: "Explainable Unemployment Rate Forecaster",
    tag: "Live Project",
    year: "2026",
    description:
      "A gradient-boosted (XGBoost) model forecasting next month's US unemployment rate from live FRED macro data — with every prediction explained via SHAP waterfall plots, not treated as a black box. Deployed as a live interactive dashboard.",
    tech: ["Python", "XGBoost", "SHAP", "FRED API", "Streamlit"],
    github: "https://github.com/akritik12/explainable-unemployment-forecaster",
    demo: "https://unemployment-forecaster-akriti.streamlit.app/"
  },
  {
    title: "Customer Sentiment Analysis",
    tag: "Real Project",
    year: "2025",
    description:
      "An NLP pipeline classifying 34,000+ real Amazon customer reviews as Positive, Neutral, or Negative using TF-IDF feature extraction and Logistic Regression, with confusion matrix and word-cloud diagnostics.",
    tech: ["Python", "scikit-learn", "TF-IDF", "NLP", "Pandas"],
    github: "https://github.com/akritik12/Customer-Sentiment-Analysis",
    demo: ""
  },
  {
    title: "Food Impact on Indians: Market Research",
    tag: "Real Project",
    year: "2025",
    description:
      "Consumer behaviour and market segmentation analysis on a 17,686-response Kaggle survey dataset, using K-Means clustering in Orange Data Mining to identify actionable customer segments by demographics and food preference.",
    tech: ["Orange Data Mining", "K-Means Clustering", "Market Segmentation", "Survey Research"],
    github: "https://github.com/akritik12/Food--Impact-on--Indians-Market--Research",
    demo: ""
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