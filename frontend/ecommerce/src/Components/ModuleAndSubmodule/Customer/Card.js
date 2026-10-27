import { NavLink } from "react-router-dom";
import CONSTANTS from "../../utils/Constants";
import "../../../css/Card.css";


export default function Card({ productId, productName, productImages, productCost }) {
    console.log(productName);
    console.log(productImages);


    return (
        <div className="col-6 col-sm-4 col-md-3 col-xl-2 product-col">
            <NavLink to={`/ecommerce/product/view?productId=${productId}`} className="card product-card" >

                {productImages && (
                    <div className="carousel-wrapper">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active img-container" data-bs-interval="10000">
                                    {productImages[0] && (
                                        <img
                                            src={productImages[0].imagePath}
                                            className="d-block"
                                            alt={`Product image ${productImages[0].isPrimary ? 'primary' : '1'}`}
                                        />
                                    )}
                                </div>
                                <div className="carousel-item img-container" data-bs-interval="2000">
                                    {productImages[1] && (
                                        <img
                                            src={productImages[1].imagePath}
                                            className="d-block"
                                            alt={`Product image ${productImages[1].isPrimary ? 'primary' : '2'}`}
                                        />
                                    )}
                                </div>
                                <div className="carousel-item img-container">
                                    {productImages[2] && (
                                        <img
                                            src={productImages[2].imagePath}
                                            className="d-block"
                                            alt={`Product image ${productImages[2].isPrimary ? 'primary' : '3'}`}
                                        />
                                    )}
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleInterval"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleInterval"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                )}
                <h6 className="product-name">{productName}</h6>
                <div className="product-price">{productCost}</div>
                <div className="product-actions">
                    <button className="btn btn-success btn-sm"><i className="ri-wallet-line"></i>Buy</button>
                    <button className="btn btn-secondary btn-sm"><i className="ri-shopping-cart-line"></i>Add</button>
                </div>
            </NavLink>

        </div>
    )
}