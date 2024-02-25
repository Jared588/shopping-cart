function Home() {
  return (
    <div className="flex flex-col min-h-svh justify-between bg-black bg-opacity-50">
      <header className="flex flex-col text-center justify-between sm:flex-col md:flex-row lg:flex-row">
        <h1 className="py-7 px-10 text-6xl">Cool Corner</h1>
        <nav className="flex items-center justify-center text-2xl px-10 space-x-10 *:cursor-pointer">
          <p>Home</p>
          <p>Store</p>
          <p>Contact Us</p>
        </nav>
      </header>
      <div className="text-5xl bg-black bg-opacity-50 border-y flex flex-auto justify-center items-center text-center">
        Welcome to the COOOOOOOL Corner, <br />check out our awesome catalogue
      </div>
      <footer className="text-center">Copyright © Jared588</footer>
    </div>
  );
}

export default Home;
