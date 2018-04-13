import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import RelatedProducts from './RelatedProducts.jsx';

import './styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const productId = this.props.id || 0;
    this.setRelatedProducts(productId);
  }

  componentWillReceiveProps() {
    this.setRelatedProducts(props.id);
  }

  setRelatedProducts(productId) {
    axios.get(`http://localhost:9001/products/${productId}/related`)
      .then((data) => {
        const products = data.data;
        this.setState({ products });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <RelatedProducts 
        products={this.state.products}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));