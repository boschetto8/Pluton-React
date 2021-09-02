import React, {useState, useEffect} from 'react'
import Category from '../../Views/Category/Category'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [books, setBooks] = useState([]);
   
    //Se esta utilizando json web server inicializar (npx json-server --watch .\public\libros.json -p 8000)
    useEffect(() => {
        fetch('http://localhost:8000/books')
        .then((response) => response.json())
        .then((data) => setBooks(data));
        
        }, []); 

    return (
        <div className='itemListContainer'>
            <Category books={books}/>
            <ItemList books={books}/>
        </div>
    )
}

export default ItemListContainer
