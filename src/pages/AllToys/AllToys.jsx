import { useEffect, useState } from "react";
import Toy from "./Toy";


const AllToys = () => {
    const [toys, setToys] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json()).then(data => setToys(data))
    }, [])
    return (
        <div>
            <div className="flex">
            <div className="form-control text-center mx-auto mt-5">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            </div>
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