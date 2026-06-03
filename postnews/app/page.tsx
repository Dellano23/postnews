"use client";

import { useEffect } from "react";
import "./portfolio.css";

export default function Home() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
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
        {/* ─── NAV ─── */}
        <nav id="navbar">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              MD
            </a>
            <div className="nav-links">
              <a href="#sobre" className="nav-link hidden-mobile">
                Sobre
              </a>
              <a href="#servicos" className="nav-link hidden-mobile">
                Serviços
              </a>
              <a href="#projetos" className="nav-link hidden-mobile">
                Projetos
              </a>
              <a href="#stack" className="nav-link hidden-mobile">
                Stack
              </a>
              <a href="#contato" className="nav-link hidden-mobile">
                Contato
              </a>
              <a href="/cv.pdf" className="download-btn" download>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  style={{ width: "13px", height: "13px", strokeWidth: 2 }}
                >
                  <path
                    d="M12 4v12m0 0l-4-4m4 4l4-4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Baixar CV
              </a>
            </div>
          </div>
        </nav>

        {/* ─── HERO ─── */}
        <section className="hero-section">
          <div className="hero-inner">
            <div
              className="slide-up"
              style={{ animationDelay: "100ms", marginBottom: "1.5rem" }}
            ></div>

            <h1
              className="slide-up"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: "1.25rem",
                animationDelay: "250ms",
              }}
            >
              <span className="glow-text">
                Maurizio
                <br />
                Dellano
              </span>
            </h1>

            <div
              className="slide-up"
              style={{ animationDelay: "420ms", marginBottom: "1.75rem" }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  color: "var(--accent)",
                }}
              >
                Desenvolvedor Full Stack
              </span>
            </div>

            <p
              className="slide-up"
              style={{
                animationDelay: "580ms",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "38rem",
                margin: "0 auto 0.75rem",
                color: "#d1d5db",
              }}
            >
              Construo APIs REST escaláveis e aplicações web com Node.js, Java e
              .NET. Experiência no setor financeiro com diagnóstico de sistemas
              de alta performance.
            </p>

            <p
              className="slide-up"
              style={{
                animationDelay: "680ms",
                fontSize: "0.875rem",
                maxWidth: "30rem",
                margin: "0 auto 2.5rem",
                color: "var(--text-muted)",
              }}
            >
              Disponível para colaborações, projetos e oportunidades em
              desenvolvimento full stack.
            </p>

            <div
              className="slide-up"
              style={{
                animationDelay: "820ms",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                justifyContent: "center",
              }}
            >
              <a
                href="#projetos"
                className="btn-gradient"
                style={{
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                }}
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="btn-ghost"
                style={{
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                }}
              >
                Falar comigo
              </a>
              <a
                href="https://github.com/Dellano23"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  gap: "8px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/maurizio-dellano/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  padding: "0.75rem 1.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  gap: "8px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ─── SOBRE ─── */}
        <section id="sobre" style={{ padding: "8rem 1.5rem" }}>
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              Sobre <span className="accent">mim</span>
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                color: "#d1d5db",
                lineHeight: 1.75,
              }}
            >
              <p style={{ fontSize: "1.05rem" }}>
                Sou desenvolvedor{" "}
                <span style={{ color: "var(--accent)" }}>Full Stack</span> com
                base em JavaScript, Java e .NET, focado na construção de APIs
                REST escaláveis e aplicações web.
              </p>
              <p style={{ fontSize: "1.05rem" }}>
                Experiência prática no setor financeiro pela Nelogica, atuando
                com análise de logs, diagnóstico de bugs e suporte técnico
                institucional para uma plataforma de trading. Familiaridade com
                práticas DevOps (Docker, CI/CD) e bancos de dados relacionais e
                não-relacionais (MongoDB, PostgreSQL, MySql).
              </p>
              <p style={{ fontSize: "1.05rem", color: "#9ca3af" }}>
                Cursei{" "}
                <span style={{ color: "var(--accent)" }}>
                  Análise e Desenvolvimento de Sistemas
                </span>{" "}
                na FIAP (2024–2025), com ênfase em engenharia de software,
                microsserviços, DDD e DevOps. No curso tive cadeiras de
                desenvolvimento Android nativo com Kotlin e Jetpack Compose.
              </p>
            </div>
          </div>
        </section>

        {/* ─── SERVIÇOS ─── */}
        <section
          id="servicos"
          className="section-alt"
          style={{ padding: "6rem 1.5rem" }}
        >
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                textAlign: "center",
                marginBottom: "0.75rem",
              }}
            >
              O que <span className="accent">eu faço</span>
            </h2>
            <p
              style={{
                textAlign: "center",
                marginBottom: "3.5rem",
                maxWidth: "32rem",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              Do banco de dados à interface, passando por infra.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              <div
                className="card-soft"
                style={{ borderRadius: "0.75rem", padding: "1.5rem" }}
              >
                <div className="icon-box" style={{ marginBottom: "1rem" }}>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Back-end & APIs
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--text-dim)",
                  }}
                >
                  APIs RESTful com Node.js, Java Spring Boot e C# ASP.NET Core.
                  Arquitetura em camadas, JWT, documentação Swagger e análise de
                  integrações externas.
                </p>
              </div>

              <div
                className="card-soft"
                style={{ borderRadius: "0.75rem", padding: "1.5rem" }}
              >
                <div className="icon-box" style={{ marginBottom: "1rem" }}>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Front-end & Web
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--text-dim)",
                  }}
                >
                  Interfaces modernas com React e Next.js 16 (App Router),
                  TypeScript e Tailwind. SPAs performáticas com integração
                  completa ao back-end.
                </p>
              </div>

              <div
                className="card-soft"
                style={{ borderRadius: "0.75rem", padding: "1.5rem" }}
              >
                <div className="icon-box" style={{ marginBottom: "1rem" }}>
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 17.25v.75a.75.75 0 01-.75.75H2.25a.75.75 0 01-.75-.75v-.75m19.5 0a.75.75 0 00.75-.75V9A.75.75 0 0021 8.25H3a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h18.75zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM9.75 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM7.5 12.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  DevOps & Infra
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--text-dim)",
                  }}
                >
                  Containerização com Docker, pipelines CI/CD via GitHub
                  Actions, deploy na Vercel e Azure. Ambientes reproduzíveis e
                  entregas automatizadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROJETOS ─── */}
        <section id="projetos" style={{ padding: "8rem 1.5rem" }}>
          <div style={{ maxWidth: "76rem", margin: "0 auto" }}>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                textAlign: "center",
                marginBottom: "0.75rem",
              }}
            >
              <span className="accent">Projetos</span>
            </h2>
            <p
              style={{
                textAlign: "center",
                marginBottom: "3.5rem",
                maxWidth: "32rem",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              APIs, sistemas web e apps mobile.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {/* Projeto 1 */}
              <article
                className="card-glow"
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    margin: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.3,
                    }}
                  >
                    API de Gestão Energética (Java)
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--text-dim)",
                    marginBottom: "1.25rem",
                  }}
                >
                  API RESTful para monitoramento e controle de consumo elétrico
                  de dispositivos, com arquitetura em camadas e versionamento de
                  banco de dados.
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      Padrão Controller/Service/Repository com separação de
                      responsabilidades
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      Spring Data JPA + Hibernate e Flyway para versionamento
                      Oracle
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      Conteinerização com Docker para deploy consistente entre
                      ambientes
                    </span>
                  </li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span className="tag">Java 17</span>
                  <span className="tag">Spring Boot 3.4</span>
                  <span className="tag">Oracle</span>
                  <span className="tag">Hibernate</span>
                  <span className="tag">Flyway</span>
                  <span className="tag">Docker</span>
                </div>
                <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                  <a
                    href="https://github.com/Dellano23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                  >
                    Ver no GitHub
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>

              {/* Projeto 2 */}
              <article
                className="card-glow"
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.3,
                    }}
                  >
                    Portfolio + sistema de artigos
                  </h3>
                  <span
                    className="tag-accent"
                    style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                  >
                    <svg
                      width="11"
                      height="11"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Em construção
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--text-dim)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Desenvolvimento de uma plataforma pessoal fullstack com
                  frontend em Next.js 16 e React 19, integrando um backend em
                  Node.js conectado a PostgreSQL. Frontend: UI responsiva com
                  navegação por seções, animações sutis. Arquitetura: Backend em
                  Node.js consumindo dados do PostgreSQL, com camada de banco
                  estruturada e migrações gerenciadas pela ferramenta
                  node-pg-migrate para criar, alterar e controlar o histórico da
                  estrutura (esquema) do banco de dados. Segurança de dados:
                  Foco em uso de consultas parametrizadas e boas práticas para
                  reduzir riscos de SQL Injection. Testes: Cobertura com Jest
                  para endpoints e validações de integração. Desenvolvimento foi
                  feito baseado em testes. Infraestrutura & DevOps: ambiente
                  local orquestrado com Docker Compose, banco PostgreSQL em
                  container e deploy contínuo planejado para Vercel. Stack:
                  Next.js, React, TypeScript, Node.js, PostgreSQL, Docker, Jest,
                  Vercel.
                  <br />
                  <br />
                  Todo meu processo está documentado também nas{" "}
                  <a
                    href="https://github.com/Dellano23/portfolio/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--accent)",
                      textDecoration: "underline",
                      fontWeight: 500,
                    }}
                  >
                    issues do GitHub deste projeto
                  </a>
                  .
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      API pages Node.js com arquitetura RESTful versionada
                      (/api/v1)
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      PostgreSQL com queries parametrizadas para prevenção de
                      SQL Injection
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      Testes com Jest e CI/CD na Vercel com deploys automáticos
                      a cada commit
                    </span>
                  </li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span className="tag">Next.js 16</span>
                  <span className="tag">React 19</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Jest</span>
                  <span className="tag">Docker</span>
                </div>
                <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                  <a
                    href="https://github.com/Dellano23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                  >
                    Ver no GitHub
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>

              {/* Projeto 3 */}
              <article
                className="card-glow"
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.3,
                    }}
                  >
                    EnergyApi
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--text-dim)",
                    marginBottom: "1.25rem",
                  }}
                >
                  API RESTful stateless em C# para cálculo de consumo elétrico e
                  previsão de custos de eletrodomésticos, com autenticação JWT e
                  documentação interativa.
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      Padrão MVVM com injeção de dependência nativa e AutoMapper
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      JWT com Role-Based Access Control (RBAC) para proteção de
                      rotas
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      Documentação interativa via Swagger com payloads e rotas
                      detalhadas
                    </span>
                  </li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span className="tag">C#</span>
                  <span className="tag">ASP.NET Core</span>
                  <span className="tag">Entity Framework</span>
                  <span className="tag">SQLite</span>
                  <span className="tag">JWT</span>
                  <span className="tag">Swagger</span>
                </div>
                <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                  <a
                    href="https://github.com/Dellano23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                  >
                    Ver no GitHub
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>

              {/* Projeto 4 */}
              <article
                className="card-glow"
                style={{
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.3,
                    }}
                  >
                    Calcusolina
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "var(--text-dim)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Aplicativo Android nativo para motoristas de app, focado em
                  cálculo de rentabilidade real por quilômetro rodado, com
                  interface fluida e reativa.
                </p>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      Interface nativa Android com Jetpack Compose declarativo
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      Cálculo de custo por km, rendimento e lucro líquido por
                      corrida
                    </span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "0.875rem",
                      color: "var(--text-dim)",
                    }}
                  >
                    <span className="project-bullet">›</span>
                    <span>
                      UX pensada para uso rápido no dia a dia do motorista
                    </span>
                  </li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "1.25rem",
                  }}
                >
                  <span className="tag">Kotlin</span>
                  <span className="tag">Jetpack Compose</span>
                  <span className="tag">Android</span>
                </div>
                <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
                  <a
                    href="https://github.com/Dellano23/Calcusolina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-arrow"
                  >
                    Ver no GitHub
                    <svg
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <a
                href="https://github.com/Dellano23"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.875rem",
                  color: "var(--accent)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                Ver mais no GitHub
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ─── STACK ─── */}
        <section
          id="stack"
          className="section-alt"
          style={{ padding: "8rem 1.5rem" }}
        >
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                textAlign: "center",
                marginBottom: "0.75rem",
              }}
            >
              Stack <span className="accent">tecnológica</span>
            </h2>
            <p
              style={{
                textAlign: "center",
                marginBottom: "4rem",
                maxWidth: "32rem",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              Tecnologias com as quais trabalho no dia a dia.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    justifyContent: "flex-start",
                  }}
                >
                  <span className="stack-label">Back-end</span>
                  <span className="stack-divider"></span>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  <span className="stack-tag">Node.js</span>
                  <span className="stack-tag">TypeScript</span>
                  <span className="stack-tag">JavaScript</span>
                  <span className="stack-tag">Java</span>
                  <span className="stack-tag">Spring Boot</span>
                  <span className="stack-tag">C#</span>
                  <span className="stack-tag">ASP.NET Core</span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span className="stack-label">Front-end</span>
                  <span className="stack-divider"></span>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  <span className="stack-tag">React</span>
                  <span className="stack-tag">Next.js</span>
                  <span className="stack-tag">TypeScript</span>
                  <span className="stack-tag">Tailwind CSS</span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span className="stack-label">Bancos de Dados</span>
                  <span className="stack-divider"></span>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  <span className="stack-tag">PostgreSQL</span>
                  <span className="stack-tag">MongoDB</span>
                  <span className="stack-tag">MySQL</span>
                  <span className="stack-tag">Oracle</span>
                  <span className="stack-tag">SQLite</span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span className="stack-label">DevOps & Infra</span>
                  <span className="stack-divider"></span>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  <span className="stack-tag">Docker</span>
                  <span className="stack-tag">GitHub Actions</span>
                  <span className="stack-tag">CI/CD</span>
                  <span className="stack-tag">Azure</span>
                  <span className="stack-tag">Vercel</span>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span className="stack-label">Mobile</span>
                  <span className="stack-divider"></span>
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  <span className="stack-tag">Kotlin</span>
                  <span className="stack-tag">Jetpack Compose</span>
                  <span className="stack-tag">Android</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTATO ─── */}
        <section id="contato" style={{ padding: "8rem 1.5rem" }}>
          <div
            style={{ maxWidth: "52rem", margin: "0 auto", textAlign: "center" }}
          >
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                marginBottom: "0.75rem",
              }}
            >
              Vamos <span className="accent">conversar</span>
            </h2>
            <p
              style={{
                marginBottom: "4rem",
                maxWidth: "30rem",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              Aberto a oportunidades, colaborações e novos projetos em
              desenvolvimento full stack.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}
            >
              <a
                href="mailto:dellano.liagi2004@gmail.com"
                className="card-glow"
                style={{
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                }}
              >
                <div className="icon-box">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div style={{ textAlign: "left", minWidth: 0 }}>
                  <span className="contact-label">Email</span>
                  <p className="contact-value">dellano.liagi2004@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/maurizio-dellano/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow"
                style={{
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                }}
              >
                <div className="icon-box">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div style={{ textAlign: "left", minWidth: 0 }}>
                  <span className="contact-label">LinkedIn</span>
                  <p className="contact-value">Maurizio Dellano</p>
                </div>
              </a>

              <a
                href="https://github.com/Dellano23"
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow"
                style={{
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                }}
              >
                <div className="icon-box">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div style={{ textAlign: "left", minWidth: 0 }}>
                  <span className="contact-label">GitHub</span>
                  <p className="contact-value">@Dellano23</p>
                </div>
              </a>

              <a
                href="tel:+5551996573579"
                className="card-glow"
                style={{
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textDecoration: "none",
                }}
              >
                <div className="icon-box">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div style={{ textAlign: "left", minWidth: 0 }}>
                  <span className="contact-label">Telefone</span>
                  <p className="contact-value">(51) 99657-3579</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer style={{ padding: "2rem 1.5rem" }}>
          <div
            style={{
              maxWidth: "76rem",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              © 2026 Maurizio Dellano Liagi
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
              }}
            >
              Node.js · Java · TypeScript · Full Stack
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
