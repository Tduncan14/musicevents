import React from 'react';
import Link from 'next/link'
import Styles from '../styles/Footer.module.css'


export default function Footer (){






return(
    <footer className={Styles.footer}>
    <p>Copyright &copy; Musical Events</p>

    <p>
        <Link href="/about">About this project</Link>
    </p>
    </footer>

 
)


}