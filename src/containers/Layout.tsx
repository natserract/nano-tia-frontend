import React from 'react';

import styles from './Layout.module.scss';

const Layout: React.FC = (props) => {

  return (
    <React.Fragment>
      {props.children}
      {/* <Header />
      <Content className={styles.wrapper}>
        <div className={styles.content}>{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        &#169;Anekonnect {currentDate.getFullYear()}. All Rights Reserved
      </Footer> */}
    </React.Fragment>
  );
};

export default Layout;
