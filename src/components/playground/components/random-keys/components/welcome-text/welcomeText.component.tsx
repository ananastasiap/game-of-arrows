import { Text } from "../../../../../UI"
import loader from "./img/loader.svg"
import stylesCommon from "../../randomKeys.module.scss"
import styles from "./welcomeText.module.scss"

export interface IWelcomeText {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeText> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img src={loader} alt="Loader" className={styles.loader} />
        </span>
      </div>
    )
  }

  return (
    <Text>
      Press "Play" to start the game and wait for the first arrow to appear
    </Text>
  )
}

export default WelcomeText
