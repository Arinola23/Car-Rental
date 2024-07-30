import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import Delete from "./Delete";

const viewPage = () => {
  const [view, setView] = useState({});
  const [showDelete, setShowDelete] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://localhost:6501/bookings/${id}`)
      .then((response) => {
        setView(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <BackButton destination="/Bookings" />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="sm:mx-auto md:ml-[400px] max-w-4xl sm:h-screen h-full">
            <div className="font-serif">
              <h1 className="sm:text-4xl text-3xl mx-20">Bookings Details</h1>
            </div>

            <div className="mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-2 border-gray-600 rounded sm:m-0 mx-4 ">
                <div className="border p-2">
                  <label className="text-gray-400">Last Name:</label>
                  <input
                    type="text"
                    className="pl-6 text-gray-500 focus:outline-none bg-transparent"
                    value={view.lastname}
                  />
                </div>

                <div className="border p-3">
                  <label className="text-gray-400">First Name:</label>
                  <input
                    type="text"
                    className="pl-6 text-gray-500 focus:outline-none bg-transparent"
                    value={view.firstname}
                  />
                </div>

                <div className="border p-3">
                  <label className="text-gray-400">Age:</label>
                  <input
                    type="text"
                    className="pl-6 text-gray-500 focus:outline-none bg-transparent"
                    value={view.age}
                  />
                </div>

                <div className="border p-3">
                  <label className="text-gray-400">Email:</label>
                  <input
                    type="text"
                    className="pl-6 text-gray-500 focus:outline-none bg-transparent"
                    value={view.email}
                  />
                </div>

                <div className="border p-3">
                  <label className="text-gray-400">Phone Number:</label>
                  <input
                    type="text"
                    className="pl-6 text-gray-500 focus:outline-none bg-transparent"
                    value={view.phoneNumber}
                  />
                </div>

                <div className="border p-3">
                  <label className="text-gray-400">Car Type:</label>
                  <input
                    type="text"
                    className="pl-6 text-gray-500 focus:outline-none bg-transparent"
                    value={view.carList}
                  />
                </div>

                <div className="border p-3">
                  <label className="text-gray-400">Pick-Up-date:</label>
                  <input
                    type="text"
                    className="pl-6 text-gray-500 focus:outline-none bg-transparent"
                    value={view.pickupDate}
                  />
                </div>

                <div className="border p-3">
                  <label className="text-gray-400">Return Date:</label>
                  <input
                    type="text"
                    className="pl-6 text-gray-500 focus:outline-none bg-transparent"
                    value={view.returnDate}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:ml-[130px] space-y-4 mt-4 pb-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="sm:flex flex justify-center ">
                <div className="sm:px-4 rounded bg-red-600 sm:mr-8 mr-8 hover:bg-red-400  px-4 py-2 sm:w-[80px] w-[80px]">
                  <Link to={`/bookings/delete/${view._id}`}>
                    <button>Delete</button>
                  </Link>
                </div>
                <div className="sm:px-4 rounded bg-gray-500 hover:bg-gray-300 px-4 py-2 sm:w-[60px] w-[60px] ">
                  <Link to={`/bookings/edit/${view._id}`}>
                    <button>Edit</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* {showDelete && (<Delete view={view}/> )} */}
    </div>
  );
};

export default viewPage;

{
  /* <div>
<div>
    <BackButton/>
    <h1 className='text-3xl my-4'>Bookings</h1>
    {loading ? (<Spinner/>): (
        <div className='border'>
            <div className=''>
                <label for="lastname">Last Name</label>
                <input type="text"
                onChange={view.lastname} />
            </div>
           
        </div>
    )}
</div>
</div> */
}
