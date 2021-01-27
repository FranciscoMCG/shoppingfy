import styled from 'styled-components';

import colors from 'styles/colors';
import { ShoppingList } from './';
import { ShoppingTotal } from './';

const ShoppingBasketContainer = styled.div`
  border: 2px solid ${colors.greyLight};
  max-width: 30rem;
  width: 70%;
  padding: 2rem 1.2rem;
`;
const ShoppingBasket = () => {
  return (
    <ShoppingBasketContainer>
      <ShoppingList />
      <ShoppingTotal />
    </ShoppingBasketContainer>
  );
};

export default ShoppingBasket;
