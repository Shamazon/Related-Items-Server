import React from 'react';
import enzyme from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('<App />', () => {
  it('should render one <App /> component', () => {
    const component = enzyme.shallow(<App />);
    expect(component).toHaveLength(1);
  });

  it('should call setRelatedProducts when component mounts', () => {
    const spy = jest.spyOn(App.prototype, 'setRelatedProducts');
    const component = enzyme.mount(<App />);
    component.update();
    expect(spy).toHaveBeenCalled();
  });

});

