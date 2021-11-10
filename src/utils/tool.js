const Tool = {
  compile(code) {
    let c = String.fromCharCode(code.charCodeAt(0) + code.length);
    for (let i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    return c;
  },

  uncompile(code) {
    let c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (let i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
  },

  genURLSearchParams(obj = {}) {
    const search = new URLSearchParams();
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      !!value && search.append(key, value);
    });
    const searchString = search.toString();
    return searchString.length > 0 ? `?${searchString}` : '';
  },
};
export default Tool;
