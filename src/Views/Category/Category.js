import {useState } from 'react'
import './Category.css';
import BotonCategoria from '../../Components/BotonCategoria/BotonCategoria'


const Category = ({books}) => {
   const [categoria, SetCategoria] = useState([books]);

   //Se esta utilizando json web server inicializar (npx json-server --watch .\public\libros.json -p 8000)
   console.log(books)
   
   const ficcion = books.filter(e => e.categoria === 'ficcion');
   const drama = books.filter(e => e.categoria === 'drama');
   const teatro = books.filter(e => e.categoria === 'teatro');
   const existencialista = books.filter(e => e.categoria === 'existencialista');

 
   
   console.log('ficcion',ficcion)
   console.log('drama',drama)
   console.log('teatro',teatro)
   console.log('exi',existencialista)
               
              /* 
               <BotonCategoria nombreBoton={existencialista} />
               <BotonCategoria nombreBoton={teatro} /> 
               <BotonCategoria btnCategory={books}/>*/
  
   return (
            
           <div className='category' >   
           
               <BotonCategoria cat={categoria}/> 
                
            </div>            
         )             





}
   

export default Category