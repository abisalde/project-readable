import React, {Fragment, useMemo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {loadAllPostsCategory} from '../../redux/actions/posts';
import {Tab, Title} from './styles.jsx';
import {Button, ButtonGroup} from '@mui/material';

const CategoryTab = () => {
  const dispatch = useDispatch();

  const categories = useSelector(({categories}) => categories);

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
  // });
  const Tabs = categories?.map((category) => {
    return (
      <Link key={category} to={`/${category}`}>
        <Button>{category}</Button>
      </Link>
    );
  });

  return (
    <Fragment>
      <Tab>
        <Title>Category Tab</Title>
        <ButtonGroup>
          <Link to='/'>
            <Button>All</Button>
          </Link>
          {Tabs}
        </ButtonGroup>
      </Tab>
    </Fragment>
  );
};

export default CategoryTab;
