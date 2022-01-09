import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const Layout = ({children}) => {
  return (
    <Fragment>
      <main className={styles.wrapper}>{children}</main>
      <footer
        style={{
          position: `fixed`,
          width: `100%`,
          bottom: 0,
          marginTop: `3rem`,
          backgroundColor: `#61564C`,
          color: `#fff`,
          padding: `1.5rem 0`,
          fontSize: `1.125rem`,
          fontWeight: 600,
        }}
      >
        <div className={styles.wrapper}>
          © {new Date().getFullYear()}, Developed by
          {` `}
          <a
            style={{color: `rgb(242, 104, 6)`}}
            href='https://twitter.com/abisalde'
          >
            Abisalde
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
