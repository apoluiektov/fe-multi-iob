import { render } from '@testing-library/react';

import BackOfficeDataAccessCore from './back-office-data-access-core';

describe('BackOfficeDataAccessCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackOfficeDataAccessCore />);
    expect(baseElement).toBeTruthy();
  });
});
