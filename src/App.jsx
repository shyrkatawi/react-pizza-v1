import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Cart, Header } from './components';

function App() {
  const [pizzaItems, setPizzaItems] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((response) => response.json())
      .then(({ pizzas }) => setPizzaItems(pizzas));
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home pizzaItems={pizzaItems} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
