import { useLoaderData } from "react-router-dom";


const SingleToyDetail = () => {
    const loadedToys = useLoaderData()
    // console.log(loadedToys)
    // toyName, url, email, price, quantity, rating, description
    return (
        <div className="hero max-h-screen bg-base-300">
            <div className="hero-content flex-col lg:flex-row">
                <img src={loadedToys.url} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="font-serif">
                    <h1 className="text-3xl font-bold">Name: {loadedToys.toyName}</h1>
                    <div className="text-xl">
                        <p className="py-6"><span className="font-bold">Price:</span> {loadedToys.price}</p>
                        <p className="py-6"><span className="font-bold">Email:</span> {loadedToys.email}</p>
                        <p className="py-6"><span className="font-bold">Quantity:</span> {loadedToys.quantity}</p>
                        <p className="py-6"><span className="font-bold">Rating:</span> {loadedToys.rating}</p>
                        <p className="py-6"><span className="font-bold">Description:</span> {loadedToys.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetail;