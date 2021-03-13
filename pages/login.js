import React,{Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {  useTheme, makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import Header from '../src/Header/Header';
import { wrapper } from '../redux/store';
import { setCookies,getCookies, checkCookies } from 'cookies-next';
import header from '../public/locale/header.json'
import loginText from '../public/locale/login.json';
import copyrightText from '../public/locale/copyright.json'
import {useSelector} from 'react-redux';
import Fab from '@material-ui/core/Fab';
import {  FaFacebookF, FaGoogle,FaTwitter } from  'react-icons/fa';
import { useRouter } from 'next/router'
import { signIn, signOut, useSession,getSession } from 'next-auth/client'

function Copyright(props) {
  const {"next-i18next": nextI18Next }= useSelector(state => state)
  const {copyrightText} = props;
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`${copyrightText[`${nextI18Next}_copyright`]} © `}
      <Link color="inherit" href="">
      {`${copyrightText[`${nextI18Next}_website`]}`}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  containerWrap: {
    marginTop: theme.spacing(65),
  },
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  facebook :{
    backgroundColor: '#3b5998',
    color: '#fff',
    disableRipple: true,
    "&:hover": {
        backgroundColor: "#002a81"
      }
},
google: {
    backgroundColor: "#DB4437",
    color:"#fff",
    "&:hover": {
        backgroundColor: "#ff1400"
      }
},
twitter: {
    backgroundColor: "#38A1F3",
    color:"#fff",
    "&:hover": {
        backgroundColor: "#007fe2"
      }
},
font: {
    fontSize: '24px'
}
}));
const renderSocialIcon = (provider) =>{
  switch (provider) {
    case 'facebook':
      return <FaFacebookF />
    case 'google':
     return    <FaGoogle />
    case 'twitter':
      return   <FaTwitter />
    break;
  }
}

export default function SignInSide(props) {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter()
  const {"next-i18next": nextI18Next }= useSelector(state => state)
  const submit = (e) =>{
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Fragment>
      <Head>
        <title>Login Page</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header {...props} />
        <main className={classes.containerWrap}>
        <Grid container component="main" className={classes.root} >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.mainWrap}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {loginText[`${nextI18Next}_login_singIn`]}
          </Typography>
          <Grid container direction="row" justify="space-evenly" alignItems="center" style={{padding: 20}}>
          <>{
          ['facebook', 'google', 'twitter'].map((provider, i) => {
            return(
              <div key={i.toString()}>
            <Grid container >
            <Fab variant="round" onClick={() =>{
              signIn(provider, { callbackUrl: `http://localhost:3000${router.pathname}` })
            } }
                className={classes[`${provider}`]}>
                {renderSocialIcon(provider)}
            </Fab>
        </Grid>
            </div>
            )
          })}</>
            </Grid>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={loginText[`${nextI18Next}_login_email_label`]}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={submit}
              className={classes.submit}
            >
              {loginText[`${nextI18Next}_signin_button`]}
            </Button>
            <Box mt={5}>
              <Copyright {...props}/>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  
        </main>
      </div>
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
  const session = await getSession(ctx);
  if(ctx.res && session !== null ){
    return{
      redirect:{
        permanent: false,
        destination: '/'
      }
    }
  }
  return {props: 
    {
    session,
    cookies,
    header,
    loginText,
    copyrightText
  }}
})