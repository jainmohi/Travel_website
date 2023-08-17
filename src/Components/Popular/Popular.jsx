import React, {useEffect}  from 'react'
import "./popular.css"

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

//import the images--------------->
import img from '../../Assets/photo2.jpg'
import img2 from '../../Assets/photo4.jpg'
import img5 from '../../Assets/photo5.jpg'
import img7 from '../../Assets/photo7.jpg'
import img9 from '../../Assets/photo8.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


// So now we are goin to use a high order array method to 
// display all the destination using Map. To do so we need to 
// list all the destination in one array "Data" and Later we 
// shall call each destination by index/id.

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 2,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 3,
    imgSrc: img7,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
  },

  {
    id: 4,
    imgSrc: img9,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
  }

]


const Popular = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className='popular section container'>
      <div className="secContainer">
         <div className="secheader flex">
            <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
              <h2 className="secTitle">
                Popular Destination
              </h2>
              <p className='p'>
                From historical cities to natural 
                specteculars, come see the best of the
                world!
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
              <BsArrowLeftShort className='arrow leftIcon'/>
              <BsArrowRightShort className='arrow'/>
            </div>
         </div>

         <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade})=>{
              return(
                <div data-aos="fade-up" className="singleDestination">
                  <div className="destImage">
                    <img className='img' src={imgSrc} alt="Image title" />
 
                    <div className="overlayInfo">
                      <h3 className='h3'>{destTitle}</h3>
                      <p className='p'>
                        {location}
                      </p>

                      <BsArrowRightShort className='icon'/>

                    </div>
                  </div>

                  <div className="destFooter">
                    <div className="number">
                     0{id}
                    </div>

                    <div className="destTest">
                      <h6 className='h6'>{location}</h6>
                      <span className='flex'>
                      <span className="dot">
                      < BsDot className='icon'/>
                      </span>
                        WanderHub
                      </span>
                    </div>
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

export default Popular