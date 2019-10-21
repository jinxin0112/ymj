import React, { useState } from 'react';
import classNames from 'classnames';

import { MainStyle } from './style';

export default () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleClick() {
    setIsOpen(true);
  }
  const btnClass = classNames('ymj-enter-btn', {
    'ymj-enter-btn-open': isOpen
  });
  const videoClass = classNames({
    'ymj-enter-video-open': isOpen
  });
  return (
    <MainStyle>
      <div className={btnClass} onClick={handleClick}>
        <span className="ymj-enter-btn-text">YMJ</span>
      </div>
      <video className={videoClass} autoPlay loop src='lover.mp4'/>
    </MainStyle>
  );
};
