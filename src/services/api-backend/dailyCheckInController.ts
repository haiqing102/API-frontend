// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doDailyCheckIn POST /api/backend/dailyCheckIn/doCheckIn */
export async function doDailyCheckInUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseboolean>('/api/backend/dailyCheckIn/doCheckIn', {
    method: 'POST',
    ...(options || {}),
  });
}
