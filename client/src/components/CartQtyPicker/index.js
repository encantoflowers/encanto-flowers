// Import useEffect from React.
import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { UPDATE_CART_QUANTITY } from "../../utils/actions";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import "./style.css";

export default function CartQtyPicker(item) {
    const thisItem = item.item;
    console.log(item);
    const [state, dispatch] = useStoreContext();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty(qty + 1);
  };

  const decreaseQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const updateQuantity = (plusminus) => {
      console.log(state.cart);
    if (plusminus == "plus") {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: thisItem._id,
        purchaseQuantity: thisItem.purchaseQuantity + 1,
      });
      idbPromise("cart", "put", {
        ...thisItem,
        purchaseQuantity: thisItem.purchaseQuantity + 1,
      });
    } else if (plusminus=="minus" && thisItem.purchaseQuantity > 1) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: thisItem._id,
        purchaseQuantity: thisItem.purchaseQuantity - 1,
      });
      idbPromise("cart", "put", {
        ...thisItem,
        purchaseQuantity: thisItem.purchaseQuantity - 1,
      });
    }
  };

  return (
    <Container className="button-container-cart">
      <Row>
        <Col>
          <Button
            onClick={()=>{updateQuantity({ plusminus: "minus" })}}
            className="button-qty-cart button-sel-cart"
          >
            -
          </Button>
        </Col>
        {thisItem.purchaseQuantity}
        <Col>
          <Button
            onClick={() => {updateQuantity({ plusminus: "plus" })}}
            className="button-qty-cart button-sel-cart"
          >
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
