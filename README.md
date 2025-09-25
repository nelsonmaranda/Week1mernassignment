PLP Bookstore - MongoDB Scripts

Prerequisites
- MongoDB Shell (`mongosh`) installed and on PATH. If you only have the legacy shell, use `mongo` instead of `mongosh` in the commands below.
- MongoDB server running locally (default `mongodb://localhost:27017`).

Files
- `insert_books.js` – Creates database `plp_bookstore`, collection `books`, and inserts 10 sample books.
- `queries.js` – Contains example find/update/delete queries, advanced projections/sorts/pagination, aggregations, and indexing with `explain()` examples.

How to Run (Windows PowerShell)
Run each script from this folder:

```powershell
# Insert sample data
mongosh .\insert_books.js

# Run queries (you can also open and run selected parts in an interactive session)
mongosh .\queries.js
```

If using the legacy shell:

```powershell
mongo .\insert_books.js
mongo .\queries.js
```

Notes
- Re-running `insert_books.js` will attempt to insert the same documents again. If you want to start clean, you can drop the collection first:

```javascript
use('plp_bookstore');
db.books.drop();
```

- `queries.js` includes `createIndex` calls and `explain("executionStats")` before and after indexes so you can observe index usage and performance differences.


