import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          contact: {
            title: 'Contact me!',
            intro: 'I\'d love to discuss how we can work together and take your project to the next level.',
            name: 'Type your name *',
            nameTitle: 'Name accepts only letters and blanks.',
            email: 'Type your email *',
            emailTitle: 'Please enter a valid email address.',
            comments: 'Leave me your comments *',
            send: 'Send message',
            response: 'Thank you very much, I will get back to you asap.',
            error: 'An error has occurred. Please try again later.'
          },
          footer: {
            copyright: 'Made with ❤️ by'
          },
          navigation: {
            title: 'Select an option',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
          },
          resume: {
            button: 'Check out my resume',
            servinformacion: { 
              start: '08/2025',
              end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
              },
              company: 'Servinformacion',
              location: 'Bogota, Colombia',
              title: 'Development Engineer',
              achievements: [
                'Led the development of multiple geomarketing platforms for clients in Brazil, Colombia, and Ecuador, implementing demographic analysis, advanced cartographic visualizations, and interactive dashboards with Vue.js and Google Maps API',
                'Designed and implemented automated deployment pipelines with Google Cloud Platform (App Engine), reducing deployment times and establishing versioning strategies for multiple development and production environments',
                'Established a comprehensive unit testing suite for a geomarketing application with over 76,000 lines of code, implementing QA strategies and increasing system reliability',
                'Conducted a thorough migration analysis from Vue.js 2 to 3 for a legacy project consisting of 177 components, documenting a complete modernization strategy with risk assessment and a phased implementation plan',
                'Google Cloud Platform professional certifications: Google Cloud Digital Leader Credential, Google Workspace Sales Credential, Google Cloud SecOps Sales Credential, Associate Cloud Engineer',
              ],
            },
            pai: { 
              start: '05/2021',
              end: '02/2025',
              company: 'Pai Suscriptions',
              location: 'Cuernavaca, Morelos. México',
              title: 'Frontend Developer / Remote Work',
              achievements: [
                'Migrated the main project’s styles from SASS to Tailwind CSS. This migration resulted in faster compilation, improved performance, and an optimized user experience.',
                'Identified and corrected multiple inconsistencies between Figma prototypes and implemented designs. These actions improved visual cohesion and facilitated better understanding for the end user.',
                'Reviewed and optimized the semantic structure of several projects, significantly improving the websites accessibility and SEO.',
                'Integrated Stripe Elements into several client projects, facilitating secure and efficient payment processes.',
                'Managed implementations using Laravel, InertiaJS, and VueJS, and effectively integrated data consumed from REST APIs.',
              ],
            },
            freelancer: {
              start: '04/2020',
              end: '05/2021',
              company: 'Freelancer',
              location: 'Bogotá, Colombia',
              title: 'Frontend Developer',
              achievements: [
                'Built app workflow and designed foundations and each component of the same.',
                'Implemented the application with with React JS and Redux.',
                'Generated Backend with NodeJS, Mongoose and Express',
                'Made complete project about Digital Menu for restaurants. I use stack HTML5, CSS3 and JavaScript. Mobile responsive.'
              ],
            },
          },
          home: {
            title: 'Hi, I´m Javier Moreno',
            subtitle: 'Software analysis and development Technologist, amateur cyclist and enthusiastic marathon runner',
            description: '{{experienceDuration}} of experience building and maintaining responsive and useful web applications, from Bogotá, Colombia.',
            description2: 'I’m a self-driven developer who brings structure and clarity to fast-paced environments. I focus on delivering measurable impact while continuously improving both technical and strategic skills.',
            contactMe: 'Contact me!',
            checkResume: 'Check out my resume'
          },
          work: { 
            title: 'Work'
          }, 
          projects: {
            title: 'Some things I’ve done...',
            intro: 'I’ve worked on variety of projects over the years but these are the ones that I’m most proud of. Although, some of them doesn\'t exist; others I\'m working on them right now. Please, check out the code and contribute if you have ideas for how it can be improved.',
            cvPlast: {
              name: 'CV Plast S.A.S',
              description: 'CV Plast will be an e-commerce for the sale of products from the agroindustry. Developed with NextJS, TailwindCSS, React, Zustand. Developing.',
              link: {
                href: 'https://github.com/javiermorenoco/cvplast',
                label: 'cvplast.com',
              }
            },
            zzardin: {
              name: 'Zzardin International S.A.S',
              description: 'E-commerce project for the sale of lingerie for women. Developed with React, MongoDB, NodeJS, Express and TailwindCSS. With payment gateway, user login and administration system. Not active currently.',
              link: {
                href: 'https://github.com/javiermorenoco/zzardin',
                label: 'github.com/javiermorenoco/zzardin',
              }
            },
            arrozPaisaRexton: {
              name: 'Arroz Paisa Rexton',
                description: 'Digital Menu for a restaurant. Responsive design. +2000 active users, HTML5, CSS3 and JavaScript',
              link: {
                href: 'https://arrozpaisarexton.com/',
                label: 'arrozpaisarexton.com',
              }
            },
            eventApp: {
              name: 'EventApp',
              description: 'Event creation project developed with MERN stack, user login, choice of templates and administration dashboard. UI design. Awarded-winning educational project. Figma and Adobe XD.',
              link: {
                href: 'https://xd.adobe.com/view/2cb644e9-807c-4ab5-bf99-2db144f38b31-79e5/?fullscreen',
                label: 'Mockup developed with Adobe XD',
              }
            },
            pai: {
              name: 'Pai',
              description: 'HTML5 and CSS3 Layout exercise. Responsive design.',
              link: {
                href: 'https://javiermorenoco.github.io/pai-subscriptions/',
                label: 'pai-subscriptions',
              }
            },
            ipAddressTracker: {
              name: 'IP Address & Domain Tracker',
              description: 'Project to consume the geo.ipify.org/API, displaying the information entered in a map provided by Leaflet.',
              link: {
                href: 'https://ip-address-tracker-liart.vercel.app/',
                label: 'ip-address-tracker',
              }
            },
          },
        }
      },
      es: {
        translation: {
          contact: {
            title: '¡Contáctame!',
            intro: 'Me encantaría discutir cómo podemos trabajar juntos y llevar tu proyecto al siguiente nivel.',
            name: 'Escribe tu nombre *',
            nameTitle: 'El nombre debe contener solo letras y espacios.',
            email: 'Escribe tu email *',
            emailTitle: 'Por favor, introduce una dirección de correo electrónico válida.',
            comments: 'Deja tus comentarios *',
            send: 'Enviar mensaje',
            response: 'Muchas gracias, me pondré en contacto contigo lo más pronto posible.',
            error: 'Se ha producido un error. Por favor, inténtalo de nuevo más tarde.'
          },
          footer: {
            copyright: 'Hecho con ❤️ por'
          },
          navigation: {
            title: 'Selecciona una opción',
            about: 'Acerca de',
            projects: 'Proyectos',
            contact: 'Contacto'
          },
          resume: {
            button: 'Revisa mi currículum',
            servinformacion: { 
              start: '08/2025',
              end: {
                label: 'Presente',
                dateTime: new Date().getFullYear().toString(),
              },
              company: 'Servinformacion - Información Localizada S.A.S',
              location: 'Bogotá, Colombia',
              title: 'Ingeniero de Desarrollo',
              achievements: [
                'Lideré el desarrollo de múltiples plataformas de geomarketing para clientes en Brasil, Colombia y Ecuador, implementando análisis demográficos, visualizaciones cartográficas avanzadas y dashboards interactivos con Vue.js y Google Maps API',
                'Diseñé e implementé pipelines de despliegue automatizado con Google Cloud Platform (App Engine), reduciendo tiempos de deployment y estableciendo estrategias de versionamiento para múltiples entornos de desarrollo y producción',
                'Establecí suite completa de testing unitario para aplicación de geomarketing con más de 76,000 líneas de código, implementando estrategias de QA y aumentando la confiabilidad del sistema',
                'Realicé análisis exhaustivo de migración de Vue.js 2 a 3 para proyecto legacy de 177 componentes, documentando estrategia completa de modernización con evaluación de riesgos y plan de implementación por fases',
                'Certificaciones profesionales Google Cloud Platform: Google Cloud Digital Leader Credential, Google Workspace Sales Credential, Google Cloud SecOps Sales Credential, Associate Cloud Engineer',
              ],
            },
            pai: {
              start: '05/2021',
              end: {
                label: 'Presente',
                dateTime: new Date().getFullYear().toString(),
              },
              company: 'Pai Suscripciones',
              location: 'Cuernavaca, Morelos. México',
              title: 'Desarrollador frontend / Trabajo remoto',
              achievements: [
                'Migre los estilos del proyecto principal de SASS a Tailwind CSS. Esta migración resultó en una compilación más rápida, un mejor rendimiento y una experiencia de usuario optimizada.',
                'Identifiqué y corregí múltiples inconsistencias entre los prototipos de Figma y los diseños implementados. Estas acciones mejoraron la cohesión visual y facilitaron una mejor comprensión para el usuario final.',
                'Revisé y optimicé la estructura semántica de varios proyectos, mejorando significativamente la accesibilidad y el SEO de los sitios web.',
                'Integré Stripe Elements en varios proyectos de clientes, facilitando procesos de pago seguros y eficientes.',
                'Administré implementaciones utilizando Laravel, InertiaJS y VueJS, y integré con éxito datos consumidos de APIs REST.',
              ],
            },
            freelancer: {
              start: '04/2020',
              end: '05/2021',
              company: 'Freelancer',
              location: 'Bogotá, Colombia',
              title: 'Desarrollador frontend',
              achievements: [
                'Diseñé y construí el flujo de trabajo de la aplicación, así como los fundamentos y cada componente del mismo.',
                'Implementé la aplicación con React JS y Redux.',
                'Generé Backend con NodeJS, Mongoose y Express',
                'Realicé un proyecto completo sobre un Menú Digital para restaurantes. Utilicé stack HTML5, CSS3 y JavaScript. Mobile responsive.'
              ],
            },
          },
          home: {
            title: 'Hola, soy Javier Moreno',
            subtitle: 'Tecnólogo en Análisis y Desarrollo de Software, ciclista amateur y entusiasta de las carreras de maratón',
            description: '{{experienceDuration}} de experiencia en la construcción y mantenimiento de aplicaciones web responsivas y funcionales, de Bogotá, Colombia.',
            description2: 'Soy un desarrollador proactivo que aporta estructura y claridad a entornos dinámicos. Me centro en generar un impacto medible, mejorando continuamente mis habilidades técnicas y estratégicas.',
            contactMe: '¡Contáctame!',
            checkResume: 'Revisa mi currículum'
          },
          work: {
            title: 'Experiencia'
          }, 
          projects: {
            title: 'Algunos proyectos que he hecho...',
            intro: 'He trabajado en varios proyectos a lo largo de los años, pero estos son los que me siento más orgulloso. Aunque algunos no existen, otros los estoy desarrollando en este momento. Por favor, revisa el código y contribuye si tienes ideas para mejorarlo.',
            cvPlast: {
              name: 'CV Plast S.A.S',
              description: 'CV Plast será una e-commerce para la venta de productos de la agroindustria. Desarrollado con NextJS, TailwindCSS, React, Zustand. En desarrollo.',
              link: {
                href: 'https://github.com/javiermorenoco/cvplast',
                label: 'cvplast.com',
              }
            },
            zzardin: {
              name: 'Zzardin International S.A.S',
              description: 'Fue un proyecto de comercio electrónico para la venta de ropa interior femenina. Desarrollado con React, MongoDB, NodeJS, Express y TailwindCSS. Con pasarela de pago, login de usuario y sistema de administración. No activo actualmente.',
              link: {
                href: 'https://github.com/javiermorenoco/zzardin',
                label: 'github.com/javiermorenoco/zzardin',
              }
            },
            arrozPaisaRexton: {
              name: 'Arroz Paisa Rexton',
              description: 'Menú digital para restaurantes. Diseño responsivo. +2000 usuarios activos, HTML5, CSS3 y JavaScript',
              link: {
                href: 'https://arrozpaisarexton.com/',
                label: 'arrozpaisarexton.com',
              }
            },
            eventApp: {
              name: 'EventApp',
              description: 'Proyecto de creación de eventos desarrollado con MERN stack, login de usuario, elección de templates y dashboard de administración. Diseño UI. Proyecto educativo ganador. Figma y Adobe XD.',
              link: {
                href: 'https://xd.adobe.com/view/2cb644e9-807c-4ab5-bf99-2db144f38b31-79e5/?fullscreen',
                label: 'Mockup desarrollado con Adobe XD',
              }
            },
            pai: {
              name: 'Pai',
              description: 'Ejercicio de diseño de HTML5 y CSS3. Responsivo.',
              link: {
                href: 'https://javiermorenoco.github.io/pai-subscriptions/',
                label: 'pai-subscriptions',
              }
            },
            ipAddressTracker: {
              name: 'Rastreador de IP y dominio',
              description: 'Proyecto para consumir la API de geo.ipify.org/, mostrando la información ingresada en un mapa proporcionado por Leaflet.',
              link: {
                href: 'https://ip-address-tracker-liart.vercel.app/',
                label: 'ip-address-tracker',
              }
            },
          }
        }
      }
    },
    lng: "es", 
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;