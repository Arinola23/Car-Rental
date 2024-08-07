import React, { useState } from "react";
import bookingscar from "../../assets/landingCar.jpg";
import { SlCalender } from "react-icons/sl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";

const CreateBookings = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [carList, setCarList] = useState("");
  const [pickupDate, setPickUpDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  // const {_id}  = useParams();

  const handleSaveBookings = () => {
    const data = {
      lastname,
      firstname,
      age,
      email,
      phoneNumber,
      carList,
      pickupDate,
      returnDate,
    };
    setLoading(true);
    // console.log(data);
    axios
      // .post(`http://localhost:6501/bookings`, data)
      .post(`${import.meta.env.VITE_REACT_APP_API}/bookings`, data)
      .then((res) => {
        //const bookingId = res.data._id
        setLoading(false);
        //console.log(bookingId)
        enqueueSnackbar("bookings successfully created", {
          variant: "success",
        });
       // navigate(`/bookings/view/${res.data._id}`); //navigate to booking page
        navigate(`/bookings/view/${data._id}`); //navigate to booking page
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div
      className=" bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.99)), url(${bookingscar})`,
      }}
    >
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col justify-center items-center h-full sm:h-screen">
        <div className="sm:border-4 border-4 p-6 sm:mt-[-12px] my-4 rounded sm:p-6">
          <h1 className="text-white text-4xl sm:text-6xl font-bold font-serif tracking-widest text-center mb-4 sm:mb-10">
            Bookings
          </h1>
          <form className="sm:space-y-4 space-y-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="sm:w-full">
                <label
                  htmlFor="lastname"
                  className="text-white font-serif text-xl"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Enter Lastname"
                  className="block py-2 px-4 w-full rounded border-2 border-gray-400 focus:outline-none focus:border-primary text-black"
                />
              </div>
              <div className="sm:w-full">
                <label
                  htmlFor="firstname"
                  className="text-white font-serif text-xl"
                >
                  First Name
                </label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="Enter Firstname"
                  className="block py-2 px-4 w-full rounded border-2 border-gray-400 focus:outline-none focus:border-primary text-black"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="sm:w-[100px]">
                <label htmlFor="age" className="text-white font-serif text-xl">
                  Age
                </label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                  className="block py-2 px-4 w-full rounded border-2 border-gray-400 focus:outline-none focus:border-primary text-black"
                />
              </div>
              <div className="sm:w-[400px]">
                <label
                  htmlFor="email"
                  className="text-white font-serif text-xl"
                >
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter a valid Email"
                  className="block py-2 px-4 w-full rounded border-2 border-gray-400 focus:outline-none focus:border-primary text-black"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="sm:w-full">
                <label
                  htmlFor="phonenumber"
                  className="text-white font-serif text-xl"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  className="block py-2 px-4 w-full rounded border-2 border-gray-400 focus:outline-none focus:border-primary text-black"
                />
              </div>
              <div className="sm:w-full">
                <label
                  htmlFor="carList"
                  className="text-white font-serif text-xl"
                >
                  Car-type
                </label>
                <input
                  type="text"
                  value={carList}
                  onChange={(e) => setCarList(e.target.value)}
                  placeholder="Type the carname"
                  className="block py-2 px-4 w-full rounded border-2 border-gray-400 focus:outline-none focus:border-primary text-black"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="sm:w-full">
                <label
                  htmlFor="pickupdate"
                  className="text-white font-serif text-xl"
                >
                  Pick-up-date
                </label>
                <input
                  type="text"
                  value={pickupDate}
                  onChange={(e) => setPickUpDate(e.target.value)}
                  placeholder="dd/mm/yyyy"
                  className="block py-2 px-4 w-full rounded border-2 border-gray-400 focus:outline-none focus:border-primary text-black"
                />
              </div>
              <div className="sm:w-full">
                <label
                  htmlFor="returndate"
                  className="text-white font-serif text-xl"
                >
                  Return-date
                </label>
                <input
                  type="text"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  placeholder="dd/mm/yyyy"
                  className="block py-2 px-4 w-full rounded border-2 border-gray-400 focus:outline-none focus:border-primary text-black"
                />
              </div>
            </div>
          </form>

          <div className="flex justify-center space-x-8 sm:mt-4 mt-4">
            <button className="button-outline" onClick={handleSaveBookings}>
              SUBMIT
            </button>
            {/* <Link to={`/bookings/view/:id`}>
              <button className="button-outline">View</button>
           </Link> */}
          </div>
        </div>
      </div>
      <div className="sm:w-64 w:40">
        <useSnackbar />
      </div>
    </div>
  );
};

export default CreateBookings;
