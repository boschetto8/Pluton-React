import {Card, Image} from 'semantic-ui-react'
import {useState, useEffect} from 'react'

const BookDetail = ({match}) => {
    const bookID = match.params.id
    const [libro, setLibro] = useState([]);
    console.log(libro)
    useEffect(() => {
        fetch(`http://localhost:3000/libros.json/${bookID}`)
        .then((response) => response.json())
        .then((data) => setLibro(data));       
         }, [bookID]);

           return (
               <div>
               {libro.map((book)=>{
                return (
                    <Card>
                        <Image src={book.imagen} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{book.nombre}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{book.autor}</span>
                            </Card.Meta>
                            <Card.Description>Status: {book.descripcion}</Card.Description>
                        </Card.Content>
                    </Card>
                    )
                    
                    }
                    )}
                    </div>
           )
                }
    
            
export default BookDetail
