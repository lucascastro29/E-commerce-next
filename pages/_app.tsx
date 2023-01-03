import '../styles/globals.css'
import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavItem from '../Component/navitem';
import Footer from '../Component/Footer';
import store from '../redux/store/index';
import { Provider } from '../node_modules/react-redux/es/index';
import {  EcommerceProvider } from '../context/EcommerceProvider';
import Head from 'next/head';



function MyApp({ Component, pageProps }) {

  

     
       
     
  return (
    <Provider store={store}>
      <EcommerceProvider>
        <NavItem />
        <Head>
          <title>commerce</title>
        </Head>
        <Component {...pageProps} />
        <Footer />
      </EcommerceProvider>
    </Provider>
  );
  
}

export default MyApp
