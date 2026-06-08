export type Language = "en" | "fr";

export type TranslationKey =
  | "nav.home"
  | "nav.features"
  | "nav.solutions"
  | "nav.pricing"
  | "nav.resources"
  | "nav.about"
  | "nav.signin"
  | "nav.bookDemo"
  | "nav.language"
  | "hero.headline.line1"
  | "hero.headline.line2"
  | "hero.headline.line3"
  | "hero.subheadline"
  | "hero.ctaPrimary"
  | "hero.ctaSecondary"
  | "hero.trust.isa"
  | "hero.trust.cloud"
  | "hero.trust.security"
  | "hero.trust.ai"
  | "logos.title"
  | "features.eyebrow"
  | "features.title"
  | "features.subtitle"
  | "features.planning.title"
  | "features.planning.desc"
  | "features.risk.title"
  | "features.risk.desc"
  | "features.analytics.title"
  | "features.analytics.desc"
  | "features.testing.title"
  | "features.testing.desc"
  | "features.workpapers.title"
  | "features.workpapers.desc"
  | "features.reporting.title"
  | "features.reporting.desc"
  | "workflow.eyebrow"
  | "workflow.title"
  | "workflow.subtitle"
  | "workflow.step1"
  | "workflow.step2"
  | "workflow.step3"
  | "workflow.step4"
  | "workflow.step5"
  | "workflow.step6"
  | "workflow.step7"
  | "showcase.eyebrow"
  | "showcase.title"
  | "showcase.subtitle"
  | "showcase.tab.dashboard"
  | "showcase.tab.risk"
  | "showcase.tab.analytics"
  | "showcase.tab.workpapers"
  | "showcase.tab.report"
  | "why.eyebrow"
  | "why.title"
  | "why.subtitle"
  | "why.time.title"
  | "why.time.desc"
  | "why.quality.title"
  | "why.quality.desc"
  | "why.collab.title"
  | "why.collab.desc"
  | "why.compliance.title"
  | "why.compliance.desc"
  | "pricing.eyebrow"
  | "pricing.title"
  | "pricing.subtitle"
  | "pricing.monthly"
  | "pricing.yearly"
  | "pricing.save"
  | "pricing.starter.name"
  | "pricing.starter.desc"
  | "pricing.starter.f1"
  | "pricing.starter.f2"
  | "pricing.starter.f3"
  | "pricing.starter.f4"
  | "pricing.pro.name"
  | "pricing.pro.desc"
  | "pricing.pro.f1"
  | "pricing.pro.f2"
  | "pricing.pro.f3"
  | "pricing.pro.f4"
  | "pricing.pro.f5"
  | "pricing.ent.name"
  | "pricing.ent.desc"
  | "pricing.ent.f1"
  | "pricing.ent.f2"
  | "pricing.ent.f3"
  | "pricing.ent.f4"
  | "pricing.ent.f5"
  | "pricing.cta.trial"
  | "pricing.cta.sales"
  | "pricing.popular"
  | "testimonials.eyebrow"
  | "testimonials.title"
  | "testimonials.subtitle"
  | "testimonials.t1.quote"
  | "testimonials.t1.name"
  | "testimonials.t1.role"
  | "testimonials.t1.company"
  | "testimonials.t2.quote"
  | "testimonials.t2.name"
  | "testimonials.t2.role"
  | "testimonials.t2.company"
  | "testimonials.t3.quote"
  | "testimonials.t3.name"
  | "testimonials.t3.role"
  | "testimonials.t3.company"
  | "security.eyebrow"
  | "security.title"
  | "security.subtitle"
  | "security.badge1"
  | "security.badge2"
  | "security.badge3"
  | "security.badge4"
  | "security.badge5"
  | "security.badge6"
  | "faq.eyebrow"
  | "faq.title"
  | "faq.subtitle"
  | "faq.q1"
  | "faq.a1"
  | "faq.q2"
  | "faq.a2"
  | "faq.q3"
  | "faq.a3"
  | "faq.q4"
  | "faq.a4"
  | "faq.q5"
  | "faq.a5"
  | "faq.q6"
  | "faq.a6"
  | "faq.q7"
  | "faq.a7"
  | "faq.q8"
  | "faq.a8"
  | "cta.title"
  | "cta.subtitle"
  | "cta.primary"
  | "cta.secondary"
  | "footer.product"
  | "footer.product.features"
  | "footer.product.pricing"
  | "footer.product.security"
  | "footer.product.integrations"
  | "footer.resources"
  | "footer.resources.blog"
  | "footer.resources.guides"
  | "footer.resources.webinars"
  | "footer.resources.docs"
  | "footer.company"
  | "footer.company.about"
  | "footer.company.careers"
  | "footer.company.partners"
  | "footer.company.contact"
  | "footer.legal"
  | "footer.legal.privacy"
  | "footer.legal.terms"
  | "footer.legal.compliance"
  | "footer.copyright"
  | "footer.tagline";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.solutions": "Solutions",
    "nav.pricing": "Pricing",
    "nav.resources": "Resources",
    "nav.about": "About",
    "nav.signin": "Sign In",
    "nav.bookDemo": "Book a Demo",
    "nav.language": "Language",
    "hero.headline.line1": "Smarter audits.",
    "hero.headline.line2": "Faster delivery.",
    "hero.headline.line3": "Greater confidence.",
    "hero.subheadline":
      "AuditOS is the AI-powered audit platform that automates planning, risk assessment, testing, workpapers, and reporting — so your team can deliver higher-quality audits in less time.",
    "hero.ctaPrimary": "Book a Demo",
    "hero.ctaSecondary": "Explore Features",
    "hero.trust.isa": "ISA Compliant",
    "hero.trust.cloud": "Cloud Hosted",
    "hero.trust.security": "Enterprise Security",
    "hero.trust.ai": "AI Powered",
    "logos.title": "Trusted by Leading Audit Firms",
    "features.eyebrow": "Capabilities",
    "features.title": "Everything You Need For Modern Audits",
    "features.subtitle":
      "A unified platform for every phase of the audit lifecycle — from planning to reporting.",
    "features.planning.title": "Smart Audit Planning",
    "features.planning.desc":
      "AI-assisted audit planning and engagement setup, tailored to your client's risk profile.",
    "features.risk.title": "Risk Assessment",
    "features.risk.desc":
      "Automatically identify and score risks across the entity with intelligent heatmaps.",
    "features.analytics.title": "Data Analytics",
    "features.analytics.desc":
      "Analyze large datasets in seconds with built-in analytics, anomaly detection, and sampling.",
    "features.testing.title": "Automated Testing",
    "features.testing.desc":
      "Execute audit procedures automatically with continuous controls monitoring.",
    "features.workpapers.title": "Workpaper Management",
    "features.workpapers.desc":
      "Centralized documentation, evidence collection, and versioned review trails.",
    "features.reporting.title": "Professional Reporting",
    "features.reporting.desc":
      "Generate audit-ready reports aligned with ISA and IFRS standards in one click.",
    "workflow.eyebrow": "How it works",
    "workflow.title": "A complete audit workflow, end to end",
    "workflow.subtitle":
      "From onboarding to reporting, AuditOS guides your team through every step.",
    "workflow.step1": "Client Onboarding",
    "workflow.step2": "Risk Assessment",
    "workflow.step3": "Audit Planning",
    "workflow.step4": "Data Analysis",
    "workflow.step5": "Audit Testing",
    "workflow.step6": "Workpapers",
    "workflow.step7": "Reporting",
    "showcase.eyebrow": "Platform",
    "showcase.title": "Built for the way modern teams audit",
    "showcase.subtitle":
      "Powerful, intuitive dashboards for every stage of the engagement.",
    "showcase.tab.dashboard": "Audit Dashboard",
    "showcase.tab.risk": "Risk Matrix",
    "showcase.tab.analytics": "Analytics Workspace",
    "showcase.tab.workpapers": "Workpaper Center",
    "showcase.tab.report": "Report Generator",
    "why.eyebrow": "Why AuditOS",
    "why.title": "Built for audit excellence",
    "why.subtitle":
      "The operating system that helps firms deliver consistent, defensible, and efficient audits.",
    "why.time.title": "Save Time",
    "why.time.desc": "Reduce manual effort by 70% with intelligent automation.",
    "why.quality.title": "Improve Quality",
    "why.quality.desc": "Apply consistent methodologies and controls across every engagement.",
    "why.collab.title": "Collaborate Better",
    "why.collab.desc": "Enable real-time teamwork with shared workspaces and reviews.",
    "why.compliance.title": "Stay Compliant",
    "why.compliance.desc": "Stay aligned with ISA, IFRS, and local regulatory standards.",
    "pricing.eyebrow": "Pricing",
    "pricing.title": "Simple, transparent pricing",
    "pricing.subtitle":
      "Plans that scale with your firm. No hidden fees, cancel anytime.",
    "pricing.monthly": "Monthly",
    "pricing.yearly": "Yearly",
    "pricing.save": "Save 20%",
    "pricing.starter.name": "Starter",
    "pricing.starter.desc": "For small teams getting started with structured audits.",
    "pricing.starter.f1": "Up to 3 audits",
    "pricing.starter.f2": "Basic analytics",
    "pricing.starter.f3": "Standard testing",
    "pricing.starter.f4": "Email support",
    "pricing.pro.name": "Professional",
    "pricing.pro.desc": "For growing firms running multiple concurrent engagements.",
    "pricing.pro.f1": "Unlimited audits",
    "pricing.pro.f2": "Advanced analytics",
    "pricing.pro.f3": "Automated testing",
    "pricing.pro.f4": "Custom reports",
    "pricing.pro.f5": "Priority support",
    "pricing.ent.name": "Enterprise",
    "pricing.ent.desc": "For large firms and regulated organizations with custom needs.",
    "pricing.ent.f1": "Everything in Professional",
    "pricing.ent.f2": "API Access",
    "pricing.ent.f3": "SSO",
    "pricing.ent.f4": "Advanced Permissions",
    "pricing.ent.f5": "Dedicated Success Manager",
    "pricing.cta.trial": "Start Free Trial",
    "pricing.cta.sales": "Contact Sales",
    "pricing.popular": "Most Popular",
    "testimonials.eyebrow": "Testimonials",
    "testimonials.title": "Loved by auditors worldwide",
    "testimonials.subtitle":
      "Hear from the firms and teams transforming their audit practice with AuditOS.",
    "testimonials.t1.quote":
      "AuditOS cut our planning time in half and gave us a defensible methodology across every engagement. It's the operating layer our firm needed.",
    "testimonials.t1.name": "Amina Diallo",
    "testimonials.t1.role": "Managing Partner",
    "testimonials.t1.company": "Diallo & Partners Audit",
    "testimonials.t2.quote":
      "We replaced four separate tools with AuditOS. The risk matrix and analytics workspace alone paid for the platform in the first quarter.",
    "testimonials.t2.name": "Jean-Marc Ngozi",
    "testimonials.t2.role": "Director of Internal Audit",
    "testimonials.t2.company": "Atlas Financial Group",
    "testimonials.t3.quote":
      "The reporting module is exceptional. Our auditors deliver polished, ISA-aligned reports in hours instead of weeks. Our clients notice the difference.",
    "testimonials.t3.name": "Sarah Okonkwo",
    "testimonials.t3.role": "Head of Compliance",
    "testimonials.t3.company": "Meridian Bank",
    "security.eyebrow": "Security",
    "security.title": "Enterprise-Grade Security",
    "security.subtitle":
      "Your data is protected by the same controls trusted by the world's most regulated industries.",
    "security.badge1": "End-to-End Encryption",
    "security.badge2": "SOC 2 Ready",
    "security.badge3": "Role-Based Access Control",
    "security.badge4": "Cloud Backups",
    "security.badge5": "Audit Trail Logging",
    "security.badge6": "Multi-Factor Authentication",
    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.subtitle": "Answers to the most common questions about AuditOS.",
    "faq.q1": "What is AuditOS?",
    "faq.a1": "AuditOS is an AI-powered audit management platform that helps audit firms, internal auditors, accounting firms, and compliance teams plan, execute, and report on audits faster and with higher quality.",
    "faq.q2": "Is AuditOS compliant with ISA standards?",
    "faq.a2": "Yes. AuditOS is built to align with International Standards on Auditing (ISA) and supports local regulatory frameworks used in financial audit engagements.",
    "faq.q3": "How long does it take to onboard my firm?",
    "faq.a3": "Most firms complete onboarding in less than two weeks. Our team provides guided setup, methodology templates, and live training sessions.",
    "faq.q4": "Can I import data from my existing tools?",
    "faq.a4": "Absolutely. AuditOS supports imports from Excel, CSV, and major audit and ERP platforms via secure connectors and APIs.",
    "faq.q5": "Is my data secure?",
    "faq.a5": "Yes. AuditOS uses end-to-end encryption, role-based access control, SOC 2 ready infrastructure, and full audit trail logging to keep your data safe.",
    "faq.q6": "Do you offer a free trial?",
    "faq.a6": "Yes. The Starter and Professional plans include a 14-day free trial with full access to platform features. No credit card required.",
    "faq.q7": "What languages does AuditOS support?",
    "faq.a7": "AuditOS is available in English and French, with additional languages planned. The interface, reports, and AI assistants support both languages.",
    "faq.q8": "How is pricing structured?",
    "faq.a8": "Pricing is structured per plan (Starter, Professional, Enterprise) and billed monthly or yearly. Enterprise plans are tailored to your firm's size and needs.",
    "cta.title": "Ready to Transform Your Audit Process?",
    "cta.subtitle":
      "Join hundreds of audit firms delivering faster, smarter, and more confident audits with AuditOS.",
    "cta.primary": "Book a Demo",
    "cta.secondary": "Start Free Trial",
    "footer.product": "Product",
    "footer.product.features": "Features",
    "footer.product.pricing": "Pricing",
    "footer.product.security": "Security",
    "footer.product.integrations": "Integrations",
    "footer.resources": "Resources",
    "footer.resources.blog": "Blog",
    "footer.resources.guides": "Guides",
    "footer.resources.webinars": "Webinars",
    "footer.resources.docs": "Documentation",
    "footer.company": "Company",
    "footer.company.about": "About",
    "footer.company.careers": "Careers",
    "footer.company.partners": "Partners",
    "footer.company.contact": "Contact",
    "footer.legal": "Legal",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms of Service",
    "footer.legal.compliance": "Compliance",
    "footer.copyright": "© AuditOS 2026. All Rights Reserved.",
    "footer.tagline": "Made in Africa 🇨🇲",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.features": "Fonctionnalités",
    "nav.solutions": "Solutions",
    "nav.pricing": "Tarifs",
    "nav.resources": "Ressources",
    "nav.about": "À propos",
    "nav.signin": "Se connecter",
    "nav.bookDemo": "Demander une démo",
    "nav.language": "Langue",
    "hero.headline.line1": "Des audits plus intelligents.",
    "hero.headline.line2": "Plus rapides.",
    "hero.headline.line3": "Plus fiables.",
    "hero.subheadline":
      "AuditOS est la plateforme d'audit alimentée par l'IA qui automatise la planification, l'évaluation des risques, les tests, les dossiers de travail et le reporting — pour des audits de meilleure qualité en moins de temps.",
    "hero.ctaPrimary": "Demander une démo",
    "hero.ctaSecondary": "Voir les fonctionnalités",
    "hero.trust.isa": "Conforme aux normes ISA",
    "hero.trust.cloud": "Hébergement cloud",
    "hero.trust.security": "Sécurité entreprise",
    "hero.trust.ai": "Propulsé par l'IA",
    "logos.title": "La confiance des grands cabinets d'audit",
    "features.eyebrow": "Capacités",
    "features.title": "Tout ce dont vous avez besoin pour des audits modernes",
    "features.subtitle":
      "Une plateforme unifiée pour chaque phase du cycle d'audit — de la planification au reporting.",
    "features.planning.title": "Planification intelligente",
    "features.planning.desc":
      "Planification d'audit assistée par IA, adaptée au profil de risque de chaque client.",
    "features.risk.title": "Évaluation des risques",
    "features.risk.desc":
      "Identifiez et notez automatiquement les risques avec des cartographies intelligentes.",
    "features.analytics.title": "Analyse de données",
    "features.analytics.desc":
      "Analysez de grands volumes de données en quelques secondes grâce à l'IA et la détection d'anomalies.",
    "features.testing.title": "Tests automatisés",
    "features.testing.desc":
      "Exécutez automatiquement les procédures d'audit avec un suivi continu des contrôles.",
    "features.workpapers.title": "Gestion des dossiers",
    "features.workpapers.desc":
      "Documentation centralisée, collecte de preuves et pistes de revue versionnées.",
    "features.reporting.title": "Reporting professionnel",
    "features.reporting.desc":
      "Générez des rapports d'audit conformes aux normes ISA et IFRS en un clic.",
    "workflow.eyebrow": "Comment ça marche",
    "workflow.title": "Un flux d'audit complet, de bout en bout",
    "workflow.subtitle":
      "De l'onboarding au reporting, AuditOS guide votre équipe à chaque étape.",
    "workflow.step1": "Onboarding client",
    "workflow.step2": "Évaluation des risques",
    "workflow.step3": "Planification",
    "workflow.step4": "Analyse des données",
    "workflow.step5": "Tests d'audit",
    "workflow.step6": "Dossiers de travail",
    "workflow.step7": "Reporting",
    "showcase.eyebrow": "Plateforme",
    "showcase.title": "Conçue pour la façon moderne d'auditer",
    "showcase.subtitle":
      "Des tableaux de bord puissants et intuitifs pour chaque étape de la mission.",
    "showcase.tab.dashboard": "Tableau de bord",
    "showcase.tab.risk": "Matrice des risques",
    "showcase.tab.analytics": "Espace d'analyse",
    "showcase.tab.workpapers": "Centre des dossiers",
    "showcase.tab.report": "Générateur de rapports",
    "why.eyebrow": "Pourquoi AuditOS",
    "why.title": "Conçu pour l'excellence en audit",
    "why.subtitle":
      "Le système d'exploitation qui aide les cabinets à fournir des audits cohérents, défendables et efficaces.",
    "why.time.title": "Gagnez du temps",
    "why.time.desc":
      "Réduisez l'effort manuel de 70 % grâce à l'automatisation intelligente.",
    "why.quality.title": "Améliorez la qualité",
    "why.quality.desc":
      "Appliquez des méthodologies et contrôles cohérents sur chaque mission.",
    "why.collab.title": "Collaborez mieux",
    "why.collab.desc":
      "Travaillez en temps réel grâce à des espaces partagés et des revues collaboratives.",
    "why.compliance.title": "Restez conforme",
    "why.compliance.desc":
      "Conformité avec les normes ISA, IFRS et les réglementations locales.",
    "pricing.eyebrow": "Tarifs",
    "pricing.title": "Une tarification simple et transparente",
    "pricing.subtitle":
      "Des plans qui évoluent avec votre cabinet. Sans frais cachés, résiliable à tout moment.",
    "pricing.monthly": "Mensuel",
    "pricing.yearly": "Annuel",
    "pricing.save": "Économisez 20 %",
    "pricing.starter.name": "Starter",
    "pricing.starter.desc":
      "Pour les petites équipes qui démarrent avec des audits structurés.",
    "pricing.starter.f1": "Jusqu'à 3 audits",
    "pricing.starter.f2": "Analyses de base",
    "pricing.starter.f3": "Tests standards",
    "pricing.starter.f4": "Support par email",
    "pricing.pro.name": "Professional",
    "pricing.pro.desc":
      "Pour les cabinets en croissance gérant plusieurs missions en parallèle.",
    "pricing.pro.f1": "Audits illimités",
    "pricing.pro.f2": "Analyses avancées",
    "pricing.pro.f3": "Tests automatisés",
    "pricing.pro.f4": "Rapports personnalisés",
    "pricing.pro.f5": "Support prioritaire",
    "pricing.ent.name": "Enterprise",
    "pricing.ent.desc":
      "Pour les grands cabinets et organisations réglementées avec des besoins spécifiques.",
    "pricing.ent.f1": "Tout du plan Professional",
    "pricing.ent.f2": "Accès API",
    "pricing.ent.f3": "SSO",
    "pricing.ent.f4": "Permissions avancées",
    "pricing.ent.f5": "Customer Success Manager dédié",
    "pricing.cta.trial": "Essai gratuit",
    "pricing.cta.sales": "Contacter les ventes",
    "pricing.popular": "Le plus populaire",
    "testimonials.eyebrow": "Témoignages",
    "testimonials.title": "Adopté par des auditeurs dans le monde entier",
    "testimonials.subtitle":
      "Découvrez comment les cabinets et équipes transforment leur pratique de l'audit avec AuditOS.",
    "testimonials.t1.quote":
      "AuditOS a réduit notre temps de planification de moitié et nous a donné une méthodologie défendable sur chaque mission. C'est la couche opérationnelle dont notre cabinet avait besoin.",
    "testimonials.t1.name": "Amina Diallo",
    "testimonials.t1.role": "Associée gérante",
    "testimonials.t1.company": "Diallo & Partners Audit",
    "testimonials.t2.quote":
      "Nous avons remplacé quatre outils par AuditOS. La matrice des risques et l'espace d'analyse ont rentabilisé la plateforme dès le premier trimestre.",
    "testimonials.t2.name": "Jean-Marc Ngozi",
    "testimonials.t2.role": "Directeur de l'audit interne",
    "testimonials.t2.company": "Atlas Financial Group",
    "testimonials.t3.quote":
      "Le module de reporting est exceptionnel. Nos auditeurs produisent des rapports conformes aux normes ISA en quelques heures au lieu de semaines. Nos clients voient la différence.",
    "testimonials.t3.name": "Sarah Okonkwo",
    "testimonials.t3.role": "Responsable conformité",
    "testimonials.t3.company": "Meridian Bank",
    "security.eyebrow": "Sécurité",
    "security.title": "Sécurité de niveau entreprise",
    "security.subtitle":
      "Vos données sont protégées par les mêmes contrôles que ceux utilisés par les industries les plus réglementées.",
    "security.badge1": "Chiffrement de bout en bout",
    "security.badge2": "Prêt pour SOC 2",
    "security.badge3": "Contrôle d'accès par rôle",
    "security.badge4": "Sauvegardes cloud",
    "security.badge5": "Journalisation d'audit",
    "security.badge6": "Authentification multifacteur",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.subtitle":
      "Réponses aux questions les plus courantes sur AuditOS.",
    "faq.q1": "Qu'est-ce qu'AuditOS ?",
    "faq.a1":
      "AuditOS est une plateforme d'audit alimentée par l'IA qui aide les cabinets d'audit, auditeurs internes, cabinets comptables et équipes conformité à planifier, exécuter et reporter leurs audits plus rapidement et avec plus de qualité.",
    "faq.q2": "AuditOS est-il conforme aux normes ISA ?",
    "faq.a2":
      "Oui. AuditOS est conçu pour s'aligner avec les Normes Internationales d'Audit (ISA) et supporte les référentiels réglementaires locaux.",
    "faq.q3": "Combien de temps prend l'onboarding ?",
    "faq.a3":
      "La plupart des cabinets complètent leur onboarding en moins de deux semaines. Notre équipe fournit un setup guidé, des templates méthodologiques et des sessions de formation en direct.",
    "faq.q4": "Puis-je importer des données depuis mes outils existants ?",
    "faq.a4":
      "Absolument. AuditOS supporte les imports Excel, CSV et les principales plateformes d'audit et ERP via des connecteurs sécurisés et des API.",
    "faq.q5": "Mes données sont-elles sécurisées ?",
    "faq.a5":
      "Oui. AuditOS utilise le chiffrement de bout en bout, le contrôle d'accès par rôle, une infrastructure prête pour SOC 2 et une journalisation d'audit complète.",
    "faq.q6": "Proposez-vous un essai gratuit ?",
    "faq.a6":
      "Oui. Les plans Starter et Professional incluent un essai gratuit de 14 jours avec accès complet aux fonctionnalités. Aucune carte bancaire requise.",
    "faq.q7": "Quelles langues sont supportées ?",
    "faq.a7":
      "AuditOS est disponible en anglais et en français, avec d'autres langues prévues. L'interface, les rapports et les assistants IA supportent les deux langues.",
    "faq.q8": "Comment fonctionne la tarification ?",
    "faq.a8":
      "La tarification est structurée par plan (Starter, Professional, Enterprise) et facturée mensuellement ou annuellement. Les plans Enterprise sont adaptés à la taille et aux besoins de votre cabinet.",
    "cta.title": "Prêt à transformer votre processus d'audit ?",
    "cta.subtitle":
      "Rejoignez des centaines de cabinets qui livrent des audits plus rapides, plus intelligents et plus fiables avec AuditOS.",
    "cta.primary": "Demander une démo",
    "cta.secondary": "Essai gratuit",
    "footer.product": "Produit",
    "footer.product.features": "Fonctionnalités",
    "footer.product.pricing": "Tarifs",
    "footer.product.security": "Sécurité",
    "footer.product.integrations": "Intégrations",
    "footer.resources": "Ressources",
    "footer.resources.blog": "Blog",
    "footer.resources.guides": "Guides",
    "footer.resources.webinars": "Webinaires",
    "footer.resources.docs": "Documentation",
    "footer.company": "Entreprise",
    "footer.company.about": "À propos",
    "footer.company.careers": "Carrières",
    "footer.company.partners": "Partenaires",
    "footer.company.contact": "Contact",
    "footer.legal": "Légal",
    "footer.legal.privacy": "Politique de confidentialité",
    "footer.legal.terms": "Conditions d'utilisation",
    "footer.legal.compliance": "Conformité",
    "footer.copyright": "© AuditOS 2026. Tous droits réservés.",
    "footer.tagline": "Made in Africa 🇨🇲",
  },
};
