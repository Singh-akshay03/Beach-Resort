import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import{Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'


export const Home = () => {
    return (
        <>
       <Hero hero="defaultHero">
           <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at just 5000">
           <Link to="/rooms" className="btn-primary">
               our rooms
           </Link>
           </Banner>
       </Hero>
       <Services/>
       <FeaturedRooms/>
       
       </>

    )
}
