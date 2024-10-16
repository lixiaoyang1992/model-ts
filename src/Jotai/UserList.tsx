import { Table } from 'antd';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { IDataListItem } from '../common/types';
import { dataSourceAtom, fetchDataAtom, loadingAtom } from './UserJotai';

const UserList = () => {
  const loading = useAtomValue(loadingAtom);
  const dataSource = useAtomValue(dataSourceAtom);

  const fetchData = useSetAtom(fetchDataAtom);

  useEffect(() => {
    fetchData({
      page: 1,
      pageSize: 10,
    });
  }, []);

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
