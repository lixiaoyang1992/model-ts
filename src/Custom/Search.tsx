import { Button } from 'antd';
import useUserList from './useUserList';

const Search = () => {
  const { loading, fetchData } = useUserList();

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
