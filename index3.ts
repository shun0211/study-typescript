import { userInfo } from "os";

export type User = {
  name: string;
  // 型 'number' のプロパティ 'age' は'string' インデックス型 'string' に割り当てることはできません。
  // これはUnion Typesで回避することができる
  age: number;
  // [key: string]の部分がIndex Signature
  [key: string]: string | number;
}

const user: User = {
  name: 'しまぶー',
  age: 20,
  account: 'shimubu-it',
  job: 'Software Engineer',
}

user.firstName // string | number
