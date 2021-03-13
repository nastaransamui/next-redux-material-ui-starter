import React, {Fragment} from 'react';
import {Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import FooterWithCounter from '../MainPage/Footer/FooterWithCounter'

export default function AboutPage(props) {
  const {"next-i18next": nextI18Next }= useSelector(state => state)
  const {header} = props
  return (
    <Fragment>
        <section id="banner" style={{minHeight: 685}}>
        <Typography variant="h4" component="h1" gutterBottom >
        {header[`${nextI18Next}_AboutPage`]}
        </Typography>
      </section>
      <section id="testimonials" >
        <FooterWithCounter {...props}/>
      </section>
    </Fragment>
    // <div >
    //  <Typography variant="h4" component="h1" gutterBottom >
    //  {header[`${nextI18Next}_AboutPage`]}
    //  </Typography>
    // </div>
  );
}