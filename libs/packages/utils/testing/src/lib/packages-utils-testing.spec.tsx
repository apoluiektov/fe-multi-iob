import { render } from '@testing-library/react';

import PackagesUtilsTesting from './packages-utils-testing';

describe('PackagesUtilsTesting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesUtilsTesting />);
    expect(baseElement).toBeTruthy();
  });
});
