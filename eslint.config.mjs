import coreWebVitals from 'eslint-config-next/core-web-vitals'

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...coreWebVitals,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]

export default config
