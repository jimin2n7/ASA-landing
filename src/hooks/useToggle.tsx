import { isBoolean } from 'ramda-adjunct'
import { useCallback, useState } from 'react'

function useToggle(defaultValue?: boolean): [boolean, () => void] {
  const [isShowing, setIsShowing] = useState(defaultValue || false)
  const toggle = useCallback((status?: boolean) => {
    setIsShowing((prevStatus) => (isBoolean(status) ? status : !prevStatus))
  }, [])
  return [isShowing, toggle]
}

export default useToggle
