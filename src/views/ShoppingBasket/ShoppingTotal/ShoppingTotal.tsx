import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { basketSelector, resetAll } from 'slices/basket';
import colors from 'styles/colors';

const { white, blueLight, greyDark, greyLight } = colors;

const TotalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Total = styled.span`
  width: 50%;
  font-weight: 800;
  font-size: 1rem;
`;

const Clear = styled.button`
  width: 20%;
  color: ${greyDark};
  text-align: center;
  cursor: pointer;
  border: none;
  font-weight: 800;
  font-size: 1rem;
  background-color: transparent;
`;

const Button = styled.button`
  width: 30%;
  color: ${white};
  font-weight: 800;
  font-size: 1rem;
  padding: 0.7rem;
  border: 1px solid ${greyLight};
  background-color: ${blueLight};
  cursor: pointer;
`;

const ShoppingTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const I = styled.span`
  color: red;
  font-style: italic;
  font-size: 1rem;
`;

const ShoppingTotal = () => {
  const dispatch = useDispatch();
  const { basket, isTouched } = useSelector(basketSelector);

  const total = Number(
    Object.values(basket)
      .reduce((sum: number, n) => sum + n.total, 0)
      .toFixed(2),
  );

  const handleClearClick = () => dispatch(resetAll());
  const handleCheckOutClick = () =>
    window.alert(`Thank you for your order. The total is £${total}`);

  const isEmpty = total === 0;

  return (
    <ShoppingTotalContainer>
      {isEmpty && isTouched && <I>There are no items in the basket</I>}
      <TotalContainer>
        <Total>£{total}</Total>
        <Clear onClick={handleClearClick}>Clear</Clear>
        <Button disabled={isEmpty} onClick={handleCheckOutClick}>
          Check Out &gt;
        </Button>
      </TotalContainer>
    </ShoppingTotalContainer>
  );
};

export default ShoppingTotal;
