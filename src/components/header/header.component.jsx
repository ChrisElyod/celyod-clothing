import React from 'react';
import { getAuth, signOut } from '@firebase/auth';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="shop">
        SHOP
      </OptionLink>
      <OptionLink to="shop">
        CONTACT
      </OptionLink>
      {
        currentUser ?
        <OptionLink as="div" onClick={() => {
          const auth = getAuth();
          signOut(auth);
        }}>SIGN OUT</OptionLink> :
        <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon />
      {
        hidden
        ? null
        : <CartDropdown />
      }
    </OptionsContainer>
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);