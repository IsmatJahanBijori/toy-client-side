import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const SingleToy = ({ singleToy, handleDelete }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, url, toyName, subCategory, sellerName, rating, quantity, price, email, description } = singleToy
    return (

        <tr>
            <th></th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{sellerName}</td>
            <td>{email}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{description}</td>
            <td>
                <Link to={`/updateToys/${_id}`}><button className="btn btn-info btn-xs text-black">Update</button></Link>
            </td>
            <td>
                <button onClick={()=>handleDelete(_id)} className="btn btn-secondary btn-xs text-black">Delete</button>
            </td>
        </tr>

    );
};

export default SingleToy;