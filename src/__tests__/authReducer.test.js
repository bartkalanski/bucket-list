import authReducer from "../reducers/authReducer";

describe("destinationReducer", () => {
  const initState = {
    authError: null,
  };
  it("has a default state", () => {
    expect(authReducer(undefined, { type: "unexpected" })).toEqual(initState);
  });
  it("can handle LOGIN_ERROR", () => {
    expect(
      authReducer(initState, {
        type: "LOGIN_ERROR",
        authError: "Login failed",
      })
    ).toEqual({
      authError: "Login failed",
    });
  });
  it("can handle LOGIN_SUCCESS", () => {
    expect(
      authReducer(initState, {
        type: "LOGIN_SUCCESS",
      })
    ).toEqual({
      authError: null,
    });
  });
  it("can handle SIGNOUT_SUCCESS", () => {
    expect(authReducer(initState, { type: "SIGNOUT_SUCCESS" })).toEqual(
      initState
    );
  });
  it("can handle SIGNUP_SUCCESS", () => {
    expect(authReducer(initState, { type: "SIGNUP_SUCCESS" })).toEqual(
      initState
    );
  });
  xit("can handle SIGNUP_ERROR", () => {
    expect(
      authReducer(initState, {
        type: "SIGNUP_ERROR",
      })
    ).toEqual({
    });
  });
});
