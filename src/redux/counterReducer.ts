export type InitialStateType = typeof initialState
const initialState = {
   startValue: 0,
   maxValue: 5,
   counterValue: 0,
   settingsIsActive: false,
}

export type CounterReducerActionsType =
   ReturnType<typeof onChangeMaxValueAC> | ReturnType<typeof onChangeStartValueAC> | ReturnType<typeof onSetButtonClickAC> |
   ReturnType<typeof onCounterValueChangeAC>

export const counterReducer = (state: InitialStateType = initialState, action: CounterReducerActionsType): InitialStateType => {
   switch (action.type) {
      case 'counter-reducer/ON-COUNTER-VALUE-CHANGE':
         return { ...state, counterValue: action.newCounterValue }
      case 'counter-reducer/ON-CHANGE-MAX-VALUE':
         return { ...state, maxValue: action.newMaxValue, settingsIsActive: true, counterValue: 0 }
      case 'counter-reducer/ON-CHANGE-START-VALUE':
         return { ...state, startValue: action.newStartValue, settingsIsActive: true }
      case 'counter-reducer/ON-SET-BUTTON-CLICK':
         return { ...state, settingsIsActive: false, counterValue: state.startValue }

      default:
         return state
   }
}

export const onCounterValueChangeAC = (newCounterValue: number) => {
   return { type: 'counter-reducer/ON-COUNTER-VALUE-CHANGE', newCounterValue } as const
}

export const onChangeMaxValueAC = (newMaxValue: number) => {
   return { type: 'counter-reducer/ON-CHANGE-MAX-VALUE', newMaxValue } as const
}

export const onChangeStartValueAC = (newStartValue: number) => {
   return { type: 'counter-reducer/ON-CHANGE-START-VALUE', newStartValue } as const
}

export const onSetButtonClickAC = () => {
   return { type: 'counter-reducer/ON-SET-BUTTON-CLICK' } as const
}