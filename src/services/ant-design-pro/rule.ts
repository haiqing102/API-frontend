// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取规则列表 GET /api/backend/rule */
export async function rule(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.ruleParams,
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/backend/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/backend/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/backend/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/backend/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/backend/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/backend/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/backend/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
