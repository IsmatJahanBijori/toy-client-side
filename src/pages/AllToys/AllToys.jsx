import { useEffect, useState } from "react";
import Toy from "./Toy";


const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json()).then(data => setToys(data))
    }, [])
    return (
        <div className="overflow-x-auto p-20">
            <table className="table table-zebra sm:w-1/4 md:w-full font-serif md:text-xl ">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
{/** }
<tr>
<th>1</th>
<td>Cy Ganderton</td>
<td>Quality Control Specialist</td>
<td>Blue</td>
</tr>
*/}