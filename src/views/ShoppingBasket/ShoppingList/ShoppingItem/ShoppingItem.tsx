import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import colors from 'styles/colors';
import { basketSelector, qtyChange, reset } from 'slices/basket';
import { Item } from 'slices/items';

const { greyLight } = colors;

const ShoppingItemWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px dashed ${greyLight};
  padding: 1rem 0rem;
`;

const Name = styled.div`
  width: 40%;
`;
const Input = styled.input`
  width: 25%;
  border: 1px solid ${greyLight};
`;

const SubTotal = styled.span`
  width: 30%;
  font-weight: 800;
  color: ${colors.orange};
  text-align: right;
`;

const Delete = styled.button`
  width: 5%;
  color: ${greyLight};
  font-weight: 600;
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ShoppingItem = ({ item }: { item: Item }) => {
  const dispatch = useDispatch();

  const { basket } = useSelector(basketSelector);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      qtyChange({
        itemId: item.SKU,
        value: parseInt(e.target.value),
        price: item.price,
      }),
    );
  };

  const handleClick = () => {
    dispatch(reset({ itemId: item.SKU }));
  };

  const subTotal = parseFloat(basket[item.SKU]?.total) || 0;

  return (
    <ShoppingItemWrapper>
      <Name>{item.name}</Name>
      <Input
        type='number'
        id='qty'
        name='qty'
        min='0'
        max='3'
        placeholder='0'
        onChange={handleChange}
        value={basket[item.SKU]?.qty || 0}
      />
      <SubTotal>
        {item.currency}
        {subTotal.toFixed(2)}
      </SubTotal>
      <Delete onClick={handleClick}>X</Delete>
    </ShoppingItemWrapper>
  );
};

export default ShoppingItem;
