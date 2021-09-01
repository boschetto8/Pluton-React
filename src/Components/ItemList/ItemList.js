import  {useState, useEffect} from 'react'
import './ItemList.css'
import  Item from '../Item/Item'
import { NavLink } from 'react-router-dom';

const ItemList = () => {
    const [books, setBooks] = useState([]);
   
    //Se esta utilizando json web server inicializar (npx json-server --watch .\public\libros.json -p 8000)
    useEffect(() => {
        fetch('http://localhost:8000/books')
        .then((response) => response.json())
        .then((data) => setBooks(data));
        
        }, []); 


    return (
        <div>
          
            {books.map((libros) => {
         return (
            <div className='itemList' key={libros.id}>
                <NavLink to={`/books/${libros.id}`}>                
                     <Item libro={libros} />
                </NavLink>
            </div>
          )
                    }
             ) }
         </div>
        
       )
}

export default ItemList