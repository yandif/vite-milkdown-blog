module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort', // 导入导出排序插件
  ],
  rules: {
    indent: 'off', // 空格规则
    '@typescript-eslint/indent': ['error', 2], // 空格规则
    'linebreak-style': 'off',
    quotes: ['error', 'single'], // 使用单引号
    semi: ['error', 'always'], // 语句后的分号
    'react/react-in-jsx-scope': 'off', // react 17 不需要导入React 了
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1, // 文件中
        maxEOF: 1, // 文件末尾
        maxBOF: 0, //文件开头
      },
    ], // 控制多个空行
    'simple-import-sort/imports': 'error', // 导入排序规则
    'simple-import-sort/exports': 'error', // 导出排序规则
  },
};
