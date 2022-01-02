import React from 'react'
import {Card,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

function MovieCards({title,rate,description, url}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Title><ReactStars
                                count={rate}
                                size={24}
                                color="#ffd700"
                            /></Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="primary">See details</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCards
