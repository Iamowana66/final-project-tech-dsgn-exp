"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function Dashboard() {
    return (
        
        <main className="flex-col min-h-[100vh] bg-gradient-to-tr from-sky-300 to-pink-200 ">
            <img className='w-full h-[246px] object-cover absolute mix-blend-darken' src="/coverpat.svg" />
  
            <div className='flex justify-between p-8 pb-2'>
            <a href="/dashboard3"> 
                <img className='mix-blend-overlay' src="/arrow.svg" /></a>
                <div id="right-nav" className="flex">
                    <img className="w-[50px] h-[50px] rounded-full mix-blend-overlay" src="/profile.png" />
                </div>                
            </div>
            <div>
                <h1 className="text-white text-lg text-right pr-6 mix-blend-overlay">Thailand</h1>
                <h2 className="text-blue-950 text-2xl text-left pt-3 pl-10">Spot</h2>
                <h1 className="text-blue-950 text-4xl text-left font-bold pt-3 pl-10">Tayai Beach</h1>
            </div>

            <div className="relative">
                <input
                    type="text"
                    placeholder="Search location"
                    className="w-[480px] p-1 px-12 mt-7 ml-5 mr-5 rounded-full shadow-lg" />
                <img className="absolute top-9 left-9" src="/search.svg" />
            </div> 

        <div className='flex justify-center relative items-center'>

            <Swiper className=''
                spaceBetween={10} slidesPerView={1.5}>

                <SwiperSlide className='m-5 items-center'><img className='w-[350px] h-[400px] items-center' src='/pic.png' /></SwiperSlide>
                <SwiperSlide className='m-5 items-center'><img className='w-[350px] h-[400px] items-center' src='/pic2.png' /></SwiperSlide>
                <SwiperSlide className='m-5 items-center'><img className='w-[350px] h-[400px] items-center' src='/pic3.png' /></SwiperSlide>
                
            </Swiper>

        </div>


            <div>
                <h1 className='text-3xl text-blue-950 text-center mt-0'>Description:</h1>
                <h2 className='text-blue-950 m-5 mt-3 text-center'>Taken at Tayai Beach at 7am. in sunny day. 
                    You should wear casual outfits like hat, 
                    sun glasses, bikini, and some accessories.
                    You should do your hair casualy too </h2>
            </div>

            <div className='flex justify-center gap-10 sticky bottom-0 bg-gradient-to-r from-sky-500 to-pink-400 w-full h-[80px] items-center'>
                <img className='shadow-xl' src='/search2.svg' />
                <img className='shadow-xl' src='/map.svg' />
            <a href="/">   
                <img className='bg-white p-2 rounded-lg' src='/home.svg' /></a>
                <img className='shadow-xl' src='/fav.svg' />
                <img className='shadow-xl' src='/profile2.svg' />

            </div>

            
            </main>
            
         

);
}