import React from 'react';

const Description = () => {
    return (
        <div style={{ justifyContent: 'space-around', padding: '20px' }} className='w-full font-serif md:w-[1700px] md:ml-28 flex flex-col md:flex-row'>
            {/**left side */}
            <div style={{ display: 'flex-col' }} data-aos="fade-left">
                <div style={{ marginRight: '20px' }}>
                    <img src="https://i.ibb.co/6W3nwJP/img.webp" alt="" className='w-full'/>
                </div>
                <div style={{ marginRight: '20px' }}>
                    <img src="https://i.ibb.co/D9Ww5Wp/image.webp" alt="" className='w-full'/>
                </div>
            </div>

            {/**right side */}
            <div className='font-serif w-full md:w-[850px]' data-aos="fade-right">
                <h2 className='font-semibold text-2xl'>Welcome to Toylandia</h2>
                <p className='text-lg text-justify'>
                    At Toylandia, we offer a delightful array of toys that spark creativity and bring joy to kids
                    of all ages. Whether it's jewelry making, drawing supplies, or sculpting wonders, Toylandia
                    has the perfect toys for your little ones. Our magical world is designed to inspire young minds
                    and foster their imagination. Join us on this extraordinary adventure, where playtime is filled
                    with endless fun and cherished memories!
                </p>
            </div>
        </div>
    );
};

export default Description;