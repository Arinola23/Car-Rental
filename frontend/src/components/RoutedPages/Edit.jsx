import React, { useEffect, useState } from "react";
import BackButton from "../../components/BackButton";
import Spinner from "../../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const Edit = () => {
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
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:6501/bookings/${id}`)
      .then((response) => {
        setLastname(response.data.lastname);
        setFirstname(response.data.firstname);
        setAge(response.data.age);
        setEmail(response.data.email);
        setPhoneNumber(response.data.phoneNumber);
        setCarList(response.data.carList);
        setPickUpDate(response.data.pickupDate);
        setReturnDate(response.data.returnDate);
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error occurred.')
        console.log(error);
      });
  }, []);

  const handleUpdate = () => {
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
      .put(`http://localhost:6501/bookings/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Bookings successfully updated", {
          variant: "success",
        });

        navigate(`/Bookings`); //navigate to booking page
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <BackButton />
        {/* {loading ? <Spinner /> : ""} */}
        <div className="flex flex-col justify-center items-center h-full sm:h-screen">
          <div className="sm:border-4 border-4 border-gray-600 p-6 mt-[-10px] mb-4  rounded sm:p-6">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif tracking-widest text-center mb-4 sm:mb-10">
              Update-Bookings
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
                  <label
                    htmlFor="age"
                    className="text-white font-serif text-xl"
                  >
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
                    className="block py-2 px-4 w-full rounded border-2 place-content-center border-gray-400 focus:outline-none focus:border-primary text-black"
                  />
                </div>
              </div>
            </form>

            <div className=" bg-green-500 text-white  ml-[220px] text-center p-2 w-[80px] rounded sm:mt-8 mt-4 mb-5">
              <button onClick={handleUpdate}>save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
