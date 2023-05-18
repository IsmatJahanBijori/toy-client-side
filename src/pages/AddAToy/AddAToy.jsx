
const AddAToy = () => {
    return (
        <form className="grid grid-cols-1 p-5 md:grid-cols-3 md:grid-rows-3 md:p-20 font-serif text-lg md:text-xl">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">URL of Toy</span>
                </label>
                <label className="input-group">
                    <span>Image</span>
                    <input type="url" name="url" placeholder="Photo-url" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Toy Name</span>
                </label>
                <label className="input-group">
                    <span>Name</span>
                    <input type="text" name="toyName" placeholder="Enter your name" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Name</span>
                </label>
                <label className="input-group">
                    <span>Name</span>
                    <input type="text" name="sellerName" placeholder="Enter seller name" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Seller Email</span>
                </label>
                <label className="input-group">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Sub Category</span>
                </label>
                <label className="input-group">
                    <span>Sub-category</span>
                    <input type="text" name="sub-category" placeholder="Enter Sub-category" className="input input-bordered" />
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
                    <input type="text" name="rating" placeholder="Enter ratings" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <label className="input-group">
                    <span>Available Quantity</span>
                    <input type="text" placeholder="quantity" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <label className="input-group">
                    <span>Details Description</span>
                    <input type="text" name="decription" placeholder="Enter Toy Description" className="input input-bordered" />
                </label>
            </div>
        </form>
    );
};

export default AddAToy;