import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/Bookings' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-primary text-white px-4 py-1 ml-[-120px] rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;
