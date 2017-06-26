import {requestType, starsReducer} from "./starsModule";

describe("Stars Reducer", () => {

  it("handles action of type STARS_REQUEST", () => {
    const action = { type: requestType.PENDING };
    const stateBefore = {};
    const stateAfter = { isFetching: true };
    expect(starsReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("handles action of type STARS_SUCCESS", () => {
    const action = {
      payload: {
        stargazers_count: 99
      },
      type: requestType.SUCCESS
    };
    const stateBefore = {};
    const stateAfter = {
      isFetching: false,
      payload: {
        stargazers_count: 99
      }
    };
    expect(starsReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("handles action of type STARS_FAILURE", () => {
    const action = { type: requestType.FAILURE, message: "error!" };
    const stateBefore = {};
    const stateAfter = { error: true, isFetching: false, message: "error!"};
    expect(starsReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("handles actions with unknown type", () => {
    const action = { type: "" };
    const stateBefore = { payload: null };
    const stateAfter = { payload: null };
    expect(starsReducer(stateBefore, action)).toEqual(stateAfter);
  });

});
