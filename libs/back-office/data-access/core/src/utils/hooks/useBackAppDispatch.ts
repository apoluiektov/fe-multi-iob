import { useDispatch } from 'react-redux';

import type { BackAppDispatch } from '../../lib/back-office-data-access-core'

export const useBackAppDispatch = () => useDispatch<BackAppDispatch>();
