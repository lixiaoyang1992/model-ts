import { makeAutoObservable, runInAction } from 'mobx';
import { createContext } from 'react';
import { userApi } from '../common/apiService';
import { IDataListItem, IPagination, IPaginationParam } from '../common/types';

export interface IListStore<T> {
  loading: boolean;
  dataSource: T[];
  fetchData: (para: IPaginationParam) => Promise<void>;
}

class UserStore implements IListStore<IDataListItem> {
  loading = false;
  dataSource: IDataListItem[] = [];
  pagination: IPagination = {
    page: 1,
    pageSize: 10,
    total: 0,
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async fetchData(para: IPaginationParam) {
    runInAction(() => {
      this.loading = true;
    });

    try {
      const data = await userApi(para);

      runInAction(() => {
        this.dataSource = data.users;
        this.pagination = {
          ...para,
          total: data.total,
        };
      });
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
