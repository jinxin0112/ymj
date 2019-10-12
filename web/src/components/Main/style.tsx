import styled from 'styled-components';

export const MainStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .ymj-enter-btn {
    font-size: 48px;
    font-family: 'Josefin Sans', sans-serif;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid #aaa;
    line-height: 120px;
    text-align: center;
    cursor: pointer;
    transition: all 0.8s;
    color: #aaa;
    &:hover {
      border-color: #fff;
      color: #fff;
    }
    position: absolute;
    z-index: 3;
  }
  .ymj-enter-btn-open {
    opacity: 0;
  }
  video {
    width: 0;
    height: 0;
    transition: all 1s;
    transition-delay: 1s;
    border-radius: 50% 50%;
    position: relative;
    z-index: 2;
    &.ymj-enter-video-open {
      width: 80%;
      height: 60%;
      border-radius: 0;
    }
  }
`;
