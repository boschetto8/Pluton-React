import {useEffect, useState } from 'react';
import {Button} from '@material-ui/core'

const ItemCount = ({data}) => {
    const [counter, setCounter] = useState(0)
    const [stock, setStock] = useState([])
    

    const incrementar = () => {
      if(counter >= 0 && stock > 0){  
        setCounter(counter+1)
        setStock (stock-1)
                     }
        }
    
    const decrementar = () => {
        if(counter > 0 && stock <= 20){
        setCounter(counter-1)
        setStock (stock+1)
                    }
  
        }

        useEffect (() => {
        setStock(data)
        }, [data])


    return (
        <div>
            <h5>{counter}</h5>
            <Button variant="outlined" color="secondary" onClick={incrementar}> + </Button>
            <Button variant="outlined" color="secondary" onClick={decrementar}> - </Button>
            <div>
                <h5>Stock disponible {data-counter}</h5>
            </div>
        </div>
    )

}


export default ItemCount
