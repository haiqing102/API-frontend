import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import { history } from '@umijs/max';
import { message } from 'antd';

// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
}

export const requestConfig: RequestConfig = {
  baseURL:
    process.env.NODE_ENV === 'production' ? 'https://gateway.suki.vin/' : 'http://localhost:9000/',
  withCredentials: true,

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // 拦截请求配置
      const url = config?.url?.concat('?token = 123');
      return { ...config, url };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据
      const { data } = response as unknown as ResponseStructure;
      const { code } = data;
      console.log(data.message);
      if (data && code === 0) {
        return response;
      } else {
        switch (code) {
          case 40001:
            {
              message.error(data.message);
              history.push('/user/login');
            }
            break;
          case 40100:
            break;
          default:
            message.error(data.message);
            break;
        }
      }
      return response;
    },
  ],
};
