import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


const BotonCategoria = ({cat}) => {
  const [catLibro, setCatLibro] = useState([]);

  useEffect(() => {
      setCatLibro(cat)
     
  }, [cat])
  
    console.log(catLibro)
   const  handleCategory = () => {
      
   }

    
    return (
        <div>
            
           <NavLink to='/'><Button content='Todas' secondary/> </NavLink>
           <NavLink to='/category/1'>
               <Button content='Ficcion' secondary onClick={handleCategory}/> 
            </NavLink>
           <NavLink to='/category/2'> 
                <Button content='Drama' secondary onClick={handleCategory}/> 
            </NavLink>
           <NavLink to='/category/3'>
                <Button content='Existencialista' secondary onClick={handleCategory}/>
             </NavLink>
           <NavLink to='/category/4'> 
                <Button content='Teatro' secondary onClick={handleCategory}/> 
            </NavLink>
           
        </div>
    )
}

export default BotonCategoria
