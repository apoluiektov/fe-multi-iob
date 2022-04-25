import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import backOfficeSaga from './sagas'
import { testReducer } from './test.slice'

const sagaMiddleware = createSagaMiddleware()

export const backStore =  configureStore({
  reducer: {
    test: testReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(backOfficeSaga)

export type BackRootState = ReturnType<typeof backStore.getState>

export type BackAppDispatch = typeof backStore.dispatch
