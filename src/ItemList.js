import React, { useState, useEffect } from "react";
import swell from 'swell-js';


export default function ItemList() {
  swell.init('normtest', 'pk_h6lliwraom4feD4Zt2foDYc3YpjCkDwm')
  const [items, setItems] = useState([{}])

  async function addToCart(id) {
    await swell.cart.addItem({
      product_id: id,
      quantity: 1,
      options: []
    })
  }

  useEffect(() => {
    async function fetchProducts() {
      const request = await swell.products.list()
      //console.log(request)
      setItems(request.results)
      return request;
    }
    fetchProducts()
  }, [])

  return (
    <>
      {items.map((item, key) => {
        return (
          <div key={key}>
            <h2>{item.name} - ${item.price} </h2>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </div>
        )
      })}
    </>
  )
}
