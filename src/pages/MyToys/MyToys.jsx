import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleToy from "./SingleToy";
import Swal from 'sweetalert2'

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`https://toy-server-side.vercel.app/myToys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    const handleDelete = (_id) => {
        // console.log(id)
        // const clickedToy = myToys.find(singleToy => singleToy._id !== id)
        // console.log(clickedToy)
        // const rem = myToys.filter(singleToy => singleToy._id !== id)
        // console.log(rem)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-server-side.vercel.app/myToys/${_id}`,
                    {
                        method: 'DELETE'
                    }).then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        const remToy=myToys.filter(singleToy=> singleToy._id!==_id)
                        setMyToys(remToy)
                    })
            }
        })



    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full font-serif text-xl p-10 my-10">
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Image</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Seller Name</th>
                        <th>Seller Email</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Description</th>
                        <th>Update Status</th>
                        <th>Delete Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map(singleToy => <SingleToy key={singleToy._id} singleToy={singleToy} handleDelete={handleDelete}></SingleToy>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;