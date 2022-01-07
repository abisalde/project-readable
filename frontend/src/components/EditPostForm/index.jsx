import React, {Fragment, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  TextField,
  FormControl,
  Typography,
  FormLabel,
  Box,
} from '@mui/material';
import {handleUpdatePost} from '../../redux/actions/posts';

const EditPostForm = ({post}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {body, title, category, id, author} = post;
  const [postEdited, setPostEdited] = useState(false);
  const [values, setValues] = useState({
    title,
    body,
  });

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostEdited(false);

    if (values.title.trim() !== '' || values.body.trim() !== '') {
      dispatch(handleUpdatePost(values));
      setPostEdited(true);
    }
  };

  if (postEdited === true) {
    return navigate('/');
  }

  return (
    <Fragment>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{marginTop: 5, marginBottom: 7}}
      >
        <Typography
          variant='h5'
          component='h5'
          gutterBottom
          sx={{fontWeight: 'bold', mb: 3}}
        >
          Edit Post
        </Typography>
        <FormControl sx={{width: '100%'}}>
          <TextField
            label='Title'
            fullWidth
            id='demo-helper-text-misaligned-no-helper'
            margin='dense'
            multiline={true}
            required
            placeholder='Title'
            name='title'
            value={values.title}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl sx={{width: '100%', marginTop: 2}}>
          <TextField
            label='Body'
            fullWidth
            id='demo-helper-text-misaligned-no-helper'
            margin='dense'
            multiline={true}
            minRows='10'
            required
            placeholder='Body'
            name='body'
            value={values.body}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 2,
          }}
        >
          <TextField
            label='Author'
            fullWidth
            id='demo-helper-text-misaligned-no-helper'
            margin='dense'
            required
            placeholder='Author'
            sx={{width: '40%'}}
            name='author'
            inputProps={{readOnly: true}}
            variant='filled'
            value={author}
            onChange={handleChange}
          />
          <Typography
            variant='div'
            component='div'
            sx={{
              width: '55%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <FormLabel component='legend' required>
              Post Category
            </FormLabel>
            <Typography component='p' sx={{textTransform: 'capitalize', mt: 1}}>
              {category}
            </Typography>
          </Typography>
        </FormControl>
        <LoadingButton
          type='submit'
          variant='contained'
          color='success'
          fullWidth
          sx={{marginTop: 2}}
        >
          Edit Post
        </LoadingButton>
      </Box>
    </Fragment>
  );
};

EditPostForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default EditPostForm;
