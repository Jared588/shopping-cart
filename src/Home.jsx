import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
      <header className="flex flex-col text-center justify-between sm:flex-col md:flex-row lg:flex-row bg-black bg-opacity-85">
        <div className="flex flex-wrap justify-center py-4 px-10">
          <Link to='/home'>
            <h1 aria-label='title' className="text-5xl cursor-pointer">S</h1>
          </Link>
          <nav aria-label='primary-nav' className="flex items-center text-2xl px-10 space-x-10 *:cursor-pointer">
            <Link to='/store'>
              <p>Store</p>
            </Link>
            <p>Sale</p>
          </nav>
        </div>
        <nav aria-label='secondary-nav' className="flex items-center justify-center text-2xl px-10 space-x-10 *:cursor-pointer">
          <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-outline</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" fill="rgba(255, 255, 255, 0.87)" /></svg>
          <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" fill="rgba(255, 255, 255, 0.87)" /></svg>
          <Link to='/cart'>
            <svg className="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cart-outline</title><path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" fill="rgba(255, 255, 255, 0.87)" /></svg>
          </Link>
        </nav>
      </header>
      <div className='bg-neutral-300 text-black text-center font-semibold fade-in'>Dont Miss Our 50% Sale!</div>
      <div className="text-5xl bg-black bg-opacity-50 border-t flex flex-auto justify-left items-center text-left px-16">
        <div>
          <p className="slide-in mb-5 text-6xl">Style. Simplified.</p>
          <p className="slide-in-2 mb-2 text-3xl">Browse our catalogue</p>
          <Link to='/store'>
            <button className="slide-in-2 px-10 py-1 text-2xl bg-slate-200 text-zinc-900">Shop now</button>
          </Link>
        </div>
      </div>
      <footer className="text-center bg-black bg-opacity-50">Copyright © Jared588</footer>
    </div>
  );
}

export default Home;
