import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Link from 'next/link';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar(props) {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor:'#ffb5ba'}}>
          <Toolbar>
            <Typography >Yudi Gunawan</Typography>
            <div style={{display:'flex' , marginLeft:'auto'}}>
                <Link href='/'><p style={{margin:5,cursor:'pointer'}}>Home</p></Link>
                <Link href='/kontak'><p style={{margin:5, cursor:'pointer'}}>Kontak</p></Link>
                <Link href='/cv'><p style={{margin:5, cursor:'pointer'}}>Cv</p></Link>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

    </React.Fragment>
  );
}
