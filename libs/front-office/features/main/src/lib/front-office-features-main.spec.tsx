import { render } from '@testing-library/react';

import FrontOfficeFeaturesMain from './front-office-features-main';

describe('FrontOfficeFeaturesMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontOfficeFeaturesMain />);
    expect(baseElement).toBeTruthy();
  });
});
