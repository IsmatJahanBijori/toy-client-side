import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Toy = ({ toy }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, sellerName, toyName, subCategory, price, quantity } = toy
    const {user}=useContext(AuthContext)
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{
                user? <Link to={`/toys/${_id}`}><button>View Details</button></Link>
                : <Link to='/'></Link>
            }</td>
        </tr>
    );
};

export default Toy;