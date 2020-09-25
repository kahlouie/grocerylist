import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [groceryList, setList] = useState([])
  const [item, setItem] = useState("")
  React.useEffect(() => {
    axios.get(`http://localhost:3080/api/list`)
      .then(res => {
        const items = res.data
        setList(items);
      });
  }, []);

  const handleChange = (event) => {
    setItem(event.target.value);
  }

  const handleSubmit = (event) => {
    axios.post(`http://localhost:3080/api/add-item`, {'item': item});
  };


  return (
    <div className="GroceryList">
      <header className="Header">
        <h1>Grocery List</h1>
      </header>
      <div className="MainContent">
        <ul className="List">
          {groceryList.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
        <label htmlFor="newItem">What do you want/need from the store?</label>
          <input
            type="text"
            name="newItem"
            value={item}
            onChange={handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
export default App;
