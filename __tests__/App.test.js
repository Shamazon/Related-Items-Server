import React from 'react';
import enzyme from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = enzyme.shallow(<App />);
    expect(component).toHaveLength(1);
  });
});
