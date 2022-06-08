import Link from "next/link"
import Head from 'next/head'
import Layout from "../components/Layout"
import { API_URL } from "../config"

export default function Home({events}) {

  console.log(events)
  return (
   <Layout>
       <h1> Upcoming Events</h1>
   </Layout>
  )
}



export async function getServerSideProps(){

  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json()



  console.log(events)

 return{
   props:{events},
  //  to show update real time and make the request if the data has changed
  revalidate:1
 }

}