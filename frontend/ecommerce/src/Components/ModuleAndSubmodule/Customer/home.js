import { NavLink } from "react-router-dom";
import Card from "./Card";
import CardGroup from "./CardGroup";
import Carousal from "./Carousal";
import CommonScreen from "../../Structure/CommonScreen";
import Footer from "../../Structure/Footer";
import { useAuth } from "../../../features/AuthProvider ";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import axios from "axios";
import CONSTANTS from "../../utils/Constants";
import Loader from "../../Structure/Loader";
export default function HomePage() {
    const { authToken } = useAuth(); // Access the authToken from context
    const [productCategories, setProductCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log("jwt-token:" + authToken);
    useEffect(() => {
        toast.success("Welcome!");
        //fetchProductCategories();
        localStorage.setItem('cartItemNo', 0);
        fetchRandomFourProductsFromEachCategory();
    }, [])

    // const fetchProductCategories = async () => {
    //     await axios.get(CONSTANTS.BASE_URL + "/api-data/common-data/fetch-product-categories", {
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.getItem('authToken'),
    //             "Content-Type": "application/json"
    //         }
    //     }).then((result) => {
    //         setProductCategories(result.data);
    //         console.log(result.data)
    //     })
    // }

    function fetchRandomFourProductsFromEachCategory() {
        axios.get(CONSTANTS.BASE_URL + "/api-data/product/fetch-four-random-by-categories?currencyCode=" + localStorage.getItem('currencyCode'), {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('authToken'),
                "Content-Type": "application/json"
            }
        }).then((result) => {
            console.log(result.data);
            setProductCategories(result.data);
        })
    }


    return (
        <>
            <div>
                {/* Carousel Section */}

                <div className="hero-wrap">

                    <Carousal />
                </div>
                <div>
                    {loading && <Loader />} {/* Show loader when loading */}
                    {productCategories.map((productCategory) => (
                        <div className="category-section" key={productCategory.productCategoryDesc}>
                            <div>
                                <div className="card shadow">

                                    <>
                                        <h3 className="category-title">
                                            {productCategory.productCategoryDesc}
                                        </h3>
                                        <div className="row">
                                            {productCategory.products.map((product) => (

                                                <Card specificationList={product.specificationList} currencySymbol={product.currencySymbol} productId={product.productFinalCostMasterId} productName={product.productName} productImages={product.productImages} productCost={product.cost} />

                                            ))}
                                        </div>
                                    </>

                                </div>

                            </div>

                        </div>
                    ))}
                </div>
                <ToastContainer />
            </div >
        </>
    )
}