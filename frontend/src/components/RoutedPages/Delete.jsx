import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

const DeleteView = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    setLoading(true);
    axios
      // .delete(`http://localhost:6501/bookings/${id}`)
      .delete(`${import.meta.env.VITE_REACT_APP_API}/bookings/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("booking deleted successfully", { variant: "success" });
        navigate("/Bookings");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("error", { variant: "error" });
        // console.error(error);
      });
  };
  return (
    <div>
      <div className="h-screen p-4">
        <BackButton />
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col justify-center items-center sm:h-[300px] h-[500px]">
          <div className="border-2 border-primary rounded items-center sm:p-10 p-4">
            <h2>Are you sure you want to delete?</h2>
            <div className="flex place-content-center p-8">
              <div>
                <button
                  className="p-2 bg-red-600 text-white rounded mr-2"
                  onClick={handleDelete}
                >
                  Yes, Delete it
                </button>
              </div>
              <div className="bg-white text-black border border-black p-2 ml-2 rounded">
                {/* <Link to={`/bookings/edit/${view}`}>
                                          No
                                        </Link> */}
                <button onClick={() => navigate(`/bookings/edit/${id}`)}>
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteView;
