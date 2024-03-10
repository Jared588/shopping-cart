import Header from '../components/Header';

function Account() {
  return (
    <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
      <Header />
      <div className="p-6 text-5xl bg-black bg-opacity-80 border-t flex flex-col flex-auto md:px-16 lg:py-10 overflow-hidden justify-between">
        <div>
          <h1 className="pb-10 border-b-2 text-4xl text-gray-400 text-center">
            Hi, <br />
            <span className="text-6xl slide-in text-gray-200">John Doe</span>
          </h1>
          <ul className="text-2xl mt-10 ml-5 space-y-5 text-gray-300 slide-in *:cursor-pointer">
            <li>Account Details</li>
            <li>Payment Info</li>
            <li>Billing Info</li>
            <li>Orders</li>
            <li>Log out</li>
          </ul>
        </div>
        <ul className="place-self-end text-right text-xl border-t p-2 fade-in *:cursor-pointer">
            <li>About Us</li>
            <li>Help Centre</li>
            <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
