import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useSnapshot } from 'valtio';
import UserStore from './UserStore';

const Search = observer(() => {
  const state = useSnapshot(UserStore);

  console.log('Search state', state);

  return (
    <div>
      <Button
        type="primary"
        loading={state.loading}
        onClick={() => {
          state.fetchData({
            page: 1,
            pageSize: 2,
          });
        }}
      >
        刷新
      </Button>
    </div>
  );
});

export default Search;
