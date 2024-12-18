import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { userApi } from '../common/apiService';
import { IDataListItem, IPaginationParam } from '../common/types';

const Basic = () => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<IDataListItem[]>([]);

  const fetchData = async (para: IPaginationParam) => {
    setLoading(true);
    try {
      const data = await userApi(para);
      setDataSource(data);
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  };

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

export default Basic;
