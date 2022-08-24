type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type message<T='get'> = Structure<
T,
{
  /**
   * 投稿者
   */
  userName: string
  /**
   * メッセージ内容
   */
  contents: string
  /**
   * 投稿者アイコン
   */
  userIcon: { url: string, width: number, height: number }
}>


export interface EndPoints {
  get: {
    'message': message<'get'>
  }
  gets: {
    'message': message<'gets'>
  }
  post: {
    'message': message<'post'>
  }
  put: {
    'message': message<'put'>
  }
  patch: {
    'message': message<'patch'>
  }
}
