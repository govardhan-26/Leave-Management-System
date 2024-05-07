import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
export const tokenAtom = atom({
  key: "tokenAtom",
  default: localStorage.getItem("AcessToken"),
});

export const userdetailsAtom = atom({
  key: "userdetailsAtom",
  default: selector({
    key: "userdetailsSelector",
    get: async ({ get }) => {
      const Usertoken = get(tokenAtom);
      const { data } = await axios.get(
        "http://localhost:3089/api/v1/user/details",
        {
          headers: {
            Authorization: "Bearer " + Usertoken,
          },
        },
      );
      return data;
    },
  }),
});