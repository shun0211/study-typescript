type UserA = { name: string; lang: "ja" };
type UserB = { name: string; lang: "en" };

const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === 'ja'
}

const isUserB = (user: UserA | UserB): user is UserB => {
  return user.lang === 'en'
}

export const foo = (value: any) => {
  if (isUserA(value)) {
    return value;
  }
  if (isUserB(value)) {
    return value;
  }
  return value;
}

export const bar = async () => {
  const res = await fetch("");
  const json = await res.json();
  if (isUserA(json)) {
    return json.lang
  }
}

const users: (UserA | UserB)[] = [
  { name: "田中", lang: 'ja' },
  { name: '山田', lang: 'ja' },
  { name: 'ジョニー', lang: 'en' },
]

const japanese = users.filter((user) => user.lang === 'ja'); // const japanese: (UserA | UserB)[]
const japanese2 = users.filter(isUserA); // const japanese2: UserA[]
