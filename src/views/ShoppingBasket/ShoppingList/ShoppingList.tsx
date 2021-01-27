import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { itemsSelector, fetchItems } from 'slices/items';

const ShoppingListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
`;

const ShoppingList = () => {
  const dispatch = useDispatch();

  const { items, loading, hasErrors } = useSelector(itemsSelector);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) return <p>loading...</p>;

  if (hasErrors) return <p>Something went wrong...</p>;

  return <ShoppingListContainer>item</ShoppingListContainer>;
};

export default ShoppingList;
