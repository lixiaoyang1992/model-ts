import { create } from 'zustand';
import { sleep, userApi } from '../common/apiService';
import { IDataListItem, IPaginationParam } from '../common/types';

interface IUserListStore {
  loading: boolean;
  dataSource: IDataListItem[];
  fetchData: (para: IPaginationParam) => Promise<void>;
}

const useUserList = create<IUserListStore>()((set) => ({
  loading: false,
  dataSource: [],
  fetchData: async (para) => {
    set({ loading: true });
    try {
      const data = await userApi(para);
      set({ dataSource: data });
      await sleep(1000);
    } catch (error) {
      //
    } finally {
      set({ loading: false });
    }
  },
}));

export default useUserList;
