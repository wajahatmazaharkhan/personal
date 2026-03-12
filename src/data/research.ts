import { FileText, BookOpen, Users } from "lucide-react";

export interface ResearchItem {
  title: string;
  desc: string;
  icon?: any;
}

export const researchInterests: ResearchItem[] = [
  {
    title: "Women's Entrepreneurship & Skilling Policies",
    desc: "Evaluation of women-focused entrepreneurship and skilling policies and their long-term economic outcomes.",
  },
  {
    title: "Gender, Exclusion & Policy Design",
    desc: "Role of gender, marginalization, program design, and institutions in shaping access and effectiveness.",
  },
  {
    title: "Inclusive Evaluation & Policy Learning",
    desc: "Capturing heterogeneity, exclusion, and unintended effects to improve policy learning and outcomes.",
  },
];

export const researchMethods: ResearchItem[] = [
  {
    title: "Mixed-Methods & Causal Evaluation",
    desc: "Mixed-methods, quasi-experimental designs, and causal inference for policy evaluation.",
  },
  {
    title: "Quantitative Modeling & Analytics",
    desc: "PSM, SEM, and machine learning models for impact estimation and prediction.",
  },
  {
    title: "Qualitative Frameworks & Adaptive Tools",
    desc: "Field research, Theory of Change, institutional mapping, data triangulation, and policy dashboards.",
  },
];

export const fullResearchInterests: ResearchItem[] = [
  {
    title: "Gender & Exclusion",
    icon: Users,
    desc: "Analyzing how policy frameworks intersect with gender roles to create or mitigate structural inequalities.",
  },
  {
    title: "Policy Design",
    icon: BookOpen,
    desc: "Evaluating the lifecycle of public policies from formulation to implementation and assessing their real-world impact.",
  },
  {
    title: "Data-Driven Governance",
    icon: FileText,
    desc: "Leveraging big data and statistical modeling to improve transparency and accountability in public administration.",
  },
];
