import { Header, Text } from "../../../UI"

const Description: React.FC = () => {
  return (
    <div>
      <Header>↑↓→← Arrow-game description</Header>
      <Text>
        Player's goal is to press the keyboard arrow key that was shown to him
        before the next one appears.
      </Text>
      <Text>
        After three consecutive successful hits - game won, after three errors -
        lost.
      </Text>
    </div>
  )
}

export default Description
