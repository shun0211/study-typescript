export type User = {
  name: string;
} & PersonalData

type PersonalData = {
  height: number;
  weight: number;
  realName: string;
  // [K in "height" | "weight"]: number;
}

type Foo = {
  height: any;
  weight: any;
}
// 他の型を参照してプロパティ名を決めることができる
type PersonalData2 = {
  [K in keyof Foo]: number
}

const foo = {
  height: 200,
  weight: 100
}
// 変数を利用してプロパティ名を決めることができる
type PersonalData3 = {
  [K in keyof typeof foo]: number
}

// 補足
// type bar = typeof foo
// type bar = {
//   height: number;
//   weight: number;
// }

const user: User = {
  name: 'しまぶー',
  height: 174,
  weight: 60,
}

// オプショナルにすることもできる
type PersonalData4 = {
  [K in "height" | "weight"]?: number;
}
// type PersonalData4 = {
//   height?: number | undefined;
//   weight?: number | undefined;
// }

type OptionalPersonalData = {
  [K in keyof PersonalData]: PersonalData[K]
}

// OptionalからRequiredにする方法
type PersonalData5 = {
  height?: number;
  weight?: number;
  realName?: string;
}

type RequiredPersonalData = {
  [K in keyof PersonalData5]-?: PersonalData5[K]
}
