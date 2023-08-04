import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination, } from 'swiper/modules';
// import { useRef } from "react";


const Banner = () => {
    const [banner, setBanner] = useState([])
    
    useEffect(() => {
        fetch("banner.json").then(res => res.json()).then(data => setBanner(data))
    }, [])
    return (

        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            rewind={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >

            {
                banner.map(bannerData =>
                    <SwiperSlide>
                        <div className="hero mb-20 w-full">
                            <img src={bannerData.image} className='w-full h-[600px]' alt="" />
                            <div className="hero-content text-center text-neutral-content">
                                <div className="hero-overlay pt-20">
                                    <div className="w-[300px] md:w-[1440px] md:h-[400px]">
                                        <h1 className="mb-5 tex-3xl md:text-5xl font-bold">{bannerData.title}</h1>
                                        <p className="mb-5 text-lg font-semibold">{bannerData.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }

        </Swiper>



    );
};

export default Banner;
