import { atom } from 'jotai';
import { userApi } from '../common/apiService';
import { IDataListItem, IPagination } from '../common/types';

export const loadingAtom = atom(false);
export const dataSourceAtom = atom<IDataListItem[]>([]);

export const fetchDataAtom = atom(null, async (get, set, para: IPagination) => {
  set(loadingAtom, true);
  try {
    const data = await userApi(para);
    set(dataSourceAtom, data);
  } catch (error) {
    //
  } finally {
    set(loadingAtom, false);
  }
});