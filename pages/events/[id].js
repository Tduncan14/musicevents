import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'



function about1(){

  const router = useRouter()

  console.log(router)



    return(<Layout>
        <h3>{router.pathname}</h3>
        </Layout>
    )
}


export default about1