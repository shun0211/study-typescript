// Non Null Assertionは基本的には使うべきでない
export function getFunctionLetter(str?: string) {
  // !をつけるとnullやundefinedの可能性を消せる
  return str!.charAt(0);
}
console.log(getFunctionLetter());

// 良い例
export function getFunctionLetter2(str?: string) {
  if (!str) {
    return
  }
  return str!.charAt(0);
}

// Double Assertionも基本的には使うべきでない
export function getFunctionLetter3(str: number) {
  return (str as unknown as string).charAt(0)
}
