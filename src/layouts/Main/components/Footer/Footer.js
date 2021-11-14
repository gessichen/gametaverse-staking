import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import WebbeeLogo from 'svg/logos/Webbee';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={'100%'}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="textSecondary"
          gutterBottom
        >
          &copy; gametaverse. 2021, All rights reserved
        </Typography>
        <Box marginTop={2}>
          <IconButton aria-label="facebook" size={'small'}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="twitter" size={'small'}>
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  </Grid>
);

export default Footer;
