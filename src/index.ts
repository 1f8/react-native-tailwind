// https://reactnative.dev/docs/stylesheet
// import { StyleSheet } from 'react-native'
import { cssProp, tailwind } from './tailwindTranslations'

export const generateStyles = (cssClasses:string, verbose=false):any => {
  const styles:cssProp = {}
  const classes = cssClasses.split(' ')
  for (let className of classes) {
    const style = getTranslation(className)
    if (style) {
      styles[style.key] = style.val
    } else {
      console.log('🐞 no style translation for tailwind className', className)
    }
  }
  if (verbose) console.log(styles)

  return styles
}

const getTranslation = (className:string) => {
  if (!translations.hasOwnProperty(className)) return ''
  return Object.entries(translations[className])
    .map(entry => ({
      key: entry[0],
      val: entry[1],
    }))[0]
}

const custom:Record<string, cssProp> = {
  'text-gray': { color : '#C5C5C5' },
  'text-gray-light': { color : '#F5F5F5' },
  'text-gray-dark': { color : '#7B7B7B' },
  'text-lime': { color : '#DBFD75' },
  'text-red': { color : '#E74040' },
  'text-green': { color : '#38784D' },
  'bg-gray': { backgroundColor : '#C5C5C5' },
  'bg-gray-light': { backgroundColor : '#F5F5F5' },
  'bg-gray-dark': { backgroundColor : '#7B7B7B' },
  'bg-lime': { backgroundColor : '#DBFD75' },
  'bg-red': { backgroundColor : '#E74040' },
  'bg-green': { backgroundColor : '#38784D' },
}

const translations:Record<string, cssProp> = {
  ...tailwind,
  ...custom,
}
