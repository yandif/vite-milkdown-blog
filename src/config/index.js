const config = {
  development: {
    cdn: './',
    apiBaseUrl: '/api',
  },
  beta: {
    cdn: './',
    apiBaseUrl: '//localhost:80/v1/api',
  },
  release: {
    cdn: '//s.xxx.com/vite-react-app/release',
    apiBaseUrl: '//www.xxx.com/v1',
  },
};

export default config;
