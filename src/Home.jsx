import Header from './components/Header';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
      <Header />
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
