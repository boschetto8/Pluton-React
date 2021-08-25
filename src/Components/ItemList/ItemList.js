import {useState, useEffect} from "react";
import Item from "../Item/Item";
import './ItemList.css'
import {Link} from 'react-router-dom'


const ItemList = () => {

    const [books, setBooks] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:3000/libros.json')
        .then((response) => response.json())
        .then((data) => setBooks(data));
        
        }, []); 


    return (
        <div>
          
            {books.map((libros) => {
         return (
            <div className='itemList-container' key={libros.id}>
                <Link to= {`/detail/${libros.id}`}>
                     <Item libro={libros} />
                </Link>
            </div>
          )
                    }
             ) }
         </div>
        
       )
}

export default ItemList
