import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * Plugin local mínimo: marca variáveis usadas em JSX (<motion.div /> etc.)
 * como utilizadas, evitando falsos positivos de no-unused-vars
 * sem precisar do eslint-plugin-react completo.
 */
const jsxUsesVars = {
  rules: {
    'jsx-uses-vars': {
      meta: { type: 'problem', schema: [] },
      create(context) {
        return {
          JSXOpeningElement(node) {
            let name = node.name
            if (name.type === 'JSXMemberExpression') {
              while (name.object) name = name.object
            }
            if (name.type === 'JSXIdentifier') {
              context.sourceCode.markVariableAsUsed(name.name, node)
            }
          },
        }
      },
    },
  },
}

export default defineConfig([
  // dist = build; _arquivo e .claude = código arquivado/ferramentas, fora do site
  globalIgnores(['dist', '_arquivo', '.claude', 'node_modules', 'public']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: { 'jsx-vars': jsxUsesVars },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'jsx-vars/jsx-uses-vars': 'error',
      // padrões legítimos (reset de estado em fetch-effect; página exporta dados + componente)
      'react-hooks/set-state-in-effect': 'warn',
      'react-refresh/only-export-components': 'warn',
    },
  },
  // Arquivos Node (scripts e configs de build)
  {
    files: ['scripts/**/*.js', '*.config.js'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
])
