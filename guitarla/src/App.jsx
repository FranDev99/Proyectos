import { useState, useEffect } from "react"
import Header from "./components/Header"
import Guitarra from "./components/Guitarra"
import { db } from "./Data/db"

function App() {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
    
    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)
    const minItems = 1
    const maxItems = 5

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0) { //Existe en el carrito de compras
            if(cart[itemExists].quantity >= maxItems) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else {
            item.quantity = 1
            setCart([...cart, item])
        }
    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > minItems) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }                
            }
            return item
        })
        setCart(updatedCart)
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < maxItems){
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item 
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    return (
    <>
    <Header 
     cart = {cart}
     removeFromCart = {removeFromCart}
     decreaseQuantity = {decreaseQuantity}
     increaseQuantity = {increaseQuantity}
     clearCart = {clearCart}
    />    
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitar) => (
                    <Guitarra
                        key = {guitar.id} 
                        guitar = {guitar}
                        setCart = {setCart}
                        addToCart = {addToCart}
                    />
                ))}
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA</p>
            </div>
        </footer>
    </>
  )
}

export default App
