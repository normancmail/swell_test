import React, { useState, useEffect } from "react";
import swell from 'swell-js';

export default function Cart() {
    swell.init('normtest', 'pk_h6lliwraom4feD4Zt2foDYc3YpjCkDwm')
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState()
    

    async function emptyCart() {
        const request = await swell.cart.setItems([])
        setTotal("0")
        //const request = await swell.cart.get()
        return request
    }


    useEffect(() => {
        async function fetchCart() {
            const request = await swell.cart.get()
            const arrayOfObjects = request.items

            const test = arrayOfObjects.map(
                ({ price, product, quantity, key }) => `${product.name} - $${product.price} x${quantity}`
            );
            setCart(test)
            setTotal(request.sub_total)


            return request;
        }
        fetchCart()
    }, [total])

    return (
        <>
            <div>
                {cart.map((cart, key) => {
                    return (
                        <h3 key={key}>{cart}</h3>
                    )
                }
                )}
            </div>
            <h2>Current Total: {total}</h2>
            <button onClick={() => { emptyCart(); }} > Empty Cart</button>
            {/* <button OnClick={ RefreshPage }>Refresh!</button> */}
        </>



    )
}

