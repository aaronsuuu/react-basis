import { createSlice, Dispatch } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const incrementAsync = (amount: number) => {
  return function (dispatch: Dispatch) {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }
}

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer
