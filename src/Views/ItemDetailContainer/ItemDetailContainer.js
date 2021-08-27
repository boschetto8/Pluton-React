import  { useState, useEffect }from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';


const ItemDetailContainer = ({match}) => {
    let bookID = match.params.id;
    console.log(match)
    console.log(bookID)
    
    const [book, setBook] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/libros.json/')
        .then((res) => res.json())
        .then((data) => setBook(data));              
         }, []);      
       
    return (    
        <div className='itemDetail'>
            {book.map((libro) =>  {
                return(                    
                    <div key={libro.id}>
                        <ItemDetail data={ libro }/>
                     </div>
                )
            })}

            
        </div>
    )
}


export default ItemDetailContainer
