import { Uikit } from '@multi-epargne/packages-ui-kit';
import styles from './back-office-features-main.module.scss';

import { getTestState, useBackAppSelector } from '@multi-epargne/back-office/data-access/core';

/* eslint-disable-next-line */
export interface BackOfficeFeaturesMainProps {}

export function BackOfficeFeaturesMain(props: BackOfficeFeaturesMainProps) {
    // store test
    const testSlice = useBackAppSelector(getTestState)
  

  return (
    <div className={styles['container']}>
      <h1>Welcome to BackOfficeFeaturesMain!</h1>
      <b>{testSlice.test}</b>
      <Uikit />
    </div>
  );
}

export default BackOfficeFeaturesMain;
