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
      showLeftButton: false,
      showRightButton: true,
    };
  }

  componentDidMount() {
    const productId = this.props.id || 0;
    this.setRelatedProducts(productId);
  }

  componentWillReceiveProps(nextProps) {
    this.setRelatedProducts(nextProps.id);
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

  hideButton(btn) {
    if (btn === 'right') {
      this.setState({ showRightButton: false });
    } else {
      this.setState({ showLeftButton: false });
    }
  }

  showButton(btn) {
    if (btn === 'right') {
      this.setState({ showRightButton: true });
    } else {
      this.setState({ showLeftButton: true });
    }
  }

  render() {
    return (
      <RelatedProducts 
        products={this.state.products}
        showLeftButton={this.state.showLeftButton}
        showRightButton={this.state.showRightButton}
        showButton={this.showButton.bind(this)}
        hideButton={this.hideButton.bind(this)}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));