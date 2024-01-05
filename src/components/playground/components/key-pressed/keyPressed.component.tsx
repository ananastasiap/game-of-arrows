import { useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"
import { Header, Text } from "../../../UI"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props

  const keyPressedElement = useKeyPressedElement()

  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(event.key) && isTimerActive) {
        dispatch(setEnteredValue(event.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div>
      <Header>KeyPressed</Header>
      <Text>Press the key corresponding to the key in "Random keys"</Text>
      <span>{keyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
