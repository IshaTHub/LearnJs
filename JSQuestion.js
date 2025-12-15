// Q: Create a JS function that moves all products above a given price from one category to another.
 
// Function: function moveExpensiveProducts(categories, fromCategoryId, toCategoryId, priceThreshold) {}
 
// Call the function: moveExpensiveProducts(categories, 3, 1, 50);
 
// Initial Array: 
 
const categories = [
  {
    id: 1,
    name: "Electronics",
    products: [
      { id: 101, name: "Laptop",      price: 999, tags: ["new","sale"] },
      { id: 102, name: "Headphones",  price: 199, tags: ["audio"] },
      { id: 103, name: "Smartphone",  price: 699, tags: ["mobile"] }
    ]
  },
  {
    id: 2,
    name: "Books",
    products: [
      { id: 201, name: "Eloquent JavaScript", price: 25, tags: ["programming"] }
    ]
  },
  {
    id: 3,
    name: "Accessories",
    products: [
      { id: 301, name: "Watch",      price: 45, tags: ["fashion"] },
      { id: 302, name: "Designer Bag", price: 120, tags: ["luxury"] },
      { id: 303, name: "Sunglasses",  price: 60,  tags: ["summer"] }
    ]
  }
];
 
//Expected Output: 
 
[
  {
    id: 1,
    name: "Electronics",
    products: [
      { id: 101, name: "Laptop",      price: 999, tags: ["new","sale"] },
      { id: 102, name: "Headphones",  price: 199, tags: ["audio"] },
      { id: 103, name: "Smartphone",  price: 699, tags: ["mobile"] },
      // moved over:
      { id: 302, name: "Designer Bag", price: 120, tags: ["luxury"] },
      { id: 303, name: "Sunglasses",   price: 60,  tags: ["summer"] }
    ]
  },
  {
    id: 2,
    name: "Books",
    products: [
      { id: 201, name: "Eloquent JavaScript", price: 25, tags: ["programming"] }
    ]
  },
  {
    id: 3, 
    name: "Accessories",
    products: [
      // only the item below threshold remains
      { id: 301, name: "Watch", price: 45, tags: ["fashion"] }
    ]
  }
]


function moveExpensiveProducts(categories, fromCategoryId, toCategoryId, priceThreshold) {
  const fromCategory = categories.find(cat => cat.id === fromCategoryId);
  const toCategory = categories.find(cat => cat.id === toCategoryId);

  if (!fromCategory || !toCategory) {
    console.error("Invalid category IDs");
    return;
  }

  // Filter and extract expensive products
  const expensiveProducts = fromCategory.products.filter(p => p.price > priceThreshold);

  // Retain only products below or equal to the threshold
  fromCategory.products = fromCategory.products.filter(p => p.price <= priceThreshold);

  // Add the expensive products to the destination category
  toCategory.products.push(...expensiveProducts);
}


