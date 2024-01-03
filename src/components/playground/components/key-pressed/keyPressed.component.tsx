import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  // const { isTimerActive } = props

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (MAP_ARROW_CODES.hasOwnProperty(event.key)) {
      console.log(event.key)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return <div>KeyPressed</div>
}

export default KeyPressed
