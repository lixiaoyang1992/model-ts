import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { sleep, userApi } from '../common/apiService';
import { IDataListItem, IPagination } from '../common/types';

export interface IListStore<T> {
  loading: boolean;
  dataSource: T[];
  fetchData: (para: IPagination) => Promise<void>;
}

class UserStore implements IListStore<IDataListItem> {
  loading = false;
  dataSource: IDataListItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchData(para: IPagination) {
    runInAction(() => {
      this.loading = true;
    });

    try {
      const data = await userApi(para);
      runInAction(() => {
        this.dataSource = data;
      });
      await sleep(1000);
    } catch (error) {
      //
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export default UserStore;

export const UserListContext = createContext<UserStore>(new UserStore());
