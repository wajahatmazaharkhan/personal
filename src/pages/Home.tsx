import React, { useState } from 'react';

const LinkedInIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#li-clip)">
      <path d="M42.5 0H7.5C3.358 0 0 3.358 0 7.5v35C0 46.642 3.358 50 7.5 50h35c4.142 0 7.5-3.358 7.5-7.5v-35C50 3.358 46.642 0 42.5 0z" fill="#0077B5" />
      <path d="M13.867 17.09a3.617 3.617 0 100-7.234 3.617 3.617 0 000 7.234zM23.828 18.945v19.336M13.867 18.945v19.336" stroke="white" strokeWidth="6.445" />
      <path d="M26.953 27.539c0-1.953 1.27-3.906 3.516-3.906 2.344 0 3.223 1.758 3.223 4.395v10.254h6.445V27.246C40.137 21.289 37.012 18.555 32.715 18.555c-3.32 0-4.98 1.855-5.762 3.125" fill="white" />
    </g>
    <defs><clipPath id="li-clip"><rect width="50" height="50" rx="20" fill="white" /></clipPath></defs>
  </svg>
);

const XIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" rx="20" fill="black" />
    <path d="M27.854 22.703L39.022 10H36.376L26.679 21.03 18.934 10H10l11.712 16.679L10 40h2.647l10.24-11.648L31.067 40H40L27.853 22.703zm-3.625 4.123l-1.186-1.661L13.6 11.95h4.066l7.62 10.664 1.186 1.66 9.905 13.862H32.31l-8.081-11.31z" fill="white" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="50" height="50" rx="20" fill="black" />
    <path d="M25 10C16.713 10 10 16.887 10 25.381c0 6.797 4.298 12.561 10.256 14.592.75.145 1.025-.33 1.025-.739 0-.365-.013-1.332-.019-2.614-4.173.928-5.053-2.064-5.053-2.064-.682-1.775-1.668-2.249-1.668-2.249-1.359-.953.104-.934.104-.934 1.507.107 2.298 1.581 2.298 1.581 1.338 2.352 3.511 1.673 4.369 1.279.134-.994.52-1.672.95-2.057-3.331-.384-6.833-1.707-6.833-7.6 0-1.679.582-3.05 1.537-4.127-.17-.389-.676-1.952.128-4.072 0 0 1.256-.412 4.099 1.581a13.96 13.96 0 013.73-.514c1.275.008 2.55.177 3.75.514 2.85-1.993 4.106-1.581 4.106-1.581.805 2.12.299 3.683.149 4.072.955 1.077 1.537 2.448 1.537 4.127 0 5.91-3.507 7.212-6.845 7.59.525.461 1.013 1.405 1.013 2.846 0 2.058-.018 3.712-.018 4.212 0 .404.262.884 1.03.73C35.706 37.936 40 32.168 40 25.381 40 16.887 33.284 10 25 10z" fill="white" />
  </svg>
);

const ScholarIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#gs-clip)">
      <path d="M0 0H50V50H0" fill="#4285F4" />
      <path d="M20.449 10L10 19.18H16.738c.488 4.394 4.004 6.25 7.617 6.543-.683 1.758-.39 2.637.685 3.809-4.199.097-10.059 2.539-10.059 6.543.39 4.395 6.152 5.274 8.984 5.274 3.711.097 7.91-1.856 8.789-5.274.39-3.418-.977-5.273-3.027-6.933-2.246-1.758-2.734-2.735-2.051-3.907 1.465-1.66 3.418-2.637 3.809-4.98.195-1.66-.195-2.735-.586-4.2l4.395-3.71-.098 1.562c-.293.195-.488.586-.488.879v10.058c.195 1.27 2.148 1.075 2.246 0v-10.06c0-.293-.195-.683-.488-.78V11.563L38.027 10H20.45zM26.113 23.77C20.156 24.746 17.617 15.273 22.402 14.102c5.469-1.074 8.106 8.398 3.71 9.668zM25.625 30.898c5.859 1.27 5.957 6.153 1.035 7.617-4.297.88-8.008-.39-7.91-2.93 0-2.44 3.418-4.687 6.875-4.687z" fill="white" />
    </g>
    <defs><clipPath id="gs-clip"><rect width="50" height="50" rx="20" fill="white" /></clipPath></defs>
  </svg>
);

const FacebookIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#fb-clip)">
      <rect width="50" height="50" rx="20" fill="#1877F2" />
      <path d="M34.726 32.232L35.836 25H28.904v-4.685c0-1.972.973-3.904 4.069-3.904H36.123v-6.15S33.26 9.768 30.52 9.768C24.809 9.768 21.082 13.233 21.082 19.493V25H14.739v7.232H21.082v17.466c1.274.205 2.575.302 3.904.302s2.63-.09 3.905-.302V32.232H34.726z" fill="white" />
    </g>
    <defs><clipPath id="fb-clip"><rect width="50" height="50" rx="20" fill="white" /></clipPath></defs>
  </svg>
);

const InstagramIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#ig-clip)">
      <path d="M38.281 0H11.719C5.247 0 0 5.247 0 11.719v26.562C0 44.753 5.247 50 11.719 50h26.562C44.753 50 50 44.753 50 38.281V11.719C50 5.247 44.753 0 38.281 0z" fill="url(#ig-grad1)" />
      <path d="M38.281 0H11.719C5.247 0 0 5.247 0 11.719v26.562C0 44.753 5.247 50 11.719 50h26.562C44.753 50 50 44.753 50 38.281V11.719C50 5.247 44.753 0 38.281 0z" fill="url(#ig-grad2)" />
      <path d="M24.502 8c-4.753 0-5.35.02-7.217.105-1.863.085-3.134.38-4.247.813-1.15.447-2.127 1.045-3.1 2.018-.973.972-1.571 1.949-2.019 3.1-.433 1.113-.728 2.384-.813 4.247C7.021 20.15 7 20.747 7 25.5s.021 5.347.106 7.214c.085 1.863.38 3.134.813 4.247.447 1.151 1.045 2.127 2.018 3.1.972.973 1.95 1.571 3.1 2.019 1.113.432 2.384.727 4.247.812C19.151 42.979 19.748 43 24.5 43s5.348-.021 7.214-.106c1.863-.085 3.135-.38 4.248-.812 1.15-.448 2.127-1.046 3.1-2.019.972-.973 1.57-1.949 2.018-3.1.432-1.113.727-2.384.812-4.247.079-1.866.1-2.461.1-7.214s-.021-5.348-.1-7.214c-.085-1.863-.38-3.135-.812-4.248-.448-1.15-1.046-2.127-2.019-3.1-.972-.972-1.949-1.57-3.1-2.018-1.113-.432-2.385-.728-4.248-.812C29.848 8.02 29.253 8 24.5 8h.002zm-1.57 3.154c.466-.001.986 0 1.57 0 4.672 0 5.226.017 7.071.101 1.706.078 2.632.363 3.249.602.817.317 1.4.696 2.012 1.309.612.612.992 1.196 1.309 2.013.24.616.524 1.542.602 3.248.084 1.845.102 2.4.102 7.068s-.018 5.224-.102 7.069c-.078 1.706-.363 2.632-.602 3.249-.317.816-.697 1.399-1.309 2.011-.612.613-1.194.992-2.012 1.31-.616.238-1.543.522-3.249.6-1.844.085-2.399.103-7.07.103-4.672 0-5.227-.018-7.071-.102-1.706-.079-2.632-.363-3.249-.602-.817-.318-1.4-.697-2.012-1.31-.612-.612-.992-1.194-1.309-2.011-.239-.617-.524-1.543-.601-3.249-.084-1.845-.101-2.4-.101-7.07s.017-5.224.101-7.068c.078-1.706.363-2.633.601-3.249.317-.817.697-1.4 1.31-2.012.612-.613 1.195-.992 2.011-1.31.617-.239 1.543-.523 3.249-.601 1.614-.073 2.238-.095 5.5-.098v.004zM33.843 14.06a2.188 2.188 0 100 4.376 2.188 2.188 0 000-4.376zm-9.34 2.452c-4.963 0-8.988 4.025-8.988 8.988 0 4.963 4.025 8.988 8.988 8.988 4.963 0 8.988-4.025 8.988-8.988 0-4.963-4.025-8.988-8.988-8.988zm0 3.154c3.221 0 5.833 2.611 5.833 5.834 0 3.222-2.612 5.833-5.833 5.833-3.221 0-5.833-2.611-5.833-5.833 0-3.223 2.612-5.834 5.833-5.834z" fill="white" />
      <defs>
        <radialGradient id="ig-grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.281 53.851) rotate(-90) scale(49.554 46.089)">
          <stop stopColor="#FFDD55" /><stop offset=".1" stopColor="#FFDD55" /><stop offset=".5" stopColor="#FF543E" /><stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient id="ig-grad2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-8.375 3.602) rotate(78.681) scale(22.151 91.306)">
          <stop stopColor="#3771C8" /><stop offset=".128" stopColor="#3771C8" /><stop offset="1" stopColor="#6600FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </g>
    <defs><clipPath id="ig-clip"><rect width="50" height="50" rx="20" fill="white" /></clipPath></defs>
  </svg>
);

const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="currentColor" />
  </svg>
);

import portraitImg from '../assets/portrait.jpg';
import satyaImg from '../assets/satya_nadella.png';
import sridharImg from '../assets/sridhar_vembu.png';
import satya2Img from '../assets/satya_nadella_2.png';
import elonImg from '../assets/elon_musk.png';
import kagameImg from '../assets/paul_kagame.png';

