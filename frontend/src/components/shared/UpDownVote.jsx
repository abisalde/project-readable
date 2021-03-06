import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {IconButton, Tooltip} from '@mui/material';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

const UpDownVote = ({upVote, downVote}) => {
  return (
    <Fragment>
      <Tooltip title='Up Vote' arrow id='Up Vote'>
        <IconButton color='primary' size='small' onClick={upVote}>
          <ThumbUpAltOutlinedIcon color='success' fontSize='small' />
        </IconButton>
      </Tooltip>
      <Tooltip title='Down Vote' arrow id='Down Vote' onClick={downVote}>
        <IconButton color='primary' size='small'>
          <ThumbDownAltOutlinedIcon color='warning' fontSize='small' />
        </IconButton>
      </Tooltip>
    </Fragment>
  );
};

UpDownVote.propTypes = {
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default UpDownVote;
