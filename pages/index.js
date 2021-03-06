import Link from "next/link"
import Head from 'next/head'
import Layout from "../components/Layout"
import { API_URL } from "../config"
import EventItem from "../components/EventItems"

export default function Home({events}) {

  console.log(events)
  return (
   <Layout>

       <h1> Upcoming Events</h1>




       {
        events.length === 0  && <h3> No events to show</h3>
       }


       {events && events.map(event => (

        
           <EventItem key={event.id} event={event} />




       ))}

       {events.length > 0 && (
         <Link href="/events">
            <a className="btn-secondary">View All  </a>
  </Link>)}
   </Layout>
  )
}


export async function getStaticProps(){

  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json()



  console.log(events)

 return{
  props: { events:events.slice(0,3) },
  revalidate: 10,
 }

}