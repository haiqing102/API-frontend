import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;
export default defineConfig({
  title: 'API 接口服务平台',
  hash: true,
  routes,
  theme: {
    'root-entry-name': 'variable',
  },
  favicons: ['/favivon.ico'],
  /* openAPI: [
    {
      requestLibPath: "import { request } from '@umijs/max'",

      schemaPath:
        process.env.NODE_ENV === 'production'
          ? 'https://api.suki.vin/api/backend/v3/api-docs'
          : 'http://localhost:9000/api/backend/v3/api-docs',
      projectName: 'api-backend',
    },
  ], */
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  fastRefresh: true,
  model: {},
  initialState: {},
  layout: {
    locale: true,
    ...defaultSettings,
  },
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  antd: {},
  request: {},
  access: {},
  headScripts: [
    {
      src: '/scripts/loading.js',
      async: true,
    },
    {
      // src: 'https://api.vvhan.com/api/script/yinghua',
      src: '/scripts/yinghua.js',
      defer: true,
    },
  ],
  presets: ['umi-presets-pro'],
  mfsu: {
    strategy: 'normal',
  },
  requestRecord: {},
});
