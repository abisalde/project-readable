import React, {Fragment, useState} from 'react';

import {
  TextField,
  Button,
  FormControl,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import {FormContainer, CategoryContainer} from './styles';
import {purple} from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';

const PostForm = ({categories}) => {
  const [values, setValues] = useState({
    title: '',
    body: '',
    category: '',
    author: '',
  });
  const [errors, setErrors] = useState({
    title: 'Please Enter a Title',
    body: 'Please Enter your Post Sentences',
    category: 'Please Select a Category',
    author: 'Please Enter an Author',
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setValues({...values, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  const disabled = !values;
  return (
    <Fragment>
      <FormContainer onSubmit={handleSubmit}>
        <Typography variant='h4' gutterBottom sx={{fontFamily: 'fantasy'}}>
          Add a Post
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
            value={values.author}
            onChange={handleChange}
          />
          <CategoryContainer>
            <FormLabel sx={{fontSize: 14}} required>
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
                      control={
                        <Radio
                          size='small'
                          name={category.name}
                          value={values.category}
                          checked={values.category === category.name}
                          onChange={handleChange}
                          required
                          sx={{
                            fontSize: 14,
                            color: purple[800],
                            '&.Mui-checked': {color: purple[600]},
                          }}
                        />
                      }
                      label={category.name}
                    />
                  );
                })}
            </RadioGroup>
          </CategoryContainer>
        </FormControl>
        <Button
          variant='contained'
          color='success'
          disabled={disabled}
          fullWidth
          endIcon={<SendIcon />}
          sx={{marginTop: 2}}
        >
          Add Post
        </Button>
      </FormContainer>
    </Fragment>
  );
};

export default PostForm;
