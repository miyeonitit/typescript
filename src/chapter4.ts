// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

type CountryList = "Korea" | "UnitedState" | "UnitedKingdom";

// 인덱스 시그니쳐
type CountryCodes = {
  [key in CountryList]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumCodes = {
  [key in CountryList]: number;
};

let contryNumberCodes: CountryNumCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 816,
};
