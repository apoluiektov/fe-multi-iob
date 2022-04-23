import styles from './back-office-data-access-core.module.scss';

/* eslint-disable-next-line */
export interface BackOfficeDataAccessCoreProps {}

export function BackOfficeDataAccessCore(props: BackOfficeDataAccessCoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BackOfficeDataAccessCore!</h1>
    </div>
  );
}

export default BackOfficeDataAccessCore;
