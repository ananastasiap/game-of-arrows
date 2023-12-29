export interface IPlaygroundStepState {
  currentValue: string
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepState[]
}
