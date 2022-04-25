import { TypedUseSelectorHook, useSelector } from 'react-redux'

import type { BackRootState } from '../../lib/back-office-data-access-core'

export const useBackAppSelector: TypedUseSelectorHook<BackRootState> = useSelector
