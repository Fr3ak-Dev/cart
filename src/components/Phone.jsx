export default function Phone() {
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src="./img/celular1.jpg" alt="phone image" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">Phone #1</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p className="fw-black text-primary fs-3">$299</p>
                <button
                    type="button"
                    className="btn btn-dark w-100">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}
