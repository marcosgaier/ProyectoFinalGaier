import React from "react";
import { Text } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <Text fontSize="2xl" mt={4} textAlign="center">
        {greeting}
      </Text>
    </div>
  );
};

export default ItemListContainer;
