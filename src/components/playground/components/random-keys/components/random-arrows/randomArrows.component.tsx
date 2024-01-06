import cn from "classnames"

import { useAppSelector } from "../../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlaygroundStepState } from "../../../../store/types"
import { IMapArrowCodes } from "../../../../types"

import stylesCommon from "../../randomKeys.module.scss"
import styles from "./randomArrows.module.scss"

const RandomArrows: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  const getStylesRandomKeys = (el: IPlaygroundStepState): string => {
    return cn(
      el.success && el.success !== null && styles.icon__success,
      !el.success && el.success !== null && styles.icon__unsuccess,
      stylesCommon.icon,
    )
  }

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((el) => (
        <span key={el.step} className={getStylesRandomKeys(el)}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
