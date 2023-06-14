export const beforeEnter = (element: Element) => {
  const el = element as HTMLElement;
  el.style.height = "0";
};

export const enter = (element: Element, done: () => void) => {
  const el = element as HTMLElement;

  const h = el.scrollHeight;
  el.style.height = `${h - 1}px`;
  done();
};

export const leave = (element: Element) => {
  const el = element as HTMLElement;

  el.style.minHeight = "0px";
  el.style.height = "0px";
};
