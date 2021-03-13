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
import header from '../public/locale/header.json';
import MainPage from '../src/MainPage'
import footerText from '../public/locale/footer.json';

export const useStyles = makeStyles(theme => ({
  containerWrap: {
    marginTop: theme.spacing(3),
    minHeight: '100vh',
    '& > section': {
      position: 'relative'
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  
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
              <div className={classes.appBarSpacer} />
        <MainPage {...props}/>
        </main>
        </div>
        <Copyright {...props}/>
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
  if (!checkCookies(ctx, `next-i18next`)) {
    setCookies(ctx, `next-i18next`, 'en'); 
    ctx.store.dispatch({type: `next-i18next`, payload: 'en'});
  } else {
    ctx.store.dispatch({type: `next-i18next`, payload: getCookies(ctx, `next-i18next`)})
  }
  const cookies = getCookies(ctx);
  return {props: {
    cookies,
    header,
    footerText
  }}
})
