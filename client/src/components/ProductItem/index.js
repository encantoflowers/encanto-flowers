import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QUERY_PRODUCT } from "../../utils/queries";
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  UPDATE_PRODUCTS,
} from "../../utils/actions";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import QuantityPicker from "../QuantityPicker";
import "./style.css";

export default function ProductItem() {
  const [state, dispatch] = useStoreContext();
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  const { loading, data, error } = useQuery(QUERY_PRODUCT, { variables: { _id: productId }, });
  const { products, cart } = state;

  useEffect(() => {
    if (data && loading === false) {
      setCurrentProduct(data.product);
    } 
  }, [data, loading]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === productId);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: productId,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  if (loading) {
    return <div> ... loading ...</div>;
  } else if (error) {
    console.log("error: ", error)
  } else {
    console.log(data);
    return (
      <div>
        {/* {data.products.map((product) => { */}
          {/* return ( */}
            <Container
              className="product-item"
              key={(Math.random() * 100) / 20 + 3}
            >
              <Row>
                <Col lg={5}>
                  {/* <img
                                src={`/images/${currentProduct.image.img}`}
                            /> */}
                  <img src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
                </Col>
                <Col>
                  <h4>{data.product.name}</h4>
                  <p>{data.product.description}</p>
                  <h3>{data.product.price}</h3>
                  <div>
                    <p>Quantity</p>
                    <QuantityPicker />
                  </div>

                  <Button className="button" onClick={addToCart}>
                    Add to Cart
                  </Button>
                  <a href="tel:123456789">
                    <Button className="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-telephone"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>{" "}
                      Call to Order
                    </Button>
                  </a>
                </Col>
              </Row>
            </Container>
          {/* ); */}
        {/* })} */}
      </div>
    );
  }

  return <div> Hello world </div>;

  // useEffect(() => {
  //     // already in global store
  //     if (products.length) {
  //       setCurrentProduct(products.find((product) => product._id === id));
  //     }
  //     // retrieved from server
  //     else if (data) {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: data.products,
  //       });

  //       data.products.forEach((product) => {
  //         idbPromise('products', 'put', product);
  //       });
  //     }
  //     // get cache from idb
  //     else if (!loading) {
  //       idbPromise('products', 'get').then((indexedProducts) => {
  //         dispatch({
  //           type: UPDATE_PRODUCTS,
  //           products: indexedProducts,
  //         });
  //       });
  //     } else {
  //         console.log("this is some bullshit!");
  //     }
  //   }, [data, loading, dispatch]);

  return (
    <Container className="product-item">
      <Row>
        <Col lg={5}>
          {/* <img
                        src={`/images/${currentProduct.image.img}`}
                    /> */}
          <img src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
        </Col>
        <Col>
          <h4>{data.products[0].name}</h4>
          <p>{data.products[0].description}</p>
          <h3>{data.products[0].price}</h3>
          <div>
            <p>Quantity</p>
            <QuantityPicker />
          </div>

          <Button className="button" onClick={addToCart}>
            Add to Cart
          </Button>
          <a href="tel:123456789">
            <Button className="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>{" "}
              Call to Order
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
