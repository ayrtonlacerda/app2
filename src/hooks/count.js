import { useCallback, useState } from 'react'

export const useCount = (initCount = 0) => {
  const [count, setCount] = useState(initCount)

  // memoriza a excução da funcao
  const handleAdd = useCallback(() => {
    setCount(count + 1)
  }, [count])

  // memoriza a excução da funcao
  const handleSub = useCallback(() => {
    setCount(count - 1)
  }, [count])

  return {
    count,
    add: handleAdd,
    sub: handleSub
  }
}
