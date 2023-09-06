export default (func: () => void, wait: number) => {
  let timeout: NodeJS.Timeout | null = null

  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      func()
      timeout = null
    }, wait)
  }
}