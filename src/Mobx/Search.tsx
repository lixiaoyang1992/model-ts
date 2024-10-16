import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { UserListContext } from './UserStore';

const Search = observer(() => {
  const state = useContext(UserListContext);

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
