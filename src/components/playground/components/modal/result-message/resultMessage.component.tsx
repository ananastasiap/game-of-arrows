import { Text } from "../../../../UI"

export interface IResultMessage {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessage> = (props) => {
  const { isSuccessEndGame } = props
  return isSuccessEndGame ? (
    <Text>
      Congrats! <br /> You Win!
    </Text>
  ) : (
    <Text>
      My regrets. <br /> You have lost this game
    </Text>
  )
}

export default ResultMessage
