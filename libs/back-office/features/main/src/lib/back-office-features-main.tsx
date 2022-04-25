import { Uikit } from '@multi-epargne/packages-ui-kit';
import styles from './back-office-features-main.module.scss';

/* eslint-disable-next-line */
export interface BackOfficeFeaturesMainProps {}

export function BackOfficeFeaturesMain(props: BackOfficeFeaturesMainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BackOfficeFeaturesMain!</h1>
      <Uikit />
    </div>
  );
}

export default BackOfficeFeaturesMain;
