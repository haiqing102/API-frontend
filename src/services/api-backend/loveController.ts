// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** hello GET /api/backend/love */
export async function helloUsingGet(options?: { [key: string]: any }) {
  return request<string>('/api/backend/love', {
    method: 'GET',
    ...(options || {}),
  });
}
