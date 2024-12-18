import { Table } from 'antd';
import { observer } from 'mobx-react-lite';
import { useContext, useLayoutEffect } from 'react';
import { IDataListItem } from '../common/types';
import { UserListContext } from './UserStore';

const UserList = observer(() => {
  const { fetchData, loading, dataSource, pagination } = useContext(UserListContext);

  useLayoutEffect(() => {
    fetchData({
      page: 1,
      pageSize: 10,
    });
  }, []);

  return (
    <div>
      <Table<IDataListItem>
        loading={loading}
        rowKey={(item) => item.id}
        dataSource={dataSource}
        pagination={{
          current: pagination.page,
          pageSize: pagination.pageSize,
          total: pagination.total,
          onChange: (page, pageSize) => {
            fetchData({
              page,
              pageSize,
            });
          },
        }}
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
