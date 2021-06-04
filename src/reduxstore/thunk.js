import axios from "axios";

export function thunkLogin(apiurl, formValues) {
  return (dispatch, getState) => {
    //tasks
    var state = getState();
    console.log("thunk login state", state);

    axios({
      url: apiurl,
      method: "post",
      data: formValues,
    }).then(
      (response) => {
        console.log("response from Login API", response.data);
        localStorage.token = response.data.data.token;
        localStorage.email = response.data.data.email;
        dispatch({
          type: "LOGIN",
          payload: response.data,
        });
      },
      (error) => {
        console.log(formValues);
        console.log("error from Login API", error);
      }
    );
  };
}
