import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { setCookies,getCookies, checkCookies } from 'cookies-next';
import { wrapper } from '../redux/store'
import { useTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../src/Header/Header'
import Head from 'next/head';
import { Paper } from '@material-ui/core';
import footerText from '../public/locale/footer.json';
import { csrfToken } from 'next-auth/client'
import AboutPage from '../src/About/AboutPage'
import header from '../public/locale/header.json'


const useStyles = makeStyles(theme => ({
  containerWrap: {
    marginTop: theme.spacing(10),
    minHeight: '100vh'
  },
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  appBarSpacer: theme.mixins.toolbar,
}));
export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Fragment>
      <Head>
    <title>
      Abount Page
    </title>
  </Head>
  <CssBaseline />
      <div className={classes.mainWrap}>
        <Header {...props} />
        <main className={classes.containerWrap}>
              <div className={classes.appBarSpacer} />
              <AboutPage {...props}/>
        </main>
        </div>
        <Copyright {...props}/>
    </Fragment>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(async (ctx) =>{
  if (!checkCookies(ctx, 'themeType')) {
    setCookies(ctx, 'themeType', 'dark'); 
    ctx.store.dispatch({type: 'themeType', payload: 'dark'});
  } else {
    ctx.store.dispatch({type: 'themeType', payload: getCookies(ctx, 'themeType')})
  }
  if (!checkCookies(ctx, 'themeName')) {
    setCookies(ctx, 'themeName', 'deepBlue'); 
    ctx.store.dispatch({type: 'themeName', payload: 'deepBlue'});
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
