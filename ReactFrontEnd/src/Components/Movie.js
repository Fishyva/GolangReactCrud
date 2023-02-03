import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Movie() {
    const [movie, setMovie] = useState({})
    
    let { id } = useParams()

    useEffect(() => {
        let myMovie = {
            id: 1,
            title: "Heartbreakers",
            release_date: "2001-03-23",
            runetime: 120,
            mpaa_rating: "PG-13",
            description: "Movie about a mom and daughter"
        }
        setMovie(myMovie)
    }, [id]);

    return (
        <>
            <div >
                <h2>Movie: {movie.title}</h2>
                <small><em>{movie.release_date}, {movie.runetime}, {movie.mpaa_rating}</em></small>
                <hr></hr>
                <p>{movie.description}</p>
            </div>
        </>
      );
}

export default Movie;