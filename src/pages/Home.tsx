import React, { useState } from "react";
import "../styles/home.css";
import {
  LinkedInIcon,
  XIcon,
  GitHubIcon,
  ScholarIcon,
  FacebookIcon,
  InstagramIcon,
  SparkleIcon,
  GoogleLogo,
  MicrosoftLogo,
  InfosysLogo,
  NvidiaLogo,
} from "../components/icons";

import { timelineItems } from "../data/timeline";
import { researchInterests, researchMethods } from "../data/research";
import { publications } from "../data/publications";
import { experiences } from "../data/experience";
import { testimonials } from "../data/testimonials";

import portraitImg from "../assets/portrait.jpg";

export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(2);

  return (
    <div className="home-wrapper">
      {/* ── Hero Section ── */}
      <section id="home" className="hero-section">
        <div className="hero-left">
          <div className="hero-text-group">
            <h1 className="hero-title">Researching Policy for Real Impact</h1>
            <p className="hero-subtitle">
              Evaluating women-centered public policies using evidence-based and
              mixed-methods research.
            </p>
          </div>
          <div className="hero-ctas">
            <button className="btn-primary">View Resume</button>
            <a href="#research" className="btn-outline">
              Research
            </a>
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
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="X / Twitter">
                <XIcon />
              </a>
              <a href="#" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="#" aria-label="Google Scholar">
                <ScholarIcon />
              </a>
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="about-section">
        <div className="about-card">
          <p className="about-text">
            I am a public policy researcher working on women's entrepreneurship
            and skilling policies in India. My research examines how program
            design, institutional arrangements, and social exclusion influence
            policy effectiveness, using evidence-based and mixed-methods
            approaches.
          </p>
          <div className="company-logos">
            {/* Google */}
            <GoogleLogo />

            {/* Microsoft */}
            <MicrosoftLogo />

            {/* Infosys */}
            <InfosysLogo />

            {/* Zoho - simplified */}
            <span className="logo-text-zoho">ZOHO</span>

            {/* TCS */}
            <div className="logo-tcs-text">
              TCS
            </div>

            {/* Wipro */}
            <div className="logo-wipro-text">
              Wipro
            </div>

            {/* Nvidia */}
            <NvidiaLogo />
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
            <div
              key={i}
              className={`timeline-row ${item.side === "left" ? "timeline-row--left" : "timeline-row--right"}`}
            >
              <div className="timeline-role-side">
                <div
                  className={`timeline-role-pill ${item.highlight ? "timeline-role-pill--highlight" : ""}`}
                >
                  {item.highlight && (
                    <div
                      className="timeline-role-pill--blur"
                      aria-hidden="true"
                    ></div>
                  )}
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
                <span
                  className={`publication-badge ${pub.status === "Accepted" ? "publication-badge--accepted" : "publication-badge--review"}`}
                >
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
                  <span key={tag} className="experience-tag">
                    {tag}
                  </span>
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
              <p className="engagement-card-desc">
                Ground-level engagement with communities, grassroots
                organizations, and social sector initiatives.
              </p>
            </div>
          </div>

          <div className="engagement-card engagement-card--tall">
            <div className="engagement-card-image"></div>
            <div className="engagement-card-text">
              <h3 className="engagement-card-title">Conferences</h3>
              <p className="engagement-card-desc">
                Participation in national and international conferences,
                doctoral colloquiums, and academic workshops.
              </p>
            </div>
          </div>

          <div className="engagement-card engagement-card--short">
            <div className="engagement-card-image"></div>
            <div className="engagement-card-text">
              <h3 className="engagement-card-title">Fellowships</h3>
              <p className="engagement-card-desc">
                Recipient of competitive fellowships and scholarships supporting
                doctoral research and academic work.
              </p>
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
              <span className="testimonial-name">
                {testimonials[activeTestimonial].name}
              </span>
              <span className="testimonial-role">
                {testimonials[activeTestimonial].role}
              </span>
            </div>
          </div>

          <div className="testimonial-quote-card">
            <div className="testimonial-quote-inner"></div>
            <p className="testimonial-quote">
              {testimonials[activeTestimonial].quote}
            </p>
          </div>
        </div>

        <div className="testimonial-thumbnails-container">
          <button
            onClick={() =>
              setActiveTestimonial((prev) => Math.max(0, prev - 1))
            }
            className="thumbnail-arrow"
          >
            &lt;
          </button>
            {testimonials.map((t, i) => (
              <img
                key={i}
                src={t.image}
                alt={t.name}
                onClick={() => setActiveTestimonial(i)}
                className={`thumbnail-img ${activeTestimonial === i ? "thumbnail-img--active" : ""}`}
              />
            ))}
          <button
            onClick={() =>
              setActiveTestimonial((prev) =>
                Math.min(testimonials.length - 1, prev + 1),
              )
            }
            className="thumbnail-arrow"
          >
            &gt;
          </button>
        </div>
      </section>

      {/* ── Newsletter / Contact ── */}
      <section id="contact" className="newsletter-section">
        <div className="newsletter-card">
          <h2 className="newsletter-title">Subscribe to the Newsletter</h2>
          <p className="newsletter-subtitle">
            Insights from research, field engagement, and academic
            contributions.
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="newsletter-input-wrapper">
              <input
                type="email"
                placeholder="Email address"
                className="newsletter-input"
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
