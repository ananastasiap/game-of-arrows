import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps,
} from "@mui/material"

import styles from "./button.module.scss"

export interface IButtonProps extends MaterialButtonProps {}

const Button: React.FC<IButtonProps> = (props) => {
  const { children } = props

  return (
    <MaterialButton
      variant="contained"
      size="small"
      {...props}
      className={styles.button}
    >
      {children}
    </MaterialButton>
  )
}

export default Button
