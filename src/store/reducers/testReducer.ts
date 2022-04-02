import { TEST_ACTION } from "../actionTypes/test";

const initialState = {
  testValue: "testing",
};

type IAction = {
  type: typeof TEST_ACTION;
  payload: string;
};

export const testReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        testValue: action.payload,
      };
    default:
      return state;
  }
};
