import React, {useEffect} from 'react'
import "./offer.css"

import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'


//Let us import images...
import img from '../../Assets/photo2.jpg'
import img5 from '../../Assets/photo8.jpg'
import img7 from '../../Assets/photo7.jpg'
import img9 from '../../Assets/photo5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


//Used Array methods to list our offers.
const Offers = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    price: '17000',
  },

  {
    id: 2,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    price: '12000',
  },

  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Taj Mahal',
    location: 'India',
    price: '9000',
  },

  {
    id: 4,
    imgSrc: img9,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    price: '18000',
  }

]
const Offer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">
          {
            Offers.map(({id,imgSrc,destTitle,location,price})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
                  <div className="destImage">
                    <img className='img' src={imgSrc} alt={destTitle} />
                    <span className='discount'>
                      30% Off
                    </span>
                  </div>

                  <div className="offerBody">
                    <div className="prices flex">
                      <h4 className='h4'>
                        {price}
                      </h4>
                      <span className='status'>
                        For Rent
                      </span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className='icon'/>
                        <small>2 Beds</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className='icon'/>
                        <small>1 Bath</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className='icon'/>
                        <small>Wi-Fi</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className='icon'/>
                        <small>Shuttle</small>
                      </div>
                    </div>

                    <div className="location">
                      <MdLocationOn className="icon"/>
                      <small>450 Vine #310, {location} </small>
                    </div>

                    <button className='btn flex'>
                      View Details
                      <BsArrowRightShort className="icon"/>
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Offer