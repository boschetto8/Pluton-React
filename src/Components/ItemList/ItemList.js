import {useState, useEffect} from "react";
import Item from "../Item/Item";
import './ItemList.css'


const ItemList = () => {

    const [book, setBook] = useState([]);
   

    useEffect(() => {
        fetch('/libros.json')
        .then((response) => response.json())
        .then((data) => setBook(data));
        
        }, []); 


    return (
        <div>
          
            {book.map((libros) => {
         return (
            <div className='itemList-container' key={libros.id}>
                <Item libro={libros} />
                
            </div>
          )
                    }
             ) }
         </div>
        
       )
}

export default ItemList
