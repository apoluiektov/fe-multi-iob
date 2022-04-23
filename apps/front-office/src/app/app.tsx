// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FrontOfficeDataAccessCore } from '@multi-epargne/front-office/data-access/core';
import { FrontOfficeFeaturesMain } from '@multi-epargne/front-office/features/main';
import styles from './app.module.scss';

export function App() {
  return (
    <>
      <FrontOfficeFeaturesMain />
      <FrontOfficeDataAccessCore />
      <div />
    </>
  );
}

export default App;
