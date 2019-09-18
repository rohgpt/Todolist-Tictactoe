import React from 'react';

const ProductList = (props) => {
  if (props.items.length > 0) {
    return props.items.map((item) => {
      return (
        <div>
          <p>{item.name}</p>
          <img src={item.itemImage} alt={item.name}></img>
        </div>
      )
    });
  } else {
    return <div>Nothing To Display</div>
  }
}

export default ProductList;
