import React from "react";
import "./styles.css";

var shoppingList = [
  "milk",
  "eggs",
  "bread",
  "butter",
  "jam",
  "salt",
  "pepper",
  "salami",
  "oregano",
  "chilli"
];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }

  function listItemClickHandler(item) {
    console.log("clicked:", item);
  }

  return (
    <div className="App">
      <h1>Print my Shopping List</h1>
      <ul>
        {shoppingList.map((item) => {
          if ((shoppingList.indexOf(item) + 1) % 2 === 1) {
            return (
              <li key={item}>
                <span style={{ backgroundColor: "grey" }}>{item}</span>
              </li>
            );
          } else {
            return <li key={item}>{item}</li>;
          }
        })}
      </ul>
      <ul></ul>
      <h1>Numbers</h1>
      <ul>
        {numbers.map((item) => {
          if (item % 2 === 1) {
            return (
              <li key={item}>
                <span style={{ backgroundColor: "grey" }}>{item}</span>
              </li>
            );
          } else {
            return <li key={item}>{item}</li>;
          }
        })}
      </ul>
      <h1>Print my Shopping List</h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              onClick={() => listItemClickHandler(item)}
              style={{ backgroundColor: getBg(index), padding: "0.5rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
