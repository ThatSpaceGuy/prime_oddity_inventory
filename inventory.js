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
    for (i = 0; i < searchResults.length; i++) {
      console.log('A',searchResults[i].itemSize+',',searchResults[i].itemColor,searchResults[i].itemName+'!');
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

var stockNewItem = function(){
  console.log('in stockNewItem!');
  var newSize = document.getElementById('newItemSize').value;
  var newColor = document.getElementById('newItemColor').value;
  var newName = document.getElementById('newItemName').value;

  if (newSize !== 'Choose a Size' && newColor !== 'Choose a Color' && newName !== '') {
    stockItem(newSize, newColor, newName);
    console.log('A brand new', newSize+',', newColor, newName, 'has been added to our inventory!');
  } else {
    console.log('Sorry! You need to enter values in all three fields, please.');
  }
}; // end stockNewItem

var searchInventoryByName = function(){
  console.log('in searchInventoryByName!');
  // initialize local variables
  var searchResults = [];

  // get info from user
  nameToSearchFor = document.getElementById('nameIn').value;
  console.log('Name to search for:',nameToSearchFor+"!");
  // check if an item in stock has this name

  if (nameToSearchFor === '') {
    console.log('Sorry! You need to enter a value in the field, please.');
  } else {

    for ( i=0 ; i<inventory.length ; i++ ){
      if (inventory[i].itemName===nameToSearchFor) {
        // push match into results array
        searchResults.push(inventory[i]);
      } // end match
    } // end for

    // Display results
    console.log( 'You searched for items with this name:',nameToSearchFor);
    console.log( 'We found',searchResults.length, 'matches!');
    if (searchResults.length>0){
      console.log('This is what we have in stock:');
      for (i = 0; i < searchResults.length; i++) {
        console.log('A',searchResults[i].itemSize+',',searchResults[i].itemColor,searchResults[i].itemName+'!');
      } // end listing for loop
    } else {
      console.log('Sorry, we currently don\'t have anything in stock matching those selections.');
    }
  }
}; // end searchInventoryByName

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
