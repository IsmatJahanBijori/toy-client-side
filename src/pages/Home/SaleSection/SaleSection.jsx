
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/yfMQVcV/d1.jpg" alt="d1" border="0"></a>

// <a href="https://imgbb.com/"><img src="https://i.ibb.co/LhMMQsD/d2.jpg" alt="d2" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>quick image upload</a><br />
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/C7xmqBK/d3.jpg" alt="d3" border="0"></a>
const SaleSection = () => {
    return (
        <div className="card lg:card-side bg-base-200 shadow-xl p-3 mb-20">
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