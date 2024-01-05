import { useAppSelector } from "../../../../app/hooks"
import { Header } from "../../../UI"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <Header>Score</Header>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </>
  )
}

export default Score