export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(2);

  const timelineItems = [
    { date: 'Jun 2017 – Jan 2018', role: "Chairman's Political Representative", highlight: false, side: 'right' },
    { date: 'Jan 2020 – Jun 2021', role: 'Junior Manager / Field Supervisor', highlight: false, side: 'left' },
    { date: 'Jul 2021 – Jul 2022', role: 'Manager – Public Policy: International Institute of SDGs and Public Policy Research, New Delhi', highlight: false, side: 'right' },
    { date: 'Aug 2022 – Present', role: 'PhD Scholar & Senior Research Fellow', highlight: true, side: 'left' },
    { date: 'Jan 2023 – Jun 2023', role: 'Teaching Assistant – Mixed Methods Research', highlight: false, side: 'right' },
    { date: 'Jul 2023 – Dec 2023', role: 'Teaching Assistant – Policy Evaluation', highlight: false, side: 'left' },
    { date: 'Feb 2024', role: 'Doctoral Colloquium – IIT Kharagpur', highlight: false, side: 'right' },
    { date: '2024', role: 'National & International Conferences', highlight: false, side: 'left' },
    { date: 'Feb 2025', role: 'National Workshop – Ministry of Education', highlight: false, side: 'right' },
    { date: 'Apr 2025', role: 'International Management Conference - Goa Institute of Management', highlight: false, side: 'left' },
    { date: 'Jun 2025', role: 'MERC Colloquium – IIM Kashipur', highlight: false, side: 'right' },
  ];

  const researchInterests = [
    { title: "Women's Entrepreneurship & Skilling Policies", desc: "Evaluation of women-focused entrepreneurship and skilling policies and their long-term economic outcomes." },
    { title: "Gender, Exclusion & Policy Design", desc: "Role of gender, marginalization, program design, and institutions in shaping access and effectiveness." },
    { title: "Inclusive Evaluation & Policy Learning", desc: "Capturing heterogeneity, exclusion, and unintended effects to improve policy learning and outcomes." },
  ];

  const researchMethods = [
    { title: "Mixed-Methods & Causal Evaluation", desc: "Mixed-methods, quasi-experimental designs, and causal inference for policy evaluation." },
    { title: "Quantitative Modeling & Analytics", desc: "PSM, SEM, and machine learning models for impact estimation and prediction." },
    { title: "Qualitative Frameworks & Adaptive Tools", desc: "Field research, Theory of Change, institutional mapping, data triangulation, and policy dashboards." },
  ];

  const publications = [
    { title: "Corporate Social Responsibility (CSR) and Skill Development in India...", journal: "Journal of Policy Studies", status: "Accepted" },
    { title: "Analyzing Gender Equality in Italy: A Legal and Policy Examination of...", journal: "European Policy Review", status: "Accepted" },
    { title: "Empowering Rural Women Entrepreneurs in India: Overcoming...", journal: "Development Policy Review", status: "Under Review" },
  ];

  const experiences = [
    {
      title: "Chairman's Political Representative",
      org: "Nagar Palika Ambehta Peer",
      date: "2017 – 2018",
      tags: ["Strategic Communication", "Digital Media", "Campaign Planning"],
    },
    {
      title: "Senior Research Fellow",
      org: "O.P. Jindal Global University",
      date: "2022 – Present",
      tags: ["Policy Analysis", "Field Research", "Impact Evaluation"],
    },
    {
      title: "Junior Manager / Field Supervisor",
      org: "Jagrook Mahila Sanstha Parcham",
      date: "2020 – 2021",
      tags: ["Community Engagement", "Program Coordination", "Government Liaison"],
    },
    {
      title: "Teaching Assistant – Mixed Methods Research",
      org: "O.P. Jindal Global University",
      date: "2023",
      tags: ["Mixed Methods Research", "Data Analysis", "Research Design"],
    },
    {
      title: "Manager – Public Policy",
      org: "International Institute of SDGs & Public Policy Research",
      date: "2021 – 2022",
      tags: ["Project Management", "Team Leadership", "Training Facilitation"],
    },
    {
      title: "Teaching Assistant – Policy Evaluation",
      org: "O.P. Jindal Global University",
      date: "2023",
      tags: ["Policy Analysis", "Evaluation Methods", "Framework Development"],
    },
  ];

  const testimonials = [
    {
      name: "Satya Nadella",
      role: "CEO, Microsoft",
      image: satyaImg,
      quote: '"We are seeing a massive shift in how technology impacts policy and education. This research is highly pertinent to the coming decade of technology."',
    },
    {
      name: "Elon Musk",
      role: "CEO, Tesla",
      image: elonImg,
      quote: '"Building the future requires a deep understanding of the regulatory landscapes we navigate today. Important and impressive analysis."',
    },
    {
      name: "Sridhar Vembu",
      role: "Ex-CEO, Zoho",
      image: sridharImg,
      quote: '"The work reflects a strong balance between academic rigor and real-world relevance. A thoughtful approach to research, policy engagement, and social impact is clearly visible."',
    },
    {
      name: "Satya Nadella",
      role: "CEO, Microsoft",
      image: satya2Img,
      quote: '"Empowering organizations to do more requires thoughtful policy frameworks. This effort provides exactly the perspective needed."',
    },
    {
      name: "Paul Kagame",
      role: "President, Rwanda",
      image: kagameImg,
      quote: '"We must ensure that technological development remains rooted in societal benefit. This work highlights those crucial intersections."',
    },
  ];

  return (
    <div className="home-wrapper">

      {/* ── Hero Section ── */}
      <section id="home" className="hero-section">
        <div className="hero-left">
          <div className="hero-text-group">
            <h1 className="hero-title">Researching Policy for Real Impact</h1>
            <p className="hero-subtitle">Evaluating women-centered public policies using evidence-based and mixed-methods research.</p>
          </div>
          <div className="hero-ctas">
            <button className="btn-primary">View Resume</button>
            <a href="#research" className="btn-outline">Research</a>

          
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-grid">
            <div className="hero-placeholder-box"></div>
            <img
              src={portraitImg}
              alt="WM Khan Portrait"
              className="hero-portrait"
            />
            <div className="hero-wide-box"></div>
            <div className="hero-social-links">
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" aria-label="X / Twitter"><XIcon /></a>
              <a href="#" aria-label="GitHub"><GitHubIcon /></a>
              <a href="#" aria-label="Google Scholar"><ScholarIcon /></a>
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="about-section">
        <div className="about-card">
          <p className="about-text">
            I am a public policy researcher working on women's entrepreneurship and skilling policies in India. My research examines how program design, institutional arrangements, and social exclusion influence policy effectiveness, using evidence-based and mixed-methods approaches.
          </p>
          <div className="company-logos">
            {/* Google */}
            <svg width="90" height="30" viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google">
              <path d="M87.353 18.062L89.857 19.731C89.044 20.929 87.1 22.983 83.738 22.983c-4.175 0-7.284-3.23-7.284-7.339 0-4.372 3.142-7.338 6.932-7.338 3.812 0 5.68 3.032 6.284 4.669l.33.835L80.178 17.875c.747 1.472 1.912 2.219 3.56 2.219 1.648 0 2.79-.813 3.614-2.032zM79.651 15.414l6.559-2.725c-.363-.912-1.439-1.56-2.724-1.56-1.637 0-3.911 1.45-3.835 4.285z" fill="#FF302F" />
              <path d="M71.719.824H74.883V22.313H71.719V.824z" fill="#20B15A" />
              <path d="M66.731 8.877H69.785v13.052C69.785 27.345 66.588 29.575 62.809 29.575c-3.56 0-5.702-2.395-6.504-4.34l2.801-1.164c.505 1.197 1.725 2.614 3.703 2.614 2.428 0 3.922-1.505 3.922-4.318v-1.054h-.11c-.725.879-2.11 1.67-3.867 1.67-3.67 0-7.031-3.197-7.031-7.317 0-4.142 3.362-7.372 7.031-7.372 1.747 0 3.142.78 3.867 1.637h.11V8.877zm.22 6.79c0-2.593-1.725-4.483-3.922-4.483-2.22 0-4.086 1.89-4.086 4.483 0 2.56 1.866 4.416 4.086 4.416 2.197.011 3.922-1.856 3.922-4.416z" fill="#3686F7" />
              <path d="M38.354 15.612C38.354 19.841 35.058 22.95 31.015 22.95c-4.043 0-7.339-3.12-7.339-7.339 0-4.251 3.296-7.35 7.339-7.35 4.043 0 7.339 3.099 7.339 7.35zm-3.208 0c0-2.637-1.912-4.45-4.131-4.45-2.22 0-4.131 1.813-4.131 4.45 0 2.614 1.911 4.449 4.131 4.449 2.219 0 4.131-1.835 4.131-4.449z" fill="#FF302F" />
              <path d="M54.382 15.645C54.382 19.874 51.086 22.983 47.043 22.983c-4.043 0-7.339-3.11-7.339-7.338 0-4.252 3.296-7.339 7.339-7.339 4.043 0 7.339 3.076 7.339 7.339zm-3.22 0c0-2.637-1.911-4.45-4.131-4.45-2.22 0-4.131 1.813-4.131 4.45 0 2.614 1.911 4.449 4.131 4.449 2.23 0 4.131-1.854 4.131-4.449z" fill="#FFBA40" />
              <path d="M11.613 19.764C7.01 19.764 3.406 16.05 3.406 11.448c0-4.604 3.603-8.317 8.207-8.317 2.483 0 4.296.977 5.636 2.229L15.057 3.153C13.189 1.362 10.695 0 11.613 0 5.306 0 0 5.142 0 11.448 0 17.754 5.306 22.896 11.613 22.896c3.406 0 5.977-1.121 7.987-3.208 2.065-2.065 2.703-4.966 2.703-7.317 0-.736-.088-1.494-.187-2.054H11.613v3.054h7.481c-.22 1.912-.824 3.219-1.714 4.109-1.077 1.088-2.78 2.285-5.767 2.285z" fill="#3686F7" />
            </svg>

            {/* Microsoft */}
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft">
              <path d="M12.68 12.749H0V0h12.68v12.749z" fill="#F1511B" />
              <path d="M26.681 12.749H14.001V0h12.68v12.749z" fill="#80CC28" />
              <path d="M12.68 26.83H0V14.081h12.68V26.83z" fill="#00ADEF" />
              <path d="M26.681 26.83H14.001V14.081h12.68V26.83z" fill="#FBBC09" />
            </svg>

            {/* Infosys */}
            <svg width="80" height="30" viewBox="0 0 90 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Infosys">
              <path d="M0 3.91V0.689h3.22v23.358L3.222 24.12V27.272H0V24.087L0 3.91z" fill="#287AC8" />
            </svg>

            {/* Zoho - simplified */}
            <span className="logo-text-zoho">ZOHO</span>

            {/* TCS */}
            <div className="logo-img-tcs flex items-center justify-center font-bold text-2xl text-blue-800 dark:text-blue-400">TCS</div>

            {/* Wipro */}
            <div className="logo-img-wipro flex items-center justify-center font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Wipro</div>

            {/* Nvidia */}
            <svg width="90" height="17" viewBox="0 0 100 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NVIDIA">
              <g clipPath="url(#nv-clip)">
                <path d="M61.095 3.599V16.067h3.519V3.599H61.095zM33.411 3.578V16.057h3.55V6.367l2.769.011c.908 0 1.542.222 1.976.687.56.592.781 1.553.781 3.296v5.696h3.445V9.167c0-4.924-3.138-5.59-6.203-5.59H33.41zm33.358.021V16.067h5.706c3.043 0 4.036-.507 5.103-1.638.761-.793 1.247-2.547 1.247-4.459 0-1.754-.412-3.318-1.141-4.29-1.289-1.743-3.17-2.081-5.98-2.081H66.77zm3.487 2.705h1.511c2.198 0 3.614.983 3.614 3.54 0 2.557-1.416 3.55-3.614 3.55H70.256V6.304zm-14.234 0l-2.937 9.879-2.811-9.879h-3.804l4.015 12.468h5.072l4.057-12.468H56.022zm24.451 9.763H83.99V3.599H80.474v12.468zM90.342 3.599L85.429 16.057h3.466l.782-2.209h5.811l.74 2.218H100l-4.956-12.467H90.342zm2.283 2.272l2.134 5.832h-4.332l2.198-5.832z" fill="black" />
                <path d="M10.704 5.67V3.958c.169-.011.338-.021.507-.021 4.692-.148 7.766 4.036 7.766 4.036s-3.318 4.607-6.879 4.607c-.475 0-.94-.074-1.384-.222V7.16c1.828.222 2.198 1.025 3.286 2.853l2.441-2.05s-1.786-2.335-4.787-2.335c-.317-.01-.634.012-.95.043zm0-5.664v2.557l.507-.032c6.52-.221 10.778 5.347 10.778 5.347s-4.881 5.938-9.964 5.938c-.444 0-.877-.042-1.31-.117v1.585c.36.042.729.07 1.099.07 4.734 0 8.157-2.42 11.475-5.272.55.443 2.8 1.51 3.265 1.975-3.148 2.642-10.492 4.765-14.655 4.765-.402 0-.782-.021-1.162-.063V18.994h17.984V.006H10.704zm0 12.352v1.353c-4.374-.782-5.589-5.336-5.589-5.336S7.217 6.05 10.704 5.67v1.479h-.011c-1.828-.222-3.265 1.49-3.265 1.49s.814 2.884 3.276 3.72zm-7.766-4.168S5.526 4.36 10.714 3.958V2.563C4.966 3.028 0 7.889 0 7.889s2.811 8.136 10.704 8.876v-1.48c-5.789-.718-7.766-7.1-7.766-7.1z" fill="#76B900" />
              </g>
              <defs><clipPath id="nv-clip"><rect width="100" height="19" fill="white" /></clipPath></defs>
            </svg>
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section id="journey" className="journey-section">
        <div className="section-badge-wrapper">
          <span className="section-badge">Journey</span>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineItems.map((item, i) => (
            <div key={i} className={`timeline-row ${item.side === 'left' ? 'timeline-row--left' : 'timeline-row--right'}`}>
              <div className="timeline-role-side">
                <div className={`timeline-role-pill ${item.highlight ? 'timeline-role-pill--highlight' : ''}`}>
                  {item.highlight && <div className="timeline-role-pill--blur" aria-hidden="true"></div>}
                  <span>{item.role}</span>
                </div>
              </div>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot-outer">
                  <div className="timeline-dot-mid">
                    <div className="timeline-dot-inner"></div>
                  </div>
                </div>
              </div>
              <div className="timeline-date-side">
                <span className="timeline-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Research Section ── */}
      <section id="research" className="research-section">
        <div className="section-badge-wrapper">
          <span className="section-badge">Research</span>
        </div>

        <div className="research-columns">
          <div className="research-col">
            <div className="research-col-header">Research Interests</div>
            <div className="research-cards">
              {researchInterests.map((item, i) => (
                <div key={i} className="research-card">
                  <h3 className="research-card-title">{item.title}</h3>
                  <p className="research-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="research-col">
            <div className="research-col-header">Research Methods</div>
            <div className="research-cards">
              {researchMethods.map((item, i) => (
                <div key={i} className="research-card">
                  <h3 className="research-card-title">{item.title}</h3>
                  <p className="research-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="publications-grid">
          {publications.map((pub, i) => (
            <div key={i} className="publication-card">
              <div className="publication-card-body"></div>
              <div className="publication-card-footer">
                <p className="publication-title">{pub.title}</p>
                <span className={`publication-badge ${pub.status === 'Accepted' ? 'publication-badge--accepted' : 'publication-badge--review'}`}>
                  {pub.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta-wrapper">
          <button className="btn-primary">View Details</button>
        </div>
      </section>

      {/* ── Experience Section ── */}
      <section id="experience" className="experience-section">
        <div className="section-badge-wrapper">
          <span className="section-badge">Experience</span>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-card">
              <div className="experience-card-info">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-org">{exp.org}</p>
                <p className="experience-date">{exp.date}</p>
              </div>
              <div className="experience-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="experience-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Engagement Section ── */}
      <section id="engagement" className="engagement-section">
        <div className="section-badge-wrapper">
          <span className="section-badge">Engagement</span>
        </div>

        <div className="engagement-cards">
          <div className="engagement-card engagement-card--short">
            <div className="engagement-card-image"></div>
            <div className="engagement-card-text">
              <h3 className="engagement-card-title">Field &amp; Social Work</h3>
              <p className="engagement-card-desc">Ground-level engagement with communities, grassroots organizations, and social sector initiatives.</p>
            </div>
          </div>

          <div className="engagement-card engagement-card--tall">
            <div className="engagement-card-image"></div>
            <div className="engagement-card-text">
              <h3 className="engagement-card-title">Conferences</h3>
              <p className="engagement-card-desc">Participation in national and international conferences, doctoral colloquiums, and academic workshops.</p>
            </div>
          </div>

          <div className="engagement-card engagement-card--short">
            <div className="engagement-card-image"></div>
            <div className="engagement-card-text">
              <h3 className="engagement-card-title">Fellowships</h3>
              <p className="engagement-card-desc">Recipient of competitive fellowships and scholarships supporting doctoral research and academic work.</p>
            </div>
          </div>
        </div>

        <div className="section-cta-wrapper">
          <button className="btn-primary">View Details</button>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-badge-wrapper">
          <span className="section-badge section-badge--sparkle">
            <SparkleIcon />
          </span>
        </div>

        <div className="testimonial-main">
          <div className="testimonial-card">
            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="testimonial-portrait"
            />
            <div className="testimonial-name-block">
              <span className="testimonial-name">{testimonials[activeTestimonial].name}</span>
              <span className="testimonial-role">{testimonials[activeTestimonial].role}</span>
            </div>
          </div>

          <div className="testimonial-quote-card">
            <div className="testimonial-quote-inner"></div>
            <p className="testimonial-quote">{testimonials[activeTestimonial].quote}</p>
          </div>
        </div>

        <div className="testimonial-thumbnails" style={{ display: 'flex', gap: '1rem', marginTop: '4rem', justifyContent: 'center', alignItems: 'center' }}>
          <button onClick={() => setActiveTestimonial((prev) => Math.max(0, prev - 1))} className="thumbnail-arrow" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-color)', fontSize: '24px', padding: '0 10px' }}>
            &lt;
          </button>
          {testimonials.map((t, i) => (
            <img
              key={i}
              src={t.image}
              alt={t.name}
              onClick={() => setActiveTestimonial(i)}
              style={{
                width: activeTestimonial === i ? '80px' : '70px',
                height: activeTestimonial === i ? '80px' : '70px',
                borderRadius: '16px', objectFit: 'cover', cursor: 'pointer',
                boxShadow: activeTestimonial === i ? '0 0 0 3px var(--bg-color), 0 0 0 5px var(--text-color)' : 'none',
                opacity: activeTestimonial === i ? 1 : 0.5,
                transition: 'all 0.3s ease',
                margin: '0 5px'
              }}
            />
          ))}
          <button onClick={() => setActiveTestimonial((prev) => Math.min(testimonials.length - 1, prev + 1))} className="thumbnail-arrow" style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-color)', fontSize: '24px', padding: '0 10px' }}>
            &gt;
          </button>
        </div>
      </section>

      {/* ── Newsletter / Contact ── */}
      <section id="contact" className="newsletter-section">
        <div className="newsletter-card">
          <h2 className="newsletter-title">Subscribe to the Newsletter</h2>
          <p className="newsletter-subtitle">Insights from research, field engagement, and academic contributions.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="newsletter-input-wrapper">
              <input
                type="email"
                placeholder="Email address"
                className="newsletter-input"
                required
              />
            </div>
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      <style>{`
        /* ─── Layout ─── */
        .home-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 80px;
          font-family: Poppins, -apple-system, Roboto, Helvetica, sans-serif;
        }

        /* ─── Hero ─── */
        .hero-section {
          display: flex;
          align-items: flex-start;
          gap: 50px;
          padding: 80px 0 100px;
          min-height: 80vh;
        }
        .hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 50px;
          padding-top: 36px;
        }
        .hero-text-group {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .hero-title {
          color: var(--text-color);
          font-size: 52px;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 1.04px;
          margin: 0;
        }
        .hero-subtitle {
          color: var(--text-color);
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.36px;
          margin: 0;
        }
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 50px;
        }
        .hero-right {
          flex-shrink: 0;
        }
        .hero-image-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          width: 626px;
        }
        .hero-placeholder-box {
          width: 303px;
          height: 294px;
          flex-shrink: 0;
          border-radius: 20px;
          background: var(--card-color, #3E3E3E);
        }
        .hero-portrait {
          width: 303px;
          height: 294px;
          flex-shrink: 0;
          border-radius: 20px;
          object-fit: cover;
        }
        .hero-wide-box {
          width: 412px;
          height: 122px;
          flex-shrink: 0;
          border-radius: 20px;
          background: var(--card-color, #3E3E3E);
        }
        .hero-social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          width: 194px;
        }
        .hero-social-links a {
          display: flex;
          flex-shrink: 0;
          border-radius: 20px;
          overflow: hidden;
        }

        /* ─── Buttons ─── */
        .btn-primary {
          display: flex;
          padding: 10px 50px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 20px;
          background: #F05A28;
          color: #FFF;
          font-family: Poppins, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.36px;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: #d94c1e; }
        .btn-outline {
          display: flex;
          padding: 10px 50px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 20px;
          border: 1px solid var(--text-color);
          background: transparent;
          color: var(--text-color);
          font-family: Poppins, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.36px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-outline:hover { background: var(--card-color); }

        /* ─── Section Badges ─── */
        .section-badge-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 40px;
        }
        .section-badge {
          display: inline-flex;
          padding: 10px 20px;
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          border: 1px solid #8D8D8D;
          background: rgba(62, 62, 62, 0.30);
          color: var(--text-color);
          font-size: 18px;
          font-weight: 500;
          line-height: normal;
        }
        .section-badge--sparkle {
          padding: 10px;
          color: var(--text-color);
        }

        /* ─── About ─── */
        .about-section {
          padding: 60px 0;
        }
        .about-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 40px 58px;
          border-radius: 20px;
          background: var(--card-color, #3E3E3E);
        }
        .about-text {
          color: var(--text-color);
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          line-height: normal;
          letter-spacing: 0.52px;
          margin: 0;
        }
        .company-logos {
          display: flex;
          align-items: center;
          gap: 50px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .logo-text-zoho {
          font-family: Poppins, sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: #089949;
        }
        .logo-img-tcs {
          width: 130px;
          height: 52px;
          object-fit: contain;
        }
        .logo-img-wipro {
          width: 100px;
          height: 65px;
          object-fit: contain;
        }

        /* ─── Journey / Timeline ─── */
        .journey-section {
          padding: 80px 0;
        }
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--card-color, #3E3E3E);
          transform: translateX(-50%);
          border-radius: 999px;
        }
        .timeline-row {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
          position: relative;
        }
        .timeline-row--left {
          flex-direction: row;
        }
        .timeline-row--right {
          flex-direction: row-reverse;
        }
        .timeline-role-side {
          flex: 1;
          display: flex;
        }
        .timeline-row--left .timeline-role-side {
          justify-content: flex-end;
          padding-right: 60px;
        }
        .timeline-row--right .timeline-role-side {
          justify-content: flex-start;
          padding-left: 60px;
        }
        .timeline-date-side {
          flex: 1;
          display: flex;
        }
        .timeline-row--left .timeline-date-side {
          justify-content: flex-start;
          padding-left: 60px;
        }
        .timeline-row--right .timeline-date-side {
          justify-content: flex-end;
          padding-right: 60px;
        }
        .timeline-role-pill {
          position: relative;
          display: inline-flex;
          padding: 10px 20px;
          justify-content: center;
          align-items: center;
          border-radius: 20px;
          background: rgba(62, 62, 62, 0.30);
          color: var(--text-color);
          font-size: 18px;
          font-weight: 600;
          max-width: 380px;
          text-align: center;
        }
        .timeline-role-pill--highlight {
          background: #F05A28;
          color: #FFF;
        }
        .timeline-role-pill--blur {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: #F05A28;
          filter: blur(12.5px);
          z-index: -1;
        }
        .timeline-dot-wrapper {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        .timeline-dot-outer {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 241, 235, 0.20);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .timeline-dot-mid {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 208, 188, 0.50);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .timeline-dot-inner {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #F05A28;
        }
        .timeline-date {
          color: var(--text-color);
          font-size: 18px;
          font-weight: 400;
        }

        /* ─── Research ─── */
        .research-section {
          padding: 80px 0;
        }
        .research-columns {
          display: flex;
          gap: 60px;
          margin-bottom: 60px;
        }
        .research-col {
          flex: 1;
        }
        .research-col-header {
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-color);
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-color, #8D8D8D);
          margin-bottom: 24px;
        }
        .research-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .research-card {
          padding: 32px;
          border-radius: 20px;
          background: var(--card-color, rgba(62,62,62,0.3));
        }
        .research-card-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-color);
          margin: 0 0 10px;
        }
        .research-card-desc {
          font-size: 16px;
          font-weight: 400;
          color: var(--text-muted-color, rgba(255,255,255,0.7));
          margin: 0;
          line-height: 1.5;
        }
        .publications-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }
        .publication-card {
          border-radius: 20px;
          background: var(--card-color, rgba(62,62,62,0.3));
          height: 400px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .publication-card-body {
          flex: 1;
          border-radius: 20px;
          background: var(--secondary-card-color, #2B2B2B);
          margin: 20px 20px 0;
        }
        .publication-card-footer {
          padding: 16px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .publication-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-color);
          margin: 0;
          line-height: 1.4;
        }
        .publication-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          width: fit-content;
        }
        .publication-badge--accepted {
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
          border: 1px solid #22c55e;
        }
        .publication-badge--review {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
          border: 1px solid #3b82f6;
        }
        .section-cta-wrapper {
          display: flex;
          justify-content: center;
        }

        /* ─── Experience ─── */
        .experience-section {
          padding: 80px 0;
        }
        .experience-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .experience-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 10px 20px 20px;
          border-radius: 20px;
          background: rgba(62, 62, 62, 0.30);
        }
        .experience-card-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .experience-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-color);
          margin: 0;
        }
        .experience-org {
          font-size: 16px;
          font-weight: 400;
          color: var(--text-color);
          margin: 0;
        }
        .experience-date {
          font-size: 14px;
          font-weight: 400;
          color: var(--text-muted-color, rgba(255,255,255,0.7));
          margin: 0;
        }
        .experience-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .experience-tag {
          display: inline-flex;
          padding: 5px 10px;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          border: 1px solid #F97316;
          background: rgba(124, 45, 18, 0.22);
          color: var(--text-color);
          font-size: 12px;
          font-weight: 500;
        }

        /* ─── Engagement ─── */
        .engagement-section {
          padding: 80px 0;
        }
        .engagement-cards {
          display: flex;
          align-items: flex-start;
          gap: 30px;
          margin-bottom: 40px;
        }
        .engagement-card {
          flex: 1;
          border-radius: 20px;
          background: rgba(62, 62, 62, 0.30);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .engagement-card--short { height: 401px; }
        .engagement-card--tall  { height: 501px; }
        .engagement-card-image {
          flex: 1;
          margin: 20px 20px 0;
          border-radius: 20px;
          background: var(--secondary-card-color, #2B2B2B);
        }
        .engagement-card-text {
          padding: 16px 20px 20px;
        }
        .engagement-card-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-color);
          margin: 0 0 8px;
        }
        .engagement-card-desc {
          font-size: 16px;
          font-weight: 400;
          color: var(--text-color);
          margin: 0;
          line-height: 1.5;
        }

        /* ─── Testimonials ─── */
        .testimonials-section {
          padding: 80px 0;
        }
        .testimonial-main {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin: 0 auto;
          margin-top: 50px;
          max-width: 900px;
        }
        .testimonial-card {
          position: relative;
          width: 340px;
          height: 380px;
          flex-shrink: 0;
          border-radius: 20px;
          background: var(--card-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          z-index: 1;
        }
        .testimonial-portrait {
          width: 100%;
          height: 250px;
          border-radius: 12px;
          object-fit: cover;
          margin-bottom: 20px;
        }
        .testimonial-name-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .testimonial-name {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-color);
        }
        .testimonial-role {
          font-size: 15px;
          font-weight: 400;
          color: var(--text-color);
          opacity: 0.8;
          margin-top: 4px;
        }
        .testimonial-quote-card {
          position: relative;
          width: 480px;
          flex-shrink: 0;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          background: var(--card-color);
          padding: 40px;
          margin-left: -50px;
          margin-top: -60px;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }
        .testimonial-quote-inner {
          position: absolute;
          inset: 15px;
          border-radius: 12px;
          background: var(--bg-color);
          opacity: 0.5;
        }
        .testimonial-quote {
          position: relative;
          z-index: 1;
          font-size: 17px;
          font-weight: 500;
          color: var(--text-color);
          line-height: 1.6;
          margin: 0;
        }

        /* ─── Newsletter ─── */
        .newsletter-section {
          padding: 80px 0 100px;
          display: flex;
          justify-content: center;
        }
        .newsletter-card {
          width: 851px;
          border-radius: 20px;
          background: var(--card-color, #3E3E3E);
          padding: 50px 141px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .newsletter-title {
          color: var(--text-color);
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 0.52px;
          margin: 0 0 10px;
        }
        .newsletter-subtitle {
          color: var(--text-color);
          text-align: center;
          font-size: 16px;
          font-weight: 400;
          margin: 0 0 30px;
        }
        .newsletter-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .newsletter-input-wrapper {
          width: 100%;
        }
        .newsletter-input {
          width: 100%;
          height: 44px;
          border-radius: 20px;
          background: var(--secondary-card-color, #2B2B2B);
          border: none;
          padding: 0 20px;
          color: var(--text-color);
          font-family: Poppins, sans-serif;
          font-size: 16px;
          box-sizing: border-box;
          outline: none;
        }
        .newsletter-input::placeholder {
          color: rgba(255,255,255,0.54);
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .home-wrapper { padding: 0 40px; }
          .hero-section { flex-direction: column; min-height: auto; }
          .hero-right { width: 100%; }
          .hero-image-grid { width: 100%; }
          .hero-placeholder-box,
          .hero-portrait { width: calc(50% - 10px); }
          .hero-wide-box { width: calc(60% - 10px); }
          .hero-social-links { width: calc(40% - 10px); }
          .hero-title { font-size: 40px; }
          .research-columns { flex-direction: column; }
          .publications-grid { grid-template-columns: 1fr; }
          .engagement-cards { flex-direction: column; }
          .engagement-card--short,
          .engagement-card--tall { height: auto; min-height: 300px; }
          .engagement-card-image { min-height: 200px; }
          .testimonial-main { flex-direction: column; }
          .testimonial-card { width: 100%; }
          .testimonial-quote-card { width: 100%; }
          .newsletter-card { width: 100%; padding: 40px 30px; }
        }

        @media (max-width: 768px) {
          .home-wrapper { padding: 0 20px; }
          .hero-title { font-size: 32px; }
          .hero-ctas { flex-direction: column; gap: 16px; width: 100%; }
          .btn-primary, .btn-outline { width: 100%; }
          .about-text { font-size: 20px; }
          .experience-grid { grid-template-columns: 1fr; }
          .hero-image-grid { gap: 12px; }
          .company-logos { gap: 24px; }
          .research-columns { gap: 40px; }
          .timeline-container { max-width: 100%; }
          .timeline-role-pill { font-size: 14px; max-width: 260px; }
          .timeline-date { font-size: 14px; }
          .hero-ctas { align-items: stretch; }
        }
      `}</style>
    </div>
  );
};
