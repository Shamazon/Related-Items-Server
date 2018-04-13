import React from 'react';
import ReactDOM from 'react-dom';

import Product from './Product.jsx';

import styles from './styles/Products.css';

export default (props) => {
  if (props.products.length) {
    return (<div className={styles.relatedProducts}>

      {props.products.map((product) => (
        <Product
          product={product}
          key={product.id}
        />
      ))}

    </div>);
  } else {
    return <span>Loading...</span>
  }
}