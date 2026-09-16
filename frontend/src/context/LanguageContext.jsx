import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

const supportedLanguages = ['en', 'ml', 'hi']

function detectBrowserLanguage() {
  const browserLanguage =
    navigator.language?.toLowerCase() || 'en'

  if (browserLanguage.startsWith('ml')) {
    return 'ml'
  }

  if (browserLanguage.startsWith('hi')) {
    return 'hi'
  }

  return 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('kc-language')

    if (
      savedLanguage &&
      supportedLanguages.includes(savedLanguage)
    ) {
      return savedLanguage
    }

    return detectBrowserLanguage()
  })

  useEffect(() => {
    localStorage.setItem('kc-language', language)

    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        supportedLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider',
    )
  }

  return context
}