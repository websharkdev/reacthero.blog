import { LanguageProps } from 'shared/types/home'

const getStoreLocal = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name)
    return ls ? JSON.parse(ls) : null
  }
  return null
}

export default getStoreLocal

export const getLanguageLocal = (setLanguage: (language: LanguageProps) => void) => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    const LSLanguage: LanguageProps = window!.localStorage!.getItem('language_folio')!
    setLanguage(LSLanguage)
  }
}
