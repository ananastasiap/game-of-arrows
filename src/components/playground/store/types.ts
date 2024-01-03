export interface IPlaygroundStepState {
  step: number
  currentValue: string | null
  enteredValue: string | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepState[]
}
