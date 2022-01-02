import React, {Fragment, useMemo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {loadAllPostsCategory} from '../../redux/actions/posts';
import {Tab, TabContainer} from './styles.jsx';

const tabBox = {
  color: '#4A435C',
  textTransform: 'Capitalize',
  fontSize: '1rem',
  padding: '0.35rem 0rem',
  fontFamily: 'Merriweather',
};

const CategoryTab = () => {
  const dispatch = useDispatch();

  const categories = useSelector(({categories}) => categories);
  // const [activeTab, setActiveTab] = useState([]);

  // useMemo((props) => {
  //   const futureCategory = props.categories;
  //   const stateCategory = categories;
  //   if (stateCategory.length === 0 && futureCategory.length !== 0) {
  //     futureCategory.forEach((category) => {
  //       dispatch(loadAllPostsCategory(category));
  //     });
  //   }
  // });

  // useEffect(() => {
  //   if (categories?.length > 0) {
  //     categories?.forEach((category) => {
  //       dispatch(loadAllPostsCategory(category));
  //     });
  //   }
  // }, []);

  const Tabs = categories?.map((category) => {
    return (
      <Tab key={category}>
        <NavLink
          to={`/${category}`}
          style={tabBox}
          className={({isActive}) =>
            isActive ? 'tab_selector' : 'tab_selector'
          }
        >
          {category}
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
              isActive ? 'tab_selector' : 'tab_selector'
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
