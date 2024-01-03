import { createSlice } from "@reduxjs/toolkit"
import { IPlaygroundState } from "./types"
import { ARR_ARROW_CODES } from "../constants"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },
    setSteps: (state) => {
      const randomKeys = Math.floor(Math.random() * ARR_ARROW_CODES.length)

      state.steps.push({
        currentValue: ARR_ARROW_CODES[randomKeys],
        enteredValue: null,
      })
    },
    setEnteredValue: (state, action) => {
      const step = state.steps[state.currentStep - 1]

      state.steps[state.currentStep - 1] = {
        ...step,
        enteredValue: action.payload,
      }
    },
  },
})

export const { setCurrentStep, setSteps, setEnteredValue } =
  playgroundSlice.actions
export default playgroundSlice.reducer
