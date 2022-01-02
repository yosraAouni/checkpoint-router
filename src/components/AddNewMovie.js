import React, { useState } from 'react'
import{Form, Button} from 'react-bootstrap'

function AddNewMovie({fun}) {
    const [newMovies, setNewMovies] = useState({})
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Movies title </Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setNewMovies({...newMovies,title:e.target.value})} />
                    <Form.Label>Movies rate</Form.Label>
                    <Form.Control type="number" placeholder="Enter rate" onChange={(e)=>setNewMovies({...newMovies,rate:e.target.value})}/>
                    <Form.Label>Movies description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setNewMovies({...newMovies,description:e.target.value})}/>
                    <Form.Label>Movies image url </Form.Label>
                    <Form.Control type="text" placeholder="Enter url"onChange={(e)=>setNewMovies({...newMovies,posterUrl:e.target.value})} />
                    
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    
                </Form.Group>
                <Button onClick={()=>fun(newMovies)} variant="primary" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddNewMovie
