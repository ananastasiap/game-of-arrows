import { Header } from "../../../UI"

const Description: React.FC = () => {
  return (
    <div>
      <Header>↑↓→← Arrow-game description</Header>
      <p>
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </p>
      <p>
        After three consecutive successful hits - game won, after three errors -
        lost.
      </p>
    </div>
  )
}

export default Description
