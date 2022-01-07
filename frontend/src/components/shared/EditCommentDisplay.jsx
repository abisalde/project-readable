import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Button, FormControl, TextField} from '@mui/material';

const EditCommentDisplay = ({body, hideEditForm}) => {
  const [editBody, setEditBody] = useState(body);

  const handleChange = (e) => {
    setEditBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hideEditForm(editBody);
  };

  return (
    <Fragment>
      <Box component='form' onSubmit={handleSubmit} fullWidth>
        <FormControl sx={{width: '100%', marginTop: 1}}>
          <TextField
            label='Comment'
            fullWidth
            id='demo-helper-text-misaligned-no-helper'
            margin='dense'
            multiline={true}
            minRows='2'
            required
            placeholder='Comment'
            name='body'
            value={editBody}
            onChange={handleChange}
          />
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          color='success'
          sx={{marginTop: 1}}
        >
          Edit
        </Button>
      </Box>
    </Fragment>
  );
};

EditCommentDisplay.propTypes = {
  body: PropTypes.string.isRequired,
  hideEditForm: PropTypes.func.isRequired,
};

export default EditCommentDisplay;
