import React,{ Fragment } from 'react';
import useStyles from './main-page-styles'
import {Typography} from '@material-ui/core'
import FooterWithCounter from './Footer/FooterWithCounter'
import {useSelector} from 'react-redux';

function MainPage(props){
    const classes = useStyles();
    const {"next-i18next": nextI18Next }= useSelector(state => state)
    const {header} = props
    return(
        <Fragment>
            <section id="banner" style={{minHeight: 685}}>
            <Typography variant="h4" component="h1" gutterBottom >
              {header[`${nextI18Next}_MainPage`]}
            </Typography>
          </section>
          <section id="testimonials" >
            <FooterWithCounter {...props}/>
          </section>
        </Fragment>
    )
}

export default MainPage;