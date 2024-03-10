import { CreateItem } from './components/CreateItem';

export const catalogue = {
  shirts: [
    // C-neck
    <CreateItem key="shirtC-0" item='shirtC' title='T-shirt - white' price={12.98} color='white' />,
    <CreateItem key="shirtC-1" item='shirtC' title='T-shirt - grey' price={24.99} color='gray' />,
    <CreateItem key="shirtC-2" item='shirtC' title='T-shirt - black' price={12.98} color='black' />,
    <CreateItem key="shirtC-3" item='shirtC' title='T-shirt - silver' price={24.99} color='silver' />,
    // V-neck
    <CreateItem key="shirtV-0" item='shirtV' title='T-shirt - purple' price={24.99} color='purple' />,
    <CreateItem key="shirtV-1" item='shirtV' title='T-shirt - pink' price={24.99} color='pink' />,
    <CreateItem key="shirtV-2" item='shirtV' title='T-shirt - teal' price={24.99} color='teal' />,
  ],
  shoes: [
    // Formal
    <CreateItem key="shoeFormal-0" item='shoeFormal' title='Shoe - white' price={29.99} color='white' />,
    <CreateItem key="shoeFormal-1" item='shoeFormal' title='Shoe - black' price={29.99} color='black' />,
    <CreateItem key="shoeFormal-2" item='shoeFormal' title='Shoe - gray' price={29.99} color='gray' />,
    // Heel
    <CreateItem key="shoeHeel-0" item='shoeHeel' title='Heel - black' price={17.98} color='black' />,
    <CreateItem key="shoeHeel-1" item='shoeHeel' title='Heel - red' price={34.99} color='red' />,
    <CreateItem key="shoeHeel-2" item='shoeHeel' title='Heel - blue' price={34.99} color='blue' />,
    // Sneaker
    <CreateItem key="shoeSneaker-0" item='shoeSneaker' title='Sneaker - white' price={22.98} color='white' />,
    <CreateItem key="shoeSneaker-1" item='shoeSneaker' title='Sneaker - black' price={44.99} color='black' />,
    <CreateItem key="shoeSneaker-2" item='shoeSneaker' title='Sneaker - gray' price={44.99} color='gray' />,
  ],
  misc: [
    // Glasses
    <CreateItem key="sunglasses-0" item='sunglasses' title='Sunglasses - white' price={29.99} color='white' />,
    <CreateItem key="sunglasses-1" item='sunglasses' title='Sunglasses - black' price={29.99} color='black' />,
    // Tie
    <CreateItem key="tie-0" item='tie' title='Tie - white' price={7.49} color='white' />,
    <CreateItem key="tie-1" item='tie' title='Tie - black' price={9.99} color='black' />,
    // Bow-tie
    <CreateItem key="bow-tie-0" item='bow-tie' title='bow-tie - white' price={7.49} color='white' />,
    <CreateItem key="bow-tie-1" item='bow-tie' title='bow-tie - black' price={8.99} color='black' />,
    // Necklace
    <CreateItem key="necklace-0" item='necklace' title='Necklace' price={49.99} color='white' />,
    // Hats
    <CreateItem key="wizard-hat-0" item='wizard-hat' title='Wizard-Hat' price={4999.99} color='purple' />,
  ],
  sale: [
    // Shirts
    <CreateItem key="shirtC-0" item='shirtC' title='T-shirt - white' price={12.98} color='white' />,
    <CreateItem key="shirtC-2" item='shirtC' title='T-shirt - black' price={12.98} color='black' />,
    // Shoes
    <CreateItem key="shoeSneaker-0" item='shoeSneaker' title='Sneaker - white' price={22.98} color='white' />,
    <CreateItem key="shoeHeel-0" item='shoeHeel' title='Heel - black' price={17.98} color='black' />,
    // Misc
    <CreateItem key="tie-0" item='tie' title='Tie - white' price={7.49} color='white' />,
    <CreateItem key="bow-tie-1" item='bow-tie' title='bow-tie - black' price={7.49} color='black' />,
  ]
};
