import { useState } from "react";
import Marquee from "react-fast-marquee";
const Trending = () => {

    const [data, setData] = useState([])
    useState(() => {
        fetch('trendingData.json').then(res => res.json()).then(Data => setData(Data))
    }, [])
    return (
        <Marquee>
            {
                data.map(dt =>
                    <div className="card w-96 ml-4 h-[300px] md:h-[500px] my-10 md:my-20 bg-base-100 shadow-xl font-serif text-lg">
                   {/* //TODO: small device e image chikon hye gese*/}
                        <figure><img src={dt.image} alt="Shoes" className="w-full p-3 md:h-40 md:object-cover rounded-md mb-4"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {dt.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{dt.subtitle}</p>
                            <p>{dt.description}</p>
                            <p>{dt.price}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-primary p-3">Fashion</div>
                                <div className="badge badge-info p-3">Products</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </Marquee>
    );
};

export default Trending;
// className="grid grid-cols-1 md:grid-cols-3 mb-20 mx-5 md:px-28"