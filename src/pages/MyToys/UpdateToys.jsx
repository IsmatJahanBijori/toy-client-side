import { useContext } from "react";
// import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateToys = () => {
    const { user } = useContext(AuthContext)
    const updatedToys=useLoaderData()
    // eslint-disable-next-line no-unused-vars
    const {_id, url, toyName, sellerName, email, subCategory, price, rating, quantity, description}=updatedToys
    // console.log(updatedToys)
    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const url = form.url.value;
        const toyName = form.toyName.value;
        // const sellerName = form.sellerName.value;
        const sellerName = user?.displayName;
        // const email = form.email.value;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        // console.log(url, toyName, sellerName, email, subCategory, price, rating, quantity, description)

        const updatedToy = { url, toyName, sellerName, email, subCategory, price, rating, quantity, description }
        console.log(updatedToy)
        fetch(`https://toy-server-side.vercel.app/myToys/${_id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedToy)
            })
            .then(res => res.json())
            .then(data => {console.log(data)
            if(data.modifiedCount>0){
                toast('Updated Successfully')
            }})
    }
    return (
        <div className="font-serif text-lg md:text-xl">
            <h1 className="text-center text-2xl font-extrabold mt-10">Update A Toy</h1>
            <form onSubmit={handleUpdate} className="grid grid-cols-1 p-5 md:grid-cols-3 md:grid-rows-3 md:p-20">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">URL of Toy</span>
                    </label>
                    <label className="input-group">
                        <span>Image</span>
                        <input type="url" name="url" defaultValue={url}  placeholder="Photo-url" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="toyName" defaultValue={toyName} placeholder="Enter your name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="sellerName" defaultValue={user.displayName} placeholder="Enter seller name" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="email" name="email" defaultValue={user.email} placeholder="Enter your email" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                    <label className="input-group">
                        <span>Sub-category</span>
                        <input type="text" name="subCategory" defaultValue={subCategory} placeholder="Enter Sub-category" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" name="price" placeholder="Toy Price" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <span>Rating</span>
                        <input type="text" name="rating" defaultValue={rating} placeholder="Enter ratings" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <label className="input-group">
                        <span>Available Quantity</span>
                        <input type="text" name="quantity" placeholder="Enter quantity" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <span>Details Description</span>
                        <input type="text" name="description" placeholder="Enter Toy Description" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary btn-block mb-5">Update Confirm</button>
                    <Link to='/myToys'><button className="btn btn-danger btn-block">Back to my Toys</button></Link>
                    <ToastContainer />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;