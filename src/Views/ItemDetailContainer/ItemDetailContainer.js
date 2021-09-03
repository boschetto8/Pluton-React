import React, {useState, useEffect} from 'react'
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = ({ match }) => {
    console.log(match)
    let bookID = match.params.id;
    console.log(bookID)
    const [book, setBook] = useState([]);
    //Se esta utilizando json web server inicializar (npx json-server --watch .\public\libros.json -p 8000)
    console.log(book)
    useEffect(() => {
       fetch(`http://localhost:8000/books/${bookID}`)
       .then((response) => response.json())
       .then((data) => setBook(data));
    }, [bookID]);

    return (
            <div className='detailContainer'>               
                <ItemDetail data={book}/> 
             </div>            
    		)             
                 
           
    
}

export default ItemDetailContainer
