import { TEST_ACTION } from "../actionTypes/test";

export const changeTestValue = (value: string) => {
  return {
    type: TEST_ACTION,
    payload: value,
  };
};
