import { render } from '@testing-library/react';

import FrontOfficeDataAccessCore from './front-office-data-access-core';

describe('FrontOfficeDataAccessCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontOfficeDataAccessCore />);
    expect(baseElement).toBeTruthy();
  });
});
