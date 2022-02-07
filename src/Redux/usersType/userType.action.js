import { SET_USER_DETAIL } from "./userType.types";
import { URL_GET } from "../../Config/Api";
import axios from "axios";

export function userDetail(type, user) {
  return {
    type: type,
    value: user,
  };
}

//-----------------------------------USER-------------------------------------
export function userAction() {
  return (dispatch) => {
    console.log("dispatch", dispatch);
    axios
      .get(URL_GET)
      .then((response) => {
        console.log("resposne", response);
        dispatch(userDetail(SET_USER_DETAIL, response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
