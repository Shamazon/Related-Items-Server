import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles/Product.css';

export default (props) => {
  const {product} = props;
  return (
    <div className={styles.product}>
      <div className={styles.picture}>
        <img src={product.imageUrls[0]} />
      </div>

      <span className={styles.price}>${product.price}</span>

      <a href={`http://localhost/${product.id}`}>
        {product.name}
      </a>

    </div>
  );
};