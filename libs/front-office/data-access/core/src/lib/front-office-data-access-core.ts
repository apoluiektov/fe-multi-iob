import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import frontOfficeSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const frontStore =  configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(frontOfficeSaga)

export type FrontRootState = ReturnType<typeof frontStore.getState>

export type FrontAppDispatch = typeof frontStore.dispatch

