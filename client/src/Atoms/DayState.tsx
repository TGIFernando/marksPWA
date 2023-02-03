import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "day",
  storage: localStorage,
});

export const dayState = atom({
  key: "day",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
