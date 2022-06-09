import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { API_URL } from '../../config';


function Event({event}){

  const router = useRouter()

  console.log(router)



    return(<Layout>
             {event.name}
        </Layout>
    )
}



export default Event



export async function getStaticPaths(){

  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()


  const paths = events.map(evt =>(
    {
      params:{id:evt.id}
    }
  ))
  
  return {
    paths,
    fallback:false
  }
}

// request on the build time

export async function getStaticProps({params:{id}}){



  const res = await fetch(`${API_URL}/api/events?id=${id}`)
  const events = await res.json()





  return{
    props:{
      event:events[0]
    },
    revalidate:1,
  
  }


}



// request on the server side

// export async function getServerSideProps({query:{id}}){
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json()
 
//   console.log(id);



//   return{
//     props:{
//       evt:events[0]
//     }
//   }
// }