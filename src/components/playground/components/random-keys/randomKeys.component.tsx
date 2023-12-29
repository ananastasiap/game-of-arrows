import { useAppDispatch } from "../../../../app/hooks"
import { setSteps } from "../../store/slices"

export interface IRandomKey {
  isTimerActive: boolean
}

const RandomKey: React.FC<IRandomKey> = (props) => {
  // const { isTimerActive } = props
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(setSteps())}>Click</button>
    </div>
  )
}

export default RandomKey
