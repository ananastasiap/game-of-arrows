import cn from "classnames"

import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"

import styles from "./header.module.scss"

export interface IHeaderProps extends MaterialTypographyProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  const { children, className = "" } = props

  return (
    <MaterialTypography
      variant="h3"
      {...props}
      className={cn(styles.text, className)}
    >
      {children}
    </MaterialTypography>
  )
}

export default Header
