export interface IPlaygroundStepState {
  currentValue: string | null
  enteredValue: string | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepState[]
}
