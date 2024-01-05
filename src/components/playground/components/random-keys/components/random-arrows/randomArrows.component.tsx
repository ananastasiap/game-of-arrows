import { useAppSelector } from "../../../../../../app/hooks"
import { Text } from "../../../../../UI"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepState } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

import styles from "../../randomKeys.module.scss"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (el: IPlaygroundStepState): string => {
    if (el.success && el.success !== null) {
      return styles.icon__success
    }

    if (!el.success && el.success !== null) {
      return styles.icon__unsuccess
    }

    return styles.icon
  }

  return (
    <>
      {state.steps.map((el) => (
        <Text key={el.step} className={getStylesRandomKeys(el)}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </Text>
      ))}
    </>
  )
}

export default RandomArrows
