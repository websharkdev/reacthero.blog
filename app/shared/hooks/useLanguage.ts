import { useContext, useEffect } from 'react'
import { LanguageProps } from 'shared/types/home'

import { UserLanguageContext } from '@/components/layout/Layout'

import { getLanguageLocal } from '@/utils/localStorage'

type Props = {
  dataEN: any
  dataRU: any
  setData: any
  language: LanguageProps
  setLanguage: (language: LanguageProps) => void
}

export const useLanguage = ({ dataEN, dataRU, setData, language, setLanguage }: Props) => {
  const languageProps = useContext(UserLanguageContext)
  useEffect(() => {
    getLanguageLocal(setLanguage)
  }, [languageProps.language])

  useEffect(() => {
    // languageProps?.setLanguage(language)

    switch (language) {
      case 'en':
        setData(dataEN)
        break
      case 'ru':
        setData(dataRU)
        break

      default:
        break
    }
  }, [language])
}
