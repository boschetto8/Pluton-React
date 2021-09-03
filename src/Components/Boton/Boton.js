import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

 

const Boton = () => {
    


    return (
        <div>
             <NavLink to='/cart'>
                 <Button primary >Comprar</Button>
            </NavLink>
        </div>
    )
}

export default Boton
