import styled from 'styled-components';

import colors from 'styles/colors';

const ShoppingBasketContainer = styled.div`
  border: 2px solid ${colors.greyLight};
  max-width: 30rem;
  width: 70%;
  padding: 2rem 1.2rem;
`;
const ShoppingBasket = () => {
  return <ShoppingBasketContainer>Shopping</ShoppingBasketContainer>;
};

export default ShoppingBasket;
