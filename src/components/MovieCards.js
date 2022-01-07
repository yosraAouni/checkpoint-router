import React from 'react'
import {Card} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


function MovieCards({title,rate,description, url,id}) {
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
                    <Link to={`${id}`}>See details</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCards
