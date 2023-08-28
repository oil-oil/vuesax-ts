export const isNil = (value: unknown) => value === undefined || value === null

export const exclude = <T extends { [key: string]: any }, K extends keyof T>(
  obj: T,
  keyArr: K[]
): Omit<T, K> =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keyArr.includes(key as K))
  ) as Omit<T, K>
