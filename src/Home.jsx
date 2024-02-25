function Home() {
  return (
    <div className="flex border-b justify-between">
      <h1 className="py-10 px-10 text-6xl">Cool Corner</h1>
      <nav className="flex items-center text-2xl px-10 space-x-10 *:cursor-pointer">
        <p>Home</p>
        <p>Store</p>
        <p>Contact Us</p>
      </nav>
    </div>
  );
}

export default Home;
