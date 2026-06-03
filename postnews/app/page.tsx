"use client";

import { useEffect } from "react";
import "./portfolio.css";

export default function Home() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-body">
      <div className="gradient-bg"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="noise-overlay"></div>

      <div className="portfolio-content">
        <nav id="navbar">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              postnews
            </a>
            <div className="nav-links">
              <a
                href="https://post-news-app.vercel.app/api/v1/status"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link hidden-mobile"
              >
                Status API
              </a>
              <a
                href="https://github.com/Dellano23/postnews/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link hidden-mobile"
              >
                Issues
              </a>
              <a
                href="https://dellano-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link hidden-mobile"
              >
                Portfolio
              </a>
            </div>
          </div>
        </nav>

        <section className="hero-section">
          <div className="hero-inner">
            <div
              className="badge slide-up"
              style={{ animationDelay: "120ms", marginBottom: "1.5rem" }}
            >
              <span className="badge-dot"></span>
              Em construção
            </div>

            <h1
              className="slide-up"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(3rem, 7vw, 5rem)",
                letterSpacing: "-0.05em",
                lineHeight: 1.02,
                marginBottom: "1.25rem",
                animationDelay: "260ms",
              }}
            >
              PostNews
            </h1>

            <p
              className="slide-up"
              style={{
                animationDelay: "420ms",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: "42rem",
                margin: "0 auto 1.5rem",
                color: "#d1d5db",
              }}
            ></p>

            <div
              className="slide-up"
              style={{
                animationDelay: "540ms",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.9rem",
                justifyContent: "center",
              }}
            >
              <a
                href="https://post-news-app.vercel.app/api/v1/status"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient"
                style={{
                  padding: "0.85rem 1.9rem",
                  borderRadius: "9999px",
                  fontSize: "0.95rem",
                }}
              >
                Ver status do banco
              </a>
              <a
                href="https://github.com/Dellano23/postnews/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  padding: "0.85rem 1.9rem",
                  borderRadius: "9999px",
                  fontSize: "0.95rem",
                }}
              >
                Ver issues
              </a>
            </div>

            <div
              className="status-grid slide-up"
              style={{ animationDelay: "680ms" }}
            >
              <div className="card-glow card-block">
                <h2
                  className="section-title"
                  style={{ marginBottom: "0.85rem" }}
                >
                  O que é o PostNews?
                </h2>
                <p style={{ lineHeight: 1.75, color: "#d1d5db" }}>
                  Projeto em construção para um sistema de artigos e newsletter
                  com foco principalmente na área tech, notícias relacionadas, e
                  assuntos da comunidade.
                </p>
              </div>

              <div className="card-glow card-block">
                <h2
                  className="section-title"
                  style={{ marginBottom: "0.85rem" }}
                >
                  Como acompanhar
                </h2>
                <p style={{ lineHeight: 1.75, color: "#d1d5db" }}>
                  Você pode acessar o endpoint de database status, para
                  acompanhar informações do banco postgresSQL
                </p>
                <a
                  href="https://post-news-app.vercel.app/api/v1/status"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="page-link"
                >
                  post-news-app.vercel.app/api/v1/status
                </a>
              </div>

              <div className="card-glow card-block">
                <h2
                  className="section-title"
                  style={{ marginBottom: "0.85rem" }}
                >
                  Evolução pública
                </h2>
                <p style={{ lineHeight: 1.75, color: "#d1d5db" }}>
                  Em todo desenvolvimento do projeto, documentei as mudanças
                  principais em issues e milestones, você pode conferir meu
                  processo e toda minha evolução através delas.
                  <br></br>
                  <br></br>
                  Nas Milestones você encontra as Issues e sub-issues, com uma
                  descrição de todo meu processo.
                </p>
                <a
                  href="https://github.com/Dellano23/postnews/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="page-link"
                >
                  github.com/Dellano23/postnews/issues
                </a>
              </div>
            </div>

            <p
              className="slide-up"
              style={{
                animationDelay: "780ms",
                fontSize: "0.95rem",
                marginTop: "2rem",
                color: "var(--text-muted)",
              }}
            >
              Enquanto isso, visite meu portfolio para ver outros projetos que
              desenvolvi até aqui
              <br />
              <a
                href="https://dellano-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="page-link"
              >
                dellano-portfolio.vercel.app
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
