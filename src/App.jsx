import Header from "./components/Header"
import Phone from "./components/Phone"

import { useCart } from "./hooks/useCart"

function App() {

  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    totalPrice
  } = useCart()

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        totalPrice={totalPrice}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((phone) => (
              <Phone
                key={phone.id}
                phone={phone}
                addToCart={addToCart} />
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
