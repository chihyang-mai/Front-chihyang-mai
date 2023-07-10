import { atom } from "recoil";

export const darkState = atom({
  key: "darkMode",
  default: false,
});

export const userState = atom({
  key: "user",
  default: {
    id: 1,
    name: "나는 그림 초보입니다",
  },
});
