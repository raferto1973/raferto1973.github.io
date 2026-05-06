const translations = {
    en: {
        pageTitle: "Rafa Fernandez | Product-Focused Web Builder",
        pageDescription: "Public portfolio for Rafa Fernandez featuring selected web products, technical highlights, and delivery experience without exposing private repositories.",
        navProjects: "Projects",
        navGallery: "Gallery",
        navExperience: "Experience",
        navContact: "Contact",
        heroTitle: "Building polished digital products.",
        heroText: "I design and ship web products with a strong focus on usability, responsive frontend execution, and pragmatic full-stack delivery. This portfolio shows what each product does, what I solved, and how it was built.",
        heroPrimaryCta: "View selected work",
        proofLabelOne: "Live case",
        proofTextOne: "Released product with real users, private source, public proof.",
        proofLabelTwo: "Positioning",
        proofStrongTwo: "Public outcomes, private code",
        proofTextTwo: "The portfolio focuses on value delivered, technical depth, and release readiness.",
        focusLabel: "Current focus",
        focusOne: "Product-oriented web applications",
        focusTwo: "Responsive UI for desktop and mobile",
        focusThree: "PWA hardening and release readiness",
        focusFour: "Auth, permissions, and Supabase-backed flows",
        statOne: "Released product already live in production",
        statTwoTitle: "Private",
        statTwo: "Source remains private when business logic should stay internal",
        signalOneTitle: "Case studies",
        signalOneText: "Each project is framed as a product story instead of a raw repository dump.",
        signalTwoTitle: "Privacy by design",
        signalTwoText: "Enough technical detail to show competence, without leaking sensitive implementation.",
        introKicker: "Why this format works",
        introTitle: "Show the value, not the repository internals.",
        introText: "Each case highlights the product goal, the experience delivered, and the technical challenges solved. That gives recruiters, clients, or collaborators enough evidence to assess the work without needing access to the underlying private repositories.",
        projectsKicker: "Selected projects",
        projectsTitle: "Featured work",
        filterAll: "All",
        filterReleased: "Released",
        filterProgress: "In progress",
        projectOneTag: "Released · Private source",
        projectOneSummary: "Collaborative trip planning web app with itinerary management, group budgeting, settlement flows, document handling, and installable PWA support.",
        projectOneHighlightOne: "Organizer and member collaboration with invitations and role-aware trip flows",
        projectOneHighlightTwo: "Group finance tooling with shared pot, pending payments, settlement, and analytics",
        projectOneHighlightThree: "Trip documents, in-app preview, PDF export, and mobile-first production refinements",
        projectOneHighlightFour: "PWA support with manifest, icons, service worker, and offline fallback",
        projectOnePrivate: "Source code kept private",
        projectTwoTag: "Released · Public repo",
        projectSlot: "Case study slot",
        projectTwoTitle: "RF Planner",
        projectTwoSummary: "Strategic planning and personal execution app for web and Android, built around projects, tasks, Gantt, schedules, notes, time tracking, and multi-device synchronization.",
        projectTwoHighlightOne: "Strategic planning, operational Kanban, schedules, notes, and personal tracking in one workflow",
        projectTwoHighlightTwo: "Supabase-backed sync architecture combined with local-first persistence and release documentation",
        projectTwoHighlightThree: "Web plus Android delivery with Capacitor, multilingual UI, and QA/release discipline",
        projectTwoHighlightFour: "DEV tooling, legal content management, and persistence verification plans inside the product lifecycle",
        projectTwoPrivacy: "Web and Android product with public codebase",
        projectThreeTag: "Released · Public repo",
        projectThreeTitle: "Verge Landing Page",
        projectThreeSummary: "Angular landing page template for SaaS and digital products, designed around modular sections, SEO support, SSR readiness, and polished conversion-focused presentation.",
        projectThreeHighlightOne: "Standalone Angular architecture with reusable hero, pricing, products, testimonials, FAQ, and legal pages",
        projectThreeHighlightTwo: "Responsive marketing UI with AOS motion, pricing toggle, smooth anchor navigation, and SEO route metadata",
        projectThreeHighlightThree: "SSR-ready setup with Angular Universal plus a public Vercel demo for quick validation",
        projectThreePrivacy: "Public repository available on GitHub",
        projectFourTag: "Platform ecosystem · Multi-repo",
        projectFourTitle: "Stockfy",
        projectFourSummary: "SaaS platform for stock photographers, presented as a product ecosystem with public-facing experience, core operational flows, and a business-ready delivery approach.",
        projectFourHighlightOne: "Product experience shaped for photographers managing assets, workflows, and day-to-day production tasks",
        projectFourHighlightTwo: "Full-stack architecture built to support account flows, secure operations, and scalable product evolution",
        projectFourHighlightThree: "Operational layer for platform management, content control, and internal oversight without exposing business internals",
        projectFourHighlightFour: "Dedicated marketing surface focused on positioning, trust, SEO quality, and conversion readiness",
        projectFourPrivacy: "Public repos: frontend, backend, admin, and landing",
        projectFiveTag: "In progress · Travel platform",
        projectFiveTitle: "JourneyBook",
        projectFiveSummary: "Travel planning and storytelling product in active development, combining trip organization, memory capture, and a narrative layer around the overall journey experience.",
        projectFiveHighlightOne: "Structured trip planning designed to connect itinerary thinking, personal moments, and shareable travel stories",
        projectFiveHighlightTwo: "Output-oriented experience prepared for curated exports and future premium travel keepsakes",
        projectFiveHighlightThree: "Full-stack foundation shaped for bilingual delivery, maintainability, and progressive feature growth",
        projectFiveHighlightFour: "Release path prepared with production deployment standards and staged rollout discipline",
        projectFivePrivacy: "Repository link intentionally omitted",
        projectSixTag: "In progress · Route platform",
        projectSixTitle: "Mototrive",
        projectSixSummary: "Motorcycle route platform in active development, focused on premium discovery, rider-oriented UX, and a strong base for future route and community features.",
        projectSixHighlightOne: "Public-facing product direction with responsive shell, clear positioning, and growth-ready user experience",
        projectSixHighlightTwo: "Discovery and saved-route foundations designed for engaging browsing, selection, and return visits",
        projectSixHighlightThree: "Authentication, onboarding, and modular service structure prepared for a richer product lifecycle",
        projectSixHighlightFour: "Technical foundation aligned with mapping, monetization, and staged product hardening without exposing roadmap internals",
        projectSevenTag: "In progress · EdTech platform",
        projectSevenTitle: "Nautictest",
        projectSevenSummary: "Nautical exam preparation platform in development, structured around student progression, content administration, and a scalable educational architecture.",
        projectSevenHighlightOne: "Student experience designed around access, practice, progress visibility, and study continuity",
        projectSevenHighlightTwo: "Administrative surface planned for structured content management and long-term product governance",
        projectSevenHighlightThree: "Secure backend foundation prepared for roles, permissions, and robust validation standards",
        projectSevenHighlightFour: "Data model designed for traceability, content growth, and future regional expansion",
        projectEightTag: "In progress · Association platform",
        projectEightTitle: "AFJO",
        projectEightSummary: "Modular digital platform for a photography association, combining public site, member area, content management, galleries, events, publications, and admin workflows.",
        projectEightHighlightOne: "Public content architecture for pages, news, agenda, contests, publications, projects, and FAQs",
        projectEightHighlightTwo: "Private member and admin areas planned as a real CMS instead of a technical back office",
        projectEightHighlightThree: "Angular plus NestJS foundation with mobile-first design direction and Bootstrap-backed design system",
        projectEightHighlightFour: "Data model prepared for roles, galleries, documents, registrations, photographers, and scalable media management",
        galleryKicker: "Visual proof",
        galleryTitle: "Screens, flows, and product snapshots",
        galleryAside: "A selection of real captures from the products featured in this portfolio.",
        galleryCardOneTitle: "RF Travel Planner activities",
        galleryCardOneText: "Real trip view combining scheduled activities with mapped context and shared planning.",
        galleryCardTwoTitle: "RF Planner dashboard",
        galleryCardTwoText: "Daily execution view with focus metrics, weekly review, and practical personal planning signals.",
        galleryCardThreeTitle: "Stockfy operational dashboard",
        galleryCardThreeText: "Operational surface showing jobs, uploads, sales, and workflow structure inside the product.",
        galleryCardFourTitle: "JourneyBook landing",
        galleryCardFourText: "Editorial entry point positioning the product around stories, PDFs, and printed books.",
        galleryCardFiveTitle: "Verge hero section",
        galleryCardFiveText: "Public-facing hero section designed for conversion clarity, product framing, and a clean SaaS presentation.",
        galleryCardSixTitle: "RF Planner mobile composition",
        galleryCardSixText: "Three mobile views combined to show how planning, task control, and everyday execution translate into a compact product flow.",
        galleryCardSevenTitle: "RF Travel Planner mobile composition",
        galleryCardSevenText: "Three mobile captures grouped into one travel-focused composition to present the app as a cohesive mobile experience.",
        galleryImageOneAlt: "Travel planner activities screen with map",
        galleryImageTwoAlt: "RF Planner dashboard screen",
        galleryImageThreeAlt: "Stockfy dashboard screen",
        galleryImageFourAlt: "JourneyBook landing screen",
        galleryImageFiveAlt: "Verge landing screen",
        galleryImageSixAlt: "RF Planner mobile screen one",
        galleryImageSevenAlt: "RF Planner mobile screen two",
        galleryImageEightAlt: "RF Planner mobile screen three",
        galleryImageNineAlt: "RF Travel Planner mobile screen one",
        galleryImageTenAlt: "RF Travel Planner mobile screen two",
        galleryImageElevenAlt: "RF Travel Planner mobile screen three",
        approachKicker: "Approach",
        approachTitle: "What this portfolio communicates",
        approachCardOneTitle: "Product overview",
        approachCardOneText: "Clear explanation of what the application does, who it serves, and why it matters.",
        approachCardTwoTitle: "Technical proof",
        approachCardTwoText: "Concrete implementation highlights that show engineering depth without leaking private code.",
        approachCardThreeTitle: "Release signals",
        approachCardThreeText: "Live demos, version milestones, screenshots, and quality improvements that make the work credible.",
        experienceKicker: "Experience & training",
        experienceTitle: "How I build and keep learning",
        experienceAside: "Selected delivery strengths plus the training path behind them.",
        experienceStageOne: "Discovery and product framing",
        experienceCardOneTitle: "Translate needs into a usable roadmap",
        experienceCardOneText: "I define the product shape, identify the critical flows, and prioritize what should reach production first.",
        experienceStageTwo: "Frontend systems and UI delivery",
        experienceCardTwoTitle: "Build interfaces that survive real use",
        experienceCardTwoText: "Responsive layouts, edge-case handling, mobile refinements, and product details that make the app feel finished.",
        experienceStageThree: "Integration and release hardening",
        experienceCardThreeTitle: "Connect backend flows and ship responsibly",
        experienceCardThreeText: "Authentication, permissions, persisted states, deployment readiness, and pragmatic release-quality fixes.",
        experienceStageFour: "Training and upskilling",
        experienceCardFourTitle: "Current frontend training with transparent academic background",
        experienceCardFourText: "2024 bootcamp at IT Academy Barcelona focused on Angular, TypeScript, JavaScript, HTML, and CSS. Earlier Software Engineering studies at UNED were completed to roughly 60%, included here honestly as part of the path rather than as a finished degree.",
        techKicker: "Core stack",
        techTitle: "Tools I work with most",
        techDelivery: "Product Delivery",
        contactKicker: "Contact",
        contactTitle: "Interested in working together?",
        contactText: "If you want to discuss a product, collaboration, or freelance opportunity, email is the fastest way to reach me. Private repositories can be discussed directly once there is context and fit.",
        copyButton: "Copy email",
        copySuccess: "Copied",
        copyError: "Copy failed",
        contactNote: "Direct email for collaborations, freelance work, or product discussions."
    },
    es: {
        pageTitle: "Rafa Fernandez | Constructor de Productos Web",
        pageDescription: "Portfolio público de Rafa Fernandez con productos seleccionados, detalles técnicos y experiencia de entrega sin exponer repositorios privados.",
        navProjects: "Proyectos",
        navGallery: "Galería",
        navExperience: "Experiencia",
        navContact: "Contacto",
        heroTitle: "Construyendo productos digitales pulidos.",
        heroText: "Diseño y lanzo productos web con un foco fuerte en usabilidad, ejecución frontend responsive y entrega full-stack pragmática. Este portfolio muestra qué hace cada producto, qué resolví y cómo fue construido.",
        heroPrimaryCta: "Ver proyectos seleccionados",
        proofLabelOne: "Caso real",
        proofTextOne: "Producto publicado con usuarios reales, código privado y prueba pública.",
        proofLabelTwo: "Posicionamiento",
        proofStrongTwo: "Resultados públicos, código privado",
        proofTextTwo: "El portfolio se centra en el valor entregado, la profundidad técnica y la preparación para publicar.",
        focusLabel: "Foco actual",
        focusOne: "Aplicaciones web orientadas a producto",
        focusTwo: "Interfaces responsive para escritorio y móvil",
        focusThree: "Endurecimiento PWA y preparación para release",
        focusFour: "Auth, permisos y flujos apoyados en Supabase",
        statOne: "Producto publicado ya en producción",
        statTwoTitle: "Privado",
        statTwo: "El código fuente se mantiene privado cuando la lógica de negocio debe seguir interna",
        signalOneTitle: "Casos de estudio",
        signalOneText: "Cada proyecto se presenta como una historia de producto, no como un volcado bruto del repositorio.",
        signalTwoTitle: "Privacidad por diseño",
        signalTwoText: "Suficiente detalle técnico para demostrar capacidad, sin filtrar implementación sensible.",
        introKicker: "Por qué funciona este formato",
        introTitle: "Muestra el valor, no las tripas del repositorio.",
        introText: "Cada caso destaca el objetivo del producto, la experiencia entregada y los retos técnicos resueltos. Eso da a recruiters, clientes o colaboradores suficiente evidencia para evaluar el trabajo sin necesitar acceso a los repositorios privados.",
        projectsKicker: "Proyectos seleccionados",
        projectsTitle: "Trabajo destacado",
        filterAll: "Todos",
        filterReleased: "Publicado",
        filterProgress: "En curso",
        projectOneTag: "Publicado · Código privado",
        projectOneSummary: "Aplicación web colaborativa para organizar viajes con gestión de itinerarios, presupuesto grupal, liquidaciones, documentos y soporte PWA instalable.",
        projectOneHighlightOne: "Colaboración entre organizador y miembros con invitaciones y flujos según rol",
        projectOneHighlightTwo: "Herramientas financieras de grupo con bote común, pagos pendientes, liquidación y analítica",
        projectOneHighlightThree: "Documentos del viaje, vista previa en app, exportación PDF y refinamientos mobile-first en producción",
        projectOneHighlightFour: "Soporte PWA con manifest, iconos, service worker y fallback offline",
        projectOnePrivate: "Código fuente privado",
        projectTwoTag: "Publicado · Repo público",
        projectSlot: "Espacio para caso",
        projectTwoTitle: "RF Planner",
        projectTwoSummary: "Aplicación de planificación estratégica y ejecución personal para web y Android, construida alrededor de proyectos, tareas, Gantt, horarios, notas, seguimiento del tiempo y sincronización multidispositivo.",
        projectTwoHighlightOne: "Planificación estratégica, Kanban operativo, horarios, notas y seguimiento personal en un solo flujo",
        projectTwoHighlightTwo: "Arquitectura de sync con Supabase combinada con persistencia local-first y documentación de releases",
        projectTwoHighlightThree: "Entrega en web y Android con Capacitor, interfaz multilenguaje y disciplina de QA/release",
        projectTwoHighlightFour: "Herramientas DEV, gestión de contenido legal y planes de verificación de persistencia dentro del ciclo del producto",
        projectTwoPrivacy: "Producto web y Android con código público",
        projectThreeTag: "Publicado · Repo público",
        projectThreeTitle: "Verge Landing Page",
        projectThreeSummary: "Template de landing en Angular para SaaS y productos digitales, diseñado con secciones modulares, soporte SEO, preparación SSR y presentación orientada a conversión.",
        projectThreeHighlightOne: "Arquitectura Angular standalone con hero, pricing, products, testimonials, FAQ y páginas legales reutilizables",
        projectThreeHighlightTwo: "UI de marketing responsive con motion AOS, toggle de pricing, navegación por anclas y metadatos SEO por ruta",
        projectThreeHighlightThree: "Setup preparado para SSR con Angular Universal y demo pública en Vercel para validación rápida",
        projectThreePrivacy: "Repositorio público disponible en GitHub",
        projectFourTag: "Ecosistema de plataforma · Multi-repo",
        projectFourTitle: "Stockfy",
        projectFourSummary: "Plataforma SaaS para fotógrafos de stock, presentada como un ecosistema de producto con experiencia pública, flujos operativos clave y un enfoque listo para negocio.",
        projectFourHighlightOne: "Experiencia de producto pensada para fotógrafos que gestionan activos, flujos de trabajo y tareas operativas del día a día",
        projectFourHighlightTwo: "Arquitectura full-stack preparada para soportar cuentas, operaciones seguras y evolución escalable del producto",
        projectFourHighlightThree: "Capa operativa para gestión de plataforma, control de contenido y supervisión interna sin exponer lógica sensible",
        projectFourHighlightFour: "Superficie de marketing dedicada al posicionamiento, la confianza, la calidad SEO y la preparación para conversión",
        projectFourPrivacy: "Repos públicos: frontend, backend, admin y landing",
        projectFiveTag: "En curso · Plataforma de viajes",
        projectFiveTitle: "JourneyBook",
        projectFiveSummary: "Producto de planificación de viajes y storytelling en desarrollo activo, que combina organización del viaje, captura de recuerdos y una capa narrativa sobre la experiencia completa.",
        projectFiveHighlightOne: "Planificación estructurada del viaje para conectar itinerario, momentos personales y relato compartible",
        projectFiveHighlightTwo: "Experiencia orientada a salidas curadas y futuros formatos premium ligados al recuerdo del viaje",
        projectFiveHighlightThree: "Base full-stack preparada para entrega bilingüe, mantenibilidad y crecimiento progresivo de funcionalidades",
        projectFiveHighlightFour: "Camino de release preparado con estándares de despliegue y disciplina de salida por fases",
        projectFivePrivacy: "Enlace al repositorio omitido intencionadamente",
        projectSixTag: "En curso · Plataforma de rutas",
        projectSixTitle: "Mototrive",
        projectSixSummary: "Plataforma de rutas para motoristas en desarrollo activo, centrada en discovery premium, UX orientada al rider y una base sólida para futuras funciones de rutas y comunidad.",
        projectSixHighlightOne: "Dirección de producto pública con shell responsive, posicionamiento claro y experiencia preparada para crecer",
        projectSixHighlightTwo: "Base de discovery y rutas guardadas pensada para exploración atractiva, selección y retorno al producto",
        projectSixHighlightThree: "Autenticación, onboarding y estructura modular de servicios preparadas para un ciclo de producto más rico",
        projectSixHighlightFour: "Fundación técnica alineada con mapas, monetización y endurecimiento progresivo sin exponer detalles sensibles del roadmap",
        projectSevenTag: "En curso · Plataforma EdTech",
        projectSevenTitle: "Nautictest",
        projectSevenSummary: "Plataforma de preparación de exámenes náuticos en desarrollo, estructurada alrededor de progresión del alumno, administración de contenido y una arquitectura educativa escalable.",
        projectSevenHighlightOne: "Experiencia de alumno planteada para acceso, práctica, visibilidad del progreso y continuidad de estudio",
        projectSevenHighlightTwo: "Superficie administrativa pensada para gestión estructurada del contenido y gobierno del producto a largo plazo",
        projectSevenHighlightThree: "Base backend segura preparada para roles, permisos y estándares sólidos de validación",
        projectSevenHighlightFour: "Modelo de datos diseñado para trazabilidad, crecimiento del contenido y expansión regional futura",
        projectEightTag: "En curso · Plataforma asociativa",
        projectEightTitle: "AFJO",
        projectEightSummary: "Plataforma digital modular para una asociación fotográfica que combina web pública, área de socios, gestión de contenidos, galerías, eventos, publicaciones y flujos de administración.",
        projectEightHighlightOne: "Arquitectura de contenido público para páginas, noticias, agenda, concursos, publicaciones, proyectos y FAQs",
        projectEightHighlightTwo: "Áreas privada y admin planteadas como un CMS real y no como un simple panel técnico",
        projectEightHighlightThree: "Base Angular más NestJS con dirección visual mobile-first y design system apoyado en Bootstrap",
        projectEightHighlightFour: "Modelo de datos preparado para roles, galerías, documentos, inscripciones, fotógrafos y gestión escalable de medios",
        galleryKicker: "Prueba visual",
        galleryTitle: "Pantallas, flujos y capturas de producto",
        galleryAside: "Una selección de capturas reales de los productos destacados en este portfolio.",
        galleryCardOneTitle: "Actividades de RF Travel Planner",
        galleryCardOneText: "Vista real del viaje que combina actividades programadas con contexto en mapa y planificación compartida.",
        galleryCardTwoTitle: "Dashboard de RF Planner",
        galleryCardTwoText: "Vista de ejecución diaria con métricas de foco, revisión semanal y señales prácticas de planificación personal.",
        galleryCardThreeTitle: "Dashboard operativo de Stockfy",
        galleryCardThreeText: "Superficie operativa que muestra jobs, uploads, ventas y estructura del workflow dentro del producto.",
        galleryCardFourTitle: "Landing de JourneyBook",
        galleryCardFourText: "Punto de entrada editorial que posiciona el producto alrededor de historias, PDFs y libros impresos.",
        galleryCardFiveTitle: "Hero de Verge",
        galleryCardFiveText: "Sección hero orientada a conversión, encuadre del producto y una presentación SaaS limpia.",
        galleryCardSixTitle: "Composición mobile de RF Planner",
        galleryCardSixText: "Tres vistas móviles combinadas para mostrar cómo la planificación, el control de tareas y la ejecución diaria se traducen en un flujo compacto de producto.",
        galleryCardSevenTitle: "Composición mobile de RF Travel Planner",
        galleryCardSevenText: "Tres capturas móviles agrupadas en una sola composición para presentar la app como una experiencia móvil cohesionada.",
        galleryImageOneAlt: "Pantalla de actividades del viaje con mapa",
        galleryImageTwoAlt: "Pantalla del dashboard de RF Planner",
        galleryImageThreeAlt: "Pantalla del dashboard de Stockfy",
        galleryImageFourAlt: "Pantalla de la landing de JourneyBook",
        galleryImageFiveAlt: "Pantalla de la landing de Verge",
        galleryImageSixAlt: "Primera pantalla móvil de RF Planner",
        galleryImageSevenAlt: "Segunda pantalla móvil de RF Planner",
        galleryImageEightAlt: "Tercera pantalla móvil de RF Planner",
        galleryImageNineAlt: "Primera pantalla móvil de RF Travel Planner",
        galleryImageTenAlt: "Segunda pantalla móvil de RF Travel Planner",
        galleryImageElevenAlt: "Tercera pantalla móvil de RF Travel Planner",
        approachKicker: "Enfoque",
        approachTitle: "Qué comunica este portfolio",
        approachCardOneTitle: "Visión de producto",
        approachCardOneText: "Explicación clara de qué hace la aplicación, a quién sirve y por qué importa.",
        approachCardTwoTitle: "Prueba técnica",
        approachCardTwoText: "Highlights concretos de implementación que muestran profundidad de ingeniería sin filtrar código privado.",
        approachCardThreeTitle: "Señales de release",
        approachCardThreeText: "Demos, hitos de versión, capturas y mejoras de calidad que hacen creíble el trabajo.",
        experienceKicker: "Experiencia y formación",
        experienceTitle: "Cómo construyo y sigo formándome",
        experienceAside: "Fortalezas de entrega seleccionadas junto con la formación que hay detrás.",
        experienceStageOne: "Descubrimiento y definición de producto",
        experienceCardOneTitle: "Traduzco necesidades en una hoja de ruta usable",
        experienceCardOneText: "Defino la forma del producto, detecto los flujos críticos y priorizo lo que debe llegar antes a producción.",
        experienceStageTwo: "Sistemas frontend y entrega visual",
        experienceCardTwoTitle: "Construyo interfaces que resisten el uso real",
        experienceCardTwoText: "Layouts responsive, manejo de casos límite, refinamientos móviles y detalles de producto que hacen que la app se sienta terminada.",
        experienceStageThree: "Integración y endurecimiento de release",
        experienceCardThreeTitle: "Conecto backend y publico con criterio",
        experienceCardThreeText: "Autenticación, permisos, estados persistidos, preparación de despliegue y fixes pragmáticos de calidad de release.",
        experienceStageFour: "Formación y actualización",
        experienceCardFourTitle: "Formación frontend actual con contexto académico transparente",
        experienceCardFourText: "Bootcamp realizado en 2024 en IT Academy Barcelona centrado en Angular, TypeScript, JavaScript, HTML y CSS. Estudios previos de Ingeniería de Software en la UNED completados aproximadamente al 60 %, incluidos de forma honesta como parte del recorrido y no como titulación finalizada.",
        techKicker: "Stack principal",
        techTitle: "Herramientas con las que trabajo más",
        techDelivery: "Entrega de producto",
        contactKicker: "Contacto",
        contactTitle: "¿Te interesa trabajar conmigo?",
        contactText: "Si quieres hablar de un producto, una colaboración o una oportunidad freelance, el email es la vía más rápida para contactarme. Los repositorios privados se pueden comentar directamente cuando haya contexto y encaje.",
        copyButton: "Copiar email",
        copySuccess: "Copiado",
        copyError: "Error al copiar",
        contactNote: "Email directo para colaboraciones, trabajo freelance o conversaciones sobre producto."
    }
};

