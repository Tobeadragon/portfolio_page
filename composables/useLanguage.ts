import { ref } from 'vue'

export const useLanguage = () => {
  const language = ref('de') // デフォルトはドイツ語

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
        skills: 'Fähigkeiten',
        frontend: 'Frontend',
        backend: 'Backend',
        other: 'Sonstiges',
        qa: 'Qualitätssicherung',
        featuredProjects: 'Ausgewählte Projekte',
        viewProject: 'Projekt ansehen'
      },
      about: {
        title: 'Über mich',
        experience: 'Erfahrung',
        seniorDev: 'Senior Web-Entwickler',
        webDev: 'Web-Entwickler'
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
        skills: 'Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        other: 'Other',
        qa: 'Quality Assurance',
        featuredProjects: 'Featured Projects',
        viewProject: 'View Project'
      },
      about: {
        title: 'About Me',
        experience: 'Experience',
        seniorDev: 'Senior Web Developer',
        webDev: 'Web Developer'
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
        skills: '技術スキル',
        frontend: 'フロントエンド',
        backend: 'バックエンド',
        other: 'その他',
        qa: '品質保証',
        featuredProjects: '注目のプロジェクト',
        viewProject: 'プロジェクトを見る'
      },
      about: {
        title: '私について',
        experience: '経歴',
        seniorDev: 'シニアWeb開発者',
        webDev: 'Web開発者'
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