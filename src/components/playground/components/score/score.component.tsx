import { useAppSelector } from "../../../../app/hooks"
import { Header } from "../../../UI"
import Text from "../../../UI/text"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <Header>Score</Header>
      <Text>
        On error, the "Consecutive successful hits" value is reset to zero
      </Text>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </>
  )
}

export default Score
