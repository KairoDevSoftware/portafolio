import { Icons } from "@/components/icons";
import type { L } from "@/lib/i18n";
import { BriefcaseIcon, HomeIcon, LayoutGridIcon } from "lucide-react";

/*
 * Contenido del portafolio en español (es) e inglés (en).
 * Para cambiar un texto, edítalo aquí: el diseño no se toca.
 */

const WA = "51973196049";

type Link = { type: L; href: string; icon: "github" | "globe" };
type Project = {
  title: string | L;
  kind: L;
  description: L;
  technologies: string[];
  image: string;
  href: string;
  links: Link[];
};

export const DATA = {
  name: "David Vega",
  role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" } as L,
  initials: "DV",
  url: "https://portafolio.pages.dev", // cambiar por la dirección final de Cloudflare
  avatarUrl: "/img/david.webp",

  greeting: { es: "Hola, soy David", en: "Hi, I'm David" } as L,
  description: {
    es: "Desarrollador Full Stack en Lima, Perú. Convierto procesos de negocio en software que funciona.",
    en: "Full Stack developer in Lima, Peru. I turn business processes into software that works.",
  } as L,
  summary: {
    es: "Tengo más de 5 años creando sistemas con Java, Spring Boot y React. Pasé por [seis empresas](#work), desde microservicios para banca hasta e-commerce y sistemas de gestión. También construyo sistemas a medida para negocios: restaurantes, bodegas, consultorios y equipos de venta. Me importa que el sistema no falle y que quien lo use no tenga que pensar dos veces.",
    en: "I have 5+ years building systems with Java, Spring Boot and React. I've worked at [six companies](#work), from banking microservices to e-commerce and management systems. I also build custom systems for businesses: restaurants, corner stores, clinics and sales teams. I care that the system doesn't fail and that the people using it never have to think twice.",
  } as L,

  ui: {
    about: { es: "Sobre mí", en: "About" } as L,
    work: { es: "Experiencia", en: "Work experience" } as L,
    present: { es: "Actual", en: "Present" } as L,
    education: { es: "Formación", en: "Education" } as L,
    skills: { es: "Tecnologías", en: "Skills" } as L,
    projectsPill: { es: "Proyectos", en: "Projects" } as L,
    projectsTitle: { es: "Sistemas que ya funcionan", en: "Systems already running" } as L,
    projectsText: {
      es: "Lo que ven los clientes de cada negocio: cartas, reservas, cajas y paneles reales, con la tecnología que hay detrás.",
      en: "What each business's customers see: real menus, bookings, tills and dashboards, with the technology behind them.",
    } as L,
    contactPill: { es: "Contacto", en: "Contact" } as L,
    contactTitle: {
      es: "¿Tienes un proceso que quieres automatizar?",
      en: "Have a process you want to automate?",
    } as L,
    contactText: {
      es: "Cuéntame qué necesitas. Te respondo por WhatsApp o por correo.",
      en: "Tell me what you need. I'll reply on WhatsApp or by email.",
    } as L,
    email: { es: "Enviar correo", en: "Send an email" } as L,
    theme: { es: "Fondo claro / oscuro", en: "Light / dark" } as L,
    language: { es: "English", en: "Español" } as L,
    footer: { es: "Hecho en Lima, Perú.", en: "Made in Lima, Peru." } as L,
  },

  whatsapp: {
    es: `https://wa.me/${WA}?text=${encodeURIComponent("Hola David, vi tu portafolio")}`,
    en: `https://wa.me/${WA}?text=${encodeURIComponent("Hi David, I saw your portfolio")}`,
  } as L,

  skills: [
    { name: "Java", icon: "/tech/java.svg" },
    { name: "Spring Boot", icon: "/tech/spring.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "JavaScript", icon: "/tech/javascript.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Laravel", icon: "/tech/laravel.svg" },
    { name: "Python", icon: "/tech/python.svg" },
    { name: "Apache Spark", icon: "/tech/apachespark.svg" },
    { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    { name: "MySQL", icon: "/tech/mysql.svg" },
    { name: "Supabase", icon: "/tech/supabase.svg" },
    { name: "Docker", icon: "/tech/docker.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
    { name: "Git", icon: "/tech/git.svg" },
  ],

  navbar: [
    { href: "#hero", icon: HomeIcon, label: { es: "Inicio", en: "Home" } as L },
    { href: "#projects", icon: LayoutGridIcon, label: { es: "Proyectos", en: "Projects" } as L },
    { href: "#work", icon: BriefcaseIcon, label: { es: "Experiencia", en: "Experience" } as L },
  ],

  contact: {
    email: "darkcodeknight25@gmail.com",
    social: [
      { name: "WhatsApp", url: `https://wa.me/${WA}`, icon: Icons.whatsapp },
      { name: "GitHub", url: "https://github.com/DarkCodeKnight25", icon: Icons.github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/dvegaortiz", icon: Icons.linkedin },
      { name: "Email", url: "mailto:darkcodeknight25@gmail.com", icon: Icons.email },
    ],
  },

  work: [
    {
      company: "Bluetab",
      title: { es: "Desarrollador APX", en: "APX Developer" } as L,
      start: "2026",
      end: null,
      description: {
        es: "Microservicios transaccionales bajo arquitectura APX para banca, procesos ETL con Python y Apache Spark y jobs batch para procesos críticos.",
        en: "Transactional microservices on the APX architecture for banking, ETL pipelines with Python and Apache Spark, and batch jobs for critical processes.",
      } as L,
    },
    {
      company: "JJ Software Solutions",
      title: { es: "Desarrollador Java", en: "Java Developer" } as L,
      start: "2025",
      end: "2026",
      description: {
        es: "APIs REST y SOAP para integrar sistemas internos y externos, y procesamiento de datos con Apache Spark.",
        en: "REST and SOAP APIs to integrate internal and external systems, and data processing with Apache Spark.",
      } as L,
    },
    {
      company: "HRF Group",
      title: { es: "Desarrollador Java", en: "Java Developer" } as L,
      start: "2024",
      end: "2025",
      description: {
        es: "Portal de gestión de citas médicas y sistema de control de asistencia de personal con Spring Boot y MySQL.",
        en: "Medical appointment portal and staff attendance system with Spring Boot and MySQL.",
      } as L,
    },
    {
      company: "Altared Group",
      title: { es: "Desarrollador Full Stack", en: "Full Stack Developer" } as L,
      start: "2023",
      end: "2025",
      description: {
        es: "E-commerce de productos naturales y sistema de gestión comercial y facturación con Node.js, React y Docker.",
        en: "Natural products e-commerce and a sales and invoicing system with Node.js, React and Docker.",
      } as L,
    },
    {
      company: "Selectsa",
      title: { es: "Desarrollador Java", en: "Java Developer" } as L,
      start: "2021",
      end: "2022",
      description: {
        es: "Sistema de órdenes de servicio y control de activos tecnológicos con Spring Boot y JPA.",
        en: "Service order system and IT asset tracking with Spring Boot and JPA.",
      } as L,
    },
    {
      company: "Infordata",
      title: { es: "Desarrollador Java", en: "Java Developer" } as L,
      start: "2020",
      end: "2021",
      description: {
        es: "Mesa de ayuda con gestión de tickets TI y plataforma de control de asistencia y horarios.",
        en: "IT help desk with ticket management, and an attendance and scheduling platform.",
      } as L,
    },
  ],

  education: [
    {
      school: "IDAT",
      degree: {
        es: "Desarrollo de Sistemas de Información · Egresado",
        en: "Information Systems Development · Graduate",
      } as L,
      dates: { es: "2019 - 2024", en: "2019 - 2024" } as L,
    },
    {
      school: "SENATI",
      degree: {
        es: "Soporte y Mantenimiento de Equipos de Cómputo · 5.º ciclo",
        en: "Computer Support and Maintenance · 5th term",
      } as L,
      dates: { es: "En curso", en: "In progress" } as L,
    },
    {
      school: "CETPRO San Luis",
      degree: {
        es: "Computación e Informática · Egresado",
        en: "Computing and IT · Graduate",
      } as L,
      dates: { es: "2016 - 2018", en: "2016 - 2018" } as L,
    },
  ],

  projects: [
    {
      title: "Sistema ARM",
      kind: { es: "Producto propio · CRM con IA", en: "Own product · AI CRM" },
      description: {
        es: "CRM para negocios que venden por WhatsApp: bandeja de conversaciones, embudo de ventas, agenda y un asistente de IA que sugiere qué responder y a quién llamar primero. Trae tres diseños en la misma app.",
        en: "A CRM for businesses that sell over WhatsApp: chat inbox, sales funnel, calendar and an AI assistant that suggests what to reply and who to call first. Three designs in the same app.",
      },
      technologies: ["JavaScript", "IndexedDB", "Cloudflare Workers", "Claude API"],
      image: "/img/arm.webp",
      href: "",
      links: [],
    },
    {
      title: { es: "Sistema para bodegas", en: "Corner store system" },
      kind: { es: "Cliente real · En implementación", en: "Real client · Rolling out" },
      description: {
        es: "Ventas, inventario y fiados para una bodega de barrio. Funciona sin internet, en la computadora del local, y reemplaza al cuaderno.",
        en: "Sales, inventory and store credit for a neighbourhood shop. Works offline on the shop's computer and replaces the paper notebook.",
      },
      technologies: ["JavaScript", "IndexedDB", "Offline"],
      image: "/img/bodega.webp",
      href: "",
      links: [],
    },
    {
      title: "Inversiones CSS",
      kind: { es: "Cliente real · Tienda online (e-commerce)", en: "Real client · Online store (e-commerce)" },
      description: {
        es: "Tienda online de una importadora de bolsas al vacío en Lima. Catálogo por líneas (lisas, gofradas y rollos) con precios, buscador por medida, carrito con el total con IGV y pedido que se envía solo por WhatsApp. Pago con Yape, Plin o transferencia y envíos a todo el Perú.",
        en: "Online store for a vacuum-bag importer in Lima. Catalogue by product line (smooth, embossed and rolls) with prices, search by size, a cart with the total including tax, and orders sent automatically via WhatsApp. Payment by Yape, Plin or bank transfer, with shipping across Peru.",
      },
      technologies: ["React", "Laravel", "MySQL"],
      image: "/img/inversiones-web.webp",
      href: "https://bolsasalvacio-inversionescss.pages.dev/",
      links: [
        { type: { es: "Tienda", en: "Store" }, href: "https://bolsasalvacio-inversionescss.pages.dev/", icon: "globe" },
      ],
    },
    {
      title: "El Muelle Norteño",
      kind: { es: "Sistema de restaurante · Cevichería", en: "Restaurant system · Cevichería" },
      description: {
        es: "El comensal pide desde el QR de su mesa, la cocina ve los pedidos en vivo por estación y la caja cobra con Yape, Plin, tarjeta o efectivo y cierra el día. También acepta delivery con seguimiento en vivo.",
        en: "Diners order from the QR on their table, the kitchen sees orders live by station, and the till takes Yape, Plin, card or cash and closes the day. Delivery with live tracking too.",
      },
      technologies: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
      image: "/img/cevicheria-carta.webp",
      href: "https://github.com/DarkCodeKnight25/sistema-restaurant-cevicheria",
      links: [{ type: { es: "Código", en: "Code" }, href: "https://github.com/DarkCodeKnight25/sistema-restaurant-cevicheria", icon: "github" }],
    },
    {
      title: "La Sazón de Doña Meche",
      kind: { es: "Sistema de restaurante · Comida criolla", en: "Restaurant system · Creole food" },
      description: {
        es: "El mismo núcleo de pedidos, cocina y caja con otra carta y otro diseño: el plato del día cambia según el día y, cuando un plato se acaba, desaparece al instante del celular de cada comensal.",
        en: "The same ordering, kitchen and till core with another menu and design: the dish of the day changes daily, and when a dish runs out it disappears instantly from every diner's phone.",
      },
      technologies: ["React", "Spring Boot", "PostgreSQL", "WebSocket"],
      image: "/img/criolla-carta.webp",
      href: "https://github.com/DarkCodeKnight25/sistema-restaurant-comida-criolla",
      links: [{ type: { es: "Código", en: "Code" }, href: "https://github.com/DarkCodeKnight25/sistema-restaurant-comida-criolla", icon: "github" }],
    },
    {
      title: "Dental Qori",
      kind: { es: "Sistema de citas · Consultorio dental", en: "Booking system · Dental clinic" },
      description: {
        es: "El paciente reserva sin crear una cuenta, la recepción organiza la agenda de cada doctor y los recordatorios salen por WhatsApp con un toque. Dos reservas al mismo tiempo nunca se cruzan.",
        en: "Patients book without an account, reception organises each dentist's schedule and reminders go out on WhatsApp in one tap. Two bookings at the same moment never collide.",
      },
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      image: "/img/dental-reserva.webp",
      href: "https://github.com/DarkCodeKnight25/sistema-citas-dental",
      links: [{ type: { es: "Código", en: "Code" }, href: "https://github.com/DarkCodeKnight25/sistema-citas-dental", icon: "github" }],
    },
    {
      title: "FoodSave",
      kind: { es: "Producto propio · Web + app móvil", en: "Own product · Web + mobile app" },
      description: {
        es: "Ayuda a usar la comida que ya tienes: registras tu despensa, recibes alertas antes de que algo venza y recetas con lo que tienes. Web y app sincronizadas en tiempo real.",
        en: "Helps you use the food you already have: log your pantry, get alerts before things expire and recipes for what you have. Web and app synced in real time.",
      },
      technologies: ["React Native", "Expo", "Supabase", "PostgreSQL"],
      image: "/img/foodsave.webp",
      // La demo en Netlify (foodsave-novatech.netlify.app) daba 404 el 2026-11-13: se enlaza el código.
      href: "https://github.com/DarkCodeKnight25/FoodSave",
      links: [
        { type: { es: "Código", en: "Code" }, href: "https://github.com/DarkCodeKnight25/FoodSave", icon: "github" },
      ],
    },
  ] as Project[],
};
