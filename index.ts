export const color = "red";
let x = color; // let x: string Wideningが起きている

export const color2 = "blue" as const;
let y = color2; // let y: "blue" String Literal Typesのままになっている

function foo() {
  return { foo: 'foo' }
}
const z = foo()
// Wideningが起きている
// const z: {
//   foo: string;
// }
function bar() {
  return { bar: 'bar' } as const
}
const a = bar()
// String Literal Typesのままになっている
// const a: {
//   readonly bar: "bar";
// }

// 定数ファイルをつくるときはつけるべき
// const assertionをすることで書き換えることを防止できる
export const PATH = {
  INDEX: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
} as const;
