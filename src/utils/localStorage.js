export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined" || !key || !value) {
    return localStorage.setItem(key, value);
  }
};
export const getLocalStorage = (key) => {
  if (typeof window !== "undefined" || !key) {
    return localStorage.getItem(key);
  }
};

export const removeLocalStorage = (key) => {
  if (typeof window !== "undefined" || !key) {
    return localStorage.removeItem(key);
  }
};
