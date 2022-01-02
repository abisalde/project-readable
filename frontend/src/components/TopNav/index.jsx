import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {BarContainer, LogoContainer, Title} from './styles';

const TopNav = ({title}) => {
  return (
    <Fragment>
      <BarContainer>
        <LogoContainer>
          <Title>
            <Link to='/' style={{color: '#4A435C', outline: 'none'}}>
              {title}
            </Link>
          </Title>
        </LogoContainer>
      </BarContainer>
    </Fragment>
  );
};

TopNav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopNav;
