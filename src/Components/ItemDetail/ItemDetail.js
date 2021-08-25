import {useState, useEffect} from 'react'
import BookDetail from '../../Views/BookDetail/BookDetail';

const ItemDetail = ({match}) => {
    const bookID = match.params.id
    const [libro, setLibro] = useState([]);
    console.log(libro)
    useEffect(() => {
        fetch(`http://localhost:3000/libros.json/${bookID}`)
        .then((response) => response.json())
        .then((data) => setLibro(data));       
         }, [bookID]);
       
    return (    
        <div classname='itemDetail'>
            {libro.map((book) => {
                return(
                    <div key={book.id}>
                        <BookDetail prop ={book}/>
                     </div>
                )
            })}

            
        </div>
        )
       
}

export default ItemDetail
