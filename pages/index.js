import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Head from 'next/head';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import CssBaseline from '@material-ui/core/CssBaseline';
import { setCookies,getCookies, checkCookies } from 'cookies-next';
import Header from '../src/Header/Header'
import { wrapper } from '../redux/store'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  containerWrap: {
    marginTop: 100,
    minHeight: '100vh'
  },
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  ButtonRoot:{
    background: "red"
  }
}));
export default function Index(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <Head>
        <title>
          Home Page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header {...props} />
        <main className={classes.containerWrap}>
        <Typography variant="h4" component="h1" gutterBottom> Main Page will come here</Typography>
        </main>
        </div>
        <Copyright />
        </React.Fragment>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(async (ctx) =>{
  if (!checkCookies(ctx, 'themeType')) {
    setCookies(ctx, 'themeType', 'light'); 
    ctx.store.dispatch({type: 'themeType', payload: 'light'});
  } else {
    ctx.store.dispatch({type: 'themeType', payload: getCookies(ctx, 'themeType')})
  }
  if (!checkCookies(ctx, 'themeName')) {
    setCookies(ctx, 'themeName', 'oceanBlue'); 
    ctx.store.dispatch({type: 'themeName', payload: 'oceanBlue'});
  } else {
    ctx.store.dispatch({type: 'themeName', payload: getCookies(ctx, 'themeName')})
  }
  const cookies = getCookies(ctx);
  return {props: {cookies}}
})
