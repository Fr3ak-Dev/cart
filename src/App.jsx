import Header from "./components/Header"
import Phone from "./components/Phone"
import { useState } from "react"
import { db } from "./data/db"
function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  const MIN_ITEMS = 1
  const MAX_ITEMS = 5

  function addToCart(item) {
    const itemExists = cart.findIndex(phoneTemp => phoneTemp.id === item.id)
    if (itemExists >= 0) { // exist in cart
      if (cart[itemExists].quantity >= MAX_ITEMS) return  // no add more than MAX_ITEMS
      const updatedCart = [...cart] // copy cart with spread operator
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart , item])
    }
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(phone => phone.id !== id))
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
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
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
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
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((phone) => (
              <Phone 
                key={phone.id} 
                phone={phone}
                addToCart={addToCart}/>
            ))
          }

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Phone Store - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
