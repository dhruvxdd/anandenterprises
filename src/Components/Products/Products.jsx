import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css"
import './Products.css'
import data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/common'



const Products = () => {
  return (
    <section className="p-wrapper">
        <div className="paddings innerWidth p-container">
            <div className="p-head flexColStart">
                <span className='orangeText'>Pioneer in the Realm of Digital Printing</span>
                <span className='primaryText'>A glance at our Products</span>
                
            </div>
            <Swiper {...sliderSettings}>
            <SliderButtons/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className=" flexColStart p-card">
                                <img src={card.image} alt="product/image" />
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                             
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
             
        </div>
        
    </section>
  )
}

export default Products;

const SliderButtons=() =>{
    const swiper=useSwiper();
    return(
        <div className="flexCenter p-buttons">
            <button onClick={()=>swiper.slidePrev()}>←</button>
            <button onClick={()=>swiper.slideNext()}>→</button>


        </div>
    )
}