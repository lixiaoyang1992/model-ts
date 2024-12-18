export interface IDataListItem {
  id: number;
  username: string;
  email: string;
}

export interface IPaginationParam {
  page: number;
  pageSize: number;
}

export interface IPagination extends IPaginationParam {
  total: number;
}
