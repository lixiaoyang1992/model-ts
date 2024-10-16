import { Button } from 'antd';
import { useShallow } from 'zustand/react/shallow';
import useUserList from './useUserList';

const Search = () => {
  const { loading, fetchData } = useUserList(
    useShallow((state) => ({
      loading: state.loading,
      // dataSource: state.dataSource, // 注意这里，不用的数据不要取，否则会触发不必要的渲染
      fetchData: state.fetchData,
    })),
  );

  console.log('Search state');

  return (
    <div>
      <Button
        type="primary"
        loading={loading}
        onClick={() => {
          fetchData({
            page: 1,
            pageSize: 2,
          });
        }}
      >
        刷新
      </Button>
    </div>
  );
};

export default Search;
