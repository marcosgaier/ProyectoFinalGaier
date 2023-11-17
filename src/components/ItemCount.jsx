import {useState} from 'react'
import { Button, Badge, useToast } from '@chakra-ui/react'


const ItemCount = () => {
const toast = useToast()

const [count, setCount] = useState(0)

const addToCart = () => {
    toast({
        title: 'Listo!',
        description: `Agregaste ${count} unidades`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
}

  return (
    <div>
        <Button colorScheme='teal' variant='outline' onClick={() => setCount(count - 1)}>
            -
        </Button>
        <Badge colorScheme='purple'>{count}</Badge>
        <Button colorScheme='teal' variant='outline' onClick={() => setCount(count + 1)}>
            +
        </Button>
        <Button colorScheme='linkedin' onClick={addToCart}>Agregar al Carrito</Button>


    </div>
  )
}

export default ItemCount