const chips = document.querySelectorAll(".chip");
const projectCards = document.querySelectorAll(".project-card");
const revealItems = document.querySelectorAll(".reveal");
const copyButton = document.querySelector(".copy-button");
const langButtons = document.querySelectorAll(".lang-button");
const metaDescription = document.querySelector('meta[name="description"]');
const scrollTopButton = document.querySelector(".scroll-top-button");

function applyTranslations(lang) {
    const content = translations[lang];

    document.documentElement.lang = lang;
    document.title = content.pageTitle;

    if (metaDescription) {
        metaDescription.setAttribute("content", content.pageDescription);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const value = content[key];

        if (typeof value === "string") {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.dataset.i18nAlt;
        const value = content[key];

        if (typeof value === "string") {
            element.setAttribute("alt", value);
        }
    });

    if (copyButton) {
        copyButton.dataset.currentLang = lang;
    }

    langButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });
}

if (chips.length > 0) {
    chips.forEach((chip) => {
        chip.addEventListener("click", () => {
            const filter = chip.dataset.filter;

            chips.forEach((item) => item.classList.remove("active"));
            chip.classList.add("active");

            projectCards.forEach((card) => {
                const matches = filter === "all" || card.dataset.status === filter;
                card.classList.toggle("is-hidden", !matches);
            });
        });
    });
}

