import {useState } from 'react'
import './Category.css';
import BotonCategoria from '../../Components/BotonCategoria/BotonCategoria'


const Category = ({books}) => {
   const [categoria, SetCategoria] = useState([books]);

   
   console.log(books)
   
   const ficcion = books.filter(e => e.categoria === 'ficcion');
   const drama = books.filter(e => e.categoria === 'drama');
   const teatro = books.filter(e => e.categoria === 'teatro');
   const existencialista = books.filter(e => e.categoria === 'existencialista');

 
   
   console.log('ficcion',ficcion)
   console.log('drama',drama)
   console.log('teatro',teatro)
   console.log('exi',existencialista)
        
  
   return (            
           <div className='category' >              
               <BotonCategoria cat={categoria}/>                 
            </div>            
         )             
}
   

export default Category