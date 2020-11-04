module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off', // Permite eu utiliza onde eu quiser o console.log();
    'no-param-reassign': 'off', // Receba um parametro e eu possa fazer alterações nesse parametro, necessário por causa do sequelize
    camelcase: 'off', // Habilita a sintaxe do camelcase
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }], // permite ter parametro ou variáveis que não utilize, no caso, ignora o erro no parametro do express next
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ], // Serve para não gerar erros quando importarmos aquivos .ts;
    '@typescript-eslint/explicit-function-return-type': ['error'], // força tipar os métodos e funções
    '@typescript-eslint/typedef': [
      'error',
      {
        parameter: true, // Obrigatório colocar tipos nos parametros
        propertyDeclaration: true, // Obrigatório colocar tipos nos parametros das interfaces
        variableDeclaration: true, // Obrigatório colocar tipos das declarações de variáveis
      },
    ], // Regras de sintaxe
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
