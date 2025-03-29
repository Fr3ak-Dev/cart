export default function Header({ cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, totalPrice }) {

    return (
        <header className="py-0 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="./img/logo.png" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid pointer" src="./img/carrito.png" alt="imagen carrito" />
                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center m-0">El carrito esta vacio</p>
                                ) : (
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(phone => (
                                                <tr key={phone.id}>
                                                    <td>
                                                        <img className="img-fluid" src={`./img/${phone.image}.jpg`} alt="phone image" />
                                                    </td>
                                                    <td>{phone.name}</td>
                                                    <td className="fw-bold">
                                                        {phone.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => decreaseQuantity(phone.id)}>
                                                            -
                                                        </button>
                                                        {phone.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => increaseQuantity(phone.id)}>
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={() => removeFromCart(phone.id)}>
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                                <p className="text-end">Total pagar: <span className="fw-bold">Bs. {totalPrice}</span></p>
                                <button
                                    className="btn btn-dark w-100 mt-3 p-2"
                                    onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
