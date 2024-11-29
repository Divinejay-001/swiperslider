import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation} from "swiper/modules"
 import { AiOutlineArrowRight, AiOutlineAlignLeft } from "react-icons/ai"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import './defualt.css'

const SwiperComp = () => {
  return (
<div className="cnt  ">
    <h1 className='ml-[36rem] text-[40px]'>Gallery</h1>
    <Swiper  
    effect="coverflow" 
    grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            pagination={{el:".swiper-pagination", clickable: true}}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'

            >
                <SwiperSlide className='swiper-slide ' >
                 <img className='rounded-[30px]' src="public/pexels-designecologist-887349.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className='rounded-[30px]' src="public/pexels-ohshineon-18397.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className='object-contain rounded-[30px]' src="public/pexels-designecologist-887353.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className=' rounded-[30px] w-[50rem] h-[22rem] object-cover' src="public/pexels-charlesdeluvio-1851164.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className='object-contain rounded-[30px]' src="public/pexels-asadphoto-1024975.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className='rounded-[30px] w-[50rem] object-cover h-[22rem]' src="public/pexels-annetnavi-792777.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className='rounded-[30px] w-[90rem] object-fill h-[22rem]' src="public/7d044cf5-c6e7-4f83-b0f7-09a36755f3ca.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className='rounded-[30px] w-[50rem] object-cover h-[22rem]' src="public/pexels-pixabay-414032.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className='rounded-[30px] w-[50rem] object-fill h-[22rem]' src="public/Superman Wallpaper.jpg" alt="" />   
                </SwiperSlide>
                <SwiperSlide className='width'>
                 <img className='rounded-[30px] w-[50rem] object-fill h-[22rem]' src="public/Messi.jpg" alt="" />   
                </SwiperSlide>
                <div className="swiper-pagination "></div>

                </Swiper>
</div>
)
}

export default SwiperComp