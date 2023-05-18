const useTransition = () => {
  const beforeEnter = (element: Element) => {
    const el = element as HTMLElement;
    el.style.height = "0px";
  };

  const enter = (element: Element, done: () => void) => {
    const el = element as HTMLElement;
    el.style.height = `${el.scrollHeight - 1}px`;
    done();
  };

  const leave = (element: Element) => {
    const el = element as HTMLElement;
    el.style.minHeight = "0px";
    el.style.height = "0px";
  };

  return { beforeEnter, enter, leave };
};

export default useTransition;
