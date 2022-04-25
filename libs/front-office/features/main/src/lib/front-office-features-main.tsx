import { Uikit } from '@multi-epargne/packages-ui-kit';
import styles from './front-office-features-main.module.scss';

/* eslint-disable-next-line */
export interface FrontOfficeFeaturesMainProps {}

export function FrontOfficeFeaturesMain(props: FrontOfficeFeaturesMainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontOfficeFeaturesMain!</h1>
      
      <Uikit />
    </div>
  );
}

export default FrontOfficeFeaturesMain;
