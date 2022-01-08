import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {Tab, TabContainer} from './styles.jsx';

const tabBox = {
  color: '#4A435C',
  textTransform: 'Capitalize',
  fontSize: '1rem',
  padding: '0.35rem 0rem',
  fontFamily: 'Merriweather',
};

const CategoryTab = () => {
  const categories = useSelector(({categories}) => categories);

  const Tabs =
    categories &&
    categories.length > 0 &&
    categories.map((category) => {
      return (
        <Tab key={category.name}>
          <NavLink
            to={`/${category.path}`}
            style={tabBox}
            className={({isActive}) =>
              isActive ? 'tab_selector_active' : 'tab_selector'
            }
          >
            {category.name}
          </NavLink>
        </Tab>
      );
    });

  return (
    <Fragment>
      <TabContainer>
        <Tab>
          <NavLink
            to='/'
            style={tabBox}
            className={({isActive}) =>
              isActive ? 'tab_selector_active' : 'tab_selector'
            }
          >
            Home
          </NavLink>
        </Tab>
        {Tabs}
      </TabContainer>
    </Fragment>
  );
};

export default CategoryTab;
