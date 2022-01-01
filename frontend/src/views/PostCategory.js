import React from 'react';
import {useParams} from 'react-router-dom';

const PostCategory = () => {
  let params = useParams();

  const {category} = params;

  console.log('params:::::::::', category);

  return (
    <div>
      <h2>HELLO</h2>
    </div>
  );
};

export default PostCategory;
