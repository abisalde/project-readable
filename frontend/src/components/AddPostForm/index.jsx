import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';
import {handleAddPost} from '../../redux/actions/posts';
import {useDispatch} from 'react-redux';
import {
  TextField,
  FormControl,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {FormContainer, CategoryContainer} from './styles';
import {purple} from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import {generateUID} from '../../utils/functions';

const PostForm = ({categories}) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    title: '',
    category: '',
    body: '',
    author: '',
  });

  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);
  const [bodyError, setBodyError] = useState('');

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {...values, id: generateUID(), timestamp: Date.now()};

    if (values.body.trim() === '' || values.body.trim().length < 60) {
      setBodyError('Body characters must be at least 60');
    }

    if (values.body.trim() === '' || values.body.trim().length >= 60) {
      setBodyError('');
      setLoading(true);
      dispatch(handleAddPost(post)).then(() => {
        setLoading(false);
        setValues({
          title: '',
          category: '',
          body: '',
          author: '',
        });
        setTimeout(() => {
          setValidate(true);
        }, 1000);
      });
    }
  };

  if (validate === true) {
    return <Navigate to='/' />;
  }

  const controlRadio = (value) => ({
    checked: values.category === value,
    onChange: handleChange,
    value,
    name: 'category',
    inputProps: {'aria-label': value},
  });

  const disabled =
    !values.title || !values.body || !values.author || !values.category;

  return (
    <Fragment>
      <FormContainer>
        <Typography variant='h4' gutterBottom sx={{fontFamily: 'fantasy'}}>
          Add a Post
        </Typography>
        <Box
          mb={2}
          onSubmit={handleSubmit}
          component='form'
          validate
          autoComplete='on'
        >
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
            {bodyError && <small style={{color: 'red'}}>{bodyError}</small>}
            <TextField
              label='Body'
              error={bodyError ? true : false}
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
              value={values.author}
              onChange={handleChange}
            />
            <CategoryContainer>
              <FormLabel component='legend' required>
                Post Category
              </FormLabel>
              <RadioGroup row aria-label='category' name='category'>
                {categories &&
                  categories.length > 0 &&
                  categories.map((category) => {
                    return (
                      <FormControlLabel
                        key={category.path}
                        value={category.name}
                        name={category.name}
                        label={category.name}
                        control={
                          <Radio
                            size='small'
                            required
                            {...controlRadio(category.name)}
                            sx={{
                              fontSize: 14,
                              color: purple[800],
                              '&.Mui-checked': {color: purple[600]},
                            }}
                          />
                        }
                      />
                    );
                  })}
              </RadioGroup>
            </CategoryContainer>
          </FormControl>
          <LoadingButton
            type='submit'
            loading={loading}
            loadingPosition='end'
            variant='contained'
            color='success'
            disabled={disabled}
            fullWidth
            endIcon={<SendIcon />}
            sx={{marginTop: 2}}
          >
            Add Post
          </LoadingButton>
        </Box>
      </FormContainer>
    </Fragment>
  );
};

PostForm.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default PostForm;
