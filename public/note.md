- hooks 
### https://www.youtube.com/watch?v=3rDlo4-Ytuw


<h3 className="Date">It is {new Date().toLocaleTimeString()}.</h3>

- Create CRUD Todo App:
### https://dev.to/joelynn/series/12791

- The BEST! (EBook)
- ONLY with localStorage
### https://dev.to/joelynn/build-a-react-crud-todo-app-add-read-todos-1l8a

- HOOKS!
### https://www.youtube.com/watch?v=4pO-HcG2igk
---

-JSON-SERVER
### https://github.com/typicode/json-server#database
- poluchit' dannye s servra
- npm i -D json-server
- npx json-server src/data/db.json -p 5000
```
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/books");
      const data = await response.json();
      setBooks(data);
    };
    fetchData();
  }, []);
```