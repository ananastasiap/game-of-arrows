export interface IPlaygroundStepState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepState[]
  totalSuccessful: number
  totalUnsuccessful: number
}
