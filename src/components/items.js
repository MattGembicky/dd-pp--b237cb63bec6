function Item(id, name, cost){
  this.id = id;
  this.name = name;
  this.cost = cost;
}


const items = [
  new Item(0, "Item 1", 10),
  new Item(1, "Item 2", 12),
  new Item(2, "Item 3", 40),
  new Item(3, "Item 4", 75)
];

export default items;
