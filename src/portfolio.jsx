import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Zap,
  Server,
} from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const words = ["WordPress.", "CMS.", "React.", "Full-Stack."];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".fade-in-section")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1),
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIndex]);

  const projects = [
    {
      title: "Ubigi",
      description:
        "Ubigi est un service mondial de données mobiles offrant une connectivité cellulaire de la plus haute qualité. Ubigi offre un accès immédiat à Internet grâce à des forfaits de données flexibles et économiques pour les appareils mobiles (smartphones, tablettes, ordinateurs portables) et les voitures connectées dans le monde entier.",
      fullDescription:
        "<p class='mb-2'>En tant que <strong>développeur principal Full-Stack</strong> au sein d’Ubigi, marque blanche du groupe Transatel, je participe activement à l’évolution de la plateforme e-commerce dédiée à la vente d’eSIM. Mon rôle s’articule autour du développement technique, de l’optimisation de l’expérience utilisateur et, depuis 2025, de la sécurisation des infrastructures web.</p><p class='mb-2'>J’ai piloté l’<strong>intégration du module e-commerce</strong>, permettant la vente en ligne d’eSIM avec envoi automatique des QR codes par email après validation de commande. Parallèlement, j’ai contribué à l’enrichissement du site en développant de nouvelles pages et fonctionnalités, aujourd’hui déployées en production.</p><p class='mb-2'>Conscient de l’importance du marketing digital, j’ai mis en place un <strong>entonnoir de suivi analytique via Google Analytics</strong> pour mieux comprendre les comportements des utilisateurs et optimiser leur parcours. Pour faciliter le travail des équipes, j’ai également conçu des outils internes en ReactJS, comme un générateur de visuels Google Shopping (à partir de fichiers CSV) et un système de création multilingue de newsletters, réduisant ainsi les délais de production.</p><p class='mb-2'>Depuis 2025, j’occupe également le poste de <strong>référent sécurité web</strong>. Je suis chargé de définir et d’appliquer les règles de sécurité pour protéger les sites contre les attaques malveillantes, ainsi que de veiller à la conformité du code source aux meilleures pratiques en matière de cybersécurité.</p>",
      tech: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "JS",
        "MySQL",
        "Stripe",
        "React",
        "APIs",
      ],
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=987&auto=format&fit=crop",
      link: "https://cellulardata.ubigi.com/fr/",
      size: "large",
    },
    {
      title: "Transatel",
      description:
        "Transatel (filiale de NTT) est un fournisseur mondial de solutions de connectivité cellulaire et l'un des principaux facilitateurs de réseaux mobiles virtuels (MVNO), avec plus de 100 MVNO gérés sur notre propre réseau central complet.",
      fullDescription:
        "<p class='mb-2'>Depuis octobre 2022, je travaille chez Transatel en tant que développeur web full-stack. Je suis responsable des sites web de l'entreprise ainsi que du Centre de connaissances, une plateforme qui rassemble des ressources destinées à aider les utilisateurs à maîtriser nos services.</p><p class='mb-2'>Au cours des derniers mois, j'ai participé à divers projets chez Transatel, notamment la création de plusieurs pages visant à améliorer la visibilité et l'accessibilité du site. J'ai également apporté des améliorations significatives au parcours utilisateur sur le site du Centre de connaissances, en permettant aux utilisateurs de filtrer les articles par catégorie, ce qui leur permet de trouver plus facilement les informations recherchées.</p><p class='mb-2'>Un autre aspect important de mon travail a été l'intégration d'un entonnoir pour suivre et analyser les habitudes des utilisateurs à l'aide de Google Analytics. Cette approche nous a fourni des informations précieuses pour mieux comprendre nos utilisateurs et ainsi améliorer continuellement l'expérience utilisateur sur notre site.</p>",
      tech: ["WordPress", "PHP", "JS"],
      image:
        "https://www.transatel.com/wp-content/uploads/2024/09/Terre-Desktop-scaled-1.avif",
      link: "https://www.transatel.com/fr/",
      size: "medium",
    },
    {
      title: "ERCOM",
      description:
        "Ercom, une société du groupe Thales, est une entreprise de référence qui cumule 30 ans d'expertise dans deux domaines clés : la cybersécurité et les réseaux de communication.",
      fullDescription:
        "<p class='mb-2'>Au cours de ma formation de Mastère 1 Administrateur SI, j'ai eu l'opportunité de travailler chez ERCOM pendant 2 ans en tant que Développeur / Intégrateur. Mon projet principal était la refonte du site web de l'entreprise, une mission passionnante qui m'a permis d'acquérir des compétences inestimables. Dans un premier temps, j'ai travaillé sur la refonte du site à l'aide de WordPress, en optimisant son ergonomie et en apportant des améliorations significatives à l'expérience utilisateur. Cette première étape a été très enrichissante et m'a permis de renforcer mes compétences en développement web et en intégration.</p><p class='mb-2'>Suite à un changement de direction, j'ai relevé le défi de migrer le site vers Drupal, une plateforme de gestion de contenu mieux adaptée à la nouvelle orientation de l'entreprise. Cette migration a été une occasion unique de développer ma maîtrise de cette technologie et de relever les défis liés à cette transition.</p><p class='mb-2'>Au-delà de l'aspect technique, j'ai également eu l'occasion de travailler en étroite collaboration avec différentes équipes au sein de l'entreprise, ce qui m'a permis d'acquérir une vision globale du processus de développement et d'intégration d'un projet web. Mon expérience chez ERCOM en tant que développeur/intégrateur a été extrêmement formatrice, tant sur le plan technique qu'en termes de gestion de projet.</p>",
      tech: ["Drupal", "Twig", "JS", "PHP"],
      image:
        "https://cds.thalesgroup.com/sites/default/files/2025-02/cryptosmart-mobile-solution-souveraine-.png",
      link: "https://cds.thalesgroup.com/fr/ercom",
      size: "medium",
    },
    {
      title: "StockPro",
      description:
        "StockPro propose des solutions pour impliquer tous les acteurs dans une démarche véritablement éco-responsable, notamment une plateforme dédiée à la réutilisation de matériaux de construction neufs et peu coûteux, ainsi que de matériaux en fin de chantier.",
      fullDescription:
        "<p class='mb-2'>Pendant un an, j'ai eu l'opportunité de travailler chez StockPro, une start-up technologique dans le secteur de la construction, en tant qu'étudiant en alternance pendant ma formation BTS SIO. Au sein de l'équipe dédiée au développement de l'application iOS, j'ai pu jouer un rôle actif dans son développement.</p><p class='mb-2'>En tant que membre de l'équipe iOS, j'ai contribué à la réalisation de diverses fonctionnalités, ce qui m'a permis d'améliorer mes compétences en développement mobile. J'ai également assumé le rôle essentiel de testeur QA senior, où ma mission était de garantir la qualité de l'application avant sa mise en production, en détectant et en corrigeant les bugs éventuels.</p><p class='mb-2'>Ce rôle de testeur QA m'a permis de développer une approche rigoureuse et méthodique pour identifier les problèmes potentiels, tout en travaillant en étroite collaboration avec l'équipe de développement afin de garantir une expérience utilisateur fluide et sans faille.</p><p class='mb-2'>Mon expérience chez StockPro a été extrêmement enrichissante, car elle m'a permis de mettre en pratique les connaissances acquises pendant ma formation, tout en découvrant le fonctionnement réel d'une entreprise du secteur.</p>",
      tech: ["Swift"],
      image:
        "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=2070&auto=format&fit=crop",
      size: "medium",
    },
    {
      title: "MovieDB API",
      description:
        "MovieDB API est un projet personel réalisé en ReactJS connecté à l'API MovieDB.",
      fullDescription:
        "<p class='mb-2'><strong>MovieDB API</strong> est un projet personnel développé en <strong>ReactJS</strong>, conçu pour interagir avec l’<strong>API The Movie Database (TMDb)</strong>.</p><p class='mb-2'>Cette application permet aux utilisateurs d’explorer une vaste base de données de films, séries et acteurs, en offrant une interface moderne et réactive pour découvrir les dernières sorties, les tendances et les détails des œuvres.</p><p class='mb-2'>Grâce à l’intégration de l’API TMDb, le projet propose des fonctionnalités comme la recherche, l’affichage des informations détaillées, et la visualisation des notes et commentaires des utilisateurs.</p>",
      tech: ["ReactJS", "Tailwindcss", "Framer", "API"],
      image:
        "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=2072&auto=format&fit=crop",
      link: "https://github.com/bastien-cordier/moviedb-reactjs",
      size: "small",
    },
    {
      title: "PokeAPI",
      description:
        "PokeAPI est un projet scolaire personnel développé en ReactJS, utilisant l’API officielle PokeAPI.",
      fullDescription:
        "<p class='mb-2'><strong>PokeAPI</strong> est un projet scolaire personnel développé en <strong>ReactJS</strong>, visant à mettre en pratique le développement front-end et l’intégration d’API externes à travers une application interactive et dynamique.</p><p class='mb-2'>L’application utilise l’<strong>API officielle PokeAPI</strong> pour permettre aux utilisateurs d’explorer les Pokémon, consulter leurs statistiques, types, évolutions et capacités via une interface claire et réactive.</p><p class='mb-2'>Ce projet m’a permis de renforcer mes compétences en <strong>ReactJS</strong>, notamment avec les hooks (<code>useState</code>, <code>useEffect</code>), la gestion des requêtes API et la création d’une expérience utilisateur fluide et performante.</p>",
      tech: ["ReactJS", "Tailwindcss", "API"],
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2232&auto=format&fit=crop",
      link: "https://github.com/bastien-cordier/pokedex-api-reactjs",
      size: "small",
    },
  ];

  const techStack = {
    frontend: ["React", "Javascript", "Tailwindcss", "SCSS"],
    backend: ["Node.js", "Express", "Python", "REST API"],
    database: ["MySQL", "Firebase"],
    tools: ["Git", "WordPress", "Figma", "VS Code"],
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .cursor-blink::after {
          content: '|';
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        
        .fade-in-section {
          opacity: 0;
        }
        
        .glass {
          background: ${
            darkMode ? "rgba(17, 24, 39, 0.5)" : "rgba(255, 255, 255, 0.9)"
          };
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid ${
            darkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(99, 102, 241, 0.15)"
          };
          box-shadow: ${
            darkMode
              ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
              : "0 8px 32px 0 rgba(99, 102, 241, 0.1)"
          };
        }
        
        .glass-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glass-hover:hover {
          background: ${
            darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)"
          };
          transform: translateY(-8px);
          border: 1px solid ${
            darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(99, 102, 241, 0.3)"
          };
          box-shadow: ${
            darkMode
              ? "0 20px 60px 0 rgba(0, 0, 0, 0.5)"
              : "0 20px 60px 0 rgba(99, 102, 241, 0.2)"
          };
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tech-badge {
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          transform: scale(1.05);
          box-shadow: ${
            darkMode
              ? "0 4px 12px rgba(102, 126, 234, 0.3)"
              : "0 4px 12px rgba(99, 102, 241, 0.3)"
          };
        }

        .project-card {
          position: relative;
          overflow: hidden;
        }

        .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%);
          padding: 2rem 1.5rem 1.5rem;
          transform: translateY(0);
          transition: all 0.4s ease;
        }

        .project-card:hover .project-overlay {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.8) 60%, transparent 100%);
        }

        .project-image {
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .modal-backdrop {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .modal-glass {
          background: ${
            darkMode ? "rgba(17, 24, 39, 0.95)" : "rgba(255, 255, 255, 0.95)"
          };
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid ${
            darkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(99, 102, 241, 0.2)"
          };
          box-shadow: ${
            darkMode
              ? "0 20px 60px 0 rgba(0, 0, 0, 0.5)"
              : "0 20px 60px 0 rgba(0, 0, 0, 0.3)"
          };
        }

        .modal-content {
          animation: modalSlideIn 0.3s ease-out;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid-large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .grid-medium {
          grid-column: span 2;
        }

        .grid-small {
          grid-column: span 1;
        }

        @media (max-width: 768px) {
          .grid-large, .grid-medium, .grid-small {
            grid-column: span 1;
          }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1
            className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            <span className="gradient-text">BC.</span>
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl glass-hover ${darkMode ? "text-purple-400" : "text-indigo-600"}`}
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className={`absolute top-20 left-10 w-72 h-72 ${darkMode ? "bg-purple-500" : "bg-indigo-400"} rounded-full blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-96 h-96 ${darkMode ? "bg-blue-500" : "bg-purple-400"} rounded-full blur-3xl`}
          ></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1 fade-in-section">
              <p
                className={`text-5xl mb-5 ${darkMode ? "text-white" : "text-neutral-800"}`}
              >
                Hello <span className="shake">👋🏼</span>
              </p>
              <h2
                className={`text-2xl md:text-5xl mb-6 ${darkMode ? "text-white" : "text-neutral-800"}`}
              >
                Je suis{" "}
                <span className="font-bold gradient-text">Bastien CORDIER</span>
              </h2>
              <p className="text-2xl md:text-3xl gradient-text font-semibold mb-6 cursor-blink min-h-[3rem]">
                Un développeur {typedText}
              </p>
              <p
                className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"} max-w-xl`}
              >
                Passionné par la création d'applications web modernes et
                performantes. Je transforme les idées en expériences numériques
                exceptionnelles.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className={`glass-hover px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold`}
                >
                  Me contacter
                </a>
                <a
                  href="#projects"
                  className={`glass-hover px-4 py-3 rounded-xl glass ${darkMode ? "text-white" : "text-gray-900"} font-semibold`}
                >
                  Voir mes projets
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center order-1 md:order-2 fade-in-section">
              <div className="relative animate-float">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-20`}
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  }}
                ></div>
                <div
                  className="relative glass p-1"
                  style={{
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  }}
                >
                  <div
                    className="w-64 h-64 md:w-80 md:h-80 overflow-hidden"
                    style={{
                      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    }}
                  >
                    <img
                      src="/assets/profil.png"
                      alt="Photo de profil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3
            className={`text-4xl font-bold mb-4 text-left fade-in-section ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Stack Technique.
          </h3>
          <p
            className={`text-left mb-12 fade-in-section ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Technologies et outils que j'utilise au quotidien
          </p>

          <div className="fade-in-section glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Code
                    className={`w-6 h-6 ${darkMode ? "text-purple-400" : "text-indigo-600"}`}
                  />
                  <h4
                    className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Frontend
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.frontend.map((tech, i) => (
                    <span
                      key={i}
                      className={`tech-badge px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-indigo-50 text-indigo-700 border border-indigo-200"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Server
                    className={`w-6 h-6 ${darkMode ? "text-purple-400" : "text-indigo-600"}`}
                  />
                  <h4
                    className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Backend
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.backend.map((tech, i) => (
                    <span
                      key={i}
                      className={`tech-badge px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-indigo-50 text-indigo-700 border border-indigo-200"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Database
                    className={`w-6 h-6 ${darkMode ? "text-purple-400" : "text-indigo-600"}`}
                  />
                  <h4
                    className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Base de données
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.database.map((tech, i) => (
                    <span
                      key={i}
                      className={`tech-badge px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-indigo-50 text-indigo-700 border border-indigo-200"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Zap
                    className={`w-6 h-6 ${darkMode ? "text-purple-400" : "text-indigo-600"}`}
                  />
                  <h4
                    className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
                  >
                    Outils & DevOps
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {techStack.tools.map((tech, i) => (
                    <span
                      key={i}
                      className={`tech-badge px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-indigo-50 text-indigo-700 border border-indigo-200"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3
            className={`text-4xl font-bold mb-12 text-left fade-in-section ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Mes projets.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className={`fade-in-section project-card glass-hover glass rounded-2xl overflow-hidden cursor-pointer ${
                  project.size === "large"
                    ? "grid-large md:row-span-2"
                    : project.size === "medium"
                      ? "grid-medium"
                      : "grid-small"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                />
                <div className="project-overlay">
                  <h4 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-gray-200 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-white border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`modal-content glass rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 glass p-2 rounded-full transition-colors ${darkMode ? "hover:bg-white/20 text-white" : "hover:bg-black/10 text-gray-900"}`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <h3
                className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? "bg-purple-500/10 text-purple-300 border border-purple-500/20" : "bg-indigo-50 text-indigo-700 border border-indigo-200"}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                className={`mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                <h4
                  className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
                >
                  Description du projet
                </h4>
                <p
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: selectedProject.fullDescription,
                  }}
                />
              </div>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg transition-all"
                >
                  Voir le projet <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="fade-in-section glass rounded-3xl p-12 text-center">
            <h3
              className={`text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}
            >
              Travaillons Ensemble
            </h3>
            <p
              className={`text-lg mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Vous avez un projet en tête ? N'hésitez pas à me contacter !
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:bastien.cordier78@gmail.com"
                className="glass-hover p-4 rounded-xl glass"
              >
                <Mail
                  className={`w-6 h-6 ${darkMode ? "text-purple-400" : "text-indigo-600"}`}
                />
              </a>
              <a
                href="https://github.com/bastien-cordier/"
                target="_blank"
                className="glass-hover p-4 rounded-xl glass"
              >
                <Github
                  className={`w-6 h-6 ${darkMode ? "text-purple-400" : "text-indigo-600"}`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/bastien-cordier-03a070151/"
                target="_blank"
                className="glass-hover p-4 rounded-xl glass"
              >
                <Linkedin
                  className={`w-6 h-6 ${darkMode ? "text-purple-400" : "text-indigo-600"}`}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-6 border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="container mx-auto text-center">
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            © 2025 Bastien CORDIER. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
