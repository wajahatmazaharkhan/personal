export interface TimelineItem {
  date: string;
  role: string;
  highlight: boolean;
  side: "left" | "right";
}

export const timelineItems: TimelineItem[] = [
  {
    date: "Jun 2017 – Jan 2018",
    role: "Chairman's Political Representative",
    highlight: false,
    side: "right",
  },
  {
    date: "Jan 2020 – Jun 2021",
    role: "Junior Manager / Field Supervisor",
    highlight: false,
    side: "left",
  },
  {
    date: "Jul 2021 – Jul 2022",
    role: "Manager – Public Policy: International Institute of SDGs and Public Policy Research, New Delhi",
    highlight: false,
    side: "right",
  },
  {
    date: "Aug 2022 – Present",
    role: "PhD Scholar & Senior Research Fellow",
    highlight: true,
    side: "left",
  },
  {
    date: "Jan 2023 – Jun 2023",
    role: "Teaching Assistant – Mixed Methods Research",
    highlight: false,
    side: "right",
  },
  {
    date: "Jul 2023 – Dec 2023",
    role: "Teaching Assistant – Policy Evaluation",
    highlight: false,
    side: "left",
  },
  {
    date: "Feb 2024",
    role: "Doctoral Colloquium – IIT Kharagpur",
    highlight: false,
    side: "right",
  },
  {
    date: "2024",
    role: "National & International Conferences",
    highlight: false,
    side: "left",
  },
  {
    date: "Feb 2025",
    role: "National Workshop – Ministry of Education",
    highlight: false,
    side: "right",
  },
  {
    date: "Apr 2025",
    role: "International Management Conference - Goa Institute of Management",
    highlight: false,
    side: "left",
  },
  {
    date: "Jun 2025",
    role: "MERC Colloquium – IIM Kashipur",
    highlight: false,
    side: "right",
  },
];
