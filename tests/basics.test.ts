import { generateStyles as tw } from '../src'

test('just getting started...', () => {

  /** this will translate tailwind classes into react native styles, true will log the resulting stylesheet props */
  console.log(tw('items-center p-2 m rounded bg-white', true))

  /** these two will make a button with background of white and text of black */
  console.log(tw('text-center p-2 text-black', true))

  /**
   * using an invalid class name or name that doesnt exist will result in error messages in console
   * you'll see an log message like:
   * 🐞 no style translation for tailwind className invalid-prop
   * */
  console.log(tw('invalid-prop shadow'))

  const output = tw('items-center p-2 m rounded bg-white')
  // padding of 2 means .5rem which equates to 8 pixels
  expect(output.padding).toBe(8)
})
