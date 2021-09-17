import styled, { css } from "styled-components";

const CollectionItemImage = css`
  background-image: url(${({imageUrl}) => imageUrl})
`

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 240px;
    display: none;
  }

  &:hover {
    button {
      display: flex;
      opacity: 0.85;
    }
  }

`;

export const CollectionItemImageContainer = styled.div`
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  border-radius: .5em;
  ${CollectionItemImage}
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionNameSpan = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionPriceSpan = styled.span`
  width: 10%;
  margin-bottom: 15px;
`;
