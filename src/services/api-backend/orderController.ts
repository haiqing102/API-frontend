// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** closedProductOrder POST /api/backend/order/closed */
export async function closedProductOrderUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.closedProductOrderUsingPostParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/backend/order/closed', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** createOrder POST /api/backend/order/create */
export async function createOrderUsingPost(
  body: API.PayCreateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProductOrderVo>('/api/backend/order/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteProductOrder POST /api/backend/order/delete */
export async function deleteProductOrderUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteProductOrderUsingPostParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/backend/order/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getProductOrderById GET /api/backend/order/get */
export async function getProductOrderByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProductOrderByIdUsingGetParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseProductOrderVo>('/api/backend/order/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listProductOrderByPage GET /api/backend/order/list/page */
export async function listProductOrderByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listProductOrderByPageUsingGetParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseOrderVo>('/api/backend/order/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** parseOrderNotifyResult POST /api/backend/order/notify/order */
export async function parseOrderNotifyResultUsingPost(
  body: string,
  options?: { [key: string]: any },
) {
  return request<string>('/api/backend/order/notify/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** queryOrderStatus POST /api/backend/order/query/status */
export async function queryOrderStatusUsingPost(
  body: API.ProductOrderQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/backend/order/query/status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
