import React from 'react';
import enzyme from 'enzyme';
import App from '../client/src/components/App.jsx';
import RelatedProducts from '../client/src/components/RelatedProducts.jsx';

describe('<RelatedProducts />', () => {
  it('should call setRelatedProducts when component mounts', () => {
    const spy = jest.spyOn(App.prototype, 'setRelatedProducts');
    const component = enzyme.mount(<App />);
    component.update();
    expect(spy).toHaveBeenCalled();
  });

  it('should render "loading..." when no props are received', () => {
    const wrapper = enzyme.shallow(<RelatedProducts products={[]} />);
    expect(wrapper.html()).toBe('<span>Loading...</span>');
  });

  it('should render products when props are received', () => {
    const products = [{
      id: 10,
      name: 'test product',
      price: '10.00',
      imageUrls: ['fakeURL']
    }];
    const wrapper = enzyme.shallow(
      <RelatedProducts
        products={products}
      />
    );
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });
});