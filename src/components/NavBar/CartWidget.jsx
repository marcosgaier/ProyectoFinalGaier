import React from "react";
import { Badge, Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  return (
    <div>
      <h5>
        <Icon as={FaShoppingCart} />
      </h5>
      <Badge colorScheme="purple">3</Badge>
    </div>
  );
};

export default CartWidget;
