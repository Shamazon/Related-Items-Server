import React from 'react';
import ReactDOM from 'react-dom';

import Product from './Product.jsx';

import styles from './styles/Products.css';

export default (props) => {

  const productsClassName = 'Products__inner___2mjZo';
  const goLeftClassName = 'Products__goLeft___3ROMB';

  const scrollRight = (event) => {
    document.getElementsByClassName(productsClassName)[0].scrollLeft += 500;
    // document.getElementsByClassName(goLeftClassName)[0].style.display = 'initial';
    event.currentTarget.style = 'right: 0';
  };

  const scrollLeft = (event) => {
    document.getElementsByClassName(productsClassName)[0].scrollLeft -= 500;
    // document.getElementsByClassName(goLeftClassName)[0].style.display = 'initial';
    event.currentTarget.style = 'right: 0';
  };

  if (props.products.length) {
    return (<div className={styles.relatedProducts}>
      
      
      <div className={styles.inner}>
        {props.products.map((product) => (
          <Product
            product={product}
            key={product.id}
          />
        ))}
      </div>

      <button className={styles.goLeft} onClick={scrollLeft}>&lt;</button>
      <button className={styles.goRight} onClick={scrollRight}>&gt;</button>
    </div>);
  } else {
    return <span>Loading...</span>
  }
}