import { useAppSelector } from "../../../../app/hooks"
import { Header } from "../../../UI"
import RandomArrows from "./components/random-arrows"
import WelcomeText from "./components/welcome-text"

// import styles from "./randomKeys.module.scss"
export interface IRandomKey {
  isTimerActive: boolean
}

const RandomKey: React.FC<IRandomKey> = (props) => {
  const { isTimerActive } = props

  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      <Header>Random Keys</Header>

      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKey
