import React, {useState, useEffect} from 'react'
import CategoryDetail from '../../Components/CategoryDetail/CategoryDetail';


const Category = ({ match }) => {
    console.log(match)
    let categoryBook = match.params.categoria;
    console.log(categoryBook)
    const [categoria, setCategoria] = useState([]);
    //Se esta utilizando json web server inicializar (npx json-server --watch .\public\libros.json -p 8000)
    console.log(categoryBook)
    useEffect(() => {
       fetch(`http://localhost:8000/books/${categoryBook}`)
       .then((response) => response.json())
       .then((data) => setCategoria(data));
    }, [categoryBook]);

    return (
            <div className='detailContainer'>               
                <CategoryDetail data={categoria}/> 
             </div>            
    		)             
                 
           
    
}

export default Category;