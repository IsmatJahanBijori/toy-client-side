
// eslint-disable-next-line react/prop-types
const Toy = ({ toy }) => {
    // eslint-disable-next-line react/prop-types
    const { sellerName, toyName, subCategory, price, quantity } = toy
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button>View Details</button></td>
        </tr>
    );
};

export default Toy;