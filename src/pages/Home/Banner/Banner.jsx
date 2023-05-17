import bg from '../../../assets/bgi.jpg'
const Banner = () => {
    return (

        <div className="hero my-20">
            <img src={bg} className='w-full h-[400px]' alt="" />
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <br /> Toy Joy Shop</h1>
                </div>
            </div>
        </div>

    );
};

export default Banner;