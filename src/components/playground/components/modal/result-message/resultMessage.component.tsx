import { Text } from "../../../../UI"

import styles from "./resultMessage.module.scss"

export interface IResultMessage {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessage> = (props) => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <Text className={styles.text}>
          Congrats! <br /> You win!
        </Text>
      ) : (
        <Text className={styles.text}>
          Ooops.. <br /> You have lost this game☠️
        </Text>
      )}
    </div>
  )
}

export default ResultMessage
