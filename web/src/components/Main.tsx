import React from 'react';
import styled from 'styled-components';

const MainStyle = styled.div`
  width: 100vw;
  height: 100vh;
  .ymj-enter-btn{
      font-size: 48px;
      font-family: 'Josefin Sans',sans-serif;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid #fff;
      margin: 0 auto;
  }
`;

export default () => {
  return (
    <MainStyle>
      <div className="ymj-enter-btn">YMJ</div>
    </MainStyle>
  );
};
