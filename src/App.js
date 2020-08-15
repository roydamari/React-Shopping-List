import React, { useState } from 'react';
import Header from './components/header'
import './App.css';
import SearchBar from './components/search';
import GroceriesList from './components/groceriesList';
import BasketList from './components/basketList';
import Footer from './components/footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [pending, setPending] = useState('All');
  const [basketList, setBasket] = useState([]);
  const [original, setOriginal] = useState([]);
  const [purchased, setPurchased] = useState(false);
  const [groceries] = useState([
    "Strawberry",
    "Blueberry",
    "Orange",
    "Banana",
    "Apple",
    "Carrot",
    "Celery",
    "Mushroom",
    "Green Pepper",
    "Eggs",
    "Cheese",
    "Butter",
    "Chicken",
    "Beef",
    "Pork",
    "Fish",
    "Rice",
    "Pasta",
    "Bread",
  ]);
  const [filtered, setFiltered] = useState(groceries);

  const divStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: "left",
    marginTop: '20px',
    fontFamily: "sans-serif",
  };

  const updateBasket = (e) => {
    const basket = basketList.map(x => x);
    const exist = (element) => element[1] === e.currentTarget.children[1].textContent;
    if (!basket.some(exist)) {
      basket.push([1, e.currentTarget.children[1].textContent, false]);
    } else {
      basket.forEach(grocery => {
        if (grocery[1] === e.currentTarget.children[1].textContent) {
          grocery[0]++;
        }
      });
    }
    setBasket(basket);
    setOriginal(basket);
  };

  const crossItem = (e) => {
    const basket = basketList.map(x => x);
    basket.forEach(grocery => {
      if (grocery[1] === e.currentTarget.children[2].textContent) {
        grocery[2] = !grocery[2];
      }
    });
    setBasket(basket);
    setOriginal(basket);
  };

  const resetList = () => {
    setBasket([]);
    setOriginal([]);
  }

  const filterBasket = (e) => {
    let basket = original.map(x => x);
    if (e.currentTarget.textContent === "Purchased") {
      basket = basket.filter(x => x[2]);
      setBasket(basket);
      setPurchased(true);
      setPending('Purchased');
    } else if (e.currentTarget.textContent === "Pending") {
      basket = basket.filter(x => !x[2]);
      setBasket(basket);
      setPurchased(false);
      setPending('Pending');
    } else if (e.currentTarget.textContent === "All") {
      setBasket(basket);
      setPurchased(false);
      setPending('All');
    } else {
      if (pending === "All") {
        basket = basket.filter(x => x[1].toLowerCase().startsWith(e.currentTarget.value.toLowerCase()));
      } else if (pending === 'Purchased') {
        basket = basket.filter(x => x[1].toLowerCase().startsWith(e.currentTarget.value.toLowerCase()) && x[2]);
      } else {
        basket = basket.filter(x => x[1].toLowerCase().startsWith(e.currentTarget.value.toLowerCase()) && !x[2]);
      }
      setFiltered(groceries.filter(x => x.toLowerCase().startsWith(e.currentTarget.value.toLowerCase())));
      setBasket(basket);
    }
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onChange={filterBasket} />
      <div style={divStyle}>
        {purchased ? <div style={{ display: "flex", alignItems: "center", marginBottom: 'auto' }}>
          <FontAwesomeIcon
            icon={faLeaf}
            style={{ display: "inline", marginRight: "5px" }}
          />
          <h3 style={{ display: "inline" }}>Groceries</h3>
        </div> : <GroceriesList groceries={filtered} onUpdate={updateBasket} />}
        <BasketList basketList={basketList} onReset={resetList} onCross={crossItem} />
      </div>
      <Footer onFilter={filterBasket} />
    </div>
  );
}

export default App;
