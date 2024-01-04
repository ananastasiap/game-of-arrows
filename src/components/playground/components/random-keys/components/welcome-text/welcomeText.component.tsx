export interface IWelcomeText {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeText> = (props) => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <span>Loading...</span>
  }

  return (
    <span>
      Press "Play" to start the game and wait for the first arrow to appear
    </span>
  )
}

export default WelcomeText
