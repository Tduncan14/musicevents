import {FaExclamationTriangle} from 'react-icons/fa'
import Layout from "../components/Layout";
import Link from 'next/link'
import Styles from '../styles/NotFound.module.css'


export default function NotFoundPage(){




     return(
         <Layout title="page not found">
             <div className={Styles.error}>
                 <h1> <FaExclamationTriangle /> </h1>
                 <h4>Sorry,page doesn't exist</h4>
                 <Link href="/">Home</Link>
             </div>
         </Layout>
     )

}