export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});
export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const logIn = (obj) => {
  const baseEndpoint = "http://localhost:8080/auth/login";

  const header = {
    "Content-type": "application/json",
  };

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint, {
        method: "POST",
        headers: header,
        body: JSON.stringify(obj)
      });

      if (response.ok) {
        const data = await response.json();

        dispatch(setUser(data));

        console.log(data);

      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};