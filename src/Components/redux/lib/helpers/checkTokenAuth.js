// import { createBrowserHistory } from "history";
import { History } from "./History/History";
import jwt_decode from "jwt-decode";

import setAuthToken from "../Axios/setAuthToken";
import {
  checkReloadToken,
  logout,
} from "../../actions/authUserActions";

// const history = createBrowserHistory();
const checkTokenAuth = (store) => {
  let jwtToken = localStorage.getItem("jwtToken");
  let decoded;
  if (jwtToken) {
    decoded = jwt_decode(jwtToken);

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logout());
      //window.location.href = "/login";
      //history.push("/login");
      History("/login");
    } else {
      setAuthToken(jwtToken);
      store.dispatch(checkReloadToken(decoded));
    }
  }
};

export default checkTokenAuth;
