import  { useState, useEffect }from 'react';
import './ItemDetail.css';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    
    const [libros, setLibros] = useState([]);
    console.log(libros)
    useEffect(() => {
        fetch('http://localhost:3000/libros.json')
        .then((response) => response.json())
        .then((data) => setLibros(data));       
         }, []);
       
    return (    
        <div classname='itemDetail'>
            {libros.map((unLibro) => {
                return(
                    <div key={unLibro.id}>
                        <ItemDetail unLibro ={ libros } />
                     </div>
                )
            })}

            
        </div>
    )
}


export default ItemDetailContainer
