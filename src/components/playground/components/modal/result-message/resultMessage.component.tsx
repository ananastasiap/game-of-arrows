export interface IResultMessage {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessage> = (props) => {
  const { isSuccessEndGame } = props
  return isSuccessEndGame ? (
    <span>
      Congrats! <br /> You Win!
    </span>
  ) : (
    <span>
      My regrets. <br /> You have lost this game
    </span>
  )
}

export default ResultMessage
