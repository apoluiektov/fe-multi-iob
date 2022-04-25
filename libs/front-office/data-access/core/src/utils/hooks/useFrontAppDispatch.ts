import { useDispatch } from 'react-redux';

import type { FrontAppDispatch } from '../../lib/front-office-data-access-core'

export const useFrontAppDispatch = () => useDispatch<FrontAppDispatch>();

