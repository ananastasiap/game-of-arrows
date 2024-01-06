import cn from "classnames"

import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"

import styles from "./text.module.scss"

export interface ITextProps extends MaterialTypographyProps {}

const Text: React.FC<ITextProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialTypography {...props} className={cn(styles.text, className)}>
      {children}
    </MaterialTypography>
  )
}

export default Text
