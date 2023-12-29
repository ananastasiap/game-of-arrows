import { useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { IMapArrowCodes } from "../../types"

export interface IRandomKey {
  isTimerActive: boolean
}

const RandomKey: React.FC<IRandomKey> = (props) => {
  // const { isTimerActive } = props
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      {state.steps.map((el, index) => (
        <span key={index}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomKey
