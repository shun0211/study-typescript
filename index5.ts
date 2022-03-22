// 型ガード①
export const foo = (value: string | number | boolean) => {
  if (value === 'string') {
    return value; // value: "string"
  }
}

// 型ガード②
export const bar = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value; // value: string[]
  }
}

// 型ガード③
export const hoge = (value?: string) => {
  if (!value) {
    return value; // value: string | undefined 空文字はfalsyなためこのようになっている
  }
  return value // value: string
}

// in 演算子を使う方法
// プロパティがオブジェクトにある場合にtrueを返す演算子
type UserA = { name: string };
type UserB = { name: string; nickName: string };

export const fuga = (value: UserA | UserB) => {
  if ("nickName" in value) {
    return value; // value: UserB
  }
  return value; // value: UserA
}

// タグ付きUnion Typesを使う方法
// 型固有のプロパティを持っていて、それによって絞り込みを行う方法
type UserC = { name: string; lang: "ja" };
type UserD = { name: string; lang: "en" };

export const zoo = (value: UserC | UserD) => {
  if (value.lang === 'ja') {
    return value; // value: UserC
  }
  return value; // value: UserD
}
