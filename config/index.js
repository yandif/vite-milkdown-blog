const config = {
  development: {
    cdn: './',
    apiBaseUrl: 'http://localhost/api',
  },
  beta: {
    cdn: '//s.xxx.com/vite-react-app/beta',
    apiBaseUrl: '//www.beta.xxx.com/v1',
  },
  release: {
    cdn: '//s.xxx.com/vite-react-app/release',
    apiBaseUrl: '//www.xxx.com/v1',
  },
};

export default config[import.meta.env.MODE];