import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/Bookings' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className=' text-white bg-orange-700 px-4 py-1 mx-10 my-6 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;
