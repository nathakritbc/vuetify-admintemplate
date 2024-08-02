import { getCookie } from "./jsCookie";
import { AUTH } from "@/Constants";
const isLogin = getCookie(AUTH.isLogin);

let authorised = null;
if (isLogin) {
  authorised = JSON.parse(isLogin);
}

const useAuth = () => {
  if (!isLogin) {
    return false;
  }
  return true;
};

const useAuthAdmin = () => {
  if (!isLogin) {
    return false;
  }
  if (isLogin.user.role !== "ADMIN") {
    return false;
  }
  return true;
};

const useAuthSuperAdmin = () => {
  if (!isLogin) {
    return false;
  }
  // if (isLogin.user.role !== "SUPER") {
  //   return false;
  // }
  const { userType } = isLogin.user;

  if (userType !== "SUPER" && userType !== "OFFICER") {
    return false;
  }
  return true;
};

export { useAuth, useAuthAdmin, useAuthSuperAdmin };
