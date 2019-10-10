import React from 'react';
import styled from 'styled-components';

import Circle from '@components/Circle';

const AppContainer = styled.div`
  position: relative;
`;

const BackGround = styled.div`
  position: absolute;
  z-index: 1;
`;

const App: React.FC = () => {
  return (
    <AppContainer className="App">
      <BackGround>
        <Circle />
      </BackGround>
    </AppContainer>
  );
};

export default App;
