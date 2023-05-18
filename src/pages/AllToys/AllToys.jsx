import { useEffect, useState } from "react";
import Toy from "./Toy";


const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchName, setSearchName] = useState("");
    useEffect(() => {
        fetch('https://toy-server-side.vercel.app/toys')
            .then(res => res.json()).then(data => setToys(data))
    }, [])

    const handleSearchButton = () => {
        fetch(`https://toy-server-side.vercel.app/getToysByName/${searchName}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };
    return (
        <div>
            <div className="flex">
            <div className="form-control text-center mx-auto mt-5">
                <div className="input-group">
                    <input type="text" onChange={(e) => setSearchName(e.target.value)} placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearchButton} className="btn btn-square">
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