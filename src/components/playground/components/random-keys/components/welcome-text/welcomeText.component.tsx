import { Text } from "../../../../../UI"

export interface IWelcomeText {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeText> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <Text>Loading...</Text>
  }

  return (
    <Text>
      Press "Play" to start the game and wait for the first arrow to appear
    </Text>
  )
}

export default WelcomeText
