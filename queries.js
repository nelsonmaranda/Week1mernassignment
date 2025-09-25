use('plp_bookstore');

// Basic Queries
// Find all books in a specific genre
db.books.find({ genre: "Fantasy" });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } });

// Find books by a specific author
db.books.find({ author: "J.R.R. Tolkien" });

// Update the price of a specific book
db.books.updateOne({ title: "The Hobbit" }, { $set: { price: 16.99 } });

// Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" });

// Advanced Queries
// 1) Find books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 2) Projection: only title, author, price
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 });
db.books.find({ genre: "Fantasy" }, { _id: 0, title: 1, author: 1, price: 1 });

// 3) Sorting by price
db.books.find({}, { _id: 0, title: 1, price: 1 }).sort({ price: 1 });
db.books.find({}, { _id: 0, title: 1, price: 1 }).sort({ price: -1 });

// 4) Pagination (5 per page)
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ title: 1 }).skip(0).limit(5);
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ title: 1 }).skip(5).limit(5);
var page = 3; var perPage = 5;
db.books.find({}, { _id: 0, title: 1, author: 1, price: 1 }).sort({ title: 1 }).skip((page - 1) * perPage).limit(perPage);

// Aggregation Pipelines
// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" }, count: { $sum: 1 } } },
  { $sort: { averagePrice: -1 } }
]);

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", numBooks: { $sum: 1 } } },
  { $sort: { numBooks: -1 } },
  { $limit: 1 }
]);

// Group by publication decade and count
db.books.aggregate([
  { $project: { title: 1, author: 1, decade: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);

// Indexing
// Baseline explain BEFORE indexes
db.books.find({ title: "The Hobbit" }).explain("executionStats");
db.books.find({ author: "J.R.R. Tolkien", published_year: { $gte: 1930 } }).explain("executionStats");

// Create indexes
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: 1 });

// Explain AFTER indexes
db.books.find({ title: "The Hobbit" }).explain("executionStats");
db.books.find({ author: "J.R.R. Tolkien", published_year: { $gte: 1930 } }).explain("executionStats");

// List indexes
db.books.getIndexes();


