import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./result-message"
import { Button, Header } from "../../../UI"

export interface IModal {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModal> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(resetStore())
    setIsShowModal(false)
  }

  return (
    <>
      <Header>Modal</Header>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <Button onClick={handleClose}>Start New Game</Button>
    </>
  )
}

export default Modal
