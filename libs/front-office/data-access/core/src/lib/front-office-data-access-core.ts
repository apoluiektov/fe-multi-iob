import { configureStore } from '@reduxjs/toolkit'

export const frontStore =  configureStore({
  reducer: {}
})

export type FrontRootState = ReturnType<typeof frontStore.getState>

export type FrontAppDispatch = typeof frontStore.dispatch

