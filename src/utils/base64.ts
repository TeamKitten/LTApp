export const base64Encode = (str: string) =>
  btoa(unescape(encodeURIComponent(str)));
export const base64Decode = (str: string) =>
  decodeURIComponent(escape(atob(str)));
