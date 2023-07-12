export default (func: () => void, wait: number) => {
  let timeout: NodeJS.Timeout | null;
  return () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func();
        timeout = null;
      }, wait);
    }
  };
};
