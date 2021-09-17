import styled, { css } from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  height: 400px;
  width: 280px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 10px;
  z-index: 5;
  border-radius: .5em;
`

export const CartItemsContainer = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const CartEmptySpan = styled.span`
  font-size: 18px;
  margin: 50px auto;
`