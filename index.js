let timeout;

module.exports = (func, limit) => {
  if (!timeout) {
    timeout = setTimeout(function () {
      func();
      timeout = undefined;
    }, limit);
  }
};