import './ItemList.css'
import  Item from '../Item/Item'
import { NavLink } from 'react-router-dom';

const ItemList = ({books}) => {
    


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