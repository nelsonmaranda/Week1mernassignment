use('plp_bookstore');
db.createCollection('books');

db.books.insertMany([
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 10.5,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 9.99,
    in_stock: false,
    pages: 180,
    publisher: "Charles Scribner's Sons"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 8.75,
    in_stock: true,
    pages: 279,
    publisher: "T. Egerton"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 14.5,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    published_year: 1851,
    price: 11.25,
    in_stock: false,
    pages: 635,
    publisher: "Harper & Brothers"
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical",
    published_year: 1869,
    price: 15.0,
    in_stock: true,
    pages: 1225,
    publisher: "The Russian Messenger"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 10.99,
    in_stock: true,
    pages: 277,
    publisher: "Little, Brown and Company"
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1954,
    price: 25.0,
    in_stock: true,
    pages: 1178,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Gothic",
    published_year: 1847,
    price: 9.5,
    in_stock: true,
    pages: 500,
    publisher: "Smith, Elder & Co."
  }
]);


