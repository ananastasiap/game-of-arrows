import { Stack, Chip } from "@mui/material"
import { useAppSelector } from "../../../../app/hooks"
import { Header, Text } from "../../../UI"

import styles from "./score.module.scss"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <Header>Score</Header>
      <Text>
        On error, the "Consecutive successful hits" value is reset to zero
      </Text>

      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccsess}
          label={
            <>
              Errors:{" "}
              <span className={styles.counter}>{state.totalUnsuccessful}</span>
            </>
          }
          variant="outlined"
        />
        <Chip
          className={styles.chipSuccess}
          label={
            <>
              Successful:{" "}
              <span className={styles.counter}>{state.totalSuccessful}</span>
            </>
          }
          variant="outlined"
        />
      </Stack>
    </>
  )
}

export default Score
