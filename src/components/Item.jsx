function ShirtC (title, price, pColor) {
  const tShirtC = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tshirt-crew</title><path d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.07C5.31,13.46 4.68,13.46 4.29,13.07L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.12V20A1,1 0 0,1 16,21" fill={pColor} /></svg>
  return (
    <div className="w-48 h-fit flex flex-col border p-3 my-3 rounded-xl bg-slate-400/20">
      <div className=''>{tShirtC}</div>
      <div className="border-t">
        <p className="text-2xl mt-1">{title}</p>
        <p className="w-fit text-xl">{price}</p> 
      </div>
      <button className="flex items-center justify-center text-base bg-slate-400/20 rounded-xl mt-2 hover:bg-slate-300/40">Add to Cart +</button>
    </div>
  );
}

export default ShirtC;
