import { configureStore } from '@reduxjs/toolkit'

import { testReducer } from './test.slice'

export const backStore =  configureStore({
  reducer: {
    test: testReducer
  }
})

export type BackRootState = ReturnType<typeof backStore.getState>

export type BackAppDispatch = typeof backStore.dispatch
