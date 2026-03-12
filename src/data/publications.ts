export interface Publication {
  title: string;
  journal: string;
  status: "Accepted" | "Under Review";
}

export const publications: Publication[] = [
  {
    title:
      "Corporate Social Responsibility (CSR) and Skill Development in India...",
    journal: "Journal of Policy Studies",
    status: "Accepted",
  },
  {
    title:
      "Analyzing Gender Equality in Italy: A Legal and Policy Examination of...",
    journal: "European Policy Review",
    status: "Accepted",
  },
  {
    title: "Empowering Rural Women Entrepreneurs in India: Overcoming...",
    journal: "Development Policy Review",
    status: "Under Review",
  },
];
