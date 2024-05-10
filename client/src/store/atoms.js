import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil";
export const userdetailsAtom = atom({
  key: "userdetailsAtom",
  default: selector({
    key: "userdetailsSelector",
    get: async () => {
      const Usertoken = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/Employee/EmployeeDetails/",
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

export const leaveListAtom = atom({
  key: "leaveListAtom",
  default: selector({
    key: "leaveListselector",
    get: async () => {
      const Usertoken = localStorage.getItem("token");
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/Leave/LeaveList",
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

// http://localhost:8080/api/v1/Leave/LeaveListManager

// export const leaveListAtom = atom({
//   key: "leaveListAtom",
//   default: selector({
//     key: "leaveListselector",
//     get: async () => {
//       const Usertoken = localStorage.getItem("token");
//       const { data } = await axios.get(
//         "http://localhost:8080/api/v1/Leave/LeaveList",
//         {
//           headers: {
//             Authorization: "Bearer " + Usertoken,
//           },
//         },
//       );
//       return data;
//     },
//   }),
// });

