import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from '@mui/material';

const CommentsDisplay = ({body}) => {
  return (
    <Fragment>
      <Box
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant='p'
          component='p'
          sx={{fontSize: '0.851rem', width: '100&'}}
        >
          {body}
        </Typography>
      </Box>
    </Fragment>
  );
};

CommentsDisplay.propTypes = {
  body: PropTypes.string.isRequired,
};

export default CommentsDisplay;
