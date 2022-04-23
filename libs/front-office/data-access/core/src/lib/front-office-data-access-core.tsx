import styles from './front-office-data-access-core.module.scss';

/* eslint-disable-next-line */
export interface FrontOfficeDataAccessCoreProps {}

export function FrontOfficeDataAccessCore(
  props: FrontOfficeDataAccessCoreProps
) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontOfficeDataAccessCore!</h1>
    </div>
  );
}

export default FrontOfficeDataAccessCore;
