import Card from "./Card";
import RemoveCartItem from "./CardRemoveItem";
import CommonScreen from "../../Structure/CommonScreen";
import axios from "axios";
import CONSTANTS from "../../utils/Constants";
import { useEffect, useState } from "react";
import RemoveCarItem from "./CardRemoveItem";

export default function Cart() {

    const [products, setProducts] = useState([]);
    function fetchUsersAddedProducts() {
        axios.get(CONSTANTS.BASE_URL + "/customer/fetch-users-cart-products", {
            params: {
                currencyCode: localStorage.getItem('currencyCode')
            },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('authToken'),
            }
        })
            .then((result) => {
                console.log("users added products are : " + JSON.stringify(result));
                setProducts(result.data);
            })
    }

    useEffect(() => {
        fetchUsersAddedProducts();
    }, [])
    return (
        <>
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
                <h3 className="mb-0">Your cart</h3>
                <a className="btn btn-primary"><i className="ri-secure-payment-line me-1"></i>Checkout / Place order</a>
            </div>
            <div className="row">
                {products.map((product) => (
                    <RemoveCarItem specificationList={product.specificationList} currencySymbol={product.currencySymbol} productId={product.productFinalCostMasterId} productName={product.productName} productImages={product.productImages} productCost={product.cost} />
                ))}
            </div>
        </>
    )
}