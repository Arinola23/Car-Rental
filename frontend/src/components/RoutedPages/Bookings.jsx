import React, {useState}from "react";
import bookingscar from "../../assets/landingCar.jpg";
import { SlCalender } from "react-icons/sl";
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {useSnackbar} from "notistack"
import BackButton from "../../components/BackButton";
import Spinner from '../../components/Spinner';


const CreateBookings = () => {
   const [lastname, setLastname] = useState('')
   const [firstname, setFirstname] = useState('')
   const [age,setAge] = useState('')
   const [email,setEmail] = useState('')
   const [phoneNumber,setPhoneNumber] = useState('')
   const [carList, setCarList] = useState('')
   const [pickupDate, setPickUpDate] = useState('')
   const [returnDate, setReturnDate] = useState('')
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()
   const {enqueueSnackbar} = useSnackbar()

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
      }
      setLoading(true);
      console.log(data);
      axios
      .post("http://localhost:6000/bookings", data)
      .then(()=> {
        setLoading(false)
        enqueueSnackbar("Bookings successfully created", {variant:"success"})
        navigate("/") //navigate to home page
      })
      .catch((error) => {
        setLoading(false)
        enqueueSnackbar("Error", {variant:"error"})
        console.log(error)
      })
   }

   const method = () => {
    console.log("Hello World")
   }
 
   return (
    <div>
      <div
        className="  flex flex-col h-screen bg-cover bg-no-repeat items-center justify-center bg-gradient-to-rl from-black p-8"
        style={{ backgroundImage: `url(${bookingscar})` }}
        >
      
              <div className="grid place-content-center border-4 mt-9 mb-8 rounded-lg sm:border-4 sm:w-[800px] sm:h-[500px] sm:rounded-lg" >
              <BackButton />
                <h1 className="text-white text-5xl sm:text-6xl font-bold font-serif tracking-widest sm:pt-4 sm:pl-5 text-center"> Bookings</h1>
                 {loading ? <Spinner /> : ''}
              <div >
                <form className="sm:p-5 p-5">
                    <label className="text-white text-xl sm:text-2xl font-serif tracking-wider">Lastname</label>
                    <input 
                    type="text"
                    value={lastname} onChange={(e) => setLastname(e.target.value)}
                    placeholder="Enter Lastname" className='border-2 m-2 w-[230px] text-black'/> 
                    
                    <label className="text-white text-xl sm:text-2xl ml-4 font-serif tracking-wider">Firstname</label> 
                    <input 
                     type="text" 
                    value={firstname} onChange={(e) => setFirstname(e.target.value)}
                   placeholder="Enter Firstname" className='border-2 m-2 w-[230px] text-black'/> <br />
                    
                    <label className="text-white text-xl sm:text-2xlfont-serif tracking-wider">Age</label>
                    <input
                     type="text" 
                    value={age} onChange ={(e) => setAge(e.target.value)}
                     placeholder="Enter Age" className='border-2 m-2 text-black' /> <br />
                   
                    <label className="text-white text-xl sm:text-2xl font-serif tracking-wider">Email</label> 
                    <input
                     type="text" 
                    value={email} onChange ={(e) => setEmail(e.target.value)}
                    placeholder="Enter a valid Email" className='border-2 m-2 text-black' /> <br />

                    <label className="text-white text-xl sm:text-2xl font-serif tracking-wider">Phone Number</label>
                    <input 
                     type="text" 
                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                     placeholder="Phone Number" className='border-2 m-2 text-black'  /> <br />
            
                    <label className="text-white text-xl sm:text-2xl font-serif tracking-wider">Carlist</label> 
                     <input 
                     value={carList} onChange ={(e) => setCarList(e.target.value)}
                     className='border-2 ml-4 text-black text-xl'placeholder="Type the carname" />
                           
                    <br />

                    {/* <input type="text" placeholder="Rent a Car" className='border-2 m-2'  /> <br /> */}

                    <label className="text-white  text-xl sm:text-2xl font-serif tracking-wider"> <SlCalender />Pick up Date</label>
                      <input
                       type="text" 
                      value={pickupDate} onChange={(e)=> setPickUpDate(e.target.value)}
                       placeholder="dd/mm/yyyy" className='border-2 m-2 text-black'  /> <br />

                      <label className="text-white  text-xl sm:text-2xl font-serif tracking-wider">Return Date</label>
                      <input
                       type="text" 
                      value={returnDate} onChange={(e)=> setReturnDate(e.target.value)}
                       placeholder="dd/mm/yyyy" className='border-2 m-2 text-black'  />                                 
                </form>
                <div className="grid place-content-center">
                    <button className="button-outline" onClick={handleSaveBookings}>SUBMIT</button>
                  </div>
              </div>

          </div>
          
       </div>
    </div>
  );
};

export default CreateBookings;


               {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div> old */}

               {/* <div className="">
                  <h1 className="text-white text-6xl font-bold font-serif tracking-widest">
                    Bookings
                  </h1>
                  <div className="w-[310px] h-[410px] flex flex-col justify-between items-center
                   bg-white rounded-lg p-8
                   border-2 border-black text-white shadow-lg">
                    <form>
                      <div>
                        <label>Lastname</label>
                        <input type="text" placeholder="Lastname" />

                      </div>
                       <input type="text" placeholder="Lastname" className="inputClass" />
                      <input type="text" placeholder="Firstname" className="inputClass" />
                      <input type="text" placeholder="Age" className="inputClass" />
                      <input type="text" placeholder="Enter Email Address" className="inputClass" />
                      <input type="text" placeholder="Enter Phone Number" className="inputClass" />
                      <select>
                            <option value="choose country"> choose country </option>
                            <option value="#">Argentina</option>
                            <option value="#">Brazil</option>
                            <option value="#">Chile</option>
                            <option value="#">Colombia</option>
                      </select>
                    
                      <input type="text" placeholder="Rent a Car" className="inputClass" />
                      <input type="text" placeholder="pick up Date" className="inputClass" />
                      <input type="text" placeholder="return Date" className="inputClass" />
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">SUBMIT</button>
                    </form>   
                  </div>
                </div> */}
