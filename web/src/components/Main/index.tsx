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
      <video className={videoClass} autoPlay loop src='http://110.185.117.29/vcloud1049.tc.qq.com/1049_M0101095004dZuYf4GjlMy1001577684.f40.mp4?vkey=9BDB5393AB27CB517699A1A370285FD3E65F0ED3D44FD24C326A67A810AC7A5C66CAD4AE1ADEE4A462EDC46F01220A8A1245EB0EA6AA46399285606CD17B14FA669F5BD510FA7EA816E0D4558FD93743874D2AEDDDA85D80'/>
    </MainStyle>
  );
};
