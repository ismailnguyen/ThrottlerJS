let timeout;

const throttle = (func, limit) => {
  if (!timeout) {
    timeout = setTimeout(function () {
      func();
      timeout = undefined;
    }, limit);
  }
};
