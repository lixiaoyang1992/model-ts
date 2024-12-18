import { useState } from 'react';
import { userApi } from '../common/apiService';
import { IDataListItem, IPaginationParam } from '../common/types';

const useUserList = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<IDataListItem[]>([]);

  const fetchData = async (para: IPaginationParam) => {
    setLoading(true);
    try {
      const data = await userApi(para);
      setDataSource(data);
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    dataSource,
    fetchData,
  };
};

export default useUserList;
