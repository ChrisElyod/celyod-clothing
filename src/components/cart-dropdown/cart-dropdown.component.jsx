import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
import { CartDropdownContainer, CartEmptySpan, CartItemsContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        : <CartEmptySpan>Your cart is empty</CartEmptySpan>
      }
    </CartItemsContainer>
    <Button inverted onClick={() => {
      dispatch(toggleCartHidden());
      history.push('/checkout');
    }}>GO TO CHECKOUT</Button>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));