
console.log('inventory.js sourced');
//global variables (vars)
var Inventory = 'none';
var selectedColor = 'none';
var selectedSize = 'none';

var addItem = function (color, name, size) {
  console.log('adding item' + name + '' + color + '' + size);
  //create object
  // push into array
  // show updated inventory
  // add addItem
};

//end getSizeSelection}

var searchInventory = function () {
  console.log( 'in searchInventory');
  //get size from usesr
  selectedSize = document.getElementId('sizeIn').value;
  console.log('looking for something of size:', selectSize);
  // get color from usesr
  selectedColor= document.getElementById('colorIn').value;
  console.log( 'looking for something' + selectedColor + 'and' + selectedSize);
  //check if an item fits this description
};//end searchInventory

////// ADD ITEMS ///////
addItem('Blue', 'Smurf', 'Small');
addItem('Mermaid Treasure', ' Prime Academy', 'Large');
addItem('Bus Seat Green', 'Baby Banner', 'Medium');
addItem('Purple', 'Prince', 'Medium');
