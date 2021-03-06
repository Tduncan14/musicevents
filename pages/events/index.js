import React from 'react';
import Layout from '../../components/Layout';
import {API_URL} from '../../config/index';
import EventItem from '../../components/EventItems';


function Eventspage({events}){



    return(
        <Layout title="events">
           <h1>Events</h1>
           {events.length === 0 && <h3>Nothing has loaded</h3>}



           
                  <h1> Upcoming Events</h1>


         {
            events.length === 0  && <h3> No events to show</h3>
        }


          {events && events.map(event => (

 
         <EventItem key={event.id} event={event} />
     



             ))}
        </Layout>
    )

}



export async function getStaticProps(){

    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json()


    return{
        props:{events},
        revalidate:1,
    }
}



export default  Eventspage