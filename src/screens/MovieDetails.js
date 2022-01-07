import React from 'react'
import { useParams } from 'react-router-dom'
import { moviesData } from '../data'

function MovieDetails() {
    const {variable} = useParams ()
    return (
        <div>
            <iframe 
            width="300"
            height="200"
            src={moviesData.find(el=>el.id==variable).trailer} >
</iframe>

        </div>
    )
}

export default MovieDetails
