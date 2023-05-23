export const beforeEnter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "0px";
};

export const enter = (element: Element, done: () => void) => {
  const el = element as HTMLElement;
  el.style.height = `${el.scrollHeight - 1}px`;
  done();
};

export const leave = (element: Element) => {
  const el = element as HTMLElement;
  el.style.minHeight = "0px";
  el.style.height = "0px";
};
