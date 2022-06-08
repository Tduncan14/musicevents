import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { API_URL } from '../../config';


function Event({evt}){

  const router = useRouter()

  console.log(router)



    return(<Layout>
             {evt.name}
        </Layout>
    )
}


export default Event

export async function getServerSideProps({query:{id}}){
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json()
 
  console.log(id);



  return{
    props:{
      evt:events[0]
    }
  }
}