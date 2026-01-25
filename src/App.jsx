import React from "react";
import "./pizza.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingrediants: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./pizza 1.jpg",
    SoldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingrediants: "Tomato and mozarella",
    price: 10,
    photoName: "./pizza 2.jpg",
    soldOut: false,
  },
  {
    name: "Pizza fungi",
    ingrediants: "Tomato,mozarella,mushrooms, and onion",
    price: 12,
    photoName: "./pizza 3.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingrediants: "Tomato,mozarella and pepperoni",
    price: 15,
    photoName: "./pizza 4.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="body">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="heade footer">
      <h1>Fast React Pizza</h1>
    </header>
  );
}
function Menu() {
  return (
    <main>
      <h2>Our Menu</h2>
      <ul className="Menu">
        {/* {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingrediants={pizza.ingrediants}
            price={pizza.price}
            photoName={pizza.photoName}
            soldOut={pizza.soldOut}
          />
        ))} (way1)*/}
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} /> //best way(way2)
        ))}
      </ul>
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <li className="pizza">
      <img className="imgs" src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingrediants}</p>
        <span>{pizzaObj.price + 4}</span>
        <h4>{pizzaObj.soldOut ? "SOLD OUT" : null}</h4>
      </div>
    </li>
  );
}
/* function Pizza(props) {

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingrediants}</p>
        <span>{props.pizzaObj.price + 4}</span>
        <h4>{props.pizzaObj.soldOut}</h4>
      </div>
    </li>
  );
} */

function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);
  //component can render with multiple returns
  if (!isOpen)
    return (
      <p>
        We're happy to Welcome u between {openhour}:00 and {closehour}:00.
      </p>
    );
  return (
    <footer>
      {isOpen && (
        <div>
          <p>We're Open</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  ); //conditional rendering using & operator
  //if condition before & is true ,then 2nd part will render
  //if condition doesnt satisfy,its doesnt show 2nd part
}

export default App;
