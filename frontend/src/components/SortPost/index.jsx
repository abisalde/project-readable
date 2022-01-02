import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import {purple} from '@mui/material/colors';

const SortPost = ({sorted, postSortHandler}) => {
  return (
    <Fragment>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>Sort by</FormLabel>
        <RadioGroup row aria-label='sort' name='post-sorting' value='sort'>
          <FormControlLabel
            value='date'
            control={
              <Radio
                size='small'
                onChange={postSortHandler}
                checked={sorted === 'date'}
                sx={{
                  color: purple[800],
                  '&.Mui-checked': {
                    color: purple[600],
                  },
                }}
              />
            }
            label='Date'
          />
          <FormControlLabel
            value='score'
            control={
              <Radio
                size='small'
                onChange={postSortHandler}
                checked={sorted === 'score'}
                sx={{
                  color: purple[800],
                  '&.Mui-checked': {
                    color: purple[600],
                  },
                }}
              />
            }
            label='Score'
          />
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};
SortPost.propTypes = {
  sorted: PropTypes.oneOf(['date', 'score']).isRequired,
  postSortHandler: PropTypes.func.isRequired,
};
export default SortPost;
