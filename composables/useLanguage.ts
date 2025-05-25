import { ref } from 'vue'

export const useLanguage = () => {
  // 言語の状態をリアクティブに保持
  const language = useState('language', () => 'de')

  const translations = {
    de: {
      nav: {
        home: 'Startseite',
        projects: 'Projekte',
        about: 'Über mich',
        contact: 'Kontakt'
      },
      home: {
        title: 'Web-Entwickler Portfolio',
        subtitle: 'Als Full-Stack-Entwickler biete ich innovative Lösungen',
        contactButton: 'Kontaktieren Sie mich',
        viewProjectsButton: 'Projekte ansehen',
        skills: 'Fähigkeiten',
        frontend: 'Frontend',
        backend: 'Backend',
        other: 'Sonstiges',
        qa: 'Qualitätssicherung',
        pcSupport: 'PC-Support',
        featuredProjects: 'Ausgewählte Projekte',
        viewProject: 'Projekt ansehen',
        profile: {
          name: 'Tatsuya Yamashita',
          title: 'Full-Stack-Entwickler',
          socialLinks: {
            github: 'GitHub Profil',
            linkedin: 'LinkedIn Profil',
            email: 'E-Mail senden'
          }
        }
      },
      projects: {
        ecommerce: {
          title: 'E-Commerce Plattform',
          description: 'Moderne E-Commerce-Plattform entwickelt mit React, Node.js und MongoDB.'
        },
        taskManager: {
          title: 'Aufgabenverwaltung',
          description: 'Echtzeit-Aufgabenverwaltungsanwendung mit Vue.js und Firebase.'
        },
        weather: {
          title: 'Wettervorhersage-App',
          description: 'Wettervorhersage-Anwendung mit Nuxt.js, TailwindCSS und OpenWeather API.'
        },
        blog: {
          title: 'Blog-Plattform',
          description: 'Blog-Plattform mit Next.js, Prisma und PostgreSQL.'
        }
      },
      about: {
        intro: {
          p1: 'Hallo! Ich bin ein Full-Stack-Webentwickler mit über 5 Jahren Erfahrung. Ich bin leidenschaftlich daran interessiert, benutzerfreundliche und effiziente Webanwendungen zu entwickeln.',
          p2: 'Ich halte mich stets über die neuesten Technologietrends auf dem Laufenden und strebe nach kontinuierlichem Lernen und Wachstum. Ich habe umfangreiche Erfahrung in der Teamarbeit und bin versiert im Projektmanagement mit agilen Entwicklungsmethoden.',
          p3: 'In meiner Freizeit schreibe ich technische Blogs und trage zu Open-Source-Projekten bei. Ich möchte durch die Weitergabe an die Community zur technologischen Entwicklung beitragen.'
        },
        experience: {
          senior: {
            company: 'Tech GmbH',
            period: '2020 - Heute',
            tasks: [
              'Entwicklung und Design von großen Webanwendungen',
              'Leitung eines Teams von 5 Entwicklern',
              'Einführung von Microservices-Architektur'
            ]
          },
          developer: {
            company: 'Startup GmbH',
            period: '2018 - 2020',
            tasks: [
              'Entwicklung und Wartung neuer Dienste',
              'Performance-Optimierung',
              'Verbesserung der Benutzererfahrung'
            ]
          }
        }
      },
      contact: {
        title: 'Kontakt',
        name: 'Name',
        email: 'E-Mail',
        subject: 'Betreff',
        message: 'Nachricht',
        send: 'Senden',
        sending: 'Wird gesendet...',
        success: 'Nachricht erfolgreich gesendet.',
        error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        projects: 'Projects',
        about: 'About',
        contact: 'Contact'
      },
      home: {
        title: 'Web Developer Portfolio',
        subtitle: 'Providing innovative solutions as a full-stack developer',
        contactButton: 'Contact Me',
        viewProjectsButton: 'View Projects',
        skills: 'Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        other: 'Other',
        qa: 'Quality Assurance',
        pcSupport: 'PC Support',
        featuredProjects: 'Featured Projects',
        viewProject: 'View Project',
        profile: {
          name: 'Tatsuya Yamashita',
          title: 'Full-stack Developer',
          socialLinks: {
            github: 'GitHub Profile',
            linkedin: 'LinkedIn Profile',
            email: 'Send Email'
          }
        }
      },
      projects: {
        ecommerce: {
          title: 'E-Commerce Platform',
          description: 'Modern e-commerce platform built with React, Node.js, and MongoDB.'
        },
        taskManager: {
          title: 'Task Management App',
          description: 'Real-time task management application with Vue.js and Firebase.'
        },
        weather: {
          title: 'Weather Forecast App',
          description: 'Weather forecast application using Nuxt.js, TailwindCSS, and OpenWeather API.'
        },
        blog: {
          title: 'Blog Platform',
          description: 'Blog platform built with Next.js, Prisma, and PostgreSQL.'
        }
      },
      about: {
        intro: {
          p1: 'Hello! I am a full-stack web developer with over 5 years of experience. I am passionate about developing user-friendly and efficient web applications.',
          p2: 'I stay up-to-date with the latest technology trends and strive for continuous learning and growth. I have extensive experience in team development and am proficient in project management using agile development methods.',
          p3: 'In my free time, I write technical blogs and contribute to open-source projects. I want to contribute to technological development through giving back to the community.'
        },
        experience: {
          senior: {
            company: 'Tech Corp',
            period: '2020 - Present',
            tasks: [
              'Development and design of large web applications',
              'Leading a team of 5 developers',
              'Implementation of microservices architecture'
            ]
          },
          developer: {
            company: 'Startup Inc',
            period: '2018 - 2020',
            tasks: [
              'Development and maintenance of new services',
              'Performance optimization',
              'Improvement of user experience'
            ]
          }
        }
      },
      contact: {
        title: 'Contact',
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        sending: 'Sending...',
        success: 'Message sent successfully.',
        error: 'Failed to send message. Please try again later.'
      }
    },
    ja: {
      nav: {
        home: 'ホーム',
        projects: 'プロジェクト',
        about: '自己紹介',
        contact: 'お問い合わせ'
      },
      home: {
        title: 'Web開発者ポートフォリオ',
        subtitle: 'フルスタック開発者として革新的なソリューションを提供',
        contactButton: 'お問い合わせ',
        viewProjectsButton: 'プロジェクトを見る',
        skills: '技術スキル',
        frontend: 'フロントエンド',
        backend: 'バックエンド',
        other: 'その他',
        qa: '品質保証',
        pcSupport: 'PCサポート',
        featuredProjects: '注目のプロジェクト',
        viewProject: 'プロジェクトを見る',
        profile: {
          name: '山下竜也',
          title: 'フルスタック開発者',
          socialLinks: {
            github: 'GitHubプロフィール',
            linkedin: 'LinkedInプロフィール',
            email: 'メールを送る'
          }
        }
      },
      projects: {
        ecommerce: {
          title: 'Eコマースプラットフォーム',
          description: 'React、Node.js、MongoDBを使用した最新のEコマースプラットフォーム'
        },
        taskManager: {
          title: 'タスク管理アプリ',
          description: 'Vue.jsとFirebaseを使用したリアルタイムタスク管理アプリケーション'
        },
        weather: {
          title: '天気予報アプリ',
          description: 'Nuxt.js、TailwindCSS、OpenWeather APIを使用した天気予報アプリケーション'
        },
        blog: {
          title: 'ブログプラットフォーム',
          description: 'Next.js、Prisma、PostgreSQLを使用したブログプラットフォーム'
        }
      },
      about: {
        intro: {
          p1: 'こんにちは！私はフルスタックWeb開発者として、5年以上の経験を持っています。ユーザーフレンドリーで効率的なWebアプリケーションの開発に情熱を注いでいます。',
          p2: '最新の技術トレンドに常にアンテナを張り、継続的な学習と成長を心がけています。チーム開発での経験も豊富で、アジャイル開発手法を用いたプロジェクト管理も得意としています。',
          p3: '趣味は技術ブログの執筆とオープンソースプロジェクトへの貢献です。コミュニティへの還元を通じて、技術の発展に貢献したいと考えています。'
        },
        experience: {
          senior: {
            company: 'テック株式会社',
            period: '2020年 - 現在',
            tasks: [
              '大規模Webアプリケーションの設計と開発',
              'チームリーダーとして5名のデベロッパーを指導',
              'マイクロサービスアーキテクチャの導入'
            ]
          },
          developer: {
            company: 'スタートアップ株式会社',
            period: '2018年 - 2020年',
            tasks: [
              '新規サービスの開発と運用',
              'パフォーマンス最適化',
              'ユーザー体験の改善'
            ]
          }
        }
      },
      contact: {
        title: 'お問い合わせ',
        name: 'お名前',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        send: '送信する',
        sending: '送信中...',
        success: 'メッセージが正常に送信されました。',
        error: 'メッセージの送信に失敗しました。後でもう一度お試しください。'
      }
    }
  }

  const setLanguage = (lang: 'de' | 'en' | 'ja') => {
    language.value = lang
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let value = translations[language.value]
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        return key
      }
    }
    
    return value
  }

  return {
    language,
    setLanguage,
    t
  }
} 