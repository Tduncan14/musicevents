import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css'
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';



function Layout ({children,title,keywords,decription}){

   const router = useRouter()

return(
    <div>
      <Head>
          <title>{title}</title>
          <meta name='description' content={decription}/>
          <meta name='keywords' content={keywords}/>
      </Head>
        <Header />
       { router.pathname === '/' && <Showcase /> }
      <div className={styles.container}>
          {children}''
      </div>

      <Footer/>
    </div>
)



}


Layout.defaultProps ={
    title:'Dj Events | Find the hotties parties',
    description:'Find the latest Dj and other musical events',
    keywords:'music,dj,edm'
}

export default Layout