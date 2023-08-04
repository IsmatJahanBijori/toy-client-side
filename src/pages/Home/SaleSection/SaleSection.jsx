
const SaleSection = () => {
    return (
        <div className="card lg:card-side ml-10 bg-base-200 w-[300px] md:w-[1700px] text-center  shadow-xl p-3 mb-20 md:mx-auto">
            <figure><img src="https://i.ibb.co/yfMQVcV/d1.jpg" alt="Album" className="w-full p-2 animate-bounce" /></figure>
            <div className="card-body text-center font-serif text-xl bg-purple-200">
                <h2 className="card-title">New Sale is released!</h2>
                <p>Deal of the day</p>
                <p className="animate-bounce">Upto 35% off</p>
            </div>
            <figure><img src="https://i.ibb.co/LhMMQsD/d2.jpg" alt="Album" className="w-full p-2 animate-bounce"/></figure>
            <figure><img src="https://i.ibb.co/C7xmqBK/d3.jpg" alt="Album" className="w-full p-2 animate-bounce"/></figure>
        </div>
    );
};

export default SaleSection;