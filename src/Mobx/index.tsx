import Search from './Search';
import UserList from './UserList';
import UserStore, { UserListContext } from './UserStore';

const Mobx = () => {
  return (
    <UserListContext.Provider value={new UserStore()}>
      <Search />
      <UserList />
    </UserListContext.Provider>
  );
};

export default Mobx;