if ("IntersectionObserver" in window && revealItems.length > 0) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.18 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (copyButton) {
    copyButton.addEventListener("click", async () => {
        const lang = copyButton.dataset.currentLang || "en";
        const localized = translations[lang];
        const originalText = localized.copyButton;
        const copyValue = lang === "es" ? copyButton.dataset.copyEs : copyButton.dataset.copyEn;

        if (!copyValue) {
            return;
        }

        try {
            await navigator.clipboard.writeText(copyValue);
            copyButton.classList.add("is-copied");
            copyButton.textContent = localized.copySuccess;
            window.setTimeout(() => {
                copyButton.classList.remove("is-copied");
                copyButton.textContent = originalText;
            }, 1600);
        } catch {
            copyButton.textContent = localized.copyError;
            window.setTimeout(() => {
                copyButton.textContent = originalText;
            }, 1600);
        }
    });
}

if (langButtons.length > 0) {
    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const lang = button.dataset.lang || "en";
            applyTranslations(lang);
            window.localStorage.setItem("portfolio-language", lang);
        });
    });
}

if (scrollTopButton) {
    const toggleScrollTopButton = () => {
        scrollTopButton.classList.toggle("is-visible", window.scrollY > 120);
    };

    scrollTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", toggleScrollTopButton, { passive: true });
    toggleScrollTopButton();
}

const savedLanguage = window.localStorage.getItem("portfolio-language");
const initialLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : "en";

applyTranslations(initialLanguage);