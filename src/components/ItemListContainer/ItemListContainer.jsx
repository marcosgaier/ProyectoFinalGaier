import React from "react";
import { Text } from "@chakra-ui/react";
import ItemCount from "../itemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <Text fontSize="2xl" mt={4} textAlign="center">
        {greeting}
        <ItemCount />
      </Text>
    </div>
  );
};

export default ItemListContainer;
