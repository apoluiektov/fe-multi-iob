import { render } from '@testing-library/react';

import BackOfficeFeaturesMain from './back-office-features-main';

describe('BackOfficeFeaturesMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackOfficeFeaturesMain />);
    expect(baseElement).toBeTruthy();
  });
});
