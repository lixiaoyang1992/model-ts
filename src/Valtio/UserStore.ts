import { proxy } from 'valtio';
import { sleep, userApi } from '../common/apiService';
import { IDataListItem, IPagination } from '../common/types';

interface IUserListStore {
  loading: boolean;
  dataSource: IDataListItem[];
  fetchData: (para: IPagination) => Promise<void>;
}

const UserStore = proxy<IUserListStore>({
  loading: false,
  dataSource: [],
  async fetchData(para) {
    UserStore.loading = true;
    try {
      const data = await userApi(para);
      UserStore.dataSource = data;
      await sleep(1000);
    } catch (error) {
      //
    } finally {
      UserStore.loading = false;
    }
  },
});

export default UserStore;
