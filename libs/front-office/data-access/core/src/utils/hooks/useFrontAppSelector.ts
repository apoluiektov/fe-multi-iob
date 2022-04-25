import { TypedUseSelectorHook, useSelector } from 'react-redux'

import type { FrontRootState } from '../../lib/front-office-data-access-core'

export const useBackAppSelector: TypedUseSelectorHook<FrontRootState> = useSelector
