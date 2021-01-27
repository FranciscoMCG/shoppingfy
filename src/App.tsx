import styled from 'styled-components';

import { ShoppingBasket } from './views/ShoppingBasket';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <AppContainer>
      <ShoppingBasket />
    </AppContainer>
  );
};

export default App;
