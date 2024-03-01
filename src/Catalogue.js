import { CreateItem } from './components/Item';

export const catalogue = {
  shirts: [
    // C-neck
    CreateItem('shirtC', 'T-shirt - white', '$39.99', 'white'),
    CreateItem('shirtC', 'T-shirt - grey', '$39.99', 'gray'),
    CreateItem('shirtC', 'T-shirt - black', '$39.99', 'black'),
    CreateItem('shirtC', 'T-shirt - silver', '$39.99', 'silver'),
    // V-neck
    CreateItem('shirtV', 'T-shirt - purple', '$39.99', 'purple'),
    CreateItem('shirtV', 'T-shirt - pink', '$39.99', 'pink'),
    CreateItem('shirtV', 'T-shirt - teal', '$39.99', 'teal'),
  ],
  shoes: [
    // Formal
    CreateItem('shoeFormal', 'Shoe - white', '$39.99', 'white'),
    CreateItem('shoeFormal', 'Shoe - black', '$39.99', 'black'),
    CreateItem('shoeFormal', 'Shoe - gray', '$39.99', 'gray'),
    // Heel
    CreateItem('shoeHeel', 'Heel - black', '$39.99', 'black'),
    CreateItem('shoeHeel', 'Heel - red', '$39.99', 'red'),
    CreateItem('shoeHeel', 'Heel - blue', '$39.99', 'blue'),
    // Sneaker
    CreateItem('shoeSneaker', 'Sneaker - white', '$39.99', 'white'),
    CreateItem('shoeSneaker', 'Sneaker - black', '$39.99', 'black'),
    CreateItem('shoeSneaker', 'Sneaker - gray', '$39.99', 'gray'),
  ],
  misc: [
    // Glasses
    CreateItem('sunglasses', 'Sunglasses - white', '$39.99', 'white'),
    CreateItem('sunglasses', 'Sunglasses - black', '$39.99', 'black'),
    // Tie
    CreateItem('tie', 'Tie - white', '$39.99', 'white'),
    CreateItem('tie', 'Tie - black', '$39.99', 'black'),
    // Bow-tie
    CreateItem('bow-tie', 'bow-tie - white', '$39.99', 'white'),
    CreateItem('bow-tie', 'bow-tie - black', '$39.99', 'black'),
    // Necklace
    CreateItem('necklace', 'Necklace', '$39.99', 'white'),
    // Hats
    CreateItem('wizard-hat', 'Wizard-Hat', '$39.99', 'purple'),
  ],
};
