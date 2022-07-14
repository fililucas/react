import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const ItemsDATABASE = [{
    "id": 1,
    "producto": "Bmw 128i",
    "price": '1.849.000',
    "category": "Deportivo",
    "stock": 2,
    "img": "https://www.km77.com/media/fotos/bmw_serie_1_2017_5_puertas_6454_1.jpg"
  }, {
    "id": 2,
    "producto": "producto 2",
    "price": '1',
    "category": "Descripción",
    "stock": 1,
    "img": ""
  }, {
    "id": 3,
    "producto": "producto 3",
    "price": '1',
    "category": "Descripción",
    "stock": 1,
    "img": ""
  }];
  console.log("%c render itemlistcontainer", "color:green");
  ;
  let [items, setItems] = useState([]);
  useEffect(() => {
    let promiseItems = new Promise((resolve, reject) => {
      setTimeout(
        () => {
          resolve(ItemsDATABASE);

        },
        1000);
    });
    promiseItems.then(
      (respuesta) => {
        setItems(ItemsDATABASE);
      }
    ).catch((errorMg) => console.error((errorMg)))
  },
    [])

  return (
    <>
      <ItemList items={items} />
      {console.log(items)}
      <p>{props.greeting}</p>
    </>
  );
}

export default ItemListContainer;