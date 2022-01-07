import React, {Fragment, useState} from 'react';

import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Box, FormControl, TextField} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {generateUID} from '../../utils/functions';
import {handleAddCommentToPost} from '../../redux/actions/comments';
import {loadAllPostsCategory} from '../../redux/actions/posts';

const CommentsBoxForm = ({parentId, category}) => {
  console.log('COMMENTBOX:::CATE', category);
  const dispatch = useDispatch();
  const [values, setValues] = useState({body: '', author: ''});
  const [commentError, setCommentError] = useState('');
  const [authorError, setAuthorError] = useState('');

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const comment = {
      ...values,
      id: generateUID(),
      timestamp: Date.now(),
      parentId,
    };

    if (values.body.trim() === '' || values.body.trim().length < 6) {
      setCommentError('Comment characters must be at least 6');
    }

    if (values.author.trim() === '' || values.author.trim().length < 3) {
      setAuthorError('Author characters must be at least 3');
    }

    if (values.body.trim() === '' || values.body.trim().length >= 6) {
      if (values.author.trim() === '' || values.author.trim().length >= 3) {
        dispatch(handleAddCommentToPost(comment)).then(() => {
          setValues({body: '', author: ''});
          setCommentError('');
          setAuthorError('');
          dispatch(loadAllPostsCategory(category));
        });
      }
    }
  };

  return (
    <Fragment>
      <Box
        sx={{width: '100%', marginTop: 2}}
        component='form'
        onSubmit={handleSubmit}
      >
        <FormControl sx={{width: '100%', marginTop: 1}}>
          {commentError && <small style={{color: 'red'}}>{commentError}</small>}
          <TextField
            label='Comment'
            error={commentError ? true : false}
            fullWidth
            id='demo-helper-text-misaligned-no-helper'
            margin='dense'
            multiline={true}
            minRows='2'
            required
            placeholder='Comment'
            name='body'
            value={values.body}
            onChange={handleChange}
          />
        </FormControl>
        {authorError && <small style={{color: 'red'}}>{authorError}</small>}
        <FormControl sx={{width: '100%', marginTop: 1}}>
          <TextField
            label='Author'
            error={authorError ? true : false}
            fullWidth
            id='demo-helper-text-misaligned-no-helper'
            margin='dense'
            required
            placeholder='Author'
            name='author'
            value={values.author}
            onChange={handleChange}
          />
        </FormControl>
        <LoadingButton
          type='submit'
          variant='contained'
          color='success'
          sx={{marginTop: 2}}
          fullWidth
        >
          Submit
        </LoadingButton>
      </Box>
    </Fragment>
  );
};

CommentsBoxForm.propTypes = {
  parentId: PropTypes.string,
};

export default CommentsBoxForm;
