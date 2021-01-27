import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { basketSelector, resetAll } from 'slices/basket';
import colors from 'styles/colors';

const { white, blueLight, greyDark, greyLight } = colors;

const ShoppingTotalContainer = styled.div`
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

const ShoppingTotal = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector(basketSelector) as any;

  const total = Object.values(basket)
    .reduce((sum: number, n: any) => sum + n, 0)
    .toFixed(2);
  console.log('total', total);

  const handleClick = () => dispatch(resetAll());
  const isDisabled = !basket;
  console.log(isDisabled);
  return (
    <ShoppingTotalContainer>
      <Total>£{total}</Total>
      <Clear onClick={handleClick}>Clear</Clear>
      <Button disabled={isDisabled} onClick={() => console.log('fired')}>
        Check Out &gt;
      </Button>
    </ShoppingTotalContainer>
  );
};

export default ShoppingTotal;
