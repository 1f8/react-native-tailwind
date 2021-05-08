export type cssProp = Record<string, string|number>

export const tailwind:Record<string, cssProp> = {
  p:                { padding: 4 },
  'p-2':            { padding: 8 },
  'p-3':            { padding: 12 },
  'p-4':            { padding: 16 },
  px:               { paddingHorizontal: 4 },
  py:               { paddingVertical: 4 },
  m:                { margin: 4 },
  mx:               { marginHorizontal: 4 },
  my:               { marginVertical: 4 },
  'mb-30':          { marginBottom: 30 },
  'rounded':        { borderRadius: 4 },
  'items-center':   { alignItems: 'center' },
  'text-center':    { textAlign: 'center' },
  'bg-white':       { backgroundColor: '#fff' },
  'bg-black':       { backgroundColor: '#000' },
  'text-white':     { color: '#fff' },
  'text-black':     { color: '#000' },
}
