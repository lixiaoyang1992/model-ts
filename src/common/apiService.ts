import { IPagination } from './types';

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const userApi = async ({ page = 1, pageSize = 10 }: IPagination) => {
  await sleep(1000);
  const res = await fetch(
    `https://dummyjson.com/users?limit=${pageSize}&skip=${pageSize * (page - 1)}`,
  );
  const data = await res.json();
  return data.users;
};
