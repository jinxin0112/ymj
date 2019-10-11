import React from 'react';
import styled from 'styled-components';

import Circle from '@components/Circle';
import Main from '@components/Main';

const AppContainer = styled.div`
  position: relative;
`;

const BackGround = styled.div`
  position: absolute;
  z-index: 1;
`;

const MainContaier = styled.div`
  position: absolute;
  z-index: 2;
`;

const App: React.FC = () => {
  return (
    <AppContainer className="App">
      <BackGround>
        <Circle />
      </BackGround>
      <MainContaier>
        <Main />
      </MainContaier>
    </AppContainer>
  );
};

export default App;
