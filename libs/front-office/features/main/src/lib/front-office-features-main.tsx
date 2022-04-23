import { FrontOfficeDataAccessCore } from '@multi-epargne/front-office/data-access/core';
import { Uikit } from '@multi-epargne/packages-ui-kit';
import styles from './front-office-features-main.module.scss';

/* eslint-disable-next-line */
export interface FrontOfficeFeaturesMainProps {}

export function FrontOfficeFeaturesMain(props: FrontOfficeFeaturesMainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontOfficeFeaturesMain!</h1>
      <FrontOfficeDataAccessCore />
      <Uikit />
    </div>
  );
}

export default FrontOfficeFeaturesMain;
