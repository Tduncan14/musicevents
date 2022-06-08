import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Styles from '../styles/EventItem.module.css'






export default function EventItem({event}){




    return(
        <div className={Styles.event}>
            <div className={Styles.img} >
                <Image src={event.image ? event.image : '/images/event-default.png'} width={170}  height={100} />
            </div>
            
            <div className={Styles.info}>
            <span>
                {event.data} at {event.time}
            </span>
              
              <h3>{event.name}</h3>
            </div>

            <div className={Styles.link}>
                <Link href={`/events/${event.id}`}>
                    <a className="btn"> Details</a>
                 </Link>
            </div>
        </div>
    )
}