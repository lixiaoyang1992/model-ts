import { Button } from 'antd';
import { useAtomValue, useSetAtom } from 'jotai';
import { fetchDataAtom, loadingAtom } from './UserJotai';

const Search = () => {
  const loading = useAtomValue(loadingAtom);
  const fetchData = useSetAtom(fetchDataAtom);

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
