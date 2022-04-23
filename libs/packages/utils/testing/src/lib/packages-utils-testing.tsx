import styles from './packages-utils-testing.module.scss';

/* eslint-disable-next-line */
export interface PackagesUtilsTestingProps {}

export function PackagesUtilsTesting(props: PackagesUtilsTestingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PackagesUtilsTesting!</h1>
    </div>
  );
}

export default PackagesUtilsTesting;
