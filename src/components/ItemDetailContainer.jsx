import React from "react";
import { Text } from "@chakra-ui/react";
import ItemCount from "../itemCount";
import { calcLength } from "framer-motion";


const ItemListContainer = () => {
  const productos = [
    { id: 1, titulo: "Producto A", descripcion: "descripcion del producto A", precio: 1000, categoria: "A" },
    { id: 2, titulo: "Producto B", descripcion: "descripcion del producto B", precio: 2000, categoria: "B" },
    { id: 3, titulo: "Producto C", descripcion: "descripcion del producto C", precio: 3000, categoria: "C" },
    { id: 4, titulo: "Producto D", descripcion: "descripcion del producto D", precio: 4000, categoria: "D" },
  ]


const mostrarProductos = new Promise ((resolve, reject) => {
  if (productos.length > 0) {
    setTimeout(() => {
      resolve(productos)
    }, 500)
  } else {
    reject("No se encontraron productos")
  }
})

mostrarProductos.then((resultado) => {
  console.log(resultado)
})

.catch((error) => {
  console.log(error)
})

return (
    <div>

      {
        productos.map((p) => {
          return (
            <div key={p.id}>
              <h2>Producto: {p.titulo}</h2>
              <h4>$ {p.precio}</h4>
            </div>
            )
      })
      }
      {/* <ItemCount /> */}
    </div>
    )
}
  

    



export default ItemDetailContainer;
