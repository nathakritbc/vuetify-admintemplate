import Cookies from "js-cookie";

const getCookie = (name) => {
  return Cookies.get(name);
};

const getAllCookies = () => {
  return Cookies.get();
};

const setCookie = (name, value, expires = 1) => {
  const payload = JSON.stringify(value);
  Cookies.set(name, payload, { expires });
};

const setStringCookie = (name, value, expires = 1) => {
  Cookies.set(name, value, { expires });
};

const getStringCookie = (name) => Cookies.get(name);

const removeCookie = (name) => {
  Cookies.remove(name);
};

export {
  getCookie,
  setCookie,
  removeCookie,
  getAllCookies,
  setStringCookie,
  getStringCookie,
};
