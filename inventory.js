console.log('inventory.js sourced!');
// global variables
var inventory = [];
var selectedColor = 'No Preference';
var selectedSize = 'No Preference';

// list of fuctions
function ItemInStock(size, color, name){
  this.itemSize = size;
  this.itemColor = color;
  this.itemName = name;
}

var searchInventory = function(){
  console.log( 'in searchInventory ');
  // get info from user
  selectedColor = document.getElementById('colorIn').value;
  selectedSize = document.getElementById('sizeIn').value;
  console.log('Color Preference:',selectedColor+"!",
  'Size Preference:',selectedSize+"!");
  // check if an item fits this description

  for ( i=0 ; i<inventory.length ; i++ ){
    if (selectedSize=='No Preference' || inventory[i].itemSize==selectedSize) {
      if (selectedColor=='No Preference' || inventory[i].itemColor==selectedColor) {
        console.log(inventory[i].itemName);
      }
    }
  }

};

var stockItem = function ( size, color, name ){
  console.log('In stockItem with:', size, color, name );
  newItem = new ItemInStock(size, color, name);
  inventory.push(newItem);
}; // end stockItem


/// ADD ITEMS ///
// stockItem( '', '', '');
stockItem( 'Small', 'Blue', 'Smurf');
stockItem( 'Medium', 'Bus Seat Green', 'Baby Hulk');
stockItem( 'Small', 'Purple', 'Eggplant');
stockItem( 'Medium', 'Purple', 'Prince');

console.log(inventory);
