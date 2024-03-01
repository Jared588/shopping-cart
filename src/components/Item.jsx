export function CreateItem (item, title, price, pColor) {
  // Items
  const items = {
    // Shirts
    'shirtC': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tshirt-crew</title><path d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.07C5.31,13.46 4.68,13.46 4.29,13.07L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.12V20A1,1 0 0,1 16,21" fill={pColor} /></svg>),
    'shirtV': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tshirt-v</title><path d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.07C5.31,13.46 4.68,13.46 4.29,13.07L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9.29,4.8 10.4,6.37 12,7.25C13.6,6.37 14.71,4.8 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.12V20A1,1 0 0,1 16,21" fill={pColor} /></svg>),
    // Shoes
    'shoeFormal': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>shoe-formal</title><path d="M21.5,9V8H20.5L19.5,9H15L14,8H13L7,12H4A2,2 0 0,0 2,14V16H10L13,15H15V16H21.5V14C21.5,14 22,13 22,11.5C22,10 21.5,9 21.5,9Z" fill={pColor} /></svg>),
    'shoeHeel': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>shoe-heel</title><path d="M3,18H11.7L17,14H18V18H20V14C20,14 21,12 21,10C21,8 20.5,6 20.5,6H18.5L18,7L10,14H8L3,16V18Z" fill={pColor} /></svg>),
    'shoeSneaker': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>shoe-sneaker</title><path d="M2 15C2 15 2 12 4 12C4.68 12 5.46 11.95 6.28 11.82C7.2 12.54 8.5 13 10 13H10.25L8.56 11.29C8.91 11.18 9.25 11.05 9.59 10.91L11.5 12.82C11.89 12.74 12.25 12.63 12.58 12.5L10.55 10.45C10.85 10.28 11.14 10.11 11.43 9.91L13.5 12C13.8 11.79 14.04 11.56 14.25 11.32L12.22 9.29C12.46 9.07 12.7 8.83 12.92 8.58L14.79 10.45C14.91 10.14 15 9.83 15 9.5C15 8.65 14.55 7.89 13.84 7.28C13.89 7.19 13.95 7.1 14 7L15.53 6.23C16.38 7.17 18.14 7.84 20.25 7.97L20.3 8H21C21 8 22 9 22 12.5C22 13.07 22 13.57 21.96 14H19C17.9 14 16.58 14.26 15.3 14.5C14.12 14.76 12.9 15 12 15H2M21 17C21 17 21.58 17 21.86 15H19C17 15 14 16 12 16H2.28C2.62 16.6 3.26 17 4 17H21Z" fill={pColor} /></svg>),
    // Misc.
    'sunglasses': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sunglasses</title><path d="M7,17H4C2.38,17 0.96,15.74 0.76,14.14L0.26,11.15C0.15,10.3 0.39,9.5 0.91,8.92C1.43,8.34 2.19,8 3,8H9C9.83,8 10.58,8.35 11.06,8.96C11.17,9.11 11.27,9.27 11.35,9.45C11.78,9.36 12.22,9.36 12.64,9.45C12.72,9.27 12.82,9.11 12.94,8.96C13.41,8.35 14.16,8 15,8H21C21.81,8 22.57,8.34 23.09,8.92C23.6,9.5 23.84,10.3 23.74,11.11L23.23,14.18C23.04,15.74 21.61,17 20,17H17C15.44,17 13.92,15.81 13.54,14.3L12.64,11.59C12.26,11.31 11.73,11.31 11.35,11.59L10.43,14.37C10.07,15.82 8.56,17 7,17Z" fill={pColor} /></svg>),
    'tie': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tie</title><path d="M6,2L10,6L7,17L12,22L17,17L14,6L18,2Z" fill={pColor} /></svg>),
    'bow-tie': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bow-tie</title><path d="M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z" fill={pColor} /></svg>),
    'necklace': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>necklace</title><path d="M21.5 5H19.5C19.5 9.14 16.14 12.5 12 12.5C7.86 12.5 4.5 9.14 4.5 5H2.5C2.55 10.11 6.59 14.29 11.7 14.5C11.1 15.4 10 17.2 10 18C10 20.67 14 20.67 14 18C14 17.2 12.9 15.4 12.3 14.5C17.41 14.29 21.45 10.11 21.5 5Z" fill={pColor} /></svg>),
    'wizard-hat': (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>wizard-hat</title><path d="M21 22H3V20H21V22M19 19H5L11.1 2.6C11.3 2.2 11.6 2 12 2L18 5H13.9L19 19M10 7.5L11.04 7.97L11.5 9L11.97 7.97L13 7.5L11.97 7.03L11.5 6L11.04 7.03L10 7.5M13 15L10.94 14.07L10 12L9.07 14.07L7 15L9.07 15.93L10 18L10.94 15.93L13 15M13.97 11.97L15 11.5L13.97 11.03L13.5 10L13.04 11.03L12 11.5L13.04 11.97L13.5 13L13.97 11.97M15.97 15.97L17 15.5L15.97 15.03L15.5 14L15.04 15.03L14 15.5L15.04 15.97L15.5 17L15.97 15.97Z" fill={pColor} /></svg>)
  };
  
  // Selected Item
  let selectedItem = items[item] || null;

  return (
    <div className="w-48 h-fit flex flex-col border p-3 my-3 rounded-xl bg-slate-400/20">
      <div className=''>{selectedItem}</div>
      <div className="border-t">
        <p className="text-2xl mt-1 text-slate-300">{title}</p>
        <p className="w-fit text-xl">{price}</p> 
      </div>
      <button className="flex items-center justify-center text-base bg-slate-400/20 rounded-xl mt-2 hover:bg-slate-300/40">Add to Cart +</button>
    </div>
  );
}

