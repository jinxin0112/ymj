import React from 'react';

export const Layout: React.SFC = ({ children }) => {
  return (
    <>
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;
