import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='bg-black bg-opacity-85 flex flex-col min-h-screen items-center justify-center text-4xl'>
      <h1>Oh no, this route doesn&apos;t exist!</h1>
      <Link to="/home" className='underline'>
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
