import { Table } from 'antd';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { IDataListItem } from '../common/types';
import useUserList from './useUserList';

const UserList = () => {
  const { loading, dataSource, fetchData } = useUserList(
    useShallow((state) => ({
      loading: state.loading,
      dataSource: state.dataSource,
      fetchData: state.fetchData,
    })),
  );

  useEffect(() => {
    fetchData({
      page: 1,
      pageSize: 10,
    });
  }, []);

  console.log('UserList state');

  return (
    <div>
      <Table<IDataListItem> loading={loading} rowKey={(item) => item.id} dataSource={dataSource}>
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
};

export default UserList;
