console.log('inventory.js sourced!');
// global variables
var i;
var inventory = [];
var selectedColor = 'No Preference';
var selectedSize = 'No Preference';

// list of fuctions
function ItemInStock(size, color, name){
  this.itemSize = size;
  this.itemColor = color;
  this.itemName = name;
} // end ItemInStock

var searchInventory = function(){
  console.log( 'in searchInventory ');
  // initialize local variables
  var searchResults = [];

  // get info from user
  selectedColor = document.getElementById('colorIn').value;
  selectedSize = document.getElementById('sizeIn').value;
  console.log('Color Preference:',selectedColor+"!",
  'Size Preference:',selectedSize+"!");
  // check if an item fits this description

  for ( i=0 ; i<inventory.length ; i++ ){
    if ((selectedSize=='No Preference' || inventory[i].itemSize==selectedSize) &&
      (selectedColor=='No Preference' || inventory[i].itemColor==selectedColor)) {
        // push match into results array
        searchResults.push(inventory[i]);
    } // end match
  } // end for

  // Display results
  console.log( 'You searched for items with',selectedSize,'size and',selectedColor,'color:');
  console.log( 'We found',searchResults.length, 'matches!');
  if (searchResults.length>0){
    console.log('This is what we have in stock:');
    for (i = 0; i < inventory.length; i++) {
      console.log('A',inventory[i].itemSize+',',inventory[i].itemColor,inventory[i].itemName+'!');
    } // end listing for loop
  } else {
    console.log('Sorry, we currently don\'t have anything in stock matching those selections.');
  }
}; // end searchInventory

var stockItem = function ( size, color, name ){
  console.log('In stockItem with:', size, color, name );
  newItem = new ItemInStock(size, color, name);
  inventory.push(newItem);
}; // end stockItem


/// ADD ITEMS ///
// stockItem( '', '', '');
stockItem( 'Small', 'Blue', 'Smurf');
stockItem( 'Medium', 'Bus Seat Green', 'Baby Hulk');
stockItem( 'Large', 'Mermaid Treasure', 'Prime Academy');
stockItem( 'Small', 'Purple', 'Eggplant');
stockItem( 'Medium', 'Purple', 'Prince');
stockItem( 'Small', 'Yellow Canary', 'Brain');
stockItem( 'Small', 'Yellow Canary', 'Lemon');

console.log(inventory);
