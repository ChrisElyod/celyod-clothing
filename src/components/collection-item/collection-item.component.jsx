import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/button.component';
import { addCartItem } from '../../redux/cart/cart.actions';

import { CollectionFooterContainer, CollectionItemContainer, CollectionItemImageContainer, CollectionNameSpan, CollectionPriceSpan } from './collection-item.styles';

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
  <CollectionItemContainer>
    <CollectionItemImageContainer
      imageUrl={imageUrl}
    />
    <CollectionFooterContainer>
      <CollectionNameSpan>{ name }</CollectionNameSpan>
      <CollectionPriceSpan>{ price }</CollectionPriceSpan>
    </CollectionFooterContainer>
    <Button inverted onClick={() => addCartItem(item)}>ADD TO CART</Button>
  </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);