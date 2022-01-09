import {Button} from '@mui/material';
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Page404,
  Page404Text,
  HelperText404,
  HelperText,
} from '../components/shared/styles';

const PageNotFound = () => {
  return (
    <Fragment>
      <Layout>
        <Page404>
          <Page404Text>404</Page404Text>
          <HelperText404>Page Not Found</HelperText404>
          <HelperText>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </HelperText>
          <Button
            variant='contained'
            color='success'
            sx={{
              width: '100%',
              marginTop: 2,
              textTransform: 'capitalize',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              maxWidth: '200px',
              textAlign: 'center',
              alignSelf: 'center',
            }}
          >
            <Link to='/' style={{color: '#fff'}}>
              Go to Home
            </Link>
          </Button>
        </Page404>
      </Layout>
    </Fragment>
  );
};

export default PageNotFound;
