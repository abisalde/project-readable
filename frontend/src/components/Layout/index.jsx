import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const Layout = ({children}) => {
  return (
    <Fragment>
      <div className={styles.wrapper}>{children}</div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
