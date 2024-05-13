// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUser POST /api/backend/user/add */
export async function addUserUsingPost(body: API.UserAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponselong>('/api/backend/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** banUser POST /api/backend/user/ban */
export async function banUserUsingPost(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseboolean>('/api/backend/user/ban', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userBindEmail POST /api/backend/user/bind/login */
export async function userBindEmailUsingPost(
  body: API.UserBindEmailRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVo>('/api/backend/user/bind/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUser POST /api/backend/user/delete */
export async function deleteUserUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/backend/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userEmailLogin POST /api/backend/user/email/login */
export async function userEmailLoginUsingPost(
  body: API.UserEmailLoginRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVo>('/api/backend/user/email/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userEmailRegister POST /api/backend/user/email/register */
export async function userEmailRegisterUsingPost(
  body: API.UserEmailRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/backend/user/email/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserById GET /api/backend/user/get */
export async function getUserByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByIdUsingGetParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVo>('/api/backend/user/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getUserByInvitationCode POST /api/backend/user/get/invitationCode */
export async function getUserByInvitationCodeUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserByInvitationCodeUsingPostParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVo>('/api/backend/user/get/invitationCode', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getLoginUser GET /api/backend/user/get/login */
export async function getLoginUserUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVo>('/api/backend/user/get/login', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getCaptcha GET /api/backend/user/getCaptcha */
export async function getCaptchaUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getCaptchaUsingGetParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/backend/user/getCaptcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUser GET /api/backend/user/list */
export async function listUserUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserUsingGetParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserVo>('/api/backend/user/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserByPage GET /api/backend/user/list/page */
export async function listUserByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserByPageUsingGetParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserVo>('/api/backend/user/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** userLogin POST /api/backend/user/login */
export async function userLoginUsingPost(
  body: API.UserLoginRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVo>('/api/backend/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userLogout POST /api/backend/user/logout */
export async function userLogoutUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseboolean>('/api/backend/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** normalUser POST /api/backend/user/normal */
export async function normalUserUsingPost(body: API.IdRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseboolean>('/api/backend/user/normal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userRegister POST /api/backend/user/register */
export async function userRegisterUsingPost(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/backend/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userUnBindEmail POST /api/backend/user/unbindEmail */
export async function userUnBindEmailUsingPost(
  body: API.UserUnBindEmailRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVo>('/api/backend/user/unbindEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /api/backend/user/update */
export async function updateUserUsingPost(
  body: API.UserUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVo>('/api/backend/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updatePwd POST /api/backend/user/updatePwd */
export async function updateUserPwdUsingPost(
  body: API.UserUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVo>('/api/backend/user/updatePwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateVoucher POST /api/backend/user/update/voucher */
export async function updateVoucherUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVo>('/api/backend/user/update/voucher', {
    method: 'POST',
    ...(options || {}),
  });
}
