import { Table } from 'antd';
import { observer } from 'mobx-react-lite';
import { useLayoutEffect } from 'react';
import { useSnapshot } from 'valtio';
import { IDataListItem } from '../common/types';
import UserStore from './UserStore';

const UserList = observer(() => {
  const state = useSnapshot(UserStore);

  useLayoutEffect(() => {
    state.fetchData({
      page: 1,
      pageSize: 10,
    });
  }, []);

  console.log('UserList state', state);

  return (
    <div>
      <Table<IDataListItem>
        loading={state.loading}
        rowKey={(item) => item.id}
        dataSource={state.dataSource}
      >
        <Table.Column<IDataListItem> key="id" title="id" dataIndex="id" />
        <Table.Column<IDataListItem> key="username" title="Name" dataIndex="username" />
        <Table.Column<IDataListItem>
          key="email"
          title="email"
          dataIndex="email"
          render={(_, record) => <a href={`mailto:${record.email}`}>{record.email}</a>}
        />
      </Table>
    </div>
  );
});

export default UserList;
