## PLP Bookstore — MongoDB Scripts

### Prerequisites
- **MongoDB Server** running locally (default: `mongodb://localhost:27017`).
- **MongoDB Shell (`mongosh`)** installed and on PATH.
  - If you only have the legacy shell, replace `mongosh` with `mongo` in commands.

### What’s Included
- **`insert_books.js`**: Creates the `plp_bookstore` database, `books` collection, and inserts 10 sample books.
- **`queries.js`**: Contains basic and advanced queries, aggregations, indexing, and `explain()` examples.

### How to Run (Windows PowerShell)
From this folder (`C:\PLP\MERN`), run:

```powershell
# 1) Insert sample data
mongosh .\insert_books.js

# 2) Execute all queries/aggregations/indexing
mongosh .\queries.js
```

Using the legacy shell instead:

```powershell
mongo .\insert_books.js
mongo .\queries.js
```

### Useful Tips
- **Start fresh** (optional): If you re-run inserts and want a clean state:

```javascript
use('plp_bookstore');
db.books.drop();
```

- **Check inserted data quickly**:

```javascript
use('plp_bookstore');
db.books.find().limit(5); // preview first 5 docs
```

- **See created indexes** after running `queries.js`:

```javascript
use('plp_bookstore');
db.books.getIndexes();
```

### Notes
- The `queries.js` script demonstrates `explain("executionStats")` before and after index creation so you can observe index usage and performance differences.
- Feel free to open either script in an interactive `mongosh` session and execute individual blocks for learning and experimentation.


